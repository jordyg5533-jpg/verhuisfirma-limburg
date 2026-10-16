import Link from "next/link";
import { site } from "@/lib/site";
import { diensten } from "@/lib/diensten";
import { gemeenten } from "@/lib/gemeenten";
import { artikels } from "@/lib/kennis";
import { Logo } from "./Illustraties";

export function Footer() {
  const u = site.uitgever;
  return (
    <footer className="mt-10 bg-ink text-kraft-100">
      <div className="tape" aria-hidden="true" />
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg font-extrabold text-white">{site.naam}</span>
          </div>
          <p className="mt-4 max-w-sm text-[0.95rem] text-kraft-200">
            Een gids over verhuizen in Limburg. Wij voeren zelf geen verhuizingen uit. Je
            offerteaanvraag bezorgen we aan een verhuisfirma die in jouw gemeente werkt.
          </p>
          <p className="mt-4 text-sm text-ink-300">Prijzen en gemeentegegevens nagekeken op {site.nagekekenOp}.</p>
        </div>

        <nav aria-label="Diensten">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-kraft">Diensten</h2>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            {diensten.map((d) => (
              <li key={d.slug}>
                <Link href={`/diensten/${d.slug}`} className="text-kraft-100 no-underline hover:text-white hover:underline">
                  {d.naam}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Gemeenten">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-kraft">Verhuisfirma per gemeente</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.95rem]">
            {gemeenten.map((g) => (
              <li key={g.slug}>
                <Link href={`/${g.slug}`} className="text-kraft-100 no-underline hover:text-white hover:underline">
                  {g.naam}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Verhuisgids">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-kraft">Verhuisgids</h2>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            {artikels.map((a) => (
              <li key={a.slug}>
                <Link href={`/kennis/${a.slug}`} className="text-kraft-100 no-underline hover:text-white hover:underline">
                  {a.titel.split(":")[0]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-ink-700">
        <div className="wrap flex flex-col gap-3 py-6 text-sm text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.naam}
            {u.naam ? `, een website van ${u.naam}` : ""}
            {u.ondernemingsnummer ? ` (${u.ondernemingsnummer})` : ""}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li><Link href="/over" className="text-ink-300 hover:text-white">Over deze site</Link></li>
            <li><Link href="/privacy" className="text-ink-300 hover:text-white">Privacy</Link></li>
            <li><Link href="/offerte" className="text-ink-300 hover:text-white">Offerte aanvragen</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
