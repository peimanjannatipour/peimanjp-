import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import articleMeta from "@/../content/site-copy/articles/neurolab-os/meta.json";
import articleSectionsA from "@/../content/site-copy/articles/neurolab-os/sections-a.json";
import articleSectionsB from "@/../content/site-copy/articles/neurolab-os/sections-b.json";
import articleSectionsC from "@/../content/site-copy/articles/neurolab-os/sections-c.json";
import articleBackmatter from "@/../content/site-copy/articles/neurolab-os/backmatter.json";
import { CitationTools } from "@/components/articles/CitationTools";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/links";

export const metadata: Metadata = createPageMetadata({
  title: "NeuroLab OS Manuscript | Full Article",
  description:
    "Full manuscript for NeuroLab OS, a local-first software environment for scientist-reviewed neural time-series modelling and provenance-aware simulation.",
  path: "/articles/neurolab-os",
});

type ParagraphBlock = { type: "paragraph"; text: string };
type EquationBlock = { type: "equation"; label: string; text: string };
type FigureBlock = { type: "figure"; id: string };
type TableBlock = { type: "table"; id: string };
type ArticleBlock = ParagraphBlock | EquationBlock | FigureBlock | TableBlock;

type ArticleSection = {
  id: string;
  number: string;
  title: string;
  blocks: ArticleBlock[];
};

type FigureData = {
  number: string;
  src: string;
  alt: string;
  caption: string;
};

type TableData = {
  title: string;
  note?: string;
  columns: string[];
  rows: string[][];
};

type ReferenceData = {
  n: number;
  text: string;
  doi: string | null;
};

type ArticleData = {
  title: string;
  articleType: string;
  author: string;
  affiliation: string;
  year: string;
  release: string;
  engineVersion: string;
  status: string;
  pdfUrl: string | null;
  projectUrl: string;
  abstract: Record<string, string>;
  keywords: string[];
  sections: ArticleSection[];
  figures: Record<string, FigureData>;
  tables: Record<string, TableData>;
  references: ReferenceData[];
  citation: string;
  bibtex: string;
};

const article = {
  ...articleMeta,
  sections: [...articleSectionsA, ...articleSectionsB, ...articleSectionsC],
  ...articleBackmatter,
} as ArticleData;

const manuscriptJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: article.title,
  description: article.abstract["Background and Objective"],
  url: `${siteConfig.baseUrl}/articles/neurolab-os`,
  author: {
    "@type": "Person",
    name: article.author,
    url: siteConfig.baseUrl,
  },
  affiliation: {
    "@type": "Organization",
    name: "Università Campus Bio-Medico di Roma (UCBM)",
  },
  dateCreated: "2026",
  isAccessibleForFree: true,
  keywords: article.keywords.join(", "),
};

const tocGroups = [
  { label: "Abstract", href: "#abstract" },
  { label: "1. Introduction", href: "#introduction" },
  {
    label: "2. Methods",
    href: "#methods",
    children: article.sections
      .filter((section) => section.number.startsWith("2."))
      .map((section) => ({ label: `${section.number} ${section.title}`, href: `#${section.id}` })),
  },
  {
    label: "3. Results",
    href: "#results",
    children: article.sections
      .filter((section) => section.number.startsWith("3."))
      .map((section) => ({ label: `${section.number} ${section.title}`, href: `#${section.id}` })),
  },
  { label: "4. Discussion", href: "#discussion" },
  { label: "5. Conclusions", href: "#conclusions" },
  { label: "References", href: "#references" },
];

function renderInlineCitations(text: string): ReactNode[] {
  const parts = text.split(/(\[(?:\d+(?:,\s*\d+)*)\])/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[(\d+(?:,\s*\d+)*)\]$/);
    if (!match) return part;

    const numbers = match[1].split(",").map((item) => item.trim());
    return (
      <span className="whitespace-nowrap text-[0.92em]" key={`${part}-${index}`}>
        [
        {numbers.map((number, numberIndex) => (
          <span key={number}>
            {numberIndex > 0 ? ", " : null}
            <a
              className="font-sans font-semibold text-[#8a1f2d] underline decoration-[#8a1f2d]/30 underline-offset-2 hover:decoration-[#8a1f2d]"
              href={`#ref-${number}`}
            >
              {number}
            </a>
          </span>
        ))}
        ]
      </span>
    );
  });
}

