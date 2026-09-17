// components/Home/ConverterClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { conversionData, calculateConversion, Unit } from "@/utils/Converter";

interface ConverterClientProps {
  slug: string;
}

export default function ConverterClient({ slug }: ConverterClientProps) {
  const cleanSlug = decodeURIComponent(String(slug || ""))
    .replace(/['"]+/g, "")
    .toLowerCase()
    .trim();

  const category = conversionData[cleanSlug];

  // 🛑 notFound() ko call mat karein! Agar slug galat ho toh yeh friendly error dikhaye:
  if (!category) {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl border border-neutral-200 text-center max-w-md shadow-sm">
          <h2 className="text-xl font-bold text-red-600 mb-2">
            Category Not Found!
          </h2>
          <p className="text-neutral-600 text-sm mb-4">
            Could not find converter for slug:{" "}
            <b className="text-black">"{cleanSlug}"</b>
          </p>
          <p className="text-xs text-neutral-400 mb-6">
            Available: {Object.keys(conversionData).slice(0, 8).join(", ")}...
          </p>
          <Link
            href="/"
            className="px-5 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Agar mil gaya toh regular component render hoga
  const [fromUnit, setFromUnit] = useState<Unit>(category.units[0]);
  const [toUnit, setToUnit] = useState<Unit>(
    category.units[1] || category.units[0],
  );
  const [inputValue, setInputValue] = useState<string>("1");

  useEffect(() => {
    if (category && category.units.length > 0) {
      setFromUnit(category.units[0]);
      setToUnit(category.units[1] || category.units[0]);
    }
  }, [cleanSlug]);

  const result = calculateConversion(
    cleanSlug,
    fromUnit.symbol,
    toUnit.symbol,
    inputValue,
  );

  const leftCategories = Object.keys(conversionData).map((key) => ({
    name: conversionData[key].title || key,
    slug: key.toLowerCase(),
  }));

  const rightCategories = [
    { name: "Engineering & Mechanics", slug: "mechanics" },
    { name: "Thermal & Heat", slug: "thermal" },
    { name: "Flow & Fluid Mechanics", slug: "fluid-flow" },
    { name: "Fuel & Efficiency", slug: "fuel" },
    { name: "Light & Optics", slug: "optics" },
    { name: "Electricity & Magnetism", slug: "electricity" },
    { name: "Radiation & Nuclear", slug: "radiation" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-2 bg-white p-3 rounded-3xl shadow-sm border border-neutral-200 max-h-[80vh] overflow-y-auto space-y-1">
          {leftCategories.map((cat) => {
            const isActive = cat.slug === cleanSlug;
            return (
              <Link
                key={cat.slug}
                href={`/converter/${cat.slug}`}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-black text-white font-bold shadow-sm"
                    : "bg-white text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>

        {/* CENTER BOX */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-neutral-200">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-6 capitalize">
            {category.title} Converter
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <input
                type="number"
                placeholder="Enter value"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-4 rounded-2xl bg-white border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black font-medium text-neutral-800"
              />
            </div>
            <div>
              <div className="w-full p-4 rounded-2xl bg-neutral-100 border border-neutral-200 font-bold text-neutral-900 text-base flex items-center justify-between">
                <span className="text-neutral-500 font-semibold">Result:</span>
                <span className="truncate ml-2 text-xl font-mono text-black">
                  {result} {toUnit.symbol}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* FROM */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <div className="bg-neutral-100 py-2.5 text-center text-xs font-bold text-neutral-600 tracking-wider uppercase border-b border-neutral-200">
                FROM
              </div>
              <div className="max-h-72 overflow-y-auto p-2 space-y-1">
                {category.units.map((u) => {
                  const isSelected = fromUnit.symbol === u.symbol;
                  return (
                    <button
                      key={u.symbol}
                      onClick={() => setFromUnit(u)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex justify-between items-center border ${
                        isSelected
                          ? "bg-black text-white font-semibold border-black"
                          : "bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-100"
                      }`}
                    >
                      <span>
                        {u.name} ({u.symbol})
                      </span>
                      <span className="text-xs opacity-60">—</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TO */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <div className="bg-neutral-100 py-2.5 text-center text-xs font-bold text-neutral-600 tracking-wider uppercase border-b border-neutral-200">
                TO
              </div>
              <div className="max-h-72 overflow-y-auto p-2 space-y-1">
                {category.units.map((u) => {
                  const isSelected = toUnit.symbol === u.symbol;
                  return (
                    <button
                      key={u.symbol}
                      onClick={() => setToUnit(u)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex justify-between items-center border ${
                        isSelected
                          ? "bg-black text-white font-semibold border-black"
                          : "bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-100"
                      }`}
                    >
                      <span>
                        {u.name} ({u.symbol})
                      </span>
                      <span className="text-xs opacity-60">—</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-3 bg-white p-6 rounded-3xl shadow-sm border border-neutral-200">
          <h3 className="text-xl font-extrabold text-neutral-900 mb-4 text-center">
            All Converters
          </h3>
          <div className="space-y-3">
            {rightCategories.map((cat, idx) => (
              <Link
                key={idx}
                href={`/converter/${cat.slug}`}
                className="w-full flex items-center justify-between bg-neutral-900 text-white font-medium py-3.5 px-5 rounded-2xl transition-all duration-200 hover:bg-neutral-800 text-sm shadow-sm"
              >
                <span>{cat.name}</span>
                <span className="text-xs font-mono">↕</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
