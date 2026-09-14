#!/usr/bin/env python3
"""Report key drift between messages/en-US.json and messages/es-ES.json.

Exit 0 when the two locales have identical key sets, 1 otherwise.
"""
import json
import sys


def keys(node, prefix=""):
    out = set()
    for key, value in node.items():
        path = prefix + key
        if isinstance(value, dict):
            out |= keys(value, path + ".")
        else:
            out.add(path)
    return out


def main():
    en = keys(json.load(open("messages/en-US.json")))
    es = keys(json.load(open("messages/es-ES.json")))
    missing_es = sorted(en - es)
    missing_en = sorted(es - en)
    for label, missing in (("es-ES", missing_es), ("en-US", missing_en)):
        print(f"missing in {label}: {missing if missing else 'none'}")
    return 1 if (missing_es or missing_en) else 0


sys.exit(main())
