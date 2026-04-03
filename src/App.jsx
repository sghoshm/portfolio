import { Button } from "@/components/ui/button";
import { Mail, Github, MapPin, Phone, Bike, ArrowLeft, Briefcase, Code, BookOpen, Award, Heart, Database, Zap, ExternalLink, Linkedin, Globe } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedRole, setSelectedRole] = useState("qa"); // Default role: QA

  const pages = {
    home: "HOME",
    experience: "EXPERIENCE",
    projects: "PROJECTS & CASE STUDIES",
    education: "EDUCATION",
    skills: "SKILLS BY ROLE",
    qaArtifacts: "QA ARTIFACTS",
    infrastructure: "INFRASTRUCTURE & NETWORKING",
    contact: "CONTACT & AVAILABILITY"
  };

  const allProjects = [
    {
      title: "Nexus OSINT Platform",
      period: "2025 - 2026",
      github: "https://github.com/sghoshm/nexus-osint",
      release: "https://nexusint.netlify.app",
      desc: {
        qa: "Led validation and API integrity testing for a comprehensive, high-performance client-side OSINT intelligence engine.",
        dev: "Developed a comprehensive, high-performance client-side OSINT intelligence engine aggregating data from 30+ public sources.",
        network: "Developed the networking and intelligence gathering capabilities of a high-performance OSINT engine."
      },
      details: {
        qa: [
          "Validated real-world public API integrations against simulated data fallbacks.",
          "Tested the proprietary 'Fake Filter' confidence scoring algorithm for edge cases and accuracy.",
          "Performed UI/UX and functional testing on dynamic, motion-enhanced dashboard modules.",
          "Verified data points across IP, Domain, Email, Crypto, Username, and Phone intelligence features."
        ],
        dev: [
          "Built a robust, multi-module architecture for IP, Domain, Email, Crypto, and Phone intelligence.",
          "Replaced simulated data with functional, real-world public API integrations.",
          "Engineered a proprietary 'Fake Filter' for confidence scoring of intelligence data.",
          "Designed a premium, dynamic, animated, and highly responsive user interface."
        ],
        network: [
          "Integrated querying mechanisms for deep IP and Domain intelligence gathering.",
          "Handled cross-origin requests and implemented secure connections to 30+ public data sources.",
          "Managed client-side API limits, handling throttling, and optimizing network requests.",
          "Contributed to data aggregation strategies for Crypto, Email, and Phone intelligence."
        ]
      },
      learnings: {
        qa: ["API Testing", "Data Validation", "Algorithm Testing", "UI/UX Validation"],
        dev: ["React", "API Integrations", "OSINT", "UI/UX Design", "Data Aggregation"],
        network: ["IP/Domain Intelligence", "Network Requests", "API Rate Limiting", "OSINT"]
      }
    },
    {
      title: "Interactive Developer Portfolio",
      period: "2025",
      github: "https://github.com/sghoshm/portfolio",
      release: "https://sumon.online",
      desc: {
        qa: "Tested and validated an interactive, role-adaptive responsive web application.",
        dev: "Designed and developed a highly interactive, animated, role-adaptive portfolio using React and Vite.",
        network: "Deployed and managed the hosting infrastructure for a React-based interactive portfolio."
      },
      details: {
        qa: [
          "Verified responsive design across mobile, tablet, and desktop breakpoints.",
          "Tested role-switching functionality (QA, Dev, NA) to ensure accurate cross-view data mapping.",
          "Validated performance optimizations and external link routing."
        ],
        dev: [
          "Architected a single-page application with dynamic data rendering based on user role selection.",
          "Implemented fluid animations, glassmorphism UI, and custom hover effects using inline styling.",
          "Integrated React-Lucide for scalable iconography and managed state via React Hooks."
        ],
        network: [
          "Configured deployment pipelines and automated builds via Vite.",
          "Managed domain, DNS handling, and HTTPS certificate configuration.",
          "Optimized asset delivery and structural caching mechanisms."
        ]
      },
      learnings: {
        qa: ["Responsive Testing", "State Validation", "Cross-Browser Compatibility"],
        dev: ["React Hooks", "Vite", "UI/UX Animation", "Dynamic Rendering"],
        network: ["Vite Build Systems", "Web Hosting", "Asset Optimization"]
      }
    },
    {
      title: "Flappy Tori",
      period: "2024",
      github: "https://github.com/sghoshm/flappy-tori",
      release: "https://flappytori.netlify.app/",
      desc: {
        qa: "Led functional and gameplay testing for a responsive browser-based arcade game.",
        dev: "Built a Flappy Bird-style browser game using React, TypeScript, and Vite.",
        network: "Ensured robust local data persistence and seamless deployment."
      },
      details: {
        qa: [
          "Validated collision detection algorithms and physics behaviors under varying difficulties (Easy, Medium, Hard).",
          "Tested local storage mechanics ensuring high scores and top 3 leaderboards persisted between sessions.",
          "Verified responsive scaling ensuring the playable area adapts correctly to mobile and desktop screens."
        ],
        dev: [
          "Developed custom game loop and physics engine (gravity, pipe generation, collision).",
          "Implemented a tiered difficulty system adjusting pipe gap sizes and speeds.",
          "Engineered browser-local state persistence storing high scores and historical runs."
        ],
        network: [
          "Delivered optimized production bundles reducing load times.",
          "Managed browser DOM API integrations for optimal storage scaling.",
          "Enabled smooth asset delivery pipelines for static game media."
        ]
      },
      learnings: {
        qa: ["Game Testing", "Physics Validation", "Local Storage Testing"],
        dev: ["React", "TypeScript", "Game Loops", "Collision Math"],
        network: ["Production Deployments", "LocalStorage Syncing"]
      }
    },
    {
      title: "Pokémon Arena",
      period: "2024",
      github: "https://github.com/sghoshm/pokemon-arena",
      release: "https://pokemonsan.netlify.app/",
      desc: {
        qa: "Validated game state flow, battle logic, and victory conditions for a turn-based combat simulator.",
        dev: "Developed a retro-style turn-based Pokémon battle simulator using React and NES.css.",
        network: "Deployed and configured the application hosting on Netlify."
      },
      details: {
        qa: [
          "Tested complex turn-based logic ensuring accurate attack accuracy mapping and hit-point deductions.",
          "Validated state constraints like minimum HP floors, attack use limits, and end-of-game reset flows.",
          "Performed UI testing confirming NES.css styling rendered correctly across scenarios."
        ],
        dev: [
          "Architected turn-by-turn state management governing the player and AI action phases.",
          "Implemented RNG factors for combat mechanics (hit accuracy, critical variations) and Pokemon assignment.",
          "Integrated audio feedback mapped to specific battle outcomes."
        ],
        network: [
          "Configured Netlify continuous deployment tracking the main GitHub branch.",
          "Resolved asset pathing ensuring attack sounds and sprites loaded cleanly over HTTPS.",
          "Optimized delivery headers for low-latency browser experiences."
        ]
      },
      learnings: {
        qa: ["State Machine Testing", "RNG Validation", "Edge Case Handling"],
        dev: ["State Management", "Retro UI (NES.css)", "Audio Integration"],
        network: ["Netlify Deployments", "Asset Caching"]
      }
    },
    {
      title: "Hand Gesture Controlled Mouse",
      period: "2023",
      github: "https://github.com/sghoshm/hand-gesture-mouse",
      desc: {
        qa: "Developed and tested a computer vision application translating physical gestures to OS controls.",
        dev: "Engineered a Python-based computer vision tool utilizing OpenCV for real-time gesture recognition.",
        network: "Secured local hardware interfacing enabling direct camera-to-OS interactions."
      },
      details: {
        qa: [
          "Designed test cases measuring gesture accuracy, latency, and false-positive filtering.",
          "Debugged inconsistent input edge-cases relating to lighting and varying background complexity.",
          "Validated OS interaction accuracy (clicking, moving)."
        ],
        dev: [
          "Implemented hand tracking landmarks converting coordinate spaces into accurate screen coordinates.",
          "Developed smoothing algorithms reducing cursor jitter during real-world translations.",
          "Mapped specific gesture subsets directly to system events like left/right click and drag."
        ],
        network: [
          "Configured direct system hardware bindings securing peripheral inputs.",
          "Analyzed memory footprint metrics ensuring long-running processes remained stable.",
          "Containerized dependency paths establishing cross-platform environment consistency."
        ]
      },
      learnings: {
        qa: ["Computer Vision Testing", "Latency Monitoring", "Noise Reduction Validation"],
        dev: ["Python", "OpenCV", "Mathematics", "System Interaction"],
        network: ["Hardware Bindings", "Process Optimization"]
      }
    }
  ];

  return (
    <div style={{ background: "#000000", color: "#ffffff", minHeight: "100vh", overflow: "hidden" }}>
      {/* Animated background blobs */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: 0, left: 0, width: "400px", height: "400px",
          background: "linear-gradient(135deg, #06b6d4, #3b82f6)", opacity: 0.15,
          borderRadius: "50%", filter: "blur(60px)", animation: "pulse 4s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute", top: "30%", right: 0, width: "400px", height: "400px",
          background: "linear-gradient(135deg, #a855f7, #ec4899)", opacity: 0.12,
          borderRadius: "50%", filter: "blur(60px)", animation: "pulse 4s ease-in-out infinite 2s"
        }}></div>
        <div style={{
          position: "absolute", bottom: 0, left: "50%", width: "400px", height: "400px",
          background: "linear-gradient(135deg, #06b6d4, #3b82f6)", opacity: 0.08,
          borderRadius: "50%", filter: "blur(60px)", animation: "pulse 4s ease-in-out infinite 4s"
        }}></div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.2; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", zIndex: 1, animation: "slideIn 0.5s ease-out" }}>
        {/* HEADER */}
        <header style={{ padding: "2rem 1.5rem", textAlign: "center", borderBottom: "1px solid rgba(6, 182, 212, 0.2)" }}>
          <h1 style={{
            fontSize: "2.5rem", fontWeight: "900", marginBottom: "0.25rem",
            background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
          }}>
            SUMON SOURABH GHOSH
          </h1>
          <p style={{ fontSize: "1rem", color: "#a855f7", fontWeight: "700" }}>Former - Assistant System Engineer (TCS)</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem", fontSize: "0.85rem", flexWrap: "wrap" }}>
            <a href="tel:+919563157811" style={{ color: "#06b6d4", textDecoration: "none" }}>+919563157811</a>
            <span style={{ color: "#9ca3af" }}>•</span>
            <a href="mailto:sumon38.sourabh@gmail.com" style={{ color: "#06b6d4", textDecoration: "none" }}>sumon38.sourabh@gmail.com</a>
            <span style={{ color: "#9ca3af" }}>•</span>
            <a href="https://github.com/sghoshm" target="_blank" rel="noopener noreferrer" style={{ color: "#06b6d4", textDecoration: "none" }}>github.com/sghoshm</a>
          </div>
        </header>

        {/* HOME PAGE - INTERACTIVE GAME STYLE */}
        {currentPage === "home" && (
          <div style={{ padding: "1.5rem 1rem", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            {/* ROLE SWITCHER */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              {[
                { id: "qa", label: "🧪 QA Engineer", color: "#06b6d4" },
                { id: "dev", label: "💻 Software Developer", color: "#3b82f6" },
                { id: "network", label: "🌐 Network/System Admin", color: "#a855f7" }
              ].map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  style={{
                    background: selectedRole === role.id ? `linear-gradient(135deg, ${role.color}, ${role.color}99)` : "transparent",
                    border: `2px solid ${role.color}`,
                    color: "#ffffff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.75rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    fontSize: "0.9rem"
                  }}
                  onMouseEnter={(e) => {
                    if (selectedRole !== role.id) {
                      e.currentTarget.style.background = `rgba(${role.color === "#06b6d4" ? "6, 182, 212" : role.color === "#3b82f6" ? "59, 130, 246" : "168, 85, 247"}, 0.2)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedRole !== role.id) {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {role.label}
                </button>
              ))}
            </div>

            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#ffffff", marginBottom: "0.5rem", textShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}>
                🎮 EXPLORE MY JOURNEY
              </h2>
              <p style={{ color: "#d1d5db", fontSize: "0.95rem", maxWidth: "700px", margin: "0 auto" }}>
                Click on any card to discover more. Unlock my professional story!
              </p>
            </div>

            {/* QUICK STATS ROW */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginBottom: "2rem", maxWidth: "1100px", margin: "0 auto 2rem auto", width: "100%" }}>
              {[
                { stat: "2", label: "Years Experience" },
                { stat: "5", label: "Major Projects" },
                { stat: "20+", label: "Tech Skills" },
                { stat: "M.E. / B.E.", label: "Degree Holder" }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: "rgba(6, 182, 212, 0.1)", border: "1px solid rgba(6, 182, 212, 0.3)",
                  padding: "1rem", borderRadius: "0.75rem", textAlign: "center"
                }}>
                  <p style={{ fontSize: "1.5rem", fontWeight: "900", color: "#06b6d4", marginBottom: "0.25rem" }}>{item.stat}</p>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af", fontWeight: "600" }}>{item.label}</p>
                </div>
              ))}
            </div>

            {/* GAME CARDS GRID - ROLE-SPECIFIC LAYOUT */}
            <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
              {/* Cards filtered by selected role */}
              <div style={{ display: "flex", justifyContent: "center", gap: "0.8rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                {[
                  // Common cards for all roles
                  { id: "experience", icon: Briefcase, title: "Professional Experience", desc: "2 years of Professional Experience", color: "#3b82f6", emoji: "💼", roles: ["qa", "dev", "network"] },
                  { id: "projects", icon: Code, title: "Projects & Case Studies", desc: "5 major projects", color: "#06b6d4", emoji: "🚀", roles: ["qa", "dev", "network"] },

                  // QA-specific
                  { id: "qaArtifacts", icon: Award, title: "QA Artifacts", desc: "Test cases, reports", color: "#ec4899", emoji: "📋", roles: ["qa"] },

                  // Developer-specific

                  // Network/Admin-specific
                  { id: "infrastructure", icon: Database, title: "Infrastructure & Networking", desc: "Server, DNS, SSL", color: "#f43f5e", emoji: "🌐", roles: ["network"] },

                  // Common
                  { id: "skills", icon: Zap, title: "Skills by Role", desc: "20+ technologies", color: "#a855f7", emoji: "⚡", roles: ["qa", "dev", "network"] },
                  { id: "education", icon: BookOpen, title: "Education", desc: "M.E. / B.E.", color: "#ec4899", emoji: "📚", roles: ["qa", "dev", "network"] },
                  { id: "contact", icon: Mail, title: "Contact & Availability", desc: "Get in touch", color: "#f43f5e", emoji: "💌", roles: ["qa", "dev", "network"] }
                ].filter(card => card.roles.includes(selectedRole)).map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.id}
                      onClick={() => setCurrentPage(card.id)}
                      style={{
                        background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                        border: `2px solid ${card.color}33`, borderRadius: "0.9rem",
                        padding: "1.3rem 1.1rem", transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)", cursor: "pointer",
                        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                        width: "195px", height: "235px", justifyContent: "space-between",
                        position: "relative", overflow: "hidden"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1) rotateY(5deg)";
                        e.currentTarget.style.borderColor = card.color;
                        e.currentTarget.style.background = "rgba(15, 23, 42, 0.95)";
                        e.currentTarget.style.boxShadow = `0 20px 60px ${card.color}44, inset 0 0 30px ${card.color}22`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1) rotateY(0)";
                        e.currentTarget.style.borderColor = card.color + "33";
                        e.currentTarget.style.background = "rgba(15, 23, 42, 0.7)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div style={{ fontSize: "1.8rem", marginBottom: "0.2rem" }}>{card.emoji}</div>
                      <div style={{ padding: "0.7rem", background: `linear-gradient(135deg, ${card.color}22, ${card.color}44)`, borderRadius: "0.5rem", marginBottom: "0.6rem", width: "55px", height: "55px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={26} color={card.color} />
                      </div>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: "900", color: "#ffffff", marginBottom: "0.2rem" }}>{card.title}</h3>
                      <p style={{ color: "#d1d5db", fontSize: "0.7rem", lineHeight: "1.3" }}>{card.desc}</p>
                      <div style={{ marginTop: "auto", color: card.color, fontWeight: "700", fontSize: "0.7rem" }}>
                        ▶ EXPLORE
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PROFESSIONAL SUMMARY */}
            <div style={{
              background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "1rem",
              padding: "1.5rem", maxWidth: "1100px", margin: "1rem auto", width: "100%"
            }}>
              <h3 style={{ fontSize: "1rem", fontWeight: "900", color: "#06b6d4", marginBottom: "0.8rem" }}>📋 PROFESSIONAL SUMMARY</h3>
              <p style={{ color: "#d1d5db", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
                {selectedRole === "qa" ? "Dedicated QA Engineer with 2 years of professional experience at Tata Consultancy Services (TCS) as an Assistant Systems Engineer, specializing in Agile-driven functional, regression, and deployment validation. Drawing upon a strong academic foundation—holding a B.E. and currently pursuing an M.E./M.Tech in Electronics and Communication Engineering—I possess a deep, structural understanding of application workflows, backend behavior, and server-side systems. Hands-on expertise with Python-based testing, dynamic API validation, and robust defect tracking enables me to conduct rigorous system-level validation, drive effective root-cause analysis, and consistently deliver high-quality, fault-tolerant software." : selectedRole === "dev" ? "Passionate Software Engineer with 2 years of professional experience at Tata Consultancy Services (TCS) as an Assistant Systems Engineer, architecting and building resilient backend services and interactive web platforms. Backed by a B.E. and an ongoing M.E./M.Tech in Electronics and Communication Engineering, I bring an analytical, engineering-first approach to software development. Equipped with hands-on expertise in React, Node.js, Python, and scalable Linux deployments, I specialize in forging comprehensive full-stack solutions. My DevOps-leaning mindset guarantees strong ownership of end-to-end deployments, secure API engineering, and optimized structural architecture." : "Strategic Network & Systems Administrator with 2 years of professional experience at Tata Consultancy Services (TCS) as an Assistant Systems Engineer, supporting mission-critical server deployments, secure infrastructural networking, and system-level operations. Grounded in a strong hardware and networking background via my B.E. and current M.E./M.Tech in Electronics and Communication Engineering, I am adept at bridging the gap between physical infrastructure and software architecture. My hands-on proficiency spans advanced Linux server environments, robust SSL/TLS security configurations, DNS management via Cloudflare tunneling, and proactive backend infrastructure validation, empowering seamless production-level reliability and extensive troubleshooting."}
              </p>
            </div>

            {/* DOWNLOAD RESUME BUTTON */}
            <div style={{ textAlign: "center", margin: "1.5rem auto", maxWidth: "1100px" }}>
              <a
                href={selectedRole === "qa" ? "/resumeqa.pdf" : selectedRole === "dev" ? "/resumedev.pdf" : "/resumena.pdf"}
                download={selectedRole === "qa" ? "Sumon_Sourabh_Ghosh_Resume_QA.pdf" : selectedRole === "dev" ? "Sumon_Sourabh_Ghosh_Resume_Dev.pdf" : "Sumon_Sourabh_Ghosh_Resume_NA.pdf"}
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                  color: "#ffffff",
                  padding: "1rem 2.5rem",
                  borderRadius: "0.8rem",
                  textDecoration: "none",
                  fontWeight: "900",
                  fontSize: "1rem",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08) translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(6, 182, 212, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(6, 182, 212, 0.3)";
                }}
              >
                ⬇️ DOWNLOAD RESUME
              </a>
            </div>
          </div>
        )}

        {/* EXPERIENCE PAGE */}
        {currentPage === "experience" && (
          <div style={{ padding: "3rem 1.5rem" }}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(6, 182, 212, 0.5)", color: "#06b6d4",
                padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", marginBottom: "2rem",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)";
                e.currentTarget.style.borderColor = "#06b6d4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)";
              }}
            >
              <ArrowLeft size={18} /> Back to Home
            </button>

            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#3b82f6", marginBottom: "2rem" }}>Professional Experience</h2>

            <div style={{ background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "1rem", padding: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "900", color: "#ffffff" }}>Assistant System Engineer</h3>
                <span style={{ color: "#3b82f6", fontWeight: "700" }}>06/2022 - 02/2024</span>
              </div>
              <p style={{ fontSize: "1.25rem", color: "#a855f7", fontWeight: "700", marginBottom: "0.5rem" }}>Tata Consultancy Services (TCS)</p>
              <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>India</p>

              <div style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1.5rem", borderRadius: "0.75rem", borderLeft: "4px solid #06b6d4" }}>
                <h4 style={{ color: "#06b6d4", fontWeight: "700", marginBottom: "1rem" }}>Key Responsibilities:</h4>
                <ul style={{ listStyle: "none", padding: 0, color: "#d1d5db", lineHeight: "2" }}>
                  {selectedRole === "qa" ? (
                    <>
                      <li>✓ Worked in Agile Scrum teams, collaborating with developers, testers, and stakeholders</li>
                      <li>✓ Performed manual testing including functional, regression, and sanity testing</li>
                      <li>✓ Designed and executed test cases based on business requirements and user workflows</li>
                      <li>✓ Logged, tracked, and verified defects to ensure proper resolution</li>
                      <li>✓ Assisted in backend and deployment validation, including API behavior and server response checks</li>
                      <li>✓ Participated in post-deployment testing and SSL/security verification activities</li>
                      <li>✓ Acted as Group Leader for trainee Assistant System Engineers</li>
                    </>
                  ) : selectedRole === "dev" ? (
                    <>
                      <li>✓ Worked as part of Agile development teams on backend-focused applications</li>
                      <li>✓ Developed and maintained backend services using Node.js and Firebase</li>
                      <li>✓ Assisted in deploying backend applications to Linux-based servers with SSL configuration</li>
                      <li>✓ Worked with AWS services for backend hosting and environment setup</li>
                      <li>✓ Integrated backend APIs with frontend applications built using React Native and Flutter</li>
                      <li>✓ Participated in deployment verification, monitoring, and post-deployment issue resolution</li>
                      <li>✓ Acted as Group Leader for trainee Assistant System Engineers</li>
                    </>
                  ) : (
                    <>
                      <li>✓ Worked in Agile teams supporting backend infrastructure and system operations</li>
                      <li>✓ Assisted in deploying applications on Linux-based servers with secure network and SSL/TLS configurations</li>
                      <li>✓ Performed server validation, connectivity checks, and post-deployment sanity testing</li>
                      <li>✓ Supported DNS configuration and secure traffic routing using Cloudflare</li>
                      <li>✓ Assisted in backend and API connectivity validation from an infrastructure perspective</li>
                      <li>✓ Participated in system monitoring and basic troubleshooting of deployment-related issues</li>
                      <li>✓ Acted as Group Leader for trainee Assistant System Engineers</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS PAGE */}
        {currentPage === "projects" && (
          <div style={{ padding: "3rem 1.5rem" }}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(6, 182, 212, 0.5)", color: "#06b6d4",
                padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", marginBottom: "2rem",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <ArrowLeft size={18} /> Back to Home
            </button>

            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#06b6d4", marginBottom: "2rem" }}>Software Engineering Projects & Case Studies</h2>

            <div style={{ display: "grid", gap: "2rem" }}>
              {allProjects.map((proj, idx) => (
                <div key={idx} style={{
                  background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                  border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "1rem",
                  padding: "2rem", transition: "all 0.3s", cursor: "pointer",
                  display: "flex", flexDirection: "column", height: "100%"
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "#06b6d4";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(6, 182, 212, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem", flexWrap: "wrap", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: "1.5rem", fontWeight: "900", color: "#ffffff", margin: 0 }}>{proj.title}</h3>
                      <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                        {proj.github && (
                          <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ color: "#a855f7", display: "flex", alignItems: "center", transition: "all 0.3s" }} title="GitHub Repository" onMouseEnter={(e) => { e.currentTarget.style.color = "#d8b4fe"; e.currentTarget.style.transform = "scale(1.1)" }} onMouseLeave={(e) => { e.currentTarget.style.color = "#a855f7"; e.currentTarget.style.transform = "scale(1)" }}>
                            <Github size={20} />
                          </a>
                        )}
                        {proj.release && (
                          <a href={proj.release} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", display: "flex", alignItems: "center", transition: "all 0.3s" }} title="Live Release" onMouseEnter={(e) => { e.currentTarget.style.color = "#93c5fd"; e.currentTarget.style.transform = "scale(1.1)" }} onMouseLeave={(e) => { e.currentTarget.style.color = "#3b82f6"; e.currentTarget.style.transform = "scale(1)" }}>
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    <span style={{ color: "#06b6d4", fontWeight: "700", whiteSpace: "nowrap" }}>{proj.period}</span>
                  </div>

                  <p style={{ color: "#d1d5db", marginBottom: "1.5rem", lineHeight: "1.6", fontSize: "0.95rem" }}>
                    {proj.desc[selectedRole]}
                  </p>

                  {/* Details by Role */}
                  <div style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1.5rem", borderRadius: "0.75rem", marginBottom: "1.5rem", borderLeft: "4px solid #06b6d4" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#cbd5e1", lineHeight: "1.8", fontSize: "0.9rem" }}>
                      {proj.details[selectedRole].map((detail, i) => (
                        <li key={i} style={{ marginBottom: "0.5rem", display: "flex", gap: "0.5rem" }}>
                          <span style={{ color: "#06b6d4", fontWeight: "900", flexShrink: 0 }}>✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
                    {proj.learnings[selectedRole].map((learn, i) => (
                      <span key={i} style={{
                        background: "rgba(6, 182, 212, 0.15)", color: "#06b6d4",
                        padding: "0.35rem 0.8rem", borderRadius: "9999px", fontSize: "0.8rem",
                        fontWeight: "700", border: "1px solid rgba(6, 182, 212, 0.3)",
                        transition: "all 0.3s"
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(6, 182, 212, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(6, 182, 212, 0.15)";
                        }}>
                        {learn}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SKILLS PAGE */}
        {currentPage === "skills" && (
          <div style={{ padding: "3rem 1.5rem" }}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(6, 182, 212, 0.5)", color: "#06b6d4",
                padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", marginBottom: "2rem",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <ArrowLeft size={18} /> Back to Home
            </button>

            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#a855f7", marginBottom: "2rem" }}>Technical Skills by Role</h2>

            {/* ROLE TABS */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              {[
                { id: "qa", label: "🧪 QA Engineer", color: "#06b6d4" },
                { id: "dev", label: "💻 Developer", color: "#3b82f6" },
                { id: "network", label: "🌐 Network/Admin", color: "#a855f7" }
              ].map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  style={{
                    background: selectedRole === role.id ? `linear-gradient(135deg, ${role.color}, ${role.color}99)` : "transparent",
                    border: `2px solid ${role.color}`,
                    color: "#ffffff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.75rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    fontSize: "0.95rem"
                  }}
                  onMouseEnter={(e) => {
                    if (selectedRole !== role.id) {
                      e.currentTarget.style.background = `rgba(${role.color === "#06b6d4" ? "6, 182, 212" : role.color === "#3b82f6" ? "59, 130, 246" : "168, 85, 247"}, 0.2)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedRole !== role.id) {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {role.label}
                </button>
              ))}
            </div>

            {/* QA ENGINEER SKILLS */}
            {selectedRole === "qa" && (
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "900", color: "#06b6d4", marginBottom: "1.5rem" }}>🧪 QA Engineer Skills</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                  {[
                    "Manual Testing", "Test Case Design & Execution", "Regression & Sanity Testing", "Defect Reporting & Validation",
                    "Agile / Scrum Methodology", "API & Backend Validation", "Python Testing Scripts", "Linux Server Basics",
                    "SSL & Security Verification", "Git & GitHub"
                  ].map((skill, idx) => (
                    <div key={idx} style={{
                      background: "rgba(6, 182, 212, 0.15)", border: "1px solid rgba(6, 182, 212, 0.3)",
                      padding: "1.5rem", borderRadius: "0.75rem", textAlign: "center", cursor: "pointer",
                      transition: "all 0.3s"
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.background = "rgba(6, 182, 212, 0.3)";
                        e.currentTarget.style.borderColor = "#06b6d4";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background = "rgba(6, 182, 212, 0.15)";
                        e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.3)";
                      }}>
                      <p style={{ color: "#06b6d4", fontWeight: "700", fontSize: "1.05rem" }}>{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DEVELOPER SKILLS */}
            {selectedRole === "dev" && (
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "900", color: "#3b82f6", marginBottom: "1.5rem" }}>💻 Developer Skills</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                  {[
                    "Python", "JavaScript & Node.js", "REST API Development", "Backend Authentication & Authorization",
                    "Linux Server Administration", "SSL / HTTPS Configuration", "Cloudflare DNS & Tunneling", "Docker & AWS",
                    "Git & GitHub"
                  ].map((skill, idx) => (
                    <div key={idx} style={{
                      background: "rgba(59, 130, 246, 0.15)", border: "1px solid rgba(59, 130, 246, 0.3)",
                      padding: "1.5rem", borderRadius: "0.75rem", textAlign: "center", cursor: "pointer",
                      transition: "all 0.3s"
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.background = "rgba(59, 130, 246, 0.3)";
                        e.currentTarget.style.borderColor = "#3b82f6";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background = "rgba(59, 130, 246, 0.15)";
                        e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                      }}>
                      <p style={{ color: "#3b82f6", fontWeight: "700", fontSize: "1.05rem" }}>{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NETWORK/ADMIN SKILLS */}
            {selectedRole === "network" && (
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "900", color: "#a855f7", marginBottom: "1.5rem" }}>🌐 Network / System Admin Skills</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                  {[
                    "Linux Server Administration", "Network Fundamentals (TCP/IP, DNS, HTTP/HTTPS)", "SSL / TLS Configuration", "Cloudflare DNS & Tunneling",
                    "Server Deployment & Validation", "System Monitoring & Troubleshooting", "Backend Connectivity & API Validation", "Python (System Automation)",
                    "Docker (Basics)", "AWS (Basic Infrastructure)", "Git & GitHub"
                  ].map((skill, idx) => (
                    <div key={idx} style={{
                      background: "rgba(168, 85, 247, 0.15)", border: "1px solid rgba(168, 85, 247, 0.3)",
                      padding: "1.5rem", borderRadius: "0.75rem", textAlign: "center", cursor: "pointer",
                      transition: "all 0.3s"
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.background = "rgba(168, 85, 247, 0.3)";
                        e.currentTarget.style.borderColor = "#a855f7";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background = "rgba(168, 85, 247, 0.15)";
                        e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.3)";
                      }}>
                      <p style={{ color: "#a855f7", fontWeight: "700", fontSize: "1.05rem" }}>{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* QA ARTIFACTS PAGE */}
        {currentPage === "qaArtifacts" && (
          <div style={{ padding: "3rem 1.5rem" }}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(6, 182, 212, 0.5)", color: "#06b6d4",
                padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", marginBottom: "2rem",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <ArrowLeft size={18} /> Back to Home
            </button>

            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#ec4899", marginBottom: "2rem" }}>🧪 QA Artifacts & Testing Portfolio</h2>

            {/* QA METRICS */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", marginBottom: "3rem", maxWidth: "1100px", margin: "0 auto 3rem auto" }}>
              {[
                { metric: "250+", label: "Test Cases Written" },
                { metric: "90+", label: "Bugs Reported" },
                { metric: "12", label: "Regression Cycles" },
                { metric: "8", label: "Agile Sprints" }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: "rgba(236, 72, 153, 0.15)", border: "1px solid rgba(236, 72, 153, 0.3)",
                  padding: "1.5rem", borderRadius: "0.75rem", textAlign: "center", cursor: "pointer",
                  transition: "all 0.3s"
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.background = "rgba(236, 72, 153, 0.3)";
                    e.currentTarget.style.borderColor = "#ec4899";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.background = "rgba(236, 72, 153, 0.15)";
                    e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.3)";
                  }}>
                  <p style={{ fontSize: "1.8rem", fontWeight: "900", color: "#ec4899", marginBottom: "0.5rem" }}>{item.metric}</p>
                  <p style={{ color: "#d1d5db", fontWeight: "600", fontSize: "0.9rem" }}>{item.label}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gap: "2rem" }}>
              {/* SAMPLE TEST CASES */}
              <div style={{
                background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(236, 72, 153, 0.3)", borderRadius: "1rem",
                padding: "2rem", transition: "all 0.3s"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#ec4899";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.3)";
                }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "900", color: "#ec4899", marginBottom: "1.5rem" }}>📄 Sample Test Cases</h3>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {[
                    { tc: "TC-001", title: "User Login - Valid Credentials", steps: "1. Enter valid email 2. Enter valid password 3. Click Login", expected: "User redirected to dashboard", type: "Functional" },
                    { tc: "TC-002", title: "User Registration - Duplicate Email", steps: "1. Fill registration form 2. Use existing email 3. Click Register", expected: "Error: Email already registered", type: "Negative" },
                    { tc: "TC-003", title: "Video Stream Load Test - 50 Concurrent Users", steps: "1. Simulate 50 users 2. Start streaming video 3. Monitor response time", expected: "Stream loads within 3 seconds", type: "Performance" }
                  ].map((testCase, i) => (
                    <div key={i} style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1rem", borderRadius: "0.75rem", borderLeft: "4px solid #06b6d4" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.75rem" }}>
                        <h4 style={{ color: "#06b6d4", fontWeight: "700", fontSize: "0.95rem", margin: 0 }}>{testCase.tc}: {testCase.title}</h4>
                        <span style={{ background: "rgba(236, 72, 153, 0.2)", color: "#ec4899", padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: "700" }}>{testCase.type}</span>
                      </div>
                      <p style={{ color: "#9ca3af", fontSize: "0.85rem", margin: "0.5rem 0" }}><strong>Steps:</strong> {testCase.steps}</p>
                      <p style={{ color: "#9ca3af", fontSize: "0.85rem", margin: 0 }}><strong>Expected:</strong> {testCase.expected}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BUG REPORTS */}
              <div style={{
                background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(236, 72, 153, 0.3)", borderRadius: "1rem",
                padding: "2rem", transition: "all 0.3s"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#ec4899";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.3)";
                }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "900", color: "#ec4899", marginBottom: "1.5rem" }}>🐞 Sample Bug Report</h3>
                <div style={{ display: "grid", gap: "1rem" }}>
                  <div style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1.5rem", borderRadius: "0.75rem", borderLeft: "4px solid #f43f5e" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                      <div>
                        <p style={{ color: "#a855f7", fontSize: "0.85rem", fontWeight: "700", margin: "0 0 0.25rem 0" }}>Bug ID</p>
                        <p style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: "700", margin: 0 }}>BUG-042</p>
                      </div>
                      <div>
                        <p style={{ color: "#a855f7", fontSize: "0.85rem", fontWeight: "700", margin: "0 0 0.25rem 0" }}>Severity</p>
                        <p style={{ color: "#f43f5e", fontSize: "0.95rem", fontWeight: "900", margin: 0 }}>🔴 CRITICAL</p>
                      </div>
                      <div>
                        <p style={{ color: "#a855f7", fontSize: "0.85rem", fontWeight: "700", margin: "0 0 0.25rem 0" }}>Module</p>
                        <p style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: "700", margin: 0 }}>User Authentication</p>
                      </div>
                      <div>
                        <p style={{ color: "#a855f7", fontSize: "0.85rem", fontWeight: "700", margin: "0 0 0.25rem 0" }}>Status</p>
                        <p style={{ color: "#06b6d4", fontSize: "0.95rem", fontWeight: "700", margin: 0 }}>Fixed</p>
                      </div>
                    </div>
                    <p style={{ color: "#d1d5db", fontSize: "0.9rem", margin: "0 0 0.75rem 0" }}><strong>Title:</strong> SSL Certificate Validation Bypass in Login Module</p>
                    <p style={{ color: "#d1d5db", fontSize: "0.9rem", margin: "0 0 0.75rem 0" }}><strong>Steps:</strong> 1. Access login page over HTTP 2. Enter credentials 3. Submit form</p>
                    <p style={{ color: "#d1d5db", fontSize: "0.9rem", margin: "0 0 0.75rem 0" }}><strong>Expected:</strong> Page redirects to HTTPS, SSL validation enforced</p>
                    <p style={{ color: "#d1d5db", fontSize: "0.9rem", margin: 0 }}><strong>Actual:</strong> Page allows HTTP access without SSL validation, security risk</p>
                  </div>
                </div>
              </div>

              {/* TEST PLAN */}
              <div style={{
                background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(236, 72, 153, 0.3)", borderRadius: "1rem",
                padding: "2rem", transition: "all 0.3s"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#ec4899";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.3)";
                }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "900", color: "#ec4899", marginBottom: "1.5rem" }}>📋 Test Plan Overview</h3>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {[
                    { section: "Scope", content: "Testing of Video Streaming Application (Frontend + Backend + Infrastructure)" },
                    { section: "Testing Types", content: "Functional, Security, Performance, Load, Usability, Regression, Negative Testing" },
                    { section: "Risk Assessment", content: "High: Authentication bypass, Data leak | Medium: Performance degradation | Low: UI issues" },
                    { section: "Test Environment", content: "Dev, Staging, Production (post-deployment) | Browser: Chrome, Firefox, Safari | Device: Desktop, Mobile" },
                    { section: "Entry Criteria", content: "Requirements finalized, Build deployed, Test cases reviewed, Test data prepared" },
                    { section: "Exit Criteria", content: "All critical bugs fixed, 95% test coverage, Sign-off from stakeholders" }
                  ].map((item, i) => (
                    <div key={i} style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1rem", borderRadius: "0.75rem", borderLeft: "4px solid #06b6d4" }}>
                      <p style={{ color: "#06b6d4", fontWeight: "700", fontSize: "0.9rem", margin: "0 0 0.5rem 0" }}>{item.section}</p>
                      <p style={{ color: "#d1d5db", fontSize: "0.9rem", margin: 0 }}>{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EDUCATION PAGE */}
        {currentPage === "education" && (
          <div style={{ padding: "3rem 1.5rem" }}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(6, 182, 212, 0.5)", color: "#06b6d4",
                padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", marginBottom: "2rem",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <ArrowLeft size={18} /> Back to Home
            </button>

            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#ec4899", marginBottom: "2rem" }}>Education</h2>

            <div style={{ display: "grid", gap: "1.5rem" }}>
              {[
                { 
                  degree: "B.E / B.Tech in Electronics and Communication Engineering", 
                  school: "Sathyabama Institute of Science and Technology", 
                  period: "08/2018 - 09/2022",
                  desc: "Cultivated a rigorous foundational understanding of digital systems, microprocessors, and network communications. This undergraduate program heavily emphasized circuit design, telecommunications, and signal processing, providing the critical hardware-level context necessary for my current work in full-stack architecture and system administration. Actively engaged in laboratory projects bridging hardware components with embedded software logic, laying the groundwork for robust logical troubleshooting and analytical problem-solving in production software environments." 
                },
                { 
                  degree: "M.E / M.Tech in Electronics and Communication Engineering", 
                  school: "Bengal Institute of Technology and Management", 
                  period: "08/2024 - 08/2026",
                  desc: "Currently advancing my overarching engineering expertise with a focused Master's degree, diving deeper into advanced communication networks, VLSI design, and modern digital signal processing. This academic pursuit tightly aligns with my professional trajectory in software and systems networking, seamlessly bridging theoretical high-frequency communications with practical, cloud-based networking and secure server infrastructure. The rigorous curriculum heavily enhances my ability to design fault-tolerant systems, perform deep-level network validations, and optimize complex data architectures at an institutional scale." 
                }
              ].map((edu, idx) => (
                <div key={idx} style={{
                  background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                  border: "1px solid rgba(236, 72, 153, 0.3)", borderRadius: "1rem",
                  padding: "2rem", transition: "all 0.3s"
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "#ec4899";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(236, 72, 153, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "1rem" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "900", color: "#ffffff", margin: 0 }}>{edu.degree}</h3>
                    <span style={{ color: "rgba(236, 72, 153, 0.9)", fontWeight: "800", background: "rgba(236, 72, 153, 0.15)", padding: "0.3rem 0.8rem", borderRadius: "99px", fontSize: "0.85rem", whiteSpace: "nowrap" }}>{edu.period}</span>
                  </div>
                  <p style={{ color: "#a855f7", fontWeight: "800", marginBottom: "1rem", borderLeft: "3px solid #a855f7", paddingLeft: "0.75rem" }}>{edu.school}</p>
                  <p style={{ color: "#d1d5db", fontSize: "0.95rem", lineHeight: "1.7" }}>{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INFRASTRUCTURE & NETWORKING PAGE */}
        {currentPage === "infrastructure" && (
          <div style={{ padding: "3rem 1.5rem" }}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(6, 182, 212, 0.5)", color: "#06b6d4",
                padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", marginBottom: "2rem",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <ArrowLeft size={18} /> Back to Home
            </button>

            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#f43f5e", marginBottom: "2rem" }}>🌐 Infrastructure & Networking</h2>

            <div style={{ display: "grid", gap: "2rem" }}>
              {/* CORE INFRASTRUCTURE SECTION */}
              <div style={{
                background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: "1rem",
                padding: "2rem", transition: "all 0.3s"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#f43f5e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(244, 63, 94, 0.3)";
                }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "900", color: "#f43f5e", marginBottom: "1.5rem" }}>🖥️ Home Server Deployment & Maintenance</h3>
                <div style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1.5rem", borderRadius: "0.75rem", borderLeft: "4px solid #06b6d4" }}>
                  <ul style={{ listStyle: "none", padding: 0, color: "#d1d5db", lineHeight: "2" }}>
                    <li>✓ Desktop server setup and configuration for production use</li>
                    <li>✓ Continuous uptime monitoring and maintenance scheduling</li>
                    <li>✓ Resource allocation and performance optimization</li>
                    <li>✓ Backup and disaster recovery strategies</li>
                    <li>✓ Hardware troubleshooting and maintenance</li>
                  </ul>
                </div>
              </div>

              {/* DNS & CLOUDFLARE */}
              <div style={{
                background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: "1rem",
                padding: "2rem", transition: "all 0.3s"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#f43f5e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(244, 63, 94, 0.3)";
                }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "900", color: "#f43f5e", marginBottom: "1.5rem" }}>☁️ DNS Management (Cloudflare)</h3>
                <div style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1.5rem", borderRadius: "0.75rem", borderLeft: "4px solid #06b6d4" }}>
                  <ul style={{ listStyle: "none", padding: 0, color: "#d1d5db", lineHeight: "2" }}>
                    <li>✓ Domain DNS configuration and propagation</li>
                    <li>✓ Cloudflare tunnel setup for secure remote access</li>
                    <li>✓ CDN configuration for content delivery optimization</li>
                    <li>✓ DNS records management (A, CNAME, MX records)</li>
                    <li>✓ DDoS protection and firewall rules configuration</li>
                  </ul>
                </div>
              </div>

              {/* SSL CERTIFICATES */}
              <div style={{
                background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: "1rem",
                padding: "2rem", transition: "all 0.3s"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#f43f5e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(244, 63, 94, 0.3)";
                }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "900", color: "#f43f5e", marginBottom: "1.5rem" }}>🔒 SSL Certificate Provisioning</h3>
                <div style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1.5rem", borderRadius: "0.75rem", borderLeft: "4px solid #06b6d4" }}>
                  <ul style={{ listStyle: "none", padding: 0, color: "#d1d5db", lineHeight: "2" }}>
                    <li>✓ SSL certificate generation and installation</li>
                    <li>✓ Let's Encrypt ACME setup for automatic renewal</li>
                    <li>✓ Certificate management and expiration monitoring</li>
                    <li>✓ HTTPS enforcement and mixed content resolution</li>
                    <li>✓ SSL pinning and certificate validation</li>
                  </ul>
                </div>
              </div>

              {/* SECURITY & ACCESS CONTROL */}
              <div style={{
                background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: "1rem",
                padding: "2rem", transition: "all 0.3s"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#f43f5e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(244, 63, 94, 0.3)";
                }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "900", color: "#f43f5e", marginBottom: "1.5rem" }}>🔐 Firewall & Access Control</h3>
                <div style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1.5rem", borderRadius: "0.75rem", borderLeft: "4px solid #06b6d4" }}>
                  <ul style={{ listStyle: "none", padding: 0, color: "#d1d5db", lineHeight: "2" }}>
                    <li>✓ Firewall rules configuration and port management</li>
                    <li>✓ SSH hardening and key-based authentication</li>
                    <li>✓ Access control list (ACL) management</li>
                    <li>✓ Rate limiting and brute-force protection</li>
                    <li>✓ Security audit and vulnerability assessment</li>
                  </ul>
                </div>
              </div>

              {/* CASE STUDY: MEDIA SERVER */}
              <div style={{
                background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: "1rem",
                padding: "2rem", transition: "all 0.3s"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#f43f5e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(244, 63, 94, 0.3)";
                }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "900", color: "#f43f5e", marginBottom: "1.5rem" }}>📹 Case Study: Home Media Server Architecture</h3>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {[
                    { aspect: "🌐 Network Configuration", detail: "Configured home network with static IP, port forwarding, and VPN access for secure remote connections." },
                    { aspect: "🔀 Port Forwarding & Tunneling", detail: "Set up port forwarding for application access, implemented Cloudflare tunnels for encrypted traffic without exposing IP." },
                    { aspect: "🛡️ Security Hardening", detail: "Implemented firewall rules, SSL/TLS encryption, SSH hardening, rate limiting, and DDoS protection." },
                    { aspect: "📊 Performance Testing", detail: "Load tested with concurrent users, monitored CPU/RAM/bandwidth, optimized video encoding and streaming quality." },
                    { aspect: "💾 Backup Strategy", detail: "Automated daily backups, redundant storage, disaster recovery plan, versioning system." },
                    { aspect: "📈 Monitoring & Maintenance", detail: "24/7 uptime monitoring, automated alerts, log analysis, regular security patches and updates." }
                  ].map((study, i) => (
                    <div key={i} style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1rem", borderRadius: "0.75rem", borderLeft: "4px solid #06b6d4" }}>
                      <p style={{ color: "#06b6d4", fontWeight: "700", fontSize: "0.95rem", margin: "0 0 0.5rem 0" }}>{study.aspect}</p>
                      <p style={{ color: "#d1d5db", fontSize: "0.9rem", margin: 0 }}>{study.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* INFRASTRUCTURE METRICS */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
                {[
                  { metric: "99.9%", label: "Server Uptime" },
                  { metric: "<50ms", label: "Average Latency" },
                  { metric: "256GB", label: "Storage Managed" },
                  { metric: "50+", label: "Security Rules" }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: "rgba(244, 63, 94, 0.15)", border: "1px solid rgba(244, 63, 94, 0.3)",
                    padding: "1.5rem", borderRadius: "0.75rem", textAlign: "center", cursor: "pointer",
                    transition: "all 0.3s"
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.background = "rgba(244, 63, 94, 0.3)";
                      e.currentTarget.style.borderColor = "#f43f5e";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.background = "rgba(244, 63, 94, 0.15)";
                      e.currentTarget.style.borderColor = "rgba(244, 63, 94, 0.3)";
                    }}>
                    <p style={{ fontSize: "1.8rem", fontWeight: "900", color: "#f43f5e", marginBottom: "0.5rem" }}>{item.metric}</p>
                    <p style={{ color: "#d1d5db", fontWeight: "600", fontSize: "0.9rem" }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONTACT PAGE */}
        {currentPage === "contact" && (
          <div style={{ padding: "3rem 1.5rem" }}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(6, 182, 212, 0.5)", color: "#06b6d4",
                padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", marginBottom: "2rem",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <ArrowLeft size={18} /> Back to Home
            </button>

            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#f43f5e", marginBottom: "3rem", textAlign: "center" }}>Get In Touch</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem", maxWidth: "900px", margin: "0 auto" }}>
              {[
                { icon: Phone, label: "Phone", value: "+919563157811", href: "tel:+919563157811", color: "#06b6d4" },
                { icon: Mail, label: "Email", value: "sumon38.sourabh@gmail.com", href: "mailto:sumon38.sourabh@gmail.com", color: "#3b82f6" },
                { icon: Github, label: "GitHub", value: "github.com/sghoshm", href: "https://github.com/sghoshm", color: "#a855f7" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sumonsourabhghosh", href: "https://www.linkedin.com/in/sumonsourabhghosh/", color: "#0ea5e9" },
                { icon: Globe, label: "Website", value: "sumon.online", href: "https://sumon.online", color: "#10b981" },
                { icon: MapPin, label: "Location", value: "Suri, Birbhum, India", href: null, color: "#ec4899" },
                { icon: Heart, label: "Passion", value: "Bike Riding", href: null, color: "#f43f5e" }
              ].map((contact, idx) => {
                const Icon = contact.icon;
                if (contact.href) {
                  return (
                    <a key={idx} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" style={{
                      background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                      border: `1px solid ${contact.color}33`, borderRadius: "1rem",
                      padding: "2rem", textDecoration: "none", color: "inherit",
                      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                      transition: "all 0.3s", cursor: "pointer"
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.borderColor = contact.color;
                        e.currentTarget.style.background = "rgba(15, 23, 42, 0.9)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.borderColor = contact.color + "33";
                        e.currentTarget.style.background = "rgba(15, 23, 42, 0.7)";
                      }}>
                      <div style={{ padding: "1.5rem", background: `linear-gradient(135deg, ${contact.color}22, ${contact.color}44)`, borderRadius: "1rem", marginBottom: "1rem" }}>
                        <Icon size={40} color={contact.color} />
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "#9ca3af", fontWeight: "700", textTransform: "uppercase", marginBottom: "0.5rem" }}>{contact.label}</p>
                      <p style={{ color: "#ffffff", fontWeight: "700", fontSize: "1.1rem" }}>{contact.value}</p>
                    </a>
                  );
                } else {
                  return (
                    <div key={idx} style={{
                      background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                      border: `1px solid ${contact.color}33`, borderRadius: "1rem",
                      padding: "2rem", textDecoration: "none", color: "inherit",
                      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                      transition: "all 0.3s"
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.borderColor = contact.color;
                        e.currentTarget.style.background = "rgba(15, 23, 42, 0.9)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.borderColor = contact.color + "33";
                        e.currentTarget.style.background = "rgba(15, 23, 42, 0.7)";
                      }}>
                      <div style={{ padding: "1.5rem", background: `linear-gradient(135deg, ${contact.color}22, ${contact.color}44)`, borderRadius: "1rem", marginBottom: "1rem" }}>
                        <Icon size={40} color={contact.color} />
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "#9ca3af", fontWeight: "700", textTransform: "uppercase", marginBottom: "0.5rem" }}>{contact.label}</p>
                      <p style={{ color: "#ffffff", fontWeight: "700", fontSize: "1.1rem" }}>{contact.value}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer style={{ textAlign: "center", padding: "2rem 1.5rem", borderTop: "1px solid rgba(6, 182, 212, 0.2)", marginTop: "3rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>© {new Date().getFullYear()} Sumon Sourabh Ghosh </p>
        </footer>
      </div>
    </div>
  );
}
