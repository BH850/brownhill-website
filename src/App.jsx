import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import brownHillLogo from "../brownhill_marketing_and_media_logo.png";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  Search,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

const heroSlides = [
  {
    label: "Clarity",
    title: "Marketing that makes your brand clearer, more visible, and easier to choose.",
    text:
      "BrownHill Marketing & Media helps service-based businesses and organizations sharpen their message, improve visibility, create better content, and build smarter lead-generation systems.",
  },
  {
    label: "Visibility",
    title: "Your audience cannot choose you if they cannot understand you.",
    text:
      "We connect brand strategy, SEO, content, media, AI, and campaign direction so your business shows up with purpose.",
  },
  {
    label: "Conversion",
    title: "Attention should lead somewhere useful.",
    text:
      "From your website to your content to your calls-to-action, we help your marketing move people toward calls, forms, bookings, consultations, and sales conversations.",
  },
];

const marqueeWords = [
  "BRAND STRATEGY",
  "SEO",
  "CONTENT",
  "AI",
  "LEADS",
  "MESSAGING",
  "MEDIA",
  "VISIBILITY",
  "CAMPAIGNS",
  "CONVERSION",
  "BRAND MANAGEMENT",
  "GROWTH",
];

const outcomes = [
  {
    icon: Target,
    title: "Clarity",
    text:
      "We sharpen your message, offer, audience, and brand voice so people quickly understand what you do and why it matters.",
  },
  {
    icon: Search,
    title: "Visibility",
    text:
      "We improve how your brand shows up through SEO, content, social media, campaigns, and digital presence.",
  },
  {
    icon: TrendingUp,
    title: "Conversion",
    text:
      "We connect attention to action through landing pages, calls-to-action, lead flow, follow-up strategy, and better marketing systems.",
  },
];

const whoWeHelp = [
  "Healthcare & Wellness",
  "Professional Services",
  "Local Service Businesses",
  "Nonprofits & Community Organizations",
  "Corporate & Institutional Brands",
  "Black-Owned Businesses",
];

const growthSystem = [
  {
    label: "Diagnose",
    title: "Review what is working and what is unclear.",
    text:
      "We look at your brand, website, SEO, content, audience, competitors, and lead flow to find the real growth gaps.",
  },
  {
    label: "Clarify",
    title: "Sharpen the message and offer.",
    text:
      "We refine your positioning, voice, service language, audience focus, and brand story so your marketing becomes easier to understand.",
  },
  {
    label: "Build",
    title: "Create the assets and systems.",
    text:
      "We build content direction, service pages, campaign ideas, SEO structure, lead pathways, and AI-assisted workflows.",
  },
  {
    label: "Grow",
    title: "Improve what works.",
    text:
      "We use performance insights and smarter systems to strengthen visibility, content, conversion, and long-term brand growth.",
  },
];

const services = [
  {
    label: "01",
    title: "Brand Strategy",
    text:
      "Messaging, positioning, brand voice, offer clarity, audience definition, and brand management.",
  },
  {
    label: "02",
    title: "Content & Media",
    text:
      "Social media content, campaign ideas, video scripts, creative direction, storytelling, and content planning.",
  },
  {
    label: "03",
    title: "SEO & Visibility",
    text:
      "Website structure, search strategy, local SEO, service pages, content planning, and audience intent.",
  },
  {
    label: "04",
    title: "AI Marketing Systems",
    text:
      "AI-assisted workflows for content, campaigns, customer research, reporting, productivity, and brand voice consistency.",
  },
  {
    label: "05",
    title: "Lead Generation",
    text:
      "Landing pages, calls-to-action, lead flow, follow-up strategy, conversion improvement, and growth pathways.",
  },
];

const aiSignals = [
  "Audience Behavior",
  "Search Demand",
  "Brand Message",
  "Content Gaps",
  "Lead Flow",
  "Performance Data",
];

