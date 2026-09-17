"use client";

import React, { useState } from "react";
import { conversionData, calculateConversion } from "@/utils/Converter";
import Link from "next/link";

interface HistoryItem {
  id: string;
  category: string;
  fromVal: string | number;
  fromSymbol: string;
  toVal: string;
  toSymbol: string;
  time: string;
}

export default function AllConvertersPage() {
  const categories = Object.keys(conversionData);

  const [cardInputs, setCardInputs] = useState<{
    [category: string]: { val: string; from: string; to: string };
  }>(() => {
    const initial: {
      [cat: string]: { val: string; from: string; to: string };
    } = {};
    categories.forEach((cat) => {
      const units = conversionData[cat].units;
      initial[cat] = {
        val: "1",
        from: units[0]?.symbol || "",
        to: units[1]?.symbol || units[0]?.symbol || "",
      };
    });
    return initial;
  });

  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleInputChange = (
    category: string,
    field: "val" | "from" | "to",
    value: string,
  ) => {
    setCardInputs((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }));
  };

  const handleSaveHistory = (categoryKey: string) => {
    const data = cardInputs[categoryKey];
    if (!data || !data.val) return;

    const result = calculateConversion(
      categoryKey,
      data.from,
      data.to,
      data.val,
    );

    const newItem: HistoryItem = {
      id: Math.random().toString(36).substr(2, 9),
      category: conversionData[categoryKey].title,
      fromVal: data.val,
      fromSymbol: data.from,
      toVal: result,
      toSymbol: data.to,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setHistory((prev) => [newItem, ...prev.slice(0, 19)]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-neutral-200 pb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Universal Multi-Converter
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Quickly convert across all metrics with real-time logging.
            </p>
          </div>
          <Link
            href="/"
            className="mt-4 md:mt-0 text-xs font-semibold px-4 py-2.5 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition"
          >
            ← Back to Hero Converter
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          <div className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((catKey) => {
              const catData = conversionData[catKey];
              const currentInput = cardInputs[catKey] || {
                val: "1",
                from: catData.units[0]?.symbol,
                to: catData.units[1]?.symbol || catData.units[0]?.symbol,
              };

              const liveResult = calculateConversion(
                catKey,
                currentInput.from,
                currentInput.to,
                currentInput.val,
              );

              return (
                <div
                  key={catKey}
                  className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-neutral-900 text-base">
                        {catData.title}
                      </h3>
                      <Link
                        href={`/converters/${catKey}`}
                        className="text-[11px] text-blue-600 hover:underline font-medium"
                      >
                        Full Page →
                      </Link>
                    </div>

                    <div className="mb-3">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                        Input Value
                      </label>
                      <input
                        type="number"
                        value={currentInput.val}
                        onChange={(e) =>
                          handleInputChange(catKey, "val", e.target.value)
                        }
                        className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 font-semibold focus:outline-none focus:ring-1 focus:ring-neutral-900"
                        placeholder="1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                          From
                        </label>
                        <select
                          value={currentInput.from}
                          onChange={(e) =>
                            handleInputChange(catKey, "from", e.target.value)
                          }
                          className="w-full p-2 text-xs rounded-xl border border-neutral-200 bg-neutral-50 font-medium text-neutral-800 focus:outline-none"
                        >
                          {catData.units.map((u) => (
                            <option key={u.symbol} value={u.symbol}>
                              {u.name} ({u.symbol})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                          To
                        </label>
                        <select
                          value={currentInput.to}
                          onChange={(e) =>
                            handleInputChange(catKey, "to", e.target.value)
                          }
                          className="w-full p-2 text-xs rounded-xl border border-neutral-200 bg-neutral-50 font-medium text-neutral-800 focus:outline-none"
                        >
                          {catData.units.map((u) => (
                            <option key={u.symbol} value={u.symbol}>
                              {u.name} ({u.symbol})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="bg-neutral-100 p-3 rounded-xl border border-neutral-200 mb-4 flex justify-between items-center">
                      <span className="text-xs font-semibold text-neutral-500">
                        Result:
                      </span>
                      <span className="font-bold text-neutral-900 text-sm truncate ml-2">
                        {liveResult} {currentInput.to}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSaveHistory(catKey)}
                    className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition cursor-pointer"
                  >
                    + Save to History
                  </button>
                </div>
              );
            })}
          </div>

          <div className="xl:col-span-3 sticky top-24 z-10 bg-white border border-neutral-200 p-5 rounded-3xl shadow-sm h-[calc(100vh-120px)] flex flex-col w-full">
            <div className="flex justify-between items-center pb-3 border-b border-neutral-100 shrink-0 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <h2 className="font-bold text-neutral-900 text-sm tracking-wide uppercase">
                  Conversion History
                </h2>
              </div>
              {history.length > 0 && (
                <button
                  type="button"
                  onClick={clearHistory}
                  className="text-[11px] font-semibold text-red-500 hover:underline cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-2.5">
              {history.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 text-neutral-400">
                  <p className="text-sm font-medium">
                    No conversions saved yet.
                  </p>
                  <p className="text-xs mt-1 max-w-[190px]">
                    Click "+ Save to History" on any converter box.
                  </p>
                </div>
              ) : (
                history.map((item) => (
                  <div
                    key={item.id}
                    className="bg-neutral-50 border border-neutral-100 p-3 rounded-2xl flex flex-col gap-1 hover:border-neutral-300 transition shrink-0"
                  >
                    <div className="flex justify-between items-center text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                      <span className="truncate max-w-[120px]">
                        {item.category}
                      </span>
                      <span>{item.time}</span>
                    </div>
                    <div className="text-xs font-semibold text-neutral-800 break-words">
                      {item.fromVal}{" "}
                      <span className="font-normal text-neutral-500">
                        {item.fromSymbol}
                      </span>{" "}
                      ={" "}
                      <span className="font-bold text-black">{item.toVal}</span>{" "}
                      <span className="font-normal text-neutral-500">
                        {item.toSymbol}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
