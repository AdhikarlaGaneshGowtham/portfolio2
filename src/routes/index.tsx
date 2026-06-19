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
  { id: "resume", label: "Resume", color: "var(--violet)" },
  { id: "certifications", label: "Certificates", color: "var(--rose)" },
  { id: "contact", label: "Contact", color: "var(--sky)" },
];

const PHONE = "+91-7075481009";
const WHATSAPP = "917075481009";

const SKILLS = [
  {
    icon: Code2,
    title: "Java Development",
    items: [
      "Java",
      "OOP",
      "Collections",
      "Exception Handling",
      "JDBC",
      "Problem Solving",
    ],
    tint: "var(--violet)",
  },

  {
    icon: Brain,
    title: "AI & NLP",
    items: [
      "NLP",
      "Sentence-BERT",
      "GPT-2",
      "Transformers",
      "Machine Learning",
      "Semantic Analysis",
    ],
    tint: "var(--coral)",
  },

  {
    icon: Layers,
    title: "Full Stack Development",
    items: [
      "React.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Flask",
      "JavaScript",
    ],
    tint: "var(--sky)",
  },

  {
    icon: Database,
    title: "Databases",
    items: [
      "MySQL",
      "SQL",
      "Database Design",
      "Query Writing",
      "Data Modeling",
    ],
    tint: "var(--mint)",
  },

  {
    icon: Briefcase,
    title: "Analytics & Visualization",
    items: [
      "Power BI",
      "Excel",
      "Tableau",
      "Qlik Sense",
      "Data Analysis",
    ],
    tint: "var(--gold)",
  },

  {
    icon: Sparkles,
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Render",
      "Vercel",
      "Google Colab",
    ],
    tint: "var(--violet)",
  },

  {
    icon: Briefcase,
    title: "Professional Skills",
    items: [
      "Communication",
      "Team Leadership",
      "Teamwork",
      "Logical Reasoning",
      "Adaptability",
    ],
    tint: "var(--coral)",
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
    images: [
      "/projects/home.png",
      "/projects/checker.png",
      "/projects/result.png",
],
    icon: Brain,
    grad: "linear-gradient(135deg, oklch(0.55 0.22 285), oklch(0.65 0.2 320), oklch(0.7 0.18 25))",
  },
  {
    title: "AI News Summarization Tool",
    tag: "AI · Daily Reads",
    description:
      "Pulls live news from many sources and turns long stories into short, easy-to-read summaries — so you get the point in seconds, not minutes.",
    stack: ["Python", "NLP", "Flask"],
    images: [
      "/projects/news-home.png",
      "/projects/news-summarizer.png",
      "/projects/news-result.png",
],
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
  {
    name: "Gen AI Campus Internship",
    org: "Huebits",
    img: "huebits_internship.png",
  },
  {
    name: "Data Analytics Job Simulation",
    org: "Deloitte",
    img: "data-analytics-deloitte.png",
  },
  {
    name: "AI-ML Virtual Internship",
    org: "Google for Developers",
    img: "aiml.jpg",
  },
  {
    name: ".NET Full Stack",
    org: "Wipro TalentNext",
    img: "dotnet-fullstack-wipro.jpg",
  },
  {
    name: "Data Science Internship",
    org: "Nyeras",
    img: "ds-nyeras.jpg",
  },
  {
    name: "Data Science Internship",
    org: "SkillDzire",
    img: "ds-skilldzire.jpg",
  },
  {
    name: "Machine Learning Internship",
    org: "SkillDzire",
    img: "ml-skilldzire.jpeg",
  },
  {
    name: "Generative AI Workshop",
    org: "Intellipaat",
    img: "Gen-ai-intellipat.jpeg",
  },
  {
    name: "SQL for Data Science",
    org: "Great Learning",
    img: "sql-for-datascience-greatlearning.jpeg",
  },
  {
    name: "Introduction to Data Analytics",
    org: "Simplilearn SkillUp",
    img: "data-analytics-simplilearn.png",
  },
  {
    name: "JavaScript Programming",
    org: "CodeChef",
    img: "js-codechef.jpeg",
  },
  {
    name: "Front End Development - HTML",
    org: "Great Learning",
    img: "frontend-development-greatlearning.jpeg",
  },
];
function certUrl(f: string) {
  return `/certs/${encodeURI(f)}`;
}

