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
  Send,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";

const heroSlides = [
  {
    label: "Creative Intelligence",
    title: "We build brands people notice, trust, and choose.",
    text:
      "A creative marketing and media firm built at the intersection of culture, strategy, AI, storytelling, and growth.",
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
      "We use AI to move smarter, not sound generic — sharpening content, campaigns, visibility, and lead generation.",
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
      "What does the audience need to believe, feel, trust, or understand before they move?",
  },
  {
    label: "The Big Idea",
    text:
      "What creative angle makes the message memorable, useful, and worth paying attention to?",
  },
  {
    label: "The Growth Move",
    text:
      "Where does the attention go next — a page, a call, a form, an offer, a conversation?",
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

  return (
    <main className="site theme-dark editorial-site">
      <section className="editorial-hero">
        <div className="glow glow-left" />
        <div className="glow glow-right" />

        <nav className="nav editorial-nav">
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
            <a href="#engine" onClick={closeMobileMenu}>Engine</a>
            <a href="#pov" onClick={closeMobileMenu}>POV</a>
            <a href="#work" onClick={closeMobileMenu}>Work</a>
            <a href="#studio" onClick={closeMobileMenu}>Studio</a>
            <a href="#packages" onClick={closeMobileMenu}>Packages</a>
            <a href="#culture" onClick={closeMobileMenu}>Culture</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </div>
        </nav>

        <div className="editorial-hero-inner">
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

          <div className="hero-actions">
            <ButtonLink>Start a Strategy Conversation</ButtonLink>
            <button type="button" className="button secondary diagnostic-cta" onClick={startDiagnostic}>
              Start Diagnostic <ArrowRight size={20} />
            </button>
          </div>

          <div className="slider-dots editorial-dots">
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
            The site should feel like the work has taste, strategy, and a point of view.
            These are the core moves.
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
            <h2>AI tools that preview how the strategy thinks.</h2>
          </div>

          <div>
            <p>
              The studio gives visitors a quick sense of how campaigns, brand voice,
              and content direction can be shaped before the first consultation.
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
            <p className="section-label gold">Culture & Founder</p>
            <h2>Built where culture, creativity, and strategy meet.</h2>
          </div>

          <div>
            <p>
              BrownHill is a Black-owned creative marketing and media firm built
              for organizations that want clarity, cultural intelligence, stronger
              storytelling, and measurable growth.
            </p>
            <p>
              Founded by Michael Hill, the firm was created for brands tired of
              random marketing and ready for work that connects visibility, trust,
              creative identity, and revenue.
            </p>

            <div className="section-cta-row">
              <ButtonLink href="#contact">Work With Us</ButtonLink>
              <button type="button" className="button secondary diagnostic-cta" onClick={startDiagnostic}>
                Start Diagnostic <ArrowRight size={20} />
              </button>
            </div>
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
/* EDITORIAL AGENCY STACK + CREATIVE INTELLIGENCE ENGINE */

.site,
.theme-dark,
.editorial-site {
  background: #170c07;
  color: #fff7e6;
}

.theme-toggle {
  display: none !important;
}

.editorial-hero {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 16% 20%, rgba(251, 191, 36, 0.18), transparent 30%),
    radial-gradient(circle at 90% 10%, rgba(132, 30, 18, 0.42), transparent 34%),
    linear-gradient(135deg, #170c07 0%, #2b1309 52%, #070302 100%);
}

.editorial-nav {
  position: relative;
  z-index: 10;
}

.editorial-hero-inner {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 70px 0 90px;
}

.editorial-hero h1 {
  max-width: 1120px !important;
  font-size: clamp(54px, 8.6vw, 118px) !important;
  line-height: 0.98 !important;
  letter-spacing: -0.045em !important;
  font-weight: 900 !important;
  text-wrap: balance;
  margin: 22px 0 24px;
  color: #fff7e6;
}

.editorial-hero .hero-copy {
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  font-size: clamp(18px, 2vw, 26px);
  line-height: 1.45;
  color: rgba(255, 247, 230, 0.78);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 34px;
}

.editorial-dots {
  margin-top: 46px;
  justify-content: center;
}

.editorial-section {
  background:
    radial-gradient(circle at top right, rgba(251, 191, 36, 0.08), transparent 34%),
    linear-gradient(135deg, #170c07 0%, #241008 54%, #0b0503 100%);
  color: #fff7e6;
}

.dark-panel {
  background:
    radial-gradient(circle at bottom left, rgba(132, 30, 18, 0.36), transparent 35%),
    linear-gradient(135deg, #0b0503 0%, #1f0e07 55%, #170c07 100%) !important;
}

.editorial-two-col {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 56px;
  align-items: start;
}

.editorial-two-col h2,
.editorial-section h2 {
  color: #fff7e6;
}

.editorial-two-col p,
.editorial-section p {
  color: rgba(255, 247, 230, 0.78);
}

.large-editorial-copy {
  color: #fff7e6 !important;
  font-size: clamp(24px, 3.2vw, 42px) !important;
  line-height: 1.1 !important;
  letter-spacing: -0.045em;
  margin-top: 0;
}

/* Creative marquee */

.creative-marquee {
  overflow: hidden;
  background: #fbbf24;
  color: #170c07;
  border-top: 1px solid rgba(23, 12, 7, 0.25);
  border-bottom: 1px solid rgba(23, 12, 7, 0.25);
}

.creative-marquee-track {
  display: flex;
  width: max-content;
  gap: 34px;
  padding: 16px 0;
  animation: creativeMarquee 28s linear infinite;
}

.creative-marquee-track span {
  font-size: 0.82rem;
  font-weight: 950;
  letter-spacing: 0.18em;
  white-space: nowrap;
}

@keyframes creativeMarquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-33.33%);
  }
}

/* Creative Intelligence Engine */

.intelligence-engine-section {
  position: relative;
  overflow: hidden;
}

.engine-wrap {
  width: min(1180px, calc(100% - 40px));
  margin: 58px auto 0;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 34px;
  align-items: center;
}

.engine-visual {
  position: relative;
  min-height: 520px;
  border-radius: 42px;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at center, rgba(251, 191, 36, 0.16), transparent 58%),
    linear-gradient(145deg, rgba(255, 247, 230, 0.08), rgba(255, 247, 230, 0.025));
  border: 1px solid rgba(251, 191, 36, 0.18);
  overflow: hidden;
}

.engine-orbit {
  position: absolute;
  border-radius: 999px;
  border: 1px solid rgba(251, 191, 36, 0.22);
  animation: engineSpin 18s linear infinite;
}

.orbit-one {
  width: 390px;
  height: 390px;
}

.orbit-two {
  width: 290px;
  height: 290px;
  animation-duration: 14s;
  animation-direction: reverse;
}

.orbit-three {
  width: 190px;
  height: 190px;
  animation-duration: 10s;
}

.engine-core {
  position: relative;
  z-index: 2;
  width: 170px;
  height: 170px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 22px;
  background:
    radial-gradient(circle at top, rgba(255, 247, 230, 0.14), transparent 50%),
    #170c07;
  border: 1px solid rgba(251, 191, 36, 0.32);
  box-shadow:
    0 0 0 10px rgba(251, 191, 36, 0.04),
    0 28px 70px rgba(0, 0, 0, 0.42);
}

.engine-core svg {
  color: #fbbf24;
}

.engine-core p {
  margin: 6px 0 0;
  color: #fff7e6;
  font-weight: 950;
  letter-spacing: 0.14em;
}

.engine-core span {
  color: rgba(255, 247, 230, 0.68);
  font-size: 0.72rem;
  line-height: 1.25;
}

.engine-chip {
  position: absolute;
  z-index: 3;
  padding: 10px 14px;
  border-radius: 999px;
  background: #170c07;
  border: 1px solid rgba(251, 191, 36, 0.35);
  color: #fbbf24;
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.3);
}

