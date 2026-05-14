import { supabase } from "@/integrations/supabase/client";

export async function trackCalendlyClick(
  action: string,
  pagePath: string = window.location.pathname,
  metadata?: Record<string, string | number | boolean | null>
) {
  try {
    await supabase.rpc("track_calendly_click", {
      _page_path: pagePath,
      _action: action,
      _metadata: metadata ?? null,
    });
  } catch {
    // Silently fail — tracking should never block UX
  }
}
