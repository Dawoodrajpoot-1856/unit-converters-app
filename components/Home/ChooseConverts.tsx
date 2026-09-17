import Image from "next/image";
import React from "react";

const ChooseConverts = () => {
  return (
    <div className="bg-gray-100  ">
      <div className="px-10 py-10 w-7xl mx-auto">
        <h1 className="text-4xl text-center font-bold ">
          Why Choose Our Converter?
        </h1>
        <p className="text-center mt-3 font-semibold text-gray-600 text-xl">
          Experience effortless, accurate, and fast conversions — built for
          simplicity and precision.
        </p>
        <div className="flex flex-row gap-10 mt-10   ">
          <div className="w-[70%] bg-white h-60 p-8 rounded-2xl flex flex-row gap-10 justify-start items-center shadow-sm">
            <Image src="/hero1.svg" alt="Hero1" height={60} width={60} />
            <div>
              <h1 className="font-bold">Works Instantly</h1>
              <p className="text-sm ">
                All conversions happen directly in your browser — fast and
                secure
              </p>
            </div>
          </div>
          <div className="w-[30%] bg-white h-60 p-8 rounded-2xl shadow-sm flex flex-col gap-2 justify-center items-center">
            <Image src="/hero2.svg" alt="Hero1" height={60} width={60} />
            <h1 className="font-bold">100% Free Forever </h1>
            <p className="text-sm ">
              No hidden fees, no sign-ups, no limits. Just{" "}
              <span className="ml-20 mt-2">convert instantly.</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 mt-10   ">
          <div className="w-[30%] bg-white h-60 p-8 rounded-2xl shadow-sm flex flex-col gap-2 justify-center items-center">
            <Image src="/hero3.svg" alt="Hero1" height={60} width={60} />
            <h1 className="font-bold">Accurate & Reliable</h1>
            <p className="text-sm ">
              Backed by precise mathematical formulas,{" "}
              <span className=" mt-2 ml-15">
                {" "}
                ensuring every result is correct
              </span>
            </p>
          </div>
          <div className="w-[70%] bg-white h-60 p-8 rounded-2xl flex flex-col gap-2 justify-start items-center shadow-sm">
            <Image src="/hero4.svg" alt="Hero1" height={60} width={60} />
            <h1 className="font-bold  ">Mobile Friendly</h1>
            <p className="text-sm text-center ">
              All conversions happen directly in your browser — fast and secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseConverts;