.chip-signal {
  top: 92px;
  left: 72px;
}

.chip-story {
  top: 120px;
  right: 64px;
}

.chip-system {
  bottom: 112px;
  left: 58px;
}

.chip-scale {
  bottom: 86px;
  right: 72px;
}

.engine-steps {
  display: grid;
  gap: 16px;
}

.engine-step-card {
  padding: 24px;
  border-radius: 26px;
  background: rgba(255, 247, 230, 0.07);
  border: 1px solid rgba(251, 191, 36, 0.18);
}

.engine-step-card span {
  color: #fbbf24;
  font-size: 0.72rem;
  font-weight: 950;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.engine-step-card h3 {
  margin: 8px 0 8px;
  color: #fff7e6;
}

.engine-step-card p {
  margin: 0;
  color: rgba(255, 247, 230, 0.78);
  line-height: 1.6;
}

@keyframes engineSpin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* POV / Work / Influence */

.pov-grid,
.featured-work-grid,
.influence-grid {
  width: min(1180px, calc(100% - 40px));
  margin: 50px auto 0;
  display: grid;
  gap: 22px;
}

.pov-grid {
  grid-template-columns: repeat(3, 1fr);
}

.featured-work-grid {
  grid-template-columns: repeat(4, 1fr);
}

.influence-grid {
  grid-template-columns: repeat(3, 1fr);
}

.pov-card,
.featured-work-card,
.influence-card,
.package-card {
  padding: 30px;
  border-radius: 30px;
  background: rgba(255, 247, 230, 0.07);
  border: 1px solid rgba(251, 191, 36, 0.18);
  color: #fff7e6;
}

.pov-card svg {
  color: #fbbf24;
  margin-bottom: 18px;
}

.pov-card p,
.featured-work-card p,
.influence-card p,
.package-card p {
  color: rgba(255, 247, 230, 0.78);
}

.featured-work-card span,
.influence-card span {
  display: inline-flex;
  margin-bottom: 24px;
  color: #fbbf24;
  font-size: 2.7rem;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.07em;
}

.featured-work-card h3,
.influence-card h3 {
  color: #fff7e6;
  margin-bottom: 12px;
}

/* Command studio */

.command-shell {
  width: min(1180px, calc(100% - 40px));
  margin: 50px auto 0;
  padding: 24px;
  border-radius: 34px;
  background:
    radial-gradient(circle at top left, rgba(247, 215, 116, 0.12), transparent 32%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.035));
  border: 1px solid rgba(247, 215, 116, 0.16);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.34);
}

