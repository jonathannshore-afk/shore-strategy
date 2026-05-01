interface Props {
  variant?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}

const DiscoveryCallReassurance = ({ variant = "light", align = "left", className = "" }: Props) => {
  const color = variant === "dark" ? "text-primary-foreground/55" : "text-muted-foreground";
  const alignment = align === "center" ? "text-center justify-center" : "text-left justify-start";
  return (
    <p
      className={`font-body text-xs uppercase tracking-[0.15em] ${color} ${alignment} flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}
    >
      <span>Free 25-minute discovery call</span>
      <span className="text-gold" aria-hidden="true">·</span>
      <span>No prep required</span>
      <span className="text-gold" aria-hidden="true">·</span>
      <span>No obligation</span>
    </p>
  );
};

export default DiscoveryCallReassurance;
