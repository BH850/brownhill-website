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

/*
  LOCAL CMS STRUCTURE
  This content is structured like a CMS so it can later connect to Sanity,
  Contentful, Strapi, Payload, or another headless CMS.
*/

const cms = {
  site: {
    name: "BrownHill Marketing & Media",
    tagline: "Clarity • Visibility • Conversion",
    positioning:
      "A culture-rooted marketing and media firm helping service-based brands turn unclear marketing into clear messaging, stronger visibility, and better lead-generation systems.",
    phone: "850-221-3089",
    email: "info@emailaddress.com",
    website: "www.websiteaddress.com",
    location: "Houston, TX",
  },

  navigation: [
    { label: "Diagnostic", path: "/marketing-diagnostic" },
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Growth System", path: "/growth-system" },
    { label: "Resources", path: "/resources" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],

  heroSlides: [
    {
      label: "Clarity",
      title:
        "Marketing that makes your brand clearer, more visible, and easier to choose.",
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
  ],

  marqueeWords: [
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
  ],

  outcomes: [
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
  ],

  services: [
    {
      slug: "brand-strategy",
      label: "01",
      title: "Brand Strategy",
      summary:
        "Messaging, positioning, brand voice, offer clarity, audience definition, and brand management.",
      promise:
        "We help your organization become easier to understand, easier to trust, and easier to choose.",
      deliverables: [
        "Brand positioning",
        "Audience definition",
        "Offer clarity",
        "Messaging framework",
        "Brand voice direction",
        "Brand management guidance",
      ],
      relatedIndustries: ["healthcare-wellness", "professional-services"],
      relatedResources: ["marketing-clarity", "brand-messaging"],
    },
    {
      slug: "content-media",
      label: "02",
      title: "Content & Media",
      summary:
        "Social media content, campaign ideas, video scripts, creative direction, storytelling, and content planning.",
      promise:
        "We turn your brand message into content people can understand, remember, and act on.",
      deliverables: [
        "Content strategy",
        "Social media direction",
        "Campaign concepts",
        "Video script ideas",
        "Creative messaging",
        "Content calendar planning",
      ],
      relatedIndustries: ["local-service-businesses", "nonprofits"],
      relatedResources: ["content-planning", "campaign-strategy"],
    },
    {
      slug: "seo-visibility",
      label: "03",
      title: "SEO & Visibility",
      summary:
        "Website structure, search strategy, local SEO, service pages, content planning, and audience intent.",
      promise:
        "We help your brand show up more clearly when people are searching for what you offer.",
      deliverables: [
        "SEO review",
        "Keyword direction",
        "Local visibility strategy",
        "Service page structure",
        "Content topic planning",
        "Google Business Profile guidance",
      ],
      relatedIndustries: ["healthcare-wellness", "local-service-businesses"],
      relatedResources: ["seo-basics", "local-seo"],
    },
    {
      slug: "ai-marketing-systems",
      label: "04",
      title: "AI Marketing Systems",
      summary:
        "AI-assisted workflows for content, campaigns, customer research, reporting, productivity, and brand voice consistency.",
      promise:
        "We use AI to help your marketing move faster without becoming generic or disconnected from your brand.",
      deliverables: [
        "AI content workflow",
        "Prompt system",
        "Campaign idea workflow",
        "Brand voice prompts",
        "Research prompts",
        "Reporting support",
      ],
      relatedIndustries: ["professional-services", "corporate-institutional-brands"],
      relatedResources: ["ai-marketing", "brand-voice-ai"],
    },
    {
      slug: "lead-generation",
      label: "05",
      title: "Lead Generation",
      summary:
        "Landing pages, calls-to-action, lead flow, follow-up strategy, conversion improvement, and growth pathways.",
      promise:
        "We connect attention to action so your marketing has a clearer path toward calls, forms, bookings, and sales conversations.",
      deliverables: [
        "Lead flow review",
        "CTA strategy",
        "Landing page direction",
        "Follow-up path",
        "Conversion improvement",
        "Sales conversation alignment",
      ],
      relatedIndustries: ["professional-services", "local-service-businesses"],
      relatedResources: ["lead-generation", "conversion-paths"],
    },
  ],

  industries: [
    {
      slug: "healthcare-wellness",
      title: "Healthcare & Wellness",
      summary:
        "Marketing for clinics, wellness providers, healthcare service brands, and patient-focused organizations that need trust, clarity, and visibility.",
      needs: [
        "Clear service messaging",
        "Local SEO",
        "Patient trust-building content",
        "Lead and appointment pathways",
      ],
      relatedServices: ["brand-strategy", "seo-visibility", "lead-generation"],
    },
    {
      slug: "professional-services",
      title: "Professional Services",
      summary:
        "Marketing for consultants, advisors, agencies, real estate professionals, legal-adjacent services, and service experts who need stronger positioning.",
      needs: [
        "Sharper positioning",
        "Thought leadership content",
        "Lead-generation systems",
        "Offer clarity",
      ],
      relatedServices: ["brand-strategy", "ai-marketing-systems", "lead-generation"],
    },
    {
      slug: "local-service-businesses",
      title: "Local Service Businesses",
      summary:
        "Marketing for service businesses that need to show up locally, explain their value quickly, and convert attention into calls or bookings.",
      needs: [
        "Local search visibility",
        "Better service pages",
        "Review-driven trust",
        "Clear calls-to-action",
      ],
      relatedServices: ["seo-visibility", "content-media", "lead-generation"],
    },
    {
      slug: "nonprofits",
      title: "Nonprofits & Community Organizations",
      summary:
        "Marketing for mission-driven organizations that need storytelling, visibility, donor trust, volunteer engagement, and community clarity.",
      needs: [
        "Mission storytelling",
        "Community campaigns",
        "Donor messaging",
        "Content planning",
      ],
      relatedServices: ["content-media", "brand-strategy", "ai-marketing-systems"],
    },
    {
      slug: "corporate-institutional-brands",
      title: "Corporate & Institutional Brands",
      summary:
        "Marketing support for organizations that need cleaner messaging, campaign strategy, brand management, and smarter content systems.",
      needs: [
        "Brand management",
        "Campaign direction",
        "AI-assisted content workflows",
        "Internal and external messaging",
      ],
      relatedServices: ["brand-strategy", "content-media", "ai-marketing-systems"],
    },
    {
      slug: "black-owned-businesses",
      title: "Black-Owned Businesses",
      summary:
        "Culture-rooted marketing support for Black-owned businesses that want to grow with clarity, creativity, visibility, and strategy.",
      needs: [
        "Culture-rooted brand positioning",
        "Content strategy",
        "Local and digital visibility",
        "Lead-generation pathways",
      ],
      relatedServices: ["brand-strategy", "content-media", "seo-visibility"],
    },
  ],

  growthSystem: [
    {
      slug: "diagnose",
      label: "Diagnose",
      title: "Review what is working and what is unclear.",
      summary:
        "We look at your brand, website, SEO, content, audience, competitors, and lead flow to find the real growth gaps.",
      steps: [
        "Review website and service pages",
        "Evaluate brand message",
        "Audit SEO and visibility",
        "Identify content gaps",
        "Map the lead flow",
      ],
    },
    {
      slug: "clarify",
      label: "Clarify",
      title: "Sharpen the message and offer.",
      summary:
        "We refine your positioning, voice, service language, audience focus, and brand story so your marketing becomes easier to understand.",
      steps: [
        "Define the audience",
        "Clarify the offer",
        "Build the message framework",
        "Sharpen brand voice",
        "Create clear calls-to-action",
      ],
    },
    {
      slug: "build",
      label: "Build",
      title: "Create the assets and systems.",
      summary:
        "We build content direction, service pages, campaign ideas, SEO structure, lead pathways, and AI-assisted workflows.",
      steps: [
        "Structure service pages",
        "Plan content topics",
        "Build campaign direction",
        "Create AI workflow support",
        "Improve lead pathways",
      ],
    },
    {
      slug: "grow",
      label: "Grow",
      title: "Improve what works.",
      summary:
        "We use performance insights and smarter systems to strengthen visibility, content, conversion, and long-term brand growth.",
      steps: [
        "Track performance signals",
        "Improve content direction",
        "Refine calls-to-action",
        "Strengthen visibility",
        "Use AI to move faster with focus",
      ],
    },
  ],

  resources: [
    {
      slug: "marketing-clarity",
      category: "Marketing Clarity",
      title: "Why unclear marketing costs service businesses leads",
      summary:
        "A guide to understanding how unclear messaging weakens trust, slows decisions, and creates missed opportunities.",
      relatedServices: ["brand-strategy", "lead-generation"],
    },
    {
      slug: "brand-messaging",
      category: "Marketing Clarity",
      title: "How to make your brand message easier to understand",
      summary:
        "A practical breakdown of audience clarity, offer clarity, and simple messaging that helps people take action.",
      relatedServices: ["brand-strategy"],
    },
    {
      slug: "seo-basics",
      category: "SEO",
      title: "SEO basics for service-based brands",
      summary:
        "A simple explanation of how service pages, keywords, local search, and content help people find your business.",
      relatedServices: ["seo-visibility"],
    },
    {
      slug: "local-seo",
      category: "SEO",
      title: "Local SEO signals that help people find you",
      summary:
        "A resource on local rankings, Google Business Profile activity, reviews, service pages, and location trust.",
      relatedServices: ["seo-visibility", "lead-generation"],
    },
    {
      slug: "ai-marketing",
      category: "AI Marketing",
      title: "How AI can support marketing without making it generic",
      summary:
        "A guide to using AI for research, content planning, campaign ideas, SEO insights, and reporting while keeping brand voice human.",
      relatedServices: ["ai-marketing-systems", "content-media"],
    },
    {
      slug: "brand-voice-ai",
      category: "AI Marketing",
      title: "Using AI to protect brand voice consistency",
      summary:
        "How prompts, examples, tone rules, and message frameworks can help AI content stay aligned with your brand.",
      relatedServices: ["ai-marketing-systems", "brand-strategy"],
    },
    {
      slug: "lead-generation",
      category: "Lead Generation",
      title: "What makes a lead-generation pathway work",
      summary:
        "A breakdown of attention, trust, calls-to-action, landing pages, forms, follow-up, and conversion improvement.",
      relatedServices: ["lead-generation"],
    },
    {
      slug: "conversion-paths",
      category: "Lead Generation",
      title: "How to connect content to calls, forms, and bookings",
      summary:
        "A resource on turning content and visibility into practical next steps that support sales conversations.",
      relatedServices: ["content-media", "lead-generation"],
    },
    {
      slug: "content-planning",
      category: "Content",
      title: "A smarter way to plan content for service businesses",
      summary:
        "How to plan content around audience questions, service education, trust, proof, and conversion.",
      relatedServices: ["content-media", "seo-visibility"],
    },
    {
      slug: "campaign-strategy",
      category: "Campaigns",
      title: "What a campaign needs before it launches",
      summary:
        "A simple campaign planning guide covering audience, offer, hook, creative direction, landing pages, and metrics.",
      relatedServices: ["content-media", "lead-generation"],
    },
  ],

  packages: [
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
  ],
};

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

function getPathFromHash() {
  const hash = window.location.hash.replace("#", "");
  return hash || "/";
}

function href(path) {
  return `#${path}`;
}

function findBySlug(collection, slug) {
  return collection.find((item) => item.slug === slug);
}

function ButtonLink({ children, variant = "primary", path = "/contact" }) {
  return (
    <a className={`button ${variant}`} href={href(path)}>
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
  const [currentPath, setCurrentPath] = useState(getPathFromHash());
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
      setActiveSlide((current) => (current + 1) % cms.heroSlides.length);
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
    function handleRouteChange() {
      setCurrentPath(getPathFromHash());
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("hashchange", handleRouteChange);

    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

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

  function handleLogoClick() {
    setLogoActive(true);
    setMobileMenuOpen(false);

    if (currentPath === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.location.hash = "/";
    }
  }

  function scrollToDiagnosticForm() {
    const form = document.getElementById("diagnostic-form");

    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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

  function renderSiloCard(item, path, typeLabel) {
    return (
      <a key={item.slug} className="silo-card" href={href(path)}>
        <p>{typeLabel}</p>
        <h3>{item.title}</h3>
        <span>{item.summary}</span>
        <strong>
          View Page <ArrowRight size={16} />
        </strong>
      </a>
    );
  }

  function renderHomePage() {
    const slide = cms.heroSlides[activeSlide];

    return (
      <>
        <section className="editorial-hero hero-with-engine cms-home-hero">
          <div className="glow glow-left" />
          <div className="glow glow-right" />

          <div className="hero-engine-grid clearer-hero-grid">
            <div className="hero-engine-copy">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <p className="eyebrow">
                  <Sparkles size={16} /> {slide.label}
                </p>
                <h1>{slide.title}</h1>
                <p className="hero-copy">{slide.text}</p>
              </motion.div>

              <div className="hero-actions hero-actions-left">
                <ButtonLink path="/marketing-diagnostic">
                  Start a Marketing Diagnostic
                </ButtonLink>

                <ButtonLink variant="secondary" path="/services">
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
                {cms.heroSlides.map((heroSlide, index) => (
                  <button
                    key={heroSlide.label}
                    type="button"
                    className={index === activeSlide ? "active" : ""}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show ${heroSlide.label}`}
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
            {[...cms.marqueeWords, ...cms.marqueeWords, ...cms.marqueeWords].map(
              (word, index) => (
                <span key={`${word}-${index}`}>{word}</span>
              )
            )}
          </div>
        </div>

        <section className="section editorial-section clear-direction-section">
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
            {cms.outcomes.map((outcome) => {
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

        <section className="section editorial-section dark-panel">
          <div className="centered wide">
            <p className="section-label gold">Services Silo</p>
            <h2>Clear services tied to real business outcomes.</h2>
            <p>
              Each service has its own page so visitors and search engines can clearly
              understand what BrownHill offers.
            </p>
          </div>

          <div className="cms-silo-grid">
            {cms.services.map((service) =>
              renderSiloCard(service, `/services/${service.slug}`, "Service")
            )}
          </div>
        </section>

        <section className="section editorial-section">
          <div className="editorial-two-col">
            <div>
              <p className="section-label gold">Industry Silo</p>
              <h2>Built for organizations with something real to offer.</h2>
            </div>

            <div>
              <p>
                We work best with businesses and organizations that have potential,
                but need stronger messaging, better visibility, cleaner content, and a
                smarter path from attention to action.
              </p>
            </div>
          </div>

          <div className="cms-silo-grid">
            {cms.industries.map((industry) =>
              renderSiloCard(industry, `/industries/${industry.slug}`, "Industry")
            )}
          </div>
        </section>

        <section className="section editorial-section dark-panel">
          <div className="centered wide">
            <p className="section-label gold">The BrownHill Growth System</p>
            <h2>Diagnose. Clarify. Build. Grow.</h2>
            <p>
              The process is now its own silo, turning your method into a clear,
              proprietary framework.
            </p>
          </div>

          <div className="growth-system-grid">
            {cms.growthSystem.map((step, index) => (
              <a
                key={step.slug}
                className="growth-system-card"
                href={href(`/growth-system/${step.slug}`)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p className="system-label">{step.label}</p>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </a>
            ))}
          </div>
        </section>

        {renderAiSection()}

        <section className="section editorial-section dark-panel">
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
            {cms.packages.map((pack) => (
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

                <a href={href("/marketing-diagnostic")}>Request This Package</a>
              </div>
            ))}
          </div>
        </section>

        <section className="section editorial-section">
          <div className="centered wide">
            <p className="section-label gold">Resource Silo</p>
            <h2>Content that builds authority around your services.</h2>
            <p>
              Resources become the future blog and education engine, organized by
              clarity, SEO, AI marketing, content, campaigns, and lead generation.
            </p>
          </div>

          <div className="cms-silo-grid">
            {cms.resources.slice(0, 6).map((resource) =>
              renderSiloCard(resource, `/resources/${resource.slug}`, resource.category)
            )}
          </div>
        </section>

        {renderFounderSection()}
        {renderCareersSection()}
        {renderContactSection()}
      </>
    );
  }

  function renderDiagnosticLandingPage() {
    const reviewItems = [
      "Brand message clarity",
      "Website structure",
      "SEO visibility",
      "Content consistency",
      "AI readiness",
      "Lead-generation path",
    ];

    const deliverables = [
      "A clear breakdown of what is confusing your audience",
      "Visibility gaps that may be limiting your reach",
      "Messaging opportunities to make your offer easier to understand",
      "Content and SEO recommendations",
      "Lead-flow improvements",
      "Recommended next steps for growth",
    ];

    const fitItems = [
      "Your website is not converting visitors into inquiries",
      "People struggle to understand what you offer",
      "Your content feels inconsistent or random",
      "You are not showing up clearly in search",
      "You want to use AI but need structure",
      "You need a smarter path from attention to leads",
    ];

    return (
      <>
        <section className="landing-hero diagnostic-landing-page">
          <div className="landing-glow landing-glow-left" />
          <div className="landing-glow landing-glow-right" />

          <div className="landing-hero-grid">
            <div className="landing-hero-copy">
              <p className="eyebrow">
                <Sparkles size={16} /> Marketing Diagnostic
              </p>

              <h1>Find out why your marketing is not turning attention into action.</h1>

              <p>
                The BrownHill Marketing Diagnostic reviews your brand message,
                website, SEO, content, AI readiness, and lead-generation path so
                you can see what is unclear, what is missing, and what needs to
                improve next.
              </p>

              <div className="hero-actions hero-actions-left">
                <button
                  type="button"
                  className="button diagnostic-cta"
                  onClick={scrollToDiagnosticForm}
                >
                  Request Your Diagnostic <ArrowRight size={20} />
                </button>

                <button
                  type="button"
                  className="button secondary"
                  onClick={startDiagnostic}
                >
                  Ask Edna First <Bot size={20} />
                </button>
              </div>

              <div className="landing-proof-row">
                <span>Brand Clarity</span>
                <span>SEO</span>
                <span>Content</span>
                <span>AI Readiness</span>
                <span>Lead Flow</span>
              </div>
            </div>

            <div className="landing-score-card">
              <p className="section-label gold">Diagnostic Focus</p>
              <h2>Clarity → Visibility → Conversion</h2>

              <div className="landing-score-list">
                {reviewItems.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={17} /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section editorial-section landing-problem-section">
          <div className="editorial-two-col">
            <div>
              <p className="section-label gold">The Problem</p>
              <h2>Your marketing may not be broken. It may be unclear.</h2>
            </div>

            <div>
              <p className="large-editorial-copy">
                Confused people do not convert.
              </p>

              <p>
                Many service-based brands have real value, but their website,
                message, content, SEO, and lead path are not working together.
                The result is scattered marketing, weak visibility, and missed
                opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="section editorial-section dark-panel">
          <div className="centered wide">
            <p className="section-label gold">What We Review</p>
            <h2>A focused look at the marketing pieces that affect growth.</h2>
            <p>
              The diagnostic looks at the parts of your marketing that influence
              trust, visibility, action, and lead generation.
            </p>
          </div>

          <div className="landing-review-grid">
            {reviewItems.map((item, index) => (
              <div key={item} className="landing-review-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
                <p>
                  We review how this area supports or weakens your ability to be
                  understood, found, trusted, and chosen.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section editorial-section">
          <div className="editorial-two-col">
            <div>
              <p className="section-label gold">What You Get</p>
              <h2>Clear direction before you spend more money on marketing.</h2>
            </div>

            <div>
              <p>
                The goal is not to overwhelm you with jargon. The goal is to show
                you what needs to be fixed, what should be prioritized, and how to
                move forward with better strategy.
              </p>

              <div className="landing-check-list">
                {deliverables.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={17} /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section editorial-section dark-panel">
          <div className="centered wide">
            <p className="section-label gold">Who This Is For</p>
            <h2>This is for brands with potential but no clear marketing system.</h2>
          </div>

          <div className="landing-fit-grid">
            {fitItems.map((item) => (
              <div key={item} className="landing-fit-card">
                <CheckCircle2 size={18} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="diagnostic-form" className="section contact editorial-contact landing-form-section">
          <div className="two-col">
            <div>
              <p className="section-label gold">Request Your Diagnostic</p>
              <h2>Let’s find the gaps in your marketing system.</h2>
              <p>
                Complete the form and BrownHill will review your goals, current
                marketing, message, website, content, SEO, AI readiness, and lead
                path.
              </p>

              <div className="contact-list">
                <p><Phone size={20} /> {cms.site.phone}</p>
                <p><Mail size={20} /> {cms.site.email}</p>
                <p><Globe2 size={20} /> {cms.site.website}</p>
                <p><MapPin size={20} /> {cms.site.location}</p>
              </div>
            </div>

            <form
              className="contact-form landing-diagnostic-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label>Name</label>
              <input placeholder="Your name" />

              <label>Email</label>
              <input type="email" placeholder="you@example.com" />

              <label>Business / Organization</label>
              <input placeholder="Company or organization name" />

              <label>Main Challenge</label>
              <select>
                <option>My message is unclear</option>
                <option>I need more visibility</option>
                <option>I need better leads</option>
                <option>My website is not converting</option>
                <option>My content is inconsistent</option>
                <option>I need help using AI for marketing</option>
              </select>

              <label>Website or Social Link</label>
              <input placeholder="Paste your website or social page" />

              <label>What do you want your marketing to improve?</label>
              <textarea placeholder="Tell us what feels unclear, inconsistent, invisible, or disconnected from leads..." />

              <button type="submit">Request My Marketing Diagnostic</button>

              {submitted && (
                <p className="success">
                  Thank you. This demo form is ready to connect to an email, CRM,
                  or booking system.
                </p>
              )}
            </form>
          </div>
        </section>
      </>
    );
  }

  function renderAiSection() {
    return (
      <section className="section editorial-section ai-direction-section">
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
    );
  }

  function renderHubPage(type) {
    const isServices = type === "services";
    const isIndustries = type === "industries";
    const isGrowth = type === "growth-system";

    const title = isServices
      ? "Services"
      : isIndustries
      ? "Industries"
      : isGrowth
      ? "The BrownHill Growth System"
      : "Resources";

    const subtitle = isServices
      ? "Clear marketing services organized around clarity, visibility, and conversion."
      : isIndustries
      ? "Industry-focused pages that show who BrownHill helps and how."
      : isGrowth
      ? "A proprietary process for diagnosing, clarifying, building, and growing better marketing."
      : "CMS-ready resources organized into content silos for future SEO growth.";

    const collection = isServices
      ? cms.services
      : isIndustries
      ? cms.industries
      : isGrowth
      ? cms.growthSystem
      : cms.resources;

    return (
      <section className="section editorial-section cms-page">
        <div className="cms-page-hero">
          <p className="section-label gold">CMS Silo</p>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className="cms-silo-grid">
          {collection.map((item) => {
            const cardPath =
              type === "services"
                ? `/services/${item.slug}`
                : type === "industries"
                ? `/industries/${item.slug}`
                : type === "growth-system"
                ? `/growth-system/${item.slug}`
                : `/resources/${item.slug}`;

            return renderSiloCard(
              item,
              cardPath,
              isServices
                ? "Service"
                : isIndustries
                ? "Industry"
                : isGrowth
                ? "Growth Step"
                : item.category
            );
          })}
        </div>
      </section>
    );
  }

  function renderDetailPage(type, slug) {
    const collection =
      type === "services"
        ? cms.services
        : type === "industries"
        ? cms.industries
        : type === "growth-system"
        ? cms.growthSystem
        : cms.resources;

    const item = findBySlug(collection, slug);

    if (!item) {
      return renderNotFoundPage();
    }

    const backPath =
      type === "services"
        ? "/services"
        : type === "industries"
        ? "/industries"
        : type === "growth-system"
        ? "/growth-system"
        : "/resources";

    const label =
      type === "services"
        ? "Service Page"
        : type === "industries"
        ? "Industry Page"
        : type === "growth-system"
        ? "Growth System Page"
        : item.category;

    return (
      <>
        <section className="section editorial-section cms-page">
          <div className="cms-breadcrumbs">
            <a href={href("/")}>Home</a>
            <span>/</span>
            <a href={href(backPath)}>
              {type === "growth-system"
                ? "Growth System"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </a>
          </div>

          <div className="cms-detail-layout">
            <article className="cms-detail-main">
              <p className="section-label gold">{label}</p>
              <h1>{item.title || item.label}</h1>
              <p className="large-editorial-copy">
                {item.promise || item.summary}
              </p>
              <p>{item.summary}</p>

              {item.deliverables && (
                <div className="cms-detail-block">
                  <h2>What this includes</h2>
                  <div className="cms-check-grid">
                    {item.deliverables.map((deliverable) => (
                      <span key={deliverable}>
                        <CheckCircle2 size={17} /> {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.needs && (
                <div className="cms-detail-block">
                  <h2>Common needs</h2>
                  <div className="cms-check-grid">
                    {item.needs.map((need) => (
                      <span key={need}>
                        <CheckCircle2 size={17} /> {need}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.steps && (
                <div className="cms-detail-block">
                  <h2>How this step works</h2>
                  <div className="cms-check-grid">
                    {item.steps.map((step) => (
                      <span key={step}>
                        <CheckCircle2 size={17} /> {step}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="section-cta-row cms-detail-cta">
                <ButtonLink path="/marketing-diagnostic">Request Diagnostic</ButtonLink>
                <ButtonLink variant="secondary" path="/services">
                  View Services
                </ButtonLink>
              </div>
            </article>

            <aside className="cms-detail-sidebar">
              <div className="sidebar-card">
                <p className="section-label gold">CMS Page Type</p>
                <h3>{label}</h3>
                <p>
                  This page is part of the BrownHill silo structure and can later be
                  managed inside a CMS collection.
                </p>
              </div>

              <div className="sidebar-card">
                <p className="section-label gold">Related Links</p>
                <div className="sidebar-links">
                  {type === "services" &&
                    item.relatedIndustries?.map((industrySlug) => {
                      const industry = findBySlug(cms.industries, industrySlug);
                      return industry ? (
                        <a key={industry.slug} href={href(`/industries/${industry.slug}`)}>
                          {industry.title}
                        </a>
                      ) : null;
                    })}

                  {type === "industries" &&
                    item.relatedServices?.map((serviceSlug) => {
                      const service = findBySlug(cms.services, serviceSlug);
                      return service ? (
                        <a key={service.slug} href={href(`/services/${service.slug}`)}>
                          {service.title}
                        </a>
                      ) : null;
                    })}

                  {type === "resources" &&
                    item.relatedServices?.map((serviceSlug) => {
                      const service = findBySlug(cms.services, serviceSlug);
                      return service ? (
                        <a key={service.slug} href={href(`/services/${service.slug}`)}>
                          {service.title}
                        </a>
                      ) : null;
                    })}

                  {type === "growth-system" &&
                    cms.services.slice(0, 3).map((service) => (
                      <a key={service.slug} href={href(`/services/${service.slug}`)}>
                        {service.title}
                      </a>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {renderContactSection()}
      </>
    );
  }

  function renderFounderSection() {
    return (
      <section className="section editorial-section founder-bio-section">
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
    );
  }

  function renderCareersSection() {
    return (
      <section className="section editorial-section dark-panel careers-section">
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

            <a className="career-link" href={href("/contact")}>
              Connect for future opportunities <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    );
  }

  function renderContactSection() {
    return (
      <section className="section contact editorial-contact">
        <div className="two-col">
          <div>
            <p className="section-label gold">Start the Conversation</p>
            <h2>Let’s make your marketing clearer, more visible, and easier to act on.</h2>
            <p>
              Request a marketing diagnostic. We’ll review your goals, message,
              website, content, SEO, AI readiness, and lead-generation path.
            </p>

            <div className="contact-list">
              <p><Phone size={20} /> {cms.site.phone}</p>
              <p><Mail size={20} /> {cms.site.email}</p>
              <p><Globe2 size={20} /> {cms.site.website}</p>
              <p><MapPin size={20} /> {cms.site.location}</p>
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
              {cms.services.map((service) => (
                <option key={service.slug}>{service.title}</option>
              ))}
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
    );
  }

  function renderAboutPage() {
    return (
      <>
        {renderFounderSection()}
        {renderCareersSection()}
        {renderContactSection()}
      </>
    );
  }

  function renderContactPage() {
    return renderContactSection();
  }

  function renderNotFoundPage() {
    return (
      <section className="section editorial-section cms-page">
        <div className="cms-page-hero">
          <p className="section-label gold">Page Not Found</p>
          <h1>This page is not in the CMS yet.</h1>
          <p>
            Go back to the homepage or explore the service, industry, growth system,
            and resource silos.
          </p>
          <div className="section-cta-row">
            <ButtonLink path="/">Go Home</ButtonLink>
            <ButtonLink variant="secondary" path="/services">
              View Services
            </ButtonLink>
          </div>
        </div>
      </section>
    );
  }

  function renderCurrentPage() {
    if (currentPath === "/") return renderHomePage();

    if (currentPath === "/marketing-diagnostic") return renderDiagnosticLandingPage();
    if (currentPath === "/services") return renderHubPage("services");
    if (currentPath === "/industries") return renderHubPage("industries");
    if (currentPath === "/growth-system") return renderHubPage("growth-system");
    if (currentPath === "/resources") return renderHubPage("resources");
    if (currentPath === "/about") return renderAboutPage();
    if (currentPath === "/contact") return renderContactPage();

    const serviceMatch = currentPath.match(/^\/services\/([^/]+)$/);
    if (serviceMatch) return renderDetailPage("services", serviceMatch[1]);

    const industryMatch = currentPath.match(/^\/industries\/([^/]+)$/);
    if (industryMatch) return renderDetailPage("industries", industryMatch[1]);

    const growthMatch = currentPath.match(/^\/growth-system\/([^/]+)$/);
    if (growthMatch) return renderDetailPage("growth-system", growthMatch[1]);

    const resourceMatch = currentPath.match(/^\/resources\/([^/]+)$/);
    if (resourceMatch) return renderDetailPage("resources", resourceMatch[1]);

    return renderNotFoundPage();
  }

  return (
    <main className="site theme-dark editorial-site">
      <header className="cms-site-header">
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
              <span className="brand-subtitle">{cms.site.tagline}</span>
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
            {cms.navigation.map((item) => (
              <a
                key={item.path}
                href={href(item.path)}
                className={
                  currentPath === item.path || currentPath.startsWith(`${item.path}/`)
                    ? "active"
                    : ""
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {renderCurrentPage()}

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
        © {new Date().getFullYear()} {cms.site.name}, LLC. Brand strategy,
        content, SEO, AI marketing systems, media, and lead generation. All rights
        reserved.
      </footer>
    </main>
  );
}
