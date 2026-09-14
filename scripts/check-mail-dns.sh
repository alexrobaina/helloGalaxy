#!/usr/bin/env bash
# Check the mail authentication records for hellogalaxy.dev.
# Queries an authoritative nameserver so results are never stale cache.
#
#   ./scripts/check-mail-dns.sh [domain]

set -uo pipefail
DOMAIN="${1:-hellogalaxy.dev}"
NS=$(dig +short "$DOMAIN" NS | head -1)
NS="${NS:-8.8.8.8}"
fail=0

echo "domain: $DOMAIN   (authoritative: $NS)"
echo

check() { # label, expected-substring, dig-output
  local label="$1" want="$2" got="$3"
  if [ -z "$got" ]; then
    printf '  %-14s MISSING\n' "$label"; fail=1
  elif [ -n "$want" ] && ! grep -qi -- "$want" <<<"$got"; then
    printf '  %-14s UNEXPECTED: %s\n' "$label" "$(tr '\n' ' ' <<<"$got")"; fail=1
  else
    printf '  %-14s ok  %s\n' "$label" "$(tr '\n' ' ' <<<"$got" | cut -c1-70)"
  fi
}

check "MX"        "smtp.google.com" "$(dig @"$NS" +short "$DOMAIN" MX)"
check "SPF"       "include:_spf.google.com" \
                  "$(dig @"$NS" +short "$DOMAIN" TXT | grep -i 'v=spf1' || true)"
check "DKIM/google" "v=DKIM1" \
                  "$(dig @"$NS" +short google._domainkey."$DOMAIN" TXT | cut -c1-40)"
check "DKIM/resend" "" \
                  "$(dig @"$NS" +short resend._domainkey."$DOMAIN" TXT | cut -c1-40)"
check "DMARC"     "v=DMARC1" "$(dig @"$NS" +short _dmarc."$DOMAIN" TXT)"

echo
spf_count=$(dig @"$NS" +short "$DOMAIN" TXT | grep -ci 'v=spf1' || true)
if [ "$spf_count" -gt 1 ]; then
  echo "  ERROR: $spf_count SPF records. More than one makes SPF fail for all senders."
  fail=1
fi

[ "$fail" -eq 0 ] && echo "all records present" || echo "incomplete — see MISSING above"
exit "$fail"
