import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiDjango, SiPostgresql, SiMongodb, SiLinux, SiReact, SiPython, SiCplusplus } from "react-icons/si";
import {
  Mail, MapPin, ChevronRight, ArrowUpRight, Award, BookOpen,
  Code2, Zap, Globe, Users, Lightbulb, Star, Coffee, Cpu, Database
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
  { value: "6+", label: "Projects built on own time", icon: <Code2 className="w-5 h-5" /> },
  { value: "3+", label: "Stacks learned independently", icon: <Lightbulb className="w-5 h-5" /> },
  { value: "1", label: "Published research paper", icon: <BookOpen className="w-5 h-5" /> },
  { value: "1st", label: "National EV competition", icon: <Award className="w-5 h-5" /> },
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
];

const projects = [
  {
    title: "Data Migration Tool",
    summary: "Built independently to solve a real problem — reliable sync between MongoDB and PostgreSQL with cron, batching, and error recovery.",
    tech: ["Java", "MongoDB", "PostgreSQL", "Cron"],
    icon: <Database className="w-6 h-6" />,
    highlight: false,
  },
  {
    title: "E-Commerce API — Artiqo",
    summary: "Designed and built a full RESTful backend with JWT auth, product CRUD, cart, and order flow. Learned Django in depth to make it happen.",
    tech: ["Python", "Django", "MySQL", "JWT"],
    icon: <Globe className="w-6 h-6" />,
    highlight: true,
    tag: "Self-taught Django",
  },
  {
    title: "Payment Application",
    summary: "Implemented SALE, REFUND, Pre-Authorization, and VOID using software design patterns — all in C, from scratch.",
    tech: ["C Language", "Design Patterns"],
    icon: <Code2 className="w-6 h-6" />,
    highlight: false,
  },
  {
    title: "Traffic Light System",
    summary: "Real-time embedded system for pedestrian-triggered traffic control using AVR ATmega32 and Proteus simulation.",
    tech: ["C", "Embedded", "ATmega32"],
    icon: <Cpu className="w-6 h-6" />,
    highlight: false,
  },
  {
    title: "EV Prototype — DU Racing",
    summary: "Led embedded software and control architecture for the university EV team. Won 1st place nationally. Also built the team website.",
    tech: ["Embedded", "Control Systems", "Web"],
    icon: <Zap className="w-6 h-6" />,
    highlight: true,
    tag: "1st Place EVER Egypt 2021",
  },
  {
    title: "Published Research Paper",
    summary: "Co-authored and published an optimization study for MMC-based HVDC grids at MEPCON 2023 — a top power systems conference.",
    tech: ["Control Theory", "MATLAB", "HVDC"],
    icon: <BookOpen className="w-6 h-6" />,
    highlight: false,
  },
];

const timeline = [
  { year: "2018", event: "Started Electrical Engineering at Damietta University", type: "edu" },
  { year: "2019", event: "Learned web dev independently — JavaScript, HTML, CSS, Bootstrap", type: "self" },
  { year: "2021", event: "Led EV software team → Won EVER Egypt national competition", type: "win" },
  { year: "2022", event: "Interned at Banque Misr as Software Developer — Angular + REST APIs", type: "work" },
  { year: "2023", event: "Graduated + published research paper at MEPCON international conference", type: "edu" },
  { year: "2023", event: "Joined Elsewedy Engineering as Tendering Engineer", type: "work" },
  { year: "2024", event: "Enrolled in ALX Software Engineering Diploma — by choice, while working full-time", type: "self" },
  { year: "2025", event: "Completed ALX · Actively building projects · Open to software roles", type: "now" },
];

const typeLines = [
  "$ whoami",
  "→ nada_yahya :: engineer + developer",
  "$ cat passion.txt",
  "→ building software while the world sleeps.",
  "$ git log --oneline",
  "→ 6 personal projects. 1 published paper.",
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
              <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">Software Engineer in Progress</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black leading-[0.92] tracking-tighter mb-6">
              Nada<br />
              <span className="text-primary">Yahya</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-md">
              Electrical engineer by career. Software developer by <span className="text-foreground font-semibold">obsession</span>.
              I build things on my own time because I genuinely love it — not because I have to.
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="flex flex-col gap-5">
            <div className="bg-[#0d0d0d] border border-border rounded-md overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="font-mono text-xs text-muted-foreground ml-3">terminal — nada@portfolio</span>
              </div>
              <div className="p-6 min-h-[180px]">
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
                    {/* dot */}
                    <div className="absolute left-0 md:left-1/2 top-4 w-6 h-6 -translate-x-[10px] md:-translate-x-3 flex-shrink-0 z-10">
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
            <p className="text-muted-foreground mt-4 max-w-lg">Marked what I'm still actively growing in — because I think that matters more than pretending everything is "expert level".</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
            {techStack.map((t, i) => (
              <motion.div key={i} variants={fadeIn} className={`group flex items-center gap-3 p-5 border rounded-sm bg-card hover:bg-white/[0.03] transition-all ${t.level === "Learning" ? "border-primary/30" : "border-border"}`}>
                <div className={t.color}>{t.icon}</div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className={`font-mono text-[10px] ${t.level === "Learning" ? "text-primary" : "text-muted-foreground"}`}>
                    {t.level === "Learning" ? "actively learning" : "proficient"}
                  </p>
                </div>
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
              {["Advanced React Patterns", "System Design", "Docker & Kubernetes", "TypeScript", "Open Source Contribution"].map((item, i) => (
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
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{p.title}</h3>
                      {p.tag && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 border border-primary/30 bg-primary/10 text-primary rounded-full">
                          <Star className="w-2.5 h-2.5" /> {p.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.summary}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 md:justify-end md:max-w-[200px]">
                  {p.tech.map((t, j) => (
                    <span key={j} className="font-mono text-[10px] px-2.5 py-1 border border-border bg-secondary/30 rounded-sm text-muted-foreground">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY I WANT TO JOIN A TEAM ────────────────────── */}
      <section className="px-6 lg:px-16 py-24 bg-secondary/10 border-y border-border/40">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn}>
              <p className="font-mono text-primary text-xs mb-4 uppercase tracking-widest">What Drives Me</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">I Want to Grow With a Team</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>I've been learning on my own for years — YouTube tutorials at midnight, side projects no one asked for, a research paper nobody paid me to write.</p>
                <p>But <span className="text-foreground font-semibold">I know I'll grow faster surrounded by experienced developers</span> who push standards higher, do real code reviews, and have already solved the problems I'm just discovering.</p>
                <p>I'm not looking for a job title. I'm looking for a team that cares about craft, values self-starters, and has room for someone who will outwork almost anyone.</p>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="space-y-4">
              {[
                { icon: <Users className="w-5 h-5" />, title: "Community-Driven", body: "I believe the best engineers learn from each other. I actively seek out feedback, discussions, and code review." },
                { icon: <Zap className="w-5 h-5" />, title: "Fast Learner", body: "I picked up Django, Java backend, and embedded C on my own time. Give me a new tech, I'll be productive within weeks." },
                { icon: <Lightbulb className="w-5 h-5" />, title: "Always Curious", body: "I read docs for fun. I watch conference talks on weekends. My 'Currently Exploring' list never empties." },
                { icon: <Star className="w-5 h-5" />, title: "High Standards", body: "I published a research paper in a competitive conference. I hold my own code to the same level." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="flex gap-4 p-5 border border-border bg-card rounded-sm hover:border-primary/30 transition-colors group">
                  <div className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
