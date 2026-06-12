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

const creativeWords = [
  "BRAND STRATEGY",
  "SEO",
  "CULTURE",
  "AI",
  "CAMPAIGNS",
  "CONTENT",
  "MEDIA",
  "LEADS",
  "STORYTELLING",
  "ANALYTICS",
  "GROWTH",
  "MOTION",
];

const agencyProof = [
  "Strategy with rhythm.",
  "Creative with reason.",
  "Growth with receipts.",
];

const studioTools = [
  {
    icon: Megaphone,
    title: "Campaign Concepts",
    text:
      "Hooks, offers, messages, CTAs, and creative angles built around what the audience actually needs to believe.",
  },
  {
    icon: Sparkles,
    title: "Brand Storytelling",
    text:
      "Positioning, voice, founder messaging, service language, and brand narratives that feel clear and memorable.",
  },
  {
    icon: Bot,
    title: "AI Content Systems",
    text:
      "AI-assisted workflows for social posts, email ideas, landing pages, campaign briefs, and video scripts.",
  },
  {
    icon: BarChart3,
    title: "Marketing Intelligence",
    text:
      "Search demand, audience behavior, lead flow, market signals, and performance direction.",
  },
];

const influenceCards = [
  {
    number: "01",
    title: "The Insight",
    text:
      "What does the audience need to understand, believe, feel, or trust before they move?",
  },
  {
    number: "02",
    title: "The Idea",
    text:
      "What creative angle, story, phrase, visual, or campaign energy makes the brand harder to ignore?",
  },
  {
    number: "03",
    title: "The Growth Move",
    text:
      "Where does attention go next — landing page, call, form, email, content path, or sales conversation?",
  },
];

