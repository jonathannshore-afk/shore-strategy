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

### You're between full-time hires
If your VP of Partnerships left and you need time to find the right replacement, a fractional CPO keeps the program moving forward.

### You need specialized expertise for a specific initiative
Launching a new partner program, entering a new market through partnerships, or redesigning your channel strategy — these are finite projects that benefit from experienced leadership.

## When to Go Full-Time

Consider a full-time hire when:
- Partnerships consistently represent 20%+ of revenue
- You have 5+ people on the partnership team
- Partner operations require daily executive attention
- You're ready to invest in partnerships as a core growth engine

## Making the Transition

The best fractional engagements are designed with a transition in mind. A good fractional CPO will help you define the full-time role, build the business case for the hire, and ensure a smooth handoff. At Shore Strategy, we build transition planning into every fractional engagement.
    `,
  },
];

export const categories = [...new Set(posts.map((p) => p.category))];
