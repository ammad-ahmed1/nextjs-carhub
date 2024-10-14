"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-16 padding-x">
        <h1 className="hero__title">
          Find book and rent a car - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experiece with out effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 p-2"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
    // 47:38
  );
};

export default Hero;
