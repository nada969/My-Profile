import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Mail, MapPin, Phone, ChevronRight, Award, BookOpen, Code, Cpu, Linkedin } from "lucide-react";
import profileImg from "@/assets/images/profile.png";
import heroBg from "@/assets/images/hero-bg.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 lg:px-12">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Abstract technical background" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-primary"></div>
                <span className="text-primary font-mono tracking-widest uppercase text-sm font-semibold">Software Engineer</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                Nada Yahya <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Mousa</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                A multidisciplinary engineer bridging electrical systems, software architecture, and embedded development with a proven record of competition wins and scalable engineering solutions.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a href="#contact" data-testid="link-contact" className="px-8 py-4 bg-primary text-background font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  Connect With Me <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#projects" data-testid="link-projects" className="px-8 py-4 border border-border hover:border-primary/50 hover:bg-white/5 transition-colors font-medium">
                  View Projects
                </a>
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 border border-primary/30 rounded-sm transform rotate-3"></div>
                <div className="absolute -inset-4 border border-primary/20 rounded-sm transform -rotate-3"></div>
                <img 
                  src={profileImg} 
                  alt="Nada Yahya Mousa" 
                  className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-sm border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 lg:px-12 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
              <span className="text-primary font-mono text-xl">01.</span> Experience
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                role: "Electrical Tendering Engineer",
                company: "Elsewedy Engineering Industries",
                date: "Nov 2023 – Present",
                location: "On-site, Al Jizah",
                desc: "System design, technical communication, ERP workflows (SAP, Odoo), and cross-functional project collaboration across automation, infrastructure, and industrial sectors."
              },
              {
                role: "Software Developer Intern",
                company: "Banque Misr",
                date: "Jul–Aug 2022",
                location: "Remote, New Cairo",
                desc: "Front-end web development using Angular, TypeScript, and REST APIs. Built and launched a comprehensive e-commerce web application."
              }
            ].map((job, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                  <div className="mb-4 md:mb-0 text-muted-foreground font-mono text-sm mt-1">
                    {job.date}
                  </div>
                  <div className="md:col-span-3 border-l border-primary/30 pl-6 relative">
                    <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2"></div>
                    <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                    <h4 className="text-primary font-medium mb-3">{job.company} <span className="text-muted-foreground font-normal text-sm ml-2">| {job.location}</span></h4>
                    <p className="text-muted-foreground leading-relaxed">{job.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 lg:px-12 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
              <span className="text-primary font-mono text-xl">02.</span> Selected Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Data Migration Tool",
                tech: "Java, MongoDB, PostgreSQL, Cron",
                desc: "Syncs data between MongoDB and PostgreSQL using JSON mappings, cron scheduling, batch processing, and robust error handling.",
                icon: <Code className="w-6 h-6" />
              },
              {
                title: "E-Commerce API (Artiqo)",
                tech: "Python, Django, MySQL, JWT",
                desc: "Secure RESTful APIs for user authentication, product management, cart operations, and order processing.",
                icon: <Code className="w-6 h-6" />
              },
              {
                title: "Payment Application",
                tech: "C Language, Design Patterns",
                desc: "Simulates card/ATM/server interactions with SALE, REFUND, Pre-Authorization, and VOID transaction types.",
                icon: <Cpu className="w-6 h-6" />
              },
              {
                title: "Traffic Light Control",
                tech: "C, Proteus, ATmega32",
                desc: "Real-time traffic light system with pedestrian crosswalk integration using embedded AVR microcontroller.",
                icon: <Cpu className="w-6 h-6" />
              },
              {
                title: "Electric Vehicle Prototype",
                tech: "Embedded Software, Control Systems",
                desc: "Led embedded software development for the DU Racing Team. 1st Place at EVER Egypt EV Competition (2021).",
                icon: <Award className="w-6 h-6" />
              },
              {
                title: "MMC-based HVDC Grid",
                tech: "Control System Design, MATLAB",
                desc: "Control system design for a multi-terminal MMC-based HVDC grid for large renewable energy integration.",
                icon: <BookOpen className="w-6 h-6" />
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="group p-8 bg-card border border-border hover:border-primary/50 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-primary">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="font-mono text-xs text-primary/70 mb-4">{project.tech}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Education */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-10">
              <span className="text-primary font-mono text-xl">03.</span> Technical Arsenal
            </h2>
            <div className="space-y-8">
              {[
                { category: "Languages", skills: "Java, JavaScript, Python, C#, MATLAB/C, PLC" },
                { category: "Frontend", skills: "React.js, Angular, Bootstrap, MUI" },
                { category: "Backend", skills: "ASP.NET Core, Django, REST APIs, ORM Tools" },
                { category: "Databases", skills: "MySQL, PostgreSQL, MongoDB" },
                { category: "DevOps & Tools", skills: "Git/GitHub, Linux (Ubuntu), Vim, Postman" },
                { category: "Practices", skills: "OOP, SOLID Principles, Software Design Patterns" }
              ].map((group, i) => (
                <div key={i}>
                  <h4 className="text-white font-medium mb-2">{group.category}</h4>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">{group.skills}</p>
                  <div className="h-[1px] w-full bg-border mt-4"></div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-10">
              <span className="text-primary font-mono text-xl">04.</span> Education & Research
            </h2>
            
            <div className="space-y-10">
              <div className="relative pl-6 border-l border-border">
                <div className="absolute w-3 h-3 bg-card border-2 border-primary rounded-full -left-[7px] top-1"></div>
                <h3 className="text-lg font-bold">Software Engineering Diploma</h3>
                <p className="text-primary font-mono text-sm mb-2">ALX Africa Academy | Oct 2024 – Apr 2025</p>
              </div>

              <div className="relative pl-6 border-l border-border">
                <div className="absolute w-3 h-3 bg-card border-2 border-primary rounded-full -left-[7px] top-1"></div>
                <h3 className="text-lg font-bold">Bachelor of Electrical & Electronics Engineering</h3>
                <p className="text-primary font-mono text-sm mb-2">Damietta University | 2018–2023</p>
                <p className="text-muted-foreground text-sm">Graduation Project: Control system design for a multi-terminal MMC-based HVDC grid for large renewable energy integration.</p>
              </div>

              <div className="mt-12 p-6 border border-primary/20 bg-primary/5 relative overflow-hidden">
                <BookOpen className="absolute right-[-20px] bottom-[-20px] w-32 h-32 text-primary/10" />
                <h4 className="text-primary font-mono text-sm font-semibold mb-2">PUBLISHED RESEARCH</h4>
                <h3 className="text-lg font-bold mb-3">Optimized Control of Modular Multilevel VSC-HVDC for Offshore Wind Farm Integration</h3>
                <p className="text-muted-foreground text-sm">MEPCON 2023 — Advanced control strategies for MMC-based HVDC systems integrating offshore wind farms.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 text-center border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-primary font-mono mb-4">05. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Currently open to new opportunities. Whether you have a question about my research, want to discuss a software project, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a 
              href="mailto:nadamousa969@gmail.com" 
              data-testid="link-email"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-semibold hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" /> Say Hello
            </a>

            <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground font-mono text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Cairo, Egypt</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +20 1014494370</div>
            </div>
            
            <div className="mt-12 flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/nada-yahya" target="_blank" rel="noreferrer" data-testid="link-linkedin" className="p-3 bg-secondary text-white hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" data-testid="link-github" className="p-3 bg-secondary text-white hover:text-primary transition-colors">
                <SiGithub className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-border/50 text-muted-foreground font-mono text-xs">
        <p>Built by Nada Yahya Mousa. Designed with precision.</p>
      </footer>
    </div>
  );
}