const packages = [
  {
    title: "The Signal Scan",
    label: "Start Here",
    text:
      "A focused review of website clarity, SEO, brand message, lead flow, and AI readiness.",
    items: ["Website review", "SEO scan", "Brand clarity check", "Growth gaps"],
  },
  {
    title: "The Growth Blueprint",
    label: "Most Strategic",
    text:
      "A practical roadmap for positioning, content, campaigns, visibility, and lead generation.",
    items: ["Audience strategy", "SEO roadmap", "Campaign direction", "Lead plan"],
  },
  {
    title: "The Creative Intelligence System",
    label: "AI-Powered",
    text:
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

const quickPrompts = [
  "Start my marketing diagnostic",
  "How can you improve my SEO?",
  "Help me clarify my brand message.",
  "How do I generate better leads?",
  "What AI tools can improve my marketing?",
  "What package should I start with?",
];

function ButtonLink({ children, href = "#contact", variant = "primary" }) {
  return (
    <a href={href} className={`button ${variant}`}>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStudioTool, setActiveStudioTool] = useState("Campaign Generator");
  const [campaignIndustry, setCampaignIndustry] = useState("Professional Services");
  const [campaignGoal, setCampaignGoal] = useState("Generate Leads");
  const [campaignChannel, setCampaignChannel] = useState("Social Media");
  const [campaignAudience, setCampaignAudience] = useState("decision-makers");
  const [contentIndustry, setContentIndustry] = useState("service-based business");
  const [contentOffer, setContentOffer] = useState("strategy consultation");
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
        "Hi, I’m Edna — your AI marketing assistant. Ask me about SEO, branding, campaigns, lead generation, AI marketing, or start a quick diagnostic.",
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
        .join(", ")}. That tone can guide website copy, social content, ads, email, and campaign direction.`
    : "Select a few traits to build a brand voice profile.";

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

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

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
      return "SEO starts with visibility and intent. A strong review looks at site structure, keywords, service pages, competitors, Google Business Profile, and whether the content matches what people already search for.";
    }

    if (lower.includes("brand") || lower.includes("message")) {
      return "Brand work is more than a logo. The real issue is clarity: positioning, voice, story, customer perception, and the message people remember after they leave the page.";
    }

    if (lower.includes("campaign") || lower.includes("ad")) {
      return "Strong campaigns need an audience, a hook, an offer, creative direction, a landing page, a follow-up path, and a clear metric. Otherwise, it is just noise.";
    }

    if (lower.includes("lead") || lower.includes("sales")) {
      return "Lead generation works when visibility, message, trust, creative, and follow-up all connect. Attention has to move somewhere.";
    }

    if (lower.includes("ai") || lower.includes("automation")) {
      return "AI should make marketing sharper, not generic. It can support research, content planning, campaign ideas, SEO insight, and reporting while keeping the voice human.";
    }

    if (lower.includes("package") || lower.includes("cost") || lower.includes("price")) {
      return "A good starting point is The Signal Scan. If you need a roadmap, The Growth Blueprint is stronger. If you need AI-assisted execution, The Creative Intelligence System fits best.";
    }

    return "The work usually starts by clarifying the market, message, audience, visibility gap, creative direction, and conversion path — then building the growth system around that.";
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
    <main className="site theme-dark">
      <section className="editorial-hero">
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
            <a href="#pov" onClick={closeMobileMenu}>POV</a>
            <a href="#studio" onClick={closeMobileMenu}>Studio</a>
            <a href="#influence" onClick={closeMobileMenu}>Ideas</a>
            <a href="#packages" onClick={closeMobileMenu}>Packages</a>
            <a href="#culture" onClick={closeMobileMenu}>Culture</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </div>
        </nav>

        <div className="editorial-hero-inner">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Sparkles size={16} /> Creative Strategy • Culture • AI • Campaigns
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            We make brands impossible to ignore.
          </motion.h1>

          <motion.p
            className="editorial-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            BrownHill Marketing & Media is a creative intelligence firm blending
            culture, AI, brand strategy, content, media, and growth systems for
            organizations ready to be seen, trusted, and chosen.
          </motion.p>

          <motion.div
            className="button-row center-row"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <ButtonLink href="#contact">Build My Growth System</ButtonLink>
            <ButtonLink href="#studio" variant="secondary">
              Enter the Studio
            </ButtonLink>
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

      <section id="pov" className="section premium-dark agency-pov">
        <div className="centered wide">
          <p className="section-label gold">Agency Point of View</p>
          <h2>Random marketing is expensive. Clear strategy is leverage.</h2>
          <p>
            The brands that win are not just louder. They are sharper. They know
            who they are speaking to, what the audience needs to believe, where
            attention should go, and how every touchpoint moves the story forward.
          </p>
        </div>

        <div className="proof-strip">
          {agencyProof.map((item) => (
            <div key={item}>
              <ShieldCheck size={22} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="studio" className="section creative-studio-section">
        <div className="centered wide">
          <p className="section-label gold">Creative Intelligence Studio</p>
          <h2>Ideas, AI, culture, and growth strategy in one operating system.</h2>
          <p>
            A lighter, smarter way to preview campaign thinking, brand voice,
            content direction, and market signals before the first consultation.
          </p>
        </div>

        <div className="studio-capability-grid">
          {studioTools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.title}
                className="studio-capability-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Icon size={30} />
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
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
                  Channel
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
                    placeholder="decision-makers, patients, founders..."
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
                  <p className="ai-insight-label">Sample Line</p>
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
                <p className="ai-insight-label">Generated Content Preview</p>
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
          {influenceCards.map((card) => (
            <div key={card.title} className="idea-card">
              <span>{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="section premium-dark">
        <div className="centered wide">
          <p className="section-label gold">Packages</p>
          <h2>Three ways to start building momentum.</h2>
          <p>
            Clear starting points for brands that need strategy, creative
            direction, AI support, stronger messaging, and better lead flow.
          </p>
        </div>

        <div className="package-grid">
          {packages.map((pack) => (
            <div key={pack.title} className="package-card">
              <p className="package-label">{pack.label}</p>
              <h3>{pack.title}</h3>
              <p>{pack.text}</p>

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
              for organizations that want to grow with clarity, cultural
              intelligence, AI-assisted systems, and measurable direction.
            </p>
            <p>
              Founded by Michael Hill, the firm was created for brands tired of
              random marketing and ready for work that connects visibility, trust,
              creative identity, and revenue.
            </p>

            <div className="section-cta-row">
              <ButtonLink href="#contact">Work With Us</ButtonLink>
              <button
                type="button"
                className="button diagnostic-button"
                onClick={startDiagnostic}
              >
                Start Free Diagnostic <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="culture-panel">
            <div>
              <Sparkles size={24} />
              <h3>Culture is market intelligence.</h3>
              <p>
                Culture shapes trust, language, influence, attention, and how
                people decide what brands deserve belief.
              </p>
            </div>

            <div>
              <Target size={24} />
              <h3>AI needs human taste.</h3>
              <p>
                AI helps move faster, but the work still needs judgment, nuance,
                and a voice people actually believe.
              </p>
            </div>

            <div>
              <TrendingUp size={24} />
              <h3>Creative needs a conversion path.</h3>
              <p>
                Beautiful work matters most when it connects to visibility,
                credibility, lead flow, and measurable growth.
              </p>
            </div>
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
