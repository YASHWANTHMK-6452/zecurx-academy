import { useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "award"
  | "brain"
  | "briefcase"
  | "check"
  | "chevron"
  | "clock"
  | "code"
  | "menu"
  | "shield"
  | "terminal"
  | "users"
  | "x";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    award: <><circle cx="12" cy="8" r="5" /><path d="M8.8 12 7 22l5-3 5 3-1.8-10" /></>,
    brain: <><path d="M9.5 4A3.5 3.5 0 0 0 6 7.5c0 .4.1.8.2 1.2A3.8 3.8 0 0 0 4 12.2a3.8 3.8 0 0 0 2.7 3.6V17a3 3 0 0 0 3 3c1 0 1.8-.4 2.3-1V5.8A2.8 2.8 0 0 0 9.5 4Z" /><path d="M14.5 4A3.5 3.5 0 0 1 18 7.5c0 .4-.1.8-.2 1.2a3.8 3.8 0 0 1 2.2 3.5 3.8 3.8 0 0 1-2.7 3.6V17a3 3 0 0 1-3 3c-1 0-1.8-.4-2.3-1" /><path d="M8 9.5c1.5 0 2.5 1 2.5 2.5M16 9.5c-1.5 0-2.5 1-2.5 2.5" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m8 10 4 4 4-4" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 6l-4 12" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    terminal: <><path d="m5 7 4 5-4 5M11 17h8" /></>,
    users: <><path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" /><circle cx="10" cy="8" r="4" /><path d="M17 11a3 3 0 0 0 0-6M19 15.5a3 3 0 0 1 2 2.8V20" /></>,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Logo() {
  return (
    <a href="#" className="logo" aria-label="ZecurX Academy home">
      <img className="logo-mark" src="/assets/zecurx-icon.png" alt="" />
      <img className="logo-type" src="/assets/zecurx-wordmark.png" alt="ZecurX" />
      <span className="logo-divider" />
      <span className="logo-academy">ACADEMY</span>
    </a>
  );
}

function HeroVisual() {
  return (
    <div className="hero-image-card">
      <img src="/assets/cyber-operations.jpg" alt="Cybersecurity professional monitoring multiple systems" />
      <div className="image-scan" />
      <div className="threat-panel">
        <span className="threat-icon"><Icon name="shield" /></span>
        <span><small>Live defense lab</small><b>Threat contained</b></span>
        <i>Secure</i>
      </div>
      <div className="signal-panel">
        <span className="signal-bars"><i /><i /><i /><i /><i /></span>
        <span><b>98.7%</b><small>Detection accuracy</small></span>
      </div>
      <div className="image-orbit orbit-one" />
      <div className="image-orbit orbit-two" />
      <div className="photo-credit">
        Photo by <a href="https://unsplash.com/@abusaeid01" target="_blank" rel="noreferrer">Abu Saeid</a>
      </div>
    </div>
  );
}

const proofPoints = [
  { icon: "award" as const, title: "ISO verified", text: "Globally recognized, compliant certification" },
  { icon: "terminal" as const, title: "Live labs", text: "Practice on real tools and attack surfaces" },
  { icon: "brain" as const, title: "AI powered", text: "Modern AI security built into every path" },
  { icon: "briefcase" as const, title: "Job ready", text: "Portfolio projects and career preparation" },
];

