"use client";
import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

export default function Hero() {
  const handleScroll = () => {
    // Get a reference to the fist element with the class name "searchbar"
    const nextSection = document.querySelector(".searchbar");
    // Scroll to the element with smooth behavior
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -- quickly and easily.
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-500 hover:bg-blue-700 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container mt-20">
        <div className="hero__image">
          <Image
            src="/carhub.png"
            alt="hero image"
            fill
            className="object-contain"
          />
          {/* <div className="hero__image-overlay" /> */}
        </div>
      </div>
    </div>
  );
}
