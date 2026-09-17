import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/contact.svg"
            alt="Contact image"
            width={500}
            height={500}
            className="w-full max-w-[320px] sm:max-w-105 md:max-w-125 h-auto"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-4xl sm:text-5xl mb-8">Let’s Connect</h1>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-semibold mb-2"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                className="w-full rounded-md border shadow-sm border-gray-300 px-4 py-3.5 outline-none focus:border-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-semibold mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                className="w-full rounded-md shadow-sm border border-gray-300 px-4 py-3.5 outline-none focus:border-black"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-semibold mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={7}
                className="w-full shadow-sm resize-none rounded-md border border-gray-300 px-4 py-3.5 outline-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-black text-white px-8 py-3.5 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Send message
            </button>

            <p className="text-sm sm:text-base text-gray-500">
              Or reach out directly at{" "}
              <a
                href="mailto:hello@example.com"
                className="text-black font-medium hover:underline"
              >
                hello@example.com
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="mt-20 sm:mt-28">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-10 sm:mb-12">
          Frequently asked questions
        </h1>

        <div className="grid grid-cols-1 gap-6">
          <div className="border border-gray-300 rounded-xl p-6 sm:p-7 shadow-md">
            <h2 className="font-bold text-xl sm:text-2xl">
              How soon will I get a reply?
            </h2>

            <p className="mt-3 text-base sm:text-lg text-gray-500 leading-relaxed">
              We typically respond within 24–48 hours.
            </p>
          </div>

          <div className="border border-gray-300 rounded-xl p-6 sm:p-7 shadow-md">
            <h2 className="font-bold text-xl sm:text-2xl">
              Do I need an account to contact you?
            </h2>

            <p className="mt-3 text-base sm:text-lg text-gray-500 leading-relaxed">
              No, just fill out the form or send an email directly.
            </p>
          </div>

          <div className="border border-gray-300 rounded-xl p-6 sm:p-7 shadow-md">
            <h2 className="font-bold text-xl sm:text-2xl">Is my data safe?</h2>

            <p className="mt-3 text-base sm:text-lg text-gray-500 leading-relaxed">
              Absolutely. Your message stays private and is never shared.
            </p>
          </div>

          <div className="border border-gray-300 rounded-xl p-6 sm:p-7 shadow-md">
            <h2 className="font-bold text-xl sm:text-2xl">
              Can I suggest a new converter?
            </h2>

            <p className="mt-3 text-base sm:text-lg text-gray-500 leading-relaxed">
              Yes! We love user feedback and feature requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
