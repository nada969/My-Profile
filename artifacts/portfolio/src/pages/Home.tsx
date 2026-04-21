import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiDjango, SiPostgresql, SiMongodb, SiLinux, SiReact, SiPython, SiCplusplus } from "react-icons/si";
import {
  Mail, MapPin, ChevronRight, ArrowUpRight, Award, BookOpen,
  Code2, Zap, Globe, Users, Lightbulb, Star, Coffee, Cpu, Database, Download
} from "lucide-react";
import profileImg from "@/assets/images/profile.png";
import heroBg from "@/assets/images/hero-bg.png";

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

function TypewriterText({ lines }: { lines: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const line = lines[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => prev + line[charIdx]);
        setCharIdx(c => c + 1);
      }, 38);
      return () => clearTimeout(t);
    } else if (lineIdx < lines.length - 1) {
      const t = setTimeout(() => {
        setDisplayed(prev => prev + "\n");
        setLineIdx(l => l + 1);
        setCharIdx(0);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx, lines]);

  return (
    <pre className="font-mono text-sm text-green-400/90 whitespace-pre leading-7">
      {displayed}
      <span className="inline-block w-2 h-4 bg-green-400/80 ml-0.5 animate-pulse align-middle" />
    </pre>
  );
}

const stats = [
  { value: "8+", label: "Projects built on own time", icon: <Code2 className="w-5 h-5" /> },
  { value: "4+", label: "Stacks learned independently", icon: <Lightbulb className="w-5 h-5" /> },
  { value: "1", label: "Published research paper", icon: <BookOpen className="w-5 h-5" /> },
  { value: "1st", label: "National EV competition", icon: <Award className="w-5 h-5" /> },
];

const skillCategories = [
  {
    label: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    skills: ["Java", "Python", "TypeScript", "C#", "MATLAB / C", "PLC"],
  },
  {
    label: "Frameworks & Libraries",
    icon: <Globe className="w-4 h-4" />,
    skills: ["Django", "ASP.NET", "React.js", "Node.js", "Bootstrap"],
  },
  {
    label: "Databases",
    icon: <Database className="w-4 h-4" />,
    skills: ["PostgreSQL / PostGIS", "MySQL", "SQL Server", "MongoDB", "Redis"],
  },
  {
    label: "Tools & Practices",
    icon: <Zap className="w-4 h-4" />,
    skills: ["RESTful APIs", "JWT", "Git / GitHub", "Linux (Ubuntu)", "Postman", "ORM", "Agile", "CI/CD basics", "OOP", "SOLID Principles", "Design Patterns"],
  },
];

const techStack = [
  { icon: <SiPython className="w-5 h-5" />, name: "Python", level: "Proficient", color: "text-yellow-400" },
  { icon: <SiDjango className="w-5 h-5" />, name: "Django", level: "Proficient", color: "text-green-500" },
  { icon: <Code2 className="w-5 h-5" />, name: "Java", level: "Proficient", color: "text-orange-400" },
  { icon: <SiReact className="w-5 h-5" />, name: "React.js", level: "Learning", color: "text-cyan-400" },
  { icon: <SiPostgresql className="w-5 h-5" />, name: "PostgreSQL", level: "Proficient", color: "text-blue-400" },
  { icon: <SiMongodb className="w-5 h-5" />, name: "MongoDB", level: "Proficient", color: "text-green-400" },
  { icon: <SiLinux className="w-5 h-5" />, name: "Linux", level: "Proficient", color: "text-yellow-300" },
  { icon: <SiCplusplus className="w-5 h-5" />, name: "C / C#", level: "Proficient", color: "text-blue-500" },
  { icon: <Globe className="w-5 h-5" />, name: "TypeScript", level: "Proficient", color: "text-blue-300" },
  { icon: <Globe className="w-5 h-5" />, name: "ASP.NET", level: "Learning", color: "text-purple-400" },
  { icon: <Globe className="w-5 h-5" />, name: "Node.js", level: "Learning", color: "text-green-300" },
  { icon: <Database className="w-5 h-5" />, name: "Redis", level: "Proficient", color: "text-red-400" },
];

