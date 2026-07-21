export const profile = {
  name: 'Giridharan Chandrababu',
  role: 'AI Engineer | Generative AI, Agentic Systems & Cloud-Native Solutions',
  summary: [
  `Software/AI Engineer with 7+ years of progressive engineering experience, including recent hands-on leadership of Generative AI and Agentic AI initiatives — building LLM-powered applications, RAG pipelines, multi-agent systems, and MCP server architectures in Python.`,
  `Gen AI & Agentic Systems: LangChain and LangGraph for graph-based multi-agent orchestration and workflow automation; OpenAI GPT, Claude, and LLaMA models; Hugging Face Transformers; AWS Bedrock; prompt engineering; and semantic search across Pinecone, FAISS, Qdrant, Chroma, Typesense, and AWS OpenSearch.`,
  `Cloud-Native Delivery: AWS (EC2, Lambda, ECS, EKS, S3, API Gateway, SageMaker, CloudWatch, IAM), with additional multi-cloud experience on Azure (App Service, Functions, API Management, Logic Apps, ARM, Azure AD) and GCP (BigQuery, Vertex AI, Cloud Run, Dataflow, Dataproc, Pub/Sub).`,
  `Backend, API & Orchestration: FastAPI, Pydantic, Docker, Kubernetes/GKE, and microservices architecture; data orchestration with Apache Airflow, ETL pipelines, Spark MLlib, Redis, and Celery for real-time and batch workloads.`,
  `ML, Evaluation & BI: TensorFlow and PyTorch alongside classical ML (Random Forest, XGBoost, SVM, K-Means); automated quality evaluation with PyTest, DeepEval, and RAGAS (Precision@K/Recall@K); AI-driven insights via Tableau, Power BI, Metabase, and Superset.`,
  `LLM Fine-Tuning & MLOps: Hands-on fine-tuning of T5-based ranking models for personalization, and full MLOps lifecycle management (training, evaluation, deployment, monitoring) with Kubeflow and Vertex AI Pipelines on GKE.`,
  `Domain & Delivery: Applied experience across financial services, wealth management, insurance, and media/OTT streaming content/data ecosystems; partners closely with product managers and domain experts to align technical solutions to business goals within Agile Scrum/Kanban delivery.`,
],
  skills: {
    'Gen AI / Agentic / RAG': ['LLM pipelines', 'Agentic AI', 'MCP server architecture', 'LangChain', 'LangGraph (graph-based agent orchestration)', 'RAG pipelines', 'prompt engineering', 'AWS Bedrock', 'OpenAI GPT', 'Claude', 'LLaMA', 'Hugging Face Transformers', 'LLM fine-tuning (T5)'],
    'Vector Search & Retrieval': ['Pinecone', 'FAISS', 'Qdrant', 'Chroma', 'Typesense', 'AWS OpenSearch', 'Elasticsearch', 'embedding pipelines', 'hybrid/semantic search', 'similarity-search and index optimization'],
    'AWS': ['EC2', 'Lambda', 'ECS', 'EKS', 'S3', 'API Gateway', 'SageMaker', 'CloudWatch', 'IAM', 'Bedrock'],
    'Other Cloud (Azure / GCP)': ['Azure App Service', 'Functions', 'API Management', 'Logic Apps', 'DevOps', 'ARM', 'Azure AD', 'GCP BigQuery', 'Vertex AI', 'Vertex AI Pipelines', 'Cloud Run', 'Cloud Functions', 'Pub/Sub', 'Dataflow', 'Dataproc', 'Cloud Storage', 'Cloud Scheduler', 'Recommendations AI', 'GKE'],
    'Backend & APIs': ['Python', 'FastAPI', 'Pydantic', 'RESTful API design', 'microservices', 'Streamlit'],
    'Data Engineering & Orchestration': ['Apache Airflow (DAGs)', 'ETL pipeline design', 'Spark MLlib', 'Kafka', 'Redis', 'Celery', 'MongoDB', 'DocumentDB', 'PostgreSQL', 'SQL', 'Snowflake'],
    'DevOps & IaC': ['Docker', 'Kubernetes/GKE', 'Terraform', 'IaC', 'ARM Templates', 'Helm', 'JX-GitOps', 'GitHub Actions', 'GCP Cloud Build', 'CI/CD pipelines'],
    'Machine Learning & Deep Learning': ['TensorFlow', 'PyTorch', 'Keras', 'CNNs', 'Random Forest', 'XGBoost', 'Decision Trees', 'SVM', 'K-Means'],
    'Testing & Evaluation': ['PyTest', 'Unittest', 'DeepEval', 'RAGAS', 'Precision@K/Recall@K', 'performance testing', 'load testing'],
    'BI & Visualization': ['Tableau', 'Power BI', 'Looker', 'Metabase', 'Superset', 'Kibana', 'Matplotlib', 'Seaborn', 'Plotly'],
    'Document Intelligence & OCR': ['PyMuPDF', 'PyTesseract', 'Azure Cognitive Services'],
    'Domain Knowledge': ['Financial services', 'wealth management', 'insurance', 'enterprise content management (ECM)', 'media/OTT streaming'],
  },
}

