import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Award,
  Brain,
  Briefcase,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Newspaper,
  Phone,
  Send,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ganesh Gowtham Adhikarla — Java & Front-End Developer" },
      {
        name: "description",
        content:
          "Personal site of Ganesh Gowtham Adhikarla — Computer Science Engineer, Java & Front-End Developer building clean, useful software.",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About", color: "var(--violet)" },
  { id: "skills", label: "Skills", color: "var(--sky)" },
  { id: "projects", label: "Projects", color: "var(--coral)" },
  { id: "experience", label: "Experience", color: "var(--mint)" },
  { id: "education", label: "Education", color: "var(--gold)" },
  { id: "certifications", label: "Certificates", color: "var(--rose)" },
  { id: "resume", label: "Resume", color: "var(--violet)" },
  { id: "contact", label: "Contact", color: "var(--sky)" },
];

const PHONE = "+91-7075481009";
const WHATSAPP = "917075481009";

const SKILLS = [
  { icon: Code2, title: "Programming", items: ["Java", "Python"], tint: "var(--violet)" },
  { icon: Layers, title: "Web", items: ["HTML", "CSS", "React.js", "Flask"], tint: "var(--coral)" },
  { icon: Database, title: "Database", items: ["MySQL"], tint: "var(--sky)" },
  {
    icon: Sparkles,
    title: "Strengths",
    items: ["Problem Solving", "Logical Reasoning", "Team Work", "Communication"],
    tint: "var(--gold)",
  },
];

const PROJECTS = [
  {
    title: "AI-Based Plagiarism Detection System",
    tag: "NLP · Featured",
    description:
      "An AI tool that finds copied or reworded text in documents. It uses Sentence-BERT for meaning-based matching and GPT-2 signals to flag suspicious writing, then gives a clean similarity report.",
    stack: ["Python", "Sentence-BERT", "GPT-2", "Flask", "NLP"],
    highlight: true,
    icon: Brain,
    grad: "linear-gradient(135deg, oklch(0.55 0.22 285), oklch(0.65 0.2 320), oklch(0.7 0.18 25))",
  },
  {
    title: "AI News Summarization Tool",
    tag: "AI · Daily Reads",
    description:
      "Pulls live news from many sources and turns long stories into short, easy-to-read summaries — so you get the point in seconds, not minutes.",
    stack: ["Python", "NLP", "Flask"],
    icon: Newspaper,
    grad: "linear-gradient(135deg, oklch(0.55 0.22 220), oklch(0.7 0.16 195), oklch(0.78 0.14 165))",
  },
];

