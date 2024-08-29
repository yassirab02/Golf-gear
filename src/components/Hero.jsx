import React from "react";
import backgroundImage from "../assets/bg.jpg";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words2 = `
Golf gear includes all the equipment and accessories needed for the game, such as balls, bags, and apparel, to improve performance and comfort on the course.`;

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center lg:pt-20 bg-gray-600 pb-96"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <h1 className="text-6xl sm:text-6xl lg:text-7xl text-center tracking-wide pt-4 sm:pt-0">
        <span className="text-black font-[Poppins]">
          Welcome to <span className="text-green-900 font-[Poppins] font-bold">Golf Gear </span>
        </span>
      </h1>

      {/* Text Generate Effect */}
      <div className="mt-10 text-md text-center text-black max-w-4xl border border-green-700 rounded-lg bg-white/55 pb-2">
        <TextGenerateEffect duration={2} filter={false} words={words2} />
      </div>
    </div>
  );
};

export default Hero;