const signalInsights = {
  "Audience Behavior":
    "Audience behavior shows what people search for, respond to, hesitate over, and trust.",
  "Search Demand":
    "Search demand reveals what customers already want and helps shape SEO, content, and website strategy.",
  "Brand Message":
    "A clear brand message helps people understand what you do, who you serve, and why they should choose you.",
  "Content Gaps":
    "Content gaps show what your audience needs to hear before they trust, click, call, or book.",
  "Lead Flow":
    "Lead flow connects visibility to action through landing pages, forms, follow-up, and sales handoff.",
  "Performance Data":
    "Performance data shows what is working, what is wasting time, and where your marketing should improve next.",
};

const packages = [
  {
    title: "Marketing Diagnostic",
    label: "Start Here",
    description:
      "A focused review of your website, message, SEO, content, brand clarity, lead flow, and AI readiness.",
    items: ["Website review", "SEO scan", "Message audit", "Growth gaps"],
  },
  {
    title: "Growth Blueprint",
    label: "Most Strategic",
    description:
      "A practical roadmap for brand clarity, visibility, content, campaigns, and lead-generation improvement.",
    items: ["Audience strategy", "Messaging plan", "SEO roadmap", "Lead pathway"],
  },
  {
    title: "Marketing System Buildout",
    label: "Most Complete",
    description:
      "A deeper buildout for businesses ready to improve their marketing structure, content engine, AI workflow, and conversion path.",
    items: ["Content system", "AI workflow", "Campaign direction", "Conversion plan"],
  },
];

const campaignGoals = [
  "Improve Brand Clarity",
  "Increase Visibility",
  "Generate Leads",
  "Launch a New Offer",
  "Strengthen Local Presence",
];

const campaignChannels = ["Website", "Social Media", "Email", "Paid Ads", "Local SEO"];

const voiceTraits = [
  "Professional",
  "Bold",
  "Warm",
  "Premium",
  "Community-centered",
  "Culture-rooted",
  "Clear",
  "Strategic",
];

const quickPrompts = [
  "Start my marketing diagnostic",
  "How can my SEO improve?",
  "Help me clarify my brand message.",
  "How do I generate better leads?",
  "What AI tools can improve my marketing?",
  "What package should I start with?",
];

const diagnosticQuestions = [
  {
    key: "organization",
    question: "What type of organization do you run?",
    options: [
      "Healthcare or wellness",
      "Professional services",
      "Local service business",
      "Nonprofit or community organization",
      "Corporate or institutional brand",
      "Other",
    ],
  },
  {
    key: "challenge",
    question: "What is the biggest marketing challenge right now?",
    options: [
      "People do not understand what we do",
      "We need more visibility",
      "We need better leads",
      "Our website is weak",
      "Our content is inconsistent",
      "We need AI support",
    ],
  },
  {
    key: "focus",
    question: "Which growth priority matters most?",
    options: ["Clarity", "Visibility", "Conversion"],
  },
  {
    key: "timeline",
    question: "How soon are you trying to improve your marketing?",
    options: ["Immediately", "This month", "Next 90 days", "Still exploring"],
  },
];

function ButtonLink({ children, variant = "primary", href = "#contact" }) {
  return (
    <a className={`button ${variant}`} href={href}>
      {children} <ArrowRight size={20} />
    </a>
  );
}

