import { Mail, Github, MapPin, Phone, ArrowLeft, Briefcase, Code, BookOpen, Award, Database, Zap, ExternalLink, Linkedin, Globe, Heart } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home");

  const pages = {
    home: "HOME",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    education: "EDUCATION",
    skills: "SKILLS",
    contact: "CONTACT"
  };

  const allProjects = [
    {
      title: "OpenEarth – Data Aggregation & Visualization Platform",
      period: "2025 – Present",
      github: "https://github.com/sghoshm/open-earth",
      release: "https://earthint.netlify.app",
      description: "Developed a full-stack platform aggregating Earth-related datasets via multiple external APIs; validated all API responses for accuracy, consistency, and security using automated pytest scripts.",
      details: [
        "Engineered backend data-retrieval and processing logic with robust error handling",
        "Designed and implemented automated pytest scripts for comprehensive API validation",
        "Validated all API responses for accuracy, consistency, and security across diverse data sources",
        "Implemented interactive frontend for visualization of Earth-related datasets",
        "Applied data-consistency validation scripts across distributed systems",
        "Deployed via automated CI/CD pipelines on Netlify with basic health monitoring"
      ],
      skills: ["API Testing", "pytest", "Python", "Backend Validation", "CI/CD", "Data Validation"]
    },
    {
      title: "Nexus OSINT Platform",
      period: "2025 – Present",
      github: "https://github.com/sghoshm/nexus-osint",
      release: "https://nexusint.netlify.app",
      description: "Constructed backend system aggregating real-time public data from multiple APIs; containerized with Docker and managed deployments via GitHub Actions CI/CD pipelines.",
      details: [
        "Designed scalable modular architecture following microservices principles",
        "Integrated and tested real-world public API integrations against fallbacks",
        "Containerized application with Docker for consistent environment management",
        "Implemented GitHub Actions CI/CD pipelines for automated build and deployment",
        "Applied structured validation across all data sources using pytest",
        "Optimized data-pipeline performance and applied security-aware API validation"
      ],
      skills: ["Microservices", "Docker", "GitHub Actions", "API Integration", "Backend Validation", "Python"]
    },
    {
      title: "OpenJarvis – AI Assistant with API Integration & Automation",
      period: "2025 – Present",
      github: "https://github.com/sghoshm/open-jarvis",
      description: "Built a Python AI assistant integrating external APIs, OS-level automation, and dynamic command workflows with safety checks and end-to-end testing.",
      details: [
        "Built a Python AI assistant integrating external APIs with safety checks",
        "Designed and implemented OS-level automation and dynamic command workflows",
        "Validated API responses for accuracy and error handling",
        "Completed end-to-end testing across 20+ input scenarios following TDD principles",
        "Covered command-parsing, execution, and response flow validation",
        "Implemented comprehensive error handling and security validations"
      ],
      skills: ["Python", "API Integration", "TDD", "End-to-End Testing", "Security Validation"]
    },
    {
      title: "Self-Hosted Video Streaming Platform",
      period: "2020 – 2024",
      github: null,
      release: null,
      description: "Designed and deployed full-lifecycle backend (auth, session management, media delivery) on Linux with SSL and Cloudflare tunnelling; managed DNS routing and secure traffic configuration.",
      details: [
        "Designed and deployed full-lifecycle backend with auth and session management",
        "Managed media delivery with SSL/TLS encryption and Cloudflare tunneling",
        "Configured DNS routing and secure traffic routing with Cloudflare",
        "Owned full development → deployment → testing → monitoring pipeline",
        "Performed load and scalability analysis under concurrent traffic using k6",
        "Implemented 24/7 monitoring and health checks for production reliability"
      ],
      skills: ["Backend Architecture", "SSL/TLS", "Linux", "Cloudflare", "k6 Load Testing", "DevOps"]
    },
    {
      title: "Hand Gesture Controlled Mouse",
      period: "2023",
      github: "https://github.com/sghoshm/hand-gesture-mouse",
      release: null,
      description: "Developed real-time computer-vision gesture-recognition system; optimized frame-processing performance and validated edge-case inputs systematically.",
      details: [
        "Developed real-time computer-vision gesture-recognition system",
        "Optimized frame-processing performance for low-latency response",
        "Validated edge-case inputs systematically with comprehensive testing",
        "Implemented performance testing under various lighting conditions",
        "Tested OS interaction accuracy (clicking, moving, dragging)",
        "Applied TDD principles with 20+ test scenarios for gesture accuracy"
      ],
      skills: ["Python", "OpenCV", "Computer Vision", "Performance Testing", "Edge-Case Testing"]
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
          <p style={{ fontSize: "1rem", color: "#a855f7", fontWeight: "700" }}>SDET – Backend & DevOps Focus</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem", fontSize: "0.85rem", flexWrap: "wrap", alignItems: "center" }}>
            <a href="tel:+919563157811" style={{ color: "#06b6d4", textDecoration: "none" }}>+91 9563157811</a>
            <span style={{ color: "#9ca3af" }}>•</span>
            <a href="mailto:sumon38.sourabh@gmail.com" style={{ color: "#06b6d4", textDecoration: "none" }}>sumon38.sourabh@gmail.com</a>
            <span style={{ color: "#9ca3af" }}>•</span>
            <a href="https://github.com/sghoshm" target="_blank" rel="noopener noreferrer" style={{ color: "#06b6d4", textDecoration: "none" }}>GitHub</a>
            <span style={{ color: "#9ca3af" }}>•</span>
            <a href="https://www.linkedin.com/in/sumonsourabhghosh/" target="_blank" rel="noopener noreferrer" style={{ color: "#06b6d4", textDecoration: "none" }}>LinkedIn</a>
            <span style={{ color: "#9ca3af" }}>•</span>
            <a href="https://sumon.online" target="_blank" rel="noopener noreferrer" style={{ color: "#06b6d4", textDecoration: "none" }}>Portfolio</a>
            <span style={{ color: "#9ca3af" }}>•</span>
            <a href="/SumonResumeFinal.pdf" download style={{ color: "#a855f7", textDecoration: "none", fontWeight: "700", padding: "0.5rem 1rem", border: "1px solid #a855f7", borderRadius: "0.375rem", transition: "all 0.3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(168, 85, 247, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>📥 Resume</a>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#9ca3af", marginTop: "0.5rem" }}>🇮🇳 India | Open to Remote / Relocation</p>
        </header>

        {/* HOME PAGE */}
        {currentPage === "home" && (
          <div style={{ padding: "2rem 1.5rem", minHeight: "calc(100vh - 200px)" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#ffffff", marginBottom: "0.5rem", textShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}>
                Welcome
              </h2>
              <p style={{ color: "#d1d5db", fontSize: "1rem", maxWidth: "700px", margin: "0 auto" }}>
                Backend-focused SDET with 2 years of experience at TCS specializing in API testing, backend validation, and CI/CD pipeline automation using pytest and requests.
              </p>
            </div>

            {/* QUICK STATS */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginBottom: "2rem", maxWidth: "1000px", margin: "0 auto 2rem auto" }}>
              {[
                { stat: "2", label: "Years Experience" },
                { stat: "5", label: "Key Projects" },
                { stat: "20+", label: "Tech Skills" },
                { stat: "300+", label: "Test Cases" }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: "rgba(6, 182, 212, 0.1)", border: "1px solid rgba(6, 182, 212, 0.3)",
                  padding: "1.5rem", borderRadius: "0.75rem", textAlign: "center"
                }}>
                  <p style={{ fontSize: "1.8rem", fontWeight: "900", color: "#06b6d4", marginBottom: "0.25rem" }}>{item.stat}</p>
                  <p style={{ fontSize: "0.85rem", color: "#9ca3af", fontWeight: "600" }}>{item.label}</p>
                </div>
              ))}
            </div>

            {/* NAVIGATION CARDS */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", maxWidth: "1100px", margin: "0 auto 2rem auto" }}>
              {[
                { id: "experience", icon: Briefcase, title: "Experience", color: "#3b82f6" },
                { id: "projects", icon: Code, title: "Projects", color: "#06b6d4" },
                { id: "skills", icon: Zap, title: "Skills", color: "#a855f7" },
                { id: "education", icon: BookOpen, title: "Education", color: "#ec4899" },
                { id: "contact", icon: Mail, title: "Contact", color: "#f43f5e" }
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <button
                    key={card.id}
                    onClick={() => setCurrentPage(card.id)}
                    style={{
                      background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
                      border: `2px solid ${card.color}33`, borderRadius: "0.75rem",
                      padding: "1rem 1.5rem", cursor: "pointer", transition: "all 0.3s",
                      display: "flex", alignItems: "center", gap: "0.5rem",
                      color: "#ffffff", fontWeight: "700", fontSize: "0.95rem"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = card.color;
                      e.currentTarget.style.background = "rgba(15, 23, 42, 0.95)";
                      e.currentTarget.style.boxShadow = `0 10px 30px ${card.color}33`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = card.color + "33";
                      e.currentTarget.style.background = "rgba(15, 23, 42, 0.7)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon size={20} /> {card.title}
                  </button>
                );
              })}
            </div>

            {/* PROFESSIONAL SUMMARY */}
            <div style={{
              background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "1rem",
              padding: "2rem", maxWidth: "1000px", margin: "0 auto"
            }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "900", color: "#06b6d4", marginBottom: "1rem" }}>📋 ABOUT ME</h3>
              <p style={{ color: "#d1d5db", fontSize: "0.95rem", lineHeight: "1.8", margin: 0 }}>
                Backend-focused SDET with approximately 2 years of experience at TCS specializing in API testing, backend validation, and CI/CD pipeline automation using pytest and requests. Proficient in Python and Node.js; hands-on with Linux, AWS (EC2, S3, CloudWatch), Docker, and automated deployment workflows following IaC principles with Terraform. Experienced in TDD/BDD methodologies, security-aware API validation, and performance testing (k6). Proven ability to validate complex distributed systems, debug production issues, and drive reliability through automation, Blue/Green deployment strategies, and continuous delivery.
              </p>
            </div>
          </div>
        )}

        {/* EXPERIENCE PAGE */}
        {currentPage === "experience" && (
          <div style={{ padding: "2rem 1.5rem" }}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(6, 182, 212, 0.5)", color: "#06b6d4",
                padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", marginBottom: "2rem",
                transition: "all 0.3s", fontWeight: "700"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <ArrowLeft size={18} /> Back to Home
            </button>

            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#3b82f6", marginBottom: "2rem" }}>Professional Experience</h2>

            <div style={{ background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "1rem", padding: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: "900", color: "#ffffff", margin: 0 }}>Assistant System Engineer</h3>
                  <p style={{ fontSize: "1.15rem", color: "#a855f7", fontWeight: "700", margin: "0.5rem 0 0 0" }}>
                    <a href="https://www.tcs.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#a855f7", textDecoration: "none" }}>Tata Consultancy Services (TCS)</a>
                  </p>
                </div>
                <span style={{ color: "#3b82f6", fontWeight: "700", backgroundColor: "rgba(59, 130, 246, 0.1)", padding: "0.5rem 1rem", borderRadius: "0.5rem", whiteSpace: "nowrap" }}>Jun 2022 – Feb 2024</span>
              </div>
              <p style={{ color: "#9ca3af", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MapPin size={16} /> India
              </p>

              <div style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1.5rem", borderRadius: "0.75rem", borderLeft: "4px solid #06b6d4" }}>
                <h4 style={{ color: "#06b6d4", fontWeight: "700", marginBottom: "1rem" }}>🎯 Key Achievements & Responsibilities:</h4>
                <ul style={{ listStyle: "none", padding: 0, color: "#d1d5db", lineHeight: "2" }}>
                  <li>✓ Architected and maintained backend services using Node.js and REST APIs; implemented comprehensive API validation, request/response analysis, and end-to-end workflow testing using the requests library, incorporating security checks for common vulnerabilities (auth bypass, injection, improper error handling).</li>
                  <li>✓ Designed and authored 300+ test cases (functional, regression, exploratory, and BDD-style using Gherkin) with pytest across distributed microservices, ensuring contract adherence and inter-service communication reliability.</li>
                  <li>✓ Configured and maintained CI/CD pipelines using GitHub Actions and Jenkins, automating build, test, and deployment stages with Blue/Green deployment strategies, reducing deployment lead time by ~30%.</li>
                  <li>✓ Applied data-consistency validation scripts across distributed systems, identifying 30+ edge-case failures and reducing data-integrity defects by ~25%.</li>
                  <li>✓ Provisioned and managed AWS infrastructure (EC2, S3, IAM) using Terraform (IaC), reducing manual environment setup time by ~40% and ensuring cross-environment consistency.</li>
                  <li>✓ Spearheaded resolution of production incidents using CloudWatch logs and root-cause analysis, cutting mean time-to-resolution by ~20% and reducing critical post-deployment bugs by 15%.</li>
                  <li>✓ Contributed to backlog refinement, story estimation, and sprint retrospectives within Agile/Scrum; mentored 3 junior engineers on test automation best practices and CI/CD workflows, improving team velocity by 10%.</li>
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
                    {proj.description}
                  </p>

                  {/* Details */}
                  <div style={{ background: "rgba(15, 23, 42, 0.5)", padding: "1.5rem", borderRadius: "0.75rem", marginBottom: "1.5rem", borderLeft: "4px solid #06b6d4" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#cbd5e1", lineHeight: "1.8", fontSize: "0.9rem" }}>
                      {proj.details.map((detail, i) => (
                        <li key={i} style={{ marginBottom: "0.5rem", display: "flex", gap: "0.5rem" }}>
                          <span style={{ color: "#06b6d4", fontWeight: "900", flexShrink: 0 }}>✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
                    {proj.skills.map((skill, i) => (
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
                        {skill}
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
          <div style={{ padding: "2rem 1.5rem" }}>
            <button
              onClick={() => setCurrentPage("home")}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(6, 182, 212, 0.5)", color: "#06b6d4",
                padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", marginBottom: "2rem",
                transition: "all 0.3s", fontWeight: "700"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <ArrowLeft size={18} /> Back to Home
            </button>

            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "#a855f7", marginBottom: "2rem" }}>Technical Skills</h2>

            <div style={{ display: "grid", gap: "2rem", maxWidth: "1100px" }}>
              {[
                {
                  category: "Testing & QA",
                  color: "#06b6d4",
                  skills: ["API Testing (Postman)", "Functional / Regression / Exploratory Testing", "Test Case Design (300+ authored)", "BDD / TDD Principles", "Gherkin-style Test Design", "Backend Validation", "Security-Aware API Validation", "Performance Testing (k6)", "Data & Edge-Case Testing", "Defect Lifecycle Management"]
                },
                {
                  category: "Programming",
                  color: "#3b82f6",
                  skills: ["Python", "JavaScript (Node.js)"]
                },
                {
                  category: "Automation",
                  color: "#06b6d4",
                  skills: ["pytest", "requests", "API automation scripting"]
                },
                {
                  category: "Backend & APIs",
                  color: "#a855f7",
                  skills: ["REST APIs", "JWT Authentication", "API Validation", "Microservices (contract & inter-service testing)", "Node.js"]
                },
                {
                  category: "DevOps & Infrastructure",
                  color: "#f43f5e",
                  skills: ["Linux Server Administration", "AWS (EC2, S3, CloudWatch, IAM – hands-on; Lambda, RDS – basic)", "Docker", "CI/CD (GitHub Actions, Jenkins)", "Blue/Green & Canary Deployment Strategies", "Infrastructure as Code (Terraform)", "SSL/HTTPS", "Cloudflare DNS & Tunnelling"]
                },
                {
                  category: "Databases",
                  color: "#10b981",
                  skills: ["MongoDB", "Firebase", "PostgreSQL / SQL (queries, data extraction & validation)"]
                },
                {
                  category: "Tools",
                  color: "#f59e0b",
                  skills: ["Git", "GitHub", "Postman", "k6", "CloudWatch"]
                }
              ].map((skillGroup, idx) => (
                <div key={idx}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "900", color: skillGroup.color, marginBottom: "1rem" }}>
                    {skillGroup.category}
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                    {skillGroup.skills.map((skill, i) => (
                      <div key={i} style={{
                        background: `rgba(${skillGroup.color === "#06b6d4" ? "6, 182, 212" : skillGroup.color === "#3b82f6" ? "59, 130, 246" : skillGroup.color === "#a855f7" ? "168, 85, 247" : skillGroup.color === "#f43f5e" ? "244, 63, 94" : skillGroup.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"}, 0.1)`,
                        border: `1px solid ${skillGroup.color}44`,
                        padding: "1.2rem", borderRadius: "0.75rem", textAlign: "center", cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.borderColor = skillGroup.color;
                          e.currentTarget.style.background = `rgba(${skillGroup.color === "#06b6d4" ? "6, 182, 212" : skillGroup.color === "#3b82f6" ? "59, 130, 246" : skillGroup.color === "#a855f7" ? "168, 85, 247" : skillGroup.color === "#f43f5e" ? "244, 63, 94" : skillGroup.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"}, 0.2)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.borderColor = skillGroup.color + "44";
                          e.currentTarget.style.background = `rgba(${skillGroup.color === "#06b6d4" ? "6, 182, 212" : skillGroup.color === "#3b82f6" ? "59, 130, 246" : skillGroup.color === "#a855f7" ? "168, 85, 247" : skillGroup.color === "#f43f5e" ? "244, 63, 94" : skillGroup.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"}, 0.1)`;
                        }}>
                        <p style={{ color: skillGroup.color, fontWeight: "700", fontSize: "0.95rem", margin: 0 }}>{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
