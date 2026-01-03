export const profile = {
  name: 'Giridharan Chandrababu',
  role: 'Senior Software Engineer (AI & Data Science)',
  summary:  [
  `Software Engineer with 7+ years of experience in building scalable, secure cloud-native applications and automation workflows using Python. Adept at designing and deploying end-to-end data pipelines, cloud-native applications, and analytics platforms across multi-cloud environments, including Amazon Web Services (AWS), Google Cloud Platform (GCP) and on-premises infrastructure.`,
  `Proven expertise in developing interactive data applications and dashboards using Streamlit, including custom components such as recommendation carousels for content discovery, real-time visualizations, and LLM-integrated UIs to support data-driven decision-making and document intelligence workflows.`,
  `Generative AI & NLP: Hands-on in LLMs, Retrieval-Augmented Generation (RAG), agentic AI frameworks, and MCP server development using LangChain, Hugging Face, GPT, OpenAI APIs, and vector databases (FAISS, Typesense, Pinecone, Qdrant, Chroma). Built LLM-integrated applications with Streamlit, and EKS-based deployments, including custom chat interfaces and document.`,
  `Machine Learning & Model Optimization: Hands-on with supervised & unsupervised learning (Random Forest, XGBoost, Decision Trees, SVM, K-Means) and deep learning frameworks (TensorFlow, PyTorch) for scalable AI solutions.`,
  `AWS SageMaker & Cloud AI: Skilled in training, deploying, and managing ML models on AWS SageMaker, integrating with S3, Lambda, API Gateway, AWS Bedrock, and embedding models for production AI applications.`,
  `Cloud & DevOps: Expertise in Azure, GCP, leveraging Azure AI services (App Service, Functions, API Management, Logic Apps, DevOps) and GCP services (BigQuery, Vertex AI, Cloud Run, Cloud Functions, Pub/Sub, Dataflow, and Cloud Storage).`,
  `Backend & API Development: Proficient in FastAPI, Docker, Kubernetes (GKE), and microservices architecture, delivering scalable and efficient AI-powered APIs.`,
  `Big Data & Orchestration: Experience in ETL pipelines, Apache Airflow, Spark MLlib, Kubernetes, and GCP Dataflow & Dataproc for real-time and batch processing workflows.`,
  `Performance Optimization & CI/CD: Skilled in auto-scaling, caching strategies, and CI/CD pipelines using GCP Cloud Build, GitHub Actions, ensuring high-performance AI applications.`,
  `Data Visualization & BI: Strong proficiency in Tableau, Metabase, Superset, Power BI, Matplotlib, Seaborn, and Plotly, enabling AI-driven insights.`,
  `Security & Cloud Architecture: Deep understanding of Azure Resource Manager (ARM), Azure Active Directory (AAD), GCP IAM, networking, and security best practices for AI/ML applications.`,
  `Linux & UNIX Expertise: Experienced in Linux/UNIX environments, with programming and debugging skills in UNIX Shell Scripting for automation.`,
]
}

/* ================= EXPERIENCE ================= */

