import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Mail, MapPin, Phone, ChevronRight, Award, BookOpen, Code, Cpu, Linkedin, ArrowUpRight, Zap, Database, Terminal, GitBranch, Layers } from "lucide-react";
import profileImg from "@/assets/images/profile.png";
import heroBg from "@/assets/images/hero-bg.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const skillCategories = [
  { label: "Languages", icon: <Terminal className="w-4 h-4" />, tags: ["Java", "JavaScript", "Python", "C#", "MATLAB", "PLC"] },
  { label: "Frontend", icon: <Layers className="w-4 h-4" />, tags: ["React.js", "Angular", "Bootstrap", "MUI"] },
  { label: "Backend", icon: <Zap className="w-4 h-4" />, tags: ["ASP.NET Core", "Django", "REST APIs", "ORM"] },
  { label: "Databases", icon: <Database className="w-4 h-4" />, tags: ["MySQL", "PostgreSQL", "MongoDB"] },
  { label: "DevOps & Tools", icon: <GitBranch className="w-4 h-4" />, tags: ["Git/GitHub", "Linux", "Vim", "Postman", "Agile"] },
];

const projects = [
  {
    title: "Data Migration Tool",
    tech: "Java · MongoDB · PostgreSQL · Cron",
    desc: "Syncs data between MongoDB and PostgreSQL using JSON mappings, cron scheduling, batch processing, and robust error handling.",
    icon: <Database className="w-8 h-8" />,
    size: "large",
  },
  {
    title: "E-Commerce API (Artiqo)",
    tech: "Python · Django · MySQL · JWT",
    desc: "Secure RESTful APIs for user authentication, product CRUD, cart operations, and order processing.",
    icon: <Code className="w-8 h-8" />,
    size: "small",
  },
  {
    title: "Payment Application",
    tech: "C Language · Design Patterns",
    desc: "Simulates card/ATM/server interactions: SALE, REFUND, Pre-Authorization, and VOID.",
    icon: <Cpu className="w-8 h-8" />,
    size: "small",
  },
  {
    title: "Traffic Light Control",
    tech: "C · Proteus · ATmega32",
    desc: "Real-time embedded traffic system with pedestrian crosswalk using AVR microcontroller.",
    icon: <Zap className="w-8 h-8" />,
    size: "small",
  },
  {
    title: "Electric Vehicle Prototype",
    tech: "Embedded Software · Control Systems",
    desc: "Led embedded software and EV electrical architecture for DU Racing Team. 1st Place — EVER Egypt EV Competition (2021).",
    icon: <Award className="w-8 h-8" />,
    size: "large",
  },
  {
    title: "Published Research",
    tech: "Control Theory · MATLAB · MEPCON 2023",
    desc: "Optimized Control of Modular Multilevel VSC-HVDC for Offshore Wind Farm Integration.",
    icon: <BookOpen className="w-8 h-8" />,
    size: "small",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-background font-sans">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* large faded number */}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.03] select-none leading-none pointer-events-none">01</span>

        <div className="container mx-auto max-w-6xl relative z-10 pt-24 pb-16">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            <div className="lg:col-span-3 space-y-8">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-mono text-sm tracking-widest uppercase">Available for opportunities</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                Nada<br />
                <span className="text-primary">Yahya</span><br />
                <span className="text-foreground/30">Mousa</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                A multidisciplinary engineer bridging electrical systems, software architecture, and embedded development — with published research and a national competition win.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a href="#contact" data-testid="link-contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-background font-bold hover:bg-primary/90 transition-all rounded-sm">
                  Connect <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#projects" data-testid="link-projects" className="inline-flex items-center gap-2 px-7 py-3.5 border border-border hover:border-primary/60 hover:bg-white/[0.04] transition-all rounded-sm font-medium">
                  View Work <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-transparent rounded-lg blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <img
                  src={profileImg}
                  alt="Nada Yahya Mousa"
                  className="relative z-10 w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-background/80 backdrop-blur-sm border border-border rounded-md px-3 py-2">
                  <p className="font-mono text-xs text-primary">Software Engineer</p>
                  <p className="font-mono text-xs text-muted-foreground">Cairo, Egypt</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-primary/50" />
          <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────── */}
      <section id="experience" className="px-6 lg:px-16 py-28 relative">
        {/* background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)" }} />

        <div className="container mx-auto max-w-6xl relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="mb-16 flex items-end justify-between">
            <div>
              <p className="font-mono text-primary text-sm mb-2 uppercase tracking-widest">02 / experience</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Where I've Worked</h2>
            </div>
            <div className="hidden md:block h-[1px] flex-1 bg-border mx-8 mb-4" />
          </motion.div>

          <div className="space-y-6">
            {[
              {
                index: "A",
                role: "Electrical Tendering Engineer",
                company: "Elsewedy Engineering Industries",
                date: "Nov 2023 – Present",
                location: "On-site · Al Jizah",
                desc: "System design, technical communication, ERP workflows (SAP, Odoo), and cross-functional collaboration across automation, infrastructure, and industrial sectors.",
                current: true,
              },
              {
                index: "B",
                role: "Software Developer Intern",
                company: "Banque Misr",
                date: "Jul – Aug 2022",
                location: "Remote · New Cairo",
                desc: "Front-end web development using Angular, TypeScript, and REST APIs. Built and launched a full e-commerce web application.",
                current: false,
              }
            ].map((job, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUp}
                className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-0 border border-border hover:border-primary/40 bg-card hover:bg-white/[0.02] transition-all duration-300 overflow-hidden rounded-sm"
              >
                {/* large index letter */}
                <div className="hidden md:flex items-center justify-center w-24 bg-secondary/40 group-hover:bg-primary/10 transition-colors border-r border-border">
                  <span className="text-5xl font-black text-border group-hover:text-primary/30 transition-colors">{job.index}</span>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <p className="text-primary font-semibold mt-1">{job.company}</p>
                    </div>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono border border-primary/30 bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Current
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{job.desc}</p>
                </div>

                <div className="md:flex flex-col items-end justify-center p-8 border-t md:border-t-0 md:border-l border-border text-right min-w-[160px]">
                  <p className="font-mono text-xs text-muted-foreground mb-1">{job.date}</p>
                  <p className="font-mono text-xs text-muted-foreground/60">{job.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS BENTO ─────────────────────────────────── */}
      <section id="projects" className="px-6 lg:px-16 py-28 bg-secondary/10 border-y border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="mb-16">
            <p className="font-mono text-primary text-sm mb-2 uppercase tracking-widest">03 / selected work</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Projects</h2>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4"
          >
            {/* Row 1: large + small */}
            <motion.div variants={fadeInUp} className="md:col-span-2 group relative p-8 bg-card border border-border hover:border-primary/50 rounded-sm overflow-hidden flex flex-col justify-between min-h-[220px] transition-colors">
              <div className="absolute right-6 top-6 text-primary/10 group-hover:text-primary/20 transition-colors">{projects[0].icon}</div>
              <div>
                <p className="font-mono text-xs text-primary/60 mb-3">{projects[0].tech}</p>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{projects[0].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{projects[0].desc}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-colors mt-6 self-end" />
            </motion.div>

            <motion.div variants={fadeInUp} className="group relative p-8 bg-primary/5 border border-primary/20 hover:border-primary/50 rounded-sm overflow-hidden flex flex-col justify-between min-h-[220px] transition-colors">
              <div className="absolute right-6 top-6 text-primary/20 group-hover:text-primary/40 transition-colors">{projects[1].icon}</div>
              <div>
                <p className="font-mono text-xs text-primary/60 mb-3">{projects[1].tech}</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{projects[1].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{projects[1].desc}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-primary/30 group-hover:text-primary transition-colors mt-4 self-end" />
            </motion.div>

            {/* Row 2: small + small + large */}
            <motion.div variants={fadeInUp} className="group relative p-8 bg-card border border-border hover:border-primary/50 rounded-sm overflow-hidden flex flex-col justify-between min-h-[200px] transition-colors">
              <div className="absolute right-6 top-6 text-primary/10 group-hover:text-primary/20 transition-colors">{projects[2].icon}</div>
              <div>
                <p className="font-mono text-xs text-primary/60 mb-3">{projects[2].tech}</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{projects[2].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{projects[2].desc}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group relative p-8 bg-card border border-border hover:border-primary/50 rounded-sm overflow-hidden flex flex-col justify-between min-h-[200px] transition-colors">
              <div className="absolute right-6 top-6 text-primary/10 group-hover:text-primary/20 transition-colors">{projects[3].icon}</div>
              <div>
                <p className="font-mono text-xs text-primary/60 mb-3">{projects[3].tech}</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{projects[3].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{projects[3].desc}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group relative p-8 bg-card border border-border hover:border-primary/50 rounded-sm overflow-hidden flex flex-col justify-between min-h-[200px] transition-colors">
              <div className="absolute right-6 top-6 text-primary/10 group-hover:text-primary/20 transition-colors">{projects[5].icon}</div>
              <div>
                <p className="font-mono text-xs text-primary/60 mb-3">{projects[5].tech}</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{projects[5].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{projects[5].desc}</p>
              </div>
            </motion.div>

            {/* Full-width EV featured */}
            <motion.div variants={fadeInUp} className="md:col-span-3 group relative p-10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 hover:border-primary/50 rounded-sm overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors">
              <div className="absolute right-0 top-0 bottom-0 flex items-center pr-12 text-primary/5 group-hover:text-primary/10 transition-colors">
                <Award className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary font-mono text-xs px-3 py-1 rounded-full mb-4">
                  <Award className="w-3 h-3" /> 1st Place — EVER Egypt EV Competition 2021
                </div>
                <p className="font-mono text-xs text-primary/60 mb-2">{projects[4].tech}</p>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{projects[4].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3 max-w-2xl">{projects[4].desc}</p>
              </div>
              <ArrowUpRight className="relative z-10 w-8 h-8 text-primary/30 group-hover:text-primary transition-colors flex-shrink-0 self-end md:self-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="mb-16">
            <p className="font-mono text-primary text-sm mb-2 uppercase tracking-widest">04 / capabilities</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Technical Arsenal</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {skillCategories.map((cat, i) => (
              <motion.div key={i} variants={fadeInLeft} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-primary/20 bg-primary/5 rounded-sm text-primary">{cat.icon}</div>
                  <span className="font-mono text-sm font-semibold text-muted-foreground uppercase tracking-wider">{cat.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-4 py-1.5 border border-border bg-secondary/30 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all text-sm font-mono rounded-sm cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATION & RESEARCH ───────────────────────────── */}
      <section className="px-6 lg:px-16 py-28 bg-secondary/10 border-y border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="mb-16">
            <p className="font-mono text-primary text-sm mb-2 uppercase tracking-widest">05 / background</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Education & Research</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Education cards */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeInUp}
              className="p-8 bg-card border border-border hover:border-primary/40 rounded-sm transition-colors group">
              <p className="font-mono text-xs text-primary/60 mb-4 uppercase tracking-widest">2024 – 2025</p>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Software Engineering Diploma</h3>
              <p className="text-primary font-semibold text-sm mb-4">ALX Africa Academy</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Python", "Django", "MySQL", "Linux", "REST APIs"].map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 bg-secondary/50 rounded-sm text-muted-foreground">{t}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeInUp}
              className="p-8 bg-card border border-border hover:border-primary/40 rounded-sm transition-colors group">
              <p className="font-mono text-xs text-primary/60 mb-4 uppercase tracking-widest">2018 – 2023</p>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Bachelor of Engineering</h3>
              <p className="text-primary font-semibold text-sm mb-3">Damietta University</p>
              <p className="text-muted-foreground text-sm leading-relaxed">Electrical & Electronics Engineering. Graduation Project: MMC-based HVDC grid control for renewable energy integration.</p>
            </motion.div>

            {/* Research highlight — taller card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeInUp}
              className="relative p-8 border border-primary/30 bg-primary/5 hover:bg-primary/10 rounded-sm overflow-hidden transition-colors group flex flex-col justify-between">
              <BookOpen className="absolute right-[-20px] bottom-[-20px] w-40 h-40 text-primary/8 group-hover:text-primary/15 transition-colors" />
              <div>
                <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary font-mono text-xs px-3 py-1 rounded-full mb-6">
                  Published Research
                </div>
                <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-primary transition-colors">
                  Optimized Control of Modular Multilevel VSC-HVDC for Offshore Wind Farm Integration
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">MEPCON 2023 — Advanced control strategies for MMC-based HVDC systems with enhanced efficiency and reliability.</p>
              </div>
              <p className="font-mono text-xs text-primary/60 mt-6">MEPCON International Conference</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────── */}
      <section id="contact" className="px-6 lg:px-16 py-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[16rem] font-black text-white/[0.015] tracking-tighter leading-none">HELLO</span>
        </div>

        <div className="container mx-auto max-w-4xl relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="text-center">
            <p className="font-mono text-primary text-sm mb-4 uppercase tracking-widest">06 / contact</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Let's <span className="text-primary">Talk</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Open to new opportunities — whether it's a software role, research collaboration, or just a conversation.
            </p>

            <a
              href="mailto:nadamousa969@gmail.com"
              data-testid="link-email"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-background font-bold text-lg hover:bg-primary/90 transition-all rounded-sm"
            >
              <Mail className="w-5 h-5" /> nadamousa969@gmail.com <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 p-4 border border-border bg-card rounded-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-mono text-sm text-muted-foreground">Cairo, Egypt</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 border border-border bg-card rounded-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-mono text-sm text-muted-foreground">+20 1014494370</span>
              </div>
              <div className="flex items-center justify-center gap-4 p-4 border border-border bg-card rounded-sm">
                <a href="https://www.linkedin.com/in/nada-yahya" target="_blank" rel="noreferrer" data-testid="link-linkedin" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noreferrer" data-testid="link-github" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="py-6 border-t border-border/30 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-2 text-muted-foreground/40 font-mono text-xs">
          <p>Nada Yahya Mousa — Portfolio</p>
          <p>Built with precision.</p>
        </div>
      </footer>
    </div>
  );
}
