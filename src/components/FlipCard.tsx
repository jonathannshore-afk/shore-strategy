import { useState } from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

const FlipCard = ({ front, back }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer [perspective:1000px] h-full"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-card p-7 rounded-lg border border-border flex flex-col">
          {front}
          <p className="font-body text-xs text-muted-foreground mt-auto pt-3">Click to flip →</p>
        </div>
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-navy p-5 rounded-lg border border-gold/30 flex flex-col overflow-y-auto">
          {back}
          <p className="font-body text-xs text-primary-foreground/40 mt-auto pt-2">Click to flip back →</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
