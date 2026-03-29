
export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      <div className="max-w-4xl mx-auto px-4 py-20">

        {/* Title */}
        <h1 className="text-3xl font-semibold mb-12">
          Experience
        </h1>

        {/* ===== Experience 1 ===== */}
        <section className="mb-16">

          <h2 className="text-xl font-medium text-white">
            Full Stack Engineer
          </h2>

          <p className="text-muted-foreground mb-2">
            Scaler Innovation Lab · Sep 2025 – Present
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Working on building scalable web applications and backend systems,
            focusing on architecture, performance, and real-world usability.
          </p>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Built full-stack applications using Next.js and PostgreSQL</li>
            <li>• Designed backend APIs with structured service layers</li>
            <li>• Focused on scalability, clean architecture, and maintainability</li>
            <li>• Worked on real-world systems with production usage</li>
          </ul>

        </section>

        {/* ===== Experience 2 ===== */}
        <section className="mb-16">

          <h2 className="text-xl font-medium text-white">
            AI Engineering Intern
          </h2>

          <p className="text-muted-foreground mb-2">
            Scaler Innovation Lab · Jan 2025 – Apr 2025
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Explored machine learning systems and worked on applying AI to
            real-world problems, focusing on data processing and model evaluation.
          </p>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Worked on ML pipelines and data preprocessing</li>
            <li>• Applied machine learning models to practical datasets</li>
            <li>• Focused on evaluation, accuracy, and real-world usability</li>
          </ul>

        </section>

        {/* ===== Optional Section ===== */}
        <section>

          <h2 className="text-xl font-medium text-white">
            Other Work & Involvement
          </h2>

          <p className="text-muted-foreground mt-3 text-sm">
            Executive Committee Member — Scaler School of Technology
          </p>

        </section>

      </div>
    </main>
  );
}