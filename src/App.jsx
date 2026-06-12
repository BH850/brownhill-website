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
  Megaphone,
  Menu,
  MessageSquareText,
  Phone,
  Send,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";

const heroSlides = [
  {
    label: "Creative Intelligence",
    title: "We build brands that people notice, trust, and choose.",
    text:
      "We are a creative marketing and media firm built at the intersection of culture, strategy, AI, storytelling, and growth.",
  },
  {
    label: "Agency POV",
    title: "Strategy with rhythm. Creative with reason. Growth with receipts.",
    text:
      "The work starts with audience insight, moves through brand clarity, and turns into campaigns people can feel — and act on.",
  },
  {
    label: "AI + Culture",
    title: "Culture gives the brand soul. AI gives it speed.",
    text:
      "We use AI to move more intelligently without sounding generic — sharpening content, campaigns, visibility, and lead generation.",
  },
];

const marqueeWords = [
  "BRAND STRATEGY",
  "SEO",
  "CULTURE",
  "AI",
  "CAMPAIGNS",
  "CONTENT",
  "MEDIA",
  "MOTION",
  "LEADS",
  "STORYTELLING",
  "ANALYTICS",
  "GROWTH",
];

const aiSignals = [
  "Audience Behavior",
  "Search Demand",
  "Brand Voice",
  "Campaign Ideas",
  "Lead Flow",
  "Performance Data",
];

const signalInsights = {
  "Audience Behavior":
    "Audience behavior reveals what people search for, respond to, hesitate over, and trust.",
  "Search Demand":
    "Search demand shows what customers already want and helps shape SEO, content, and website strategy.",
  "Brand Voice":
    "Brand voice controls how your organization sounds, feels, and earns trust across every touchpoint.",
  "Campaign Ideas":
    "Strong campaigns connect audience pain points, cultural insight, clear offers, and measurable action.",
  "Lead Flow":
    "Lead flow connects visibility to revenue through landing pages, forms, follow-up, and sales handoff.",
  "Performance Data":
    "Performance data shows what is working, what is wasting money, and where to optimize next.",
};

const povCards = [
  {
    icon: Sparkles,
    title: "Insight into identity",
    text:
      "We find the audience truth, sharpen the message, and shape a brand people can understand quickly.",
  },
  {
    icon: Megaphone,
    title: "Identity into attention",
    text:
      "We turn brand clarity into campaigns, content, media direction, and creative moments that earn attention.",
  },
  {
    icon: TrendingUp,
    title: "Attention into growth",
    text:
      "We connect the creative work to CTAs, landing pages, lead flow, follow-up, and measurable performance.",
  },
];

const intelligenceEngine = [
  {
    label: "Signal",
    title: "Read the market",
    text:
      "We look at search demand, audience behavior, brand perception, content gaps, and lead-flow signals.",
  },
  {
    label: "Story",
    title: "Shape the message",
    text:
      "We turn the signal into positioning, campaign angles, creative direction, and brand voice.",
  },
  {
    label: "System",
    title: "Build the path",
    text:
      "We connect the message to content, SEO, landing pages, calls-to-action, and follow-up.",
  },
  {
    label: "Scale",
    title: "Improve the growth loop",
    text:
      "We use performance data and AI-assisted workflows to refine what works and remove what does not.",
  },
];

const featuredCapabilities = [
  {
    label: "01",
    title: "Brand Strategy",
    text:
      "Positioning, voice, identity, audience clarity, service messaging, and brand management.",
  },
  {
    label: "02",
    title: "Campaign Development",
    text:
      "Creative angles, hooks, offers, media direction, launch ideas, and performance-ready messaging.",
  },
  {
    label: "03",
    title: "SEO + Visibility",
    text:
      "Website structure, search strategy, local visibility, content planning, and audience intent.",
  },
  {
    label: "04",
    title: "AI Content Systems",
    text:
      "AI-assisted workflows for social content, email ideas, landing pages, video scripts, and reporting.",
  },
];

const ideaToInfluence = [
  {
    label: "The Insight",
    text:
      "What does the audience need to understand, believe, feel, or trust before they move?",
  },
  {
    label: "The Big Idea",
    text:
      "What creative angle makes the message memorable, useful, and worth paying attention to?",
  },
  {
    label: "The Growth Move",
    text:
      "Where should the attention go next — a page, a call, a form, an offer, or a conversation?",
  },
];

