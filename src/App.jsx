import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileSearch,
  Globe2,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareText,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const corePillars = [
  {
    icon: FileSearch,
    title: "Research & Intelligence",
    description:
      "Before tactics are recommended, we perform an comprehensive market analysis for our clients. We look at audience behaviors, competitors, search demand, positioning gaps, customer pain points, local and national visibility, digital presence, and growth opportunities.",
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
    outcomes: ["More qualified search visibility", "Improved local presence", "Better website structure", "Search-focused content direction"],
  },
  {
    icon: Globe2,
    title: "SMO & Social Media Optimization",
    description:
      "Social Media Optimization strengthens how a brand appears, communicates, and engages across social platforms. BrownHill helps clients optimize profiles, clarify content themes, build posting frameworks, improve brand consistency, develop engagement strategies, create platform-specific messaging, plan social campaigns, and align social presence with business goals.",
    outcomes: ["Stronger social credibility", "Clearer content direction", "Better platform consistency", "More intentional audience engagement"],
  },
  {
    icon: Target,
    title: "Marketing Strategy & Go-To-Market Planning",
    description:
      "Marketing strategy is the foundation of every growth effort. BrownHill helps clients define target customers, refine offers, identify market opportunities, develop brand positioning, structure campaign priorities, determine channel strategy, map customer journeys, and create go-to-market plans that guide execution with purpose.",
    outcomes: ["Clearer market position", "Stronger offer strategy", "Sharper audience targeting", "Practical growth roadmap"],
  },
  {
    icon: Lightbulb,
    title: "Marketing Research & Consumer Insights",
    description:
      "Research gives marketing direction. BrownHill supports decision-making through customer research, competitor analysis, market scans, industry trend reviews, survey design, audience profiling, pricing perception research, local market opportunity analysis, brand perception review, and insights that help leaders make smarter marketing investments.",
    outcomes: ["Better customer understanding", "Competitor clarity", "Market opportunity insight", "Evidence-based recommendations"],
  },
  {
    icon: Megaphone,
    title: "Advertising Strategy & Campaign Development",
    description:
      "Advertising should be planned with a clear audience, message, offer, and conversion goal. BrownHill helps develop ad strategy, campaign concepts, promotional messaging, audience targeting, creative direction, paid media planning, local advertising ideas, launch calendars, campaign briefs, and performance improvement recommendations.",
    outcomes: ["More focused campaigns", "Stronger ad messaging", "Better audience targeting", "Improved campaign discipline"],
  },
  {
    icon: Building2,
    title: "Brand Development & Corporate Identity",
    description:
      "A brand must look credible and communicate clearly before marketing can fully perform. BrownHill supports brand voice, messaging, positioning statements, service descriptions, visual direction, customer-facing language, company profiles, brand story development, professional bios, brand standards, and corporate presentation materials.",
    outcomes: ["More professional presence", "Clear brand voice", "Stronger credibility", "Better customer understanding"],
  },
  {
    icon: MessageSquareText,
    title: "Content, Media & Communications",
    description:
      "Content is how a business educates, builds trust, and stays visible. BrownHill helps with website copy, landing pages, social content plans, blogs, newsletters, email campaigns, promotional copy, thought-leadership concepts, founder messaging, brand announcements, and communication systems that support long-term authority.",
    outcomes: ["Stronger messaging", "More useful content", "Consistent communication", "Better brand authority"],
  },
  {
    icon: Layers,
    title: "Website Strategy & Digital Presence",
    description:
      "A website should operate as a credibility engine and conversion asset. BrownHill supports website structure, page planning, service-page copy, conversion flow, calls-to-action, user experience review, trust-building sections, local landing pages, lead capture strategy, and digital presence alignment across web, search, and social.",
    outcomes: ["Stronger website clarity", "Better conversion flow", "Improved digital credibility", "Cleaner customer journey"],
  },
  {
    icon: Users,
    title: "Lead Generation & Revenue Enablement",
    description:
      "Visibility only matters when it creates opportunity. BrownHill helps clients design lead-generation systems, referral strategies, outreach campaigns, landing page offers, sales messaging, follow-up flows, appointment-setting language, CRM process recommendations, and customer acquisition frameworks.",
    outcomes: ["More qualified opportunities", "Better follow-up structure", "Stronger sales messaging", "Clearer acquisition system"],
  },
  {
    icon: BarChart3,
    title: "Analytics, Reporting & Performance Improvement",
    description:
      "Marketing must be reviewed, measured, and improved. BrownHill supports KPI development, website analytics review, campaign performance tracking, lead-source analysis, conversion review, monthly reporting, marketing scorecards, ROI interpretation, and optimization recommendations.",
    outcomes: ["Clearer performance insight", "Better marketing decisions", "Improved accountability", "Data-backed optimization"],
  },
];

