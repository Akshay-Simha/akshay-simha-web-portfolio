import { motion, AnimatePresence } from "motion/react";
import {
  Cloud,
  Terminal,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Database,
  Shield,
  Cpu,
  BarChart3,
  Search,
  Menu,
  Clock,
  Layers,
  Code2,
  Box,
  Settings,
  Activity,
  Award,
  Server,
  Code,
  Rocket,
  GitBranch,
  Share2,
  ArrowUpRight
} from "lucide-react";
import { useState, useEffect } from "react";

const RESUME_DATA = {
  name: "Akshay Simha S",
  role: "DevOps Engineer",
  location: "Bengaluru, India",
  summary: "DevOps Engineer with 1+ years of hands-on experience in automating AWS infrastructure using Terraform, building CI/CD pipelines with GitHub Actions, and implementing monitoring using Prometheus and Grafana. Proven ability to reduce operational overhead and cloud costs, strengthen cloud security through IAM best practices and SSO, and improving system reliability through observability and standardized DevOps processes.",
  stats: [
    { label: "AUTOMATION", value: "Automation First", description: "If it's worth doing twice, it's worth automating. I believe in eliminating manual toll to allow teams to focus on creative problem solving." },
    { label: "SECURITY", value: "Security by Design", description: "Security isn't a perimeter, it's a foundational layer. DevSecOps integration ensures that protection is baked into every deployment pipeline." },
    { label: "OBSERVABILITY", value: "Observability", description: "Data-driven decisions require deep visibility. I build systems that communicate their health proactively through robust logging and metrics." }
  ],
  philosophy: [
    {
      title: "Automation First",
      icon: Settings,
      description: "If it's worth doing twice, it's worth automating. I believe in eliminating manual toll to allow teams to focus on creative problem solving."
    },
    {
      title: "Security by Design",
      icon: Shield,
      description: "Security isn't a perimeter, it's a foundational layer. DevSecOps integration ensures that protection is baked into every deployment pipeline.",
      highlighted: true
    },
    {
      title: "Observability",
      icon: BarChart3,
      description: "Data-driven decisions require deep visibility. I build systems that communicate their health proactively through robust logging and metrics."
    }
  ],
  trajectory: [
    {
      role: "DevOps Engineer",
      roleDetail: "[Intern → Full-time Promotion]",
      company: "Cubera",
      period: "2025 — PRESENT",
      desc: "Automated and managed AWS infrastructure provisioning using modular Terraform, deployed 25+ EC2 instances along with IAM roles and security groups across environments, reducing manual efforts by 70% while improving scalability, consistency and maintainability.",
      icon: Server
    },
    {
      role: "Intern",
      company: "Cubera",
      period: "PREVIOUS",
      desc: "Implemented IAM roles and policies following least privilege principles, enabling secure role-based access control for 10+ users and enhancing security.",
      icon: Code
    }
  ],
  experience: [
    {
      company: "Cubera",
      location: "Bengaluru, India",
      role: "DevOps Engineer",
      period: "JANUARY 2025 – PRESENT",
      bullets: [
        "Automated and managed AWS infrastructure provisioning using modular Terraform, deployed 25+ EC2 instances along with IAM roles and security groups across environments, reducing manual efforts by 70% while improving scalability, consistency and maintainability.",
        "Designed Grafana dashboards for monitoring and alerting, improving system observability and reducing incident response time.",
        "Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment."
      ]
    }
  ],
  skills: [
    { category: "Cloud Ecosystems", items: ["AWS (EC2, S3, RDS, IAM)", "Route 53", "VPC Networking"], icon: Cloud },
    { category: "Infrastructure as Code", items: ["Terraform", "CloudFormation", "Ansible"], icon: Code2 },
    { category: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Docker Compose"], icon: Box },
    { category: "Observability & Monitoring", items: ["Prometheus", "Grafana", "CloudWatch"], icon: BarChart3 },
    { category: "CI/CD & Automation", items: ["GitHub Actions", "Jenkins", "Webhooks"], icon: Settings },
    { category: "Security & Management", items: ["IAM Roles", "AWS SSO", "KMS Encryption"], icon: Shield }
  ],
  projects: [
    {
      title: "Self-Healing Infrastructure",
      description: "Automated recovery system using Terraform and Lambda to monitor EC2 health and auto-trigger remediation blocks.",
      tags: ["Terraform", "AWS Lambda", "CloudWatch"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Global Observability Hub",
      description: "Centralized Prometheus/Grafana stack monitoring 100+ microservices with real-time alerting to Slack and PagerDuty.",
      tags: ["Grafana", "Prometheus", "Service Mesh"],
      image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=1000"
    }
  ],
  certifications: [
    {
      title: "AZ-900: Microsoft Certified Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      icon: Cloud,
      link: "https://www.credly.com/badges/4f660971-1820-4dc2-ae6c-28b97ed3d1a6/public_url"
    },
    {
      title: "AI-900: Microsoft Certified Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      icon: Cpu,
      link: "https://www.credly.com/badges/0caf898e-11c2-4afc-b20d-131a69bdc69b/public_url"
    },
    {
      title: "Cisco Certified Support Technician Cybersecurity (CISCO)",
      issuer: "Cisco",
      date: "2023",
      icon: Shield,
      link: "https://www.credly.com/badges/e94682a5-cfe0-4350-88ae-0a833d01b492/public_url"
    },
    {
      title: "IT Specialist - Cybersecurity",
      issuer: "Certiport",
      date: "2023",
      icon: Shield,
      link: "https://www.credly.com/badges/79c8e104-1e88-45a0-af93-f9b775d09acd/public_url"
    }
  ]
};

const Header = ({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }: { activeTab: string, setActiveTab: (t: string) => void, isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void }) => {
  const tabs = ["Home", "About", "Experience", "Skills", "Projects", "Certifications", "Contact"];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen ? "bg-white" : "bg-white/80 backdrop-blur-md"} border-b border-brand-border/30`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16 w-full relative">
        <button
          onClick={() => {
            setActiveTab("Home");
            setIsMenuOpen(false);
          }}
          className="font-display text-xl font-bold tracking-tighter text-brand-primary hover:text-brand-accent transition-colors z-50"
        >
          My Portfolio
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-mono text-[11px] uppercase tracking-widest transition-all duration-200 border-b-2 pb-1 ${activeTab === tab
                ? "text-brand-accent font-bold border-brand-accent"
                : "text-brand-muted border-transparent hover:text-brand-accent"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50 p-2 text-brand-primary h-10 w-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-brand-primary hover:bg-slate-100 rounded-full transition-all duration-200">
            <Terminal size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
};

const MobileMenu = ({ isOpen, activeTab, setActiveTab, onClose }: { isOpen: boolean, activeTab: string, setActiveTab: (t: string) => void, onClose: () => void }) => {
  const tabs = ["Home", "About", "Experience", "Skills", "Projects", "Certifications", "Contact"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-white z-[45] md:hidden flex flex-col pt-24 px-6 overflow-y-auto"
        >
          <div className="flex flex-col gap-8 items-start">
            {tabs.map((tab, i) => (
              <motion.button
                key={tab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setActiveTab(tab);
                  onClose();
                }}
                className={`font-display text-4xl font-bold tracking-tighter transition-colors text-left w-full ${activeTab === tab ? "text-brand-accent" : "text-brand-primary hover:text-brand-accent"
                  }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <div className="mt-auto py-12 border-t border-brand-border/30 space-y-6">
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/akshaysimha-70b369210/" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:simhaa.31@gmail.com" className="text-brand-muted hover:text-brand-accent transition-colors"><Mail size={24} /></a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const HomeTab = ({ setActiveTab }: { setActiveTab: (t: string) => void }) => (
  <div className="max-w-7xl mx-auto px-6 space-y-32">
    <div className="relative flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-3/5 space-y-8">
        <div className="inline-flex items-center gap-3 px-3 py-1 bg-white border border-brand-border/50 rounded-lg">
          <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-medium">System Status: Optimal</span>
        </div>

        <h1 className="font-display text-6xl lg:text-8xl text-brand-primary leading-[1.1] tracking-tighter font-bold">
          Akshay Simha S
        </h1>

        <h2 className="font-display text-xl text-brand-accent bg-brand-primary-container px-4 py-2 inline-block rounded-lg font-semibold">
          DevOps Engineer
        </h2>

        <p className="font-sans text-lg text-brand-muted max-w-xl leading-relaxed">
          Architecting resilient infrastructure through <span className="text-brand-primary font-bold">Cloud-Native</span> solutions. Specialized in end-to-end automation, scalable <span className="text-brand-primary font-bold">CI/CD</span> pipelines, and infrastructure-as-code orchestration.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={() => setActiveTab("About")}
            className="bg-brand-primary-container text-white px-8 py-3 rounded shadow-sm hover:bg-brand-accent transition-all duration-300 font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 group"
          >
            <span>About</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setActiveTab("Contact")}
            className="border border-brand-border text-brand-muted px-8 py-3 rounded font-mono text-[11px] uppercase tracking-wider hover:bg-slate-50 transition-all duration-300"
          >
            Connect
          </button>
        </div>
      </div>

      <div className="w-full md:w-2/5 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 border-2 border-dashed border-brand-accent/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute inset-4 border border-brand-primary/10 rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            >
              <img
                alt="Akshay Simha S"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border-4 border-white"
                src="/Akshay_Simha_S_Photo.jpeg"
              />
            </motion.div>
          </div>

          {/* Floating Asset */}
          <div className="absolute top-4 right-0 bg-white shadow-lg p-2 rounded-lg border border-brand-border flex items-center gap-2 animate-bounce">
            <Cloud className="text-brand-accent" size={16} fill="currentColor" fillOpacity={0.1} />
            <span className="font-mono text-[10px] font-bold">Azure Certified</span>
          </div>
        </div>
      </div>
    </div>

    {/* Technical Expertise Section */}
    <div className="pt-24 border-t border-brand-border/30">
      <div className="mb-16">
        <h2 className="font-display text-4xl font-bold text-brand-primary tracking-tight mb-4">Technical Expertise</h2>
        <p className="text-brand-muted text-lg">Standardized tools and practices for growth-oriented environments.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cloud Architecture Card */}
        <div className="glass-card p-10 bg-white border border-brand-border/30 rounded-3xl relative group hover:border-brand-accent transition-all">
          <div className="w-12 h-12 bg-[#F0F4F8] rounded-xl flex items-center justify-center text-[#2B6CB0] mb-8">
            <Cloud size={24} />
          </div>
          <h3 className="font-display text-2xl font-bold text-brand-primary mb-4">Cloud Architecture</h3>
          <p className="text-brand-muted mb-8 leading-relaxed">
            Deploying and managing standard single-region or multi-AZ setups on AWS using basic infrastructure-as-code patterns.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="font-mono text-[10px] bg-slate-100 px-3 py-1 rounded text-brand-muted uppercase tracking-wider">--env:dev-stage</span>
            <span className="font-mono text-[10px] bg-slate-100 px-3 py-1 rounded text-brand-muted uppercase tracking-wider">--provider:aws</span>
          </div>
        </div>

        {/* Infrastructure as Code & Orchestration Card */}
        <div className="glass-card p-10 bg-white border border-brand-border/30 rounded-3xl relative group hover:border-brand-accent transition-all">
          <div className="w-12 h-12 bg-[#F0F4F8] rounded-xl flex items-center justify-center text-[#2B6CB0] mb-8">
            <Settings size={24} />
          </div>
          <h3 className="font-display text-2xl font-bold text-brand-primary mb-4">Infrastructure as Code & Orchestration</h3>
          <p className="text-brand-muted mb-8 leading-relaxed">
            Automating cloud infrastructure provisioning using Terraform for consistency and scalability across 'dev' and 'stage' environments.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="font-mono text-[10px] bg-slate-100 px-3 py-1 rounded text-brand-muted uppercase tracking-wider">--tool:terraform</span>
            <span className="font-mono text-[10px] bg-slate-100 px-3 py-1 rounded text-brand-muted uppercase tracking-wider">--pattern:scalability</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SkillsTab = () => (
  <div>
    <div className="mb-16">
      <span className="font-mono text-brand-accent text-sm tracking-widest uppercase mb-4 block">01 / Technical Mastery</span>
      <h2 className="font-display text-5xl font-bold text-brand-text tracking-tighter max-w-2xl">
        Technical Infrastructure & Automation Mastery
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {RESUME_DATA.skills.map((skill, i) => (
        <motion.div
          key={skill.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-8 group hover:border-brand-accent transition-all hover:translate-y-[-4px] relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-[0.05] text-brand-text group-hover:scale-110 transition-transform duration-500">
            <skill.icon size={120} />
          </div>
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors relative z-10">
            <skill.icon size={24} />
          </div>
          <div className="relative z-10">
            <h3 className="font-display font-bold text-xl text-brand-text mb-4 uppercase tracking-tight">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map(item => (
                <span key={item} className="px-3 py-1 bg-slate-100 text-brand-muted font-mono text-[10px] uppercase rounded border border-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ProjectsTab = () => (
  <div>
    <div className="mb-16 flex justify-between items-end">
      <div>
        <span className="font-mono text-brand-accent text-sm tracking-widest uppercase mb-4 block">02 / Infrastructure Gallery</span>
        <h2 className="font-display text-5xl font-bold text-brand-text tracking-tighter">
          Infrastructure as Code & Deployment Showcase
        </h2>
      </div>
      <div className="flex gap-2">
        <button className="p-3 border border-brand-border rounded-full hover:bg-slate-50 transition-colors"><ChevronRight className="rotate-180" size={20} /></button>
        <button className="p-3 border border-brand-border rounded-full hover:bg-slate-50 transition-colors"><ChevronRight size={20} /></button>
      </div>
    </div>
    <div className="space-y-24">
      {RESUME_DATA.projects.map((project, i) => (
        <motion.div
          key={project.title}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className={`lg:col-span-7 overflow-hidden rounded-3xl border border-brand-border group relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
            <img src={project.image} alt={project.title} className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-brand-text/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
              <button className="px-8 py-3 bg-white text-brand-text font-mono text-xs uppercase tracking-widest flex items-center gap-2 rounded">
                View Architecture <ExternalLink size={14} />
              </button>
            </div>
          </div>
          <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
            <div className="flex gap-2 mb-6">
              {project.tags.map(tag => <span key={tag} className="font-mono text-[10px] uppercase tracking-widest text-brand-accent">[ {tag} ]</span>)}
            </div>
            <h3 className="font-display text-4xl font-bold text-brand-text mb-6">{project.title}</h3>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">{project.description}</p>
            <div className="flex items-center gap-4 py-6 border-y border-brand-border">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(u => <div key={u} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />)}
              </div>
              <span className="text-xs text-brand-muted font-mono uppercase">Managed by {RESUME_DATA.name}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ExperienceTab = () => (
  <div className="max-w-5xl mx-auto">
    <div className="mb-16">
      <span className="font-mono text-brand-accent text-sm tracking-widest uppercase mb-4 block">01 / Career Log</span>
      <h2 className="font-display text-5xl font-bold text-brand-text tracking-tighter">
        Professional Experience
      </h2>
    </div>

    <div className="space-y-12">
      {RESUME_DATA.experience.map((exp, i) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <Layers size={180} />
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-text rounded flex items-center justify-center text-white">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold text-brand-text">{exp.role}</h3>
                  <p className="font-mono text-brand-accent text-xs uppercase tracking-widest">{exp.company} // {exp.location}</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 border border-green-100 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold">{exp.period}</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-brand-border">
            <div className="lg:col-span-8 space-y-6">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted">Core Responsibilities</h4>
              <ul className="space-y-6">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-brand-muted leading-relaxed text-sm">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted mb-4">Environment Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "IAM", "EC2", "SSO", "S3", "RDS"].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-slate-50 text-brand-text font-mono text-[10px] border border-brand-border rounded uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-slate-900 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-brand-accent">
                  <Activity size={14} />
                  <span className="font-mono text-[10px] uppercase tracking-widest">Efficiency Gain</span>
                </div>
                <p className="text-white font-display text-4xl font-bold">70%</p>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest leading-relaxed">Reduction in manual infrastructure provisioning effort</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const CertificationsTab = () => (
  <div>
    <div className="mb-16">
      <span className="font-mono text-brand-accent text-sm tracking-widest uppercase mb-4 block">03 / Verified Credentials</span>
      <h2 className="font-display text-5xl font-bold text-brand-text tracking-tighter">
        Professional Certifications & Validated Skills
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {RESUME_DATA.certifications.map((cert, i) => (
        <motion.a
          key={cert.title}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-8 group hover:border-brand-accent transition-all relative overflow-hidden block"
        >
          <div className="absolute -right-4 -bottom-4 opacity-[0.05] text-brand-text group-hover:scale-110 transition-transform duration-500">
            <cert.icon size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <Award size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-text mb-4 leading-tight group-hover:text-brand-accent transition-colors">
              {cert.title}
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">Issuer:</span>
                <span className="font-display font-medium text-brand-text text-sm">{cert.issuer}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">Issued:</span>
                <span className="font-display font-medium text-brand-text text-sm">{cert.date}</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-brand-border flex justify-between items-center relative z-10">
            <span className="status-badge">Verified</span>
            <div className="text-brand-muted group-hover:text-brand-accent transition-colors">
              <ExternalLink size={16} />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
);

const ContactTab = () => (
  <div className="max-w-6xl mx-auto space-y-24 py-12">
    {/* Header */}
    <div className="text-center">
      <span className="font-mono text-brand-accent text-xs tracking-[0.4em] mb-4 block uppercase font-bold">--STATUS: LISTENING</span>
      <h2 className="font-display text-6xl font-bold text-brand-primary tracking-tighter mb-6">Direct Connect</h2>
      <p className="text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed">
        Skip the forms. I prefer direct communication for discussing architectural challenges, infrastructure scaling, or consulting opportunities.
      </p>
    </div>

    {/* Primary Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Professional Network */}
      <a
        href="https://www.linkedin.com/in/akshaysimha-70b369210/"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card p-10 bg-white border border-brand-border/30 rounded-[2rem] relative group hover:border-brand-accent transition-all block"
      >
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 bg-[#1a365d] rounded-xl flex items-center justify-center text-white">
            <Linkedin size={24} />
          </div>
          <ArrowUpRight size={20} className="text-brand-muted group-hover:text-brand-accent transition-colors" />
        </div>
        <h3 className="font-display text-2xl font-bold text-brand-primary mb-4">LinkedIn</h3>
        <p className="text-brand-muted mb-8 leading-relaxed">
          Connect for professional networking, explore my career journey, and stay updated with my latest technical insights and industry contributions.
        </p>
        <div className="pt-6 border-t border-brand-border/30">
          <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-brand-accent">LINKEDIN: akshaysimha</span>
        </div>
      </a>

      {/* Direct Inquiry */}
      <a
        href="mailto:simhaa.31@gmail.com"
        className="glass-card p-10 bg-white border border-brand-border/30 rounded-[2rem] relative group hover:border-brand-accent transition-all block"
      >
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 bg-[#1a365d] rounded-xl flex items-center justify-center text-white">
            <Mail size={24} />
          </div>
          <ArrowUpRight size={20} className="text-brand-muted group-hover:text-brand-accent transition-colors" />
        </div>
        <h3 className="font-display text-2xl font-bold text-brand-primary mb-4">Gmail</h3>
        <p className="text-brand-muted mb-8 leading-relaxed">
          Reach out directly for project collaborations, technical consultations, or professional inquiries. I typically respond to architectural proposals within 24 hours.
        </p>
        <div className="pt-6 border-t border-brand-border/30">
          <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-brand-accent">GMAIL: simhaa.31@gmail.com</span>
        </div>
      </a>
    </div>

    {/* Info Terminal Card */}
    <div className="rounded-[1.5rem] overflow-hidden shadow-2xl border border-brand-border/30">
      <div className="bg-[#1a365d] p-8 md:p-12">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="ml-4 font-mono text-[10px] text-white/40 uppercase tracking-widest">protocol_info.json</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#5adace] block">AVAILABILITY</span>
            <p className="font-mono text-sm">Q3-Q4: Limited Capacity</p>
          </div>
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#5adace] block">PREFERRED TOOLS</span>
            <p className="font-mono text-sm">Slack, Discord, Zoom</p>
          </div>
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#5adace] block">TIMEZONE</span>
            <p className="font-mono text-sm">Indian Standard Time (UTC+5:30)</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Links */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "CODE", value: "GitHub" },
        { label: "WRITING", value: "Medium" },
        { label: "SUPPORT", value: "Discord" },
        { label: "QA", value: "StackOverflow" }
      ].map(link => (
        <div key={link.label} className="bg-white/50 border border-brand-border/10 p-6 rounded-xl hover:bg-white transition-colors">
          <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block mb-1">{link.label}</span>
          <span className="font-display font-bold text-brand-primary">{link.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const AnimatedTerminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const terminalContent = [
    "$ terraform init",
    "Initializing backend... Done",
    "",
    "$ terraform plan",
    "Planning infrastructure changes...",
    "+ network layer",
    "+ compute instances (3)",
    "+ IAM roles",
    "",
    "$ terraform apply",
    "Applying changes...",
    "network layer created",
    "instances running",
    "IAM configured",
    "",
    "Apply complete ✔ 12 resources added"
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      setLines(prev => {
        const next = [...prev, terminalContent[currentLine]];
        currentLine = (currentLine + 1) % terminalContent.length;
        if (currentLine === 0) return [terminalContent[0]];
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-card p-6 h-[260px] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 mb-4 opacity-40 flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
        <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.2em]">infrastructure.tf</span>
      </div>
      <div className="space-y-0.5 font-mono text-[10px] flex-grow overflow-hidden">
        {lines.map((line, i) => (
          <div key={i} className={`${line.startsWith("$") ? "text-brand-accent" : "text-white/70"} min-h-[1em]`}>
            {line || "\u00A0"}
          </div>
        ))}
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-1.5 h-3 bg-brand-accent ml-1"
        />
      </div>
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
        <Cpu size={200} />
      </div>
    </div>
  );
};

const AboutTab = ({ setActiveTab }: { setActiveTab: (t: string) => void }) => (
  <div className="space-y-32">
    {/* Engine Details */}
    <div className="max-w-5xl mx-auto px-6">
      <span className="font-mono text-brand-accent text-[10px] tracking-[0.4em] uppercase mb-6 block">Build. Automate. Scale.</span>
      <h2 className="font-display text-6xl lg:text-7xl font-bold text-brand-primary leading-[1.1] tracking-tighter mb-16 max-w-4xl">
        Bridging the gap between <span className="text-[#2B6CB0]">Code</span> and <span className="text-[#2B6CB0]">Stability.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-brand-border/30 pt-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-brand-accent">
            <Settings size={18} />
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold">PHILOSOPHY</h3>
          </div>
          <p className="text-brand-muted text-lg leading-relaxed font-sans">
            My approach focuses on automation and reliability — if a task is done twice, it must be scripted to ensure reliability and speed. I enjoy building cloud infrastructure that is secure, maintainable, and easy to operate.
          </p>
        </div>
        <div className="relative">
          <AnimatedTerminal />
        </div>
      </div>
    </div>

    {/* Engineering Philosophy */}
    <div className="max-w-5xl mx-auto text-center px-6">
      <h2 className="font-display text-4xl font-bold text-brand-primary mb-16 tracking-tight">Engineering Philosophy</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RESUME_DATA.philosophy.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 rounded-2xl text-left transition-all border ${item.highlighted
              ? "bg-brand-primary-container text-white border-transparent shadow-2xl scale-105 z-10"
              : "bg-white text-brand-text border-brand-border/50 hover:border-brand-accent shadow-sm"
              }`}
          >
            <item.icon size={28} className={`mb-6 ${item.highlighted ? "text-brand-accent" : "text-brand-accent"}`} />
            <h3 className="font-display text-xl font-bold mb-4">{item.title}</h3>
            <p className={`text-sm leading-relaxed ${item.highlighted ? "text-white/80" : "text-brand-muted"}`}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Career Trajectory (Timeline Style) */}
    <div className="max-w-5xl mx-auto bg-[#F8F9FD] py-16 md:py-24 px-6 md:px-12 rounded-[2rem] md:rounded-[3rem] border border-brand-border/30">
      <div className="mb-12 md:mb-16">
        <span className="font-mono text-brand-accent text-xs tracking-[0.4em] mb-4 block">git log --oneline</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-primary tracking-tighter">Career Trajectory</h2>
      </div>

      <div className="space-y-16 relative">
        {/* Timeline Line */}
        <div className="absolute left-[19px] lg:left-1/2 top-4 bottom-4 w-[1px] bg-brand-border/50 lg:-translate-x-1/2" />

        {RESUME_DATA.trajectory.map((job, i) => (
          <div key={job.role} className={`relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 md:gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Dot/Icon */}
            <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-10 h-10 bg-[#1a365d] border-2 border-brand-accent rounded-xl z-20 flex items-center justify-center shadow-lg">
              <job.icon size={18} className="text-white" />
            </div>

            {/* Content Side 1: Header/Info */}
            <div className={`w-full lg:w-[46%] pl-14 lg:pl-0 ${i % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
              <div className="mb-1">
                <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold">{job.period}</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-primary mt-1">{job.role}</h3>
                {job.roleDetail && (
                  <p className="font-mono text-[11px] text-brand-accent mt-1">{job.roleDetail}</p>
                )}
                <p className="font-display text-lg text-brand-muted mt-1">{job.company}</p>
              </div>
            </div>

            {/* Content Side 2: Description */}
            <div className={`w-full lg:w-[46%] pl-14 lg:pl-0 ${i % 2 === 0 ? 'lg:text-left lg:pl-8' : 'lg:text-right lg:pr-8'}`}>
              <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                {job.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Tech Profile Summary (YAML Style) */}
    <div className="max-w-4xl mx-auto">
      <div className="terminal-card p-10 relative overflow-hidden group">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="font-mono text-[10px] text-white/40 ml-4">root@portfolio:~/profile.yaml</span>
        </div>
        <div className="font-mono text-sm space-y-2">
          <div className="text-brand-accent">engineer:</div>
          <div className="pl-4">
            <span className="text-white/60">name:</span> <span className="text-[#5adace]">"{RESUME_DATA.name}"</span>
          </div>
          <div className="pl-4">
            <span className="text-white/60">role:</span> <span className="text-[#5adace]">"DevOps Engineer"</span>
          </div>
          <div className="text-brand-accent">focuses:</div>
          <ul className="pl-8 text-white/80 list-none">
            <li>- Cloud infrastructure</li>
            <li>- Cloud security</li>
            <li>- Monitoring and observability</li>
          </ul>
        </div>
        <Cloud size={200} className="absolute -right-20 -bottom-20 text-white opacity-[0.03] group-hover:scale-110 transition-transform" />
      </div>
    </div>

    {/* Footer CTA */}
    <div className="max-w-3xl mx-auto text-center py-20">
      <h2 className="font-display text-4xl font-bold text-brand-primary mb-10 tracking-tight">Let's connect.</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActiveTab("Contact")}
          className="bg-brand-primary-container text-white px-8 py-4 rounded font-mono text-xs uppercase tracking-widest hover:bg-brand-accent transition-all shadow-xl"
        >
          Contact
        </button>
        <a
          href="/Akshay_Simha_S_Resume.pdf" download
          className="border border-brand-border text-brand-primary px-8 py-4 rounded font-mono text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
        >
          Download Resume
        </a>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const renderTab = () => {
    switch (activeTab) {
      case "Home": return <HomeTab setActiveTab={setActiveTab} />;
      case "About": return <AboutTab setActiveTab={setActiveTab} />;
      case "Experience": return <ExperienceTab />;
      case "Skills": return <SkillsTab />;
      case "Projects": return <ProjectsTab />;
      case "Certifications": return <CertificationsTab />;
      case "Contact": return <ContactTab />;
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-brand-bg relative overflow-x-hidden pt-32 pb-24 selection:bg-brand-accent selection:text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 technical-grid opacity-30 pointer-events-none" />

      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <MobileMenu
        isOpen={isMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onClose={() => setIsMenuOpen(false)}
      />

      <main className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Meta Details (Scrollable elements might need more space) skipped as requested */}
    </div>
  );
}
