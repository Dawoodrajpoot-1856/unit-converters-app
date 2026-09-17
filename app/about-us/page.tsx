import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-3xl sm:text-4xl text-start mt-8 sm:mt-10">
        About Us
      </h1>

      <p className="font-semibold mt-5 text-start text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed">
        This project was created with a simple idea: make unit conversions
        effortless. No clutter, no popups, no hidden costs — just fast and
        accurate results when you need them.
      </p>

      <p className="font-semibold mt-5 text-start text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed">
        Our mission is clear: keep the tools free, simple, and privacy-first.
        Everything runs directly in your browser, so your data never leaves your
        device.
      </p>

      <p className="font-semibold mt-5 text-start text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed">
        Whether you’re a student, engineer, traveler, or just curious — our
        converters are designed to save you time and make everyday tasks easier.
      </p>

      <h1 className="font-bold text-3xl sm:text-4xl text-start mt-8 sm:mt-10">
        Our Vision & Values
      </h1>

      <ul className="mt-5 space-y-2 text-base sm:text-lg">
        <li className="ml-3">
          <strong>Simplicity:</strong> Tools that are easy to use and free from
          distractions.
        </li>

        <li className="ml-3">
          <strong>Accuracy:</strong> Reliable conversions you can trust for
          daily tasks.
        </li>

        <li className="ml-3">
          <strong>Privacy:</strong> 100% client-side processing — nothing
          stored, nothing shared.
        </li>

        <li className="ml-3">
          <strong>Accessibility:</strong> Works on any device — desktop, tablet,
          or mobile.
        </li>
      </ul>

      <h1 className="text-start mt-6 mb-10 font-semibold text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
        Thank you for choosing our converters. We’re constantly improving and
        adding new tools to make your experience even better.
      </h1>
    </div>
  );
};

export default page;
