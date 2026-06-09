// src/content.js

// ... (keep personalInfo and experience exactly the same as before) ...
export const personalInfo = {
  name: "Karma Kansara",
  email: "karmakansara@gmail.com",
  phone: "+91 9727778766",
  linkedin: "linkedin.com/in/karma-kansara",
  github: "github.com/arthados",
  portfolio: "karmak.vercel.app",
  summary: "Full-Stack Engineer dedicated to architecting resilient, event-driven systems and high-performance AI integrations. I transform complex data challenges into scalable infrastructure and intuitive user experiences, with a focus on production-grade reliability and data-driven decision-making."
};

export const experience = [
  {
    role: "Software Developer",
    company: "Ekesa Tech",
    location: "Ahmedabad, India",
    timeline: "June 2025 - Present",
    responsibilities: [
      "Engineered an AI-powered resume parsing engine that has processed 115,000+ CVs, eliminating dependency on third-party software and replacing a fully manual hiring workflow end-to-end.",
      "Refactored a resource-intensive legacy search query, significantly reducing response latency and improving result delivery speed across the platform.",
      "Migrated a monolithic architecture to event-driven microservices using RabbitMQ offloading bulk resume uploads (500+ files) to background queues.",
      "Built and deployed RESTful APIs using FastAPI, containerized all services with Docker, and delivered a responsive frontend in Next.js backed by Supabase."
    ]
  },
  {
    role: "Software Development Intern",
    company: "Biztic Technologies",
    location: "Ahmedabad, India",
    timeline: "Jan 2025 - May 2025",
    responsibilities: [
      "Built C# parsers to extract and normalize metadata across an OTT platform spanning 80,000+ hours of on-demand content and 81 live channels, achieving 95% parsing accuracy.",
      "Designed and owned end-to-end data pipelines—ingestion, cleaning, normalization, and transformation—enabling downstream analytics.",
      "Developed a title pricing prediction model using XGBoost and Random Forest on competitor sales data, achieving 85% accuracy."
    ]
  }
];

export const projects = [
  {
    title: "Audit Sphere | GRC Platform",
    techStack: ["C#", ".NET", "MySQL"],
    github: "https://github.com/arthados/GRC",
    description: [
      "Architected and deployed a comprehensive Governance, Risk, and Compliance (GRC) desktop application to automate organizational compliance assessments for NIST and ISO 27001 frameworks.",
      "Engineered a robust Role-Based Access Control (RBAC) system that manages auditor permissions, control mapping, and audit lifecycle execution, ensuring data integrity across organizational hierarchies.",
      "Developed a real-time compliance dashboard providing visual tracking metrics, transforming unstructured audit data into actionable insights for leadership.",
      "Eliminated reliance on manual, error-prone spreadsheet tracking by establishing a structured, automated audit workflow that standardizes evidence collection and reporting."
    ]
  },
  {
    title: "Genius AI | Multi-Modal SaaS",
    techStack: ["Next.js", "OpenAI API", "Gemini API", "TailwindCSS"],
    github: "https://github.com/arthados/genius-ai",
    description: [
      "Built a unified, multi-modal artificial intelligence platform enabling users to generate code, synthesize images, compose music, and conduct contextual conversations from a centralized interface.",
      "Designed a highly efficient asynchronous API orchestration layer that manages concurrent requests across OpenAI and Google Gemini providers, ensuring zero blocking of the client-side UI thread.",
      "Optimized the Next.js frontend architecture for low-latency interactions, delivering a seamless experience while processing heavy multi-modal payloads in real-time."
    ]
  },
  {
    title: "Big Data Sentiment Analysis",
    techStack: ["Hadoop", "Apache Pig", "Python", "NLP"],
    github: "https://github.com/arthados/twitter-sentiment",
    description: [
      "Engineered a high-throughput big data pipeline to explore the Hadoop and Apache Pig ecosystem for large-scale distributed analytics.",
      "Executed complex data transformation workflows on a 20GB unstructured Twitter dataset within a distributed Cloudera cluster.",
      "Applied advanced Natural Language Processing (NLP) classification models to identify sentiment patterns and visualize real-world trends during India's 2016 demonetization discourse."
    ]
  }
];

export const skills = {
  languages: ["Python", "C#", "C/C++", "JavaScript", "SQL"],
  frontend: ["Next.js", "React", "Node.js"],
  backend: ["FastAPI", ".NET", "RESTful APIs", "Microservices", "RabbitMQ"],
  databases: ["MySQL", "ClickHouse", "Supabase"],
  mlData: ["XGBoost", "Random Forest", "NLP", "Pandas", "NumPy"],
  devOps: ["Docker", "Git", "Hadoop", "Apache Pig"]
};