export const experience = [
  {
    company: 'Veracity IT Solutions INC (Client: Northly Risk, Toronto)',
    role: 'Software Engineer – AI & Data Science',
    period: 'Nov 2024 – Mar 2025',
    highlights: [
        'Translated complex business challenges into mathematical and statistical hypotheses and designed detailed analysis plans to quantify business value',
        'Researched, developed, and validated machine learning and deep learning models for enterprise risk management, focusing on claim financials, indemnity benefits, and return-to-work analysis',
        'Derived actionable insights by interpreting model predictions and analyzing large-scale worker compensation claims data to support profitable business decisions',
        'Developed, recommended, and implemented procedural and analytical improvements to increase accuracy and effectiveness of production ML systems',
        'Designed and implemented natural language generation (NLG) models using RNNs and Variational Autoencoders (VAEs) to generate future claim notes using Keras and TensorFlow',
        'Managed and analyzed time-series data and large structured datasets using advanced statistical techniques to answer business-critical questions',
        'Collaborated closely with software engineering teams to integrate ML solutions into production systems using Python-based RESTful APIs',
        'Worked extensively with big data technologies, including PySpark and Spark MLlib, for scalable data processing and machine learning',
        'Trained, evaluated, and deployed ML/DL models on Google Cloud Platform (GCP) and AWS',
        'Implemented an autoencoder-based anomaly detection system to identify unusual or high-risk claims for further investigation',
        'Worked across heterogeneous environments including MySQL, Oracle, Cassandra, Linux, Spark, Docker, and Kubernetes'
        ],
  },
  {
    company: 'DataFabricX',
    role: 'AI & Data Engineer',
    period: 'Sep 2023 – Sep 2024',
    highlights: [
      'Developed and maintained RESTful APIs using FastAPI and Pydantic for real-time data retrieval and batch document processing',
      'Designed and implemented end-to-end Retrieval-Augmented Generation (RAG) pipelines for AI-powered enterprise search, including data extraction, indexing, semantic and hybrid retrieval, and ranker integration',
      'Integrated Typesense for high-performance vector and hybrid search to significantly improve retrieval precision and response relevance',
      'Built workflow orchestration and retrieval flows using LangChain, automating query routing, embedding generation, document chaining, and response composition',
      'Implemented OCR pipelines using PyMuPDF, PyTesseract, and Azure Cognitive Services to process scanned, native, and low-quality document images',
      'Automated ETL pipelines using Python and SQL to efficiently ingest structured and unstructured data into vector databases',
      'Developed and deployed an intelligent Document QA chatbot with conversation history retention and scalable document understanding',
      'Integrated Instabase for document workflow automation and enterprise document processing',
      'Worked extensively with OpenAI APIs, fine-tuning parameters and prompts to optimize NLP-driven enterprise search and QA performance',
      'Built Streamlit-based demo applications to showcase AI document intelligence capabilities to stakeholders',
      'Deployed solutions on-premises using Windows Services, batch scripts, and Docker for secure and scalable releases',
      'Conducted proof-of-concept implementations using AWS Bedrock for generative AI use cases such as summarizing large email threads and extracting action items',
      'Ensured system reliability and maintainability through comprehensive unit and integration testing using PyTest'
    ],
  },
  {
    company: 'Quickplay Media',
    role: 'Software Engineer – Data Science',
    period: 'Jan 2022 – Sep 2023',
    highlights: [
      'Designed and developed scalable, automated batch and streaming data pipelines on Google Cloud Platform (GCP) for ingesting, cleaning, and transforming large-scale datasets',
      'Built batch and real-time pipelines using Dataflow to enable near real-time analytics and downstream ML consumption',
      'Integrated Snowflake with BigQuery and Cloud Storage to support model training, analytics, and BI use cases',
      'Designed and deployed content-based and user-based recommendation systems, including “Because You Watched”, “Last 5 Watched”, and “Popular Content” features',
      'Built pipelines to extract behavioral data from Snowflake, preprocess it, and publish results to Cloud Datastore using Cloud Run and Dataflow',
      'Developed and fine-tuned T5-based ranking models using Hugging Face Transformers to improve personalization and recommendation relevance',
      'Built proof-of-concept solutions using GCP Recommendations AI and iterated based on stakeholder feedback',
      'Developed, deployed, and monitored ML models using Vertex AI for batch and real-time inference',
      'Implemented end-to-end MLOps workflows using Kubeflow and Vertex AI Pipelines for training, evaluation, deployment, and monitoring',
      'Deployed ML workloads on Google Kubernetes Engine (GKE) with autoscaling for inference workloads',
      'Set up CI/CD pipelines using GitOps (JX-GitOps) and Helm to manage model versioning and rollouts',
      'Architected real-time data pipelines using Couchbase, Kafka, Pub/Sub, Cloud Functions, and Cloud Datastore',
      'Developed audit trail systems to track user interactions across storefronts for analytics and anomaly detection',
      'Created data marts and dashboards using Looker and Tableau for engagement, churn prediction, content performance, and market analysis',
      'Automated report generation and scheduling using Cloud Scheduler and Cloud Functions',
      'Built Streamlit dashboards and interactive POCs to communicate ML insights and business value to stakeholders'
    ],
  },
  {
    company: 'DataFabricX',
    role: 'Data Scientist',
    period: 'May 2019 – Dec 2021',
    highlights: [
      'Performed statistical modeling and machine learning analysis under the guidance of senior data scientists',
      'Developed ML-based document classification systems to organize enterprise documents prior to DMS migration',
      'Applied NLP techniques for in-depth document text analysis and metadata-driven categorization',
      'Trained supervised learning models including Random Forest and Support Vector Machines (SVM) for high-accuracy document classification',
      'Implemented unsupervised clustering using K-means to group and organize similar documents',
      'Designed and maintained ETL pipelines to ingest documents into Elasticsearch for search and analytics',
      'Developed Python scripts to automate data extraction, preprocessing, and formatting tasks',
      'Built automated test scripts and performed load testing for ML dataset generation',
      'Created 360-degree document analytics dashboards providing real-time visibility into document status and metadata',
      'Used Kibana and Apache Superset for data visualization and reporting'
    ],
  },
  {
    company: 'Trusfi Technologies',
    role: 'Junior Data Scientist',
    period: 'Oct 2018 – Dec 2019',
    highlights: [
      'Worked with large-scale structured and unstructured datasets for ML and analytics use cases',
      'Designed and developed an NLP-based text recommendation system using Keras to improve content discovery',
      'Developed a deep learning-based nudity detection system using CNNs for automated content moderation',
      'Applied NLP techniques for text preprocessing, feature extraction, and model training',
      'Implemented image processing and convolutional neural networks for real-time image classification',
      'Prepared and executed unit test cases and performed functional, system, and UAT testing',
      'Conducted design and technical reviews with cross-functional stakeholders',
      'Participated in the complete project lifecycle from requirements gathering to production support',
      'Created test plans and backend database test cases',
      'Worked extensively in Linux-based production environments'
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
    id: 'doc-ai',
    title: 'AI Document Intelligence Platform',
    summary: 'Enterprise document search, QA, and summarization using RAG',
    description:
      'Built an end-to-end AI document intelligence platform enabling semantic search, question answering, and summarization across large enterprise document repositories.',
    bullets: [
      'Designed RAG pipelines using LangChain with vector and hybrid retrieval',
      'Integrated OCR pipelines using PyMuPDF and Azure Cognitive Services',
      'Implemented FastAPI-based backend services with secure APIs',
      'Integrated Typesense for high-performance vector search',
      'Built context-aware Document QA chatbot with conversation history',
      'Developed Streamlit UI for enterprise demos and stakeholder POCs',
    ],
    tech: [
      'Python',
      'LangChain',
      'FastAPI',
      'OpenAI',
      'Azure Cognitive Services',
      'Typesense',
      'Docker',
      'Streamlit',
    ],
  },
  {
    id: 'risk-ml',
    title: 'Risk Analytics & Anomaly Detection Platform',
    summary: 'Predictive ML models for insurance risk management',
    description:
      'Designed and deployed machine learning and deep learning models for insurance claims risk analysis, anomaly detection, and financial loss prediction.',
    bullets: [
      'Feature engineering and large-scale training using PySpark',
      'Built deep learning models using TensorFlow and Keras',
      'Implemented autoencoder-based anomaly detection for unusual claims',
      'Analyzed time-series data for claim financial forecasting',
      'Integrated ML models into production using Python REST APIs',
      'Deployed and monitored models on GCP and AWS',
    ],
    tech: [
      'Python',
      'PySpark',
      'TensorFlow',
      'Keras',
      'GCP',
      'AWS',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    id: 'ott-recommendation',
    title: 'OTT Recommendation & Personalization System',
    summary: 'Scalable ML pipelines for content personalization',
    description:
      'Built large-scale recommendation systems and ML pipelines for OTT platforms, enabling personalized content discovery and real-time analytics.',
    bullets: [
      'Designed user-based and content-based recommendation systems',
      'Fine-tuned T5-based ranking models for content personalization',
      'Built batch and streaming data pipelines using GCP Dataflow',
      'Deployed ML models using Vertex AI and GKE',
      'Implemented MLOps workflows with Kubeflow and CI/CD pipelines',
      'Built analytics dashboards using Looker and Tableau',
    ],
    tech: [
      'GCP',
      'Vertex AI',
      'Kubeflow',
      'Dataflow',
      'Kubernetes',
      'Snowflake',
      'Python',
      'SQL',
      'Looker',
      'Tableau',
    ],
  },
]
