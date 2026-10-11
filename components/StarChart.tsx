"use client";

import { useState } from "react";
import { StarChartSvg } from "@/components/StarChartSvg";
import type { ChartModel } from "@/lib/starchart/chart";

export function StarChart({ chart, names }: { chart: ChartModel; names: { bayer: string; ko: string; latin: string }[] }) {
  const [on, setOn] = useState(false);
  const [cycle, setCycle] = useState(0);
  return (
    <figure className="mt-6">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          aria-pressed={on}
          onClick={() =>
            setOn((value) => {
              if (!value) setCycle((count) => count + 1);
              return !value;
            })
          }
          className={
            on
              ? "rounded-full border border-gold bg-gold/15 px-3 py-1.5 text-sm text-gold"
              : "rounded-full border border-line bg-card px-3 py-1.5 text-sm text-ink hover:border-gold"
          }
        >
          그림 겹쳐 보기
        </button>
        <span className="text-xs text-muted">별 위에 신화 속 모습을 겹칩니다.</span>
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-line">
        <StarChartSvg chart={chart} figureOn={on} figureKey={cycle} />
      </div>
      <figcaption className="mt-2 text-xs leading-5 text-muted">
        북쪽을 위로, 동쪽을 왼쪽으로 둔 성도입니다. 남쪽 하늘을 볼 때는 그림과 같고, 북쪽 하늘을 볼 때는 좌우가 바뀌어 보입니다. 점의 크기는 밝기입니다.
      </figcaption>
      <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] leading-5 text-muted">
        {names.map((name) => (
          <li key={`${name.bayer}-${name.ko}-${name.latin}`}>
            <span className="text-ink">
              {name.bayer} {name.ko}
            </span>
            {name.latin ? ` ${name.latin}` : null}
          </li>
        ))}
      </ul>
    </figure>
  );
}
