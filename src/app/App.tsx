import { useRef } from "react";
import profileImg from "../imports/WhatsApp_Image_2026-02-27_at_23.31.35.jpeg";
import resumePdf from "../imports/Vignesh_Resume-1.pdf";
import { Mail, MapPin, Github, Linkedin, ArrowUpRight, GraduationCap, Award, BookOpen, Hammer, Compass, Rocket, ExternalLink, Code2 } from "lucide-react";
import {
  SiReact, SiNodedotjs, SiPython, SiJavascript, SiCplusplus, SiTailwindcss, SiHtml5, SiCss,
  SiExpress, SiMongodb, SiMysql, SiFirebase, SiDocker, SiKubernetes, SiTerraform,
  SiGithubactions, SiNumpy, SiPandas, SiGit, SiGithub
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Color tokens
const CREAM = "#FBF7EE";
const CREAM_2 = "#F3EDDF";
const INK = "#111111";
const INK_SOFT = "#4A4A4A";
const YELLOW = "#FFD60A";
const CORAL = "#FF6B4A";

const SERIF = "'Instrument Serif', Georgia, serif";
const SANS = "'Inter', system-ui, sans-serif";

const currently = [
  { icon: BookOpen, title: "Learning", body: "Terraform, Kubernetes, and the AWS Solutions Architect track." },
  { icon: Hammer, title: "Building", body: "Exam Result Analyzer — OCR-powered marksheet tool with SGPA/CGPA viz." },
  { icon: Compass, title: "Reading", body: "The DevOps Handbook & Kelsey Hightower's Kubernetes posts." },
  { icon: Rocket, title: "Open To", body: "Summer 2027 internships, freelance projects, open-source collabs." },
];

const stack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
];

type Project = {
  title: string;
  tag: string;
  year: string;
  desc: string;
  tech: string[];
  dark: boolean;
  repoUrl?: string;
  demoUrl?: string;
  gradient: string;
  initials: string;
};

const projects: Project[] = [
  {
    title: "College Alumni Management System",
    tag: "CAMS",
    year: "2024",
    desc: "A multi-role web platform for Hazarimal Somani College supporting Alumni, Student, Staff, and Admin workflows with real-time chat, job postings, and event management. Built Firebase Auth and Firestore sync across 4 roles.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase"],
    dark: false,
    repoUrl: "https://github.com/VigneshDandu",
    gradient: "linear-gradient(135deg, #FFCA28 0%, #FF6B4A 100%)",
    initials: "CAMS",
  },
  {
    title: "Vision-Based Traffic Control System",
    tag: "Computer Vision",
    year: "2025",
    desc: "A computer vision system that dynamically adjusts traffic signal timing based on real-time vehicle density detection using OpenCV. Worked on frontend interface and backend integration modules.",
    tech: ["Python", "OpenCV", "HTML", "CSS"],
    dark: true,
    repoUrl: "https://github.com/VigneshDandu",
    gradient: "linear-gradient(135deg, #3776AB 0%, #111111 100%)",
    initials: "VTC",
  },
  {
    title: "Exam Result Analyzer",
    tag: "In Progress",
    year: "Present",
    desc: "Building a Mumbai University marksheet analyzer that extracts marks via OCR, calculates SGPA/CGPA automatically, and visualizes subject-wise performance with ATKT detection.",
    tech: ["Python", "Flask", "React.js", "Tesseract OCR"],
    dark: false,
    repoUrl: "https://github.com/VigneshDandu",
    gradient: "linear-gradient(135deg, #FFD60A 0%, #FF6B4A 100%)",
    initials: "ERA",
  },
];

const certs = [
  { name: "AWS Cloud Essentials", issuer: "Amazon Web Services", date: "Jun '26" },
  { name: "Blockchain Technology", issuer: "MOOC", date: "" },
  { name: "Ethical Hacking", issuer: "Webinar", date: "" },
];

