import Image from "next/image";
import React from "react";

const SchoolEvents = () => {
  return (
    <section className="bg-white shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-1 lg:col-span-3 h-full">
          <Image
            src="/images/school_events.jpg"
            alt="School Events"
            width={1200}
            height={800}
            className="w-full h-full max-h-[500px] object-cover"
          />
        </div>
        <div className="px-20 col-span-1 lg:col-span-2 flex flex-col justify-center">
          <svg
            width="122"
            height="20"
            viewBox="0 0 122 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.76 19.27L5.5 11.08L1.02 3.89999L2.29 12.09L6.76 19.27ZM4.97 11.22L5.82 16.74L2.81 11.95L1.96 6.42999L4.97 11.22ZM13.1 9.29999L9.93 1.49999L9.75 9.83999L12.91 17.64L13.1 9.29999ZM12.43 14.98L10.3 9.73999L10.42 4.15999L12.55 9.39999L12.43 14.98ZM20.89 8.90999L19.13 0.679993L17.51 8.85999L19.27 17.09L20.89 8.90999ZM18.06 8.85999L19.15 3.38999L20.33 8.91999L19.24 14.39L18.06 8.85999ZM28.61 9.93999L28.63 9.88999L28.32 1.47999L25.32 9.19999L25.3 9.24999L25.61 17.66L28.61 9.93999ZM27.88 4.13999L28.09 9.78999L26.07 14.99L25.86 9.33999L27.88 4.13999ZM37.25 3.84999L32.96 10.94L31.77 19.33L36.06 12.24L37.25 3.84999ZM32.67 16.77L33.45 11.17L36.34 6.39999L35.56 12L32.67 16.77ZM61 16.69C64.12 16.69 66.67 14.15 66.67 11.02C66.67 7.89999 64.13 5.34999 61 5.34999C57.88 5.34999 55.33 7.88999 55.33 11.02C55.33 14.15 57.88 16.69 61 16.69ZM61 5.90999C63.82 5.90999 66.12 8.20999 66.12 11.03C66.12 13.85 63.82 16.15 61 16.15C58.18 16.15 55.88 13.85 55.88 11.03C55.88 8.19999 58.18 5.90999 61 5.90999ZM90.5 19.27L89.24 11.08L84.75 3.89999L86.02 12.09L90.5 19.27ZM88.7 11.22L89.55 16.74L86.54 11.95L85.7 6.42999L88.7 11.22ZM96.83 9.29999L93.67 1.49999L93.49 9.83999L96.66 17.64L96.83 9.29999ZM96.17 14.98L94.04 9.73999L94.16 4.15999L96.29 9.39999L96.17 14.98ZM104.63 8.90999L102.87 0.679993L101.25 8.85999L103.01 17.09L104.63 8.90999ZM101.8 8.85999L102.89 3.38999L104.07 8.91999L102.98 14.39L101.8 8.85999ZM112.35 9.93999L112.37 9.88999L112.06 1.47999L109.06 9.19999L109.04 9.24999L109.35 17.66L112.35 9.93999ZM111.61 4.13999L111.82 9.78999L109.8 14.99L109.59 9.33999L111.61 4.13999ZM120.98 3.84999L116.69 10.94L115.5 19.33L119.8 12.24L120.98 3.84999ZM116.41 16.77L117.19 11.17L120.08 6.39999L119.3 12L116.41 16.77Z"
              fill="black"
            />
          </svg>

          <h2 className="text-2xl font-bold my-3">School Events</h2>
          <p className="mt-4 text-md font-light text-balance">
            Joy-filled sessions and workshops encouraging creativity, focus and
            teamwork in students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SchoolEvents;
