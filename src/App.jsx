import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import brownHillLogo from "../brownhill_marketing_and_media_logo.png";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileSearch,
  Gauge,
  Globe2,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareText,
  Phone,
  PlayCircle,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WandSparkles,
  Workflow,
  Zap,
} from "lucide-react";

const corePillars = [
  {
    icon: FileSearch,
    title: "Research & Intelligence",
    description:
      "Before tactics are recommended, we perform a comprehensive market analysis for our clients. We look at audience behaviors, competitors, search demand, positioning gaps, customer pain points, local and national visibility, digital presence, and growth opportunities.",
  },
  {
    icon: Compass,
    title: "Strategy & Positioning",
    description:
      "We clarify where the brand should compete, who it should speak to, what offer should be emphasized, and how the message should be framed so the business is easier to understand, trust, and choose.",
  },
  {
    icon: Megaphone,
    title: "Media, Advertising & Campaigns",
    description:
      "We turn strategy into campaign direction across digital, social, local, search, and promotional channels. The goal is to move from random activity to intentional visibility, engagement, and lead generation.",
  },
  {
    icon: TrendingUp,
    title: "Growth Systems & Performance",
    description:
      "BrownHill helps clients build repeatable marketing systems that can be measured, improved, and scaled. We connect visibility, messaging, lead capture, follow-up, analytics, and revenue outcomes.",
  },
];

