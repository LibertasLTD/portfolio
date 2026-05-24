import { useState } from "react";
import type { Page } from "../types";

// ── Icons ──────────────────────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronRight = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2 7 12 13 22 7" />
  </svg>
);

// ── File type dot ──────────────────────────────────────────────────────────────

const Dot = ({ color }: { color: string }) => (
  <span
    className="inline-block w-[10px] h-[10px] shrink-0"
    style={{ background: color, borderRadius: 2 }}
  />
);

// ── Content data ───────────────────────────────────────────────────────────────

type ActiveFile = "bio" | "interests" | "university";

const fileLines: Record<ActiveFile, string[]> = {
  bio: [
    "/**",
    " * About me",
    " *",
    " * 17-year senior full-stack developer who loves turning complex problems into clean, reliable systems",
    " * Deep expertise in React/Next.js (frontend) and C#/.NET + Node.js (backend)",
    " * Experienced building SaaS products, internal tools, dashboards, and scalable web applications",
    " * Obsessed with writing maintainable code, optimizing performance, and creating smooth user experiences",
    " * Looking for long-term partnerships where I can contribute consistently and help products grow",
    " */",
  ],
  interests: [
    "/**",
    " * Interests",
    " *",
    " * - Full-Stack Architecture & Scalable Systems",
    " * - React / Next.js Ecosystem",
    " * - Developer tooling & DX",
    " * - eveloper Experience & Tooling",
    " * - Performance & Clean Code Practices",
    " * - Open Source Development",
    " */",
  ],
  university: [
    "/**",
    " * University",
    " *",
    " * Institution: Newport, Wales",
    " * Degree:      Games Development & Artificial Intelligence",
    " * Period:      2006 – 2009",
    " */",
  ],
};

