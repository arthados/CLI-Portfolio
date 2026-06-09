import React from "react";
import { personalInfo, skills } from "../content";
import "../styles/Global.css";

function About() {
  return (
    <section id="about" style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2 style={{ fontFamily: "var(--font-mono)", borderBottom: "1px solid var(--surface-color)", paddingBottom: "10px", color: "var(--accent-color)" }}>/ about-me</h2>
      
      <div style={{ display: "flex", gap: "40px", alignItems: "center", marginTop: "30px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <img src="/assets/profile.jpg" alt={personalInfo.name} style={{ width: "100%", maxWidth: "280px", borderRadius: "8px", border: "2px solid var(--surface-color)" }} onError={(e) => { e.target.src = "https://via.placeholder.com/280?text=Karma+Kansara"; }} />
        </div>
        <div style={{ flex: "2 1 400px" }}>
          <p style={{ lineHeight: "1.8", color: "var(--text-secondary)", fontSize: "1.05rem" }}>{personalInfo.summary}</p>
          <div style={{ marginTop: "20px", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
            <p>📧 <a href={`mailto:${personalInfo.email}`} style={{ color: "var(--accent-color)" }}>{personalInfo.email}</a></p>
            <p>🔗 <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" style={{ color: "var(--accent-color)" }}>{personalInfo.linkedin}</a></p>
            <p>💻 <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" style={{ color: "var(--accent-color)" }}>{personalInfo.github}</a></p>
          </div>
        </div>
      </div>

      <h3 style={{ fontFamily: "var(--font-mono)", marginTop: "60px", color: "var(--accent-color)" }}>/ tech-capabilities</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {Object.keys(skills).map((category) => (
          <div key={category} style={{ background: "var(--surface-color)", padding: "20px", borderRadius: "6px", borderLeft: "4px solid var(--accent-color)" }}>
            <h4 style={{ margin: "0 0 10px 0", fontFamily: "var(--font-mono)", textTransform: "uppercase", fontSize: "0.85rem", color: "var(--text-secondary)" }}>{category.replace(/([A-Z])/g, ' $1')}</h4>
            <ul style={{ margin: 0, paddingLeft: "16px", color: "var(--text-primary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
              {skills[category].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;