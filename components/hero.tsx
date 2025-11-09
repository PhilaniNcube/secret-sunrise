import React from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-brand max-h-[720px] h-full overflow-hidden">
      <Container>
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          <div className="absolute top-16 left-0 transform py-7 px-4 z-50 max-w-[280px]">
            <h1 className="text-3xl uppercase font-bold text-white">About</h1>
            <p className="mt-4 text-md font-light text-white">
              Music, movement and mindful connection for teams, schools and
              communities 
            </p>
            <Link href="#" className="mt-4 inline-block text-white font-bold">
              Read More
            </Link>
          </div>
          <div className="absolute bottom-1/2 right-48 transform py-7 px-4 z-50 max-w-[280px]">
            <h1 className="text-7xl lowercase font-extrabold text-white">more <br />joy</h1>
          </div>
          <svg
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
