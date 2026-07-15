export const automationGallery = [
  {
    title: "AI-Powered Lead Generation & Cold Outreach System",
    description:
      "A smart lead capture system that automatically collects inquiries from website forms and WhatsApp messages, stores them in Google Sheets, sends real-time email notifications, and follows up with prospects on a schedule — all powered by n8n.",
    images: [
      {
        src: "/automation-gallery/leadgen-outreach-1.jpg",
        caption:
          "n8n workflow: website form → Google Sheets → email notification → WhatsApp follow-up",
      },
      {
        src: "/automation-gallery/leadgen-outreach-2.jpg",
        caption: "Automated outreach sequence: trigger → filter → send → log",
      },
    ],
    tools: ["n8n", "Google Sheets", "Google Places API", "Gmail"],
  },
  {
    title: "Telegram AI Lead-Collector Chatbot",
    description:
      "A 24/7 AI chatbot on Telegram that converses naturally, remembers previous conversation history, and automatically collects lead details (name, email, phone). Captured leads are saved to Google Sheets and trigger an instant email notification to the sales team — turning casual chats into tracked, actionable leads without any manual follow-up.",
    images: [
      {
        src: "/automation-gallery/telegram-lead-chatbot.jpg",
        caption:
          "AI Agent with memory, lead capture & auto-notifications",
      },
    ],
    tools: ["n8n", "Telegram API", "OpenRouter", "Google Sheets", "Gmail"],
  },
  {
    title: "Multi-Agent Marketing Orchestration System",
    description:
      "A coordinated system of four intelligent n8n workflows built around a central 'Boss Workflow' that acts as the orchestration and decision-making layer. It interprets incoming campaign requests and routes them to three specialized execution systems: a PR Automation system (press releases, media pitches, journalist follow-ups), an SEO Automation system (publication-ready articles, outreach, internal linking), and a Social Media Automation system (platform-specific content, engagement replies, analytics reporting). Workflows communicate via webhooks and structured JSON, with conditional task routing and centralized campaign logging.",
    images: [
      {
        src: "/automation-gallery/multi-agent-orchestration-1.jpg",
        caption: "PR & Content Automation Workflow",
      },
      {
        src: "/automation-gallery/multi-agent-orchestration-2.jpg",
        caption: "Boss Workflow — Orchestration & Task Routing",
      },
    ],
    tools: ["n8n", "Webhooks", "OpenAI", "Slack", "Gmail", "Structured JSON APIs"],
  },
  {
    title: "AI-Powered Real Estate Lead Routing System",
    description:
      "An intelligent email-based lead routing system for a real estate agency, built with n8n and GPT. Incoming emails are automatically classified as buyer, seller, tenant, or urgent maintenance inquiries, then routed to a tailored response flow — pulling live listing data for buyer inquiries, matching sold comps for seller inquiries, creating maintenance tickets for tenants, and instantly flagging urgent issues to the team. Each interaction is logged for tracking and follow-up.",
    images: [
      {
        src: "/automation-gallery/real-estate-lead-routing.jpg",
        caption: "AI email classification & automated multi-path response routing",
      },
    ],
    tools: ["n8n", "GPT / OpenAI", "Gmail", "Google Sheets"],
  },
  {
    title: "GHL Automated Appointment Reminder System",
    description:
      "A GoHighLevel workflow that automatically reminds customers about upcoming appointments at three key intervals — 1 hour, 30 minutes, and 5 minutes before the scheduled time — while simultaneously triggering internal team notification calls. This reduces no-shows and keeps both customers and staff synced without any manual follow-up.",
    images: [
      {
        src: "/automation-gallery/ghl-appointment-reminder.png",
        caption:
          "Multi-stage appointment reminder workflow with internal alerts",
      },
    ],
    tools: ["GoHighLevel (GHL)", "Automated Reminders", "CRM Workflows"],
  },
  {
    title:
      "ContactSync Pro & FormFlow AI — Intelligent Contact Management System",
    description:
      "A dual-system automation platform built with Zapier that automatically captures contacts from calendar events and processes complex insurance form data with intelligent parsing, name segmentation, and automated profile creation across multiple business platforms. Includes three coordinated workflows: real-time Outlook calendar monitoring with automated attendee extraction to Constant Contact, advanced Jotform parsing with multi-method name extraction and regex pattern matching, and automated EZLynx insurance applicant profile creation with intelligent field mapping.",
    images: [
      {
        src: "/automation-gallery/contactsync-formflow-1.png",
        caption:
          "Calendar Contact Auto-Capture: Outlook → Constant Contact",
      },
      {
        src: "/automation-gallery/contactsync-formflow-2.png",
        caption: "Intelligent Form Data Processor: Jotform → EZLynx",
      },
    ],
    tools: [
      "Zapier",
      "Microsoft Outlook",
      "Constant Contact",
      "Jotform",
      "EZLynx",
      "Regex Parsing",
      "Data Transformation",
    ],
    results: [
      "85% time reduction in contact management",
      "100% automated form processing",
      "95% reduction in data errors",
      "Zero manual intervention required",
    ],
  },
  {
    title: "LeadFlow Nexus — Intelligent Lead Management System",
    description:
      "A complete business process automation system built with Zapier, GoHighLevel, ManyChat, and Airtable, featuring multi-channel lead capture, AI-powered data processing, and automated CRM integration across website, social media, and customer engagement platforms. Includes three coordinated workflows: real-time website form to CRM integration with automatic contact and sales pipeline creation, Facebook Messenger integration with AI-powered address parsing and service categorization across 11 categories, and an automated birthday engagement system with personalized email marketing and database maintenance.",
    images: [
      {
        src: "/automation-gallery/leadflow-nexus-1.png",
        caption: "WebLead Capture Engine: Website Form → GHL CRM",
      },
      {
        src: "/automation-gallery/leadflow-nexus-2.png",
        caption: "SocialLead AI Processor: ManyChat → AI Analysis → CRM",
      },
      {
        src: "/automation-gallery/leadflow-nexus-3.png",
        caption: "CustomerEngage Auto-System: Automated Birthday Campaigns",
      },
    ],
    tools: [
      "Zapier",
      "GoHighLevel",
      "ManyChat",
      "Airtable",
      "AI Processing",
      "Webhooks",
      "Custom Code",
    ],
    results: [
      "75% reduction in manual tasks",
      "100% lead capture automation",
      "40% faster response times",
      "500+ leads/month processed",
    ],
  },
];
