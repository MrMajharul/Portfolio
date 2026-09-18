export const blogPosts = [
  {
    id: "getting-started-with-react-19",
    title: "Getting Started with React 19 — What's New & Lessons Learned",
    subtitle: "Exploring the React Compiler, Actions, useActionState, useOptimistic, and real-world performance lessons.",
    excerpt: "React 19 brings revolutionary features like the React Compiler, Actions, useActionState, and the use API. Here is a comprehensive breakdown of what changed and how it simplifies frontend development.",
    date: "Sep 2026",
    readTime: "6 min read",
    tags: ["React 19", "JavaScript", "Frontend", "Performance"],
    author: {
      name: "Majharul Islam",
      role: "Software Developer & CS Student",
      avatar: "/majharul-photo.png",
    },
    sections: [
      {
        type: "paragraph",
        content: "React 19 represents one of the most transformative updates to the React ecosystem since Hooks were introduced in version 16.8. Rather than requiring developers to manually write complex memoization logic with `useMemo`, `useCallback`, and `React.memo`, React 19 shifts the heavy lifting to the compiler and runtime. In this article, I share the key architectural changes, practical patterns, and what I learned upgrading my own projects."
      },
      {
        type: "heading",
        level: 2,
        title: "1. The React Compiler: The End of Manual Memoization"
      },
      {
        type: "paragraph",
        content: "For years, React developers spent significant mental energy deciding when to wrap objects in `useMemo` and functions in `useCallback` to prevent unnecessary re-renders. The React Compiler analyzes JavaScript semantics at build time and automatically memoizes values and component subtrees when their inputs do not change."
      },
      {
        type: "code",
        language: "javascript",
        caption: "React 18 vs React 19: Cleaner, compiler-optimized component code",
        code: `// --- React 18: Manual memoization boilerplate ---
function UserList({ users, filter }) {
  const filteredUsers = useMemo(() => {
    return users.filter(u => u.name.toLowerCase().includes(filter.toLowerCase()));
  }, [users, filter]);

  const handleSelect = useCallback((id) => {
    console.log("Selected user:", id);
  }, []);

  return <List items={filteredUsers} onSelect={handleSelect} />;
}

// --- React 19: Pure, idiomatic JavaScript (Compiler handles memoization) ---
function UserList({ users, filter }) {
  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSelect = (id) => {
    console.log("Selected user:", id);
  };

  return <List items={filteredUsers} onSelect={handleSelect} />;
}`
      },
      {
        type: "heading",
        level: 2,
        title: "2. Native Actions & useActionState"
      },
      {
        type: "paragraph",
        content: "Handling asynchronous state in forms used to require manual `isPending` state flags, error catching, and try/finally blocks. React 19 introduces Actions — async transitions that automatically manage pending states, optimistic updates, and error handling."
      },
      {
        type: "code",
        language: "javascript",
        caption: "Streamlining async operations with useActionState",
        code: `import { useActionState } from 'react';

async function updateProfile(previousState, formData) {
  const name = formData.get("name");
  try {
    const res = await api.updateName(name);
    return { error: null, success: true, name: res.name };
  } catch (err) {
    return { error: err.message, success: false, name: previousState.name };
  }
}

export function ProfileForm({ currentName }) {
  const [state, formAction, isPending] = useActionState(updateProfile, {
    name: currentName,
    error: null,
    success: false
  });

  return (
    <form action={formAction}>
      <input name="name" defaultValue={state.name} disabled={isPending} />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Saving...' : 'Save Profile'}
      </button>
      {state.error && <p className="error">{state.error}</p>}
      {state.success && <p className="success">Updated successfully!</p>}
    </form>
  );
}`
      },
      {
        type: "heading",
        level: 2,
        title: "3. useOptimistic: Instant Feedback Without the Glitches"
      },
      {
        type: "paragraph",
        content: "When users trigger actions like liking a post or adding an item to a list, waiting for the network response makes an interface feel sluggish. `useOptimistic` lets you display the predicted state immediately, automatically rolling back to the server state if the action fails."
      },
      {
        type: "quote",
        content: "Optimistic UI used to require writing rollback queues in Redux or Zustand. In React 19, optimistic rendering is a first-class citizen of the rendering lifecycle."
      },
      {
        type: "heading",
        level: 2,
        title: "4. The New `use` API for Promises & Context"
      },
      {
        type: "paragraph",
        content: "React 19 introduces `use()`, a function that can read resources like Promises or Context directly inside render functions. Unlike traditional hooks, `use()` can be called conditionally or within loops, integrating seamlessly with React Suspense."
      },
      {
        type: "heading",
        level: 2,
        title: "Key Takeaways"
      },
      {
        type: "list",
        items: [
          "Less boilerplate: The React Compiler eliminates almost all useMemo/useCallback overhead.",
          "First-class asynchronous handling: Actions and useActionState simplify form submissions and data mutations.",
          "Smoother UX: useOptimistic makes web apps feel instantaneous by default.",
          "Cleaner codebases: Component logic focuses on business requirements rather than framework idiosyncrasies."
        ]
      }
    ]
  },
  {
    id: "genomic-data-analysis-biomarker-validation",
    title: "My Journey into Genomic Data Analysis: From Code to Biomarker Discovery",
    subtitle: "How computational biology and machine learning uncovered why circadian gene signatures fail to replicate across independent patient cohorts.",
    excerpt: "How I went from writing web apps to co-authoring an IEEE-accepted research paper on cancer immunotherapy biomarker validation using Python, RNA-seq analysis, and rigorous statistical validation.",
    date: "Aug 2026",
    readTime: "8 min read",
    tags: ["Research", "Python", "Data Science", "Bioinformatics"],
    author: {
      name: "Majharul Islam",
      role: "CS Researcher & IT Intern (DURS)",
      avatar: "/majharul-photo.png",
    },
    sections: [
      {
        type: "paragraph",
        content: "When I started computer science, my focus was largely on full-stack web engineering and algorithms. That changed when I joined our bioinformatics research team at Green University of Bangladesh and Dhaka University Research Society (DURS). We investigated whether circadian gene expression signatures could reliably predict patient response to cancer immunotherapy (immune checkpoint inhibitors). Our findings were accepted to IEEE STI 2026."
      },
      {
        type: "heading",
        level: 2,
        title: "The Problem: The Reproducibility Crisis in Genomic Biomarkers"
      },
      {
        type: "paragraph",
        content: "In recent years, several high-profile papers claimed that expression profiles of core circadian clock genes (such as CLOCK, BMAL1, PER1/2, CRY1/2) correlate strongly with clinical response in melanoma and non-small cell lung cancer. However, many published genomic signatures fail when tested outside the single cohort they were trained on. We set out to test these claims using rigorous external validation across three independent clinical datasets."
      },
      {
        type: "quote",
        content: "A machine learning model that boasts a 0.92 ROC-AUC on a single cohort is meaningless if it drops to 0.51 (pure random guessing) when applied to external clinic cohorts."
      },
      {
        type: "heading",
        level: 2,
        title: "Data Pipeline: High-Dimensional RNA-Seq & Clinical Cohorts"
      },
      {
        type: "paragraph",
        content: "We processed raw RNA-Seq count matrices and normalized expression data (log2-TPM) across three independent patient cohorts: Hugo et al., Van Allen et al., and Gide et al. Processing high-dimensional gene expression data required careful consideration of batch effects and sequencing platforms."
      },
      {
        type: "code",
        language: "python",
        caption: "Cross-cohort validation & ROC-AUC benchmarking pipeline snippet",
        code: `import numpy as np
import pandas as pd
from sklearn.metrics import roc_auc_score, roc_curve
from scipy import stats

def evaluate_signature_reproducibility(cohort_data, gene_signature, label_col="responder"):
    """
    Evaluates signature score consistency across multiple patient cohorts.
    Calculates single-sample signature enrichment and tests ROC-AUC.
    """
    results = {}
    
    for cohort_name, df in cohort_data.items():
        # Verify all signature genes exist in cohort expression matrix
        available_genes = [g for g in gene_signature if g in df.columns]
        
        # Calculate standardized composite signature score (Z-score mean)
        expr_subset = df[available_genes]
        z_scores = expr_subset.apply(stats.zscore)
        signature_score = z_scores.mean(axis=1)
        
        y_true = df[label_col].astype(int)
        auc = roc_auc_score(y_true, signature_score)
        
        # 95% Confidence Interval via Stratified Bootstrap
        bootstrapped_aucs = []
        for _ in range(1000):
            idx = np.random.choice(len(df), size=len(df), replace=True)
            if len(np.unique(y_true.iloc[idx])) > 1:
                bootstrapped_aucs.append(roc_auc_score(y_true.iloc[idx], signature_score.iloc[idx]))
                
        ci_lower = np.percentile(bootstrapped_aucs, 2.5)
        ci_upper = np.percentile(bootstrapped_aucs, 97.5)
        
        results[cohort_name] = {
            "genes_evaluated": len(available_genes),
            "auc": round(auc, 3),
            "ci_95": (round(ci_lower, 3), round(ci_upper, 3))
        }
        
    return pd.DataFrame(results).T`
      },
      {
        type: "heading",
        level: 2,
        title: "Key Findings: Why the Signatures Failed to Replicate"
      },
      {
        type: "paragraph",
        content: "Our systematic analysis revealed that while circadian clock gene models performed well internally within the discovery cohort, their predictive capability collapsed when evaluated on independent validation cohorts (AUCs hovered between 0.49 and 0.54). The apparent initial signal was largely driven by cohort-specific batch artifacts and confounding tumor purity differences, rather than genuine predictive immunobiology."
      },
      {
        type: "heading",
        level: 2,
        title: "What This Taught Me as a Computer Scientist"
      },
      {
        type: "list",
        items: [
          "Data integrity over model complexity: Advanced deep learning cannot compensate for uncorrected confounding variables.",
          "External validation is non-negotiable: Never trust cross-validation alone when domain shift or batch effects exist.",
          "Interdisciplinary impact: Bridging software engineering rigor with biomedical inquiry can prevent costly clinical trial dead-ends."
        ]
      }
    ]
  },
  {
    id: "building-scalable-fullstack-systems-nodejs-sql",
    title: "Architecting a Resilient Full-Stack System with Node.js, Express & SQL",
    subtitle: "Database normalization, ACID transactions, JWT authentication, and connection pooling in real-world platforms.",
    excerpt: "Lessons learned from architecting and deploying UConnect — an enterprise-grade university community platform with role-based access, atomic SQL transactions, and optimized indexing.",
    date: "Jul 2026",
    readTime: "7 min read",
    tags: ["Node.js", "SQL", "Database Design", "Backend", "TypeScript"],
    author: {
      name: "Majharul Islam",
      role: "Full-Stack Engineer & UConnect Creator",
      avatar: "/majharul-photo.png",
    },
    sections: [
      {
        type: "paragraph",
        content: "When developing UConnect — a centralized university community and student-faculty portal — standard CRUD patterns quickly proved insufficient. Handling concurrent course registrations, moderated discussion threads, and administrative role hierarchies required a rock-solid backend architecture. In this article, I discuss key architectural decisions in Node.js and SQL that kept our system reliable and performant."
      },
      {
        type: "heading",
        level: 2,
        title: "1. Relational Schema Design & Third Normal Form (3NF)"
      },
      {
        type: "paragraph",
        content: "While NoSQL databases are often favored for rapid prototyping, relational databases shine when data integrity and relational constraints are paramount. By structuring our schema according to 3NF principles, we eliminated data duplication and ensured referential integrity across users, roles, department cohorts, and thread moderation."
      },
      {
        type: "heading",
        level: 2,
        title: "2. Ensuring Atomicity with Database Transactions"
      },
      {
        type: "paragraph",
        content: "When a student applies for an administrative approval or an event seat is claimed, multiple database records must update simultaneously. If any step fails, partial writes would leave the database in an inconsistent state. We implemented a reusable transaction wrapper in Node.js to guarantee ACID compliance."
      },
      {
        type: "code",
        language: "javascript",
        caption: "Production-ready transaction runner with automated rollback and connection release",
        code: `import { pool } from '../config/db.js';

/**
 * Executes an array of SQL queries or a callback inside a managed transaction.
 * Automatically handles commit, rollback on error, and connection release.
 */
export async function withTransaction(executionCallback) {
  const client = await pool.getConnection();
  
  try {
    await client.beginTransaction();
    
    // Execute business logic with the dedicated client
    const result = await executionCallback(client);
    
    await client.commit();
    return result;
  } catch (error) {
    await client.rollback();
    console.error("Transaction aborted due to error:", error);
    throw error;
  } finally {
    // Crucial: always release the client back to the pool
    client.release();
  }
}`
      },
      {
        type: "heading",
        level: 2,
        title: "3. Robust Role-Based Access Control (RBAC)"
      },
      {
        type: "paragraph",
        content: "Security is only as strong as its authorization layer. Instead of embedding hard-coded role checks into endpoint handlers, we built modular middleware that evaluates permissions against decoded JWT tokens and cached permission sets."
      },
      {
        type: "code",
        language: "javascript",
        caption: "Granular authorization middleware in Express",
        code: `export function requirePermission(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(401).json({ error: "Unauthorized: Missing authentication token" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: "Forbidden: Insufficient privilege level to execute this action" 
      });
    }

    next();
  };
}`
      },
      {
        type: "heading",
        level: 2,
        title: "4. Query Optimization & Indexing Strategies"
      },
      {
        type: "paragraph",
        content: "As discussion threads and interaction logs grew, query latency began creeping up. By running `EXPLAIN ANALYZE` on frequent queries, we identified bottlenecks caused by full table scans. Adding composite indexes on `(department_id, created_at)` and `(user_id, status)` dropped query response times from 340ms to under 12ms."
      },
      {
        type: "heading",
        level: 2,
        title: "Key Takeaways"
      },
      {
        type: "list",
        items: [
          "Normalize first, denormalize only when verified with performance profiling.",
          "Always wrap multi-step state changes in transactions to prevent corrupted states.",
          "Keep authentication and authorization decoupled for maintainable access control.",
          "Use connection pooling and EXPLAIN ANALYZE early before traffic scales."
        ]
      }
    ]
  },
  {
    id: "demystifying-modern-data-engineering",
    title: "Demystifying Modern Data Engineering: From Raw Streams to Analytics",
    subtitle: "Key takeaways from DataCamp's Data Engineering track — ETL vs ELT, data warehousing, and pipeline resilience.",
    excerpt: "Insights and practical architecture principles gained while completing the DataCamp Data Engineering certification — exploring streaming pipelines, SQL data modeling, and modern cloud warehouses.",
    date: "Sep 2026",
    readTime: "5 min read",
    tags: ["Data Engineering", "SQL", "ETL", "Cloud", "DataCamp"],
    author: {
      name: "Majharul Islam",
      role: "Certified DataCamp Engineer & CS Student",
      avatar: "/majharul-photo.png",
    },
    sections: [
      {
        type: "paragraph",
        content: "While building web platforms and conducting academic research, I realized that data processing bottlenecks often determine a project's ceiling. Completing DataCamp's 'Understanding Data Engineering' track deepened my understanding of how modern organizations structure petabyte-scale data workflows. Here is a distillation of the most important concepts every software engineer should know."
      },
      {
        type: "heading",
        level: 2,
        title: "1. The Evolution: ETL vs. ELT"
      },
      {
        type: "paragraph",
        content: "Historically, ETL (Extract, Transform, Load) transformed data on dedicated server clusters before writing to storage due to high warehouse costs. Today, the dominance of cloud warehouses (BigQuery, Snowflake, Redshift) has popularized ELT (Extract, Load, Transform). Raw data is dumped directly into data lakes or staging tables, and transformations are executed in-place using scalable SQL engines."
      },
      {
        type: "heading",
        level: 2,
        title: "2. Dimensional Modeling: Star vs. Snowflake Schemas"
      },
      {
        type: "paragraph",
        content: "In operational applications (OLTP), 3NF normalization prevents anomalies. In analytical systems (OLAP), dimensional modeling prioritizes query speed. Star schemas use centralized Fact tables (e.g., transactions, user interactions) surrounded by de-normalized Dimension tables (e.g., dates, products, locations), minimizing expensive multi-table joins."
      },
      {
        type: "quote",
        content: "Software engineers optimize for atomic write consistency (OLTP); data engineers optimize for aggregate read throughput (OLAP)."
      },
      {
        type: "heading",
        level: 2,
        title: "3. Pipeline Idempotency & Schema Drift"
      },
      {
        type: "paragraph",
        content: "The golden rule of robust data engineering is idempotency: running a pipeline job multiple times on the same input data must yield the exact same outcome without creating duplicate rows or skewed analytics. Implementing checkpointing, upserts (`MERGE` statements), and automated schema validation ensures that upstream changes don't silently break downstream business dashboards."
      },
      {
        type: "heading",
        level: 2,
        title: "Summary"
      },
      {
        type: "list",
        items: [
          "Understanding data flow beyond your app's database makes you a far more effective systems architect.",
          "ELT unlocks flexibility by preserving raw historic data for future unanticipated analysis.",
          "Design for pipeline failures: make ingestion jobs idempotent and testable."
        ]
      }
    ]
  }
];
