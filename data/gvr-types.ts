export type SourceTag = "greek" | "roman" | "arch" | "modern";

export const SOURCE_TAG_LABEL: Record<SourceTag, string> = {
  greek: "그리스어 문헌",
  roman: "라틴어 문헌",
  arch: "고고학",
  modern: "현대 학설",
};

export type Claim = { t: string; tag: SourceTag; ref?: string };

export const c = (t: string, tag: SourceTag, ref?: string): Claim => ({ t, tag, ref });

export type PairRow = { label: string; greek: Claim[]; roman: Claim[] };

export type GodPair = {
  slug: string;
  greekSlug: string;
  greekKo: string;
  romanKo: string;
  romanLatin: string;
  lead: string;
  rows: PairRow[];
  difference: Claim[];
  disputed?: Claim[];
};

export type RomanDeity = {
  slug: string;
  ko: string;
  latin: string;
  role: string;
  lead: string;
  claims: Claim[];
  festival?: string;
  greekNote?: Claim[];
  disputed?: Claim[];
};
