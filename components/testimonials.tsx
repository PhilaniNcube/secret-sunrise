import React from "react";
import Container from "./container";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "London, UK",
    avatar: "/images/avatar-1.jpg",
    content:
      "Secret Sunrise transformed our team dynamic. The energy and connection we experienced was incredible. Highly recommended for any organization looking to boost morale!",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    avatar: "/images/avatar-2.jpg",
    content:
      "An unforgettable experience! The morning dance session brought our entire conference to life. Everyone was talking about it for weeks afterwards.",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "Sydney, Australia",
    avatar: "/images/avatar-3.jpg",
    content:
      "We booked Secret Sunrise for our school event and it was amazing. The students loved it and it created such a positive atmosphere for the day.",
  },
  {
    id: 4,
    name: "David Martinez",
    location: "Barcelona, Spain",
    avatar: "/images/avatar-4.jpg",
    content:
      "Perfect for team building! Our remote team came together for this experience and it broke down barriers in ways traditional activities never could.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-4xl font-extrabold text-center mb-6 uppercase">
          Testimonials
        </h2>
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-brand text-white p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-md">{testimonial.name}</h3>
                  <p className="text-sm opacity-90 font-light">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="text-white/95 text-xs text-balance leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
     
    </section>
  );
};

export default Testimonials;
