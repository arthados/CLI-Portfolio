import React from "react";
import { experience } from "../content";

function Experience() {
  return (
    <section id="experience" style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2 style={{ fontFamily: "var(--font-mono)", borderBottom: "1px solid var(--surface-color)", paddingBottom: "10px", color: "var(--accent-color)" }}>/ experiences</h2>
      <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "30px" }}>
        {experience.map((job, index) => (
          <div key={index} style={{ background: "var(--surface-color)", padding: "25px", borderRadius: "8px", borderLeft: "4px solid var(--accent-color)" }}>
            <h3 style={{ margin: "0 0 5px 0", color: "var(--text-primary)" }}>{job.role} <span style={{ color: "var(--accent-color)" }}>@ {job.company}</span></h3>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0 0 15px 0" }}>{job.timeline} | {job.location}</p>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--text-primary)", lineHeight: "1.7" }}>
              {job.responsibilities.map((item, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;