/* ================= EXPERIENCE ================= */

export const experience = [
  {
    company: 'Brigaly',
    role: 'AI Developer',
    period: 'Aug 2025 – Present',
    description: 'Leading development of AI-powered content intelligence solutions for educational platforms to improve content quality, credibility, and compliance prior to publishing.',
    highlights: [
      'Lead design and development of an AI-powered content review system using Python, FastAPI, MongoDB, Redis, Celery, Pinecone, LangChain, and LangGraph — architecting the agentic workflow end to end',
      'Built an automated Content Readiness Pipeline evaluating grammar, readability, structure, tone, trust, and audience alignment, driving measurable improvements in publishing quality and compliance',
      'Designed multi-agent, graph-based orchestration with LangGraph for multi-step AI review workflows, and implemented NLP analysis (spaCy) alongside LLM-based review using Ollama (local) and AWS-hosted OpenAI models (production)',
      'Generated AI-driven content suggestions — rewrites, headlines, summaries, and tags — to support human moderation workflows',
      'Architected scalable background processing with Redis + Celery, including chunk-based processing and embedding generation for large-document semantic understanding',
      'Built a semantic search system on Pinecone for similarity search, duplicate detection, and content retrieval; implemented RAG pipelines in LangChain for context-grounded review',
      'Designed and deployed the AWS architecture (ECS/EC2, EKS-based deployments, DocumentDB, ElastiCache Redis, S3, IAM, CloudWatch) supporting production Streamlit-based chat interfaces and document intelligence workflows',
      'Established evaluation and quality gates using PyTest, DeepEval, RAGAS, Precision@K, and Recall@K, plus performance testing to validate retrieval and generation accuracy',
      'Delivered a production-ready AI content intelligence platform combining automated review, human-in-the-loop moderation, and intelligent search — strengthening institutional trust and content governance',
    ],
  },
  {
    company: 'DataFabricX, Chennai, India',
    role: 'AI & Data Engineer',
    period: 'Sep 2023 – Mar 2025',
    description: 'DataFabricX is an AI-enabled Enterprise Content Management (ECM) and Business Systems Integration provider serving finance, wealth management, and insurance clients with AI-powered search, generative AI, and business integration solutions.',
    highlights: [
      'Developed RESTful APIs using FastAPI and Pydantic for real-time data retrieval and batch processing supporting enterprise search and document workflows',
      'Designed and implemented end-to-end RAG pipelines for AI-powered search — data extraction, indexing, semantic/hybrid retrieval, and ranker integration',
      'Integrated Typesense for high-performance vector search, improving retrieval precision for enterprise document search',
      'Built workflow orchestration and retrieval flows using LangChain, automating query routing, embedding generation, and document chaining logic across multi-step pipelines',
      'Implemented OCR pipelines with PyMuPDF, PyTesseract, and Azure Cognitive Services to process diverse document types, including low-quality scanned images',
      'Automated ETL pipelines in Python and SQL for efficient ingestion into vector databases, supporting downstream RAG and search use cases',
      'Delivered AI/LLM solutions using OpenAI, LangChain, LangGraph, RAG, and prompt engineering, applying DevOps practices (GitHub, Terraform, Infrastructure-as-Code, ARM) and CI/CD across the SDLC',
      'Developed and deployed an intelligent Document QA chatbot with conversation-history retention, scalable document understanding, and Instabase integration for workflow automation',
      'Tuned OpenAI API parameters (including fine-tuning configuration) to optimize NLP-driven search relevance and response quality',
      'Built a context-aware Document QA chatbot with a Streamlit front end for stakeholder demos',
      'Deployed solutions on-premises using Windows services, batch scripts, and Docker for scalable, secure releases',
      'Led a proof-of-concept on AWS Bedrock for generative AI use cases, including summarizing large email threads and extracting key action points from enterprise communications',
      'Ensured system reliability and maintainability through unit and integration testing (PyTest, Unittest)',
    ],
  },
  {
    company: 'Quickplay Media, Chennai, India',
    role: 'Software Engineer',
    period: 'Jan 2022 – Sep 2023',
    description: 'Quickplay Media is a cloud-native platform provider for premium video streaming, partnering with top-tier media companies on OTT content, live sports streaming, and media analytics.',
    highlights: [
      'Built scalable, automated data pipelines on GCP for ingesting, cleaning, and transforming data for ML models and analytics, including batch and streaming pipelines with Dataflow and Snowflake → BigQuery/Cloud Storage integration',
      'Designed and deployed content and user-based recommendation systems (Because You Watched, Last 5 Watched, Popular Content), including behavioral-data pipelines from Snowflake into Cloud Datastore via Cloud Run and Dataflow',
      'Developed and fine-tuned T5-based ranking models for content recommendations, enhancing personalization through metadata and interaction signals; built a POC on GCP Recommendations AI to demonstrate effectiveness to stakeholders',
      'Developed and deployed ML models on Vertex AI for batch and real-time inference; implemented MLOps with Kubeflow and Vertex AI Pipelines for end-to-end training, evaluation, deployment, and monitoring',
      'Deployed AI/ML workloads on GKE with auto-scaling for inference, and set up CI/CD pipelines for model updates using JX-GitOps and Helm',
      'Architected real-time streaming pipelines (Couchbase → Kafka → Pub/Sub → Cloud Functions → Cloud Datastore) for live content updates and personalization, using Dataflow for real-time log processing and enrichment',
      'Built an Audit Trail System to track user interactions across storefronts for usage analytics and anomaly detection',
      'Created data marts and Looker dashboards for user engagement, churn prediction, content performance, and market trend analysis; automated Tableau report generation for stakeholder consumption',
      'Implemented automated client reporting with Cloud Scheduler and Cloud Functions, covering the full flow from data aggregation to report generation and email delivery',
      'Built Streamlit dashboards and led stakeholder POCs to communicate the business value of recommendation and churn models, capturing requirements and aligning outcomes with business goals',
    ],
  },
  {
    company: 'DataFabricX, Chennai, India',
    role: 'Python Developer & Data Science',
    period: 'May 2020 – Dec 2021',
    description: 'Earlier engagement with DataFabricX, an AI-enabled Enterprise Content Management (ECM) and Business Systems Integration provider serving finance, wealth management, and insurance clients.',
    highlights: [
      'Performed statistical modeling and ML analysis to surface data insights under the guidance of the Principal Data Scientist',
      'Developed a machine learning document classification application to organize and classify enterprise documents, improving accessibility and structure ahead of migration to a Document Management System (DMS)',
      'Applied NLP techniques for in-depth text analysis, enabling accurate document categorization by content and metadata',
      'Trained supervised models (Random Forest, SVM) for high-accuracy document classification, and applied K-means clustering to group similar documents and streamline retrieval',
      'Designed and maintained ETL pipelines from DMS to Elasticsearch for automated ingestion, transformation, and loading of document data',
      'Automated repetitive data processing tasks (extraction, preprocessing, formatting) via Python scripting, and built scripts to automate test case execution and load testing on generated datasets',
      'Applied Terraform, ARM templates, and CI/CD practices for building and deploying scalable software and cloud infrastructure',
      'Built a 360-degree document reporting dashboard (Kibana, Apache Superset) delivering real-time visibility into document metadata, status, and categorization',
    ],
  },
  {
    company: 'Trusfi Technologies, Chennai, India',
    role: 'Jr. Data Scientist',
    period: 'Oct 2018 – Dec 2019',
    description: 'Trusfi Technologies is a technology-driven company focused on AI-powered content filtering, recommendation engines, and automation solutions.',
    highlights: [
      'Designed and developed a text recommendation system using Keras and NLP techniques, improving user engagement and content discovery',
      'Developed a nudity detection system using CNNs and deep learning for real-time image classification, enhancing safe-content delivery capabilities',
      'Applied NLP methods to preprocess and analyze textual data, enabling effective feature extraction for the recommendation engine',
      'Prepared and executed unit test cases, and participated in functional/technical reviews and System/Integration/UAT testing to ensure delivery quality',
      'Participated in the full project lifecycle from requirements through production support, including design reviews and test-plan documentation for back-end database modules',
    ],
  },
]

