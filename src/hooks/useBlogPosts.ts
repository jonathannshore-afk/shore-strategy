import { useQuery } from "@tanstack/react-query";
import { bdSupabase } from "@/integrations/supabase/bdClient";
import type { BlogPost } from "@/data/blogPosts";

interface DbBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  author_image: string | null;
  date: string;
  read_time: string;
  category: string;
  hero_image: string | null;
  key_stats: { value: string; label: string }[] | null;
  tldr: string | null;
  content: string;
  status: string;
  created_at: string;
}

const mapDbToPost = (row: DbBlogPost): BlogPost => ({
  slug: row.slug,
  title: row.title,
  excerpt: row.excerpt,
  author: row.author,
  authorImage: row.author_image ?? undefined,
  date: row.date,
  readTime: row.read_time,
  category: row.category,
  heroImage: row.hero_image ?? undefined,
  keyStats: row.key_stats ?? undefined,
  tldr: row.tldr ?? undefined,
  content: row.content,
});

export const useBlogPosts = () =>
  useQuery<BlogPost[]>({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await bdSupabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return (data as DbBlogPost[]).map(mapDbToPost);
    },
    staleTime: 5 * 60 * 1000,
  });

export const useBlogPost = (slug: string | undefined) =>
  useQuery<BlogPost | null>({
    queryKey: ["blog-post", slug],
    enabled: !!slug,
    queryFn: async () => {
      const { data, error } = await bdSupabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .eq("slug", slug!)
        .maybeSingle();

      if (error) throw error;
      if (!data) return null;
      return mapDbToPost(data as DbBlogPost);
    },
    staleTime: 5 * 60 * 1000,
  });