const courses = [
  {
    code: "zxCPEH",
    title: "Certified Professional Ethical Hacker",
    description: "Advanced ethical hacking methodology. 60 Hours duration.",
    price: "₹29,999",
    originalPrice: "₹45,499",
    level: "Intermediate",
    duration: "60 Hours",
    logo: "/assets/zxCPEH.png",
    skills: ["ISO Verified Certification", "ISO Certified Exam Voucher", "Advanced Exploitation", "Network & Web Security", "Privilege Escalation", "Active Directory Attacks", "Project-Based Learning"],
  },
  {
    code: "zxCPPT",
    title: "Certified Professional Pen Tester",
    description: "Professional penetration testing certification. 80 Hours duration.",
    price: "₹35,999",
    originalPrice: "₹59,999",
    level: "Advanced",
    duration: "80 Hours",
    logo: "/assets/zxCPPT.png",
    skills: ["ISO Verified Certification", "ISO Certified Exam Voucher", "Red Teaming Methodology", "Advanced Evasion Techniques", "Report Writing & Documentation", "Custom Exploit Development", "Industry Standard Tools"],
  },
  {
    code: "zxGAIP",
    title: "Generative AI Professional",
    description: "Leverage Generative AI for security operations. 40 Hours duration.",
    price: "₹29,999",
    originalPrice: "₹49,999",
    level: "Intermediate",
    duration: "40 Hours",
    logo: "/assets/zxGAIP.png",
    skills: ["ISO Verified Certification", "ISO Certified Exam Voucher", "LLMs for Security", "Automated Threat Hunting", "Secure AI Deployment", "AI Risk Management", "Real-world Case Studies"],
  },
  {
    code: "zxCFD",
    title: "Certified Fullstack Dev",
    description: "Become a security-aware fullstack developer. Build robust, secure applications from the ground up.",
    price: "Contact for Pricing",
    level: "Intermediate",
    duration: "Coming Soon",
    logo: "/assets/zxCFD.png",
    skills: ["ISO Verified Certification", "ISO Certified Exam Voucher", "Secure Coding Practices", "Modern Stack (Next.js, Node)", "Database Security", "API Development", "DevSecOps Basics"],
  },
  {
    code: "zxCCF",
    title: "Certified Cybersecurity Foundations",
    description: "Foundational knowledge for a career in cybersecurity. Understand the landscape, threats, and basic protections.",
    price: "Institution Only",
    level: "Beginner",
    duration: "Custom",
    logo: "/assets/zxCCF.png",
    skills: ["Core Security Concepts", "Network Fundamentals", "Cryptography Basics", "Security Ethics", "Career Roadmap"],
  },
  {
    code: "zxCCE",
    title: "Certified Cybersecurity Expert",
    description: "Expert-level training for leadership roles. Strategy, governance, and advanced security architecture.",
    price: "Institution Only",
    level: "Expert",
    duration: "Custom",
    logo: "/assets/zxCCE.png",
    skills: ["Security Governance", "Risk Management", "C-Level Communication", "Enterprise Architecture", "Strategic Planning"],
  },
  {
    code: "zxCCP",
    title: "Certified Cybersecurity Practitioner",
    description: "Practical cybersecurity skills for professionals. Focus on defense, incident handling, and everyday security operations.",
    price: "Institution Only",
    level: "Beginner",
    duration: "Custom",
    logo: "/assets/zxCCP.png",
    skills: ["Incident Response Basics", "Security Controls Implementation", "Policy & Compliance", "Log Analysis", "Institutional Training"],
  },
];

const differentiators = [
  { icon: "shield" as const, title: "Industry Aligned", text: "Curriculum mapped to current security roles, frameworks, and the tools teams use in the field." },
  { icon: "clock" as const, title: "Accelerated Learning", text: "Structured 8–12 week programs designed to take you from foundation to job-ready faster than traditional education." },
  { icon: "terminal" as const, title: "Cloud Sandbox", text: "24/7 access to dedicated cloud labs — practice exploits, defense strategies, and tool configurations on live environments." },
  { icon: "users" as const, title: "Practitioner Mentorship", text: "Learn directly from active security professionals through reviews, feedback, and real-world problem solving." },
];