const snippets = [
  {
    username: "@username",
    created: "Created 5 months ago",
    stars: 3,
    starred: true,
    code: `export function initializeModelChunk<T>(
  chunk: ResolvedModelChunk<T>
): T {
  const value: T = parseModel(
    chunk._response,
    chunk._value
  );
  const initializedChunk: InitializedChunk<T> =
    (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`,
  },
  {
    username: "@username",
    created: "Created 9 months ago",
    stars: 0,
    starred: false,
    code: `export function parseModelTuple(
  response: Response,
  value: {[key: string]: JSONValue} |
    ReadonlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed]
    = (value: any);
  return tuple;
}`,
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

interface Props {
  onNavigate: (page: Page) => void;
}

export default function AboutPage({ onNavigate }: Props) {
  const [personalOpen, setPersonalOpen] = useState(true);
  const [educationOpen, setEducationOpen] = useState(true);
  const [contactsOpen, setContactsOpen] = useState(true);
  const [activeFile, setActiveFile] = useState<ActiveFile>("bio");

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
      />

      <div
        className="min-h-screen bg-[#010C15] text-white flex flex-col"
        style={{ fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace" }}
      >
        {/* ── Nav ──────────────────────────────────────────────────────────── */}
        <nav className="flex items-stretch border-b border-[#1E2D3D] text-sm shrink-0">
          <div className="px-6 py-5 border-r border-[#1E2D3D] flex items-center">
            <span className="text-[#607B96]">michael-weaver</span>
          </div>

          <div className="flex items-stretch">
            <button
              onClick={() => onNavigate("home")}
              className="px-6 py-5 text-[#607B96] border-r border-[#1E2D3D] hover:text-white transition-colors"
            >
              _hello
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="px-6 py-5 text-white border-r border-[#1E2D3D]"
              style={{ borderBottom: "2px solid #FEA55F", marginBottom: -1 }}
            >
              _about-me
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className="hidden sm:flex items-center px-6 py-5 text-[#607B96] border-r border-[#1E2D3D] hover:text-white transition-colors"
            >
              _projects
            </button>
          </div>

          <button
            onClick={() => onNavigate("contact")}
            className="hidden md:flex items-center ml-auto px-6 py-5 text-[#607B96] border-l border-[#1E2D3D] hover:text-white transition-colors"
          >
            _contact-me
          </button>
        </nav>

        {/* ── Main ─────────────────────────────────────────────────────────── */}
        <main className="flex-1 flex min-h-0">

          {/* File tree sidebar — hidden below md */}
          <aside className="hidden md:flex flex-col w-[220px] shrink-0 border-r border-[#1E2D3D] overflow-y-auto text-sm">

            {/* personal-info */}
            <div>
              <button
                onClick={() => setPersonalOpen((v) => !v)}
                className="w-full flex items-center gap-2 px-4 py-[9px] text-[#607B96] hover:text-white transition-colors"
              >
                {personalOpen ? <ChevronDown /> : <ChevronRight />}
                personal-info
              </button>
              {personalOpen && (
                <div>
                  <button
                    onClick={() => setActiveFile("bio")}
                    className={`w-full flex items-center gap-[10px] pl-9 pr-4 py-[7px] text-left transition-colors ${activeFile === "bio" ? "text-white bg-[#1E2D3D]" : "text-[#607B96] hover:text-white"}`}
                  >
                    <Dot color="#C98BDF" />
                    bio
                  </button>
                  <button
                    onClick={() => setActiveFile("interests")}
                    className={`w-full flex items-center gap-[10px] pl-9 pr-4 py-[7px] text-left transition-colors ${activeFile === "interests" ? "text-white bg-[#1E2D3D]" : "text-[#607B96] hover:text-white"}`}
                  >
                    <Dot color="#FEA55F" />
                    interests
                  </button>
                </div>
              )}
            </div>

            {/* education */}
            <div>
              <button
                onClick={() => setEducationOpen((v) => !v)}
                className="w-full flex items-center gap-2 px-4 py-[9px] text-[#607B96] hover:text-white transition-colors"
              >
                {educationOpen ? <ChevronDown /> : <ChevronRight />}
                education
              </button>
              {educationOpen && (
                <div>
                  <button
                    onClick={() => setActiveFile("university")}
                    className={`w-full flex items-center gap-[10px] pl-9 pr-4 py-[7px] text-left transition-colors ${activeFile === "university" ? "text-white bg-[#1E2D3D]" : "text-[#607B96] hover:text-white"}`}
                  >
                    <Dot color="#4D79FF" />
                    university
                  </button>
                </div>
              )}
            </div>

            {/* contacts */}
            <div>
              <button
                onClick={() => setContactsOpen((v) => !v)}
                className="w-full flex items-center gap-2 px-4 py-[9px] text-[#607B96] hover:text-white transition-colors"
              >
                {contactsOpen ? <ChevronDown /> : <ChevronRight />}
                contacts
              </button>
              {contactsOpen && (
                <div>
                  <div className="flex items-center gap-[10px] pl-9 pr-4 py-[7px] text-[#607B96] text-sm">
                    <MailIcon />
                    kyle.allbright@gmail.com
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Editor + right panel */}
          <div className="flex-1 flex min-w-0">

            {/* Code editor */}
            <div className="flex-1 flex flex-col min-w-0 border-r border-[#1E2D3D]">
              {/* Tab bar */}
              <div className="flex items-stretch border-b border-[#1E2D3D] shrink-0">
                <div className="flex items-center gap-4 px-5 py-3 border-r border-[#1E2D3D] text-sm">
                  <span className="text-[#607B96]">{activeFile}</span>
                  <span className="text-[#607B96] hover:text-white cursor-pointer select-none leading-none text-base">
                    ×
                  </span>
                </div>
              </div>

              {/* Line numbers + bio content */}
              <div className="flex-1 overflow-auto">
                <div className="flex text-sm py-5">
                  {/* Line numbers */}
                  <div
                    className="shrink-0 select-none text-right pr-5 pl-5 text-[#607B96]"
                    style={{ opacity: 0.4, minWidth: "3.25rem" }}
                  >
                    {fileLines[activeFile].map((_, i) => (
                      <div key={i} style={{ lineHeight: "1.75rem" }}>
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  {/* Code lines */}
                  <div className="text-[#607B96] pr-6">
                    {fileLines[activeFile].map((line, i) => (
                      <div
                        key={i}
                        style={{ lineHeight: "1.75rem", whiteSpace: "pre" }}
                      >
                        {line || " "}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel — code snippet showcase, hidden below lg */}
            <div className="hidden lg:flex flex-col w-[38%] max-w-[420px] shrink-0 overflow-y-auto p-6 gap-5">
              <p className="text-[#607B96] text-sm">// Code snippet showcase:</p>

              {snippets.map((s, i) => (
                <div
                  key={i}
                  className="border border-[#1E2D3D] overflow-hidden"
                  style={{ background: "#011221" }}
                >
                  {/* Card header */}
                  <div className="flex items-center gap-3 px-4 py-[10px] border-b border-[#1E2D3D] text-xs flex-wrap gap-y-1">
                    <span style={{ color: "#43D9AD" }}>{s.username}</span>
                    <span className="text-[#607B96] flex-1 min-w-0 truncate">
                      {s.created}
                    </span>
                    <button className="text-[#607B96] hover:text-white transition-colors shrink-0">
                      details
                    </button>
                    <span className="text-[#607B96] shrink-0">
                      {s.starred ? "★" : "☆"} {s.stars} stars
                    </span>
                  </div>
                  {/* Code block */}
                  <pre
                    className="text-xs p-4 overflow-x-auto leading-relaxed"
                    style={{ color: "#607B96" }}
                  >
                    <code>{s.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* ── Footer ───────────────────────────────────────────────────────── */}
        <footer className="flex items-center gap-5 px-6 py-4 border-t border-[#1E2D3D] text-sm shrink-0">
          <span className="text-[#607B96]">find me in:</span>
          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[#607B96] hover:text-white transition-colors border border-[#1E2D3D] p-[9px] hover:border-[#607B96]"
            >
              <LinkedInIcon />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
