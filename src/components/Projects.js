import React from "react";
import { projects } from "../content";

function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2 style={{ fontFamily: "var(--font-mono)", borderBottom: "1px solid var(--surface-color)", paddingBottom: "10px", color: "var(--accent-color)" }}>/ software-projects</h2>
      
      <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "30px" }}>
        {projects.map((project, index) => (
          <div key={index} style={{ background: "var(--surface-color)", padding: "25px", borderRadius: "8px", borderLeft: "4px solid var(--accent-color)" }}>
            
            {/* Title and Tech Stack */}
            <h3 style={{ margin: "0 0 5px 0", color: "var(--text-primary)" }}>{project.title}</h3>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0 0 15px 0" }}>
              [{project.techStack.join(" | ")}]
            </p>
            
            {/* Project Description Points */}
            <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--text-primary)", lineHeight: "1.7" }}>
              {project.description.map((item, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>{item}</li>
              ))}
            </ul>

            {/* GitHub Link */}
            <div style={{ marginTop: "20px" }}>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: "var(--accent-color)", textDecoration: "none", fontSize: "0.9rem", fontFamily: "var(--font-mono)" }}
              >
                &gt; View Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;