const practiceAreas = [
  {
    icon: Search,
    title: "SEO & Search Engine Visibility",
    description:
      "Search engine optimization helps businesses become more discoverable when customers are actively looking for services, products, or solutions. BrownHill supports SEO through keyword research, search intent analysis, technical website review, on-page optimization, local SEO, Google Business Profile improvement, content mapping, competitor search analysis, metadata refinement, internal linking strategy, service-page planning, and visibility audits.",
    outcomes: [
      "More qualified search visibility",
      "Improved local presence",
      "Better website structure",
      "Search-focused content direction",
    ],
  },
  {
    icon: Globe2,
    title: "SMO & Social Media Optimization",
    description:
      "Social Media Optimization strengthens how a brand appears, communicates, and engages across social platforms. BrownHill helps clients optimize profiles, clarify content themes, build posting frameworks, improve brand consistency, develop engagement strategies, create platform-specific messaging, plan social campaigns, and align social presence with business goals.",
    outcomes: [
      "Stronger social credibility",
      "Clearer content direction",
      "Better platform consistency",
      "More intentional audience engagement",
    ],
  },
  {
    icon: Target,
    title: "Marketing Strategy & Go-To-Market Planning",
    description:
      "Marketing strategy is the foundation of every growth effort. BrownHill helps clients define target customers, refine offers, identify market opportunities, develop brand positioning, structure campaign priorities, determine channel strategy, map customer journeys, and create go-to-market plans that guide execution with purpose.",
    outcomes: [
      "Clearer market position",
      "Stronger offer strategy",
      "Sharper audience targeting",
      "Practical growth roadmap",
    ],
  },
  {
    icon: Lightbulb,
    title: "Marketing Research & Consumer Insights",
    description:
      "Research gives marketing direction. BrownHill supports decision-making through customer research, competitor analysis, market scans, industry trend reviews, survey design, audience profiling, pricing perception research, local market opportunity analysis, brand perception review, and insights that help leaders make smarter marketing investments.",
    outcomes: [
      "Better customer understanding",
      "Competitor clarity",
      "Market opportunity insight",
      "Evidence-based recommendations",
    ],
  },
  {
    icon: Megaphone,
    title: "Advertising Strategy & Campaign Development",
    description:
      "Advertising should be planned with a clear audience, message, offer, and conversion goal. BrownHill helps develop ad strategy, campaign concepts, promotional messaging, audience targeting, creative direction, paid media planning, local advertising ideas, launch calendars, campaign briefs, and performance improvement recommendations.",
    outcomes: [
      "More focused campaigns",
      "Stronger ad messaging",
      "Better audience targeting",
      "Improved campaign discipline",
    ],
  },
  {
    icon: Building2,
    title: "Brand Development & Corporate Identity",
    description:
      "A brand must look credible and communicate clearly before marketing can fully perform. BrownHill supports brand voice, messaging, positioning statements, service descriptions, visual direction, customer-facing language, company profiles, brand story development, professional bios, brand standards, and corporate presentation materials.",
    outcomes: [
      "More professional presence",
      "Clear brand voice",
      "Stronger credibility",
      "Better customer understanding",
    ],
  },
  {
    icon: Building2,
    title: "Brand Management",
    description:
      "Brand management helps organizations shape, strengthen, and protect how they are seen, understood, and remembered. BrownHill supports brand consistency, messaging clarity, reputation strategy, customer perception, service language, visual alignment, campaign standards, and the systems needed to keep the brand strong across every customer touchpoint.",
    outcomes: [
      "Stronger brand identity",
      "Clearer customer perception",
      "More consistent messaging",
      "Better market credibility",
    ],
  },
  {
    icon: MessageSquareText,
    title: "Content, Media & Communications",
    description:
      "Content is how a business educates, builds trust, and stays visible. BrownHill helps with website copy, landing pages, social content plans, blogs, newsletters, email campaigns, promotional copy, thought-leadership concepts, founder messaging, brand announcements, and communication systems that support long-term authority.",
    outcomes: [
      "Stronger messaging",
      "More useful content",
      "Consistent communication",
      "Better brand authority",
    ],
  },
  {
    icon: Layers,
    title: "Website Strategy & Digital Presence",
    description:
      "A website should operate as a credibility engine and conversion asset. BrownHill supports website structure, page planning, service-page copy, conversion flow, calls-to-action, user experience review, trust-building sections, local landing pages, lead capture strategy, and digital presence alignment across web, search, and social.",
    outcomes: [
      "Stronger website clarity",
      "Better conversion flow",
      "Improved digital credibility",
      "Cleaner customer journey",
    ],
  },
  {
    icon: Users,
    title: "Lead Generation & Revenue Enablement",
    description:
      "Visibility only matters when it creates opportunity. BrownHill helps clients design lead-generation systems, referral strategies, outreach campaigns, landing page offers, sales messaging, follow-up flows, appointment-setting language, CRM process recommendations, and customer acquisition frameworks.",
    outcomes: [
      "More qualified opportunities",
      "Better follow-up structure",
      "Stronger sales messaging",
      "Clearer acquisition system",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics, Reporting & Performance Improvement",
    description:
      "Marketing must be reviewed, measured, and improved. BrownHill supports KPI development, website analytics review, campaign performance tracking, lead-source analysis, conversion review, monthly reporting, marketing scorecards, ROI interpretation, and optimization recommendations.",
    outcomes: [
      "Clearer performance insight",
      "Better marketing decisions",
      "Improved accountability",
      "Data-backed optimization",
    ],
  },
];

const relatedCapabilities = [
  "AI Marketing Systems",
  "AI Brand Voice Training",
  "Animated Website Experiences",
  "AI Content Engines",
  "Competitive Analysis",
  "Customer Journey Mapping",
  "Google Business Profile Optimization",
  "Local SEO",
  "Website Copywriting",
  "Landing Page Strategy",
  "Email Marketing",
  "Sales Funnel Planning",
  "CRM & Follow-Up Strategy",
  "Brand Messaging",
  "Media Planning",
  "Campaign Briefs",
  "Audience Segmentation",
  "Reputation Strategy",
  "Community Marketing",
  "Referral Campaigns",
  "Thought Leadership",
  "Market Opportunity Reviews",
  "Performance Dashboards",
  "Growth Consulting",
];

const industries = [
  "Healthcare & Wellness",
  "Professional Services",
  "Small & Mid-Sized Businesses",
  "Community-Centered Organizations",
  "Black-Owned & Diverse Businesses",
  "Corporate & Institutional Brands",
  "Home Services",
  "Commercial Services",
  "Real Estate & Property Services",
  "Fitness & Lifestyle Brands",
  "Nonprofits & Civic Groups",
  "Consultants & Coaches",
];

const process = [
  {
    title: "Discovery & Diagnostic Review",
    description:
      "We begin by understanding the business model, offer, audience, current marketing activity, competitors, digital presence, sales process, and immediate growth barriers.",
  },
  {
    title: "AI-Assisted Research & Market Intelligence",
    description:
      "We review search demand, social presence, customer behavior, competitor positioning, local market signals, content gaps, AI-assisted insights, and opportunities for differentiation.",
  },
  {
    title: "Strategy & Positioning Blueprint",
    description:
      "We define the market position, messaging framework, audience priorities, recommended channels, campaign direction, AI workflow opportunities, and growth priorities.",
  },
  {
    title: "Asset, Campaign & System Buildout",
    description:
      "We help create or improve the practical assets needed to execute: website copy, landing pages, content plans, ad messaging, SEO updates, social optimization, lead magnets, animation concepts, and follow-up flows.",
  },
  {
    title: "Launch & Execution Support",
    description:
      "We help move the plan into market with clear timelines, campaign structure, content direction, advertising support, and accountability around implementation.",
  },
  {
    title: "Measurement, Optimization & Scale",
    description:
      "We review performance, identify what is working, refine what is underperforming, and create recommendations to improve conversion, visibility, and revenue impact over time.",
  },
];

const caseStudies = [
  {
    title: "Local Service Growth System",
    category: "SEO • Website Strategy • Lead Generation",
    challenge:
      "A service-based organization needed stronger visibility, clearer messaging, and a more structured path to generate qualified inquiries.",
    solution:
      "BrownHill developed a visibility plan focused on search optimization, service-page clarity, local positioning, and lead-capture improvements.",
    outcome:
      "The organization gained a clearer market position, stronger digital presence, and a practical system for turning visibility into customer opportunities.",
  },
  {
    title: "Brand Positioning Reset",
    category: "Messaging • Research • Strategy",
    challenge:
      "An organization had marketing activity in place, but its message was unclear and did not communicate why customers should choose them.",
    solution:
      "BrownHill refined the brand language, clarified audience priorities, strengthened the value proposition, and created a more focused messaging framework.",
    outcome:
      "The brand became easier to understand, more credible, and better positioned for campaign execution.",
  },
  {
    title: "AI Campaign Readiness Blueprint",
    category: "Advertising • AI • Content • Analytics",
    challenge:
      "A growth-minded business wanted to advertise but needed stronger strategy, creative direction, AI-assisted content systems, and performance tracking before spending money.",
    solution:
      "BrownHill built a campaign blueprint covering audience targeting, offer positioning, creative direction, content priorities, AI-assisted production, and performance tracking.",
    outcome:
      "The client received a disciplined marketing roadmap designed to reduce wasted spend, improve campaign focus, and move faster with smarter creative support.",
  },
];

const engagementModels = [
  {
    title: "Strategic Audit",
    description:
      "A focused review of the client’s marketing, website, SEO, social presence, messaging, AI readiness, and growth opportunities.",
  },
  {
    title: "Growth Blueprint",
    description:
      "A comprehensive strategy engagement that produces a practical roadmap for positioning, visibility, content, advertising, lead generation, AI usage, and performance measurement.",
  },
  {
    title: "Monthly Advisory & Execution Support",
    description:
      "Ongoing support for clients that need consistent marketing direction, campaign planning, optimization, reporting, AI-assisted workflows, and hands-on help improving their growth system.",
  },
  {
    title: "Campaign or Launch Project",
    description:
      "Project-based support for new offers, brand launches, local campaigns, social campaigns, advertising initiatives, website improvements, AI creative systems, or lead-generation pushes.",
  },
];

const whyBrownHill = [
  "We do not start with random tactics — we start with the business problem.",
  "We connect SEO, social, advertising, research, AI, content, and sales enablement into one growth framework.",
  "We help clients become clearer, more credible, more visible, and more prepared to convert attention into revenue.",
  "We bring a founder-led mindset: practical, ambitious, disciplined, and focused on building long-term brand equity.",
];

const homeSlides = [
  {
    label: "AI-Powered Marketing",
    title: "Marketing intelligence that feels alive.",
    text:
      "BrownHill blends AI, culture, research, and creative strategy to help brands see the market sharper, move faster, and grow with more confidence.",
  },
  {
    label: "Animated Brand Experiences",
    title: "Websites should not just be seen. They should be remembered.",
    text:
      "We build digital experiences with movement, message, and meaning — turning ordinary websites into brand moments that feel premium, modern, and unforgettable.",
  },
  {
    label: "Culture-Rooted Strategy",
    title: "Built with cultural understanding. Engineered for growth.",
    text:
      "BrownHill helps organizations sharpen their message, strengthen their brand presence, and connect with audiences through strategy, insight, and performance discipline.",
  },
  {
    label: "Brand Management",
    title: "Stronger brands are managed, not guessed.",
    text:
      "We help organizations shape how they are seen, understood, remembered, and trusted across websites, campaigns, content, social media, and customer touchpoints.",
  },
];

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Strategy Companion",
    description:
      "BrownHill uses AI-assisted strategy tools to help clients identify audience gaps, campaign opportunities, content ideas, search intent, and smarter paths to growth.",
    tags: ["AI Planning", "Content Ideas", "Growth Prompts"],
  },
  {
    icon: BarChart3,
    title: "Predictive Marketing Signals",
    description:
      "We help brands turn data into direction by reviewing digital behavior, search demand, content performance, lead sources, and market movement.",
    tags: ["Analytics", "Market Signals", "Optimization"],
  },
  {
    icon: Sparkles,
    title: "Creative Automation",
    description:
      "From campaign concepts to social themes and brand messaging, BrownHill helps organizations use AI to create faster without losing human taste or cultural intelligence.",
    tags: ["Creative Direction", "Brand Voice", "Campaign Concepts"],
  },
  {
    icon: Target,
    title: "Smarter Lead Generation",
    description:
      "AI-supported marketing systems help clarify the right audience, right offer, right message, and right follow-up so attention can turn into real opportunities.",
    tags: ["Lead Flow", "Audience Targeting", "Conversion"],
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

const aiSignalInsights = {
  "Audience Behavior":
    "Audience behavior reveals what people are searching for, what they respond to, where they hesitate, and what motivates them to take action.",
  "Search Demand":
    "Search demand shows what customers already want. BrownHill uses it to shape SEO, website pages, content topics, and campaign priorities.",
  "Brand Voice":
    "Brand voice controls how your organization sounds across every touchpoint. A strong voice makes your brand easier to trust and remember.",
  "Campaign Ideas":
    "Campaign ideas become stronger when they connect audience pain points, cultural insight, clear offers, creative direction, and measurable action.",
  "Lead Flow":
    "Lead flow connects visibility to revenue. It includes landing pages, forms, calls-to-action, follow-up messaging, and sales handoff.",
  "Performance Data":
    "Performance data shows what is working, what is wasting money, and where the next optimization opportunity lives.",
};

const aiBlueprints = {
  Visibility: {
    score: 92,
    title: "Visibility Growth Blueprint",
    summary:
      "Best for organizations that need stronger search presence, better website clarity, and more qualified attention.",
    steps: [
      "Audit SEO, website structure, and Google Business Profile.",
      "Identify audience search intent and service-page gaps.",
      "Build a content and local visibility roadmap.",
      "Track rankings, traffic quality, and conversion movement.",
    ],
  },
  Brand: {
    score: 88,
    title: "Brand Intelligence Blueprint",
    summary:
      "Best for brands that need clearer messaging, stronger identity, and a more memorable digital presence.",
    steps: [
      "Clarify audience, positioning, promise, and personality.",
      "Build a stronger brand voice and message hierarchy.",
      "Create animated website moments and visual storytelling cues.",
      "Align social, website, content, and campaign language.",
    ],
  },
  Revenue: {
    score: 95,
    title: "Revenue Signal Blueprint",
    summary:
      "Best for organizations that need leads, follow-up systems, conversion strategy, and campaign discipline.",
    steps: [
      "Define the offer, audience, CTA, and lead capture path.",
      "Create landing page and campaign messaging.",
      "Build follow-up scripts, email flows, and CRM recommendations.",
      "Review lead source, conversion rate, and sales movement.",
    ],
  },
};

const aiModules = [
  {
    icon: BrainCircuit,
    title: "AI Brand Brain",
    description:
      "A brand intelligence layer that organizes voice, message, audience, objections, offers, content themes, and campaign direction.",
  },
  {
    icon: Workflow,
    title: "AI Content Engine",
    description:
      "A repeatable system for turning strategy into social posts, email ideas, blog topics, landing page copy, video scripts, and ad concepts.",
  },
  {
    icon: Gauge,
    title: "AI Growth Dashboard",
    description:
      "A performance layer that helps leaders understand visibility, lead flow, content output, campaign movement, and optimization priorities.",
  },
  {
    icon: WandSparkles,
    title: "AI Creative Studio",
    description:
      "A creative support system for campaign angles, visual direction, animation concepts, brand moments, and unforgettable digital experiences.",
  },
];

const quickPrompts = [
  "How can BrownHill improve my SEO?",
  "Help me clarify my brand message.",
  "What AI tools can improve my marketing?",
  "How do I generate better leads?",
  "How can animation make my website better?",
  "What package should I start with?",
];

function IconCircle({ icon: Icon }) {
  return (
    <div className="icon-circle">
      <Icon size={28} />
    </div>
  );
}

function ButtonLink({ children, variant = "primary", href = "#contact" }) {
  return (
    <a className={`button ${variant}`} href={href}>
      {children} <ArrowRight size={20} />
    </a>
  );
}

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeSignal, setActiveSignal] = useState("Audience Behavior");
  const [activeBlueprint, setActiveBlueprint] = useState("Visibility");
  const [activeAiFeature, setActiveAiFeature] = useState(aiFeatures[0].title);
  const [scannerGoal, setScannerGoal] = useState("Visibility");
  const [scannerStage, setScannerStage] = useState("Growing");
  const [scannerChannel, setScannerChannel] = useState("Website");
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "assistant",
      text:
        "Hi, I’m Edna — your BrownHill AI assistant. Ask me about SEO, branding, advertising, lead generation, AI marketing, animation, or how BrownHill can help your organization grow.",
    },
  ]);

  const chatEndRef = useRef(null);
  const typingTimerRef = useRef(null);

  const selectedBlueprint = aiBlueprints[activeBlueprint];
  const selectedFeature =
    aiFeatures.find((feature) => feature.title === activeAiFeature) ||
    aiFeatures[0];

  const scannerScore =
    68 +
    (scannerGoal === "Revenue" ? 14 : scannerGoal === "Brand" ? 10 : 8) +
    (scannerStage === "Scaling" ? 8 : scannerStage === "Established" ? 6 : 4) +
    (scannerChannel === "AI Systems" ? 8 : scannerChannel === "Website" ? 6 : 5);

  const scannerRecommendation =
    scannerGoal === "Revenue"
      ? "Focus on offer clarity, landing pages, CRM follow-up, ad messaging, and lead-source reporting."
      : scannerGoal === "Brand"
      ? "Focus on positioning, brand voice, customer perception, visual consistency, storytelling, and animated digital moments."
      : "Focus on SEO, local visibility, website structure, content mapping, and Google Business Profile improvements.";

  const generatedPrompt = `Create a ${scannerGoal.toLowerCase()} marketing plan for a ${scannerStage.toLowerCase()} organization using ${scannerChannel.toLowerCase()} as the primary growth channel. Include audience insight, brand messaging, campaign ideas, AI-assisted workflows, lead generation steps, and performance metrics.`;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % homeSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (chatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, chatOpen, isTyping]);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, []);

  function getEdnaResponse(message) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("seo") || lowerMessage.includes("search")) {
      return "SEO starts with visibility and intent. BrownHill would review your website structure, keyword opportunities, local search presence, service pages, competitors, and Google Business Profile so your brand can show up when customers are already looking.";
    }

    if (
      lowerMessage.includes("brand") ||
      lowerMessage.includes("branding") ||
      lowerMessage.includes("message")
    ) {
      return "Branding is more than a logo. BrownHill would help clarify your positioning, voice, promise, customer perception, visual consistency, and the message that makes people trust and remember your organization.";
    }

    if (
      lowerMessage.includes("ad") ||
      lowerMessage.includes("advertising") ||
      lowerMessage.includes("campaign")
    ) {
      return "Before spending money on ads, BrownHill would define the audience, offer, message, creative direction, landing page, follow-up path, and performance metrics. Smart campaigns are built before they are launched.";
    }

    if (
      lowerMessage.includes("lead") ||
      lowerMessage.includes("sales") ||
      lowerMessage.includes("customer")
    ) {
      return "Lead generation works best when visibility, messaging, trust, and follow-up are connected. BrownHill helps build systems that attract attention, capture interest, and move prospects toward action.";
    }

    if (
      lowerMessage.includes("animation") ||
      lowerMessage.includes("animate") ||
      lowerMessage.includes("motion") ||
      lowerMessage.includes("website")
    ) {
      return "Animation can make your website feel premium, modern, and unforgettable when it supports the message instead of distracting from it. BrownHill can use motion, interactive sections, animated signal cards, and stronger visual storytelling to make your brand feel alive.";
    }

    if (
      lowerMessage.includes("ai") ||
      lowerMessage.includes("automation") ||
      lowerMessage.includes("tools")
    ) {
      return "AI should make marketing sharper, not generic. BrownHill can use AI-assisted research, content planning, campaign concepts, SEO insights, audience mapping, reporting, and creative workflows while keeping the brand voice human and culturally intelligent.";
    }

    if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("package")
    ) {
      return "A smart starting point would be a Strategic Audit or Growth Blueprint. BrownHill can also support monthly advisory, campaign launches, AI marketing systems, and animated website experience upgrades depending on the client’s goals and timeline.";
    }

    return "Great question. BrownHill helps organizations grow by clarifying the market, message, audience, visibility gaps, and conversion path — then building smarter strategy across SEO, social media, advertising, content, lead generation, AI-assisted insights, animation, and analytics.";
  }

  function handleChatSubmit(event, presetMessage = "") {
    if (event) {
      event.preventDefault();
    }

    if (isTyping) return;

    const userMessage = (presetMessage || chatMessage).trim();

    if (!userMessage) return;

    setChatHistory((messages) => [
      ...messages,
      { sender: "user", text: userMessage },
    ]);

    setChatMessage("");
    setIsTyping(true);

    typingTimerRef.current = setTimeout(() => {
      const response = getEdnaResponse(userMessage);

      setChatHistory((messages) => [
        ...messages,
        { sender: "assistant", text: response },
      ]);

      setIsTyping(false);
    }, 700);
  }

  function handleSignalClick(signal) {
    setActiveSignal(signal);

    if (signal === "Search Demand") {
      setActiveBlueprint("Visibility");
    }

    if (signal === "Brand Voice" || signal === "Campaign Ideas") {
      setActiveBlueprint("Brand");
    }

    if (signal === "Lead Flow" || signal === "Performance Data") {
      setActiveBlueprint("Revenue");
    }
  }

  return (
    <main className="site theme-dark">
      <section className="hero">
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
              Marketing Intelligence • AI • Media • Growth
            </p>
          </div>

          <div className="nav-links">
            <a href="#firm">The Firm</a>
            <a href="#culture">Culture</a>
            <a href="#services">Capabilities</a>
            <a href="#ai-lab">AI Lab</a>
            <a href="#process">Method</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">
              <Sparkles size={16} /> AI • Animation • Culture • Brand
              Management • SEO • Research • Growth Strategy
            </p>

            <div className="home-slider">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <p className="slide-label">{homeSlides[activeSlide].label}</p>
                <h1>{homeSlides[activeSlide].title}</h1>
                <p className="hero-copy">{homeSlides[activeSlide].text}</p>
              </motion.div>

              <div className="slider-dots">
                {homeSlides.map((slide, index) => (
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
              <ButtonLink>Request a Strategy Consultation</ButtonLink>
              <ButtonLink variant="secondary" href="#ai-lab">
                Explore AI Lab
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
                  <p>BrownHill Intelligence Engine</p>
                  <span>AI • Culture • Strategy • Growth</span>
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
                  SEO
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
                  Brand
                </motion.div>

                <motion.div
                  className="orbit-chip chip-four"
                  animate={{ x: [8, -8, 8] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                >
                  Growth
                </motion.div>

                <div className="ai-core">
                  <Sparkles size={38} />
                  <p>BROWNHILL</p>
                  <span>Market Signal Engine</span>
                </div>
              </div>

              <div className="signal-list">
                {aiSignals.map((signal) => (
                  <button
                    key={signal}
                    type="button"
                    className={activeSignal === signal ? "active" : ""}
                    onClick={() => handleSignalClick(signal)}
                  >
                    {signal}
                  </button>
                ))}
              </div>

              <div className="ai-insight-box">
                <p className="ai-insight-label">Active Signal</p>
                <h3>{activeSignal}</h3>
                <p>{aiSignalInsights[activeSignal]}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="firm" className="section cream">
        <div className="two-col">
          <div>
            <p className="section-label">The Firm</p>
            <h2>Marketing strategy built for clarity, visibility, and growth.</h2>
            <p>
              BrownHill helps businesses move beyond scattered marketing
              activity and build stronger systems for market positioning,
              audience insight, digital visibility, brand management, AI-powered
              marketing systems, and customer acquisition.
            </p>
            <p>
              We help organizations understand their market, sharpen their
              message, show up stronger online, and connect brand visibility to
              measurable growth.
            </p>
          </div>

          <div className="stack">
            {whyBrownHill.map((advantage) => (
              <div key={advantage} className="proof-card">
                <ShieldCheck size={24} />
                <p>{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="section dark">
        <div className="two-col">
          <div>
            <p className="section-label gold">Culture & Strategy</p>
            <h2>Rooted in culture. Built for growth.</h2>
            <p>
              BrownHill is a Black-owned strategic marketing firm built to help
              organizations grow with clarity, culture, AI-assisted insight, and
              measurable direction.
            </p>
            <p>
              We believe culture shapes how people see, trust, and choose
              brands. Our perspective helps us understand community, identity,
              influence, language, and the emotional signals that move people to
              act.
            </p>
            <p>
              BrownHill combines cultural understanding with marketing strategy,
              brand management, research, analytics, digital visibility,
              advertising, content, AI, animation, and lead generation to help
              organizations build stronger market presence and more disciplined
              growth systems.
            </p>
          </div>

          <div className="stack">
            <div className="proof-card cultural-card">
              <Sparkles size={24} />
              <p>Black-owned and culture-rooted, without limiting who we serve.</p>
            </div>
            <div className="proof-card cultural-card">
              <Target size={24} />
              <p>
                Business-first strategy built around visibility, credibility,
                trust, and growth.
              </p>
            </div>
            <div className="proof-card cultural-card">
              <BarChart3 size={24} />
              <p>
                Marketing decisions supported by research, analytics, AI
                signals, and performance discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="centered">
          <p className="section-label">Core Framework</p>
          <h2>Four pillars guide how BrownHill builds marketing systems.</h2>
          <p>
            The firm does not treat marketing as disconnected tasks. Each
            engagement is built around insight, strategy, execution, and
            measurable improvement.
          </p>
        </div>

        <div className="grid four">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="card">
                <IconCircle icon={Icon} />
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="services" className="section cream">
        <div className="centered wide">
          <p className="section-label">Capabilities</p>
          <h2>
            Full-scope marketing services built to increase visibility,
            credibility, and growth.
          </h2>
          <p>
            BrownHill helps businesses strengthen their market presence through
            strategy, SEO, social media optimization, brand development, brand
            management, research, advertising, content, analytics, AI-assisted
            systems, animated website experiences, and lead generation.
          </p>
        </div>

        <div className="grid two">
          {practiceAreas.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card service-card">
                <IconCircle icon={Icon} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="outcomes">
                  {service.outcomes.map((outcome) => (
                    <span key={outcome}>
                      <CheckCircle2 size={16} /> {outcome}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="ai-lab" className="section ai-lab-section">
        <div className="centered wide">
          <p className="section-label gold">AI Marketing Lab</p>
          <h2>Where strategy, artificial intelligence, and brand experience meet.</h2>
          <p>
            BrownHill helps organizations use AI without sounding generic. The
            goal is not to replace creativity — it is to sharpen strategy, speed
            up execution, improve visibility, and build marketing systems that
            feel smarter, faster, and more memorable.
          </p>
        </div>

        <div className="ai-feature-grid">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeAiFeature === feature.title;

            return (
              <motion.button
                key={feature.title}
                type="button"
                className={`ai-feature-card ${isActive ? "active" : ""}`}
                onClick={() => setActiveAiFeature(feature.title)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="ai-card-icon">
                  <Icon size={30} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <div className="ai-feature-tags">
                  {feature.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="ai-console">
          <div>
            <p className="ai-insight-label">Selected AI Capability</p>
            <h3>{selectedFeature.title}</h3>
            <p>{selectedFeature.description}</p>
          </div>

          <div className="ai-console-panel">
            <div className="ai-score-ring">
              <span>{selectedBlueprint.score}</span>
              <small>Signal Score</small>
            </div>

            <div>
              <p className="ai-insight-label">Strategy Console</p>

              <div className="blueprint-tabs">
                {Object.keys(aiBlueprints).map((blueprint) => (
                  <button
                    key={blueprint}
                    type="button"
                    className={activeBlueprint === blueprint ? "active" : ""}
                    onClick={() => setActiveBlueprint(blueprint)}
                  >
                    {blueprint}
                  </button>
                ))}
              </div>

              <h3>{selectedBlueprint.title}</h3>
              <p>{selectedBlueprint.summary}</p>

              <div className="blueprint-steps">
                {selectedBlueprint.steps.map((step, index) => (
                  <div key={step}>
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ai-module-grid">
          {aiModules.map((module) => {
            const Icon = module.icon;

            return (
              <div key={module.title} className="ai-module-card">
                <Icon size={30} />
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
            );
          })}
        </div>

        <div className="ai-scanner">
          <div>
            <p className="ai-insight-label">AI Readiness Scanner</p>
            <h3>Build a smarter marketing starting point.</h3>
            <p>
              Select a growth priority, business stage, and primary channel.
              BrownHill’s scanner creates a simple strategy signal for where the
              organization should focus first.
            </p>
          </div>

          <div className="scanner-controls">
            <label>
              Growth Priority
              <select
                value={scannerGoal}
                onChange={(event) => setScannerGoal(event.target.value)}
              >
                <option>Visibility</option>
                <option>Brand</option>
                <option>Revenue</option>
              </select>
            </label>

            <label>
              Business Stage
              <select
                value={scannerStage}
                onChange={(event) => setScannerStage(event.target.value)}
              >
                <option>Growing</option>
                <option>Established</option>
                <option>Scaling</option>
              </select>
            </label>

            <label>
              Primary Channel
              <select
                value={scannerChannel}
                onChange={(event) => setScannerChannel(event.target.value)}
              >
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
              <h3>{scannerGoal} Priority</h3>
              <p>{scannerRecommendation}</p>

              <div className="generated-prompt">
                <p className="ai-insight-label">Generated AI Strategy Prompt</p>
                <p>{generatedPrompt}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-marquee">
          <div className="ai-marquee-track">
            {[...aiSignals, ...aiSignals, ...aiSignals].map((signal, index) => (
              <span key={`${signal}-${index}`}>{signal}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="two-col">
          <div>
            <p className="section-label gold">Related Capabilities</p>
            <h2>
              Everything connected to marketing growth lives in the BrownHill
              ecosystem.
            </h2>
            <p>
              Some clients need a complete strategy. Others need a focused
              improvement in one area. BrownHill can support individual
              marketing needs while keeping the larger growth picture in view.
            </p>
          </div>

          <div className="tag-grid">
            {relatedCapabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section white">
        <div className="two-col">
          <div>
            <p className="section-label">The BrownHill Method</p>
            <h2>A deeper process for smarter marketing decisions and better execution.</h2>
            <p>
              Our firm’s process is designed to reduce guesswork. The firm
              studies the business, identifies growth gaps, builds strategy,
              supports execution, and improves performance through ongoing
              learning.
            </p>
          </div>

          <div className="stack">
            {process.map((step, index) => (
              <div key={step.title} className="step-card">
                <div className="step-number">{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="centered wide">
          <p className="section-label">Engagement Models</p>
          <h2>Flexible ways to work with BrownHill.</h2>
          <p>
            Our firm can serve as a strategic advisor, project partner, campaign
            resource, AI implementation partner, or ongoing marketing growth firm
            depending on the client’s stage and needs.
          </p>
        </div>

        <div className="grid four">
          {engagementModels.map((model) => (
            <div key={model.title} className="card">
              <ClipboardCheck size={42} className="standalone-icon" />
              <h3>{model.title}</h3>
              <p>{model.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="two-col">
          <div>
            <p className="section-label gold">Industries We Serve</p>
            <h2>
              BrownHill works with organizations that need stronger visibility,
              clearer messaging, better brand management, and more disciplined
              marketing systems.
            </h2>
            <p>
              We serve healthcare and wellness brands, professional service
              firms, small and mid-sized businesses, community-centered
              organizations, Black-owned and diverse businesses, and corporate or
              institutional brands that want to grow with more strategy,
              credibility, and market clarity.
            </p>
          </div>

          <div className="tag-grid">
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="section case-study-section">
        <div className="centered wide">
          <p className="section-label">Case Study Frameworks</p>
          <h2>How BrownHill turns marketing problems into growth systems.</h2>
          <p>
            These examples show the type of strategic work we build for
            organizations that need stronger visibility, clearer messaging, AI
            support, and a more disciplined path to customer acquisition.
          </p>
        </div>

        <div className="grid three">
          {caseStudies.map((study) => (
            <div key={study.title} className="case-card">
              <p className="case-category">{study.category}</p>
              <h3>{study.title}</h3>

              <div>
                <span>Challenge</span>
                <p>{study.challenge}</p>
              </div>

              <div>
                <span>Solution</span>
                <p>{study.solution}</p>
              </div>

              <div>
                <span>Outcome</span>
                <p>{study.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section white">
        <div className="founder-panel">
          <div>
            <p className="section-label gold">
              Founder, CEO & Marketing Strategist
            </p>
            <h2>Michael Hill</h2>
            <p>
              BrownHill Marketing and Media was founded to help businesses
              compete with stronger strategy, sharper messaging, AI-assisted
              intelligence, animated digital presence, and more intentional
              growth systems.
            </p>
            <p>
              The mission is to help serious operators become more visible, more
              credible, more informed, and better positioned to win in their
              market.
            </p>
          </div>

          <div className="founder-list">
            <p>
              <Lightbulb size={24} /> Marketing Intelligence
            </p>
            <p>
              <Globe2 size={24} /> Digital Visibility
            </p>
            <p>
              <Users size={24} /> Audience Development
            </p>
            <p>
              <Zap size={24} /> AI Growth Systems
            </p>
          </div>
        </div>
      </section>

      <section className="section video-section">
        <div className="two-col video-layout">
          <div>
            <p className="section-label gold">BrownHill Video</p>
            <h2>Marketing should not feel random. It should feel strategic.</h2>
            <p>
              BrownHill helps organizations move from scattered activity to
              clear positioning, stronger visibility, smarter campaigns, AI
              creative systems, animated brand experiences, and measurable
              growth systems.
            </p>
            <p>
              This video section can feature a short BrownHill brand intro,
              founder message, service overview, or client-facing marketing
              explainer.
            </p>
          </div>

          <div className="video-card">
            <div className="video-placeholder">
              <PlayCircle size={64} />
              <h3>BrownHill Marketing Intro</h3>
              <p>Short strategy video coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="two-col">
          <div>
            <p className="section-label gold">Contact the Firm</p>
            <h2>Let’s build the marketing system your organization deserves.</h2>
            <p>
              Use the form to request a strategy consultation. BrownHill will
              review your goals, current marketing, digital presence, research
              needs, advertising opportunities, AI readiness, animation ideas,
              and best path toward stronger visibility and growth.
            </p>

            <div className="contact-list">
              <p>
                <Phone size={20} /> 850-221-3089
              </p>
              <p>
                <Mail size={20} /> info@emailaddress.com
              </p>
              <p>
                <Globe2 size={20} /> www.websiteaddress.com
              </p>
              <p>
                <MapPin size={20} /> Houston, TX
              </p>
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

            <label>Primary Area of Interest</label>
            <select>
              <option>SEO / Search Visibility</option>
              <option>SMO / Social Media Optimization</option>
              <option>Marketing Strategy</option>
              <option>Brand Management</option>
              <option>AI Marketing Systems</option>
              <option>Animated Website Experience</option>
              <option>Marketing Research</option>
              <option>Advertising / Campaign Development</option>
              <option>Brand Development</option>
              <option>Lead Generation</option>
              <option>Full Growth Strategy</option>
            </select>

            <label>What growth challenge should we help solve?</label>
            <textarea placeholder="Tell us about your marketing goals, current challenges, target audience, advertising needs, research needs, AI needs, animation ideas, or growth opportunities..." />

            <button type="submit">Request Consultation</button>

            {submitted && (
              <p className="success">
                Thank you. This demo form is ready to connect to BrownHill’s
                email, CRM, or booking system.
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
                placeholder="Ask about SEO, branding, ads, AI, or growth..."
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
        © {new Date().getFullYear()} BrownHill Marketing & Media, LLC. A
        strategic marketing intelligence, media, advertising, AI, animation, and
        growth advisory firm. All rights reserved.
      </footer>
    </main>
  );
}
