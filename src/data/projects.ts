export interface Project {
  title: string;
  client: string;
  image?: string;
  video?: string;
  problem: string;
  solution: string;
  tech: string[];
  results?: string[];
}

export const projects: Project[] = [
  {
    title: "Lead Collection & Follow-Up Automation",
    client: "CodelyHub AI — Independent Build",
    video: "/projects/lead-management-demo.mp4",
    problem:
      "Small businesses and service providers were losing leads to manual data entry, scattered spreadsheets, and missed follow-ups — costing them time and sales.",
    solution:
      "Built an n8n-based system that automatically collects incoming leads, saves them to Google Sheets in real time, organizes customer data, and triggers automated follow-up sequences — removing manual work entirely and ensuring no lead is missed.",
    tech: ["n8n", "Google Sheets", "Automated Follow-ups"],
  },
  {
    title: "WhatsApp AI Employee — Multi-Agent Business Assistant",
    client: "Independent Build — n8n Multi-Agent System",
    image: "/automation-gallery/whatsapp-ai-agent.jpg",
    problem:
      "Businesses were losing customers to slow response times, with no way to handle WhatsApp inquiries, scheduling, and follow-ups outside working hours.",
    solution:
      "Built a multi-agent AI system acting as a 24/7 WhatsApp employee — replying instantly to text and images, remembering conversation history, managing Gmail, scheduling appointments via Calendar, creating tasks, and researching answers using AI. Coordinated specialized sub-agents (Gmail, Research, Calendar, Task) with MongoDB Atlas Vector Store for long-term customer memory.",
    tech: ["n8n", "WhatsApp Cloud API", "OpenAI", "Gmail", "Google Calendar", "Google Tasks", "MongoDB Atlas Vector Store"],
  },
  {
    title: "MemberFlow 360 — Membership Management & E-commerce Integration",
    client: "Athletic Club & Fitness Organization — Zapier",
    image: "/automation-gallery/WorkFlow 22.png",
    problem:
      "Manual data entry across Stripe, Squarespace, HubSpot, and Mailchimp was costing the organization 15+ hours weekly and causing application processing delays.",
    solution:
      "Built a comprehensive Zapier-based ecosystem that automatically processes payments, captures applications, and synchronizes customer data across all four platforms with intelligent order matching and automated communications.",
    tech: ["Zapier", "Stripe", "Squarespace", "HubSpot", "Mailchimp", "Google Sheets"],
    results: ["95% reduction in manual data entry", "15+ hours weekly time savings"],
  },
  {
    title: "Restaurant WhatsApp Ordering Agent",
    client: "Client Project — Karachi",
    problem:
      "Restaurant needed a digital ordering channel without building a full app. Customers wanted to browse menu and order via WhatsApp naturally.",
    solution:
      'Created "Zara" — a WhatsApp AI persona that presents the full menu in PKR pricing, takes orders conversationally, and logs everything to a Google Sheets dashboard for the kitchen team.',
    tech: ["n8n", "WhatsApp Cloud API", "Google Sheets", "OpenAI"],
  },
  {
    title: "AI Voice Call Agent",
    client: "Finesure — Financial Services",
    problem:
      "Financial advisory firm needed a first-contact screening system that could handle initial client calls, qualify leads, and schedule appointments without human intervention.",
    solution:
      'Developed "Jarvis" — an AI voice agent that handles inbound calls with natural conversation flow, captures client requirements, qualifies leads, and syncs with their CRM.',
    tech: ["AI Voice API", "n8n", "GoHighLevel CRM", "OpenAI"],
  },
  {
    title: "Full Node.js E-Commerce Platform",
    client: "Independent Project",
    problem:
      "Needed a complete, production-ready e-commerce backend with admin management — not a Shopify clone, but custom-tailored for a specific inventory workflow.",
    solution:
      "Built from scratch with Node.js/Express, MongoDB Atlas for persistence, JWT auth, cart/checkout pipeline, order history tracking, and a full admin panel for inventory management.",
    tech: ["Node.js", "Express", "MongoDB Atlas", "JWT", "EJS"],
  },
  {
    title: "Facebook Lead Ads → CRM Pipeline",
    client: "Client Project — Meta Ads Integration",
    problem:
      "Facebook lead ads landing in a void — no real-time CRM sync, delayed follow-ups, lost conversions from slow response times.",
    solution:
      "Engineered an automated pipeline connecting Facebook Lead Ads directly to GoHighLevel CRM with real-time webhook processing, lead scoring, and Meta Conversions API event tracking for ad optimization.",
    tech: ["n8n", "Meta Conversions API", "GoHighLevel CRM", "Webhooks"],
  },
];
