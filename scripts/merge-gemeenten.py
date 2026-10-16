"""Voegt de onderzoeksbestanden per gemeente samen tot lib/data/gemeenten.json.
Gebruik: python3 scripts/merge-gemeenten.py <map met gemeenten-a..d.json>"""
import json, sys, re, pathlib

src = pathlib.Path(sys.argv[1])
volgorde = ["hasselt","genk","sint-truiden","maasmechelen","tongeren","lommel","bilzen","maaseik","lanaken","pelt",
            "beringen","leopoldsburg","tessenderlo","heusden-zolder","diepenbeek","zonhoven","peer","lummen","riemst",
            "houthalen-helchteren","bree","dilsen-stokkem","kinrooi","alken"]
alle = {}
for f in "abcd":
    for g in json.load(open(src / f"gemeenten-{f}.json", encoding="utf-8")):
        alle[g["slug"]] = g

def schoon(t):
    if t is None: return None
    t = t.replace("—", ", ").replace("–", " tot ").replace("  ", " ")
    return t.strip()

uit = []
for slug in volgorde:
    g = alle[slug]
    off = re.sub(r"^(Stad|Gemeente)\s+", "", g.get("officieleNaam") or g["naam"])
    pv = g.get("parkeerverbod") or {}
    bijz = []
    for b in g.get("bijzonderheden") or []:
        if isinstance(b, dict):
            bijz.append({"tekst": schoon(b.get("tekst")), "bron": b.get("bron_url")})
        else:
            bijz.append({"tekst": schoon(b), "bron": None})
    park = g.get("recyclagepark") or {}
    inw = g.get("inwoners") or {}
    uit.append({
        "slug": slug,
        "naam": g["naam"],
        "officieleNaam": off,
        "postcodes": g.get("postcodes") or [],
        "deelgemeenten": [d for d in (g.get("deelgemeenten") or []) if d],
        "wijken": g.get("wijken") or [],
        "buurgemeenten": g.get("buurgemeenten") or [],
        "streek": schoon(g.get("streek")),
        "inwoners": {"aantal": inw.get("aantal"), "jaar": inw.get("jaar"), "bron": inw.get("bron_url")} if inw.get("aantal") else None,
        "woonprofiel": schoon(g.get("woonprofiel")),
        "parkeerverbod": {k: schoon(pv.get(k)) if k != "url" else pv.get(k) for k in ["procedure","url","termijn","kostprijs","borden","opmerking"]},
        "adreswijzigingUrl": g.get("adreswijziging_url"),
        "recyclagepark": {"naam": schoon(park.get("naam")), "adres": schoon(park.get("adres")), "url": park.get("url")} if park.get("naam") else None,
        "bijzonderheden": [b for b in bijz if b["tekst"]],
        "bronnen": g.get("bronnen") or [],
    })
out = pathlib.Path("lib/data/gemeenten.json")
out.write_text(json.dumps(uit, ensure_ascii=False, indent=2), encoding="utf-8")
print(len(uit), "gemeenten ->", out)
txt = out.read_text(encoding="utf-8")
print("em/en dashes over:", txt.count("—"), txt.count("–"))
