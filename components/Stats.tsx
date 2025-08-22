"use client";
import CountUp from "react-countup";
import React from "react";

const statsData = [
  { id: 1, value: "5", label: "Years of Experience" },
  { id: 2, value: "27", label: "Projects Completed" },
  { id: 3, value: "1000", label: "Commits Made" },
  { id: 4, value: "30", label: "Technologies Mastered" },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex-1 flex gap-4  items-center justify-center xl:justify-start"
            >
              <CountUp
                end={parseInt(stat.value)}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <span
                className={`${
                  stat.label.length < 15 ? "max-w-[80px]" : "max-w-[120px]"
                } leading-snug text-white/80 `}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
