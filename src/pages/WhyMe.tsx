import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const WhyMe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/results", { replace: true }), 50);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <Layout>
      <SEOHead
        title="Why Work With Jonathan Shore"
        description="This page has moved. View partner ecosystem case studies and proof of work on the Results page."
        canonical="/why-me"
        noIndex
      />
      <section className="px-6 py-20 md:px-12 lg:px-24 bg-cream min-h-[60vh]">
        <div className="container max-w-2xl text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            This page has moved
          </h1>
          <p className="font-body text-muted-foreground mb-6">
            The "Why Me" content now lives on the Results page. Redirecting you now…
          </p>
          <Link
            to="/results"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            Go to Results
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WhyMe;