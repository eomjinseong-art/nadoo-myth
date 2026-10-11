import type { CastMember, Panel } from "@/data/webtoon/types";
import { CHAR_FRAME, Char } from "@/components/webtoon/characters";
import { Background, ScenePropGraphic } from "@/components/webtoon/scenery";

function transformOf(member: CastMember) {
  const frame = CHAR_FRAME[member.id];
  const s = member.scale ?? 1;
  const flip = member.flip ? -1 : 1;
  return `translate(${member.x} ${member.y}) scale(${flip * s} ${s}) translate(${-frame.footX} ${-frame.footY})`;
}

function Bubble({ speaker, text, align }: { speaker?: string; text: string; align?: "start" | "end" }) {
  const end = align === "end";
  return (
    <div
      className={`max-w-[48%] rounded-2xl border border-[#3a3228]/15 bg-white/95 px-2.5 py-1.5 text-[13px] leading-snug break-keep text-ink shadow-sm ${
        end ? "rounded-tr-sm" : "rounded-tl-sm"
      }`}
    >
      {speaker ? <span className="mb-0.5 block text-[10px] font-semibold text-gold">{speaker}</span> : null}
      {text}
    </div>
  );
}

export function PanelView({ panel, mode = "full" }: { panel: Panel; mode?: "full" | "cover" }) {
  const uid = panel.id;
  const narration = (panel.bubbles ?? []).filter((b) => b.type === "narration");
  const start = (panel.bubbles ?? []).filter((b) => b.type === "speech" && b.align !== "end");
  const end = (panel.bubbles ?? []).filter((b) => b.type === "speech" && b.align === "end");
  const back = (panel.props ?? []).filter((p) => !p.front);
  const front = (panel.props ?? []).filter((p) => p.front);

  return (
    <figure
      className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-[#3a3228] bg-[#f6efe2]"
      aria-hidden={mode === "cover" ? true : undefined}
    >
      <svg viewBox="0 0 360 480" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <filter id={`${uid}-stone`} colorInterpolationFilters="sRGB" x="-30%" y="-30%" width="160%" height="160%">
            <feColorMatrix
              type="matrix"
              values="0.33 0.33 0.33 0 0.12  0.33 0.33 0.33 0 0.14  0.33 0.33 0.33 0 0.16  0 0 0 1 0"
            />
          </filter>
        </defs>
        <Background name={panel.bg} uid={uid} />
        {back.map((prop) => (
          <ScenePropGraphic key={`${prop.kind}-${prop.x}-${prop.y}`} kind={prop.kind} x={prop.x} y={prop.y} scale={prop.scale} />
        ))}
        {panel.cast.map((member) => (
          <g key={`${member.id}-${member.x}-${member.pose}`}>
            {member.ground !== false && member.pose !== "fly" ? (
              <ellipse cx={member.x} cy={member.y + 2} rx={24 * (member.scale ?? 1)} ry={5} fill="#2b2620" opacity="0.12" />
            ) : null}
            <g transform={transformOf(member)} filter={member.pose === "stone" ? `url(#${uid}-stone)` : undefined}>
              <Char id={member.id} pose={member.pose} look={member.look} style={member.style} variant={member.variant} />
            </g>
          </g>
        ))}
        {front.map((prop) => (
          <ScenePropGraphic key={`${prop.kind}-${prop.x}-${prop.y}-f`} kind={prop.kind} x={prop.x} y={prop.y} scale={prop.scale} />
        ))}
      </svg>
      {mode === "full" ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-col gap-1.5 p-2">
            {narration.map((bubble) => (
              <div key={bubble.text} className="rounded-lg bg-[#2b2620]/82 px-2.5 py-1.5 text-[12px] leading-snug break-keep text-white">
                {bubble.text}
              </div>
            ))}
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-1 flex-col gap-1">
                {start.map((bubble) => (
                  <Bubble key={bubble.text} speaker={bubble.speaker} text={bubble.text} align="start" />
                ))}
              </div>
              <div className="flex flex-1 flex-col items-end gap-1">
                {end.map((bubble) => (
                  <Bubble key={bubble.text} speaker={bubble.speaker} text={bubble.text} align="end" />
                ))}
              </div>
            </div>
          </div>
          {panel.sfx ? (
            <p className="pointer-events-none absolute right-3 top-[36%] z-20 rotate-[-8deg] font-serif text-4xl font-bold leading-none text-rome" style={{ textShadow: "0 2px 0 #fff" }}>
              {panel.sfx}
            </p>
          ) : null}
          <figcaption className="sr-only">{panel.alt}</figcaption>
        </>
      ) : null}
    </figure>
  );
}