const ACCENTS = ["var(--violet)", "var(--coral)", "var(--sky)", "var(--mint)", "var(--gold)", "var(--rose)"];

function Portfolio() {
  const [lightbox, setLightbox] = useState<{ src: string; title?: string } | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState("about");
  const [activeImages, setActiveImages] = useState<Record<string, number>>({});

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
<nav className="relative flex items-center justify-between gap-3 rounded-full pl-3 pr-2 py-2 backdrop-blur-2xl bg-white/30 border border-white/40 shadow-[0_10px_40px_-20px_oklch(0.18_0.04_270/0.25)]">          
          <div
  className="absolute inset-0 -z-10 rounded-full opacity-50"
  style={{
    background:
      "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.15), rgba(249,115,22,0.15))",
    filter: "blur(25px)",
  }}
/>
            <a href="#top" className="flex items-center gap-2.5 font-medium pl-1">
       <span
  className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white text-sm font-bold shadow-xl hover:rotate-6 transition-all duration-500"
  style={{
    background:
      "linear-gradient(135deg,#8b5cf6,#ec4899,#f97316)",
  }}
>
  GG
</span>
              <span className="hidden sm:inline text-serif text-base leading-none">Ganesh Gowtham</span>
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
              Hire me <ArrowUpRight className="h-3.5 w-3.5" />
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
  Java Developer • Front-End Engineer • AI Enthusiast
</div>

              <p className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
  Computer Science Engineer with experience in Java development,
  web technologies, and AI-powered applications. Built and
  published an AI-Based Plagiarism Detection System using
  Sentence-BERT and GPT-2.
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
  href="/pdfs/resume.pdf"
  target="_blank"
  rel="noreferrer"
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

    <div className="mt-8 grid md:grid-cols-12 gap-8 md:gap-12 items-start">

      {/* LEFT SIDE */}
      <div className="md:col-span-7">
        <h2 className="text-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">
          Building solutions through
          <span
            className="italic"
            style={{ color: "var(--violet)" }}
          >
            {" "}code, AI & curiosity.
          </span>
        </h2>

        {/* Main Card */}
        <div className="mt-8 card-ink rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full"
            style={{
              background: "var(--grad-warm)",
              filter: "blur(70px)",
              opacity: 0.45,
            }}
          />

          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full"
            style={{
              background: "var(--grad-cool)",
              filter: "blur(80px)",
              opacity: 0.3,
            }}
          />

          <div className="relative">
            <Sparkles
              className="h-6 w-6"
              style={{ color: "var(--gold)" }}
            />

            <h3 className="mt-4 text-serif text-3xl text-white">
              What drives me
            </h3>

            <p className="mt-5 text-white/85 leading-relaxed text-[15px]">
              Computer Science graduate with a strong foundation in
              Java Development, Full Stack Engineering, Artificial
              Intelligence and Natural Language Processing.
              I enjoy transforming complex problems into clean,
              scalable software solutions and building products
              that create real value for users.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed text-[15px]">
              Through internships, AI research, and hands-on
              development projects, I've built experience in
              software engineering, data analysis, machine learning,
              and modern web technologies.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Java Developer",
                "AI Enthusiast",
                "Problem Solver",
                "Team Player",
                "Quick Learner",
                "Builder",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.12em] text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "8.7", label: "CGPA" },
            { value: "3+", label: "Internships" },
            { value: "2", label: "AI Projects" },
            { value: "1", label: "Research Paper" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl p-5 text-center hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--violet)" }}
              >
                {item.value}
              </div>

              <div className="mt-1 text-sm text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE TIMELINE */}
      <div className="md:col-span-5">
        <div className="rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl p-6 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">
            Journey So Far
          </h3>

          <ol className="relative space-y-7">
            <div
              className="absolute left-[7px] top-3 bottom-3 w-px"
              style={{
                background:
                  "linear-gradient(to bottom,var(--violet),var(--coral),var(--sky),transparent)",
              }}
            />

            {[
              {
                y: "2019–20",
                t: "S.S.C — 97.8%",
                d: "St. Ann's English Medium School",
              },
              {
                y: "2020–22",
                t: "Intermediate (MPC) — 95.8%",
                d: "Sasi Junior College, Nidadavole",
              },
              {
                y: "2022–26",
                t: "B.Tech CSE — CGPA 8.7",
                d: "Sasi Institute of Technology and Engineering",
              },
              {
                y: "Jan–Apr 2025",
                t: "Data Science Trainee",
                d: "SkillDzire — Analytics & ML Fundamentals",
              },
              {
                y: "May–Jul 2025",
                t: "Software Development Intern",
                d: "Nyeras — Java Backend Development",
              },
              {
                y: "Jan–Mar 2026",
                t: "Gen AI Campus Intern",
                d: "Huebits — AI Plagiarism Detection System",
              },
              {
                y: "2026",
                t: "Research Publication",
                d: "AI-Based Plagiarism Detection Research",
              },
            ].map((e, i) => (
              <li key={i} className="relative pl-8">
                <span
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-[var(--cream)]"
                  style={{
                    background: ACCENTS[i % ACCENTS.length],
                  }}
                />

                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {e.y}
                </div>

                <div className="text-lg font-semibold mt-1">
                  {e.t}
                </div>

                <div className="text-sm text-muted-foreground mt-1">
                  {e.d}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle label="Skills" accent="var(--sky)" />
          <h2 className="mt-6 text-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">
  Skills that turn
  <span className="italic" style={{ color: "var(--sky)" }}>
    {" "}ideas into products.
  </span>
</h2>

<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">            {SKILLS.map((s) => (
              <div
                key={s.title}
className="group relative rounded-3xl p-6 overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl hover:scale-105 transition-all duration-500 shadow-xl">
                
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: `radial-gradient(circle, ${s.tint}, transparent 70%)`, filter: "blur(30px)" }}
                />
                <div className="relative">
                  <div
  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
  style={{ background: s.tint }}
>
                    <>
  <s.icon className="h-5 w-5" />
  <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-white animate-pulse" />
</>
                  </div>
                  <h3 className="mt-5 text-serif text-2xl">{s.title}</h3>
                  <p className="text-xs mt-1 text-muted-foreground">
  {s.items.length} Technologies
</p>
                  <div
  className="mt-3 h-1.5 rounded-full overflow-hidden"
  style={{ background: "rgba(255,255,255,0.2)" }}
>
  <div
    className="h-full rounded-full"
    style={{
      width: "90%",
      background: s.tint,
    }}
  />
</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full px-3 py-1 text-xs font-medium text-white shadow-md hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300"
style={{
  background: s.tint,
}}
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
      Things{" "}
      <span className="italic" style={{ color: "var(--coral)" }}>
        I've built.
      </span>
    </h2>

    <div className="mt-10 space-y-20">
      {PROJECTS.map((p, idx) => (
        <article
          key={p.title}
          className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
            idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* IMAGE SIDE */}
          <div className="md:col-span-7">
            <div className="rounded-[2rem] overflow-hidden aspect-[16/10] relative shadow-[0_30px_70px_-30px_oklch(0.15_0.05_280/0.5)]">
              <img
                src={p.images[activeImages[p.title] ?? 0]}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute left-6 top-6 flex gap-2">
                <span className="chip !bg-white/20 !text-white !border-white/30 backdrop-blur">
                  {p.tag}
                </span>
              </div>

              <div className="absolute right-6 top-6 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              {p.title}
            </h3>

            <p className="text-sm font-medium text-slate-500 mb-4">
              Click to view →
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Home Page", "Project Page", "Result Page"].map((label, i) => (
                <button
                  key={label}
                  onClick={() =>
                    setActiveImages((prev) => ({
                      ...prev,
                      [p.title]: i,
                    }))
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    (activeImages[p.title] ?? 0) === i
                      ? "text-white shadow-lg scale-105"
                      : "bg-white/80 border border-slate-200 hover:scale-105"
                  }`}
                  style={
                    (activeImages[p.title] ?? 0) === i
                      ? {
                          background:
                            "linear-gradient(135deg,#8b5cf6,#ec4899,#f97316)",
                        }
                      : {}
                  }
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
              Overview
            </div>

            <p className="mt-3 text-lg leading-relaxed text-foreground/85">
              {p.description}
            </p>

            <div className="mt-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Built with
              </div>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/AdhikarlaGaneshGowtham"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover-lift"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              {p.highlight && (
  <a
    href="/pdfs/paper.pdf"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm text-[var(--cream)] hover:opacity-90"
  >
    Read Paper
    <ExternalLink className="h-3.5 w-3.5" />
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

    <h2 className="mt-6 text-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">
      Building skills through
      <span
        className="italic"
        style={{ color: "var(--mint)" }}
      >
        {" "}real-world experience.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
      From software development and data science to generative AI,
      every internship helped me strengthen my technical skills,
      problem-solving mindset, and ability to deliver practical solutions.
    </p>

    <div className="mt-12 relative">
      {/* Timeline Line */}
      <div
        className="absolute left-6 top-0 bottom-0 w-[2px] hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom,var(--mint),var(--sky),var(--violet),transparent)",
        }}
      />

      <div className="space-y-8">
        {EXPERIENCE.map((e, i) => (
          <div
            key={e.role}
            className="group relative md:pl-20"
          >
            {/* Timeline Dot */}
            <div
              className="hidden md:flex absolute left-0 top-10 h-12 w-12 items-center justify-center rounded-2xl text-white shadow-xl group-hover:scale-110 transition-all duration-300"
              style={{
                background: ACCENTS[i % ACCENTS.length],
              }}
            >
              <Briefcase className="h-5 w-5" />
            </div>

            {/* Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-1 transition-all duration-500">

              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${
                    ACCENTS[i % ACCENTS.length]
                  }, transparent 70%)`,
                }}
              />

              <div className="relative">
                {/* Period Badge */}
                <div
                  className="inline-flex items-center rounded-full px-4 py-1 text-xs font-mono tracking-[0.15em] text-white shadow-lg"
                  style={{
                    background: ACCENTS[i % ACCENTS.length],
                  }}
                >
                  {e.period}
                </div>

                {/* Role */}
                <h3 className="mt-5 text-serif text-3xl md:text-4xl">
                  {e.role}
                </h3>

                {/* Company */}
                <div
                  className="mt-2 font-medium text-lg"
                  style={{
                    color: ACCENTS[i % ACCENTS.length],
                  }}
                >
                  {e.company}
                </div>

                {/* Divider */}
                <div
                  className="mt-5 h-[2px] w-20 rounded-full"
                  style={{
                    background: ACCENTS[i % ACCENTS.length],
                  }}
                />

                {/* Points */}
                <ul className="mt-6 space-y-3 text-[15px] text-muted-foreground">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span
                        className="mt-2 h-2 w-2 rounded-full shrink-0"
                        style={{
                          background: ACCENTS[i % ACCENTS.length],
                        }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  {/* EDUCATION */}
<section id="education" className="scroll-mt-24 py-12 md:py-16 relative">
  <div className="mx-auto max-w-7xl px-4 md:px-8">
    <SectionTitle label="Education" accent="var(--gold)" />

    <h2 className="mt-6 text-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">
      The foundation behind
      <span
        className="italic"
        style={{ color: "var(--gold)" }}
      >
        {" "}my journey.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
      Academic excellence combined with practical learning,
      internships, and project-based experience has shaped my
      growth as a software developer.
    </p>

    {/* EDUCATION CARDS */}
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      {EDUCATION.map((ed, i) => (
        <div
          key={ed.title}
          className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-500"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-all duration-500"
            style={{
              background: `radial-gradient(circle at top right, ${
                ACCENTS[i % ACCENTS.length]
              }, transparent 70%)`,
            }}
          />

          <div
            className="absolute -top-20 -right-20 h-52 w-52 rounded-full"
            style={{
              background: ACCENTS[i % ACCENTS.length],
              filter: "blur(60px)",
              opacity: 0.25,
            }}
          />

          <div className="relative">
            <div
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg group-hover:rotate-12 transition-all duration-500"
              style={{
                background: ACCENTS[i % ACCENTS.length],
              }}
            >
              <GraduationCap className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-serif text-2xl leading-tight">
              {ed.title}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {ed.place}
            </p>

            <div
              className="mt-5 h-[2px] w-20 rounded-full"
              style={{
                background: ACCENTS[i % ACCENTS.length],
              }}
            />

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
                {ed.period}
              </span>

              <span
                className="rounded-full px-4 py-1 text-white text-sm font-semibold shadow-lg"
                style={{
                  background: ACCENTS[i % ACCENTS.length],
                }}
              >
                {ed.score}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* QUICK STATS */}
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { value: "8.7", label: "CGPA" },
        { value: "95.8%", label: "Intermediate" },
        { value: "97.8%", label: "SSC" },
        { value: "2026", label: "Graduate" },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl p-5 text-center shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div
            className="text-3xl font-bold"
            style={{ color: "var(--gold)" }}
          >
            {item.value}
          </div>

          <div className="mt-1 text-sm text-muted-foreground">
            {item.label}
          </div>
        </div>
      ))}
    </div>

    {/* ACHIEVEMENTS */}
    <div className="mt-10">
      <h3 className="text-3xl font-semibold mb-6">
        Achievements & Leadership
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={a}
            className="group rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl p-7 shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex gap-5">
              <div
                className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg group-hover:scale-110 transition-all duration-300"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(135deg,#f59e0b,#f97316)"
                      : "linear-gradient(135deg,#8b5cf6,#ec4899)",
                }}
              >
                {i === 0 ? (
                  <Trophy className="h-6 w-6" />
                ) : (
                  <Users className="h-6 w-6" />
                )}
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {i === 0 ? "Achievement" : "Leadership"}
                </div>

                <p className="mt-3 leading-relaxed text-base">
                  {a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* RESUME */}
