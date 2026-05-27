import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
// Home is eager (LCP route); everything else is code-split.
import Index from "./pages/Index";

// Auto-recover from stale chunk errors after a redeploy: if a dynamic import
// fails (old hashed file no longer exists), reload the page once to fetch the
// fresh index.html with current asset hashes.
const RELOAD_KEY = "__lovable_chunk_reload__";
function lazyWithRetry<T extends React.ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      return await factory();
    } catch (err) {
      if (typeof window !== "undefined" && !sessionStorage.getItem(RELOAD_KEY)) {
        sessionStorage.setItem(RELOAD_KEY, "1");
        window.location.reload();
        // Return a never-resolving promise so React doesn't render an error
        // before the reload completes.
        return new Promise<{ default: T }>(() => {});
      }
      throw err;
    }
  });
}
if (typeof window !== "undefined") {
  // Clear the reload flag on a successful load so future stale chunks can also recover.
  window.addEventListener("load", () => sessionStorage.removeItem(RELOAD_KEY));
}

const About = lazyWithRetry(() => import("./pages/About"));
const Services = lazyWithRetry(() => import("./pages/Services"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const Results = lazyWithRetry(() => import("./pages/Results"));
const Leadership = lazyWithRetry(() => import("./pages/Leadership"));
const HowIWork = lazyWithRetry(() => import("./pages/HowIWork"));
const WhyMe = lazyWithRetry(() => import("./pages/WhyMe"));
const FractionalVsConsultingVsFte = lazyWithRetry(() => import("./pages/FractionalVsConsultingVsFte"));
const FAQ = lazyWithRetry(() => import("./pages/FAQ"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));
const Unsubscribe = lazyWithRetry(() => import("./pages/Unsubscribe"));
const Privacy = lazyWithRetry(() => import("./pages/Privacy"));
const Sitemap = lazyWithRetry(() => import("./pages/Sitemap"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/results" element={<Results />} />
          <Route path="/why-me" element={<WhyMe />} />
          <Route path="/how-i-work" element={<HowIWork />} />
          <Route path="/methodology" element={<Navigate to="/how-i-work" replace />} />
          <Route path="/fractional-vs-consulting-vs-fte" element={<FractionalVsConsultingVsFte />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
