import { constellationBySlug } from "@/data/constellations";
import { StarChartSvg } from "@/components/StarChartSvg";
import { getChart } from "@/lib/starchart/chart";

export function MiniStarChart({ slug }: { slug: string }) {
  const constellation = constellationBySlug.get(slug);
  if (!constellation) return null;
  const chart = getChart(constellation, true);
  return (
    <div className="overflow-hidden rounded-md bg-[#070b14]">
      <StarChartSvg chart={chart} />
    </div>
  );
}