function JournalFigure({ figure }: { figure: FigureData }) {
  return (
    <figure className="my-10 border-y border-slate-200 py-7" id={`figure-${figure.number}`}>
      <a
        aria-label={`Open Figure ${figure.number} at full size`}
        className="block overflow-hidden border border-slate-200 bg-[#fafafa] p-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8a1f2d]"
        href={figure.src}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          alt={figure.alt}
          className="h-auto w-full object-contain"
          height={760}
          src={figure.src}
          unoptimized
          width={1600}
        />
      </a>
      <figcaption className="mt-4 font-sans text-sm leading-6 text-slate-700">
        <strong className="font-bold text-slate-950">Figure {figure.number} | </strong>
        {figure.caption}
      </figcaption>
    </figure>
  );
}

function JournalTable({ table, id }: { table: TableData; id: string }) {
  return (
    <figure className="my-10 border-y border-slate-200 py-7" id={id}>
      <figcaption className="mb-4 font-sans text-sm leading-6 text-slate-800">
        <strong className="font-bold text-slate-950">{table.title}</strong>
        {table.note ? <span className="mt-1 block text-slate-600">{table.note}</span> : null}
      </figcaption>
      <div className="overflow-x-auto border border-slate-200">
        <table className="min-w-[820px] w-full border-collapse bg-white font-sans text-left text-[13px] leading-5 text-slate-700">
          <thead className="bg-slate-950 text-white">
            <tr>
              {table.columns.map((column) => (
                <th className="border-r border-slate-700 px-4 py-3 font-semibold last:border-r-0" key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr className="border-t border-slate-200 align-top odd:bg-white even:bg-slate-50" key={`${id}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td className="border-r border-slate-200 px-4 py-3 last:border-r-0" key={`${id}-${rowIndex}-${cellIndex}`}>
                    {renderInlineCitations(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function ArticleBlockView({ block, blockIndex }: { block: ArticleBlock; blockIndex: number }) {
  if (block.type === "paragraph") {
    return (
      <p className="mt-5 font-serif text-[18px] leading-[1.86] text-slate-800" key={blockIndex}>
        {renderInlineCitations(block.text)}
      </p>
    );
  }

  if (block.type === "equation") {
    return (
      <div
        aria-label={`Equation ${block.label}`}
        className="my-8 grid grid-cols-[1fr_auto] items-center gap-5 border-y border-slate-200 bg-slate-50 px-5 py-6"
        key={blockIndex}
      >
        <div className="overflow-x-auto text-center font-serif text-xl italic tracking-wide text-slate-950 sm:text-2xl">
          {block.text}
        </div>
        <span className="font-serif text-sm text-slate-600">({block.label})</span>
      </div>
    );
  }

  if (block.type === "figure") {
    const figure = article.figures[block.id];
    return figure ? <JournalFigure figure={figure} key={blockIndex} /> : null;
  }

  const table = article.tables[block.id];
  return table ? <JournalTable id={block.id} key={blockIndex} table={table} /> : null;
}

function SectionBody({ section, level = "sub" }: { section: ArticleSection; level?: "main" | "sub" }) {
  const heading = `${section.number}. ${section.title}`.replace("..", ".");
  return (
    <section className="scroll-mt-24 pt-10" id={section.id}>
      {level === "main" ? (
        <h2 className="border-t-4 border-slate-950 pt-5 font-sans text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {heading}
        </h2>
      ) : (
        <h3 className="border-t border-slate-300 pt-5 font-sans text-2xl font-bold tracking-tight text-slate-950">
          {heading}
        </h3>
      )}
      {section.blocks.map((block, blockIndex) => (
        <ArticleBlockView block={block} blockIndex={blockIndex} key={`${section.id}-${blockIndex}`} />
      ))}
    </section>
  );
}

function Toc() {
  return (
    <nav aria-label="Article table of contents" className="text-sm leading-5 text-slate-700">
      <p className="mb-4 border-b border-slate-300 pb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-950">
        In this article
      </p>
      <ul className="space-y-3">
        {tocGroups.map((item) => (
          <li key={item.href}>
            <a className="font-semibold hover:text-[#8a1f2d] hover:underline" href={item.href}>
              {item.label}
            </a>
            {"children" in item && item.children ? (
              <ul className="mt-2 space-y-2 border-l border-slate-200 pl-3 text-xs leading-5 text-slate-600">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <a className="hover:text-[#8a1f2d] hover:underline" href={child.href}>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function NeuroLabFullArticlePage() {
  const introduction = article.sections.find((section) => section.number === "1");
  const methods = article.sections.filter((section) => section.number.startsWith("2."));
  const results = article.sections.filter((section) => section.number.startsWith("3."));
  const discussion = article.sections.find((section) => section.number === "4");
  const conclusions = article.sections.find((section) => section.number === "5");

  return (
    <main className="min-h-screen bg-[#f2f2ef] text-slate-950" id="main">
      <JsonLd data={manuscriptJsonLd} />

      <div className="border-b border-slate-300 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-5 py-3 text-xs sm:px-8">
          <span className="font-semibold uppercase tracking-[0.18em]">Full scientific manuscript</span>
          <span className="text-slate-300">Research software · NeuroLab OS v0.1.1</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-600">
          <Link className="hover:text-[#8a1f2d] hover:underline" href="/publications">Publications</Link>
          <span aria-hidden="true">/</span>
          <Link className="hover:text-[#8a1f2d] hover:underline" href="/neurolab-os">NeuroLab OS</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="font-semibold text-slate-900">Full article</span>
        </nav>

        <header className="border-t-[6px] border-slate-950 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-11 lg:px-14">
          <div className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a1f2d]">{article.articleType} · Full text</p>
            <h1 className="mt-5 max-w-5xl font-serif text-[2.35rem] font-bold leading-[1.08] tracking-[-0.025em] text-slate-950 sm:text-5xl lg:text-[3.7rem]">
              {article.title}
            </h1>
            <div className="mt-7 border-y border-slate-200 py-5">
              <p className="font-sans text-base font-bold text-slate-950">{article.author}</p>
              <p className="mt-1 font-sans text-sm text-slate-600">{article.affiliation}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs text-slate-600">
              <span>{article.release}</span>
              <span>Engine {article.engineVersion}</span>
              <span>Manuscript year {article.year}</span>
              <span>No DOI assigned</span>
              <span>Full text reproduced from the 22-page manuscript source</span>
            </div>
            <div className="mt-7 border-l-4 border-[#8a1f2d] bg-[#faf7f7] px-5 py-4 font-sans text-sm leading-6 text-slate-700">
              <strong className="text-slate-950">Evidence status.</strong> This full-text page reports a verified technical beta and explicitly separates software verification from external scientific, biological, diagnostic, therapeutic, or clinical validation.
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="inline-flex min-h-11 items-center border border-slate-950 bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800" href="#abstract">
                Read full article
              </a>
              <a className="inline-flex min-h-11 items-center border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50" href={article.projectUrl} rel="noreferrer" target="_blank">
                NeuroLab OS project site ↗
              </a>
              <a className="inline-flex min-h-11 items-center border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50" href="#cite-this-article">
                Cite this manuscript
              </a>
            </div>
          </div>
        </header>

        <details className="mt-6 border border-slate-300 bg-white p-4 lg:hidden">
          <summary className="cursor-pointer text-sm font-bold text-slate-950">Article contents</summary>
          <div className="mt-4"><Toc /></div>
        </details>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,820px)_260px] xl:grid-cols-[210px_minmax(0,820px)_270px] xl:gap-12">
          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-6 font-sans text-sm text-slate-700">
              <div className="border-t-4 border-slate-950 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Article information</p>
                <dl className="mt-4 space-y-4">
                  <div><dt className="text-xs text-slate-500">Type</dt><dd className="mt-1 font-semibold text-slate-950">Technical manuscript</dd></div>
                  <div><dt className="text-xs text-slate-500">Software</dt><dd className="mt-1 font-semibold text-slate-950">NeuroLab OS v0.1.1</dd></div>
                  <div><dt className="text-xs text-slate-500">Source manuscript</dt><dd className="mt-1 font-semibold text-slate-950">22 pages · full text reproduced here</dd></div>
                  <div><dt className="text-xs text-slate-500">Figures / tables</dt><dd className="mt-1 font-semibold text-slate-950">4 / 4</dd></div>
                  <div><dt className="text-xs text-slate-500">References</dt><dd className="mt-1 font-semibold text-slate-950">33</dd></div>
                </dl>
              </div>
              <div className="border border-slate-300 bg-white p-5" id="cite-this-article">
                <CitationTools bibtex={article.bibtex} citation={article.citation} />
              </div>
            </div>
          </aside>

          <article className="min-w-0 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10 lg:px-12">
            <section className="scroll-mt-24" id="abstract">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#8a1f2d]">Abstract</p>
              <h2 className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-950">Abstract</h2>
              <div className="mt-6 space-y-5 border-y border-slate-200 py-6">
                {["Background and Objective", "Methods", "Results", "Conclusions"].map((label) => (
                  <p className="font-serif text-[17px] leading-[1.78] text-slate-800" key={label}>
                    <strong className="font-sans text-[0.84em] text-slate-950">{label}: </strong>
                    {article.abstract[label]}
                  </p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {article.keywords.map((keyword) => (
                  <span className="border border-slate-300 bg-slate-50 px-2.5 py-1 font-sans text-xs text-slate-700" key={keyword}>{keyword}</span>
                ))}
              </div>
            </section>

            {introduction ? <SectionBody level="main" section={introduction} /> : null}

            <section className="scroll-mt-24 pt-12" id="methods">
              <h2 className="border-t-4 border-slate-950 pt-5 font-sans text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">2. Methods</h2>
            </section>
            {methods.map((section) => <SectionBody key={section.id} section={section} />)}

            <section className="scroll-mt-24 pt-12" id="results">
              <h2 className="border-t-4 border-slate-950 pt-5 font-sans text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">3. Results</h2>
            </section>
            {results.map((section) => <SectionBody key={section.id} section={section} />)}

            {discussion ? <SectionBody level="main" section={discussion} /> : null}
            {conclusions ? <SectionBody level="main" section={conclusions} /> : null}

            <section className="scroll-mt-24 pt-12" id="references">
              <h2 className="border-t-4 border-slate-950 pt-5 font-sans text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">References</h2>
              <ol className="mt-7 space-y-5 font-sans text-sm leading-6 text-slate-700">
                {article.references.map((reference) => (
                  <li className="grid grid-cols-[42px_1fr] gap-3 border-b border-slate-100 pb-5" id={`ref-${reference.n}`} key={reference.n}>
                    <span className="font-bold text-slate-950">[{reference.n}]</span>
                    <p>
                      {reference.text}{" "}
                      {reference.doi ? (
                        <a className="font-semibold text-[#8a1f2d] underline underline-offset-2" href={`https://doi.org/${reference.doi}`} rel="noreferrer" target="_blank">
                          https://doi.org/{reference.doi}
                        </a>
                      ) : null}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-12 border-t-4 border-slate-950 pt-7 xl:hidden" id="mobile-cite-this-article">
              <h2 className="font-sans text-xl font-bold text-slate-950">Cite this manuscript</h2>
              <div className="mt-4 border border-slate-300 bg-slate-50 p-5">
                <CitationTools bibtex={article.bibtex} citation={article.citation} />
              </div>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 border-t-4 border-slate-950 bg-white p-5">
              <Toc />
              <div className="mt-7 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-600">
                <p className="font-bold text-slate-950">Manuscript status</p>
                <p className="mt-2">Full text, figures, tables and references are reproduced on this page from the manuscript source. No DOI or peer-review status is implied.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
