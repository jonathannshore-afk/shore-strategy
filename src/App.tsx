import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
// Home is eager (LCP route); everything else is code-split.
import Index from "./pages/Index";
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Results = lazy(() => import("./pages/Results"));
const Leadership = lazy(() => import("./pages/Leadership"));
const HowIWork = lazy(() => import("./pages/HowIWork"));
const FractionalVsConsultingVsFte = lazy(() => import("./pages/FractionalVsConsultingVsFte"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe"));

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
          <Route path="/why-me" element={<Navigate to="/results" replace />} />
          <Route path="/how-i-work" element={<HowIWork />} />
          <Route path="/methodology" element={<Navigate to="/how-i-work" replace />} />
          <Route path="/fractional-vs-consulting-vs-fte" element={<FractionalVsConsultingVsFte />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