/* ================= PROJECTS ================= */

export interface Project {
  id: string
  title: string
  summary: string
  description: string
  bullets: string[]
  tech: string[]
}

export const projects: Project[] = [
  {
    id: 'content-intelligence',
    title: 'AI-Powered Content Intelligence & Review Platform',
    summary: 'Agentic, LangGraph-orchestrated content review system for educational publishing',
    description:
      'Led design and development of an AI-powered content review system for educational platforms, architecting an end-to-end agentic workflow to evaluate and improve content quality, credibility, and compliance prior to publishing.',
    bullets: [
      'Built an automated Content Readiness Pipeline evaluating grammar, readability, structure, tone, trust, and audience alignment',
      'Designed multi-agent, graph-based orchestration with LangGraph for multi-step AI review workflows',
      'Implemented NLP analysis with spaCy alongside LLM-based review using Ollama (local) and AWS-hosted OpenAI models (production)',
      'Generated AI-driven content suggestions — rewrites, headlines, summaries, and tags — to support human moderation',
      'Architected scalable background processing with Redis + Celery, including chunk-based processing and embedding generation',
      'Built semantic search on Pinecone for similarity search, duplicate detection, and content retrieval; implemented RAG pipelines in LangChain',
      'Deployed on AWS (ECS/EC2, EKS, DocumentDB, ElastiCache Redis, S3, IAM, CloudWatch) with a production Streamlit chat interface',
      'Established evaluation and quality gates using PyTest, DeepEval, RAGAS, Precision@K, and Recall@K',
    ],
    tech: [
      'Python',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'Pinecone',
      'MongoDB',
      'Redis',
      'Celery',
      'AWS (ECS, EKS, DocumentDB, S3)',
      'Streamlit',
      'DeepEval',
      'RAGAS',
    ],
  },
  {
    id: 'doc-ai',
    title: 'AI Document Intelligence & QA Platform',
    summary: 'Enterprise document search, QA, and summarization using RAG',
    description:
      'Built an end-to-end AI document intelligence platform enabling semantic search, question answering, and summarization across large enterprise document repositories for finance, wealth management, and insurance clients.',
    bullets: [
      'Designed end-to-end RAG pipelines using LangChain with semantic and hybrid retrieval, plus ranker integration',
      'Integrated OCR pipelines using PyMuPDF, PyTesseract, and Azure Cognitive Services for diverse document types',
      'Implemented FastAPI and Pydantic-based backend services for real-time and batch document workflows',
      'Integrated Typesense for high-performance vector search, improving retrieval precision',
      'Built a context-aware Document QA chatbot with conversation-history retention and Instabase workflow integration',
      'Developed a Streamlit UI for enterprise demos and stakeholder POCs',
      'Ran a proof-of-concept on AWS Bedrock for summarizing large email threads and extracting action items',
    ],
    tech: [
      'Python',
      'LangChain',
      'FastAPI',
      'OpenAI',
      'Azure Cognitive Services',
      'Typesense',
      'AWS Bedrock',
      'Docker',
      'Streamlit',
    ],
  },
  {
    id: 'ott-recommendation',
    title: 'OTT Recommendation & Personalization System',
    summary: 'Scalable ML pipelines for content personalization on GCP',
    description:
      'Built large-scale recommendation systems and MLOps pipelines for an OTT streaming platform, enabling personalized content discovery, real-time analytics, and stakeholder-facing insights.',
    bullets: [
      'Designed content-based and user-based recommendation systems (Because You Watched, Last 5 Watched, Popular Content)',
      'Developed and fine-tuned T5-based ranking models for content personalization',
      'Built batch and streaming data pipelines using GCP Dataflow, Snowflake, BigQuery, and Cloud Storage',
      'Deployed and monitored ML models on Vertex AI and GKE with MLOps workflows via Kubeflow and Vertex AI Pipelines',
      'Architected real-time streaming pipelines (Couchbase → Kafka → Pub/Sub → Cloud Functions → Cloud Datastore)',
      'Built an audit trail system for usage analytics and anomaly detection across storefronts',
      'Created Looker and Tableau dashboards for engagement, churn prediction, and content performance analysis',
    ],
    tech: [
      'GCP',
      'Vertex AI',
      'Kubeflow',
      'Dataflow',
      'Kubernetes/GKE',
      'Snowflake',
      'Kafka',
      'Python',
      'SQL',
      'Looker',
      'Tableau',
    ],
  },
]