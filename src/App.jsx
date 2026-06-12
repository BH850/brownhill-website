import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import brownHillLogo from "../brownhill_marketing_and_media_logo.png";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageSquareText,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

const heroSlides = [
  {
    label: "Creative Intelligence",
    title: "We don’t just market brands. We make them impossible to ignore.",
    text:
      "We blend culture, AI, research, creative strategy, media, and growth systems to help brands become clearer, sharper, and more memorable.",
  },
  {
    label: "AI-Powered Marketing",
    title: "Culture gives the brand soul. AI gives it speed. Strategy gives it direction.",
    text:
      "The work helps organizations move faster without sounding generic through AI-assisted research, content, campaign planning, and brand intelligence.",
  },
  {
    label: "Brand Growth Studio",
    title: "Insight becomes identity. Identity becomes attention. Attention becomes growth.",
    text:
      "Our studio helps brands strengthen visibility, message, trust, creative direction, lead generation, and market presence.",
  },
];

const creativeWords = [
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

const firmProof = [
  "Strategy with rhythm. Creative with reason. Growth with receipts.",
  "SEO, branding, advertising, AI, content, and lead generation work better when they move together.",
  "The goal is simple: clearer brands, stronger visibility, better trust, and more qualified opportunities.",
];

const studioCapabilities = [
  {
    icon: Megaphone,
    title: "Campaign Concepts",
    description:
      "Creative angles, hooks, offers, messaging, CTAs, and campaign direction built around audience behavior.",
  },
  {
    icon: Sparkles,
    title: "Brand Storytelling",
    description:
      "Positioning, voice, identity, founder messaging, service language, and brand narratives that feel memorable.",
  },
  {
    icon: Bot,
    title: "AI Content Systems",
    description:
      "AI-assisted workflows for social posts, email ideas, landing page copy, campaign briefs, and video scripts.",
  },
  {
    icon: BarChart3,
    title: "Marketing Intelligence",
    description:
      "Market signals, search demand, audience insight, lead flow, and performance recommendations.",
  },
];

const ideaToInfluence = [
  {
    label: "01",
    title: "The Insight",
    description:
      "We identify what the audience needs to understand, believe, feel, or trust before they take action.",
  },
  {
    label: "02",
    title: "The Big Idea",
    description:
      "We shape the creative angle, story, hook, message, visual direction, and campaign energy.",
  },
  {
    label: "03",
    title: "The Growth Move",
    description:
      "We connect the idea to the channel, CTA, landing page, follow-up path, and performance metric.",
  },
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

const growthPaths = [
  {
    key: "Visibility",
    icon: Search,
    title: "Visibility Path",
    subtitle: "Get found by the right audience.",
    description:
      "Best for SEO, local visibility, Google presence, website structure, and service-page clarity.",
    cta: "Start Visibility Audit",
  },
  {
    key: "Brand",
    icon: Sparkles,
    title: "Brand Authority Path",
    subtitle: "Become easier to trust and remember.",
    description:
      "Best for positioning, brand voice, messaging, storytelling, visual consistency, and brand management.",
    cta: "Build Brand Blueprint",
  },
  {
    key: "Revenue",
    icon: TrendingUp,
    title: "Revenue Path",
    subtitle: "Turn attention into opportunity.",
    description:
      "Best for lead generation, campaign planning, landing pages, follow-up systems, and sales enablement.",
    cta: "Create Growth System",
  },
];

const packages = [
  {
    title: "The Signal Scan",
    label: "Start Here",
    description:
      "A focused diagnosis of your marketing, website, SEO, message, lead flow, and AI readiness.",
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

const cultureCards = [
  {
    title: "Culture is market intelligence.",
    description:
      "Culture shapes trust, language, influence, attention, and how people decide what brands deserve belief.",
  },
  {
    title: "AI needs human taste.",
    description:
      "AI helps move faster, but the work still needs judgment, cultural relevance, and a voice people actually believe.",
  },
  {
    title: "Creative needs a conversion path.",
    description:
      "Beautiful work matters most when it connects to visibility, credibility, lead flow, and measurable results.",
  },
];

const quickPrompts = [
  "Start my marketing diagnostic",
  "How can you improve my SEO?",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSignal, setActiveSignal] = useState("Audience Behavior");
  const [activePath, setActivePath] = useState("Visibility");
  const [scannerStage, setScannerStage] = useState("Growing");
  const [scannerChannel, setScannerChannel] = useState("Website");
  const [submitted, setSubmitted] = useState(false);

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

  const selectedPath =
    growthPaths.find((path) => path.key === activePath) || growthPaths[0];

  const scannerScore =
    70 +
    (activePath === "Revenue" ? 15 : activePath === "Brand" ? 10 : 8) +
    (scannerStage === "Scaling" ? 8 : scannerStage === "Established" ? 6 : 4) +
    (scannerChannel === "AI Systems" ? 8 : scannerChannel === "Website" ? 6 : 5);

  const scannerRecommendation =
    activePath === "Revenue"
      ? "Focus on offer clarity, landing pages, CRM follow-up, ad messaging, and lead-source reporting."
      : activePath === "Brand"
      ? "Focus on positioning, brand voice, customer perception, storytelling, and animated digital moments."
      : "Focus on SEO, local visibility, website structure, content mapping, and Google Business Profile improvements.";

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
        .join(", ")}. The tone can guide website copy, social messaging, ad language, email tone, and campaign direction.`
    : "Select a few traits to build a brand voice profile.";

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => clearInterval(timer);
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
      return "SEO starts with visibility and intent. A strong review would look at website structure, keyword opportunities, local search presence, service pages, competitors, and Google Business Profile performance.";
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

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <main className="site theme-dark">
      <section className="hero creative-hero">
        <div className="glow glow-left" />
        <div className="glow glow-right" />

        <nav className="nav">
          <div className="brand">
            <img
              src={brownHillLogo}
              alt="BrownHill Marketing & Media logo"
              className="brand-logo"
            />
            <p className="brand-subtitle">
              Creative Intelligence • AI • Media • Growth
            </p>
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <a href="#firm" onClick={closeMobileMenu}>The Firm</a>
            <a href="#studio" onClick={closeMobileMenu}>Studio</a>
            <a href="#influence" onClick={closeMobileMenu}>Ideas</a>
            <a href="#growth" onClick={closeMobileMenu}>Growth Paths</a>
            <a href="#packages" onClick={closeMobileMenu}>Packages</a>
            <a href="#culture" onClick={closeMobileMenu}>Culture</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">
              <Sparkles size={16} /> Creative Strategy • AI • Culture • SEO • Campaigns
            </p>

            <div className="home-slider">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <p className="slide-label">{heroSlides[activeSlide].label}</p>
                <h1>{heroSlides[activeSlide].title}</h1>
                <p className="hero-copy">{heroSlides[activeSlide].text}</p>
              </motion.div>

              <div className="slider-dots">
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

            <div className="button-row">
              <ButtonLink>Build My Growth System</ButtonLink>
              <ButtonLink variant="secondary" href="#studio">
                Enter Creative Studio
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero-card-wrap"
          >
            <div className="hero-card ai-command-card">
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

                <motion.div className="orbit-chip chip-one" animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity }}>
                  STORY
                </motion.div>
                <motion.div className="orbit-chip chip-two" animate={{ y: [8, -8, 8] }} transition={{ duration: 5, repeat: Infinity }}>
                  AI
                </motion.div>
                <motion.div className="orbit-chip chip-three" animate={{ x: [-8, 8, -8] }} transition={{ duration: 5.5, repeat: Infinity }}>
                  BRAND
                </motion.div>
                <motion.div className="orbit-chip chip-four" animate={{ x: [8, -8, 8] }} transition={{ duration: 4.5, repeat: Infinity }}>
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
          {[...creativeWords, ...creativeWords, ...creativeWords].map((word, index) => (
            <span key={`${word}-${index}`}>{word}</span>
          ))}
        </div>
      </div>

      <section id="firm" className="section premium-dark">
        <div className="two-col">
          <div>
            <p className="section-label gold">The Firm</p>
            <h2>Strategy with rhythm. Creative with reason. Growth with receipts.</h2>
            <p>
              We are a creative marketing and media firm built for brands that want
              more than scattered posts, random ads, and generic messaging.
            </p>
            <p>
              The work connects cultural intelligence, AI-assisted strategy, brand
              storytelling, SEO, content, media, and lead-generation systems so
              organizations can be seen, trusted, and chosen.
            </p>

            <div className="section-cta-row">
              <ButtonLink href="#growth">Choose Your Growth Path</ButtonLink>
              <ButtonLink variant="secondary" href="#studio">
                Try Creative Intelligence
              </ButtonLink>
            </div>
          </div>

          <div className="stack">
            {firmProof.map((item) => (
              <div key={item} className="proof-card dark-card">
                <ShieldCheck size={24} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="section creative-studio-section">
        <div className="centered wide">
          <p className="section-label gold">Creative Intelligence Studio</p>
          <h2>Where ideas, AI, culture, and growth strategy work together.</h2>
          <p>
            This is the operating system: campaign thinking, brand voice, content
            direction, market signals, and growth execution in one creative
            intelligence environment.
          </p>
        </div>

        <div className="studio-capability-grid">
          {studioCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                className="studio-capability-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <Icon size={30} />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="command-shell">
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
                  <select value={campaignIndustry} onChange={(event) => setCampaignIndustry(event.target.value)}>
                    {industries.map((industry) => (
                      <option key={industry}>{industry}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Campaign Goal
                  <select value={campaignGoal} onChange={(event) => setCampaignGoal(event.target.value)}>
                    {campaignGoals.map((goal) => (
                      <option key={goal}>{goal}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Primary Channel
                  <select value={campaignChannel} onChange={(event) => setCampaignChannel(event.target.value)}>
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

      <section id="influence" className="section premium-dark">
        <div className="centered wide">
          <p className="section-label gold">From Idea to Influence</p>
          <h2>Creative work should do more than look good. It should move people.</h2>
          <p>
            We turn insight into identity, identity into attention, and attention
            into growth.
          </p>
        </div>

        <div className="idea-grid">
          {ideaToInfluence.map((item) => (
            <div key={item.title} className="idea-card">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="growth" className="section premium-dark">
        <div className="centered wide">
          <p className="section-label gold">Choose Your Growth Path</p>
          <h2>Every organization does not need the same marketing plan.</h2>
          <p>
            Select the path that best matches your current challenge. The path
            helps shape the strategy, offer, content, creative angle, and campaign
            system.
          </p>
        </div>

        <div className="growth-path-grid">
          {growthPaths.map((path) => {
            const Icon = path.icon;
            return (
              <button
                key={path.key}
                type="button"
                className={`growth-path-card ${activePath === path.key ? "active" : ""}`}
                onClick={() => setActivePath(path.key)}
              >
                <Icon size={34} />
                <h3>{path.title}</h3>
                <p className="growth-subtitle">{path.subtitle}</p>
                <p>{path.description}</p>
                <span>{path.cta}</span>
              </button>
            );
          })}
        </div>

        <div className="growth-path-output">
          <p className="ai-insight-label">Selected Path</p>
          <h3>{selectedPath.title}</h3>
          <p>{selectedPath.description}</p>
          <ButtonLink href="#contact">{selectedPath.cta}</ButtonLink>
        </div>

        <div className="ai-scanner compact-scanner">
          <div>
            <p className="ai-insight-label">Creative Readiness Scanner</p>
            <h3>Find the smartest starting point.</h3>
            <p>
              Choose a growth priority, business stage, and primary channel. The
              scanner creates a simple strategy signal.
            </p>
          </div>

          <div className="scanner-controls">
            <label>
              Growth Priority
              <select value={activePath} onChange={(event) => setActivePath(event.target.value)}>
                <option>Visibility</option>
                <option>Brand</option>
                <option>Revenue</option>
              </select>
            </label>

            <label>
              Business Stage
              <select value={scannerStage} onChange={(event) => setScannerStage(event.target.value)}>
                <option>Growing</option>
                <option>Established</option>
                <option>Scaling</option>
              </select>
            </label>

            <label>
              Primary Channel
              <select value={scannerChannel} onChange={(event) => setScannerChannel(event.target.value)}>
                <option>Website</option>
                <option>Social Media</option>
                <option>Advertising</option>
                <option>AI Systems</option>
              </select>
            </label>
          </div>

          <div className="scanner-output">
            <div className="ai-score-ring scanner-score">
              <span>{scannerScore}</span>
              <small>Readiness</small>
            </div>

            <div>
              <p className="ai-insight-label">Recommendation</p>
              <h3>{activePath} Priority</h3>
              <p>{scannerRecommendation}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="section premium-dark">
        <div className="centered wide">
          <p className="section-label gold">Packages</p>
          <h2>Creative intelligence packages built for clarity, momentum, and growth.</h2>
          <p>
            Simple starting points for organizations that need strategy, creative
            direction, AI support, stronger messaging, and better lead flow.
          </p>
        </div>

        <div className="package-grid compact-packages">
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

      <section id="culture" className="section premium-dark">
        <div className="two-col">
          <div>
            <p className="section-label gold">Culture & Founder</p>
            <h2>Built where culture, creativity, and strategy meet.</h2>
            <p>
              BrownHill is a Black-owned creative marketing and media firm built
              for organizations that want to grow with clarity, culture,
              AI-assisted intelligence, and measurable direction.
            </p>
            <p>
              Founded by Michael Hill, the firm was created for brands tired of
              random marketing and ready for strategy that connects visibility,
              trust, creative identity, and revenue.
            </p>

            <div className="section-cta-row">
              <ButtonLink href="#contact">Work With Us</ButtonLink>
              <button type="button" className="button secondary" onClick={startDiagnostic}>
Start Free Diagnostic <ArrowRight size={20} />              </button>
            </div>
          </div>

          <div className="culture-intel-grid">
            {cultureCards.map((card) => (
              <div key={card.title} className="culture-intel-card">
                <Sparkles size={24} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="two-col">
          <div>
            <p className="section-label gold">Start the Conversation</p>
            <h2>Let’s build the brand system your organization deserves.</h2>
            <p>
              Request a strategy consultation. We’ll review your goals, current
              marketing, digital presence, AI readiness, creative direction, and
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
                Thank you. This demo form is ready to connect to email, CRM, or booking.
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