<section id="resume" className="scroll-mt-24 py-12 md:py-16 relative">
  <div className="mx-auto max-w-7xl px-4 md:px-8">
    <SectionTitle label="Resume" accent="var(--violet)" />

    <h2 className="mt-6 text-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">
      Everything important,
      <span
        className="italic"
        style={{ color: "var(--violet)" }}
      >
        {" "}at a glance.
      </span>
    </h2>

   
    {/* HERO RESUME CARD */}
    <div className="mt-10 rounded-[2rem] overflow-hidden relative card-ink p-8 md:p-12">
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
        style={{
          background: "var(--grad-cool)",
          filter: "blur(80px)",
          opacity: 0.5,
        }}
      />

      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full"
        style={{
          background: "var(--grad-warm)",
          filter: "blur(80px)",
          opacity: 0.3,
        }}
      />

      <div className="relative">
        <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/60">
          Professional Summary
        </div>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs text-white/80">
  📄 Latest Resume • Updated 2026
</div>

        <h3 className="mt-5 text-white text-3xl md:text-4xl font-semibold leading-tight">
          Java Developer • AI Enthusiast • Full Stack Builder
        </h3>

        <p className="mt-5 text-white/80 max-w-3xl leading-relaxed">
         Passionate Computer Science graduate with hands-on experience
