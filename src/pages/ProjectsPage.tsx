import { useState, useEffect, useCallback } from "react";
import Nav from "../components/Nav";
import type { Page } from "../types";
import odeumPhoto from "../../img/odeum-photo.jpeg";
import kanbanApp from "../../img/kanban-app.png";

// ── Lightbox ───────────────────────────────────────────────────────────────────

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(1,12,21,0.92)", backdropFilter: "blur(6px)", animation: "lb-fade-in 0.2s ease" }}
      onClick={onClose}
    >
      <style>{`
        @keyframes lb-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lb-scale-in { from { opacity: 0; transform: scale(0.92) } to { opacity: 1; transform: scale(1) } }
      `}</style>

      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center border border-[#1E2D3D] text-[#607B96] hover:text-white hover:border-[#607B96] transition-colors text-lg leading-none"
        style={{ background: "rgba(1,18,33,0.85)" }}
        aria-label="Close"
      >
        ×
      </button>

      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-[90vh] rounded-lg border border-[#1E2D3D] object-contain shadow-2xl"
        style={{ animation: "lb-scale-in 0.22s ease" }}
      />
    </div>
  );
}

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

// ── Tech logo icons ────────────────────────────────────────────────────────────

const ReactLogo = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.4" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
  </svg>
);

const HTMLLogo = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 2l2 18 7 2 7-2 2-18Z" fill="#E34F26" />
    <path d="M12 5.5H8.5l.35 4H12V13H9.3l.25 2.8 2.45.7V13h2.6l-.35 4.1-2.25.65V5.5Z" fill="white" opacity="0.9" />
  </svg>
);

const CSSLogo = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 2l2 18 7 2 7-2 2-18Z" fill="#1572B6" />
    <path d="M12 5.5H8l.35 4H12V13H9l.25 2.8 2.75.7V13h2.8l-.35 4.1-2.45.65V5.5Z" fill="white" opacity="0.9" />
  </svg>
);

const VueLogo = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
    <polygon points="12,21.5 1,3 5.5,3 12,14.5 18.5,3 23,3" fill="#41B883" />
    <polygon points="12,14.5 7.5,6 16.5,6" fill="#34495E" />
  </svg>
);

const AngularLogo = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
    <polygon points="12,2.5 22,6.5 20.3,18.5 12,22 3.7,18.5 2,6.5" fill="#DD0031" />
    <path d="M12 5.5L7.5 16.5h1.8l1-2.5h3.4l1 2.5h1.8L12 5.5zm0 3.8 1.3 3.2H10.7L12 9.3z" fill="white" />
  </svg>
);

const GatsbyLogo = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#663399" />
    <path d="M12 4.5C7.8 4.5 4.5 7.8 4.5 12c0 4.2 3.3 7.5 7.5 7.5 4.2 0 7.5-3.3 7.5-7.5C19.5 7.8 16.2 4.5 12 4.5zm-4 10l4-4v4H8zm5.5 0v-4l4 4h-4zm-5.5-5 4.5-4.5v4.5H8zm5.5-4.5 4.5 4.5H13.5V5z" fill="white" opacity="0.9" />
  </svg>
);

const FlutterLogo = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
    <polygon points="14,2 21,9 16.5,9 9.5,2" fill="#54C5F8" />
    <polygon points="14,13 21,20 16.5,20 9.5,13" fill="#01579B" />
    <polygon points="9.5,13 14,17.5 16.5,15 14,13" fill="#29B6F6" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────────

const techList = [
  { id: "react",   label: "React",   Icon: ReactLogo },
  { id: "html",    label: "HTML",    Icon: HTMLLogo },
  { id: "css",     label: "CSS",     Icon: CSSLogo },
  { id: "node",    label: "Node",    Icon: VueLogo },
  { id: "angular", label: "Angular", Icon: AngularLogo },
  { id: "gatsby",  label: "Gatsby",  Icon: GatsbyLogo },
  { id: "flutter", label: "Flutter", Icon: FlutterLogo },
] as const;

type TechId = (typeof techList)[number]["id"];

