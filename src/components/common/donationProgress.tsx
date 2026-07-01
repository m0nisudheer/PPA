"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";

type DonationProgressProps = {
  currentStep: number;
};

const steps = ["Choose Amount", "Your Details", "Payment", "Confirmation"];

export default function DonationProgress({
  currentStep,
}: DonationProgressProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false),
  );

  const targetProgress = ((currentStep - 1) / (steps.length - 1)) * 100;

  useEffect(() => {
    steps.forEach((_, i) => {
      setTimeout(() => {
        setVisibleSteps((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 120);
    });
  }, []);

  useEffect(() => {
    const start = animatedProgress;
    const end = targetProgress;
    const duration = 900;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      setAnimatedProgress(start + (end - start) * easeOutCubic(t));
      if (t < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [targetProgress]);

  return (
    <div className="relative w-full">
      <div
        className="absolute top-[17px] h-[4px] rounded-full bg-white/20"
        style={{
          left: "38px",
          right: "38px",
        }}
      />

      <div
        className="absolute top-[17px] h-[4px] rounded-full overflow-hidden"
        style={{
          left: "38px",
          right: "38px",
        }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${animatedProgress}%`,
            background:
              "linear-gradient(90deg, #4a9e28 0%, #6BB643 60%, #8fd461 100%)",
            backgroundSize: "200% 100%",
            animation: "flowShimmer 2s linear infinite",
            boxShadow: "0 0 8px rgba(107,182,67,0.5)",
          }}
        />
      </div>
      {animatedProgress > 0 && animatedProgress < 100 && (
        <div
          className="absolute top-[13px] h-3 w-3 rounded-full bg-[#6BB643]"
          style={{
            left: `calc(19px + (100% - 38px) * ${animatedProgress / 100} - 6px)`,
            animation: "ripplePulse 1.4s ease-out infinite",
          }}
        />
      )}

      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const number = index + 1;
          const completed = number < currentStep;
          const current = number === currentStep;

          return (
            <div
              key={step}
              className="flex flex-col items-center"
              style={{
                opacity: visibleSteps[index] ? 1 : 0,
                transform: visibleSteps[index]
                  ? "translateY(0)"
                  : "translateY(12px)",
                transition: "opacity 0.45s ease, transform 0.45s ease",
              }}
            >
              <div
                className="relative flex h-[38px] w-[38px] items-center justify-center rounded-full text-sm font-semibold"
                style={{
                  border:
                    completed || current
                      ? "2.5px solid #6BB643"
                      : "2.5px solid rgba(255,255,255,0.35)",

                  background:
                    completed || current ? "#6BB643" : "rgba(255,255,255,0.08)",

                  color:
                    completed || current ? "#ffffff" : "rgba(255,255,255,0.5)",

                  transform: current ? "scale(1.12)" : "scale(1)",

                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",

                  boxShadow:
                    completed || current
                      ? "0 0 0 4px rgba(107,182,67,0.18)"
                      : "none",
                }}
              >
                {completed ? (
                  <Check
                    size={17}
                    strokeWidth={2.5}
                    style={{
                      animation:
                        "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards",
                    }}
                  />
                ) : (
                  <span>{number}</span>
                )}
              </div>

              <p
                className="mt-2.5 text-center text-[13px] 2xl:text-[15px] font-medium leading-tight whitespace-nowrap"
                style={{
                  color: completed
                    ? "#6BB643"
                    : current
                      ? "#ffffff"
                      : "rgba(255,255,255,0.45)",
                  transition: "color 0.4s ease",
                }}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes flowShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes ripplePulse {
          0%   { transform: scale(1);   opacity: 1; }
          60%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(1);   opacity: 0; }
        }
        @keyframes popIn {
          0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
          70%  { transform: scale(1.2) rotate(5deg);  opacity: 1; }
          100% { transform: scale(1)   rotate(0deg);  opacity: 1; }
        }
      `}</style>
    </div>
  );
}