in Software Development, Artificial Intelligence, Data Science,
and Web Technologies. Built real-world AI solutions, completed
multiple internships, and published research focused on
intelligent document analysis using NLP.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href="/pdfs/resume.pdf"
            target="_blank"
            rel="noreferrer"
className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-white shadow-xl hover:scale-105 transition-all"
style={{
  background:
    "linear-gradient(135deg,#8b5cf6,#ec4899,#f97316)",
}}          >
            👀 View Resume
          </a>

          <a
            href="/pdfs/resume.pdf"
            download
className="inline-flex items-center gap-2 rounded-full px-7 py-3 border border-white/20 bg-white/10 backdrop-blur text-white hover:bg-white/20 hover:scale-105 transition-all"          >
            ⬇ Download Resume
          </a>

        </div>
      </div>
    </div>



    {/* EXISTING TILES */}
    {/* CAREER GOAL */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-6 gap-4">

  <div className="md:col-span-6 relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/60 backdrop-blur-xl p-8 md:p-10 shadow-xl hover:-translate-y-1 transition-all duration-500">

    {/* Glow Effects */}
    <div
      className="absolute -top-20 -right-20 h-64 w-64 rounded-full"
      style={{
        background: "var(--grad-warm)",
        filter: "blur(70px)",
        opacity: 0.25,
      }}
    />

    <div
      className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full"
      style={{
        background: "var(--grad-cool)",
        filter: "blur(70px)",
        opacity: 0.2,
      }}
    />

    <div className="relative">

      <div className="flex items-center gap-5">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-3xl text-white shadow-xl"
          style={{
            background:
              "linear-gradient(135deg,#f59e0b,#ec4899,#8b5cf6)",
          }}
        >
          <Sparkles className="h-8 w-8" />
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Career Vision
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mt-1">
            Building software that solves real problems.
          </h3>
        </div>
      </div>

      <p className="mt-8 text-lg leading-relaxed text-foreground/85 max-w-4xl">
        Seeking opportunities as a Software Engineer, Java Developer,
        or Full Stack Developer where I can contribute to meaningful
        products, solve real-world challenges, and continue growing
        in Artificial Intelligence, Backend Development, and Modern
        Web Technologies.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "Java Developer",
          "Full Stack",
          "Artificial Intelligence",
          "NLP",
          "Problem Solver",
          "Team Player",
        ].map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg hover:scale-105 transition-all"
            style={{
              background:
                "linear-gradient(135deg,#8b5cf6,#ec4899)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
          {/* STATS */}
   <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
  {[
    { value: "8.7", label: "CGPA", icon: "🎓" },
    { value: "3+", label: "Internships", icon: "💼" },
    { value: "12", label: "Certificates", icon: "🏆" },
    { value: "2", label: "Major Projects", icon: "🚀" },
  ].map((item) => (
    <div
      key={item.label}
      className="group rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl p-6 text-center shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500"
    >
      <div className="text-4xl">{item.icon}</div>

      <div
        className="mt-3 text-4xl font-bold"
        style={{ color: "var(--violet)" }}
      >
        {item.value}
      </div>

      <div className="mt-2 text-sm text-muted-foreground">
        {item.label}
      </div>
    </div>
  ))}
</div>

    </div>
    
  </div>

  

</div>
  </div>
</section>






      {/* CERTIFICATES */}
<section id="certifications" className="scroll-mt-24 py-12 md:py-16 relative">
  <div className="mx-auto max-w-7xl px-4 md:px-8">

    <SectionTitle label="Certificates" accent="var(--rose)" />

    <div className="mt-6">
      <h2 className="text-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">
        Continuous learning through
        <span
          className="italic"
          style={{ color: "var(--rose)" }}
        >
          {" "}certifications.
        </span>
      </h2>

      <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
        Every certification reflects my commitment to learning new
        technologies, strengthening technical foundations, and
        staying updated with industry trends.
      </p>
    </div>

    {/* Stats */}
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { value: CERTS.length, label: "Certificates" },
        { value: "AI", label: "Specialization" },
        { value: "Java", label: "Core Skill" },
        { value: "2026", label: "Latest" },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl p-5 text-center shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div
            className="text-3xl font-bold"
            style={{ color: "var(--rose)" }}
          >
            {item.value}
          </div>

          <div className="mt-1 text-sm text-muted-foreground">
            {item.label}
          </div>
        </div>
      ))}
    </div>
{/* Certificate Gallery */}
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {CERTS.map((c, i) => (
    <button
      key={c.img}
      onClick={() =>
        setLightbox({
          src: certUrl(c.img),
          title: `${c.name} — ${c.org}`,
        })
      }
      className="group text-left overflow-hidden rounded-[2rem] border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
    >
      {/* Certificate Preview */}
      <div className="relative overflow-hidden aspect-[4/3] bg-white">
        <img
          src={certUrl(c.img)}
          alt={c.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold text-white backdrop-blur"
          style={{
            background:
              "linear-gradient(135deg,#8b5cf6,#ec4899,#f97316)",
          }}
        >
          CERT #{String(i + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
          {c.name}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {c.org}
        </p>

        <div
          className="mt-4 h-[2px] w-16 rounded-full"
          style={{
            background:
              "linear-gradient(90deg,#8b5cf6,#ec4899,#f97316)",
          }}
        />

        {/* View Button */}
        <div className="mt-5">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg group-hover:scale-105 transition-all"
            style={{
              background:
                "linear-gradient(135deg,#6366f1,#a855f7,#ec4899)",
            }}
          >
            View Certificate
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </button>
  ))}
</div>
    
  </div>
</section>


      

     ```jsx
{/* CONTACT */}
<section id="contact" className="scroll-mt-24 py-20 relative overflow-hidden">
  <div className="mx-auto max-w-7xl px-4 md:px-8">

    <SectionTitle label="Contact" accent="var(--sky)" />

    <h2 className="mt-6 text-serif text-5xl md:text-7xl leading-[0.95] max-w-5xl">
      Let's create
      <span
        className="italic"
        style={{ color: "var(--sky)" }}
      >
        {" "}something amazing.
      </span>
    </h2>

    <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
      Looking for a Java Developer, Full Stack Developer, or AI enthusiast?
      I'm always excited to discuss opportunities, projects, and ideas.
    </p>

    <div className="mt-12 grid lg:grid-cols-[1fr_1.1fr] gap-8">

      {/* LEFT PANEL */}
      <div className="relative overflow-hidden rounded-[2rem] card-ink p-8 md:p-10">

        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full"
          style={{
            background: "var(--grad-cool)",
            filter: "blur(80px)",
            opacity: 0.45,
          }}
        />

        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full"
          style={{
            background: "var(--grad-warm)",
            filter: "blur(80px)",
            opacity: 0.35,
          }}
        />

        <div className="relative">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            🟢 Available for Opportunities
          </div>

          <h3 className="mt-6 text-white text-4xl font-semibold leading-tight">
            Let's build the next big thing together.
          </h3>

          <p className="mt-5 text-white/75 leading-relaxed">
            Open to Software Engineering, Java Development,
            Full Stack Development, Artificial Intelligence,
            and internship opportunities.
          </p>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-3 gap-3">

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
              <div className="text-2xl">📍</div>
              <div className="mt-2 text-white text-sm">
                India
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
              <div className="text-2xl">⚡</div>
              <div className="mt-2 text-white text-sm">
                Fast Reply
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
              <div className="text-2xl">🚀</div>
              <div className="mt-2 text-white text-sm">
                Open To Work
              </div>
            </div>

          </div>

          {/* Contact Links */}
          <div className="mt-8 space-y-3">

            <DarkContactRow
              icon={Mail}
              href="mailto:gowthamganesh862@gmail.com"
              label="gowthamganesh862@gmail.com"
            />

            <DarkContactRow
              icon={Phone}
              href={`tel:${PHONE}`}
              label={PHONE}
            />

            <DarkContactRow
              icon={MessageCircle}
              href={`https://wa.me/${WHATSAPP}`}
              label="Chat on WhatsApp"
              accent
            />

            <DarkContactRow
              icon={Linkedin}
              href="https://linkedin.com/in/ganesh-gowtham-adhikarla-b804a227a"
              label="LinkedIn Profile"
            />

            <DarkContactRow
              icon={Github}
              href="https://github.com/AdhikarlaGaneshGowtham"
              label="GitHub Portfolio"
            />

          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="/pdfs/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-medium shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg,#8b5cf6,#ec4899,#f97316)",
              }}
            >
              View Resume
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-white"
            >
              WhatsApp
            </a>

          </div>

        </div>
      </div>

      {/* CONTACT FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);

          const subject = encodeURIComponent(
            `Hello from ${fd.get("name")}`
          );

          const body = encodeURIComponent(
            `${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`
          );

          window.location.href =
            `mailto:gowthamganesh862@gmail.com?subject=${subject}&body=${body}`;
        }}
        className="rounded-[2rem] border border-white/20 bg-white/60 backdrop-blur-xl p-8 md:p-10 shadow-xl"
      >
        <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          Send a Message
        </div>

        <h3 className="mt-4 text-3xl font-semibold">
          Start a conversation.
        </h3>

        <p className="mt-2 text-muted-foreground">
          Have a role, project, or opportunity? I'd love to hear from you.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Field name="name" label="Your Name" />
          <Field name="email" label="Email" type="email" />
        </div>

        <div className="mt-4">
          <Field name="message" label="Message" textarea />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-white font-medium shadow-lg hover:scale-105 transition-all"
            style={{
              background:
                "linear-gradient(135deg,#8b5cf6,#ec4899,#f97316)",
            }}
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-white"
          >
            WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>

        </div>

      </form>
    </div>
  </div>
</section>


{/* FOOTER */}
<footer className="mt-16 mb-8">
  <div className="mx-auto max-w-7xl px-4 md:px-8">

    <div className="relative overflow-hidden rounded-[2.5rem] p-[1px] bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500">

      <div className="relative rounded-[2.5rem] bg-[var(--cream)] px-8 md:px-12 py-8">

        {/* Decorative Blur */}
        <div
          className="absolute top-0 right-0 h-56 w-56 rounded-full opacity-20"
          style={{
            background: "var(--grad-name)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left */}
          <div>

            <div className="flex items-center gap-4">

              <div
                className="h-14 w-14 rounded-2xl flex items-center justify-center text-white font-bold shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg,#8b5cf6,#ec4899,#f97316)",
                }}
              >
                GA
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Ganesh Gowtham Adhikarla
                </h3>

                <p className="text-sm text-muted-foreground mt-1">
                  Java Developer • Full Stack Developer • AI Enthusiast
                </p>
              </div>

            </div>

          </div>

          {/* Center */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/AdhikarlaGaneshGowtham"
              target="_blank"
              rel="noreferrer"
              className="group h-12 w-12 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition-all"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/ganesh-gowtham-adhikarla-b804a227a"
              target="_blank"
              rel="noreferrer"
              className="group h-12 w-12 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="group h-12 w-12 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <a
              href="mailto:gowthamganesh862@gmail.com"
              className="group h-12 w-12 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>

          </div>

          {/* Right */}
          <div className="text-center lg:text-right">

            <a
              href="/pdfs/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold shadow-xl hover:scale-105 transition-all"
              style={{
                background:
                  "linear-gradient(135deg,#8b5cf6,#ec4899,#f97316)",
              }}
            >
              View Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>

          </div>

        </div>

        <div className="mt-8 border-t border-border pt-5 flex flex-col md:flex-row justify-between gap-2 text-sm text-muted-foreground">

          <span>
            © {new Date().getFullYear()} Ganesh Gowtham Adhikarla
          </span>

          <span>
            Designed & Developed with React + TypeScript
          </span>

        </div>

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
  icon: Icon,
  label,
  children,
  className = "",
  accent,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
  className?: string;
  accent: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem]
      border border-white/20 bg-white/60 backdrop-blur-xl
      p-7 shadow-xl hover:-translate-y-2 hover:scale-[1.02]
      transition-all duration-500 ${className}`}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${accent}, transparent 70%)`,
        }}
      />

      {/* Floating Orb */}
      <div
        className="absolute -top-16 -right-16 h-40 w-40 rounded-full"
        style={{
          background: accent,
          filter: "blur(50px)",
          opacity: 0.25,
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div
            className="text-[11px] font-mono uppercase tracking-[0.25em]"
            style={{ color: accent }}
          >
            {label}
          </div>

          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg
            group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            style={{
              background: accent,
            }}
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 h-[2px] w-16 rounded-full"
          style={{
            background: accent,
          }}
        />

        <div className="mt-5 text-[15px] leading-relaxed text-foreground/85">
          {children}
        </div>
      </div>
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
