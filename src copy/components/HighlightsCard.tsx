export default function HighlightsCard() {
  return (
    <div
      className="
        rounded-3xl
        border border-yellow-200
        bg-[#f6f8f4]
        p-4
        shadow-sm
        hover:shadow-md
        transition-shadow
        space-y-5
      "
    >
      <h3 className="font-semibold text-slate-900 text-lg">
        Highlights
      </h3>

      {/* ================= CORE SUMMARY ================= */}
      <ul className="space-y-3 text-sm text-slate-700">
        <li>
          <span className="font-semibold text-slate-900">AI & GenAI:</span> RAG · LLMs · NLP · Model Fine-tuning
        </li>
        <li>
          <span className="font-semibold text-slate-900">Cloud:</span> GCP · AWS · Azure
        </li>
      </ul>

      {/* ================= SKILL GROUPS ================= */}
      <div className="space-y-4 text-sm text-slate-700">

        {/* Programming */}
        <div>
          <p className="font-semibold text-slate-900 mb-1">
            Programming
          </p>
          <p>Python · SQL · Go</p>
        </div>

        {/* Data Engineering */}
        <div>
          <p className="font-semibold text-slate-900 mb-1">
            Data Engineering
          </p>
          <p>
            ETL Pipelines · Streaming (Pub/Sub, Kafka) · Orchestration · Data Quality
          </p>
        </div>

        {/* ML & NLP */}
        <div>
          <p className="font-semibold text-slate-900 mb-1">
            Machine Learning & NLP
          </p>
          <p>
            Scikit-learn · TensorFlow · PyTorch · Hugging Face · LangChain · RAG · BERT · Vertex AI Pipelines
          </p>
        </div>

        {/* Databases */}
        <div>
          <p className="font-semibold text-slate-900 mb-1">
            Databases
          </p>
          <p>
            PostgreSQL · MongoDB · BigQuery · MSSQL
          </p>
        </div>

        {/* Vector Databases */}
        <div>
          <p className="font-semibold text-slate-900 mb-1">
            Vector Databases
          </p>
          <p>
            Chroma · Pinecone · Qdrant · FAISS · PGVector · Typesense
          </p>
        </div>

        {/* Cloud & Infra */}
        <div>
          <p className="font-semibold text-slate-900 mb-1">
            Cloud & Infrastructure
          </p>
          <p>
            GCP (BigQuery, Dataproc, Cloud Run, Vertex AI) · AWS (EC2, Lambda, S3, API Gateway) · Azure
          </p>
        </div>

        {/* DevOps & MLOps */}
        <div>
          <p className="font-semibold text-slate-900 mb-1">
            DevOps & MLOps
          </p>
          <p>
            Docker · Kubernetes (GKE, EKS) · Terraform · Helm · GitOps · MLflow · Kubeflow
          </p>
        </div>

        {/* Visualization */}
        <div>
          <p className="font-semibold text-slate-900 mb-1">
            Visualization & BI
          </p>
          <p>
            Streamlit · Pandas · Jupyter · Tableau · Metabase · Looker · Power BI
          </p>
        </div>

      </div>
    </div>
  )
}