const partners = [
  { name: "MSRIT", image: "/assets/partner-ramaiah.png", url: "https://www.msrit.edu/" },
  { name: "IIBS", image: "/assets/partner-iibs.png", url: "https://www.iibs.edu.in/" },
  { name: "Mount Carmel", image: "/assets/partner-mount-carmel.png", url: "https://mccblr.edu.in/" },
  { name: "Presidency", image: "/assets/partner-presidency.png", url: "https://presidencycollege.ac.in/" },
  { name: "St Pauls", image: "/assets/partner-st-pauls.png", url: "https://www.stpaulscollege.edu.in/" },
  { name: "Brindavan", image: "/assets/partner-brindavan.png", url: "https://www.brindavancollege.com/" },
  { name: "RIBS", image: "/assets/partner-ribs.png", url: "https://www.ribs.edu.in/" },
  { name: "KGI", image: "/assets/partner-kgi.png", url: "https://kgi.edu.in/" },
  { name: "Sapthagiri", image: "/assets/partner-sapthagiri.png", url: "https://sapthagiri.edu.in/" },
  { name: "Yenepoya", image: "/assets/partner-yenepoya.png", url: "https://www.yenepoya.edu.in/" },
  { name: "MSRCASC", image: "/assets/partner-msrcasc.png", url: "https://www.msrcasc.edu.in/" },
  { name: "Dhanwantri", image: "/assets/partner-dhanwantari.png", url: "https://dhanwantarinursingcollege.com/" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const [recommendedCourse, setRecommendedCourse] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", `${height > 0 ? (window.scrollY / height) * 100 : 0}%`);
      setScrolled(window.scrollY > 20);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScroll);
      observer.disconnect();
    };
  }, []);

  const choosePath = (code: string) => {
    setRecommendedCourse(code);
    window.setTimeout(() => document.querySelector(`[data-course="${code}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 180);
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" />
      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
        <nav className="nav-wrap" aria-label="Main navigation">
          <Logo />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#why">Why ZecurX</a>
            <div className="nav-dropdown" onMouseEnter={() => setAcademyOpen(true)} onMouseLeave={() => setAcademyOpen(false)}>
              <button onClick={() => setAcademyOpen(!academyOpen)} aria-expanded={academyOpen}>
                Academy <Icon name="chevron" />
              </button>
              <div className={`academy-menu ${academyOpen ? "academy-open" : ""}`}>
                <a href="#courses" onClick={() => setMenuOpen(false)}>
                  <span className="menu-icon"><Icon name="award" /></span>
                  <span><b>Certified Courses</b><small>Career-ready certification programs</small></span>
                </a>
                <a href="#colloquium" onClick={() => setMenuOpen(false)}>
                  <span className="menu-icon"><Icon name="users" /></span>
                  <span><b>Colloquium</b><small>Expert talks, ideas, and discussions</small></span>
                </a>
              </div>
            </div>
            <a href="#courses">Programs</a>
            <a href="#resources">Resources</a>
          </div>
          <a className="nav-cta" href="#pathfinder">Find your course <Icon name="arrow" /></a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="hero-inner">
            <div className="hero-copy hero-enter">
              <div className="eyebrow"><span /> ZecurX Academy</div>
              <h1>Your Cyber Era <em>Starts Here.</em></h1>
              <p className="hero-lead">Learn to identify threats, protect digital assets, and think one step ahead.</p>
              <p className="hero-support">Build practical skills through expert-led learning, live attack labs, and certifications that carry weight beyond the classroom.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#courses">Explore programs <Icon name="arrow" /></a>
                <a className="button button-secondary" href="#pathfinder">Find your course</a>
              </div>
              <div className="learner-note">
                <span className="avatar-stack"><i>AS</i><i>RK</i><i>+5</i></span>
                <span><b>800+ learners</b><small>building security careers with ZecurX</small></span>
              </div>
            </div>
            <div className="hero-visual visual-enter"><HeroVisual /></div>
          </div>

          <div className="proof-grid" id="why">
            {proofPoints.map((item) => (
              <article className="proof-item reveal" key={item.title}>
                <span className="proof-icon"><Icon name={item.icon} /></span>
                <span><h2>{item.title}</h2><p>{item.text}</p></span>
              </article>
            ))}
          </div>
        </section>

        <section className="trainer-section" aria-labelledby="trainer-heading">
          <div className="trainer-intro reveal">
            <span className="section-kicker">Learn from experience</span>
            <h2 id="trainer-heading">Meet your trainer.</h2>
            <p>Expert guidance, practical methodology, and the perspective needed to think like a security professional.</p>
          </div>
          <article className="trainer-card reveal">
            <div className="trainer-circuit circuit-one" />
            <div className="trainer-circuit circuit-two" />
            <div className="trainer-photo-wrap">
              <img
                src="/assets/trainer-profile.png"
                alt="Harsh Priyam, ZecurX Academy cybersecurity trainer"
                className="trainer-photo"
              />
              <span className="trainer-verified"><Icon name="shield" /> Verified trainer</span>
            </div>
            <div className="trainer-details">
              <div className="trainer-label"><span /> ZecurX Academy Faculty</div>
              <h3>Harsh Priyam</h3>
              <p className="trainer-designation">Certified Ethical Hacker &amp; Certified Penetration Tester</p>
              <div className="trainer-rule" />
              <p className="trainer-summary">
                Learn cybersecurity through a practitioner-led approach focused on ethical methodology,
                real attack scenarios, and the disciplined thinking required to protect modern systems.
              </p>
              <div className="trainer-expertise" aria-label="Training expertise">
                <span><Icon name="terminal" /> Ethical Hacking</span>
                <span><Icon name="shield" /> Penetration Testing</span>
                <span><Icon name="code" /> Live Lab Mentorship</span>
              </div>
              <blockquote>
                “The strongest security professionals don’t just know the tools—they understand how an attacker thinks.”
              </blockquote>
            </div>
          </article>
        </section>

        <section className="pathfinder reveal" id="pathfinder">
          <div>
            <span className="section-kicker">Not sure where to start?</span>
            <h2>Find the program that fits your ambition.</h2>
          </div>
          <div className="path-options">
            <button className={recommendedCourse === "zxCPEH" ? "selected-path" : ""} onClick={() => choosePath("zxCPEH")}><span>01</span><b>I’m starting in security</b><small>Build a practical foundation</small><Icon name="arrow" /></button>
            <button className={recommendedCourse === "zxCPPT" ? "selected-path" : ""} onClick={() => choosePath("zxCPPT")}><span>02</span><b>I want to go offensive</b><small>Master ethical hacking</small><Icon name="arrow" /></button>
            <button className={recommendedCourse === "zxGAIP" ? "selected-path" : ""} onClick={() => choosePath("zxGAIP")}><span>03</span><b>I’m exploring AI security</b><small>Work at the new frontier</small><Icon name="arrow" /></button>
          </div>
        </section>

        <section className="courses-section" id="courses">
          <div className="section-heading reveal">
            <div>
              <span className="section-kicker">Certified courses</span>
              <h2>Choose your certification path.</h2>
            </div>
            <p>Focused programs designed around the skills security teams actually use—guided by practitioners, proven in live environments.</p>
          </div>
          <div className="course-grid">
            {courses.map((course, index) => (
              <article
                className={`course-card reveal ${recommendedCourse === course.code ? "recommended" : ""}`}
                key={course.code}
                data-course={course.code}
                style={{ transitionDelay: `${index * 90}ms` }}
                onMouseMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect();
                  event.currentTarget.style.setProperty("--tilt-x", `${((event.clientY - bounds.top) / bounds.height - 0.5) * -3}deg`);
                  event.currentTarget.style.setProperty("--tilt-y", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 3}deg`);
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.setProperty("--tilt-x", "0deg");
                  event.currentTarget.style.setProperty("--tilt-y", "0deg");
                }}
              >
                <div className="course-top">
                  <img className="course-logo" src={course.logo} alt={`${course.code} certification logo`} />
                  {recommendedCourse === course.code ? <span className="match-badge"><Icon name="check" /> Your match</span> : index === 1 && <span className="popular">Most popular</span>}
                </div>
                <span className="course-code">{course.code}</span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-price">
                  <strong>{course.price}</strong>
                  {course.originalPrice && <del>{course.originalPrice}</del>}
                </div>
                <div className="course-meta">
                  <span><Icon name="clock" /> {course.duration}</span>
                  <span><Icon name="users" /> {course.level}</span>
                </div>
                <div className="skill-list">
                  {course.skills.map((skill) => <span key={skill}><Icon name="check" /> {skill}</span>)}
                </div>
                <a href="https://www.zecurx.com/contact" target="_blank" rel="noreferrer">
                  View course <Icon name="arrow" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="apart-section" id="colloquium">
          <div className="section-heading reveal">
            <div>
              <span className="section-kicker">Why ZecurX</span>
              <h2>What sets us apart.</h2>
            </div>
            <p>We don’t just teach theory. Every program is built around practical, job-ready skills.</p>
          </div>
          <div className="apart-grid">
            {differentiators.map((item, index) => (
              <article className="apart-item reveal" key={item.title} style={{ transitionDelay: `${index * 90}ms` }}>
                <span><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="team-cta reveal">
          <div className="team-pattern" />
          <span className="section-kicker">ZecurX for teams</span>
          <h2>Turn your team into your strongest <em>security layer.</em></h2>
          <p>Custom corporate training with bulk pricing, dedicated support, and flexible scheduling—built around your organization’s real risks.</p>
          <div>
            <a className="button button-primary" href="https://www.zecurx.com/contact" target="_blank" rel="noreferrer">Build a team program <Icon name="arrow" /></a>
            <a className="button button-secondary" href="https://www.zecurx.com/contact" target="_blank" rel="noreferrer">Talk to our academy</a>
          </div>
        </section>

        <section className="partners-section">
          <div className="partners-title reveal">
            <span>Trusted by</span> partners who invest in future-ready talent
          </div>
          <div className="partner-marquee" aria-label="Trusted partners">
            <div className="partner-track">
              {[...partners, ...partners].map((partner, index) => (
                <a
                  className="partner-card"
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${partner.name} official website`}
                  key={`${partner.name}-${index}`}
                >
                  <img src={partner.image} alt={partner.name} />
                  <span>{partner.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="resources">
        <Logo />
        <p>Practical education for the people protecting what matters.</p>
        <span>© 2025 ZecurX Academy</span>
      </footer>
    </div>
  );
}