function getPackageRecommendation(profile) {
  if (profile.focus === "Conversion") return "Marketing System Buildout";
  if (profile.focus === "Visibility") return "Growth Blueprint";
  return "Marketing Diagnostic";
}

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSignal, setActiveSignal] = useState("Audience Behavior");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoActive, setLogoActive] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  const [activeStudioTool, setActiveStudioTool] = useState("Campaign Builder");
  const [campaignGoal, setCampaignGoal] = useState("Generate Leads");
  const [campaignChannel, setCampaignChannel] = useState("Social Media");
  const [campaignAudience, setCampaignAudience] = useState("service-based business owners");
  const [contentOffer, setContentOffer] = useState("marketing diagnostic");
  const [contentIndustry, setContentIndustry] = useState("service-based business");
  const [selectedTraits, setSelectedTraits] = useState([
    "Professional",
    "Clear",
    "Strategic",
  ]);

  const [submitted, setSubmitted] = useState(false);

  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadStep, setLeadStep] = useState(0);
  const [leadProfile, setLeadProfile] = useState({});
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "assistant",
      text:
        "Hi, I’m Edna — your AI marketing assistant. Ask me about messaging, SEO, content, lead generation, AI marketing, or start a quick diagnostic.",
    },
  ]);

  const chatEndRef = useRef(null);
  const typingTimerRef = useRef(null);

  const currentQuestion = leadStep > 0 ? diagnosticQuestions[leadStep - 1] : null;

  const campaignHook =
    campaignGoal === "Generate Leads"
      ? `Your marketing should help qualified ${campaignAudience} understand the next step clearly.`
      : campaignGoal === "Increase Visibility"
      ? "Your audience may already be searching. The question is whether your brand is showing up clearly."
      : campaignGoal === "Improve Brand Clarity"
      ? "Confused people do not convert. A clearer message makes the brand easier to trust."
      : campaignGoal === "Launch a New Offer"
      ? "A strong launch needs more than an announcement — it needs a reason to care and a clear path to act."
      : "Local growth starts when your community understands who you are, what you offer, and why it matters.";

  const campaignCTA =
    campaignGoal === "Generate Leads"
      ? "Start with a marketing diagnostic."
      : campaignGoal === "Increase Visibility"
      ? "Request a visibility review."
      : campaignGoal === "Improve Brand Clarity"
      ? "Clarify your brand message."
      : campaignGoal === "Launch a New Offer"
      ? "Plan your launch strategy."
      : "Strengthen your local presence.";

  const campaignMetrics =
    campaignChannel === "Website"
      ? ["Page visits", "CTA clicks", "Form submissions", "Conversion rate"]
      : campaignChannel === "Social Media"
      ? ["Reach", "Saves", "Profile visits", "Inbound messages"]
      : campaignChannel === "Email"
      ? ["Open rate", "Click rate", "Replies", "Booked calls"]
      : campaignChannel === "Paid Ads"
      ? ["Cost per lead", "CTR", "Landing page conversion", "Lead quality"]
      : ["Local rankings", "Google actions", "Calls", "Direction requests"];

  const contentIdeas = [
    `Post: 3 signs your ${contentIndustry} needs a clearer marketing message.`,
    `Email: Why your next ${contentOffer} should start with strategy, not guesswork.`,
    "Video: A 30-second breakdown of the biggest visibility mistake in your industry.",
    `Blog: How AI can help a ${contentIndustry} create smarter content without sounding generic.`,
    `CTA: Book a ${contentOffer} to identify your next growth opportunity.`,
  ];

  const brandVoiceProfile = selectedTraits.length
    ? `Your brand voice should sound ${selectedTraits
        .map((trait) => trait.toLowerCase())
        .join(", ")}. This tone can guide website copy, social messaging, ad language, email tone, campaign direction, and sales follow-up.`
    : "Select a few traits to build a brand voice profile.";

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!logoActive) return;

    const timer = setTimeout(() => {
      setLogoActive(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [logoActive]);

  useEffect(() => {
    function handleScroll() {
      setNavScrolled(window.scrollY > 80);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (chatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isTyping, chatOpen]);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, []);

  function toggleTrait(trait) {
    setSelectedTraits((traits) =>
      traits.includes(trait)
        ? traits.filter((item) => item !== trait)
        : [...traits, trait]
    );
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  function handleLogoClick() {
    setLogoActive(true);
    setMobileMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function startDiagnostic() {
    if (isTyping) return;

    setChatOpen(true);
    setLeadProfile({});
    setLeadStep(1);
    setChatHistory((messages) => [
      ...messages,
      { sender: "assistant", text: diagnosticQuestions[0].question },
    ]);
  }

  function handleDiagnosticAnswer(answer) {
    if (!currentQuestion || isTyping) return;

    const updatedProfile = {
      ...leadProfile,
      [currentQuestion.key]: answer,
    };

    setChatHistory((messages) => [
      ...messages,
      { sender: "user", text: answer },
    ]);
    setChatMessage("");
    setLeadProfile(updatedProfile);
    setIsTyping(true);

    typingTimerRef.current = setTimeout(() => {
      if (leadStep < diagnosticQuestions.length) {
        setLeadStep((step) => step + 1);
        setChatHistory((messages) => [
          ...messages,
          { sender: "assistant", text: diagnosticQuestions[leadStep].question },
        ]);
      } else {
        const recommendation = getPackageRecommendation(updatedProfile);

        setLeadStep(0);
        setChatHistory((messages) => [
          ...messages,
          {
            sender: "assistant",
            text: `Based on your answers, I recommend starting with ${recommendation}. Your next move should focus on ${updatedProfile.focus?.toLowerCase() || "clarity"}, then connect that work to visibility and lead flow.`,
          },
        ]);
      }

      setIsTyping(false);
    }, 700);
  }

  function getEdnaResponse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("seo") || lower.includes("search")) {
      return "SEO starts with visibility and intent. A strong SEO review looks at website structure, keyword opportunities, local search presence, service pages, competitors, and Google Business Profile performance.";
    }

    if (lower.includes("brand") || lower.includes("message") || lower.includes("clarity")) {
      return "Brand clarity means people can quickly understand what you do, who you help, why it matters, and what step to take next. That clarity should show up across your website, content, campaigns, and follow-up.";
    }

    if (lower.includes("ad") || lower.includes("campaign")) {
      return "Smart campaigns are built before they are launched. The audience, offer, hook, creative direction, landing page, follow-up path, and performance metrics all need to work together.";
    }

    if (lower.includes("lead") || lower.includes("sales") || lower.includes("conversion")) {
      return "Lead generation works best when visibility, messaging, trust, creative, and follow-up are connected. Attention should move toward action.";
    }

    if (lower.includes("ai") || lower.includes("automation")) {
      return "AI should make marketing sharper, not generic. It can support research, content planning, campaign concepts, SEO insights, audience mapping, reporting, and brand voice consistency.";
    }

    if (lower.includes("package") || lower.includes("cost") || lower.includes("price")) {
      return "A smart starting point would be the Marketing Diagnostic. If you need a full roadmap, the Growth Blueprint is stronger. If you need deeper marketing structure and implementation planning, the Marketing System Buildout is the better fit.";
    }

    return "Great question. The work usually starts by clarifying your message, audience, offer, visibility gaps, content direction, and conversion path — then building a smarter marketing system around those priorities.";
  }

  function handleChatSubmit(event, presetMessage = "") {
    if (event) event.preventDefault();
    if (isTyping) return;

    const userMessage = (presetMessage || chatMessage).trim();
    if (!userMessage) return;

    if (leadStep > 0) {
      handleDiagnosticAnswer(userMessage);
      return;
    }

    if (userMessage.toLowerCase().includes("diagnostic")) {
      setChatMessage("");
      setChatHistory((messages) => [
        ...messages,
        { sender: "user", text: userMessage },
      ]);
      setTimeout(startDiagnostic, 150);
      return;
    }

    setChatHistory((messages) => [
      ...messages,
      { sender: "user", text: userMessage },
    ]);
    setChatMessage("");
    setIsTyping(true);

    typingTimerRef.current = setTimeout(() => {
      setChatHistory((messages) => [
        ...messages,
        { sender: "assistant", text: getEdnaResponse(userMessage) },
      ]);
      setIsTyping(false);
    }, 700);
  }

  return (
    <main className="site theme-dark editorial-site">
      <section className="editorial-hero hero-with-engine">
        <div className="glow glow-left" />
        <div className="glow glow-right" />

        <nav className={`nav editorial-nav ${navScrolled ? "nav-scrolled" : ""}`}>
          <button
            type="button"
            className={`brand interactive-brand ${logoActive ? "active" : ""} ${
              navScrolled ? "logo-scrolled" : ""
            }`}
            onClick={handleLogoClick}
            aria-label="Go to homepage"
          >
            <span className="brand-logo-shell">
              <img
                src={brownHillLogo}
                alt="BrownHill Marketing & Media logo"
                className="brand-logo"
              />

              <span className="logo-orbit-dot dot-one" />
              <span className="logo-orbit-dot dot-two" />
              <span className="logo-orbit-dot dot-three" />
              <span className="logo-orbit-dot dot-four" />
            </span>

            <span className="brand-text-wrap">
              <span className="brand-subtitle">
                Clarity • Visibility • Conversion
              </span>

              <span className="logo-ai-status">AI Signal Activated</span>
            </span>
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <a href="#what-we-do" onClick={closeMobileMenu}>What We Do</a>
            <a href="#who-we-help" onClick={closeMobileMenu}>Who We Help</a>
            <a href="#growth-system" onClick={closeMobileMenu}>System</a>
            <a href="#services" onClick={closeMobileMenu}>Services</a>
            <a href="#ai" onClick={closeMobileMenu}>AI</a>
            <a href="#packages" onClick={closeMobileMenu}>Packages</a>
            <a href="#bio" onClick={closeMobileMenu}>Founder</a>
            <a href="#careers" onClick={closeMobileMenu}>Careers</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </div>
        </nav>

        <div className="hero-engine-grid clearer-hero-grid">
          <div className="hero-engine-copy">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="eyebrow">
                <Sparkles size={16} /> {heroSlides[activeSlide].label}
              </p>
              <h1>{heroSlides[activeSlide].title}</h1>
              <p className="hero-copy">{heroSlides[activeSlide].text}</p>
            </motion.div>

            <div className="hero-actions hero-actions-left">
              <button
                type="button"
                className="button diagnostic-cta"
                onClick={startDiagnostic}
              >
                Start a Marketing Diagnostic <ArrowRight size={20} />
              </button>

              <ButtonLink variant="secondary" href="#services">
                View Services
              </ButtonLink>
            </div>

            <div className="hero-proof-row">
              <span>Brand Strategy</span>
              <span>SEO</span>
              <span>Content</span>
              <span>AI Systems</span>
              <span>Lead Flow</span>
            </div>

            <div className="slider-dots editorial-dots hero-dots-left">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  className={index === activeSlide ? "active" : ""}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${slide.label}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero-engine-card-wrap"
          >
            <div className="hero-engine-card">
              <div className="ai-card-top">
                <div className="ai-orb-small">
                  <Bot size={26} />
                </div>
                <div>
                  <p>BrownHill Growth System</p>
                  <span>Diagnose • Clarify • Build • Grow</span>
                </div>
              </div>

              <div className="ai-orbit">
                <div className="orbit-ring ring-one" />
                <div className="orbit-ring ring-two" />
                <div className="orbit-ring ring-three" />

                <motion.div
                  className="orbit-chip chip-one"
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  CLARITY
                </motion.div>

                <motion.div
                  className="orbit-chip chip-two"
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  SEO
                </motion.div>

                <motion.div
                  className="orbit-chip chip-three"
                  animate={{ x: [-8, 8, -8] }}
                  transition={{ duration: 5.5, repeat: Infinity }}
                >
                  CONTENT
                </motion.div>

                <motion.div
                  className="orbit-chip chip-four"
                  animate={{ x: [8, -8, 8] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                >
                  LEADS
                </motion.div>

                <div className="ai-core">
                  <Sparkles size={38} />
                  <p>GROWTH</p>
                  <span>Marketing Intelligence System</span>
                </div>
              </div>

              <div className="signal-list">
                {aiSignals.map((signal) => (
                  <button
                    key={signal}
                    type="button"
                    className={activeSignal === signal ? "active" : ""}
                    onClick={() => setActiveSignal(signal)}
                  >
                    {signal}
                  </button>
                ))}
              </div>

              <div className="ai-insight-box">
                <p className="ai-insight-label">Active Signal</p>
                <h3>{activeSignal}</h3>
                <p>{signalInsights[activeSignal]}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="creative-marquee">
        <div className="creative-marquee-track">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, index) => (
            <span key={`${word}-${index}`}>{word}</span>
          ))}
        </div>
      </div>

      <section id="what-we-do" className="section editorial-section clear-direction-section">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">What We Do</p>
            <h2>We turn unclear marketing into a clearer growth system.</h2>
          </div>

          <div>
            <p className="large-editorial-copy">
              Your brand should be easy to understand, easy to find, and easy to act on.
            </p>
            <p>
              BrownHill helps service-based businesses and organizations improve the
              way they communicate, show up online, create content, use AI, and guide
              potential customers toward the next step.
            </p>
          </div>
        </div>

        <div className="outcome-grid">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;

            return (
              <div key={outcome.title} className="outcome-card">
                <Icon size={30} />
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="who-we-help" className="section editorial-section dark-panel who-help-section">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">Who We Help</p>
            <h2>Built for organizations with something real to offer.</h2>
          </div>

          <div>
            <p>
              We work best with businesses and organizations that have potential,
              but need stronger messaging, better visibility, cleaner content, and a
              smarter path from attention to action.
            </p>

            <div className="who-help-tags">
              {whoWeHelp.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="growth-system" className="section editorial-section growth-system-section">
        <div className="centered wide">
          <p className="section-label gold">The BrownHill Growth System</p>
          <h2>Diagnose. Clarify. Build. Grow.</h2>
          <p>
            The work is creative, but the process is practical. Every move points
            back to clarity, visibility, and conversion.
          </p>
        </div>

        <div className="growth-system-grid">
          {growthSystem.map((step, index) => (
            <div key={step.label} className="growth-system-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p className="system-label">{step.label}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section editorial-section dark-panel">
        <div className="centered wide">
          <p className="section-label gold">Services</p>
          <h2>Clear services tied to real business outcomes.</h2>
          <p>
            No vague agency menu. These are the core areas that help your brand
            become clearer, more visible, and easier to choose.
          </p>
        </div>

        <div className="services-grid clear-services-grid">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-direction-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <span>{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="ai" className="section editorial-section ai-direction-section">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">AI + Marketing Intelligence</p>
            <h2>AI should make your marketing sharper, not generic.</h2>
          </div>

          <div>
            <p>
              We use AI to support research, content planning, SEO insight, campaign
              ideas, reporting, customer understanding, and brand voice consistency.
              The goal is speed with better thinking — not more noise.
            </p>
          </div>
        </div>

        <div className="command-shell editorial-command">
          <div className="command-tabs">
            {["Campaign Builder", "Brand Voice Builder", "Content Engine"].map(
              (tool) => (
                <button
                  key={tool}
                  type="button"
                  className={activeStudioTool === tool ? "active" : ""}
                  onClick={() => setActiveStudioTool(tool)}
                >
                  {tool}
                </button>
              )
            )}
          </div>

          {activeStudioTool === "Campaign Builder" && (
            <div className="command-grid">
              <div className="command-controls">
                <label>
                  Goal
                  <select
                    value={campaignGoal}
                    onChange={(event) => setCampaignGoal(event.target.value)}
                  >
                    {campaignGoals.map((goal) => (
                      <option key={goal}>{goal}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Primary Channel
                  <select
                    value={campaignChannel}
                    onChange={(event) => setCampaignChannel(event.target.value)}
                  >
                    {campaignChannels.map((channel) => (
                      <option key={channel}>{channel}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Audience
                  <input
                    value={campaignAudience}
                    onChange={(event) => setCampaignAudience(event.target.value)}
                    placeholder="business owners, patients, families, executives..."
                  />
                </label>
              </div>

              <div className="command-output">
                <p className="ai-insight-label">Generated Campaign Direction</p>
                <h3>{campaignGoal}</h3>
                <p>
                  <strong>Angle:</strong> Use {campaignChannel.toLowerCase()} to help{" "}
                  {campaignAudience} understand the problem, trust the brand, and
                  take a clear next step.
                </p>
                <p>
                  <strong>Hook:</strong> {campaignHook}
                </p>
                <p>
                  <strong>CTA:</strong> {campaignCTA}
                </p>

                <div className="metric-row">
                  {campaignMetrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeStudioTool === "Brand Voice Builder" && (
            <div className="command-grid">
              <div className="command-controls">
                <p className="ai-insight-label">Choose Brand Traits</p>

                <div className="trait-grid">
                  {voiceTraits.map((trait) => (
                    <button
                      key={trait}
                      type="button"
                      className={selectedTraits.includes(trait) ? "active" : ""}
                      onClick={() => toggleTrait(trait)}
                    >
                      {trait}
                    </button>
                  ))}
                </div>
              </div>

              <div className="command-output">
                <p className="ai-insight-label">Generated Brand Voice Profile</p>
                <h3>Voice Recommendation</h3>
                <p>{brandVoiceProfile}</p>

                <div className="voice-sample">
                  <p className="ai-insight-label">Sample Website Line</p>
                  <p>
                    “We help service-based brands become clearer, more visible,
                    and easier to choose through strategy, content, SEO, AI, and
                    smarter lead-generation systems.”
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeStudioTool === "Content Engine" && (
            <div className="command-grid">
              <div className="command-controls">
                <label>
                  Business Type
                  <input
                    value={contentIndustry}
                    onChange={(event) => setContentIndustry(event.target.value)}
                    placeholder="healthcare clinic, law firm, consultant..."
                  />
                </label>

                <label>
                  Offer
                  <input
                    value={contentOffer}
                    onChange={(event) => setContentOffer(event.target.value)}
                    placeholder="diagnostic, consultation, service package..."
                  />
                </label>
              </div>

              <div className="command-output">
                <p className="ai-insight-label">Generated Content Engine Preview</p>
                <h3>Content Ideas for a {contentIndustry}</h3>

                <div className="content-list">
                  {contentIdeas.map((idea) => (
                    <div key={idea}>
                      <MessageSquareText size={18} />
                      <p>{idea}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="packages" className="section editorial-section dark-panel">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">Ways to Start</p>
            <h2>Start with the level of help your marketing actually needs.</h2>
          </div>

          <div>
            <p>
              Start with a diagnostic, move into a strategy roadmap, or build a
              fuller marketing system around content, AI, visibility, and lead flow.
            </p>
          </div>
        </div>

        <div className="package-grid editorial-package-grid">
          {packages.map((pack) => (
            <div key={pack.title} className="package-card">
              <p className="package-label">{pack.label}</p>
              <h3>{pack.title}</h3>
              <p>{pack.description}</p>

              <div className="package-list">
                {pack.items.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={16} /> {item}
                  </span>
                ))}
              </div>

              <a href="#contact">Request This Package</a>
            </div>
          ))}
        </div>
      </section>

      <section id="bio" className="section editorial-section founder-bio-section">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">Founder’s Note</p>
            <h2>Built by vision. Driven by culture.</h2>
          </div>

          <div>
            <p className="large-editorial-copy">
              Great marketing should make people feel seen, understood, and moved to act.
            </p>

            <p>
              Founded by Michael Hill, BrownHill brings together strategy, culture,
              creativity, media, and AI to help organizations become clearer, more
              visible, and more trusted.
            </p>

            <p>
              The work is rooted in discipline, storytelling, and the belief that
              brands grow when they understand both the numbers and the people behind them.
            </p>

            <div className="bio-signature">
              <span>Michael Hill</span>
              <p>Founder, BrownHill Marketing & Media</p>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="section editorial-section dark-panel careers-section">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">Future Collaborators</p>
            <h2>We are building a creative network.</h2>
          </div>

          <div>
            <p>
              BrownHill is building a network of strategists, designers, writers,
              media thinkers, AI builders, content creators, and growth-minded collaborators.
            </p>

            <p>
              We are not hiring for full-time roles at this time, but we are always
              open to connecting with talented people who believe in culture,
              creativity, strategy, and measurable impact.
            </p>

            <div className="career-tags">
              <span>Creative Strategy</span>
              <span>Social Media</span>
              <span>Content Production</span>
              <span>Design</span>
              <span>SEO</span>
              <span>Paid Media</span>
              <span>AI Marketing Systems</span>
              <span>Brand Management</span>
            </div>

            <a className="career-link" href="#contact">
              Connect for future opportunities <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact editorial-contact">
        <div className="two-col">
          <div>
            <p className="section-label gold">Start the Conversation</p>
            <h2>Let’s make your marketing clearer, more visible, and easier to act on.</h2>
            <p>
              Request a marketing diagnostic. We’ll review your goals, message,
              website, content, SEO, AI readiness, and lead-generation path.
            </p>

            <div className="contact-list">
              <p><Phone size={20} /> 850-221-3089</p>
              <p><Mail size={20} /> info@emailaddress.com</p>
              <p><Globe2 size={20} /> www.websiteaddress.com</p>
              <p><MapPin size={20} /> Houston, TX</p>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label>Name</label>
            <input placeholder="Your name" />

            <label>Email</label>
            <input type="email" placeholder="you@example.com" />

            <label>Organization / Business</label>
            <input placeholder="Company or organization name" />

            <label>Primary Interest</label>
            <select>
              <option>Marketing Diagnostic</option>
              <option>Growth Blueprint</option>
              <option>Marketing System Buildout</option>
              <option>Brand Strategy</option>
              <option>SEO / Search Visibility</option>
              <option>Content & Media</option>
              <option>AI Marketing Systems</option>
              <option>Lead Generation</option>
            </select>

            <label>What growth challenge should we help solve?</label>
            <textarea placeholder="Tell us where your marketing feels unclear, inconsistent, invisible, or disconnected from leads..." />

            <button type="submit">Request Diagnostic</button>

            {submitted && (
              <p className="success">
                Thank you. This demo form is ready to connect to an email, CRM, or booking system.
              </p>
            )}
          </form>
        </div>
      </section>

      <div className={`ai-chat ${chatOpen ? "open" : ""}`}>
        {chatOpen && (
          <div className="ai-chat-panel">
            <div className="ai-chat-header">
              <div>
                <p>Edna, your AI assistant</p>
                <span>Marketing guidance for clarity, visibility, and conversion</span>
              </div>

              <button type="button" onClick={() => setChatOpen(false)}>
                ×
              </button>
            </div>

            <div className="ai-chat-messages">
              {chatHistory.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`chat-bubble ${message.sender}`}
                >
                  {message.text}
                </div>
              ))}

              {isTyping && (
                <div className="chat-bubble assistant typing-bubble">
                  <span />
                  <span />
                  <span />
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {currentQuestion && !isTyping && (
              <div className="diagnostic-options">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleDiagnosticAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            <div className="edna-quick-prompts">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleChatSubmit(null, prompt)}
                  disabled={isTyping}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form className="ai-chat-form" onSubmit={handleChatSubmit}>
              <input
                value={chatMessage}
                onChange={(event) => setChatMessage(event.target.value)}
                placeholder={
                  leadStep > 0
                    ? "Type your answer..."
                    : "Ask about messaging, SEO, AI, or leads..."
                }
                disabled={isTyping}
              />

              <button type="submit" aria-label="Send message" disabled={isTyping}>
                <Send size={18} />
              </button>
            </form>
          </div>
        )}

        <button
          type="button"
          className="ai-chat-button"
          onClick={() => setChatOpen((open) => !open)}
        >
          <Bot size={24} />
          <span>Ask Edna</span>
        </button>
      </div>

      <footer>
        © {new Date().getFullYear()} BrownHill Marketing & Media, LLC. Brand
        strategy, content, SEO, AI marketing systems, media, and lead generation.
        All rights reserved.
      </footer>
    </main>
  );
}
