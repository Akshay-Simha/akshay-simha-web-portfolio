import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useScroll } from "motion/react";
// @ts-ignore
import signatureLogo from "./assets/images/as_signature_logo_1779615269869.png";
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
  ArrowUpRight,
  X,
  Copy,
  Check,
  MessageSquare
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { RECYCLING_STORE_LOCATOR_IMAGE } from "./data/project_images";

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
      description: "Security isn't a perimeter, it's a foundational layer. DevSecOps integration ensures that protection is baked into every deployment pipeline."
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
    { category: "Cloud Ecosystems", items: ["AWS (EC2, S3, RDS, IAM)", "GCP (Compute, GCS, Cloud SQL)", "Azure (VMs, Blob, SQL DB)", "Route 53", "VPC Networking"], icon: Cloud },
    { category: "Infrastructure as Code", items: ["Terraform", "AWS CloudFormation"], icon: Code2 },
    { category: "Containers & Orchestration", items: ["Docker & Docker Compose", "Kubernetes", "AWS EKS / ECS"], icon: Box },
    { category: "Observability & Monitoring", items: ["Prometheus", "Grafana", "AWS CloudWatch"], icon: BarChart3 },
    { category: "CI/CD & Automation", items: ["GitHub Actions", "AWS CodePipeline"], icon: Settings },
    { category: "Security & Management", items: ["AWS IAM & SSO", "GCP IAM", "AWS KMS"], icon: Shield }
  ],
  projects: [
    {
      title: "Recycling Drop-Off Store Locator",
      description: "A sustainable recycling store locator application featuring a fully interactive GPS map, material reference guidelines, and community carbon reduction metrics tracking.",
      tags: [],
      image: RECYCLING_STORE_LOCATOR_IMAGE,
      link: "https://recycling-store-locator-be37b.web.app/"
    },
    {
      title: "Global Observability Hub",
      description: "Centralized Prometheus/Grafana stack monitoring 100+ microservices with real-time alerting to Slack and PagerDuty.",
      tags: [],
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

const Header = ({ activeTab, onTabClick, isMenuOpen, setIsMenuOpen }: { activeTab: string, onTabClick: (t: string) => void, isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void }) => {
  const tabs = ["Home", "About", "Experience", "Skills", "Projects", "Certifications", "Contact"];
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: "input" | "output"; text: string }>>([
    { type: "output", text: "Welcome to Akshay Simha's devops console (AS-CLI v1.0.0)" },
    { type: "output", text: "Type 'help' to list available navigation & custom commands." }
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const historyEndRef = useRef<HTMLDivElement>(null);
  const consoleWrapperRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when history updates
  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  // Focus input when open
  useEffect(() => {
    if (isConsoleOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isConsoleOpen]);

  // Close console when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isConsoleOpen &&
        consoleWrapperRef.current &&
        !consoleWrapperRef.current.contains(event.target as Node)
      ) {
        setIsConsoleOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isConsoleOpen]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = terminalInput.trim();
    if (!command) return;

    const lowerCmd = command.toLowerCase();
    const newHistory = [...terminalHistory, { type: "input" as const, text: command }];

    let response = "";
    
    if (lowerCmd === "help") {
      response = `Available commands:\n  help           - Show this description\n  home           - Go to Home tab\n  about          - Go to About tab\n  experience     - Go to Experience tab\n  skills         - Go to Skills tab\n  projects       - Go to Projects tab\n  certifications - Go to Certifications tab\n  contact        - Go to Contact tab\n  socials        - View social connection links\n  clear          - Clear console logs`;
    } else if (lowerCmd === "clear") {
      setTerminalHistory([
        { type: "output", text: "Welcome to Akshay Simha's devops console (AS-CLI v1.0.0)" },
        { type: "output", text: "Type 'help' to list available navigation & custom commands." }
      ]);
      setTerminalInput("");
      return;
    } else if (lowerCmd === "home") {
      onTabClick("Home");
      response = "Navigating to: Home";
    } else if (lowerCmd === "about") {
      onTabClick("About");
      response = "Navigating to: About";
    } else if (lowerCmd === "experience") {
      onTabClick("Experience");
      response = "Navigating to: Experience";
    } else if (lowerCmd === "skills") {
      onTabClick("Skills");
      response = "Navigating to: Skills\n- Cloud Ecosystems (AWS, GCP, Azure)\n- Infrastructure as Code (Terraform, CloudFormation)\n- Containers & Orchestration (Docker, Kubernetes)\n- Observability & Monitoring (Prometheus, Grafana)";
    } else if (lowerCmd === "projects") {
      onTabClick("Projects");
      response = "Navigating to: Projects\n- Self-Healing Infrastructure\n- Global Observability Hub";
    } else if (lowerCmd === "certifications") {
      onTabClick("Certifications");
      response = "Navigating to: Certifications";
    } else if (lowerCmd === "contact") {
      onTabClick("Contact");
      response = "Navigating to: Contact";
    } else if (lowerCmd === "socials") {
      response = "LinkedIn: https://www.linkedin.com/in/akshaysimha-70b369210/\nEmail: simhaa.31@gmail.com";
    } else {
      response = `Command unrecognized: '${command}'. Type 'help' for options.`;
    }

    setTerminalHistory([...newHistory, { type: "output" as const, text: response }]);
    setTerminalInput("");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen ? "bg-white" : "bg-white/80 backdrop-blur-md"} border-b border-brand-border/30`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16 w-full relative">
        <motion.button 
          onClick={() => {
            onTabClick("Home");
            setIsMenuOpen(false);
          }}
          whileHover={{ scale: 1.03, y: -0.5 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center z-50 h-10 py-1 cursor-pointer"
          aria-label="Home"
        >
          <img 
            src={signatureLogo} 
            alt="Akshay Simha S" 
            className="h-14 md:h-16 w-auto object-contain mix-blend-multiply" 
            style={{ filter: "hue-rotate(61deg) saturate(90%) brightness(1.3)" }}
            referrerPolicy="no-referrer"
          />
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabClick(tab)}
              className={`font-mono text-[11px] uppercase tracking-widest transition-all duration-200 border-b-2 pb-1 cursor-pointer select-none ${
                activeTab === tab 
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

        {/* Desktop Terminal Trigger and Dropdown CLI */}
        <div ref={consoleWrapperRef} className="hidden md:flex items-center gap-4 relative">
          <button 
            onClick={() => setIsConsoleOpen(!isConsoleOpen)}
            className={`p-2 rounded-full transition-all duration-200 ${isConsoleOpen ? "bg-brand-accent/10 text-brand-accent" : "text-brand-primary hover:bg-slate-100"}`}
            aria-label="Toggle drop logs console"
          >
            <Terminal size={18} />
          </button>

          <AnimatePresence>
            {isConsoleOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute top-12 right-0 w-[420px] max-w-lg bg-[#0a0f1d] text-slate-200 rounded-xl border border-slate-800 shadow-2xl backdrop-blur-md flex flex-col overflow-hidden font-mono text-xs z-50 h-[340px]"
              >
                {/* Console header */}
                <div className="bg-[#12192c] px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80 shrink-0 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold tracking-tight">akshay@devops-sh: ~</span>
                  <button onClick={() => setIsConsoleOpen(false)} className="text-slate-400 hover:text-white transition-colors" aria-label="Close">✕</button>
                </div>

                {/* Console body */}
                <div className="flex-1 p-3 overflow-y-auto font-mono text-[11px] leading-relaxed space-y-1.5 text-slate-300">
                  {terminalHistory.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap">
                      {line.type === "input" ? (
                        <div className="flex items-start gap-1">
                          <span className="text-brand-accent shrink-0 select-none">akshay@devops-sh:~$</span>
                          <span className="text-white font-medium">{line.text}</span>
                        </div>
                      ) : (
                        <div className="text-emerald-400 pl-2 border-l border-emerald-500/10 py-0.5">{line.text}</div>
                      )}
                    </div>
                  ))}
                  <div ref={historyEndRef} />
                </div>
                
                {/* Console input form */}
                <form onSubmit={handleTerminalSubmit} className="bg-[#0e1426] border-t border-slate-800/80 p-2.5 flex items-center gap-1.5 shrink-0">
                  <span className="text-brand-accent font-semibold text-[11px] select-none">akshay@devops-sh:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono text-[11px] p-0 focus:outline-none focus:ring-0"
                    placeholder="type command..."
                  />
                  <button type="submit" className="hidden" />
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

const MobileMenu = ({ isOpen, activeTab, onTabClick, onClose }: { isOpen: boolean, activeTab: string, onTabClick: (t: string) => void, onClose: () => void }) => {
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
                  onTabClick(tab);
                  onClose();
                }}
                className={`font-display text-4xl font-bold tracking-tighter transition-colors text-left w-full cursor-pointer select-none ${
                  activeTab === tab ? "text-brand-accent font-extrabold" : "text-brand-primary hover:text-brand-accent"
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
            onClick={() => document.getElementById("About")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-brand-primary-container text-white px-8 py-3 rounded shadow-sm hover:bg-brand-accent transition-all duration-300 font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 group cursor-pointer"
          >
            <span>About</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-brand-border text-brand-muted px-8 py-3 rounded font-mono text-[11px] uppercase tracking-wider hover:bg-slate-50 transition-all duration-300 cursor-pointer"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSxKzecrVwLHXn56nGnhTrFzJtisCSPcm8otqrb44plBIpdn6keFLBWRR1rU_SV5DNdgM4oAqbdLssKY9pHV0zXDgMKzMLKCNGDPiEK6vBJLX26GE0hq_d4-Gi5gie4XWaDeapIOwXbcDx2DeLMQgHji5Ixv3Sn3Zk4-KXtxuxqOByojBMjXaIXMiqMs-H8BUn1arIcBtzaufChAKdt5q6rBjjqzFiEOQlptL4aXF07HW9zPmuSOUH2sp3_AVdYN4f9UlEO-mymYN0"
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
    <div className="pt-24">
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

const headingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const headingItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

const TiltCard = ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [0, 1], [-8, 8]);

  const [hovered, setHovered] = useState(false);

  // We can also create a nice moving highlight gradient based on smoothX and smoothY!
  const gradientBg = useTransform(
    [smoothX, smoothY],
    ([currX, currY]) => `radial-gradient(circle 300px at ${Number(currX) * 100}% ${Number(currY) * 100}%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)`
  );

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  }

  const isFlex = className?.includes("flex");
  const isFlexCol = className?.includes("flex-col");
  const isJustifyBetween = className?.includes("justify-between");

  const innerClassName = [
    "w-full",
    "h-full",
    isFlex ? "flex" : "",
    isFlexCol ? "flex-col" : "",
    isJustifyBetween ? "justify-between" : "",
  ].filter(Boolean).join(" ");

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className={`${className} cursor-pointer relative overflow-hidden transition-shadow duration-300 hover:shadow-xl`}
      {...props}
    >
      <div style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }} className={innerClassName}>
        {children}
      </div>

      {/* Luxury Moving Spotlight Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          background: gradientBg,
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  );
};

const SkillsTab = () => (
  <div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={headingContainerVariants}
      className="mb-16"
    >
      <motion.span variants={headingItemVariants} className="font-mono text-brand-accent text-sm tracking-widest uppercase mb-4 block">01 / Technical Mastery</motion.span>
      <motion.h2 variants={headingItemVariants} className="font-display text-5xl font-bold text-brand-text tracking-tighter max-w-2xl">
        Technical Infrastructure & Automation Mastery
      </motion.h2>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {RESUME_DATA.skills.map((skill, i) => (
        <TiltCard
          key={skill.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-8 group hover:border-brand-accent transition-all relative overflow-hidden"
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
        </TiltCard>
      ))}
    </div>
  </div>
);

const ProjectsTab = () => (
  <div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={headingContainerVariants}
      className="mb-12 flex justify-between items-end"
    >
      <div>
        <motion.span variants={headingItemVariants} className="font-mono text-brand-accent text-sm tracking-widest uppercase mb-3 block">02 / PROJECTS</motion.span>
        <motion.h2 variants={headingItemVariants} className="font-display text-4xl font-bold text-brand-text tracking-tighter">
          Featured Projects
        </motion.h2>
      </div>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {RESUME_DATA.projects.map((project) => (
        <motion.div 
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex w-full"
        >
          <TiltCard className="overflow-hidden rounded-2xl border border-brand-border glass-card shadow-md group relative flex flex-col justify-between w-full h-full hover:border-brand-accent/50 transition-colors duration-300">
            <div className="relative overflow-hidden h-[240px] w-full">
              <img src={project.image} alt={project.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
              <div className="absolute inset-0 bg-brand-text/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm duration-300">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-brand-accent text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 rounded shadow-lg hover:bg-brand-accent/90 transition-colors no-underline">
                    VIEW <ExternalLink size={12} />
                  </a>
                ) : (
                  <button className="px-6 py-2 bg-brand-accent text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 rounded shadow-lg hover:bg-brand-accent/90 transition-colors">
                    View Architecture <ExternalLink size={12} />
                  </button>
                )}
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-[9px] uppercase tracking-wider text-brand-accent bg-brand-accent/5 px-2.5 py-0.5 rounded border border-brand-accent/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-text mb-3 group-hover:text-brand-accent transition-colors duration-200">{project.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">{project.description}</p>
              </div>
              
              <div className="flex items-center gap-3 pt-4 border-t border-brand-border/60 text-xs text-brand-muted font-mono uppercase">
                <div className="flex -space-x-1.5">
                  {[1,2].map(u => <div key={u} className="w-5 h-5 rounded-full border border-white bg-slate-200" />)}
                </div>
                <span>Managed by {RESUME_DATA.name}</span>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  </div>
);

const ExperienceTab = () => (
  <div className="max-w-5xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={headingContainerVariants}
      className="mb-16"
    >
      <motion.span variants={headingItemVariants} className="font-mono text-brand-accent text-sm tracking-widest uppercase mb-4 block">01 / Career Log</motion.span>
      <motion.h2 variants={headingItemVariants} className="font-display text-5xl font-bold text-brand-text tracking-tighter">
        Professional Experience
      </motion.h2>
    </motion.div>
    
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={headingContainerVariants}
      className="mb-16"
    >
      <motion.span variants={headingItemVariants} className="font-mono text-brand-accent text-sm tracking-widest uppercase mb-4 block">03 / Verified Credentials</motion.span>
      <motion.h2 variants={headingItemVariants} className="font-display text-4xl font-bold text-brand-text tracking-tighter">
        Professional Certifications & Validated Skills
      </motion.h2>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {RESUME_DATA.certifications.map((cert, i) => (
        <a 
          key={cert.title}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full group"
        >
          <TiltCard 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 h-full border border-brand-border hover:border-brand-accent/50 transition-all relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="absolute -right-4 -bottom-4 opacity-[0.05] text-brand-text group-hover:scale-110 transition-transform duration-500">
                <cert.icon size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-brand-accent mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Award size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-brand-text mb-3 leading-snug group-hover:text-brand-accent transition-colors">
                  {cert.title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-brand-muted uppercase tracking-widest">Issuer:</span>
                    <span className="font-display font-medium text-brand-text text-xs">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-brand-muted uppercase tracking-widest">Issued:</span>
                    <span className="font-display font-medium text-brand-text text-xs">{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-border flex justify-between items-center relative z-10 w-full">
              <span className="status-badge text-[9px] px-2 py-0.5">Verified</span>
              <div className="text-brand-muted group-hover:text-brand-accent transition-colors">
                <ExternalLink size={14} />
              </div>
            </div>
          </TiltCard>
        </a>
      ))}
    </div>
  </div>
);

const AnimatedProfileTerminal = () => {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount(prev => {
        if (prev >= 8) {
          return 1;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-card p-10 h-[320px] relative overflow-hidden group flex flex-col justify-start">
      <div className="flex items-center gap-2 mb-8 flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="font-mono text-[10px] text-white/40 ml-4">root@portfolio:~/profile.yaml</span>
      </div>
      <div className="font-mono text-sm space-y-2 flex-grow text-left">
        {/* Line 1: engineer: */}
        {visibleCount >= 1 && (
          <div className="text-brand-accent">engineer:</div>
        )}

        {/* Line 2: name: "Akshay Simha S" */}
        {visibleCount >= 2 && (
          <div className="pl-4">
            <span className="text-white/60">name:</span> <span className="text-[#5adace]">"{RESUME_DATA.name}"</span>
          </div>
        )}

        {/* Line 3: role: "DevOps Engineer" */}
        {visibleCount >= 3 && (
          <div className="pl-4">
            <span className="text-white/60">role:</span> <span className="text-[#5adace]">"DevOps Engineer"</span>
          </div>
        )}

        {/* Line 4: focuses: */}
        {visibleCount >= 4 && (
          <div className="text-brand-accent pt-2">focuses:</div>
        )}

        {/* Focuses list (lines 5, 6, 7) */}
        <ul className="pl-8 text-white/80 list-none space-y-1">
          {visibleCount >= 5 && (
            <li>- Cloud infrastructure</li>
          )}
          {visibleCount >= 6 && (
            <li>- Cloud security</li>
          )}
          {visibleCount >= 7 && (
            <li>- Monitoring and observability</li>
          )}
        </ul>

        {/* Cursor/Terminal prompt */}
        {visibleCount >= 8 && (
          <div className="flex items-center pt-2 text-white/95">
            <span className="text-brand-accent mr-2">$</span>
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-brand-accent"
            />
          </div>
        )}
      </div>
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
        <Cloud size={200} />
      </div>
    </div>
  );
};

const ContactTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/akshaysimha-70b369210/";
  const emailAddress = "simhaa.31@gmail.com";
  const emailSubject = "Discussion: DevOps Opportunities";
  const prewrittenMessage = `Hi Akshay,

I recently reviewed your portfolio. I am reaching out to discuss potential opportunities within our organization. Let's schedule a brief chat to discuss these opportunities.

Best regards,
[Your Name]`;

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(prewrittenMessage)}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(prewrittenMessage);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-24 py-12">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headingContainerVariants}
        className="text-center"
      >
        <motion.span variants={headingItemVariants} className="font-mono text-brand-accent text-xs tracking-[0.4em] mb-4 block uppercase font-bold">--STATUS: LISTENING</motion.span>
        <motion.h2 variants={headingItemVariants} className="font-display text-6xl font-bold text-brand-primary tracking-tighter mb-6">Direct Connect</motion.h2>
        <motion.p variants={headingItemVariants} className="text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed">
          Skip the forms. I prefer direct communication for discussing architectural challenges, infrastructure scaling, or consulting opportunities.
        </motion.p>
      </motion.div>

      {/* Primary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Professional Network */}
        <a 
          href="https://www.linkedin.com/in/akshaysimha-70b369210/"
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full group"
        >
          <TiltCard
            className="glass-card p-10 bg-white border border-brand-border/30 rounded-[2rem] h-full"
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
          </TiltCard>
        </a>

        {/* Direct Inquiry */}
        <a 
          href={mailtoUrl}
          className="block h-full group"
        >
          <TiltCard
            className="glass-card p-10 bg-white border border-brand-border/30 rounded-[2rem] h-full"
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
          </TiltCard>
        </a>
      </div>

      {/* Info Terminal Card */}
      <div className="max-w-4xl mx-auto w-full">
        <AnimatedProfileTerminal />
      </div>

      {/* Footer CTA */}
      <div className="max-w-3xl mx-auto text-center pt-20 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingContainerVariants}
        >
          <motion.h2 variants={headingItemVariants} className="font-display text-4xl font-bold text-brand-primary mb-10 tracking-tight">Let's connect.</motion.h2>
        </motion.div>
        <div className="flex justify-center gap-4">
          <a 
            href="#" 
            className="bg-brand-primary-container text-white border-2 border-brand-primary-container px-8 py-4 rounded font-mono text-xs uppercase tracking-widest hover:bg-brand-accent hover:border-brand-accent transition-all shadow-xl inline-flex items-center justify-center font-bold"
          >
            Download Resume
          </a>
          <button 
            type="button"
            onClick={() => setIsOpen(true)}
            className="border-2 border-brand-primary-container text-brand-primary-container px-8 py-4 rounded font-mono text-xs uppercase tracking-widest hover:bg-brand-primary-container hover:text-white hover:border-brand-primary-container transition-all inline-flex items-center justify-center font-bold cursor-pointer"
          >
            Let's Talk
          </button>
        </div>
      </div>

      {/* Modals & Dialog overlays */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative border border-brand-border/20 z-10"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-brand-muted hover:text-brand-primary transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <span className="font-mono text-brand-accent text-[10px] tracking-widest uppercase mb-2 block">Direct Connect</span>
                <h3 className="font-display text-2xl font-bold text-brand-primary">Choose Your Platform</h3>
                <p className="text-brand-muted text-sm mt-1">Select how you'd like to reach out and connect.</p>
              </div>

              {/* Message Copier Section */}
              <div className="bg-[#F8F9FD] border border-brand-border/30 rounded-2xl p-5 mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[9px] text-brand-accent uppercase tracking-widest font-bold">Suggested Message</span>
                  <button
                    onClick={handleCopyMessage}
                    className="flex items-center gap-1.5 font-mono text-[9px] text-[#2B6CB0] hover:text-brand-accent font-bold transition-colors cursor-pointer uppercase"
                  >
                    {copiedText ? (
                      <>
                        <Check size={12} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        Copy Message
                      </>
                    )}
                  </button>
                </div>
                <div className="font-mono text-xs text-brand-primary/80 bg-white/70 border border-brand-border/20 p-3 rounded-lg max-h-24 overflow-y-auto whitespace-pre-wrap leading-relaxed text-left">
                  {prewrittenMessage}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-brand-border/30 hover:border-brand-accent bg-white hover:bg-slate-50 transition-all group group/btn cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0077b5]/10 rounded-lg flex items-center justify-center text-[#0077b5] group-hover/btn:bg-[#0077b5] group-hover/btn:text-white transition-all">
                      <Linkedin size={20} />
                    </div>
                    <div className="text-left font-sans">
                      <h4 className="font-bold text-brand-primary text-sm group-hover/btn:text-[#2B6CB0] transition-colors">Connect on LinkedIn</h4>
                      <p className="text-xs text-brand-muted">Drop a connection note or message</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-brand-muted group-hover/btn:text-brand-accent transition-colors" />
                </a>

                <a
                  href={mailtoUrl}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-brand-border/30 hover:border-brand-accent bg-white hover:bg-slate-50 transition-all group group/btn cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#ea4335]/10 rounded-lg flex items-center justify-center text-[#ea4335] group-hover/btn:bg-[#ea4335] group-hover/btn:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div className="text-left font-sans">
                      <h4 className="font-bold text-brand-primary text-sm group-hover/btn:text-[#2B6CB0] transition-colors">Direct via Email</h4>
                      <p className="text-xs text-brand-muted">Opens pre-filled email in your client</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-brand-muted group-hover/btn:text-brand-accent transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headingContainerVariants}
      >
        <motion.span variants={headingItemVariants} className="font-mono text-brand-accent text-[10px] tracking-[0.4em] uppercase mb-6 block">Build. Automate. Scale.</motion.span>
        <motion.h2 variants={headingItemVariants} className="font-display text-6xl lg:text-7xl font-bold text-brand-primary leading-[1.1] tracking-tighter mb-16 max-w-4xl">
          Bridging the gap between <span className="text-[#2B6CB0]">Code</span> and <span className="text-[#2B6CB0]">Stability.</span>
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12">
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headingContainerVariants}
      >
        <motion.h2 variants={headingItemVariants} className="font-display text-4xl font-bold text-brand-primary mb-16 tracking-tight">Engineering Philosophy</motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RESUME_DATA.philosophy.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-2xl text-left transition-all duration-300 border bg-white text-brand-text border-brand-border/50 shadow-sm hover:bg-brand-primary-container hover:border-transparent hover:shadow-2xl hover:scale-[1.03] hover:z-10 group"
          >
            <item.icon size={28} className="mb-6 text-brand-accent transition-colors duration-300 group-hover:text-white" />
            <h3 className="font-display text-xl font-bold mb-4 text-brand-primary transition-colors duration-300 group-hover:text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-brand-muted transition-colors duration-300 group-hover:text-white/80">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Career Trajectory (Timeline Style) */}
    <div className="max-w-5xl mx-auto bg-[#F8F9FD] py-16 md:py-24 px-6 md:px-12 rounded-[2rem] md:rounded-[3rem] border border-brand-border/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headingContainerVariants}
        className="mb-12 md:mb-16"
      >
        <motion.span variants={headingItemVariants} className="font-mono text-brand-accent text-xs tracking-[0.4em] mb-4 block">git log --oneline</motion.span>
        <motion.h2 variants={headingItemVariants} className="font-display text-4xl md:text-5xl font-bold text-brand-primary tracking-tighter">Career Trajectory</motion.h2>
      </motion.div>
      
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

  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  const smoothScrollTo = (targetY: number, duration: number = 850) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Elegant Cubic Ease-In-Out easing curve
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + difference * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const onTabClick = (tab: string) => {
    setActiveTab(tab);
    const el = document.getElementById(tab);
    if (el) {
      const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
      const yOffset = -110; // offset matches scroll-mt-32 seamlessly
      smoothScrollTo(yCoordinate + yOffset, 900);
    }
  };

  // Scroll-spy: update active tab as user scrolls down the page
  useEffect(() => {
    const sections = ["Home", "About", "Experience", "Skills", "Projects", "Certifications", "Contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset matches visual threshold
      let currentSection = "Home";
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top - 20) {
            currentSection = sectionId;
          }
        }
      }
      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-brand-bg relative overflow-x-hidden pt-32 selection:bg-brand-accent selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Background Grid */}
      <div className="fixed inset-0 technical-grid opacity-30 pointer-events-none" />
      
      <Header 
        activeTab={activeTab} 
        onTabClick={onTabClick} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      <MobileMenu 
        isOpen={isMenuOpen} 
        activeTab={activeTab} 
        onTabClick={onTabClick} 
        onClose={() => setIsMenuOpen(false)} 
      />

      <main className="max-w-7xl mx-auto px-6 relative pb-32">
        <div className="space-y-48">
          <section id="Home" className="scroll-mt-32">
            <HomeTab setActiveTab={onTabClick} />
          </section>

          <section id="About" className="scroll-mt-32">
            <AboutTab setActiveTab={onTabClick} />
          </section>

          <section id="Experience" className="scroll-mt-32">
            <ExperienceTab />
          </section>

          <section id="Skills" className="scroll-mt-32">
            <SkillsTab />
          </section>

          <section id="Projects" className="scroll-mt-32">
            <ProjectsTab />
          </section>

          <section id="Certifications" className="scroll-mt-32">
            <CertificationsTab />
          </section>

          <section id="Contact" className="scroll-mt-32">
            <ContactTab />
          </section>
        </div>
      </main>

      {/* Footer with copyright message */}
      <footer className="w-full border-t border-brand-primary-container/30 bg-brand-primary text-white/60 py-8 mt-16 relative z-10">
        <div className="w-full px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em]">
          {/* Left */}
          <div className="text-center md:text-left text-white/40 md:w-1/3">
            Designed with Precision
          </div>
          
          {/* Center */}
          <div className="text-center font-medium whitespace-nowrap md:w-1/3">
            &copy; {new Date().getFullYear()} {RESUME_DATA.name}. All Rights Reserved.
          </div>
          
          {/* Right */}
          <div className="text-center md:text-right md:w-1/3">
            <a 
              href="#Home" 
              onClick={(e) => { e.preventDefault(); onTabClick("Home"); }} 
              className="text-white hover:text-brand-accent transition-colors duration-200 cursor-pointer"
            >
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
