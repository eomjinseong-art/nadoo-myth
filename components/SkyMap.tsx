import { buildSky, skyViewBox, type Season } from "@/lib/starchart/sky";

export function SkyMap({ season }: { season: Season }) {
  const sky = buildSky(season);
  const frame = skyViewBox();
  const edge = [
    { label: "북", x: frame.cx, y: frame.cy - frame.radius - 14 },
    { label: "남", x: frame.cx, y: frame.cy + frame.radius + 16 },
    { label: "동", x: frame.cx - frame.radius - 16, y: frame.cy + 4 },
    { label: "서", x: frame.cx + frame.radius + 16, y: frame.cy + 4 },
  ];
  return (
    <svg viewBox={`0 0 ${frame.width} ${frame.height}`} role="img" aria-label={`${season.ko} 저녁 하늘, ${season.when}`} className="skymap h-auto w-full font-sans">
      <defs>
        <radialGradient id={`season-${season.id}`} cx="50%" cy="46%" r="62%">
          <stop offset="0%" stopColor="#243456" />
          <stop offset="70%" stopColor="#10182e" />
          <stop offset="100%" stopColor="#0a1020" />
        </radialGradient>
      </defs>
      <rect width={frame.width} height={frame.height} fill="#16130e" rx={12} />
      <circle cx={frame.cx} cy={frame.cy} r={frame.radius} fill={`url(#season-${season.id})`} stroke="rgba(214,196,150,0.45)" strokeWidth={1} />
      {sky.stars.map((star, index) => (
        <circle key={index} cx={star.x} cy={star.y} r={star.r} fill={star.color} opacity={star.mag < 2 ? 1 : 0.85} />
      ))}
      {sky.lines.map((d, index) => (
        <path key={index} d={d} fill="none" stroke="rgba(214,226,242,0.8)" strokeWidth={1} strokeLinecap="round" />
      ))}
      {sky.polaris ? (
        <g>
          <circle cx={sky.polaris.x} cy={sky.polaris.y} r={2.1} fill="#fff6d8" />
          <text x={sky.polaris.x + 5} y={sky.polaris.y - 4} fill="#d9e4f4" fontSize={8}>
            북극성
          </text>
        </g>
      ) : null}
      {sky.links.map((link) => (
        <a key={link.slug} href={`/constellations/${link.slug}`}>
          <circle cx={link.x} cy={link.y} r={16} fill="transparent" />
          <text x={link.x} y={link.y} textAnchor="middle" fill="#f3f6fb" fontSize={11} stroke="#0b1224" strokeWidth={3} paintOrder="stroke">
            {link.name.replace("자리", "")}
          </text>
        </a>
      ))}
      {edge.map((item) => (
        <text key={item.label} x={item.x} y={item.y} textAnchor="middle" fill="#d8c59a" fontSize={11}>
          {item.label}
        </text>
      ))}
    </svg>
  );
}
