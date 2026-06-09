// src/components/Terminal.js
import React, { useState, useEffect, useRef } from "react";
import { personalInfo, experience, projects, skills } from "../content";

function Terminal({ exitCLI }) {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom on new command
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Keep focus on input if clicking anywhere in the terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      let output = "";

      switch (cmd) {
        case "help":
          output = (
            <div
              style={{ paddingLeft: "10px", color: "var(--text-secondary)" }}
            >
              <p>Available commands:</p>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <span style={{ color: "var(--accent-color)" }}>whoami</span> -
                  Professional summary and CV
                </li>
                <li>
                  <span style={{ color: "var(--accent-color)" }}>
                    experiences
                  </span>{" "}
                  - View my work history
                </li>
                <li>
                  <span style={{ color: "var(--accent-color)" }}>projects</span>{" "}
                  - View my software projects & GitHub links
                </li>
                <li>
                  <span style={{ color: "var(--accent-color)" }}>skills</span> -
                  View my technical capabilities
                </li>
                <li>
                  <span style={{ color: "var(--accent-color)" }}>contact</span>{" "}
                  - Get in touch
                </li>
                <li>
                  <span style={{ color: "var(--accent-color)" }}>clear</span> -
                  Clear the terminal
                </li>
                <li>
                  <span style={{ color: "var(--accent-color)" }}>close</span> -
                  Exit CLI mode and view standard portfolio
                </li>
              </ul>
            </div>
          );
          break;
        case "whoami":
          output = (
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <img
                src="/assets/profile.jpg"
                alt="Karma Kansara"
                style={{
                  width: "100px",
                  borderRadius: "8px",
                  border: "1px solid var(--surface-color)",
                }}
              />
              <div>
                <h3
                  style={{ margin: "0 0 10px 0", color: "var(--text-primary)" }}
                >
                  Karma Kansara
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: "1.5",
                    fontSize: "0.9rem",
                    maxWidth: "600px",
                  }}
                >
                  {personalInfo.summary}
                </p>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "var(--bg-color)",
                    background: "var(--accent-color)",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    display: "inline-block",
                    marginTop: "10px",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  Download CV
                </a>
              </div>
            </div>
          );
          break;
        case "experiences":
          output = (
            <div style={{ display: "flex", flexDirection: "column", gap: "25px", margin: "10px 0" }}>
              {experience.map((job, idx) => (
                <div key={idx} style={{ borderLeft: "2px solid var(--accent-color)", paddingLeft: "15px" }}>
                  <span style={{ color: "var(--text-primary)", fontWeight: "bold", fontSize: "1.05rem" }}>{job.role} @ {job.company}</span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem", display: "block", marginBottom: "10px" }}>{job.timeline}</span>
                  
                  {/* Loop through the responsibilities array and render them as terminal-style bullet points */}
                  <ul style={{ listStyleType: "none", padding: 0, margin: 0, color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} style={{ marginBottom: "8px", display: "flex", gap: "10px" }}>
                        <span style={{ color: "var(--accent-color)" }}>&gt;</span> 
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic", marginTop: "10px" }}>Type 'close' to view full details on standard page.</p>
            </div>
          );
          break;
          output = (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                margin: "10px 0",
              }}
            >
              {experience.map((job, idx) => (
                <div
                  key={idx}
                  style={{
                    borderLeft: "2px solid var(--accent-color)",
                    paddingLeft: "10px",
                  }}
                >
                  <span
                    style={{ color: "var(--text-primary)", fontWeight: "bold" }}
                  >
                    {job.role} @ {job.company}
                  </span>
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      display: "block",
                    }}
                  >
                    {job.timeline}
                  </span>
                </div>
              ))}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  fontStyle: "italic",
                }}
              >
                Type 'close' to view full details on standard page.
              </p>
            </div>
          );
          break;
        case "projects":
          output = (
            <div style={{ display: "flex", flexDirection: "column", gap: "25px", margin: "10px 0" }}>
              {projects.map((proj, idx) => (
                <div key={idx}>
                  {/* Title matches the look of Experience titles */}
                  <span style={{ color: "var(--text-primary)", fontWeight: "bold", fontSize: "1.05rem" }}>
                    {proj.title}
                  </span>

                  {/* Bullet points now use the same '>' design and color as Experience */}
                  <ul style={{ listStyleType: "none", padding: 0, margin: "10px 0", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                    {proj.description.map((point, i) => (
                      <li key={i} style={{ marginBottom: "8px", display: "flex", gap: "10px" }}>
                        <span style={{ color: "var(--accent-color)" }}>&gt;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack and link styling */}
                  <p style={{ margin: "5px 0", fontSize: "0.85rem", color: "var(--code-text)" }}>
                    [{proj.techStack.join(" | ")}]
                  </p>
                  <a href={proj.github} target="_blank" rel="noreferrer" style={{ color: "var(--accent-color)", fontSize: "0.85rem" }}>
                    {proj.github}
                  </a>
                </div>
              ))}
            </div>
          );
          break;
        case "skills":
          output = (
            <div
              style={{
                margin: "10px 0",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {Object.keys(skills).map((cat) => (
                <div key={cat}>
                  <strong
                    style={{ color: "var(--accent-color)", fontSize: "0.9rem" }}
                  >
                    {cat}:
                  </strong>
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      marginLeft: "5px",
                    }}
                  >
                    {skills[cat].join(", ")}
                  </span>
                </div>
              ))}
            </div>
          );
          break;
        case "contact":
          output = (
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                margin: "10px 0",
                color: "var(--text-secondary)",
              }}
            >
              <li>
                📧 Email:{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{ color: "var(--accent-color)" }}
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>📱 Phone: {personalInfo.phone}</li>
              <li>
                🔗 LinkedIn:{" "}
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--accent-color)" }}
                >
                  {personalInfo.linkedin}
                </a>
              </li>
              <li>
                💻 GitHub:{" "}
                <a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--accent-color)" }}
                >
                  {personalInfo.github}
                </a>
              </li>
            </ul>
          );
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "close":
          exitCLI();
          return;
        case "":
          output = "";
          break;
        default:
          output = (
            <p style={{ color: "#ef4444", margin: "5px 0" }}>
              zsh: command not found: {cmd}. Type 'help' for available commands.
            </p>
          );
      }

      setHistory([...history, { cmd, output }]);
      setInput("");
    }
  };

  return (
    <section
      id="terminal-view"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={handleTerminalClick}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            background: "var(--surface-color)",
            padding: "12px",
            borderRadius: "8px 8px 0 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#ef4444",
                cursor: "pointer",
              }}
              onClick={exitCLI}
            ></span>
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#eab308",
              }}
            ></span>
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#22c55e",
              }}
            ></span>
          </div>
          <span
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.85rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            root@karmakansara ~ zsh
          </span>
          <div style={{ width: "40px" }}></div>
        </div>

        {/* Terminal Body */}
        <div
          className="terminal-scroll-area"
          style={{
            background: "var(--code-bg)",
            color: "var(--code-text)",
            fontFamily: "var(--font-mono)",
            padding: "20px",
            borderRadius: "0 0 8px 8px",
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          {/* New Graphic Banner */}
          <pre style={{ color: "#22c55e", marginBottom: "20px", fontWeight: "bold", fontSize: "0.8rem" }}>
{`
  λ  K A R M A   K A N S A R A  ★
  
 __      __       .__                                     
/  \\    /  \\ ____ |  |   ____  ____   _____   ____  
\\   \\/\\/   // __ \\|  | _/ ___\\/  _ \\ /     \\_/ __ \\ 
 \\        /\\  ___/|  |_\\  \\__(  <_> )  Y Y  \\  ___/ 
  \\__/\\  /  \\___  >____/\\___  >____/|__|_|  /\\___  >
       \\/       \\/          \\/            \\/     \\/ 
       
      [ Welcome to the Portfolio Terminal ]
      
`}
          </pre>

          <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
            Type <span style={{ color: "var(--accent-color)" }}>'help'</span> to
            see a list of available commands. <br />
            Type <span style={{ color: "var(--accent-color)" }}>
              'close'
            </span>{" "}
            or click the red dot to enter GUI mode.
          </p>

          {/* History Output */}
          {history.map((entry, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  color: "var(--text-primary)",
                }}
              >
                <span style={{ color: "#4ade80" }}>karma@portfolio:~$</span>
                <span>{entry.cmd}</span>
              </div>
              <div style={{ marginTop: "5px" }}>{entry.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              color: "var(--text-primary)",
            }}
          >
            <span style={{ color: "#4ade80" }}>karma@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
              spellCheck="false"
              autoComplete="off"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--code-text)",
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                outline: "none",
                width: "100%",
                caretColor: "var(--accent-color)",
              }}
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
}

export default Terminal;
