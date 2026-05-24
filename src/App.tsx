import { useState } from "react";
import type { Page } from "./types";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  if (page === "about") return <AboutPage onNavigate={setPage} />;
  if (page === "projects") return <ProjectsPage onNavigate={setPage} />;
  
  return <HomePage onNavigate={setPage} />;
}
