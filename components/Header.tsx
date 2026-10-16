import Link from "next/link";
import { Menu } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./Illustraties";

const nav = [
  { href: "/diensten", label: "Diensten" },
  { href: "/gemeenten", label: "Gemeenten" },
  { href: "/kennis/wat-kost-een-verhuisfirma", label: "Prijzen" },
  { href: "/kennis", label: "Verhuisgids" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-kraft-200 bg-kraft-50/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label={`${site.naam}, naar de startpagina`}>
          <Logo className="h-9 w-9" />
          <span className="font-display text-lg font-extrabold leading-none text-ink">
            Verhuisfirma <span className="text-signaal">Limburg</span>
          </span>
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="font-display text-[0.95rem] font-bold text-ink no-underline hover:text-signaal-600">
              {n.label}
            </Link>
          ))}
          <Link href="/offerte" className="knop-primair !px-4 !py-2.5 text-sm">
            Offerte aanvragen
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border-2 border-ink" aria-label="Menu openen">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </summary>
          <nav aria-label="Hoofdmenu mobiel" className="absolute right-0 top-12 w-64 rounded-lg border border-kraft-200 bg-white p-3 shadow-lg">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="block rounded px-3 py-2.5 font-display font-bold text-ink no-underline hover:bg-kraft-100">
                {n.label}
              </Link>
            ))}
            <Link href="/offerte" className="knop-primair mt-2 w-full">
              Offerte aanvragen
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
