import { useState, useEffect } from "react";

const UrgencyBar = () => {
  const [minutes, setMinutes] = useState(14);
  const [seconds, setSeconds] = useState(59);
  const [units, setUnits] = useState(149);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          setMinutes((m) => (m === 0 ? 14 : m - 1));
          return 59;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stockTimer = setInterval(() => {
      setUnits((prev) => (prev > 50 ? prev - 1 : prev));
    }, 15000);
    return () => clearInterval(stockTimer);
  }, []);

  return (
    <div className="w-full py-3 px-4" style={{ background: "var(--gradient-urgency)" }}>
      <div className="max-w-2xl mx-auto flex items-center justify-center gap-6 text-urgency-foreground">
        <div className="text-center">
          <p className="text-xs font-medium opacity-90">Oferta garantida por:</p>
          <p className="text-xl font-bold font-display tracking-wider">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </p>
        </div>
        <div className="w-px h-10 bg-urgency-foreground/30" />
        <div className="text-center">
          <p className="text-xs font-medium opacity-90">Restam apenas:</p>
          <p className="text-xl font-bold font-display">
            {units} <span className="text-xs font-sans font-medium">unidades</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
