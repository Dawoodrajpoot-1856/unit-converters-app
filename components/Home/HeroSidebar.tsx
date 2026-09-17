"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HeroSideBox() {
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  const toggleGroup = (index: number) => {
    setOpenGroup(openGroup === index ? null : index);
  };

  const rightGroups = [
    {
      title: "Engineering & Mechanics",
      items: [
        { name: "Mechanics & Force", slug: "mechanics" },
        { name: "Length", slug: "length" },
        { name: "Weight & Mass", slug: "weight" },
        { name: "Power", slug: "power" },
        { name: "Pressure", slug: "pressure" },
      ],
    },
    {
      title: "Thermal & Heat",
      items: [
        { name: "Temperature", slug: "temperature" },
        { name: "Thermal Energy", slug: "thermal" },
      ],
    },
    {
      title: "Flow & Fluid Mechanics",
      items: [
        { name: "Fluid Flow Rate", slug: "fluid-flow" },
        { name: "Volume & Capacity", slug: "volume" },
      ],
    },
    {
      title: "Fuel & Efficiency",
      items: [
        { name: "Fuel Economy", slug: "fuel" },
        { name: "Speed & Velocity", slug: "speed" },
      ],
    },
    {
      title: "Light & Optics",
      items: [{ name: "Illuminance & Optics", slug: "optics" }],
    },
    {
      title: "Electricity & Magnetism",
      items: [{ name: "Electrical Current & Flux", slug: "electricity" }],
    },
    {
      title: "Radiation & Nuclear",
      items: [
        { name: "Radiation & Dose", slug: "radiation" },
        { name: "Energy", slug: "energy" },
      ],
    },
  ];

  return (
    <div className="bg-white border border-neutral-200 p-4 sm:p-5 rounded-2xl shadow-sm w-full">
      <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mb-4 text-center tracking-tight">
        All Converters
      </h3>

      <div className="space-y-2.5">
        {rightGroups.map((group, index) => {
          const isOpen = openGroup === index;
          return (
            <div key={group.title} className="overflow-hidden">
              <button
                type="button"
                onClick={() => toggleGroup(index)}
                className="w-full flex items-center justify-between bg-neutral-900 text-white font-medium py-3 px-4 rounded-xl hover:bg-neutral-800 transition-all text-xs sm:text-sm shadow-sm cursor-pointer"
              >
                <span className="truncate pr-2">{group.title}</span>
                <span className="text-[10px] font-mono shrink-0">
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              {isOpen && (
                <div className="mt-1.5 pl-2 space-y-1 bg-neutral-50 p-2 rounded-xl border border-neutral-200 animate-in fade-in duration-200">
                  {group.items.map((subItem) => (
                    <Link
                      key={subItem.slug}
                      href={`/converters/${subItem.slug}`}
                      className="block py-2 px-3 text-xs sm:text-sm font-medium text-neutral-700 hover:bg-neutral-900 hover:text-white rounded-lg transition-all"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