const EXPERIENCE = [
  {
    role: "Gen AI Campus Intern",
    company: "Huebits Tech Pvt. Ltd.",
    period: "Jan 2026 – Mar 2026",
    points: [
      'Built the project "AI Based Plagiarism Detection System" during the Gen AI campus internship.',
      "Worked on model training, evaluation and the web layer end-to-end.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Nyeras",
    period: "May 2025 – Jul 2025",
    points: [
      "Designed, tested and fixed backend modules in Java.",
      "Wrote clear technical docs and helped improve system stability.",
    ],
  },
  {
    role: "Data Science Trainee",
    company: "SkillDzire",
    period: "Jan 2025 – Apr 2025",
    points: [
      "Cleaned data using Excel and SQL.",
      "Built simple prediction models and dashboards.",
    ],
  },
];

const EDUCATION = [
  {
    title: "B.Tech — Computer Science",
    place: "Sasi Institute of Technology and Engineering, Tadepalligudem",
    period: "2022 – 2026",
    score: "CGPA 8.7",
  },
  {
    title: "Intermediate — M.P.C",
    place: "Sasi Junior College, Nidadavole",
    period: "2020 – 2022",
    score: "95.8%",
  },
  {
    title: "S.S.C",
    place: "St. Ann's English Medium School, Nidadavole",
    period: "2019 – 2020",
    score: "97.8%",
  },
];

const ACHIEVEMENTS = [
  'Published the research paper "Intelligent Plagiarism Detection System Using Sentence-BERT and GPT-2" in IJCRT.',
  "Led the team during project development and the publication process.",
];

// Certificates — names corrected to match each image
const CERTS = [
  { name: "AI Based Plagiarism Detection — Internship", org: "Huebits Tech Pvt. Ltd.", img: "huebits_internship.png" },
  { name: "Software Development Internship", org: "Nyeras Edutech", img: "WhatsApp Image 2026-06-10 at 12.51.04 PM.jpeg" },
  { name: "Data Science Internship", org: "SkillDzire", img: "1750845072657.jpg" },
  { name: "Machine Learning Internship", org: "SkillDzire · APSCHE", img: "WhatsApp Image 2026-06-10 at 12.51.05 PM.jpeg" },
  { name: "AI-ML Virtual Internship", org: "Google for Developers · AICTE · EduSkills", img: "thumb_5030583_1712598992.png" },
  { name: "Android Developer Virtual Internship", org: "Google for Developers · AICTE · EduSkills", img: "WhatsApp Image 2026-06-10 at 12.51.08 PM.jpeg" },
  { name: "AI Skills Passport", org: "EY · Microsoft", img: "1754029453120.jpg" },
  { name: "DotNet Full Stack — TalentNext", org: "Wipro", img: "1766421365637.jpg" },
  { name: "Generative AI Workshop", org: "Intellipaat", img: "WhatsApp Image 2026-06-10 at 12.51.04 PM (2).jpeg" },
  { name: "Trees and Binary Trees", org: "CodeChef", img: "certi_098bf57.jpeg" },
  { name: "Graphs", org: "CodeChef", img: "certi_bb5d849.jpeg" },
  { name: "Learn JavaScript", org: "CodeChef", img: "certi_957793a.jpeg" },
  { name: "Introduction to Image Generation", org: "Google Cloud · Simplilearn", img: "WhatsApp Image 2026-06-10 at 12.51.04 PM (1).jpeg" },
  { name: "Introduction to Data Analytics", org: "Simplilearn SkillUp", img: "1712600610597.jpg" },
  { name: "Ethical Hacking 101", org: "Simplilearn SkillUp", img: "WhatsApp Image 2026-06-10 at 12.51.06 PM.jpeg" },
  { name: "Ethical Hacking — Mobile & Networks", org: "Great Learning Academy", img: "WhatsApp Image 2026-06-10 at 12.51.07 PM.jpeg" },
  { name: "SQL for Data Science", org: "Great Learning Academy", img: "WhatsApp Image 2026-06-10 at 12.51.06 PM (1).jpeg" },
  { name: "Python for Data Analysis", org: "Great Learning Academy", img: "WhatsApp Image 2026-06-10 at 12.51.06 PM (3).jpeg" },
  { name: "Front End Development — HTML", org: "Great Learning Academy", img: "WhatsApp Image 2026-06-10 at 12.51.06 PM (2).jpeg" },
  { name: "Cloud Computing Architecture", org: "Great Learning Academy", img: "WhatsApp Image 2026-06-10 at 12.51.07 PM (1).jpeg" },
  { name: "AWS Mobile App Development", org: "Great Learning Academy", img: "WhatsApp Image 2026-06-10 at 12.51.07 PM (2).jpeg" },
  { name: "Data Science Foundations", org: "Great Learning Academy", img: "WhatsApp Image 2026-06-10 at 12.51.07 PM (3).jpeg" },
  { name: "Technology Job Simulation", org: "Deloitte · Forage", img: "Screenshot 2026-06-10 123549.png" },
  { name: "Data Analytics Job Simulation", org: "Deloitte · Forage", img: "Screenshot 2026-06-10 123735.png" },
  { name: "Cyber Job Simulation", org: "Deloitte · Forage", img: "Screenshot 2026-06-10 123822.png" },
  { name: "Data Science Job Simulation", org: "BCG X · Forage", img: "Screenshot 2026-06-10 124011.png" },
  { name: "Data Analytics Job Simulation", org: "Quantium · Forage", img: "Screenshot 2026-06-10 124104.png" },
];

function certUrl(f: string) {
  return `/certs/${encodeURI(f)}`;
}

const ACCENTS = ["var(--violet)", "var(--coral)", "var(--sky)", "var(--mint)", "var(--gold)", "var(--rose)"];

function Portfolio() {
  const [lightbox, setLightbox] = useState<{ src: string; title?: string } | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      const y = window.scrollY + 160;
      for (const n of NAV) {
        const s = document.getElementById(n.id);
        if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(n.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      {/* Ambient gradient orbs — global, no grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="orb animate-drift" style={{ width: 520, height: 520, top: "-12%", left: "-10%", background: "radial-gradient(circle, color-mix(in oklch, var(--violet) 55%, transparent), transparent 70%)" }} />
        <div className="orb animate-float-slow" style={{ width: 460, height: 460, top: "28%", right: "-12%", background: "radial-gradient(circle, color-mix(in oklch, var(--gold) 50%, transparent), transparent 70%)" }} />
        <div className="orb animate-drift" style={{ width: 420, height: 420, bottom: "-14%", left: "30%", background: "radial-gradient(circle, color-mix(in oklch, var(--sky) 45%, transparent), transparent 70%)", animationDelay: "-8s" }} />
      </div>

      {/* NAV — transparent, colourful pill buttons */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto mt-4 max-w-6xl px-3 sm:px-4">
          <nav className="flex items-center justify-between gap-3 rounded-full pl-3 pr-2 py-2 backdrop-blur-2xl bg-white/30 border border-white/40 shadow-[0_10px_40px_-20px_oklch(0.18_0.04_270/0.25)]">
            <a href="#top" className="flex items-center gap-2.5 font-medium pl-1">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-white text-[12px] font-mono shadow-[0_8px_20px_-6px_color-mix(in_oklch,var(--violet)_60%,transparent)]"
                style={{ background: "var(--grad-name)", backgroundSize: "180%" }}>
                GA
              </span>
              <span className="hidden sm:inline text-serif text-base leading-none">Ganesh</span>
            </a>
            <ul className="hidden md:flex items-center gap-1.5 text-sm">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="nav-btn"
                    style={
                      active === n.id
                        ? { background: n.color, color: "white", borderColor: "transparent", boxShadow: `0 8px 22px -8px color-mix(in oklch, ${n.color} 60%, transparent)` }
                        : ({ "--hov": n.color } as React.CSSProperties)
                    }
                    onMouseEnter={(e) => {
                      if (active !== n.id) e.currentTarget.style.background = n.color;
                    }}
                    onMouseLeave={(e) => {
                      if (active !== n.id) e.currentTarget.style.background = "";
                    }}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm text-white font-medium hover:opacity-95 transition"
              style={{ background: "var(--grad-name)", backgroundSize: "180%" }}
            >
              Say hi <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
            {/* LEFT */}
            <div className="md:col-span-8 animate-fade-up">
              <div className="chip">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Open to work · Class of 2026
              </div>

              <h1 className="mt-6 text-[3.6rem] leading-[0.92] sm:text-7xl md:text-[8rem] md:leading-[0.86] text-name">
                Ganesh
                <br />
                Gowtham
              </h1>
              <div className="mt-4 text-serif italic text-2xl md:text-3xl text-muted-foreground">
                a Java &amp; front-end builder.
              </div>

              <p className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                I build clean, useful software — Java on the back, React on the front, and a bit of
                AI in between. Recently shipped a plagiarism checker that uses Sentence-BERT and GPT-2.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm text-white transition shadow-[0_12px_30px_-10px_color-mix(in_oklch,var(--violet)_55%,transparent)]"
                  style={{ background: "var(--grad-name)", backgroundSize: "180%" }}
                >
                  See my work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm hover-lift"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" /> WhatsApp
                </a>
                <a
                  href="/Ganesh_Gowtham_Adhikarla_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm hover-lift"
                >
                  <Download className="h-4 w-4" /> Résumé
                </a>
              </div>

              <div className="mt-8 flex items-center gap-5 text-muted-foreground">
                <Social href="https://github.com/AdhikarlaGaneshGowtham" label="GitHub"><Github className="h-4 w-4" /></Social>
                <Social href="https://linkedin.com/in/ganesh-gowtham-adhikarla-b804a227a" label="LinkedIn"><Linkedin className="h-4 w-4" /></Social>
                <Social href="mailto:gowthamganesh862@gmail.com" label="Email"><Mail className="h-4 w-4" /></Social>
                <span className="h-4 w-px bg-border" />
                <span className="font-mono text-[11px] flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Andhra Pradesh, India</span>
              </div>
            </div>

            {/* RIGHT — portrait, only the CGPA chip kept */}
            <div className="md:col-span-4">
              <div className="relative mx-auto max-w-sm">
                <div
                  aria-hidden
                  className="absolute -inset-8 -z-10 rounded-[3rem] animate-spin-slow opacity-50"
                  style={{ background: "conic-gradient(from 0deg, color-mix(in oklch, var(--violet) 55%, transparent), color-mix(in oklch, var(--coral) 55%, transparent), color-mix(in oklch, var(--gold) 55%, transparent), color-mix(in oklch, var(--sky) 55%, transparent), color-mix(in oklch, var(--violet) 55%, transparent))", filter: "blur(40px)" }}
                />
                <div className="relative card-soft rounded-[2rem] p-2.5 animate-float">
                  <div className="relative overflow-hidden rounded-[1.6rem]">
                    <img
                      src={profileImg}
                      alt="Portrait of Ganesh Gowtham Adhikarla"
                      width={900}
                      height={1200}
                      className="aspect-[3/4] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 chip">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Open to work
                    </span>
                    <div className="absolute left-3 right-3 bottom-3 text-white">
                      <div className="text-serif text-xl leading-tight drop-shadow">Ganesh Gowtham</div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-90 mt-1">Software Engineer · 2026</div>
                    </div>
                  </div>
                </div>
                <div className="glass absolute -left-5 -bottom-6 rotate-[-7deg] rounded-2xl px-4 py-3 hidden sm:block">
                  <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-muted-foreground">CGPA</div>
                  <div className="text-serif text-3xl leading-none mt-1">8.7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle label="About" accent="var(--violet)" />

          <div className="mt-8 grid md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-7">
              <h2 className="text-serif text-4xl md:text-5xl leading-[1.05]">
                A short story of how
                <span className="italic" style={{ color: "var(--violet)" }}> I got here.</span>
              </h2>

              <div className="mt-8 card-ink rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full" style={{ background: "var(--grad-warm)", filter: "blur(60px)", opacity: 0.5 }} />
                <div className="relative">
                  <Sparkles className="h-5 w-5" style={{ color: "var(--gold)" }} />
                  <h3 className="mt-4 text-serif text-2xl text-white">What I'm looking for</h3>
                  <p className="mt-4 text-white/80 leading-relaxed text-[15px]">
                    A Computer Science student looking for an entry-level Java or Front-End Developer
                    role. I love writing clean code, solving real problems, and building friendly
                    web apps people actually enjoy using.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Curious", "Careful with details", "Team player", "Ships work"].map((t) => (
                      <span key={t} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.12em] text-white/80">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <ol className="md:col-span-5 relative space-y-6 pt-2">
              <div className="absolute left-[7px] top-3 bottom-3 w-px" style={{ background: "linear-gradient(to bottom, var(--violet), var(--coral), transparent)" }} />
              {[
                { y: "2019–20", t: "S.S.C — 97.8%", d: "St. Ann's English Medium School." },
                { y: "2020–22", t: "Intermediate (M.P.C) — 95.8%", d: "Sasi Junior College, Nidadavole." },
                { y: "2022–26", t: "B.Tech CSE — CGPA 8.7", d: "Sasi Institute of Technology and Engineering." },
                { y: "Jan – Apr 2025", t: "Data Science Trainee · SkillDzire", d: "Cleaned data, built simple models." },
                { y: "May – Jul 2025", t: "Software Dev Intern · Nyeras", d: "Built and tested Java backend modules." },
                { y: "Jan – Mar 2026", t: "Gen AI Intern · Huebits", d: "Built the plagiarism checker project." },
                { y: "2026", t: "Published in IJCRT", d: "Plagiarism detection research paper." },
              ].map((e, i) => (
                <li key={i} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-[var(--cream)]" style={{ background: ACCENTS[i % ACCENTS.length] }} />
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{e.y}</div>
                  <div className="text-serif text-lg mt-0.5">{e.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{e.d}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle label="Skills" accent="var(--sky)" />
          <h2 className="mt-6 text-serif text-4xl md:text-5xl leading-[1.05] max-w-3xl">
            The tools <span className="italic" style={{ color: "var(--sky)" }}>I reach for.</span>
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILLS.map((s) => (
              <div
                key={s.title}
                className="group relative card-soft rounded-3xl p-6 hover-lift overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: `radial-gradient(circle, ${s.tint}, transparent 70%)`, filter: "blur(30px)" }}
                />
                <div className="relative">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
                    style={{ background: s.tint }}
                  >
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-serif text-2xl">{s.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border bg-white/70 px-3 py-1 text-xs font-mono transition-colors"
                        style={{ borderColor: `color-mix(in oklch, ${s.tint} 30%, transparent)` }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle label="Projects" accent="var(--coral)" />
          <h2 className="mt-6 text-serif text-4xl md:text-5xl leading-[1.05] max-w-3xl">
            Things <span className="italic" style={{ color: "var(--coral)" }}>I've built.</span>
          </h2>

          <div className="mt-10 space-y-8">
            {PROJECTS.map((p, idx) => (
              <article
                key={p.title}
                className={`relative grid md:grid-cols-12 gap-6 md:gap-10 items-stretch ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Visual block — creative themed scene */}
                <div className="md:col-span-7 relative">
                  <div className="rounded-[2rem] overflow-hidden aspect-[16/10] relative shadow-[0_30px_70px_-30px_oklch(0.15_0.05_280/0.5)]">
                    <div className="absolute inset-0" style={{ background: p.grad }} />
                    {/* decorative blobs */}
                    <div className="orb animate-drift" style={{ width: 280, height: 280, top: "-15%", right: "-10%", background: "radial-gradient(circle, oklch(1 0 0 / 0.45), transparent 70%)" }} />
                    <div className="orb animate-float-slow" style={{ width: 220, height: 220, bottom: "-15%", left: "5%", background: "radial-gradient(circle, oklch(1 0 0 / 0.25), transparent 70%)" }} />

                    {/* themed scene */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="relative">
                        <div
                          className="absolute -inset-12 rounded-full opacity-60 animate-spin-slow"
                          style={{ background: "conic-gradient(from 0deg, transparent, oklch(1 0 0 / 0.4), transparent 60%)", filter: "blur(20px)" }}
                        />
                        <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-3xl bg-white/15 backdrop-blur-md border border-white/30 grid place-items-center animate-float">
                          <p.icon className="h-14 w-14 md:h-16 md:w-16 text-white" strokeWidth={1.4} />
                        </div>
                      </div>
                    </div>

                    {/* fake code/notes chips */}
                    <div className="absolute left-6 top-6 flex gap-2">
                      <span className="chip !bg-white/20 !text-white !border-white/30 backdrop-blur">{p.tag}</span>
                    </div>
                    <div className="absolute right-6 top-6 flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    </div>

                    <div className="absolute left-6 right-6 bottom-6 text-white">
                      <div className="text-serif text-2xl md:text-4xl leading-[1.02] drop-shadow-lg">
                        {p.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content block */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Overview</div>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/85">{p.description}</p>

                  <div className="mt-6">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3">Built with</div>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-mono">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href="https://github.com/AdhikarlaGaneshGowtham" target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover-lift">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                    {p.highlight && (
                      <a href="https://ijcrt.org" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm text-[var(--cream)] hover:opacity-90">
                        Read paper <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-24 py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle label="Experience" accent="var(--mint)" />
          <h2 className="mt-6 text-serif text-4xl md:text-5xl leading-[1.05] max-w-3xl">
            Where I've <span className="italic" style={{ color: "var(--mint)" }}>worked.</span>
          </h2>

          <div className="mt-10 space-y-5">
            {EXPERIENCE.map((e, i) => (
              <div key={e.role} className="card-soft rounded-3xl p-7 md:p-9 grid md:grid-cols-[10rem_1fr] gap-5 md:gap-8 items-start hover-lift">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">{e.period}</div>
                  <div className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: ACCENTS[i % ACCENTS.length] }}>
                    <Briefcase className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-serif text-2xl md:text-3xl">{e.role}</h3>
                  <div className="mt-1 text-sm font-medium" style={{ color: ACCENTS[i % ACCENTS.length] }}>{e.company}</div>
                  <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2 h-1 w-3 shrink-0 rounded-full" style={{ background: ACCENTS[i % ACCENTS.length] }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="scroll-mt-24 py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle label="Education" accent="var(--gold)" />
          <h2 className="mt-6 text-serif text-4xl md:text-5xl leading-[1.05] max-w-3xl">
            School & <span className="italic" style={{ color: "var(--gold)" }}>college.</span>
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {EDUCATION.map((ed, i) => (
              <div key={ed.title} className="card-soft rounded-3xl p-7 hover-lift relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-40" style={{ background: ACCENTS[i % ACCENTS.length], filter: "blur(40px)" }} />
                <div className="relative">
                  <GraduationCap className="h-5 w-5" style={{ color: ACCENTS[i % ACCENTS.length] }} />
                  <h3 className="mt-4 text-serif text-xl leading-tight">{ed.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{ed.place}</p>
                  <div className="mt-5 flex items-center justify-between text-xs font-mono">
                    <span className="text-muted-foreground uppercase tracking-[0.15em]">{ed.period}</span>
                    <span className="rounded-full text-white px-3 py-1 text-[11px]" style={{ background: ACCENTS[i % ACCENTS.length] }}>{ed.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={a} className="card-soft rounded-3xl p-7 hover-lift flex gap-5">
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ background: i === 0 ? "var(--gold)" : "var(--violet)" }}>
                  {i === 0 ? <Trophy className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">{i === 0 ? "Achievement" : "Leadership"}</div>
                  <p className="mt-2 leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certifications" className="scroll-mt-24 py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle label="Certificates" accent="var(--rose)" />
          <div className="mt-6 grid md:grid-cols-[1fr_auto] items-end gap-6">
            <h2 className="text-serif text-4xl md:text-5xl leading-[1.05] max-w-3xl">
              What I've <span className="italic" style={{ color: "var(--rose)" }}>learned.</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Tap any card to view the full certificate.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTS.map((c, i) => {
              const tint = ACCENTS[i % ACCENTS.length];
              return (
                <button
                  key={c.img}
                  onClick={() => setLightbox({ src: certUrl(c.img), title: `${c.name} — ${c.org}` })}
                  className="group relative text-left card-soft rounded-3xl p-5 hover-lift overflow-hidden"
                >
                  <div
                    aria-hidden
                    className="absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-30 transition-opacity duration-500 group-hover:opacity-60"
                    style={{ background: tint, filter: "blur(40px)" }}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">№ {String(i + 1).padStart(2, "0")}</div>
                      <div className="mt-2 text-serif text-lg leading-tight">{c.name}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{c.org}</div>
                    </div>
                    <span
                      className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-all"
                      style={{ background: tint }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="scroll-mt-24 py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle label="Resume" accent="var(--violet)" />
          <h2 className="mt-6 text-serif text-4xl md:text-5xl leading-[1.05] max-w-3xl">
            The <span className="italic" style={{ color: "var(--violet)" }}>quick view.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-4 card-ink rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full" style={{ background: "var(--grad-cool)", filter: "blur(60px)", opacity: 0.55 }} />
              <div className="relative">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/60">In a nutshell</div>
                <p className="mt-5 text-serif text-2xl md:text-3xl leading-[1.2] text-white">
                  CSE student with a CGPA of 8.7 and real internship work — Java backend at Nyeras,
                  data science at SkillDzire, and a Gen AI internship at Huebits where I built a
                  plagiarism checker that later got published.
                </p>
              </div>
            </div>

            <ResumeTile className="md:col-span-2" icon={Sparkles} label="Goal" accent="var(--gold)">
              <p>An entry-level Java or Front-End Developer role where I can write clean code and ship friendly web apps.</p>
            </ResumeTile>

            <ResumeTile className="md:col-span-2" icon={Code2} label="Programming" accent="var(--violet)">
              <Pills items={["Java", "Python"]} />
            </ResumeTile>

            <ResumeTile className="md:col-span-2" icon={Layers} label="Tools" accent="var(--coral)">
              <Pills items={["HTML", "CSS", "React.js", "Flask", "MySQL", "Excel", "SQL"]} />
            </ResumeTile>

            <ResumeTile className="md:col-span-2" icon={Sparkles} label="Strengths" accent="var(--mint)">
              <Pills items={["Logical Reasoning", "Problem Solving", "Communication", "Team Work"]} />
            </ResumeTile>

            <ResumeTile className="md:col-span-3" icon={Briefcase} label="Experience" accent="var(--sky)">
              <ul className="space-y-2.5 text-sm">
                {EXPERIENCE.map((e) => (
                  <li key={e.role} className="flex items-baseline gap-2 flex-wrap">
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--sky)" }} />
                    <span className="font-medium">{e.role}</span>
                    <span className="text-muted-foreground">· {e.company}</span>
                    <span className="text-muted-foreground text-xs ml-auto">{e.period}</span>
                  </li>
                ))}
              </ul>
            </ResumeTile>

            <ResumeTile className="md:col-span-3" icon={GraduationCap} label="Education" accent="var(--gold)">
              <ul className="space-y-2 text-sm">
                {EDUCATION.map((e) => (
                  <li key={e.title} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
                    <span className="truncate">{e.title}</span>
                    <span className="text-muted-foreground shrink-0 font-mono text-xs">{e.score}</span>
                  </li>
                ))}
              </ul>
            </ResumeTile>

            <ResumeTile className="md:col-span-3" icon={Award} label="Certificates" accent="var(--rose)">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {CERTS.length}+ certificates including a Huebits Gen AI internship, Google AI-ML virtual internship, EY & Microsoft AI Skills Passport, Wipro TalentNext DotNet, and CodeChef courses.
              </p>
            </ResumeTile>

            <ResumeTile className="md:col-span-3" icon={Trophy} label="Highlights" accent="var(--violet)">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {ACHIEVEMENTS.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </ResumeTile>

            <ResumeTile className="md:col-span-6" icon={Mail} label="Contact" accent="var(--coral)">
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" />gowthamganesh862@gmail.com</span>
                <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground" />{PHONE}</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground" />Andhra Pradesh, India</span>
              </div>
            </ResumeTile>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle label="Contact" accent="var(--sky)" />
          <h2 className="mt-6 text-serif text-5xl md:text-7xl leading-[1.0] max-w-5xl">
            Let's build <span className="italic" style={{ color: "var(--sky)" }}>something together.</span>
          </h2>

          <div className="mt-10 grid md:grid-cols-[1fr_1.1fr] gap-6">
            <div className="card-ink rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full" style={{ background: "var(--grad-warm)", filter: "blur(60px)", opacity: 0.55 }} />
              <div className="relative">
                <h3 className="text-serif text-3xl text-white">Reach me directly</h3>
                <p className="mt-3 text-white/70 leading-relaxed">
                  Open to full-time Java / Front-End / Software Engineering roles, internships and fun collaborations.
                </p>
                <ul className="mt-7 space-y-2.5 text-sm">
                  <DarkContactRow icon={Mail} href="mailto:gowthamganesh862@gmail.com" label="gowthamganesh862@gmail.com" />
                  <DarkContactRow icon={MessageCircle} href={`https://wa.me/${WHATSAPP}`} label={`WhatsApp · ${PHONE}`} accent />
                  <DarkContactRow icon={Phone} href={`tel:${PHONE}`} label={PHONE} />
                  <DarkContactRow icon={Linkedin} href="https://linkedin.com/in/ganesh-gowtham-adhikarla-b804a227a" label="linkedin.com/in/ganesh-gowtham-adhikarla" />
                  <DarkContactRow icon={Github} href="https://github.com/AdhikarlaGaneshGowtham" label="github.com/AdhikarlaGaneshGowtham" />
                </ul>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Hello from ${fd.get("name")}`);
                const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
                window.location.href = `mailto:gowthamganesh862@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="card-soft rounded-3xl p-8 md:p-10 space-y-4"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Send a message</div>
              <div className="grid sm:grid-cols-2 gap-3">
                <Field name="name" label="Your name" />
                <Field name="email" label="Email" type="email" />
              </div>
              <Field name="message" label="Message" textarea />
              <div className="flex flex-wrap gap-2 pt-2">
                <button type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm text-white transition shadow-[0_10px_28px_-10px_color-mix(in_oklch,var(--violet)_60%,transparent)]"
                  style={{ background: "var(--grad-name)", backgroundSize: "180%" }}>
                  Send <Send className="h-4 w-4" />
                </button>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm text-white hover:opacity-95 transition">
                  WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-10">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <div className="text-serif text-3xl md:text-4xl leading-[1] text-name">Thanks for visiting.</div>
              <div className="mt-3 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">© {new Date().getFullYear()} — Built with care.</div>
            </div>
            <div className="flex items-center gap-3">
              <Social href="https://github.com/AdhikarlaGaneshGowtham" label="GitHub"><Github className="h-4 w-4" /></Social>
              <Social href="https://linkedin.com/in/ganesh-gowtham-adhikarla-b804a227a" label="LinkedIn"><Linkedin className="h-4 w-4" /></Social>
              <Social href={`https://wa.me/${WHATSAPP}`} label="WhatsApp"><MessageCircle className="h-4 w-4" /></Social>
              <Social href="mailto:gowthamganesh862@gmail.com" label="Email"><Mail className="h-4 w-4" /></Social>
            </div>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[0_12px_30px_-10px_color-mix(in_oklch,var(--violet)_60%,transparent)] hover:opacity-95"
          style={{ background: "var(--grad-name)", backgroundSize: "180%" }}
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      <Lightbox
        src={lightbox?.src ?? null}
        title={lightbox?.title}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}

function SectionTitle({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
      <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      <span className="h-px flex-1" style={{ background: `linear-gradient(to right, ${accent}, transparent)` }} />
    </div>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover-lift">
      {children}
    </a>
  );
}

function ResumeTile({
  icon: Icon, label, children, className = "", accent,
}: { icon: typeof Mail; label: string; children: React.ReactNode; className?: string; accent: string }) {
  return (
    <div className={`card-soft rounded-3xl p-7 hover-lift ${className}`}>
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
        <Icon className="h-4 w-4" style={{ color: accent }} />
      </div>
      <div className="mt-4 text-foreground/85 text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

function Pills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span key={i} className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-mono">{i}</span>
      ))}
    </div>
  );
}

function Field({ name, label, type = "text", textarea }: {
  name: string; label: string; type?: string; textarea?: boolean;
}) {
  const cls = "w-full rounded-2xl border border-border bg-white/80 px-4 py-3.5 text-sm outline-none transition focus:border-[var(--violet)] focus:ring-2 focus:ring-[var(--violet)]/20";
  return (
    <label className="block text-sm">
      <span className="block text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-2">{label}</span>
      {textarea ? <textarea name={name} required rows={5} className={cls} /> : <input name={name} type={type} required className={cls} />}
    </label>
  );
}

function DarkContactRow({ icon: Icon, href, label, accent }: {
  icon: typeof Mail; href: string; label: string; accent?: boolean;
}) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer"
        className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 hover:bg-white/10 transition">
        <span className={`h-9 w-9 grid place-items-center rounded-xl ${accent ? "bg-emerald-500" : "bg-white/10"} text-white`}>
          <Icon className="h-4 w-4" />
        </span>
        <span className="truncate text-white/90">{label}</span>
        <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-white shrink-0 transition" />
      </a>
    </li>
  );
}
