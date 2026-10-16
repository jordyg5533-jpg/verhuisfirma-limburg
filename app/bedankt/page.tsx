import type { Metadata } from "next";
import Link from "next/link";
import { DozenStapel } from "@/components/Illustraties";

export const metadata: Metadata = {
  title: "Bedankt voor je aanvraag",
  description: "Je offerteaanvraag is verstuurd.",
  alternates: { canonical: "/bedankt" },
  robots: { index: false, follow: true },
};

export default function Bedankt() {
  return (
    <section className="sectie">
      <div className="wrap max-w-2xl text-center">
        <DozenStapel className="mx-auto w-40" />
        <h1 className="mt-6 !text-4xl">Bedankt, je aanvraag is verstuurd</h1>
        <p className="mt-4 text-lg text-ink-700">
          Een verhuisfirma uit jouw streek neemt contact met je op. Intussen kan je alvast het parkeerverbod
          bekijken: dat bepaalt vaak je planning.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/kennis/parkeerverbod-aanvragen-verhuis" className="knop-donker">Parkeerverbod per gemeente</Link>
          <Link href="/kennis/checklist-verhuizen" className="knop-rand">Checklist verhuizen</Link>
        </div>
      </div>
    </section>
  );
}
