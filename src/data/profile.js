export const profile = {
  name: "Viren Vaviya",
  title: "AI/ML Engineer | Agentic AI & LLM Specialist",
  tagline: "Engineering production-grade Agentic AI systems and scalable LLM pipelines.",
  bio: "I bridge the gap between AI research and production reality. Specializing in Agentic AI and MLOps, I design and build autonomous systems that are reliable, scalable, and drive measurable business impact. Currently advancing my expertise with an M.Sc. in High Integrity Systems.",
  social: {
    linkedin: "https://www.linkedin.com/in/viren-vaviya-a9933423b/",
    github: "https://github.com/Vvren2022",
    email: "mailto:vrenvaviya2022@gmail.com",
    phone: "+49 15560047336"
  },
  skills: {
    "Agentic AI & LLMs": ["LangChain", "LangGraph", "RAG Pipelines", "MCP", "Hugging Face", "LLMOps", "Prompt Engineering"],
    "Machine Learning": ["PyTorch", "TensorFlow", "Computer Vision", "NLP", "Scikit-learn", "Pandas", "NumPy"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "FastAPI", "Git"],
    "Languages": ["Python", "JavaScript", "SQL", "C++"]
  },
  experience: [
    {
      company: "Dev’s Club Pvt. Ltd.",
      role: "AI/ML Engineer (Internship)",
      duration: "Jan 2025 - Jun 2025",
      location: "Surat, India",
      description: [
        "Designed and developed agentic AI systems using LangChain, LangSmith, MCP, and RAG to enable intelligent decision making and task orchestration.",
        "Built and optimized LLM pipelines with a focus on reliability, scalability, and real world performance.",
        "Implemented MLOps and LLMOps workflows for automated deployment, monitoring, and lifecycle management of AI models.",
        "Integrated API driven inference pipelines and evaluation metrics to improve system stability, efficiency, and observability.",
        "Collaborated on production grade AI solutions, ensuring clean architecture, maintainability, and performance optimization."
      ]
    },
    {
      company: "Dev’s Club Pvt. Ltd.",
      role: "ML Engineer",
      duration: "Aug 2022 - Aug 2023",
      location: "Surat, India",
      description: [
        "Worked as a Machine Learning Engineer, developing predictive models and completing an NLP project using advanced NLP libraries.",
        "Handled diverse data types, including images, applying CNNs for image tasks, and explored transformer architectures to enhance ongoing projects.",
        "Responsibilities included end-to-end model development—from data preprocessing and feature engineering to model evaluation and deployment on cloud platforms."
      ]
    },
    {
      company: "BrainyBeam Technologies Pvt. Ltd.",
      role: "Intern ML Engineer",
      duration: "Jun 2022 - Aug 2022",
      location: "Gandhinagar, India",
      description: [
        "Developed machine learning models using Python and core data science libraries including Pandas, NumPy, Matplotlib, and Seaborn.",
        "Performed data preprocessing, feature engineering, and exploratory data analysis across diverse datasets.",
        "Built NLP pipelines for review analysis, including text cleaning, tokenization, and model evaluation.",
        "Designed end to end ML workflows covering data preparation, model training, performance tuning, and deployment.",
        "Deployed models on cloud platforms such as AWS and Azure, focusing on scalability and reliability."
      ]
    }
  ],
  education: [
    {
      institution: "Frankfurt University of Applied Science",
      degree: "M.Sc. High Integrity Systems",
      duration: "Apr 2024 - Present",
      location: "Frankfurt am Main, Germany",
      focus: "Autonomous Systems, Safety-Critical AI, Advanced Robotics"
    },
    {
      institution: "Government Engineering College",
      degree: "Bachelor of Engineering (BE)",
      duration: "Dec 2019 - Mar 2023",
      location: "Gandhinagar, Gujarat",
      focus: "Computer Science, AI Fundamentals, Data Structures"
    }
  ],
  projects: [
    {
      title: "AI Trip Planner",
      role: "Architect & Lead Developer",
      description: "An autonomous agentic system that plans detailed travel itineraries. It orchestrates multiple LLMs to research destinations, check availability, and optimize routes based on user preferences.",
      problem: "Travel planning is fragmented and time-consuming, requiring users to juggle multiple platforms.",
      approach: "Orchestrated a multi-agent system (Planner, Booker, Researcher) using LangGraph to autonomously execute complex workflows.",
      stack: ["LangGraph", "OpenAI GPT-4", "FastAPI", "React"],
      impact: "Delivered a fully autonomous planning assistant that generates bookable itineraries in under 30 seconds.",
      link: "https://github.com/Vvren2022"
    },
    {
      title: "SearchXBot",
      role: "AI Engineer",
      description: "A deep-research AI assistant capable of synthesizing information from multiple web sources to answer complex queries with citations.",
      problem: "LLMs often hallucinate or lack access to real-time, domain-specific information.",
      approach: "Engineered a recursive retrieval-augmented generation (RAG) engine that synthesizes live web data with citation tracking.",
      stack: ["LangChain", "Puppeteer", "Vector DB (Pinecone)", "Next.js"],
      impact: "Enabled trustworthy, fact-checked answers for complex queries, adopted by internal teams for market research.",
      link: "https://github.com/Vvren2022/research_tools_LLM"
    },
    {
      title: "Stock Market Prediction",
      role: "ML Engineer",
      description: "A robust time-series forecasting system for predicting stock trends using hybrid deep learning models.",
      problem: "Standard forecasting models fail to capture non-linear market volatility.",
      approach: "Developed a hybrid LSTM-Transformer architecture to capture both long-term trends and short-term fluctuations.",
      stack: ["PyTorch", "Pandas", "FastAPI", "Docker"],
      impact: "Outperformed traditional ARIMA models by 15%, providing actionable insights for trading simulations.",
      link: "https://github.com/Vvren2022/machine-learning"
    }
  ]
};