const packages = [
  {
    title: "The Signal Scan",
    label: "Start Here",
    description:
      "A focused diagnosis of your website, SEO, brand message, content, lead flow, and AI readiness.",
    items: ["Website review", "SEO scan", "Brand clarity check", "Growth gaps"],
  },
  {
    title: "The Growth Blueprint",
    label: "Most Strategic",
    description:
      "A practical roadmap for positioning, visibility, campaigns, content, and lead generation.",
    items: ["Audience strategy", "SEO roadmap", "Campaign direction", "Lead plan"],
  },
  {
    title: "The Creative Intelligence System",
    label: "AI-Powered",
    description:
      "An AI-assisted marketing system for content, campaigns, brand voice, and performance improvement.",
    items: ["AI workflow", "Prompt system", "Content engine", "Reporting direction"],
  },
];

const industries = [
  "Healthcare",
  "Professional Services",
  "Local Service Business",
  "Nonprofit",
  "Corporate Brand",
  "Black-Owned Business",
];

const campaignGoals = [
  "Increase Visibility",
  "Generate Leads",
  "Improve Brand Trust",
  "Launch a New Offer",
  "Grow Local Awareness",
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
      "People do not know we exist",
      "Our message is unclear",
      "We need more leads",
      "Our website is weak",
      "We need better content",
      "We need AI support",
    ],
  },
  {
    key: "focus",
    question: "Which growth priority matters most?",
    options: ["Visibility", "Brand", "Revenue"],
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
  if (profile.focus === "Revenue") return "The Creative Intelligence System";
  if (profile.focus === "Brand") return "The Growth Blueprint";
  return "The Signal Scan";
}

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSignal, setActiveSignal] = useState("Audience Behavior");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoActive, setLogoActive] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  const [activeStudioTool, setActiveStudioTool] = useState("Campaign Generator");
  const [campaignIndustry, setCampaignIndustry] = useState("Professional Services");
  const [campaignGoal, setCampaignGoal] = useState("Generate Leads");
  const [campaignChannel, setCampaignChannel] = useState("Social Media");
  const [campaignAudience, setCampaignAudience] = useState("decision-makers");
  const [contentOffer, setContentOffer] = useState("strategy consultation");
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
        "Hi, I’m Edna — your AI marketing assistant. Ask me about SEO, branding, advertising, lead generation, AI marketing, or start a quick diagnostic.",
    },
  ]);

  const chatEndRef = useRef(null);
  const typingTimerRef = useRef(null);

  const currentQuestion = leadStep > 0 ? diagnosticQuestions[leadStep - 1] : null;

  const campaignHook =
    campaignGoal === "Generate Leads"
      ? `Stop losing qualified ${campaignAudience} because your message is unclear.`
      : campaignGoal === "Increase Visibility"
      ? "Your audience is already searching. The question is whether your brand is showing up."
      : campaignGoal === "Improve Brand Trust"
      ? "Trust is built before the first conversation starts."
      : campaignGoal === "Launch a New Offer"
      ? "A strong launch needs more than an announcement — it needs a reason to care."
      : "Local growth starts when your community knows why you matter.";

  const campaignCTA =
    campaignGoal === "Generate Leads"
      ? "Schedule a strategy consultation."
      : campaignGoal === "Increase Visibility"
      ? "Request a visibility audit."
      : campaignGoal === "Improve Brand Trust"
      ? "Build your brand blueprint."
      : campaignGoal === "Launch a New Offer"
      ? "Plan your launch campaign."
      : "Grow your local presence.";

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
    `Post: 3 signs your ${contentIndustry} needs a stronger marketing system.`,
    `Email: Why your next ${contentOffer} should start with strategy, not guesswork.`,
    "Video: A 30-second breakdown of the biggest visibility mistake in your industry.",
    `Blog: How AI can help a ${contentIndustry} create smarter content without sounding generic.`,
    `CTA: Book a ${contentOffer} to identify your next growth opportunity.`,
  ];

  const brandVoiceProfile = selectedTraits.length
    ? `Your brand voice should sound ${selectedTraits
        .map((trait) => trait.toLowerCase())
        .join(", ")}. This tone can guide website copy, social messaging, ad language, email tone, and campaign direction.`
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
            text: `Based on your answers, I recommend starting with ${recommendation}. The next move should be strategic, creative, and built around your actual growth priority.`,
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

    if (lower.includes("brand") || lower.includes("message")) {
      return "Branding is more than a logo. The real work is clarifying positioning, voice, story, customer perception, and the message that makes people trust and remember the organization.";
    }

    if (lower.includes("ad") || lower.includes("campaign")) {
      return "Smart campaigns are built before they are launched. The audience, offer, hook, creative direction, landing page, follow-up path, and performance metrics all need to work together.";
    }

    if (lower.includes("lead") || lower.includes("sales")) {
      return "Lead generation works best when visibility, messaging, trust, creative, and follow-up are connected. Attention should move toward action.";
    }

    if (lower.includes("ai") || lower.includes("automation")) {
      return "AI should make marketing sharper, not generic. It can support research, content planning, campaign concepts, SEO insights, audience mapping, and reporting while keeping the brand voice human.";
    }

    if (lower.includes("package") || lower.includes("cost") || lower.includes("price")) {
      return "A smart starting point would be The Signal Scan. If you need a full roadmap, The Growth Blueprint is stronger. If you need AI-assisted execution systems, The Creative Intelligence System is the better fit.";
    }

    return "Great question. The work usually starts by clarifying the market, message, audience, visibility gaps, creative direction, and conversion path — then building smarter strategy across SEO, branding, advertising, content, AI, and lead generation.";
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
                Creative Intelligence • AI • Media • Growth
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
            <a href="#engine" onClick={closeMobileMenu}>Engine</a>
            <a href="#pov" onClick={closeMobileMenu}>POV</a>
            <a href="#work" onClick={closeMobileMenu}>Work</a>
            <a href="#studio" onClick={closeMobileMenu}>Studio</a>
            <a href="#packages" onClick={closeMobileMenu}>Packages</a>
            <a href="#bio" onClick={closeMobileMenu}>Founder</a>
            <a href="#careers" onClick={closeMobileMenu}>Careers</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </div>
        </nav>

        <div className="hero-engine-grid">
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
              <ButtonLink>Start a Strategy Conversation</ButtonLink>
              <button
                type="button"
                className="button secondary diagnostic-cta"
                onClick={startDiagnostic}
              >
                Start Diagnostic <ArrowRight size={20} />
              </button>
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
                  <p>Creative Intelligence Engine</p>
                  <span>Culture • Creative • AI • Growth</span>
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
                  STORY
                </motion.div>

                <motion.div
                  className="orbit-chip chip-two"
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  AI
                </motion.div>

                <motion.div
                  className="orbit-chip chip-three"
                  animate={{ x: [-8, 8, -8] }}
                  transition={{ duration: 5.5, repeat: Infinity }}
                >
                  BRAND
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
                  <p>BROWNHILL</p>
                  <span>Creative Signal Engine</span>
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

      <section id="engine" className="section editorial-section intelligence-engine-section">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">Creative Intelligence Engine</p>
            <h2>The work has a system behind it.</h2>
          </div>

          <div>
            <p className="large-editorial-copy">
              Creativity gets attention. Intelligence gives it direction.
            </p>
            <p>
              The engine is how we turn culture, AI, search behavior, audience
              insight, and performance data into marketing that feels sharp and
              moves with purpose.
            </p>
          </div>
        </div>

        <div className="engine-wrap">
          <div className="engine-visual">
            <div className="engine-orbit orbit-one" />
            <div className="engine-orbit orbit-two" />
            <div className="engine-orbit orbit-three" />

            <div className="engine-core">
              <Sparkles size={42} />
              <p>BROWNHILL</p>
              <span>Creative Signal Engine</span>
            </div>

            <div className="engine-chip chip-signal">Signal</div>
            <div className="engine-chip chip-story">Story</div>
            <div className="engine-chip chip-system">System</div>
            <div className="engine-chip chip-scale">Scale</div>
          </div>

          <div className="engine-steps">
            {intelligenceEngine.map((step) => (
              <div key={step.label} className="engine-step-card">
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pov" className="section editorial-section">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">Agency Point of View</p>
            <h2>We do not believe in random marketing.</h2>
          </div>

          <div>
            <p className="large-editorial-copy">
              A brand grows when the message is clear, the creative has a reason,
              the audience feels seen, and every touchpoint leads somewhere useful.
            </p>
            <p>
              The work connects culture, strategy, AI-assisted execution, search
              visibility, media, and storytelling into one sharper growth system.
            </p>
          </div>
        </div>

        <div className="pov-grid">
          {povCards.map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.title} className="pov-card">
                <Icon size={28} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="work" className="section editorial-section dark-panel">
        <div className="centered wide">
          <p className="section-label gold">Featured Capabilities</p>
          <h2>Less service menu. More creative operating system.</h2>
          <p>
            The work has taste, strategy, and a clear point of view. These are the core moves.
          </p>
        </div>

        <div className="featured-work-grid">
          {featuredCapabilities.map((item) => (
            <motion.div
              key={item.title}
              className="featured-work-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="studio" className="section editorial-section">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">Creative Intelligence Studio</p>
            <h2>AI tools that show how strategy takes shape.</h2>
          </div>

          <div>
            <p>
              The studio gives prospective clients a quick sense of how campaigns,
              brand voice, and content direction can be shaped before the first consultation.
            </p>
          </div>
        </div>

        <div className="command-shell editorial-command">
          <div className="command-tabs">
            {["Campaign Generator", "Brand Voice Builder", "Content Engine"].map(
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

          {activeStudioTool === "Campaign Generator" && (
            <div className="command-grid">
              <div className="command-controls">
                <label>
                  Industry
                  <select
                    value={campaignIndustry}
                    onChange={(event) => setCampaignIndustry(event.target.value)}
                  >
                    {industries.map((industry) => (
                      <option key={industry}>{industry}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Campaign Goal
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
                    placeholder="decision-makers, families, patients, founders..."
                  />
                </label>
              </div>

              <div className="command-output">
                <p className="ai-insight-label">Generated Campaign Direction</p>
                <h3>{campaignIndustry} Campaign</h3>
                <p>
                  <strong>Angle:</strong> Use {campaignChannel.toLowerCase()} to
                  help {campaignAudience} understand why the brand is credible,
                  relevant, and ready to solve the problem.
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
                    “We help serious organizations become clearer, more visible,
                    and more trusted through strategy, culture, AI, and disciplined
                    creative growth systems.”
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
                    placeholder="consultation, audit, service package..."
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

      <section className="section editorial-section dark-panel">
        <div className="centered wide">
          <p className="section-label gold">From Idea to Influence</p>
          <h2>Creative work should do more than look good. It should move people.</h2>
        </div>

        <div className="influence-grid">
          {ideaToInfluence.map((item, index) => (
            <div key={item.label} className="influence-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="section editorial-section">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">Ways to Start</p>
            <h2>Simple offers. Clear direction. No bloated service menu.</h2>
          </div>

          <div>
            <p>
              Start with the right level of strategy, then build toward creative,
              media, content, AI systems, and lead generation.
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

      <section id="culture" className="section editorial-section dark-panel">
        <div className="editorial-two-col">
          <div>
            <p className="section-label gold">Culture & Firm</p>
            <h2>Built where culture, creativity, and strategy meet.</h2>
          </div>

          <div>
            <p>
              BrownHill is a Black-owned creative marketing and media firm built
              for organizations that want clarity, cultural intelligence, stronger
              storytelling, and measurable growth.
            </p>
            <p>
              The firm was created for brands tired of random marketing and ready
              for work that connects visibility, trust, creative identity, and revenue.
            </p>

            <div className="section-cta-row">
              <ButtonLink href="#contact">Work With Us</ButtonLink>
              <button
                type="button"
                className="button secondary diagnostic-cta"
                onClick={startDiagnostic}
              >
                Start Diagnostic <ArrowRight size={20} />
              </button>
            </div>
          </div>
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
            <h2>Let’s build the brand system your organization deserves.</h2>
            <p>
              Request a strategy consultation. We’ll review your goals, current
              marketing, digital presence, creative direction, AI readiness, and
              best path toward stronger visibility and growth.
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
              <option>The Signal Scan</option>
              <option>The Growth Blueprint</option>
              <option>The Creative Intelligence System</option>
              <option>SEO / Search Visibility</option>
              <option>Brand Management</option>
              <option>Campaign Development</option>
              <option>Lead Generation</option>
              <option>Full Growth Strategy</option>
            </select>

            <label>What growth challenge should we help solve?</label>
            <textarea placeholder="Tell us about your marketing goals, creative needs, visibility gaps, AI needs, or lead generation goals..." />

            <button type="submit">Request Consultation</button>

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
                <span>Marketing guidance for growth-minded organizations</span>
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
                    : "Ask about SEO, branding, AI, or growth..."
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
        © {new Date().getFullYear()} BrownHill Marketing & Media, LLC. Creative
        intelligence, media, AI, brand strategy, and growth systems. All rights
        reserved.
      </footer>
    </main>
  );
}