.command-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 22px;
}

.command-tabs button,
.trait-grid button {
  cursor: pointer;
  border: 1px solid rgba(247, 215, 116, 0.22);
  background: rgba(247, 215, 116, 0.08);
  color: #f7d774;
  border-radius: 999px;
  padding: 10px 14px;
  font-weight: 900;
}

.command-tabs button.active,
.command-tabs button:hover,
.trait-grid button.active,
.trait-grid button:hover {
  background: rgba(247, 215, 116, 0.2);
  border-color: rgba(247, 215, 116, 0.45);
}

.command-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 24px;
}

.command-controls {
  display: grid;
  gap: 14px;
}

.command-controls label {
  display: grid;
  gap: 8px;
  color: #f7d774;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.command-controls select,
.command-controls input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(247, 215, 116, 0.22);
  background: rgba(0, 0, 0, 0.28);
  color: #fff7e6;
  font: inherit;
  outline: none;
}

.command-output {
  padding: 24px;
  border-radius: 26px;
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(247, 215, 116, 0.16);
}

.command-output h3 {
  color: #fff7e6;
  margin: 0 0 10px;
}

.command-output p {
  color: rgba(255, 247, 230, 0.78);
}

.command-output strong {
  color: #f7d774;
}

.ai-insight-label {
  margin: 0 0 8px !important;
  color: #f7d774 !important;
  font-size: 0.72rem !important;
  font-weight: 950 !important;
  letter-spacing: 0.16em !important;
  text-transform: uppercase !important;
}

.metric-row,
.trait-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.metric-row span {
  padding: 9px 12px;
  border-radius: 999px;
  background: rgba(247, 215, 116, 0.12);
  color: #f7d774;
  border: 1px solid rgba(247, 215, 116, 0.18);
  font-size: 0.78rem;
  font-weight: 900;
}

