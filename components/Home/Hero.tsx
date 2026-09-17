"use client";
import React, { useState } from "react";
import HeroSideBox from "./HeroSidebar";
import { conversionData, calculateConversion } from "@/utils/Converter";

const categories = Object.keys(conversionData);

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("length");

  const currentCategory =
    conversionData[selectedCategory.toLowerCase()] ||
    conversionData[categories[0]];
  const currentUnits = currentCategory?.units || [];

  const [fromUnit, setFromUnit] = useState<string>(
    currentUnits[0]?.symbol || "",
  );
  const [toUnit, setToUnit] = useState<string>(
    currentUnits[1]?.symbol || currentUnits[0]?.symbol || "",
  );
  const [inputValue, setInputValue] = useState<number | string>(1);

  const handleCategoryChange = (categoryKey: string) => {
    const key = categoryKey.toLowerCase();
    setSelectedCategory(key);

    const cat = conversionData[key];
    if (cat && cat.units.length > 0) {
      // Nayi category ke pehle do units foran set kar do
      setFromUnit(cat.units[0].symbol);
      setToUnit(cat.units[1]?.symbol || cat.units[0].symbol);
    }
  };

  const calculatedResult = calculateConversion(
    selectedCategory,
    fromUnit,
    toUnit,
    inputValue,
  );

  return (
    <div className="bg-neutral-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl sm:text-4xl text-black text-start mb-8 tracking-tight capitalize">
          {currentCategory?.title || selectedCategory} Converter
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[180px_1fr_1fr_1fr] gap-4 items-start">
          <aside className="w-full bg-gray-50 rounded-xl border border-neutral-200 p-1.5 max-h-[580px] overflow-y-auto">
            <div className="px-1.5 py-1 border-b border-neutral-100 mb-1 sticky top-0 bg-gray-50 z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                Categories
              </span>
            </div>
            <nav className="flex flex-col space-y-0.5">
              {categories.map((catKey) => {
                const isSelected =
                  selectedCategory.toLowerCase() === catKey.toLowerCase();
                const title = conversionData[catKey]?.title || catKey;

                return (
                  <button
                    key={catKey}
                    type="button"
                    onClick={() => handleCategoryChange(catKey)}
                    className={`w-full text-left border border-gray-300 px-2 py-1.5 rounded-md text-[11px] font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-black text-white shadow-sm font-semibold border-black"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-black bg-white"
                    }`}
                  >
                    <span className="truncate">{title}</span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white ml-1 shrink-0"></span>
                    )}
                  </button>
                );
              })}
            </nav>
          </aside>

          <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-sm flex flex-col">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 px-1">
              From
            </h2>

            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter Value"
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-black font-semibold placeholder:text-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black mb-3 transition"
            />

            <div className="flex flex-col gap-1 max-h-96 overflow-y-auto pr-1 border border-neutral-100 rounded-xl p-2 bg-neutral-50">
              {currentUnits.map((unit) => {
                const isSelected = fromUnit === unit.symbol;
                return (
                  <button
                    key={`from-${unit.symbol}`}
                    type="button"
                    onClick={() => setFromUnit(unit.symbol)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex justify-between items-center cursor-pointer ${
                      isSelected
                        ? "bg-black text-white font-semibold shadow-sm"
                        : "text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    <span>{unit.name}</span>
                    <span
                      className={`text-xs ${
                        isSelected ? "text-neutral-300" : "text-neutral-400"
                      }`}
                    >
                      ({unit.symbol})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-sm flex flex-col">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 px-1">
              To
            </h2>
            <div className="relative mb-3">
              <input
                type="text"
                readOnly
                value={calculatedResult}
                className="w-full px-3.5 py-2.5 pr-14 rounded-xl border border-neutral-200 bg-neutral-100 text-black font-bold outline-none cursor-default"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-500 bg-neutral-200 px-2 py-1 rounded-md">
                {toUnit}
              </span>
            </div>
            <div className="flex flex-col gap-1 max-h-96 overflow-y-auto pr-1 border border-neutral-100 rounded-xl p-2 bg-neutral-50">
              {currentUnits.map((unit) => {
                const isSelected = toUnit === unit.symbol;
                return (
                  <button
                    key={`to-${unit.symbol}`}
                    type="button"
                    onClick={() => setToUnit(unit.symbol)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex justify-between items-center cursor-pointer ${
                      isSelected
                        ? "bg-black text-white font-semibold shadow-sm"
                        : "text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    <span>{unit.name}</span>
                    <span
                      className={`text-xs ${
                        isSelected ? "text-neutral-300" : "text-neutral-400"
                      }`}
                    >
                      ({unit.symbol})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full">
            <HeroSideBox />
          </div>
        </div>

        <div className="mt-8 bg-neutral-900 text-white rounded-2xl p-6 border border-neutral-800 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-neutral-400">
                Conversion Result ({currentCategory?.title || selectedCategory})
              </span>
              <p className="text-neutral-300 text-sm mt-1">
                You entered:{" "}
                <strong className="text-white">
                  {inputValue || 0} {fromUnit}
                </strong>
              </p>
            </div>

            <div className="text-2xl sm:text-3xl font-bold tracking-tight">
              {inputValue || 0} {fromUnit} ={" "}
              <span className="text-white border-b-2 border-white pb-0.5">
                {calculatedResult} {toUnit}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
