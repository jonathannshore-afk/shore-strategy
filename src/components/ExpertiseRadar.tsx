import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const data = [
  { subject: "Partner Strategy", value: 95 },
  { subject: "Ecosystem Dev", value: 90 },
  { subject: "GTM Planning", value: 88 },
  { subject: "Revenue Growth", value: 92 },
  { subject: "Program Design", value: 90 },
  { subject: "Operating Models", value: 85 },
  { subject: "Cross-Functional\nLeadership", value: 88 },
  { subject: "Business Planning", value: 82 },
];

interface ExpertiseRadarProps {
  variant?: "light" | "dark";
}

const ExpertiseRadar = ({ variant = "dark" }: ExpertiseRadarProps) => {
  const isLight = variant === "light";
  const tickFill = isLight ? "hsl(220 40% 13%)" : "hsl(45 60% 70%)";
  const gridStroke = isLight ? "hsl(215 25% 88%)" : "hsla(45, 60%, 70%, 0.15)";
  const radarStroke = "hsl(43 53% 54%)";
  const radarFill = "hsla(43, 53%, 54%, 0.15)";

  return (
    <div className="w-full max-w-[360px] mx-auto">
      <p
        className={`font-body text-xs uppercase tracking-[0.2em] text-center mb-2 ${
          isLight ? "text-muted-foreground" : "text-primary-foreground/50"
        }`}
      >
        Areas of Expertise
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
          <PolarGrid stroke={gridStroke} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: tickFill, fontSize: 10, fontFamily: "Source Sans 3, sans-serif" }}
          />
          <Radar
            dataKey="value"
            stroke={radarStroke}
            fill={radarFill}
            strokeWidth={2}
            dot={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpertiseRadar;
