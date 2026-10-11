"use client";

import { useEffect, useState } from "react";
import type { QuizQuestion } from "@/data/webtoon/types";

const KEY = "nadoo-myth:webtoon-quiz:v1";

function readAll(): Record<string, string[]> {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const data = JSON.parse(raw) as unknown;
    if (!data || typeof data !== "object") return {};
    return data as Record<string, string[]>;
  } catch {
    return {};
  }
}

function readMissed(slug: string, known: Set<string>) {
  const ids = readAll()[slug];
  if (!Array.isArray(ids)) return [];
  return ids.filter((id) => known.has(id));
}

function writeMissed(slug: string, ids: string[]) {
  const all = readAll();
  all[slug] = ids;
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function Quiz({ slug, questions }: { slug: string; questions: QuizQuestion[] }) {
  const [picks, setPicks] = useState<Record<string, number | undefined>>({});
  const [missed, setMissed] = useState<string[]>([]);
  const [focusIds, setFocusIds] = useState<string[] | null>(null);
  const [note, setNote] = useState("");

  useEffect(() => {
    const known = new Set(questions.map((q) => q.id));
    setMissed(readMissed(slug, known));
  }, [slug, questions]);

  const visible = focusIds ? questions.filter((q) => focusIds.includes(q.id)) : questions;
  const answered = questions.filter((q) => picks[q.id] !== undefined);
  const correctCount = answered.filter((q) => picks[q.id] === q.answer).length;

  function choose(question: QuizQuestion, value: number) {
    if (picks[question.id] !== undefined) return;
    const nextPicks = { ...picks, [question.id]: value };
    setPicks(nextPicks);
    const known = new Set(questions.map((q) => q.id));
    const current = new Set(readMissed(slug, known));
    if (value === question.answer) current.delete(question.id);
    else current.add(question.id);
    const stored = [...current];
    writeMissed(slug, stored);
    setMissed(stored);
  }

  function review() {
    const known = new Set(questions.map((q) => q.id));
    const ids = readMissed(slug, known);
    setMissed(ids);
    if (!ids.length) {
      setNote("이 브라우저에 저장된 오답이 없어요.");
      setFocusIds(null);
      return;
    }
    setNote(`틀린 ${ids.length}문제를 다시 엽니다.`);
    setFocusIds(ids);
    setPicks((prev) => {
      const next = { ...prev };
      for (const id of ids) delete next[id];
      return next;
    });
    document.getElementById("webtoon-quiz")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="webtoon-quiz" className="mt-8 scroll-mt-28">
      <h2 className="font-serif text-xl text-ink">세 문제</h2>
      <p className="mt-1 text-xs leading-5 text-muted">고르면 바로 알려 줍니다. 틀린 문제는 이 브라우저에만 기억해 둡니다.</p>
      <ol className="mt-4 space-y-4">
        {visible.map((question, index) => {
          const picked = picks[question.id];
          const revealed = picked !== undefined;
          const options = question.kind === "ox"
            ? [{ n: 1, label: "O 맞아요" }, { n: 0, label: "X 아니에요" }]
            : (question.choices ?? []).map((label, n) => ({ n, label }));
          const number = questions.findIndex((item) => item.id === question.id) + 1;
          return (
            <li key={question.id} className={`rounded-xl border bg-card p-4 ${missed.includes(question.id) && !revealed ? "border-rome/50" : "border-line"}`}>
              <p className="text-xs text-gold">{number} / {questions.length}{question.kind === "ox" ? " · OX" : " · 네 가지"}</p>
              {missed.includes(question.id) && !revealed ? <p className="mt-1 text-[11px] text-rome">지난번에 틀린 문제</p> : null}
              <p className="mt-1 text-sm leading-6 text-ink">{question.prompt}</p>
              <div className="mt-3 grid gap-2" role="group" aria-label={`${index + 1}번 보기`}>
                {options.map((option) => {
                  const selected = picked === option.n;
                  const isAnswer = option.n === question.answer;
                  let tone = "border-line bg-white hover:border-gold";
                  if (revealed && isAnswer) tone = "border-navy bg-navy text-white";
                  else if (revealed && selected) tone = "border-rome bg-rome/10 text-rome";
                  return (
                    <button
                      key={option.label}
                      type="button"
                      disabled={revealed}
                      aria-pressed={selected}
                      onClick={() => choose(question, option.n)}
                      className={`rounded-full border px-3 py-2 text-left text-sm leading-5 break-keep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-default ${tone}`}
                    >
                      {option.label}
                      {revealed && selected && isAnswer ? " · 정답" : null}
                      {revealed && selected && !isAnswer ? " · 오답" : null}
                      {revealed && !selected && isAnswer ? " · 정답" : null}
                    </button>
                  );
                })}
              </div>
              {revealed ? (
                <p className="mt-3 text-sm leading-6 text-ink" role="status">
                  {picked === question.answer ? "맞아요. " : "다시 보면, "}
                  {question.explain}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
      {answered.length === questions.length ? (
        <p className="mt-4 text-sm text-ink" role="status">
          {correctCount === questions.length ? "세 문제 모두 맞혔어요." : `세 문제 중 ${correctCount}개를 맞혔어요.`}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="button" onClick={review} className="rounded-full bg-navy px-4 py-2 text-sm text-white hover:bg-gold">
          오답 다시 보기
        </button>
        {focusIds ? (
          <button type="button" onClick={() => { setFocusIds(null); setNote(""); }} className="text-sm text-gold">
            세 문제 모두 보기
          </button>
        ) : null}
      </div>
      <p className="mt-2 text-xs text-muted" role="status">{note}</p>
    </section>
  );
}
