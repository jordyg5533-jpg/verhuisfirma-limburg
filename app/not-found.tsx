import Link from "next/link";

export default function NietGevonden() {
  return (
    <section className="sectie">
      <div className="wrap max-w-2xl text-center">
        <p className="etiket justify-center">Fout 404</p>
        <h1 className="mt-3 !text-4xl">Deze pagina is verhuisd of bestaat niet</h1>
        <p className="mt-4 text-lg text-ink-700">Kijk even bij de gemeenten of in de verhuisgids.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="knop-donker">Naar de startpagina</Link>
          <Link href="/gemeenten" className="knop-rand">Alle gemeenten</Link>
        </div>
      </div>
    </section>
  );
}
