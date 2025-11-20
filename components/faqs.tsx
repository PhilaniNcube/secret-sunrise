import React from "react";
import Container from "./container";
import Image from "next/image";

const FAQS = () => {
  const logos = [
    { src: "/images/wework.png", alt: "WeWork Logo" },
    { src: "/images/coke.png", alt: "Coca-Cola Logo" },
    { src: "/images/danone.png", alt: "Danone Logo" },
    { src: "/images/lipton.png", alt: "Lipton Logo" },
    { src: "/images/deloitte.png", alt: "Deloitte Logo" },
    { src: "/images/nbc.png", alt: "NBC Logo" },
    { src: "/images/bank.png", alt: "Bank Logo" },
    { src: "/images/linkedin.png", alt: "LinkedIn Logo" },
  ];

  return (
    <section className="shadow-inner">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center max-w-[300px]">
            <h2 className="text-4xl font-extrabold mb-6">The Why?</h2>
            <p className="mb-4 text-lg">
              <strong>We move to the rhythm of Africa,</strong> where every
              drumbeat, step, and smile carries Joy.
            </p>
            <p className=" mb-4 text-lg">
              From bustling cities to quiet schoolyards, we bring movement,
              music, and mindfulness to every corner of the continent.
            </p>
            <p className="font-bold text-lg">
              Joy is our bones, kets weave it through our team culture.
            </p>
          </div>
          <div className="">
            <Image
              src="/images/sunrise.webp"
              alt="Sunrise"
              width={2000}
              height={2000}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        {/* Clients */}
        <div>
          <svg
            width="122"
            height="20"
            viewBox="0 0 122 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.76 19.2702L5.5 11.0802L1.02 3.90018L2.29 12.0902L6.76 19.2702ZM4.97 11.2202L5.82 16.7402L2.81 11.9502L1.96 6.43018L4.97 11.2202ZM13.1 9.30018L9.93 1.50018L9.75 9.84018L12.91 17.6402L13.1 9.30018ZM12.43 14.9802L10.3 9.74018L10.42 4.16018L12.55 9.40018L12.43 14.9802ZM20.89 8.91018L19.13 0.680176L17.51 8.86018L19.27 17.0902L20.89 8.91018ZM18.06 8.86018L19.15 3.39018L20.33 8.92018L19.24 14.3902L18.06 8.86018ZM28.61 9.94018L28.63 9.89018L28.32 1.48018L25.32 9.20018L25.3 9.25018L25.61 17.6602L28.61 9.94018ZM27.88 4.14018L28.09 9.79018L26.07 14.9902L25.86 9.34018L27.88 4.14018ZM37.25 3.85018L32.96 10.9402L31.77 19.3302L36.06 12.2402L37.25 3.85018ZM32.67 16.7702L33.45 11.1702L36.34 6.40018L35.56 12.0002L32.67 16.7702ZM61 16.6902C64.12 16.6902 66.67 14.1502 66.67 11.0202C66.67 7.90018 64.13 5.35018 61 5.35018C57.88 5.35018 55.33 7.89018 55.33 11.0202C55.33 14.1502 57.88 16.6902 61 16.6902ZM61 5.91018C63.82 5.91018 66.12 8.21018 66.12 11.0302C66.12 13.8502 63.82 16.1502 61 16.1502C58.18 16.1502 55.88 13.8502 55.88 11.0302C55.88 8.20018 58.18 5.91018 61 5.91018ZM90.5 19.2702L89.24 11.0802L84.75 3.90018L86.02 12.0902L90.5 19.2702ZM88.7 11.2202L89.55 16.7402L86.54 11.9502L85.7 6.43018L88.7 11.2202ZM96.83 9.30018L93.67 1.50018L93.49 9.84018L96.66 17.6402L96.83 9.30018ZM96.17 14.9802L94.04 9.74018L94.16 4.16018L96.29 9.40018L96.17 14.9802ZM104.63 8.91018L102.87 0.680176L101.25 8.86018L103.01 17.0902L104.63 8.91018ZM101.8 8.86018L102.89 3.39018L104.07 8.92018L102.98 14.3902L101.8 8.86018ZM112.35 9.94018L112.37 9.89018L112.06 1.48018L109.06 9.20018L109.04 9.25018L109.35 17.6602L112.35 9.94018ZM111.61 4.14018L111.82 9.79018L109.8 14.9902L109.59 9.34018L111.61 4.14018ZM120.98 3.85018L116.69 10.9402L115.5 19.3302L119.8 12.2402L120.98 3.85018ZM116.41 16.7702L117.19 11.1702L120.08 6.40018L119.3 12.0002L116.41 16.7702Z"
              fill="#FFA700"
            />
          </svg>
          <h3 className="text-2xl font-extrabold mb-6">
            Some of our past clients
          </h3>
          <p className="text-lg font-light text-balance">
            With more than 50,000 people hosted in over 15 cities worldwide, we
            combine experience with research to know what works… and
            importantly, what doesn&apos;t!
          </p>
          {/* 4 column grid for logos */}
          <div className="my-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  width={128}
                  height={128}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-32 lg:w-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="bg-slate-100 shadow-inner">
        <Container>
          <div className="py-12">
            <h2 className="text-xl font-extrabold mb-6 uppercase">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="bg-white hover:bg-brand-accent p-6 rounded-lg shadow transition-colors duration-300">
                <summary className="font-normal text-2xl uppercase cursor-pointer">
                  How long is a typical session?
                </summary>
                <div className="mt-4 overflow-hidden">
                  <p>
                    A typical session lasts about 60 minutes and includes a mix
                    of movement, music, and mindfulness activities.
                  </p>
                </div>
              </details>
              <details className="bg-white hover:bg-brand-accent p-6 rounded-lg shadow transition-colors duration-300">
                <summary className="font-normal text-2xl uppercase cursor-pointer">
                  Do you provide your own sound equipment?
                </summary>
                <div className="mt-4 overflow-hidden">
                  <p>
                    Yes, we provide all necessary sound equipment for our
                    sessions.
                  </p>
                </div>
              </details>
              <details className="bg-white hover:bg-brand-accent p-6 rounded-lg shadow transition-colors duration-300">
                <summary className="font-normal text-2xl uppercase cursor-pointer">
                  Can sessions be customized?
                </summary>
                <div className="mt-4 overflow-hidden">
                  <p>
                    Yes, we can customize sessions to meet the specific needs
                    and preferences of participants.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default FAQS;
