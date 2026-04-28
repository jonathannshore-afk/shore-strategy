import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "loading" | "valid" | "already" | "invalid" | "submitting" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      setErrorMsg("Missing unsubscribe token.");
      return;
    }
    const validate = async () => {
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`;
        const res = await fetch(url, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        });
        const data = await res.json();
        if (res.ok && data.valid === true) {
          setStatus("valid");
        } else if (data.reason === "already_unsubscribed") {
          setStatus("already");
        } else {
          setStatus("invalid");
          setErrorMsg(data.error || "This unsubscribe link is invalid or has expired.");
        }
      } catch (e) {
        setStatus("invalid");
        setErrorMsg("Couldn't verify this unsubscribe link.");
      }
    };
    validate();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setStatus("submitting");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) {
        setStatus("success");
      } else if (data?.reason === "already_unsubscribed") {
        setStatus("already");
      } else {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong.");
      }
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong.");
    }
  };

  return (
    <Layout>
      <SEOHead title="Unsubscribe | Shore Strategy" description="Manage your email subscription preferences." />
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full bg-card border border-border rounded-lg shadow-sm p-8 text-center">
          {status === "loading" && (
            <>
              <Loader2 className="w-10 h-10 mx-auto text-primary animate-spin mb-4" />
              <p className="text-muted-foreground">Verifying your link…</p>
            </>
          )}

          {status === "valid" && (
            <>
              <h1 className="font-display text-3xl text-primary mb-3">Confirm unsubscribe</h1>
              <p className="text-muted-foreground mb-6">
                You'll stop receiving emails from Shore Strategy. You can reach out
                anytime through the contact form if you change your mind.
              </p>
              <Button onClick={handleConfirm} className="w-full">
                Confirm unsubscribe
              </Button>
            </>
          )}

          {status === "submitting" && (
            <>
              <Loader2 className="w-10 h-10 mx-auto text-primary animate-spin mb-4" />
              <p className="text-muted-foreground">Processing…</p>
            </>
          )}

          {status === "success" && (
            <>
              <CheckCircle2 className="w-12 h-12 mx-auto text-accent mb-4" />
              <h1 className="font-display text-3xl text-primary mb-3">You're unsubscribed</h1>
              <p className="text-muted-foreground">
                You won't receive any further emails. Thank you.
              </p>
            </>
          )}

          {status === "already" && (
            <>
              <CheckCircle2 className="w-12 h-12 mx-auto text-accent mb-4" />
              <h1 className="font-display text-3xl text-primary mb-3">Already unsubscribed</h1>
              <p className="text-muted-foreground">
                This email address has already been removed from our list.
              </p>
            </>
          )}

          {(status === "invalid" || status === "error") && (
            <>
              <AlertCircle className="w-12 h-12 mx-auto text-destructive mb-4" />
              <h1 className="font-display text-3xl text-primary mb-3">
                {status === "invalid" ? "Invalid link" : "Something went wrong"}
              </h1>
              <p className="text-muted-foreground">{errorMsg}</p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Unsubscribe;