.voice-sample {
  margin-top: 20px;
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 247, 230, 0.06);
  border: 1px solid rgba(247, 215, 116, 0.14);
}

.content-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.content-list div {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 10px;
  align-items: start;
  padding: 12px;
  border-radius: 18px;
  background: rgba(255, 247, 230, 0.06);
  border: 1px solid rgba(247, 215, 116, 0.12);
}

.content-list svg {
  color: #f7d774;
  margin-top: 2px;
}

/* Packages */

.editorial-package-grid {
  margin-top: 50px;
}

.package-grid {
  width: min(1180px, calc(100% - 40px));
  margin: 46px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.package-label {
  color: #fbbf24 !important;
  font-weight: 900;
}

.package-list {
  display: grid;
  gap: 10px;
  margin-top: 20px;
}

.package-list span {
  display: flex;
  gap: 8px;
  align-items: center;
  color: rgba(255, 247, 230, 0.82);
  font-size: 0.9rem;
  font-weight: 800;
}

.package-list svg {
  color: #fbbf24;
  flex: 0 0 auto;
}

.package-card a {
  display: inline-flex;
  margin-top: 18px;
  color: #fbbf24;
  font-weight: 950;
}

/* Buttons */

.diagnostic-cta {
  border: 1px solid rgba(251, 191, 36, 0.55) !important;
  background:
    linear-gradient(135deg, rgba(251, 191, 36, 0.18), rgba(251, 191, 36, 0.06)) !important;
  color: #fbbf24 !important;
  box-shadow:
    0 0 0 1px rgba(251, 191, 36, 0.12),
    0 18px 44px rgba(0, 0, 0, 0.28);
}

.diagnostic-cta:hover {
  transform: translateY(-2px);
  background: #fbbf24 !important;
  color: #170c07 !important;
  border-color: #fbbf24 !important;
}

.diagnostic-cta svg {
  color: currentColor;
}

/* Edna */

.diagnostic-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid rgba(23, 12, 7, 0.1);
  background: #fff7e6;
}

.diagnostic-options button {
  cursor: pointer;
  border: 1px solid rgba(23, 12, 7, 0.14);
  background: #ffffff;
  color: #170c07;
  border-radius: 999px;
  padding: 8px 10px;
  font-size: 0.75rem;
  font-weight: 800;
}

.diagnostic-options button:hover {
  background: #f1dfc0;
}

.typing-bubble {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
}

.typing-bubble span {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: #170c07;
  display: inline-block;
  animation: typingPulse 1s infinite ease-in-out;
}

.typing-bubble span:nth-child(2) {
  animation-delay: 0.15s;
}

.typing-bubble span:nth-child(3) {
  animation-delay: 0.3s;
}

.ai-chat-panel {
  color: #170c07;
}

.edna-quick-prompts {
  background: #fff7e6;
  border-top: 1px solid rgba(23, 12, 7, 0.1);
}

.edna-quick-prompts button {
  color: #170c07;
}

.edna-quick-prompts button:disabled,
.ai-chat-form input:disabled,
.ai-chat-form button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

@keyframes typingPulse {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.35;
  }

  40% {
    transform: translateY(-3px);
    opacity: 1;
  }
}

/* Mobile */

.mobile-menu-button {
  display: none;
  border: 1px solid rgba(251, 191, 36, 0.28);
  background: rgba(255, 247, 230, 0.08);
  color: #fbbf24;
  width: 46px;
  height: 46px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
}

