import Nav from "../components/Nav";
import type { Page } from "../types";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface Props {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: Props) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
      />

      <div
        className="min-h-screen bg-[#010C15] text-white flex flex-col relative"
        style={{ fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace" }}
      >
        {/* Atmospheric teal glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 65% 48%, rgba(67,217,173,0.14) 0%, rgba(67,217,173,0.04) 45%, transparent 70%)",
          }}
        />

        <Nav activePage="home" onNavigate={onNavigate} />

        <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 px-6 sm:px-10 md:px-16 lg:px-24 py-12 lg:py-0">
          <div className="flex-1 max-w-xl w-full">
            <p className="text-[#607B96] text-sm mb-3">I am</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
              Kyle Allbright
            </h1>
            <p className="text-[#43D9AD] text-base sm:text-lg lg:text-xl mb-10">
              &gt; Full Stack developer
            </p>
            <div className="text-sm space-y-1">
              <p className="text-[#607B96]">// find my profile on Github:</p>
              <p className="mt-3">
                <span className="text-[#607B96]">const githubLink = </span>
                <a
                  href="https://github.com/LibertasLTD"
                  className="underline underline-offset-2 hover:opacity-80 transition-opacity break-all"
                  style={{ color: "#E99D42" }}
                >
                  &quot;https://github.com/LibertasLTD&quot;
                </a>
              </p>
            </div>
          </div>
        </main>

        <footer className="relative z-10 flex items-center gap-5 px-6 py-4 border-t border-[#1E2D3D] text-sm">
          <span className="text-[#607B96]">find me in:</span>
          <a
              href="https://uk.linkedin.com/in/kyleallbright"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#607B96] hover:text-white transition-colors border border-[#1E2D3D] p-[9px] hover:border-[#607B96]"
>
            <LinkedInIcon />
          </a>
        </footer>
      </div>
    </>
  );
}
