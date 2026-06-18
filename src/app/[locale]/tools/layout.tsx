import { ReactNode } from 'react';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

/**
 * Shared shell for every micro-app under /tools.
 * Keeps a consistent header/footer so new tools are fast to build and
 * stay visually cohesive with the Hello Galaxy brand.
 */
export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-gray-950/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <Link
            href="/"
            className="font-semibold text-indigo-100 hover:text-white transition-colors"
          >
            Hello Galaxy
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/tools"
              className="text-sm text-indigo-100 hover:text-white transition-colors"
            >
              Tools
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        <div className="container mx-auto px-4">
          <Link href="/" className="hover:text-white transition-colors">
            ← Back to Hello Galaxy
          </Link>
        </div>
      </footer>
    </div>
  );
}