const relatedCapabilities = [
  "Competitive Analysis", "Customer Journey Mapping", "Google Business Profile Optimization", "Local SEO",
  "Website Copywriting", "Landing Page Strategy", "Email Marketing", "Sales Funnel Planning",
  "CRM & Follow-Up Strategy", "Brand Messaging", "Media Planning", "Campaign Briefs",
  "Audience Segmentation", "Reputation Strategy", "Community Marketing", "Referral Campaigns",
  "Thought Leadership", "Market Opportunity Reviews", "Performance Dashboards", "Growth Consulting",
];

const industries = [
  "Professional Services", "Healthcare & Wellness", "Home Services", "Commercial Services",
  "Local Businesses", "Entrepreneurs & Founders", "Community-Focused Organizations", "Emerging Service Firms",
  "Real Estate & Property Services", "Fitness & Lifestyle Brands", "Nonprofits & Civic Groups", "Consultants & Coaches",
];

const process = [
  { title: "Discovery & Diagnostic Review", description: "We begin by understanding the business model, offer, audience, current marketing activity, competitors, digital presence, sales process, and immediate growth barriers." },
  { title: "Research & Market Intelligence", description: "We review search demand, social presence, customer behavior, competitor positioning, local market signals, content gaps, and opportunities for differentiation." },
  { title: "Strategy & Positioning Blueprint", description: "We define the market position, messaging framework, audience priorities, recommended channels, campaign direction, and growth priorities." },
  { title: "Asset, Campaign & System Buildout", description: "We help create or improve the practical assets needed to execute: website copy, landing pages, content plans, ad messaging, SEO updates, social optimization, lead magnets, and follow-up flows." },
  { title: "Launch & Execution Support", description: "We help move the plan into market with clear timelines, campaign structure, content direction, advertising support, and accountability around implementation." },
  { title: "Measurement, Optimization & Scale", description: "We review performance, identify what is working, refine what is underperforming, and create recommendations to improve conversion, visibility, and revenue impact over time." },
];

const engagementModels = [
  { title: "Strategic Audit", description: "A focused review of the client’s marketing, website, SEO, social presence, messaging, and growth opportunities. Best for businesses that need clarity before committing to ongoing execution." },
  { title: "Growth Blueprint", description: "A comprehensive strategy engagement that produces a practical roadmap for positioning, visibility, content, advertising, lead generation, and performance measurement." },
  { title: "Monthly Advisory & Execution Support", description: "Ongoing support for clients that need consistent marketing direction, campaign planning, optimization, reporting, and hands-on help improving their growth system." },
  { title: "Campaign or Launch Project", description: "Project-based support for new offers, brand launches, local campaigns, social campaigns, advertising initiatives, website improvements, or lead-generation pushes." },
];

const whyBrownHill = [
  "We do not start with random tactics — we start with the business problem.",
  "We connect SEO, social, advertising, research, content, and sales enablement into one growth framework.",
  "We help clients become clearer, more credible, more visible, and more prepared to convert attention into revenue.",
  "We bring a founder-led mindset: practical, ambitious, disciplined, and focused on building long-term brand equity.",
];

function IconCircle({ icon: Icon }) {
  return (
    <div className="icon-circle">
      <Icon size={28} />
    </div>
  );
}

