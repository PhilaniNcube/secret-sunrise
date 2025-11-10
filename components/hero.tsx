"use client";

import React from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const imageRef = useRef(null);
  const aboutTextRef = useRef(null);
  const joyTextRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate SVG first (scale and fade in)
    tl.from(svgRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
    })
    // Then animate the image (fade and slide up)
    .from(imageRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
    }, "-=0.5") // Start 0.5s before previous animation ends
    // Finally animate the text elements
    .from(aboutTextRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
    }, "-=0.6")
    .from(joyTextRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
    }, "-=0.6");
  }, { scope: containerRef });

  return (
    <div
      className="bg-brand max-h-[720px] h-full overflow-hidden"
      ref={containerRef}
    >
      <Container>
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          <div ref={aboutTextRef} className="absolute top-16 left-0 transform py-7 px-4 z-50 max-w-[280px]">
            <h1 className="text-3xl uppercase font-bold text-white">About</h1>
            <p className="mt-4 text-md font-light text-white">
              Music, movement and mindful connection for teams, schools and
              communities
            </p>
            <Link href="#" className="mt-4 inline-block text-white font-bold">
              Read More
            </Link>
          </div>
          <div ref={joyTextRef} className="absolute bottom-1/2 right-48 transform py-7 px-4 z-50 max-w-[280px]">
            <h1 className="text-7xl lowercase font-extrabold text-white">
              more <br />
              joy
            </h1>
          </div>
          <svg
            ref={svgRef}
            className="scale-80"
            width="641"
            height="638"
            viewBox="0 0 641 638"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="320.452"
              cy="318.652"
              rx="320.452"
              ry="318.652"
              fill="#FFA700"
            />
          </svg>
          <div className="absolute flex flex-col items-center text-center px-5 lg:px-0">
            <Image
              ref={imageRef}
              src="/images/dancing-lady-transparent.webp"
              alt="Description of the image"
              width={500}
              height={500}
              className="rounded-lg translate-y-7"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
