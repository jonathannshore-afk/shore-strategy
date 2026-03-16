const stats = [
  { value: "15+", label: "Years in Partner Ecosystem Strategy" },
  { value: "$1.6B", label: "ARR Partner Ecosystem Managed" },
  { value: "$800M+", label: "Annual Bookings Influenced" },
  { value: "2K+", label: "Partners Across Ecosystems" },
  { value: "19%", label: "YoY Revenue Growth" },
  { value: "$12M", label: "ARR From New ISV Motion" },
];

const StatsMarquee = () => {
  return (
    <section className="bg-navy/95 border-t border-b border-primary-foreground/10 py-4 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 mx-8 shrink-0">
              <span className="font-display text-xl font-bold text-gold">{stat.value}</span>
              <span className="font-body text-sm text-primary-foreground/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsMarquee;
