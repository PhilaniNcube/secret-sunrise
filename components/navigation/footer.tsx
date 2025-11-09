import React from "react";
import Link from "next/link";
import Container from "../container";

const Footer = async () => {

  return (
    <footer className=" text-gray-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Address</h3>
            <div className="space-y-2">
              <p>Plot 22, Leopards Hill Road</p>
              <p>Ghana</p>
              <p>
                <a href="mailto:info@morejoy.africa" className="hover:text-white transition-colors">
                  info@morejoy.africa
                </a>
              </p>
              <p>
                <a href="tel:+265970000000" className="hover:text-white transition-colors">
                  +265 97 000 0000
                </a>
              </p>
            </div>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sessions" className="hover:text-white transition-colors">
                  Sessions
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms Of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

      
      </Container>
        {/* Copyright Section */}
        <div className="mt-12 py-8 bg-brand-accent text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Secret Sunrise. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
