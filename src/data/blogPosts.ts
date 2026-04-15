export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage?: string;
  date: string;
  readTime: string;
  category: string;
  heroImage?: string;
  keyStats?: { value: string; label: string }[];
  tldr?: string;
  content: string;
}

export const defaultAuthor = {
  name: "Jonathan Shore",
  image: "/author-jonathan.jpeg",
  title: "Founder, Shore Strategy",
  linkedin: "https://www.linkedin.com/in/jonathan-shore/",
};

// Posts are now fetched from the BD Command Center database
// See src/hooks/useBlogPosts.ts for the database integration
export const posts: BlogPost[] = [];

export const categories = [...new Set(posts.map((p) => p.category))];
