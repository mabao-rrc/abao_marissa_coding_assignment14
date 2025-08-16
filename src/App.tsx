// src/App.tsx

// React for JSX and components
import React from 'react';

// Global CSS (kept minimal; component styles live with components)
import './App.css';

// React Router v6 for client-side navigation (SPA behavior)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// App sections (each one is a focused, reusable component)
import Navbar from './components/Navbar';
import BasicInfo from './components/BasicInfo';
import WorkList from './components/WorkList';
import Skills from './components/Skills';
import Resources from './components/Resources';

// Centralized content (single source of truth for copy and lists)
import { basicInfo, workItems, skills, resources } from './data';

/**
 * App
 * ----
 * Top-level wiring for the portfolio SPA.
 * - Provides global layout (centered container, consistent padding).
 * - Renders Navbar persistently across routes.
 * - Defines a simple route table: /, /work, /skills, /resources, and a 404.
 * - Passes section data via props so content is decoupled from presentation.
 *
 * Notes for marker / future edits:
 * - To add a new section: create a component in /components, add content in /data (if needed),
 *   add a <Route> here, and a <NavLink> in Navbar.tsx.
 * - React Router v6 uses `element={<Component />}` (not `component={...}`).
 * - Sections are wrapped in <section> with aria-labelledby for basic accessibility.
 */
function App() {
  return (
    // Router enables navigation without full page reloads (SPA)
    <Router>
      {/* Page container:
          - Constrains line length for readability (~960px).
          - Centers content and adds breathing room around sections. */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem' }}>
        {/* Global navigation:
            - Always visible.
            - Navbar uses <NavLink> to style the active route. */}
        <Navbar />

        {/* Route table:
            - Each Route maps a URL path to the UI to display.
            - Client-only transitions; the server is not involved after initial load. */}
        <Routes>
          {/* Home / About:
              - Renders the BasicInfo section.
              - Spreads `basicInfo` so the component receives exactly what it needs. */}
          <Route path="/" element={<BasicInfo {...basicInfo} />} />

          {/* Work:
              - Semantic <section> for screen readers.
              - WorkList receives an array of items; cards render dynamically from data.ts. */}
          <Route
            path="/work"
            element={
              <section aria-labelledby="work-heading">
                <h2 id="work-heading">Work</h2>
                <WorkList items={workItems} />
              </section>
            }
          />

          {/* Skills:
              - Skills expects { description, languages, tools }.
              - The description comes directly from data.ts so you can edit copy in one place. */}
          <Route
            path="/skills"
            element={
              <section aria-labelledby="skills-heading">
                <h2 id="skills-heading">Skills</h2>
                <Skills {...skills} />
              </section>
            }
          />

          {/* Resources:
              - Helpful links (Docker, Storybook, etc.) with icons stored under /public/images.
              - Items come from data.ts to keep presentation pure. */}
          <Route
            path="/resources"
            element={
              <section aria-labelledby="resources-heading">
                <h2 id="resources-heading">Resources</h2>
                <Resources items={resources} />
              </section>
            }
          />

          {/* Catch-all (404):
              - Simple fallback for unknown paths.
              - Replace with a styled 404 component later if desired. */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>

        {/* Implementation notes:
            - If you deploy under a subpath (e.g., GitHub Pages), you may need <Router basename="/your-subpath">.
            - For code-splitting, wrap route elements with React.lazy/Suspense.
            - Keep all section copy in data.ts to make future edits low-risk. */}
      </div>
    </Router>
  );
}

export default App;
