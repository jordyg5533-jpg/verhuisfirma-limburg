import { site } from "@/lib/site";
import { diensten } from "@/lib/diensten";

type Props = {
  /** Naam van de pagina, komt mee in de mail zodat je ziet welke pagina de lead opleverde. */
  bron: string;
  titel?: string;
  /** Vult het veld "van" alvast in op een gemeentepagina. */
  gemeente?: string;
  /** Selecteert alvast een dienst op een dienstpagina. */
  dienst?: string;
  id?: string;
};

/**
 * Offerteformulier zonder JavaScript: het post rechtstreeks naar Formspree
 * en stuurt door naar /bedankt. Alleen naam en telefoon zijn verplicht.
 */
export function LeadForm({ bron, titel = "Vraag een vrijblijvende offerte aan", gemeente, dienst, id = "offerte" }: Props) {
  const actie = site.formspreeId ? `https://formspree.io/f/${site.formspreeId}` : "/bedankt";
  return (
    <form id={id} action={actie} method="POST" className="rounded-xl border-2 border-ink bg-white p-5 shadow-[6px_6px_0_0_#132238] sm:p-7">
      <p className="etiket">Gratis en vrijblijvend</p>
      <h2 className="mt-2 !text-2xl">{titel}</h2>
      <p className="mt-2 text-[0.95rem] text-ink-500">
        Wij bezorgen je aanvraag aan een verhuisfirma die in jouw gemeente werkt. Je zit nergens aan vast.
      </p>

      <input type="hidden" name="_subject" value={`Offerteaanvraag verhuis via ${bron}`} />
      <input type="hidden" name="_next" value={`${site.url}/bedankt`} />
      <input type="hidden" name="_language" value="nl" />
      <input type="hidden" name="pagina" value={bron} />
      {/* Honeypot tegen spam: echte bezoekers zien dit veld niet. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-naam`} className="veldlabel">Naam</label>
          <input id={`${id}-naam`} name="naam" type="text" required autoComplete="name" className="veld" />
        </div>
        <div>
          <label htmlFor={`${id}-tel`} className="veldlabel">Telefoon</label>
          <input id={`${id}-tel`} name="telefoon" type="tel" required autoComplete="tel" inputMode="tel" className="veld" />
        </div>
        <div>
          <label htmlFor={`${id}-van`} className="veldlabel">Verhuis van <span className="font-sans font-normal text-ink-500">(gemeente)</span></label>
          <input id={`${id}-van`} name="van" type="text" defaultValue={gemeente ?? ""} className="veld" />
        </div>
        <div>
          <label htmlFor={`${id}-naar`} className="veldlabel">Naar <span className="font-sans font-normal text-ink-500">(gemeente)</span></label>
          <input id={`${id}-naar`} name="naar" type="text" className="veld" />
        </div>
        <div>
          <label htmlFor={`${id}-dienst`} className="veldlabel">Wat heb je nodig?</label>
          <select id={`${id}-dienst`} name="dienst" defaultValue={dienst ?? diensten[0].naam} className="veld">
            {diensten.map((d) => (
              <option key={d.slug} value={d.naam}>{d.naam}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-wanneer`} className="veldlabel">Wanneer?</label>
          <select id={`${id}-wanneer`} name="wanneer" defaultValue="Binnen 2 maanden" className="veld">
            <option>Binnen 2 weken</option>
            <option>Binnen 2 maanden</option>
            <option>Later</option>
            <option>Weet ik nog niet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-mail`} className="veldlabel">E-mail <span className="font-sans font-normal text-ink-500">(optioneel)</span></label>
          <input id={`${id}-mail`} name="email" type="email" autoComplete="email" className="veld" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-info`} className="veldlabel">Extra info <span className="font-sans font-normal text-ink-500">(optioneel)</span></label>
          <textarea id={`${id}-info`} name="bericht" rows={3} className="veld" placeholder="Bijvoorbeeld: appartement op de 2de verdieping, geen lift, 1 piano" />
        </div>
      </div>

      <label className="mt-4 flex items-start gap-3 text-sm text-ink-700">
        <input type="checkbox" name="akkoord" required className="mt-1 h-4 w-4 shrink-0 accent-[#e4572e]" />
        <span>
          Ik ga akkoord dat mijn gegevens bezorgd worden aan een verhuisfirma om mij een offerte te maken. Lees de{" "}
          <a href="/privacy" className="link">privacyverklaring</a>.
        </span>
      </label>

      <button type="submit" className="knop-primair mt-5 w-full text-lg">Verstuur mijn aanvraag</button>
    </form>
  );
}
