"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

export default function Accordion() {
  const [howOpenIndex, setHowOpenIndex] = useState<number | null>(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const howItWorksData: AccordionItem[] = [
    {
      question: "1. Select a Converter Tool",
      answer:
        "Choose from our wide variety of unit conversion categories depending on what you need.",
    },
    {
      question: "2. Enter Your Value",
      answer:
        "Type in the numeric value you want to convert into the designated input box.",
    },
    {
      question: "3. Get Instant Results",
      answer:
        "Your converted results will display instantly in real-time as you type.",
    },
  ];

  const faqData: AccordionItem[] = [
    {
      question: "Is this converter free?",
      answer: "Yes, our converter tool is 100% free to use for everyone.",
    },
    {
      question: "Do I need to download anything?",
      answer:
        "No downloads required! Everything runs directly inside your web browser.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Once the page is loaded, basic conversions can function smoothly.",
    },
    {
      question: "What types of converters are available?",
      answer:
        "We offer length, weight, temperature, currency, and many more types of converters.",
    },
    {
      question: "Is my data private?",
      answer:
        "Yes, all conversions happen locally or securely without tracking your personal information.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center justify-center gap-8 p-6 md:p-12 w-full">
      {/* 1st Box: How It Works */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 max-w-xl w-full">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          How It Works
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-6">
          Follow these simple steps to convert any unit effortlessly — fast,
          precise, and smooth.
        </p>

        <div className="space-y-3">
          {howItWorksData.map((item, index) => {
            const isOpen = howOpenIndex === index;
            return (
              <div key={index} className="overflow-hidden">
                <button
                  onClick={() => setHowOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between bg-zinc-950 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-200 hover:bg-zinc-800 focus:outline-none"
                >
                  <span className="text-sm md:text-base tracking-wide text-left">
                    {item.question}
                  </span>
                  <Plus
                    className={`w-5 h-5 transition-transform duration-300 shrink-0 ml-2 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 py-4 text-gray-600 text-sm md:text-base bg-gray-50 rounded-b-2xl mt-1 border border-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2nd Box: Frequently Asked Questions */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 max-w-xl w-full">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-6">
          Find answers to common questions about our conversion tools.
        </p>

        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = faqOpenIndex === index;
            return (
              <div key={index} className="overflow-hidden">
                <button
                  onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between bg-zinc-950 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-200 hover:bg-zinc-800 focus:outline-none"
                >
                  <span className="text-sm md:text-base tracking-wide text-left">
                    {item.question}
                  </span>
                  <Plus
                    className={`w-5 h-5 transition-transform duration-300 shrink-0 ml-2 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 py-4 text-gray-600 text-sm md:text-base bg-gray-50 rounded-b-2xl mt-1 border border-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
