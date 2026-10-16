// Eigen illustraties in plaats van stockfoto's. Vervang ze door echte foto's
// van de verhuisfirma zodra er een partner is (zie README).

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="3" y="12" width="34" height="24" rx="2" fill="#c9a47c" />
      <path d="M3 14 L20 4 L37 14 Z" fill="#a9825a" />
      <rect x="17" y="12" width="6" height="24" fill="#e4572e" />
      <rect x="6" y="27" width="8" height="5" rx="1" fill="#132238" opacity=".85" />
    </svg>
  );
}

/** Gevel met ladderlift: de hoofdillustratie van de site. */
export function HeroLift({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 440" className={className} role="img" aria-label="Tekening van een verhuislift tegen een gevel met drie verdiepingen, met een verhuiswagen ernaast">
      {/* grond */}
      <rect x="0" y="392" width="520" height="48" fill="#ead9c3" />
      <rect x="0" y="392" width="520" height="6" fill="#c9a47c" />

      {/* gebouw */}
      <rect x="250" y="60" width="230" height="332" fill="#f6f0e6" stroke="#132238" strokeWidth="4" />
      <rect x="250" y="60" width="230" height="22" fill="#132238" />
      {[0, 1, 2].map((v) => (
        <g key={v}>
          <rect x="278" y={108 + v * 96} width="64" height="62" fill="#fff" stroke="#132238" strokeWidth="4" />
          <line x1="310" y1={108 + v * 96} x2="310" y2={170 + v * 96} stroke="#132238" strokeWidth="3" />
          <rect x="388" y={108 + v * 96} width="64" height="62" fill="#fff" stroke="#132238" strokeWidth="4" />
          <line x1="420" y1={108 + v * 96} x2="420" y2={170 + v * 96} stroke="#132238" strokeWidth="3" />
          <rect x="270" y={172 + v * 96} width="80" height="6" fill="#132238" />
        </g>
      ))}
      {/* open raam tweede verdieping */}
      <rect x="278" y="108" width="64" height="62" fill="#132238" />
      <path d="M278 108 L262 116 L262 176 L278 170 Z" fill="#fff" stroke="#132238" strokeWidth="3" />
      {/* deur */}
      <rect x="402" y="322" width="44" height="70" fill="#132238" />
      <circle cx="438" cy="358" r="3" fill="#c9a47c" />

      {/* ladderlift */}
      <g>
        <line x1="92" y1="388" x2="296" y2="150" stroke="#132238" strokeWidth="9" strokeLinecap="round" />
        <line x1="112" y1="394" x2="316" y2="156" stroke="#132238" strokeWidth="9" strokeLinecap="round" />
        {Array.from({ length: 11 }).map((_, i) => {
          const t = i / 11;
          const x1 = 92 + (296 - 92) * t;
          const y1 = 388 + (150 - 388) * t;
          return <line key={i} x1={x1} y1={y1} x2={x1 + 20} y2={y1 + 6} stroke="#132238" strokeWidth="4" />;
        })}
        {/* onderstel */}
        <rect x="52" y="372" width="92" height="22" rx="4" fill="#132238" />
        <circle cx="72" cy="398" r="11" fill="#132238" />
        <circle cx="72" cy="398" r="4" fill="#ead9c3" />
        <circle cx="126" cy="398" r="11" fill="#132238" />
        <circle cx="126" cy="398" r="4" fill="#ead9c3" />
        <line x1="60" y1="372" x2="40" y2="396" stroke="#132238" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* plateau met dozen, onderweg naar boven */}
      <g transform="translate(212 250)">
        <path d="M-6 0 L26 0 L8 22 Z" fill="#132238" />
        <rect x="-44" y="-10" width="84" height="10" rx="2" fill="#e4572e" />
        <rect x="-36" y="-52" width="40" height="42" fill="#c9a47c" stroke="#132238" strokeWidth="3" />
        <rect x="-20" y="-52" width="7" height="42" fill="#e4572e" />
        <rect x="8" y="-38" width="26" height="28" fill="#ead9c3" stroke="#132238" strokeWidth="3" />
      </g>

      {/* stapel dozen op de grond */}
      <g>
        <rect x="150" y="346" width="52" height="46" fill="#c9a47c" stroke="#132238" strokeWidth="3" />
        <rect x="172" y="346" width="8" height="46" fill="#e4572e" />
        <rect x="204" y="360" width="38" height="32" fill="#ead9c3" stroke="#132238" strokeWidth="3" />
        <rect x="160" y="314" width="36" height="32" fill="#ead9c3" stroke="#132238" strokeWidth="3" />
      </g>
    </svg>
  );
}

export function Vrachtwagen({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 120" className={className} aria-hidden="true">
      <rect x="6" y="18" width="150" height="74" rx="4" fill="#c9a47c" stroke="#132238" strokeWidth="4" />
      <rect x="70" y="18" width="14" height="74" fill="#e4572e" />
      <path d="M156 42 h44 l28 26 v24 h-72 z" fill="#132238" />
      <path d="M170 50 h26 l16 16 h-42 z" fill="#f6f0e6" />
      <circle cx="52" cy="96" r="15" fill="#132238" />
      <circle cx="52" cy="96" r="6" fill="#ead9c3" />
      <circle cx="190" cy="96" r="15" fill="#132238" />
      <circle cx="190" cy="96" r="6" fill="#ead9c3" />
    </svg>
  );
}

export function DozenStapel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden="true">
      <rect x="20" y="84" width="76" height="66" fill="#c9a47c" stroke="#132238" strokeWidth="4" />
      <rect x="52" y="84" width="12" height="66" fill="#e4572e" />
      <rect x="100" y="100" width="72" height="50" fill="#ead9c3" stroke="#132238" strokeWidth="4" />
      <rect x="44" y="30" width="64" height="54" fill="#ead9c3" stroke="#132238" strokeWidth="4" />
      <rect x="70" y="30" width="10" height="54" fill="#132238" />
      <rect x="116" y="58" width="44" height="42" fill="#c9a47c" stroke="#132238" strokeWidth="4" />
    </svg>
  );
}