@media (max-width: 980px) {
  .nav {
    width: calc(100% - 32px);
    padding: 16px;
    align-items: center;
  }

  .brand {
    margin-left: 0;
    align-items: flex-start;
  }

  .brand-logo {
    width: 82px;
    height: 82px;
  }

  .brand-subtitle {
    font-size: 0.56rem;
    letter-spacing: 0.12em;
    white-space: normal;
    text-align: left;
    max-width: 210px;
  }

  .mobile-menu-button {
    display: inline-flex;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 12px);
    left: 16px;
    right: 16px;
    display: none;
    flex-direction: column;
    gap: 0;
    padding: 14px;
    border-radius: 24px;
    background: rgba(23, 12, 7, 0.96);
    border: 1px solid rgba(251, 191, 36, 0.22);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.36);
    backdrop-filter: blur(18px);
    z-index: 15;
  }

  .nav-links.mobile-open {
    display: flex;
  }

  .nav-links a {
    padding: 14px 12px;
    border-radius: 16px;
    color: #fff7e6;
  }

  .nav-links a:hover {
    background: rgba(251, 191, 36, 0.1);
    color: #fbbf24;
  }

  .editorial-hero-inner {
    width: calc(100% - 36px);
    min-height: calc(100vh - 120px);
    padding: 48px 0 76px;
  }

  .editorial-hero h1 {
    font-size: clamp(44px, 12vw, 74px) !important;
    line-height: 1.02 !important;
    letter-spacing: -0.035em !important;
  }

  .editorial-hero .hero-copy {
    font-size: 17px;
    line-height: 1.6;
  }

  .hero-actions,
  .section-cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .button {
    justify-content: center;
    width: 100%;
  }

  .editorial-two-col,
  .engine-wrap,
  .pov-grid,
  .featured-work-grid,
  .influence-grid,
  .command-grid,
  .package-grid,
  .two-col {
    grid-template-columns: 1fr !important;
  }

  .editorial-two-col {
    gap: 24px;
  }

  .section {
    padding: 64px 18px;
  }

  .command-shell,
  .engine-wrap,
  .pov-grid,
  .featured-work-grid,
  .influence-grid,
  .package-grid {
    width: min(100%, calc(100% - 20px));
  }

  .engine-visual {
    min-height: 420px;
  }

  .orbit-one {
    width: 310px;
    height: 310px;
  }

  .orbit-two {
    width: 235px;
    height: 235px;
  }

  .orbit-three {
    width: 155px;
    height: 155px;
  }

  .engine-core {
    width: 145px;
    height: 145px;
  }

  .command-tabs {
    display: grid;
    grid-template-columns: 1fr;
  }

  .command-tabs button {
    width: 100%;
  }

  .metric-row,
  .trait-grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  .pov-card,
  .featured-work-card,
  .influence-card,
  .package-card,
  .command-output,
  .command-shell,
  .engine-step-card {
    padding: 20px;
  }
}

@media (max-width: 640px) {
  .nav {
    padding: 14px;
  }

  .brand-logo {
    width: 72px;
    height: 72px;
  }

  .brand-subtitle {
    font-size: 0.5rem;
    max-width: 180px;
  }

  .editorial-hero h1 {
    font-size: clamp(40px, 11vw, 58px) !important;
    line-height: 1.05 !important;
    letter-spacing: -0.025em !important;
  }

  .editorial-hero .hero-copy {
    font-size: 16px !important;
  }

  .creative-marquee-track {
    gap: 22px;
    padding: 13px 0;
  }

  .creative-marquee-track span {
    font-size: 0.72rem;
  }

  .large-editorial-copy {
    font-size: 28px !important;
  }

  .engine-visual {
    min-height: 360px;
  }

  .engine-chip {
    font-size: 0.68rem;
    padding: 8px 10px;
  }

  .chip-signal {
    top: 76px;
    left: 22px;
  }

  .chip-story {
    top: 92px;
    right: 22px;
  }

  .chip-system {
    bottom: 92px;
    left: 20px;
  }

  .chip-scale {
    bottom: 74px;
    right: 24px;
  }

  .ai-chat {
    right: 12px;
    left: 12px;
    bottom: 12px;
  }

  .ai-chat-panel {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 20px;
  }

  .ai-chat-messages {
    height: 250px;
  }

  .ai-chat-button {
    margin-left: auto;
  }

  .ai-chat-button span {
    display: inline;
  }

  .edna-quick-prompts,
  .diagnostic-options {
    max-height: 128px;
    overflow-y: auto;
  }

  .edna-quick-prompts button,
  .diagnostic-options button {
    font-size: 0.7rem;
  }

  .contact-form {
    padding: 20px;
  }

  footer {
    font-size: 12px;
    line-height: 1.6;
  }
}