const projects = [
  {
    num: 1,
    slug: "_odeum",
    description: "Odeum is a decentralised audio streaming platform",
    tech: ["react"] as TechId[],
    BadgeIcon: ReactLogo,
    image: odeumPhoto,
    imageAlt: "Odeum project screenshot",
    imageStyle: {} as React.CSSProperties,
  },
  {
    num: 2,
    slug: "_kanban-app",
    description: "Manage your tasks using this kanban board",
    tech: ["react"] as TechId[],
    BadgeIcon: ReactLogo,
    image: kanbanApp,
    imageAlt: "Kanban app screenshot",
    imageStyle: {} as React.CSSProperties,
  },
  {
    num: 3,
    slug: "_ui-workinprogress",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    tech: ["node"] as TechId[],
    BadgeIcon: VueLogo,
    image: undefined as string | undefined,
    imageAlt: "",
    imageStyle: {
      background:
        "linear-gradient(135deg, #031015 0%, #003344 50%, #005060 80%, #004a3a 100%)",
    } as React.CSSProperties,
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

interface Props {
  onNavigate: (page: Page) => void;
}

export default function ProjectsPage({ onNavigate }: Props) {
  const [selected, setSelected] = useState<TechId[]>([]);
  const [sectionOpen, setSectionOpen] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const toggle = (id: TechId) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );

  const filtered =
    selected.length === 0
      ? projects
      : projects.filter((p) => p.tech.some((t) => selected.includes(t)));

  const tabLabel = selected
    .map((id) => techList.find((t) => t.id === id)?.label ?? id)
    .join("; ");

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
        <Nav activePage="projects" onNavigate={onNavigate} />

        <main className="flex-1 flex flex-col md:flex-row min-h-0">

          {/* ── Mobile filter panel (below md) ──────────────────────────────── */}
          <div className="md:hidden border-b border-[#1E2D3D] shrink-0 text-sm">
            <button
              onClick={() => setMobileFiltersOpen((v) => !v)}
              className="w-full flex items-center justify-between px-5 py-3 text-[#607B96] hover:text-white transition-colors"
              aria-expanded={mobileFiltersOpen}
            >
              <span className="flex items-center gap-2">
                {mobileFiltersOpen ? <ChevronDown /> : <ChevronRight />}
                projects
                {selected.length > 0 && (
                  <span className="text-xs text-[#43D9AD]">({selected.length})</span>
                )}
              </span>
              {selected.length > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelected([]); }}
                  className="text-xs text-[#607B96] hover:text-white transition-colors"
                >
                  clear
                </button>
              )}
            </button>
            {mobileFiltersOpen && (
              <div className="flex flex-wrap gap-2 px-5 pb-4">
                {techList.map(({ id, label, Icon }) => {
                  const checked = selected.includes(id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggle(id)}
                      className="flex items-center gap-2 px-3 py-2 border text-xs transition-colors"
                      style={{
                        borderColor: checked ? "#607B96" : "#1E2D3D",
                        color: checked ? "#ffffff" : "#607B96",
                        background: checked ? "#1E2D3D" : "transparent",
                      }}
                    >
                      <Icon />
                      {label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Desktop filter sidebar (md+) ────────────────────────────────── */}
          <aside className="hidden md:flex flex-col w-[220px] shrink-0 border-r border-[#1E2D3D] overflow-y-auto text-sm">
            <button
              onClick={() => setSectionOpen((v) => !v)}
              className="w-full flex items-center gap-2 px-4 py-[9px] text-[#607B96] hover:text-white transition-colors"
            >
              {sectionOpen ? <ChevronDown /> : <ChevronRight />}
              projects
            </button>

            {sectionOpen && (
              <div>
                {techList.map(({ id, label, Icon }) => {
                  const checked = selected.includes(id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggle(id)}
                      className="w-full flex items-center gap-3 pl-5 pr-4 py-[7px] hover:text-white transition-colors text-left"
                      style={{ color: checked ? "#ffffff" : "#607B96" }}
                    >
                      <span
                        className="inline-flex items-center justify-center w-[14px] h-[14px] shrink-0 border"
                        style={{
                          borderColor: checked ? "#607B96" : "#1E2D3D",
                          background: checked ? "#1E2D3D" : "transparent",
                        }}
                      >
                        {checked && (
                          <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden="true">
                            <polyline
                              points="1.5,5 4,7.5 8.5,2"
                              stroke="#43D9AD"
                              strokeWidth="1.5"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <Icon />
                      {label}
                    </button>
                  );
                })}
              </div>
            )}
          </aside>

          {/* ── Project grid area ───────────────────────────────────────────── */}
          <div className="flex-1 flex flex-col min-h-0">

            {/* Tab bar */}
            <div className="flex items-stretch border-b border-[#1E2D3D] shrink-0 min-h-[46px]">
              {selected.length > 0 && (
                <div className="flex items-center gap-4 px-5 py-3 border-r border-[#1E2D3D] text-sm">
                  <span className="text-[#607B96] truncate max-w-[160px] sm:max-w-none">{tabLabel}</span>
                  <button
                    onClick={() => setSelected([])}
                    className="text-[#607B96] hover:text-white transition-colors leading-none text-base shrink-0"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>

            {/* Cards */}
            <div className="flex-1 overflow-auto p-5 sm:p-8 lg:p-10">
              {filtered.length === 0 ? (
                <p className="text-[#607B96] text-sm">
                  // no projects match the selected filters
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl">
                  {filtered.map((project) => (
                    <div key={project.num}>
                      {/* Title above card */}
                      <p className="text-sm mb-3">
                        <span style={{ color: "#FEA55F" }}>Project {project.num}</span>
                        <span className="text-[#607B96]"> // </span>
                        <span style={{ color: "#43D9AD" }}>{project.slug}</span>
                      </p>

                      {/* Card */}
                      <div
                        className="rounded-lg border border-[#1E2D3D] overflow-hidden"
                        style={{ background: "#011221" }}
                      >
                        {/* Image area */}
                        <div
                          className={`relative h-[160px] sm:h-[170px] overflow-hidden${project.image ? " cursor-zoom-in group" : ""}`}
                          style={project.imageStyle}
                          onClick={project.image ? () => openLightbox(project.image!, project.imageAlt) : undefined}
                          role={project.image ? "button" : undefined}
                          tabIndex={project.image ? 0 : undefined}
                          aria-label={project.image ? `View full image: ${project.imageAlt}` : undefined}
                          onKeyDown={project.image ? (e) => { if (e.key === "Enter" || e.key === " ") openLightbox(project.image!, project.imageAlt); } : undefined}
                        >
                          {project.image && (
                            <>
                              <img
                                src={project.image}
                                alt={project.imageAlt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs border border-white/40 px-3 py-1.5" style={{ background: "rgba(1,18,33,0.7)", backdropFilter: "blur(4px)" }}>
                                  view full image
                                </span>
                              </div>
                            </>
                          )}
                          <div
                            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center border border-[#1E2D3D]"
                            style={{ background: "rgba(1,18,33,0.75)", backdropFilter: "blur(4px)" }}
                          >
                            <project.BadgeIcon />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-5">
                          <p className="text-[#607B96] text-sm mb-4 sm:mb-5 leading-relaxed">
                            {project.description}
                          </p>
                          <button className="px-4 py-2 sm:py-[6px] text-xs text-[#607B96] border border-[#1E2D3D] hover:border-[#607B96] hover:text-white transition-colors">
                            view-project
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>

        {/* ── Footer ───────────────────────────────────────────────────────── */}
        <footer className="flex items-center gap-5 px-6 py-4 border-t border-[#1E2D3D] text-sm shrink-0">
          <span className="text-[#607B96]">find me in:</span>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-[#607B96] hover:text-white transition-colors border border-[#1E2D3D] p-[9px] hover:border-[#607B96]"
          >
            <LinkedInIcon />
          </a>
        </footer>
      </div>

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}
    </>
  );
}