const projects = [
  {
    title: "Art Marketplace",
    summary: "Currently building the backend for a dual-sided SaaS platform — online marketplace where local artists can showcase and sell their drawings. This platform will connect artists with buyers.",
    tech: ["ASP.NET Core", "PostgreSQL", "JSON" , "JWT"],
    icon: <Globe className="w-6 h-6" />,
    highlight: true,
    tag: "In Active Development",
    status: "live",
    github: "https://github.com/nada969/ArtMarket-B2B-API-Pro",
  },
  {
    title: "Fuel-Optimized Route API",
    summary: "REST API that integrates with OpenRouteService to split US road trips into ≤500-mile segments, select the cheapest fuel stop per segment, and return total trip cost in a single call.",
    tech: ["Python", "Django", "MySQL", "RESTful API", "JWT"],
    icon: <Zap className="w-6 h-6" />,
    highlight: false,
    github: "https://github.com/nada969/Fuel-Optimized-Route-API-Project",
  },
  {
    title: "Data Migration Tool",
    summary: "Syncs data between MongoDB (source) and PostgreSQL (destination) using JSON mappings, cron scheduling, batch processing, and full error handling.",
    tech: ["Java", "MongoDB", "PostgreSQL", "Cron", "JSON"],
    icon: <Database className="w-6 h-6" />,
    highlight: false,
    github: "https://github.com/nada969/Data-Migration-Tool",
  },
  {
    title: "E-Commerce API — Artiqo",
    summary: "Designed and built a full RESTful backend with JWT auth, product CRUD, cart, and order processing — focused on backend efficiency and data security.",
    tech: ["Python", "Django", "MySQL", "JWT"],
    icon: <Globe className="w-6 h-6" />,
    highlight: true,
    tag: "Self-taught Django",
    github: "https://github.com/nada969/Artiqo-Project",
  },
  {
    title: "Payment Application",
    summary: "Simulated card, ATM terminal, and server interactions — implementing SALE, REFUND, Pre-Authorization, and VOID using C and software design patterns.",
    tech: ["C Language", "Design Patterns"],
    icon: <Code2 className="w-6 h-6" />,
    highlight: false,
    github: "https://github.com/nada969/Payment_Application",
  },
  {
    title: "On-Demand Traffic Light System",
    summary: "Real-time traffic light system with pedestrian crosswalk integration using AVR ATmega32. Programmed in C, tested in Proteus simulation.",
    tech: ["C", "Embedded", "ATmega32", "Proteus"],
    icon: <Cpu className="w-6 h-6" />,
    highlight: false,
    github: "https://github.com/nada969/On-demand-Traffic-light-control",
  },
  {
    title: "EV Prototype — DU Racing",
    summary: "Led embedded software and control system development for the university EV team's electrical architecture. Also developed the team website. Won 1st place at EVER Egypt 2021.",
    tech: ["Embedded", "Control Systems", "Web"],
    icon: <Zap className="w-6 h-6" />,
    highlight: true,
    tag: "1st Place EVER Egypt 2021",
    github: "https://www.masrawy.com/news/news_regions/details/2022/4/1/2201016",
    linkLabel: "View Post",
  },
  {
    title: "Published Research Paper",
    summary: "\"Optimized Control of Modular Multilevel VSC-HVDC for Offshore Wind Farm Integration\" — advanced control strategies for MMC-based HVDC systems. Published at MEPCON 2023.",
    tech: ["Control Theory", "MATLAB", "HVDC"],
    icon: <BookOpen className="w-6 h-6" />,
    highlight: false,
    github: "https://lnkd.in/dX5nM3by",
    linkLabel: "View Paper",
  },
];