function MarqueeRow({ items, dir }: { items: { name: string; icon: any; color: string }[]; dir: "ltr" | "rtl" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex gap-3 w-max" data-dir={dir}>
        {doubled.map((t, i) => (
          <div key={`${t.name}-${i}`} className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl border" style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}>
            <t.icon size={24} style={{ color: t.color }} />
            <span style={{ fontSize: "0.9rem", color: INK_SOFT, fontWeight: 500 }}>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SplitWord({ word, className = "" }: { word: string; className?: string }) {
  return (
    <span className={`split-word inline-block ${className}`}>
      {word.split("").map((c, i) => (
        <span key={i} className="split-char inline-block overflow-hidden align-bottom" style={{ lineHeight: 0.9 }}>
          <span className="split-char-inner inline-block">{c === " " ? " " : c}</span>
        </span>
      ))}
    </span>
  );
}

function Star({ className = "", size = 24, color = YELLOW }: { className?: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" />
    </svg>
  );
}

export default function App() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const hasHover = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

    // #1 Split-text hero reveal
    gsap.set(".split-char-inner", { yPercent: 110 });
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.5 })
      .to(".split-char-inner", { yPercent: 0, duration: 0.9, stagger: 0.04, ease: "power4.out" }, "-=0.2")
      .to(".hero-swipe", { scaleX: 1, duration: 0.7, ease: "power3.inOut" }, "-=0.4")
      .from(".hero-sub", { y: 20, opacity: 0, duration: 0.5 }, "-=0.5")
      .from(".hero-meta", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(".hero-photo", { scale: 0.9, opacity: 0, duration: 0.8, ease: "back.out(1.4)" }, "-=1.2")
      .from(".hero-star", { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(2)" }, "-=0.4");

    gsap.to(".float-star", {
      y: -10,
      rotation: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });

    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });

    // #7 Wipe-mask headline reveal
    gsap.utils.toArray<HTMLElement>(".wipe").forEach((el) => {
      gsap.fromTo(el,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    });

    // #4 Infinite marquee tech strip
    gsap.utils.toArray<HTMLElement>(".marquee-track").forEach((track) => {
      const dir = track.dataset.dir === "rtl" ? 1 : -1;
      gsap.to(track, {
        xPercent: dir * 50,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    });

    // #3 Magnetic CTAs
    if (hasHover) {
      gsap.utils.toArray<HTMLElement>(".magnetic").forEach((btn) => {
        const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
        const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });
        const onMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          xTo((e.clientX - cx) * 0.35);
          yTo((e.clientY - cy) * 0.35);
        };
        const onLeave = () => { xTo(0); yTo(0); };
        btn.addEventListener("mousemove", onMove);
        btn.addEventListener("mouseleave", onLeave);
      });
    }


    gsap.from(".pillar", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".pillar-grid", start: "top 85%" },
    });

    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
        }
      );

      const onEnter = () => gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      const onLeave = () => gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
    });

    gsap.from(".edu-row", {
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".edu-list", start: "top 85%" },
    });

    gsap.from(".cert-card", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: ".cert-grid", start: "top 85%" },
    });
  }, { scope: root });

  return (
    <div ref={root} className="min-h-screen antialiased relative" style={{ background: CREAM, color: INK, fontFamily: SANS }}>
      <style>{`
        .display { font-family: ${SERIF}; font-weight: 400; letter-spacing: -0.02em; }
        .nav-link::before {
          content: "";
          position: absolute;
          inset: 0;
          background: ${YELLOW};
          border-radius: 9999px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          z-index: 0;
        }
        .nav-link:hover::before { transform: scaleX(1); }
        .nav-link:hover { color: ${INK}; }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .grain::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0.04;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
        }
      `}</style>
      <div className="grain" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: `${CREAM}d9`, borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Star size={20} />
            <span style={{ fontWeight: 600 }}>Vignesh.</span>
          </a>
          <div className="hidden md:flex items-center gap-2" style={{ fontWeight: 500, color: INK_SOFT }}>
            {["About", "Projects", "Education", "Contact"].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="nav-link relative px-3 py-1.5 rounded-full transition">
                <span className="relative z-10">{label}</span>
              </a>
            ))}
          </div>
          <a href={resumePdf} target="_blank" rel="noreferrer" download="Vignesh_Dandu_Resume.pdf" className="magnetic px-4 py-2 rounded-full transition flex items-center gap-1.5" style={{ background: INK, color: "#fff" }}>
            Resume <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 relative" style={{ zIndex: 2 }}>
        {/* Hero */}
        <section id="home" className="pt-20 pb-28">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 items-center">
            <div>
              <p className="hero-eyebrow mb-4" style={{ color: INK_SOFT }}>Hi, I'm</p>
              <h1 className="hero-title display leading-[0.9]" style={{ fontSize: "clamp(4rem, 13vw, 10rem)" }}>
                <span className="relative inline-block">
                  <span className="hero-swipe absolute inset-x-0 bottom-2 h-5 md:h-10 origin-left" style={{ background: YELLOW, zIndex: 0, transform: "scaleX(0)" }} />
                  <span className="relative italic"><SplitWord word="Vignesh" /></span>
                </span>
                <br />
                <SplitWord word="Dandu" /> <span className="inline-flex items-center hero-star float-star"><Star size={56} className="inline-block -mt-4" /></span>
              </h1>
              <p className="hero-sub mt-8 max-w-lg leading-snug" style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", fontWeight: 500, color: INK }}>
                A Full-Stack Developer with a knack for the Cloud.
              </p>
              <p className="hero-sub mt-4 max-w-lg leading-relaxed" style={{ color: INK_SOFT }}>
                Building cloud-native applications that solve real-world problems. Currently studying Information Technology in Mumbai and working toward a career in Cloud & DevOps engineering.
              </p>
              <div className="hero-meta mt-10 flex flex-wrap items-center gap-6" style={{ color: INK_SOFT }}>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Mumbai, India</span>
              </div>
            </div>

            <div className="relative justify-self-center md:justify-self-end hero-photo">
              <div className="absolute -top-6 -left-6 hero-star float-star"><Star size={40} /></div>
              <div className="absolute -bottom-4 -right-4 rotate-12 hero-star float-star"><Star size={28} color={CORAL} /></div>
              <div className="w-72 h-80 sm:w-80 sm:h-96 overflow-hidden rounded-[2rem] border-4 bg-neutral-100" style={{ borderColor: INK, boxShadow: `12px 12px 0 ${INK}` }}>
                <img src={profileImg} alt="Vignesh Dandu" className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
            <p className="reveal mb-8 flex items-center gap-2" style={{ color: INK_SOFT }}><Star size={14} /> Working With</p>
            <div className="marquee-mask space-y-3">
              <MarqueeRow items={stack} dir="ltr" />
              <MarqueeRow items={[...stack].reverse()} dir="rtl" />
            </div>
          </div>
        </section>
      </main>

      {/* Currently — alternating bg */}
      <section id="about" style={{ background: CREAM_2 }} className="relative" >
        <div className="max-w-6xl mx-auto px-6 py-24 relative" style={{ zIndex: 2 }}>
          <p className="reveal flex items-center gap-2 mb-4" style={{ color: INK_SOFT }}><Star size={14} /> Right Now</p>
          <h2 className="wipe display max-w-3xl" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.05 }}>
            What I'm <em style={{ color: CORAL }}>currently</em> up to.
          </h2>
          <div className="pillar-grid mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currently.map((p) => (
              <div key={p.title} className="pillar p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: INK, color: "#fff", boxShadow: `4px 4px 0 ${YELLOW}` }}>
                  <p.icon className="w-5 h-5" />
                </div>
                <div style={{ fontSize: "0.8rem", color: INK_SOFT, textTransform: "uppercase", letterSpacing: "0.1em" }}>Currently</div>
                <div className="display mt-1" style={{ fontSize: "1.75rem", lineHeight: 1 }}>{p.title}</div>
                <p className="mt-3 leading-relaxed" style={{ color: INK_SOFT }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 relative" style={{ zIndex: 2 }}>
        {/* Projects */}
        <section id="projects" className="py-24">
          <p className="reveal flex items-center gap-2 mb-4" style={{ color: INK_SOFT }}><Star size={14} /> Selected Work</p>
          <h2 className="wipe display mb-12 max-w-3xl" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.05 }}>
            Projects I've <em style={{ color: CORAL }}>shipped</em>.
          </h2>
          <div className="project-list space-y-6">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="project-card group relative overflow-hidden rounded-[2rem] border transition"
                style={{
                  background: p.dark ? "#0e0e0e" : "#ffffff",
                  color: p.dark ? "#ffffff" : INK,
                  borderColor: p.dark ? "transparent" : "rgba(0,0,0,0.08)",
                }}
              >
                <div className="grid md:grid-cols-[1fr_1.4fr] gap-0">
                  {/* Thumbnail */}
                  <div className="relative h-48 md:h-auto min-h-[220px] flex items-center justify-center overflow-hidden" style={{ background: p.gradient }}>
                    <div className="absolute top-4 right-4 float-star"><Star size={i % 2 === 0 ? 28 : 36} color={INK} /></div>
                    <span className="display" style={{ fontSize: "clamp(3rem, 7vw, 5rem)", color: INK, mixBlendMode: "multiply" }}>{p.initials}</span>
                  </div>
                  {/* Body */}
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full" style={{ background: CORAL, color: "#fff", fontWeight: 600, fontSize: "0.8rem" }}>{p.tag}</span>
                      <span style={{ opacity: 0.6 }}>{p.year}</span>
                    </div>
                    <h3 className="display max-w-2xl" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.05 }}>
                      {p.title}
                    </h3>
                    <p className="mt-4 leading-relaxed" style={{ opacity: 0.8 }}>
                      {p.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full"
                          style={{
                            border: `1px solid ${p.dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)"}`,
                            fontSize: "0.8rem",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {p.repoUrl && (
                        <a href={p.repoUrl} target="_blank" rel="noreferrer" className="magnetic px-4 py-2 rounded-full transition flex items-center gap-2" style={{ background: p.dark ? "#fff" : INK, color: p.dark ? INK : "#fff", fontSize: "0.9rem" }}>
                          <Code2 className="w-4 h-4" /> View Code
                        </a>
                      )}
                      {p.demoUrl && (
                        <a href={p.demoUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full transition flex items-center gap-2" style={{ border: `1px solid ${p.dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.15)"}`, fontSize: "0.9rem" }}>
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About teaser */}
        <section className="py-24 border-t grid md:grid-cols-2 gap-12 items-center" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <div>
            <p className="reveal flex items-center gap-2 mb-4" style={{ color: INK_SOFT }}><Star size={14} /> A Little About Me</p>
            <h2 className="wipe display" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.05 }}>
              I like turning <em style={{ color: CORAL }}>messy</em> problems into tidy systems.
            </h2>
            <p className="reveal mt-6 leading-relaxed" style={{ fontSize: "1.125rem", color: INK_SOFT }}>
              I'm a B.E. Information Technology student at Atharva College of Engineering with an Honours minor in AI & ML. Outside of code, I'm always tinkering with cloud setups, reading up on DevOps, and figuring out how to make small teams ship faster.
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="magnetic px-5 py-3 rounded-full transition flex items-center gap-2" style={{ background: INK, color: "#fff" }}>
                Let's Chat <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://github.com/VigneshDandu" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full transition" style={{ border: `1px solid rgba(0,0,0,0.15)` }}>
                See GitHub
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatBox value="8.43" label="GPA / 10" dark />
            <StatBox value="2027" label="Class Of" accent />
            <StatBox value="AI/ML" label="Honours Minor" />
            <StatBox value="Mumbai" label="Based In" dark />
          </div>
        </section>
      </main>

      {/* Education — alternating bg */}
      <section id="education" style={{ background: CREAM_2 }}>
        <div className="max-w-6xl mx-auto px-6 py-24 relative" style={{ zIndex: 2 }}>
          <p className="reveal flex items-center gap-2 mb-4" style={{ color: INK_SOFT }}><Star size={14} /> Education</p>
          <h2 className="wipe display mb-12" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.05 }}>
            Where I learned to <em style={{ color: CORAL }}>learn</em>.
          </h2>
          <div className="edu-list space-y-3">
            <EduRow icon={<GraduationCap className="w-5 h-5" />} title="B.E. in Information Technology" place="Atharva College of Engineering, Mumbai" meta="Sep '23 — Present" note="GPA 8.43 / 10 · Honours Minor in AI & ML" />
            <EduRow icon={<GraduationCap className="w-5 h-5" />} title="HSC in Science" place="Kishinchand Chellaram College, Mumbai" meta="Jun '20 — May '22" note="69.40%" />
            <EduRow icon={<GraduationCap className="w-5 h-5" />} title="SSC" place="Our Own School" meta="May '20" note="90.40%" />
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 relative" style={{ zIndex: 2 }}>
        {/* Certifications */}
        <section className="py-24">
          <p className="reveal flex items-center gap-2 mb-4" style={{ color: INK_SOFT }}><Star size={14} /> Certifications</p>
          <h2 className="wipe display mb-12" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.05 }}>
            Always picking up <em style={{ color: CORAL }}>something new</em>.
          </h2>
          <div className="cert-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((c) => (
              <div key={c.name} className="cert-card p-6 rounded-2xl flex items-start gap-4" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: YELLOW }}>
                  <Award className="w-5 h-5" style={{ color: INK }} />
                </div>
                <div className="flex-1">
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
                  <div style={{ color: INK_SOFT }}>{c.issuer}{c.date && ` · ${c.date}`}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <div className="relative rounded-[2.5rem] p-10 md:p-20 overflow-hidden" style={{ background: INK, color: "#fff" }}>
            <div className="absolute top-8 right-8 float-star"><Star size={48} /></div>
            <div className="absolute bottom-8 left-8 rotate-12 float-star"><Star size={32} color={CORAL} /></div>
            <p className="reveal mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>Say Hi</p>
            <h2 className="wipe display max-w-3xl" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.95 }}>
              Got an <em style={{ color: YELLOW }}>idea</em>? <br /> Let's build it together.
            </h2>
            <p className="reveal mt-6 max-w-xl" style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)" }}>
              I'm open to internships, freelance projects, and full-time roles in full-stack and cloud engineering.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-3">
              <a href="mailto:vigneshdandu8355@gmail.com" className="magnetic px-5 py-3 rounded-full transition flex items-center gap-2" style={{ background: YELLOW, color: INK, fontWeight: 600 }}>
                <Mail className="w-4 h-4" /> vigneshdandu8355@gmail.com
              </a>
              <a href="https://github.com/VigneshDandu" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full transition flex items-center gap-2" style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full transition flex items-center gap-2" style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(0,0,0,0.08)", color: INK_SOFT }}>
          <div className="flex items-center gap-2">© 2026 Vignesh Dandu <Star size={12} /></div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/VigneshDandu" target="_blank" rel="noreferrer" className="hover:text-black transition"><Github className="w-4 h-4" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black transition"><Linkedin className="w-4 h-4" /></a>
            <a href="mailto:vigneshdandu8355@gmail.com" className="hover:text-black transition"><Mail className="w-4 h-4" /></a>
            <span>·</span>
            <span>Built with React, Tailwind & GSAP</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function StatBox({ value, label, dark, accent }: { value: string; label: string; dark?: boolean; accent?: boolean }) {
  const bg = accent ? YELLOW : dark ? INK : "#fff";
  const fg = accent ? INK : dark ? "#fff" : INK;
  const border = dark || accent ? "transparent" : "rgba(0,0,0,0.08)";
  return (
    <div className="p-6 rounded-2xl border" style={{ background: bg, color: fg, borderColor: border }}>
      <div className="display" style={{ fontSize: "2.5rem", lineHeight: 1 }}>{value}</div>
      <div className="mt-2 opacity-80">{label}</div>
    </div>
  );
}

function EduRow({ icon, title, place, meta, note }: { icon: React.ReactNode; title: string; place: string; meta: string; note: string }) {
  return (
    <div className="edu-row p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-4" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center" style={{ background: YELLOW, color: INK }}>
        {icon}
      </div>
      <div className="flex-1">
        <div style={{ fontWeight: 600, fontSize: "1.125rem" }}>{title}</div>
        <div style={{ color: INK_SOFT }}>{place}</div>
      </div>
      <div className="text-right">
        <div style={{ color: INK }}>{meta}</div>
        <div style={{ color: CORAL, fontWeight: 500 }}>{note}</div>
      </div>
    </div>
  );
}