function ButtonLink({ children, variant = "primary" }) {
  return (
    <a className={`button ${variant}`} href="#contact">
      {children}
      <ArrowRight size={20} />
    </a>
  );
}

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="site">
      <section className="hero">
        <div className="glow glow-left" />
        <div className="glow glow-right" />

        <nav className="nav">
          <div className="brand">
            <div className="brand-mark">BH</div>
            <div>
              <p className="brand-name">BrownHill</p>
              <p className="brand-subtitle">Marketing & Media Firm</p>
            </div>
          </div>
          <div className="nav-links">
            <a href="#firm">The Firm</a>
            <a href="#services">Capabilities</a>
            <a href="#process">Method</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow"><Sparkles size={16} /> SEO • SMO • Research • Advertising • Growth Strategy</p>
            <h1>Marketing intelligence that helps brands get seen, trusted, and chosen.</h1>
            <p className="hero-copy">
              BrownHill Marketing & Media, LLC helps organizations strengthen their market position, improve search and social visibility, understand their audience, develop stronger campaigns, and build disciplined marketing systems that support sustainable growth.
            </p>
            <div className="button-row">
              <ButtonLink>Request a Strategy Consultation</ButtonLink>
              <ButtonLink variant="secondary">Explore Capabilities</ButtonLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero-card-wrap"
          >
            <div className="hero-card">
              <div className="logo-panel">
                <div className="logo-circle">
                  <p>BROWNHILL</p>
                  <span>Marketing & Media Firm</span>
                </div>
              </div>
              <div className="pillar-mini-grid">
                {corePillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="mini-card">
                      <Icon size={26} />
                      <p>{pillar.title}</p>
                    </div>
                  );
                })}
              </div>
              <p className="hero-card-copy">
                Our Firm combines insight, strategy, creative direction, and performance discipline to help brands move from scattered marketing activity to intentional growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="firm" className="section cream">
        <div className="two-col">
          <div>
            <p className="section-label">The Firm</p>
            <h2>Marketing strategy built for clarity, visibility, and growth.</h2>
            <p>BrownHill helps businesses move beyond scattered marketing activity and build stronger systems for market positioning, audience insight, digital visibility, and customer acquisition.</p>
            <p>We help organizations understand their market, sharpen their message, show up stronger online, and connect brand visibility to measurable growth.</p>
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

      <section className="section white">
        <div className="centered">
          <p className="section-label">Core Framework</p>
          <h2>Four pillars guide how BrownHill builds marketing systems.</h2>
          <p>The firm does not treat marketing as disconnected tasks. Each engagement is built around insight, strategy, execution, and measurable improvement.</p>
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
          <h2>Full-scope marketing services built to increase visibility, credibility, and growth.</h2>
          <p>BrownHill helps businesses strengthen their market presence through strategy, SEO, social media optimization, brand development, research, advertising, content, analytics, and lead generation. We support the full marketing ecosystem so organizations can be seen more clearly, communicate with more authority, and convert attention into measurable growth.</p>
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
                    <span key={outcome}><CheckCircle2 size={16} /> {outcome}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section dark">
        <div className="two-col">
          <div>
            <p className="section-label gold">Related Capabilities</p>
            <h2>Everything connected to marketing growth lives in the BrownHill ecosystem.</h2>
            <p>Some clients need a complete strategy. Others need a focused improvement in one area. BrownHill can support individual marketing needs while keeping the larger growth picture in view.</p>
          </div>
          <div className="tag-grid">
            {relatedCapabilities.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section id="process" className="section white">
        <div className="two-col">
          <div>
            <p className="section-label">The BrownHill Method</p>
            <h2>A deeper process for smarter marketing decisions and better execution.</h2>
            <p>Our Firm's process is designed to reduce guesswork. The firm studies the business, identifies growth gaps, builds strategy, supports execution, and improves performance through ongoing learning.</p>
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
          <p>Our Firm can serve as a strategic advisor, project partner, campaign resource, or ongoing marketing growth firm depending on the client’s stage and needs.</p>
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
            <p className="section-label gold">Who We Serve</p>
            <h2>We help organizations who are looking to grow with clarity, strategy, and stronger market presence.</h2>
            <p>BrownHill serves businesses, service providers, and growth-minded organizations that want to improve visibility, strengthen credibility, and create smarter marketing systems. We help clients move beyond scattered activity and build a clear path toward being seen, trusted, and chosen.</p>
          </div>
          <div className="tag-grid">
            {industries.map((industry) => <span key={industry}>{industry}</span>)}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="founder-panel">
          <div>
            <p className="section-label gold">Founder, CEO & Marketing Strategist</p>
            <h2>Michael Hill</h2>
            <p>BrownHill Marketing and Media was founded to help businesses compete with stronger strategy, sharper messaging, and more intentional growth systems. As a founder-led firm, BrownHill combines business development thinking, marketing discipline, customer experience insight, research, media strategy, and brand-building execution.</p>
            <p>The mission is to help serious operators become more visible, more credible, more informed, and better positioned to win in their market.</p>
          </div>
          <div className="founder-list">
            <p><Lightbulb size={24} /> Marketing Intelligence</p>
            <p><Globe2 size={24} /> Digital Visibility</p>
            <p><Users size={24} /> Audience Development</p>
            <p><TrendingUp size={24} /> Revenue Growth</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="two-col">
          <div>
            <p className="section-label gold">Contact the Firm</p>
            <h2>Let’s build the marketing system your organization deserves.</h2>
            <p>Use the form to request a strategy consultation. BrownHill will review your goals, current marketing, digital presence, research needs, advertising opportunities, and best path toward stronger visibility and growth.</p>
            <div className="contact-list">
              <p><Phone size={20} /> 850-221-3089</p>
              <p><Mail size={20} /> info@emailaddress.com</p>
              <p><Globe2 size={20} /> www.websiteaddress.com</p>
              <p><MapPin size={20} /> Houston, TX</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
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
              <option>Marketing Research</option>
              <option>Advertising / Campaign Development</option>
              <option>Brand Development</option>
              <option>Lead Generation</option>
              <option>Full Growth Strategy</option>
            </select>
            <label>What growth challenge should we help solve?</label>
            <textarea placeholder="Tell us about your marketing goals, current challenges, target audience, advertising needs, research needs, or growth opportunities..." />
            <button type="submit">Request Consultation</button>
            {submitted && <p className="success">Thank you. This demo form is ready to connect to BrownHill’s email, CRM, or booking system.</p>}
          </form>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} BrownHill Marketing & Media, LLC. A strategic marketing intelligence, media, advertising, and growth advisory firm. All rights reserved.
      </footer>
    </main>
  );
}
