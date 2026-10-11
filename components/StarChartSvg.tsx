import type { ChartModel } from "@/lib/starchart/chart";

export function StarChartSvg({
  chart,
  figureOn = false,
  figureKey = 0,
}: {
  chart: ChartModel;
  figureOn?: boolean;
  figureKey?: number;
}) {
  const compact = chart.labels.length === 0;
  const gid = `night-${chart.slug}${compact ? "-m" : ""}`;
  return (
    <svg
      viewBox={`0 0 ${chart.width} ${chart.height}`}
      role="img"
      aria-label={chart.title}
      className="h-auto w-full font-sans"
      shapeRendering="geometricPrecision"
    >
      <defs>
        <radialGradient id={gid} cx="50%" cy="42%" r="78%">
          <stop offset="0%" stopColor="#1c2948" />
          <stop offset="55%" stopColor="#0c1326" />
          <stop offset="100%" stopColor="#070b14" />
        </radialGradient>
      </defs>
      <rect width={chart.width} height={chart.height} rx={compact ? 8 : 12} fill={`url(#${gid})`} />
      {chart.neighborLines.map((d, i) => (
        <path key={`n-${i}`} d={d} fill="none" stroke="rgba(160,178,204,0.28)" strokeWidth={0.6} />
      ))}
      {chart.ownLines.map((d, i) => (
        <path key={`o-${i}`} d={d} fill="none" stroke="rgba(198,214,236,0.72)" strokeWidth={0.85} strokeLinejoin="round" strokeLinecap="round" />
      ))}
      {chart.asterismPaths.map((d, i) => (
        <path key={`a-${i}`} d={d} fill="none" stroke="#e6c98a" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
      ))}
      {chart.markers.map((marker) => (
        <g key={marker.label}>
          <ellipse cx={marker.x} cy={marker.y} rx={marker.rx} ry={marker.ry} fill="none" stroke="rgba(186,206,232,0.7)" strokeWidth={0.6} strokeDasharray="1.5 1.2" />
          <text x={marker.lx} y={marker.ly} fill="#b7c6dc" fontSize={7.5}>
            {marker.label}
          </text>
        </g>
      ))}
      {chart.stars.map((star) => (
        <g key={star.hip}>
          {star.glow ? <circle cx={star.x} cy={star.y} r={star.r * 3.4} fill={star.color} opacity={0.2} /> : null}
          <circle cx={star.x} cy={star.y} r={star.r} fill={star.color}>
            <title>{star.mag.toFixed(1)}등</title>
          </circle>
        </g>
      ))}
      {chart.figures.length ? (
        <g key={figureKey} className={figureOn ? "starchart-figure is-on" : "starchart-figure"}>
          {chart.figures.map((d, i) => (
            <path key={i} d={d} pathLength={1} style={{ animationDelay: `${i * 0.11}s` }} />
          ))}
        </g>
      ) : null}
      {chart.neighbors.map((item) => (
        <text key={item.text} x={item.x} y={item.y} textAnchor="middle" fill="rgba(186,198,216,0.55)" fontSize={8}>
          {item.text}
        </text>
      ))}
      {chart.asterismLabels.map((item) => (
        <text
          key={item.text}
          x={item.x}
          y={item.y}
          textAnchor="middle"
          fill="#f0d48a"
          fontSize={8.5}
          stroke="#070b14"
          strokeWidth={2.5}
          paintOrder="stroke"
        >
          {item.text}
        </text>
      ))}
      {chart.labels.map((label) => (
        <text key={`${label.line1}-${label.x}`} x={label.x} y={label.y} textAnchor={label.anchor} fill="#eef3fb" fontSize={9.2}>
          {label.line1}
          {label.line2 ? (
            <tspan x={label.x} dy={9.2} fill="#9aadc4" fontSize={7.4}>
              {label.line2}
            </tspan>
          ) : null}
        </text>
      ))}
      {compact ? null : (
        <g fill="none" stroke="#9eb0c8" strokeWidth={0.8} opacity={0.8}>
          <path d="M16 20 V9 M13 12 L16 9 L19 12" />
          <text x="22" y="16" fill="#9eb0c8" stroke="none" fontSize={8}>
            북
          </text>
        </g>
      )}
    </svg>
  );
}
