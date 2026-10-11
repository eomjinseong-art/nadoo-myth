#!/usr/bin/env python3
"""Rebuild data/sky/*.json from d3-celestial's BSD-3 data files.

The site does not call this during `next build`. The slim JSON is already
committed. Run it only when refreshing the bundled catalog.

Sources (see data/sky/DATA-LICENSE.md):
  https://github.com/ofrohn/d3-celestial  data/stars.6.json
  https://github.com/ofrohn/d3-celestial  data/constellations.lines.json
  https://github.com/ofrohn/d3-celestial  data/constellations.json
"""

from __future__ import annotations

import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "sky"
RAW = "https://raw.githubusercontent.com/ofrohn/d3-celestial/master/data"
FILES = {
    "stars.6.json": "stars.6.json",
    "constellations.lines.json": "lines-raw.json",
    "constellations.json": "constellations-raw.json",
}


def fetch(name: str):
    url = f"{RAW}/{name}"
    with urllib.request.urlopen(url, timeout=60) as res:
        return json.load(res)


def ra_of(lon: float) -> float:
    return lon if lon >= 0 else lon + 360


def main() -> None:
    stars = fetch("stars.6.json")
    lines = fetch("constellations.lines.json")
    cons = fetch("constellations.json")
    rows = []
    for feat in stars["features"]:
        lon, dec = feat["geometry"]["coordinates"]
        try:
            bv = float(feat["properties"].get("bv"))
        except (TypeError, ValueError):
            bv = 0.4
        rows.append(
            [
                int(feat["id"]),
                round(ra_of(lon), 4),
                round(float(dec), 4),
                round(float(feat["properties"]["mag"]), 2),
                round(bv, 3),
            ]
        )
    if 10826 not in {row[0] for row in rows}:
        rows.append([10826, 34.8366, -2.9776, 3.4, 1.42])
    rows.sort()

    line_map: dict[str, list] = {}
    for feat in lines["features"]:
        segs = []
        for seg in feat["geometry"]["coordinates"]:
            pts = [[round(ra_of(lon), 4), round(float(dec), 4)] for lon, dec in seg]
            if len(pts) >= 2:
                segs.append(pts)
        line_map.setdefault(feat["id"], []).extend(segs)

    overrides = {"Cep": "케페우스자리", "Her": "헤르쿨레스자리"}
    names = {}
    for feat in cons["features"]:
        cid = feat["id"]
        names[cid] = overrides.get(cid, feat["properties"]["ko"])

    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "stars.json").write_text(json.dumps(rows, separators=(",", ":")))
    (OUT / "lines.json").write_text(json.dumps(line_map, ensure_ascii=False, separators=(",", ":")))
    (OUT / "con-names.json").write_text(json.dumps(names, ensure_ascii=False, separators=(",", ":")))
    print(f"stars {len(rows)}  lines {len(line_map)}  names {len(names)}")


if __name__ == "__main__":
    main()