const timeline = [
  { year: "2018", event: "Started Electrical Engineering at Damietta University", type: "edu" },
  { year: "2019", event: "Completed Web Development Diploma at Let's Know Training Center — JavaScript (ES6), TypeScript, HTML5, CSS3, Bootstrap, Sass, Responsive Design, CI/CD basics", type: "self" },
  { year: "2021", event: "Led EV embedded software team → Won 1st place at EVER Egypt national EV competition", type: "win" },
  { year: "2022", event: "Software Developer Intern at Banque Misr — Angular, TypeScript, REST APIs. Built and launched an e-commerce web app.", type: "work" },
  { year: "2023", event: "Graduated B.Eng. + published research paper at MEPCON international conference", type: "edu" },
  { year: "2023", event: "Joined Elsewedy Engineering as Electrical Tendering Engineer — SAP, Odoo, automation & infrastructure projects", type: "work" },
  { year: "2024", event: "Enrolled in ALX Africa Software Engineering Diploma — by choice, while working full-time. Python, Django, Databases, RESTful APIs, Linux.", type: "self" },
  { year: "2025", event: "Completed ALX · Building OrderX SaaS + more · Actively seeking software engineering roles", type: "now" },
];

const typeLines = [
  "$ whoami",
  "→ nada_yahya :: engineer + developer",
  "$ cat passion.txt",
  "→ building software solutions.",
  "$ git log --oneline",
  "→ 8+ projects. always shipping.",
  "→ never stopped learning.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-background">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-15 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
              <span className="h-[1px] w-8 bg-primary" />
              <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">Software Engineer</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black leading-[0.92] tracking-tighter mb-6">
              Nada<br />
              <span className="text-primary">Yahya</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-md">
              Software Engineer passionate about exploring new technologies and solve real-world problems through software.
            </motion.p>

            <motion.p variants={fadeIn} className="text-muted-foreground/70 text-base leading-relaxed mb-10 max-w-md">
              Self-taught across stacks. Published researcher. Always looking for the next hard problem and the right team to solve it with.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <a href="#contact" data-testid="link-contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-background font-bold hover:bg-primary/90 transition-all rounded-sm">
                Let's Build Together <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" data-testid="link-projects" className="inline-flex items-center gap-2 px-7 py-3.5 border border-border hover:border-primary/50 hover:bg-white/[0.03] transition-all rounded-sm font-medium">
                See My Work <ArrowUpRight className="w-4 h-4" />
              </a>
             
            </motion.div>
          </motion.div>

          {/* Right — terminal + photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col gap-5 w-full"
          >
            <div className="bg-[#0d0d0d] border border-border rounded-md overflow-hidden shadow-2xl w-full">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                <div className="w-3 h-3 rounded-full bg-red-500/60 shrink-0" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60 shrink-0" />
                <div className="w-3 h-3 rounded-full bg-green-500/60 shrink-0" />
                <span className="font-mono text-xs text-muted-foreground ml-3 truncate">
                  terminal — nada@portfolio
                </span>
              </div>
              <div className="p-4 sm:p-6 min-h-[150px] sm:min-h-[180px]">
                <TypewriterText lines={typeLines} />
              </div>
            </div>

            <div className="relative group self-center">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 to-primary/10 rounded-lg blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <img
                src={profileImg}
                alt="Nada Yahya Mousa"
                className="relative w-full max-w-xs object-cover rounded-lg border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-background/85 backdrop-blur-sm border border-border rounded-md px-4 py-2.5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">Nada Yahya Mousa</p>
                  <p className="font-mono text-xs text-muted-foreground">Cairo, Egypt</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono border border-primary/30 bg-primary/10 text-primary px-2 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Open
                </span>
              </div>
            </div>
          </motion.div> 

        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="border-y border-border/50 bg-secondary/10 px-6 lg:px-16 py-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeIn} className="flex flex-col items-center text-center gap-2 p-6 border border-border bg-card rounded-sm hover:border-primary/30 transition-colors">
                <div className="text-primary">{s.icon}</div>
                <span className="text-4xl font-black text-foreground">{s.value}</span>
                <span className="font-mono text-xs text-muted-foreground leading-snug">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MY JOURNEY ───────────────────────────────────── */}
      <section className="px-6 lg:px-16 py-28 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn} className="mb-16">
            <p className="font-mono text-primary text-xs mb-3 uppercase tracking-widest">The Story</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">How I Got Here</h2>
            <p className="text-muted-foreground max-w-xl">
              Not a straight line. Every milestone was a choice — some required, most self-driven.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => {
                const isRight = i % 2 === 0;
                const colors: Record<string, string> = {
                  edu: "border-blue-400/40 bg-blue-400/5 text-blue-400",
                  self: "border-primary/40 bg-primary/5 text-primary",
                  work: "border-muted-foreground/30 bg-secondary/30 text-muted-foreground",
                  win: "border-yellow-400/40 bg-yellow-400/5 text-yellow-400",
                  now: "border-green-400/40 bg-green-400/5 text-green-400",
                };
                const badges: Record<string, string> = { edu: "Education", self: "Self-Taught", work: "Work", win: "Achievement", now: "Now" };

                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fadeIn}
                    className={`relative flex items-start gap-4 md:gap-0 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* dot — centered on the line at both breakpoints */}
                    <div className="absolute left-[11px] md:left-1/2 top-5 w-5 h-5 -translate-x-1/2 flex-shrink-0 z-10">
                      <div className={`w-full h-full rounded-full border-2 ${colors[item.type]} bg-background`} />
                    </div>

                    <div className={`pl-10 md:pl-0 md:w-1/2 ${isRight ? "md:pr-12" : "md:pl-12"}`}>
                      <div className={`p-5 border rounded-sm ${colors[item.type]}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-xs font-bold">{item.year}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${colors[item.type]}`}>{badges[item.type]}</span>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────── */}
      <section className="px-6 lg:px-16 py-24 bg-secondary/10 border-y border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn} className="mb-14">
            <p className="font-mono text-primary text-xs mb-3 uppercase tracking-widest">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">What I Work With</h2>
            <p className="text-muted-foreground mt-4 max-w-lg">Picked up across formal education, evening courses, and late-night project builds. Full list, no fluff.</p>
          </motion.div>

          {/* Skill category grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {skillCategories.map((cat, i) => (
              <motion.div key={i} variants={fadeIn} className="p-6 border border-border bg-card rounded-sm hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  {cat.icon}
                  <span className="font-mono text-xs font-bold uppercase tracking-widest">{cat.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="font-mono text-xs px-3 py-1.5 border border-border bg-secondary/30 rounded-sm text-foreground/80 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key tech icon cards */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-10">
            {techStack.map((t, i) => (
              <motion.div key={i} variants={fadeIn} className={`group flex flex-col items-center gap-2 p-4 border rounded-sm bg-card hover:bg-white/[0.03] transition-all text-center ${t.level === "Learning" ? "border-primary/25" : "border-border"}`}>
                <div className={t.color}>{t.icon}</div>
                <p className="font-semibold text-xs leading-tight">{t.name}</p>
                {t.level === "Learning" && (
                  <span className="font-mono text-[9px] text-primary leading-none">learning</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* "Currently Exploring" banner */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 border border-primary/20 bg-primary/5 rounded-sm">
            <div className="flex items-center gap-3 text-primary flex-shrink-0">
              <Coffee className="w-5 h-5" />
              <span className="font-mono text-sm font-bold uppercase tracking-widest">Currently Exploring</span>
            </div>
            <div className="h-[1px] hidden md:block flex-1 bg-primary/20" />
            <div className="flex flex-wrap gap-2">
              {["System Design", "Docker & Kubernetes", "Advanced React", "Open Source Contribution", "ASP.NET"].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 border border-primary/30 bg-primary/10 text-primary rounded-sm">
                  <span className="w-1 h-1 rounded-full bg-primary animate-pulse" /> {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────── */}
      <section id="projects" className="px-6 lg:px-16 py-28">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn} className="mb-16">
            <p className="font-mono text-primary text-xs mb-3 uppercase tracking-widest">Built on my own time</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Projects</h2>
            <p className="text-muted-foreground mt-4 max-w-lg">Every one of these was built outside of work hours — because I wanted to, not because I had to.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className={`group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-6 p-7 border rounded-sm transition-all hover:bg-white/[0.02] ${p.highlight ? "border-primary/30 bg-primary/5 hover:border-primary/50" : "border-border bg-card hover:border-primary/30"}`}
              >
                <div className="flex gap-5 items-start">
                  <div className={`p-3 rounded-sm flex-shrink-0 border ${p.highlight ? "border-primary/30 bg-primary/10 text-primary" : "border-border bg-secondary/30 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5"} transition-colors`}>
                    {p.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{p.title}</h3>
                      {p.tag && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 border border-primary/30 bg-primary/10 text-primary rounded-full">
                          <Star className="w-2.5 h-2.5" /> {p.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.summary}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t, j) => (
                        <span key={j} className="font-mono text-[10px] px-2.5 py-1 border border-border bg-secondary/30 rounded-sm text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {p.github && (
                  <div className="self-start md:self-center pl-0 md:pl-2 flex-shrink-0">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 border border-border bg-secondary/20 hover:border-primary/50 hover:bg-primary/5 hover:text-primary text-muted-foreground transition-all rounded-sm font-mono text-xs whitespace-nowrap"
                    >
                      <SiGithub className="w-4 h-4" /> {p.linkLabel ?? "View Code"}
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="px-6 lg:px-16 py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
          <span className="text-[14rem] font-black text-white/[0.018] tracking-tighter leading-none">BUILD</span>
        </div>

        <div className="container mx-auto max-w-4xl relative text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}>
            <motion.p variants={fadeIn} className="font-mono text-primary text-xs mb-4 uppercase tracking-widest">Let's Connect</motion.p>
            <motion.h2 variants={fadeIn} className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Let's Build<br /><span className="text-primary">Something</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto leading-relaxed">
              Whether you're hiring, collaborating on open source, or just want to talk tech — I'm always up for it.
            </motion.p>
            <motion.p variants={fadeIn} className="text-muted-foreground/60 text-sm mb-12 font-mono">nadamousa969@gmail.com</motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a href="mailto:nadamousa969@gmail.com" data-testid="link-email"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-bold hover:bg-primary/90 transition-all rounded-sm">
                <Mail className="w-5 h-5" /> Say Hello <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/nada-yahya" target="_blank" rel="noreferrer" data-testid="link-linkedin"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-primary/50 hover:bg-white/[0.03] transition-all rounded-sm font-medium">
                LinkedIn <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" data-testid="link-github"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-primary/50 hover:bg-white/[0.03] transition-all rounded-sm font-medium">
                <SiGithub className="w-5 h-5" /> GitHub <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://drive.google.com/file/d/1UraFjnEFr94voOH1YQx1zcMBnShQgcFq/view?usp=sharing" target="_blank" rel="noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 border border-primary/40 bg-primary/8 hover:bg-primary/15 text-primary transition-all rounded-sm font-semibold overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent pointer-events-none" />
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                <span>View CV</span>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </motion.div>

           

            <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 text-muted-foreground/40 font-mono text-xs">
              <MapPin className="w-3 h-3" /> Cairo, Egypt — open to remote & relocation
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="py-6 border-t border-border/20 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-2 text-muted-foreground/30 font-mono text-[11px]">
          <p>Nada Yahya Mousa · Portfolio {new Date().getFullYear()}</p>
          <p>Built outside work hours, because that's who I am.</p>
        </div>
      </footer>
    </div>
  );
}
