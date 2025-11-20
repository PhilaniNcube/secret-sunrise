import React from "react";
import Container from "./container";
import Image from "next/image";

const FAQS = () => {
  return (
    <section className="bg-slate-100 shadow-inner">
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
                  A typical session lasts about 60 minutes and includes a mix of
                  movement, music, and mindfulness activities.
                </p>
              </div>
            </details>
            <details className="bg-white hover:bg-brand-accent p-6 rounded-lg shadow transition-colors duration-300">
              <summary className="font-normal text-2xl uppercase cursor-pointer">
                Do you provide your own sound equipment?
              </summary>
              <div className="mt-4 overflow-hidden">
                <p>
                  Yes, we provide all necessary sound equipment for our sessions.
                </p>
              </div>
            </details>
            <details className="bg-white hover:bg-brand-accent p-6 rounded-lg shadow transition-colors duration-300">
              <summary className="font-normal text-2xl uppercase cursor-pointer">
                Can sessions be customized?
              </summary>
              <div className="mt-4 overflow-hidden">
                <p>
                  Yes, we can customize sessions to meet the specific needs and
                  preferences of participants.
                </p>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQS;
