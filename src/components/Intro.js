import React from "react";
import "../styles/Global.css";

function Intro() {
  return (
    <section id="intro" style={{ padding: "100px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ background: "var(--surface-color)", padding: "10px", borderRadius: "8px 8px 0 0", display: "flex", gap: "6px" }}>
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }}></span>
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#eab308" }}></span>
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e" }}></span>
        </div>
        <div style={{ background: "var(--code-bg)", color: "var(--code-text)", fontFamily: "var(--font-mono)", padding: "40px", borderRadius: "0 0 8px 8px", textAlign: "left", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
          <p style={{ color: "var(--text-secondary)" }}>{/* Welcome to the terminal */}</p>
          <h1 style={{ color: "var(--text-primary)", fontSize: "2.5rem", margin: "10px 0" }}>
            Hi, I'm <span style={{ color: "var(--accent-color)" }}>Karma Kansara</span>.
          </h1>
          <h2 style={{ color: "var(--text-secondary)", fontSize: "1.5rem", marginBottom: "20px" }}>
            I build & ship production systems at scale.
          </h2>
          <p style={{ color: "var(--text-primary)", lineHeight: "1.6" }}>
             Full-Stack Engineer dedicated to architecting resilient, event-driven systems and high-performance AI integrations. I transform complex data challenges into scalable infrastructure and intuitive user experiences, with a focus on production-grade reliability and data-driven decision-making.
          </p>
          <div style={{ marginTop: "40px" }}>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{ color: "var(--bg-color)", background: "var(--accent-color)", textDecoration: "none", padding: "12px 24px", borderRadius: "4px", fontWeight: "bold" }}>Download_CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;