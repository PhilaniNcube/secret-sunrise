import React from "react";
import Container from "./container";
import Image from "next/image";

const Session = () => {
  return (
    <section className="bg-brand-accent">
      <Container>
        <Image
          src="/images/jazz.webp"
          alt="Jazz"
          width={1200}
          height={800}
          className="aspect-video object-cover mx-auto py-11"
        />
        <h2 className="text-4xl text-white font-extrabold text-center mb-6 uppercase">
          How Does A <br />
          Session Go
        </h2>
      </Container>
      <div className="translate-y-12">
        <Container>
          <div className="flex justify-between">
            <div>
              <Image
                src="/images/door.png"
                alt="Opening"
                width={500}
                height={500}
                className="h-40 w-40 object-cover mx-auto"
              />
              <p className="mt-2 text-center">Opening</p>
            </div>
            <div>
              <Image
                src="/images/search.png"
                alt="Search"
                width={500}
                height={500}
                className="h-40 w-40 object-cover mx-auto -translate-y-4"
              />
              <p className="mt-2 text-center">Exploration</p>
            </div>
            <div>
              <Image
                src="/images/mountain.png"
                alt="Peak"
                width={500}
                height={500}
                className="h-40 w-40 object-cover mx-auto"
              />
              <p className="mt-2 text-center">Peak</p>
            </div>
            <div>
              <Image
                src="/images/antenna.png"
                alt="Connection"
                width={500}
                height={500}
                className="h-40 w-40 object-cover mx-auto"
              />
              <p className="mt-2 text-center">Connection</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-white pb-24"></div>
    </section>
  );
};

export default Session;
