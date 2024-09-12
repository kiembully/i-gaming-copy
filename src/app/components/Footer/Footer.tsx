import React from "react";
import Image from "next/image";
// import { FaFacebookF, FaTelegramPlane, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Icons

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 p-6 px-12">
      <div className="container mx-auto grid lg:grid-cols-6 sm:grid-cols-2 gap-4 text-left text-gray-700 text-sm px-6 space-x-6">
        {/* Our Partners */}
        <div className="lg:col-span-1 sm:col-span-2">
          <h4 className="font-bold mb-4">Our Partners:</h4>
          <div className="space-y-2">
            {/* Replace with actual images */}
            <div className="grid grid-cols-2 gap-1">
              <Image
                width={300}
                height={300}
                src="/assets/images/gli.png"
                alt="GLI"
                className="h-8 w-[6rem]"
              />
              <Image
                width={300}
                height={300}
                src="/assets/images/glc.png"
                alt="Gaming Labs Certified"
                className="h-8 w-[6rem]"
              />
            </div>

            <div className="col-span-1">
              <div className="flex space-x-4 mb-2 w-[6rem]">
                <Image
                  width={300}
                  height={300}
                  src="/assets/images/spade.png"
                  alt="Other Partners"
                  className="h-8"
                />
                <Image
                  width={300}
                  height={300}
                  src="/assets/images/techlabs.png"
                  alt="Other Partners"
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-1 sm:col-span-2">
          <h4 className="font-bold mb-4">NAVIGATION</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Activity
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                VIP Club
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Share and Earn
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Treasure
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Wallet
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Notification
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Account
              </a>
            </li>
          </ul>
        </div>

        {/* Game */}
        <div className="lg:col-span-1 sm:col-span-2">
          <h4 className="font-bold mb-4">GAME</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Slots
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Mini Games
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Chess and Card
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Fishing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Lottery
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Video
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Popular Games
              </a>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="lg:col-span-1 sm:col-span-2">
          <h4 className="font-bold mb-4">FEATURES</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                VIP Center
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Activity
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="lg:col-span-1 sm:col-span-2">
          <h4 className="font-bold mb-4">ABOUT US</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Confidentiality Agreement
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Risk Disclosure Agreement
              </a>
            </li>
          </ul>

          <h4 className="font-bold mb-4 mt-4">ABOUT US</h4>
          <div className="flex space-x-4 mb-2">
            {/* <a href="/" className="text-blue-600 hover:scale-105"><FaFacebookF /></a>
                        <a href="/" className="text-blue-600 hover:scale-105"><FaTelegramPlane /></a>
                        <a href="/" className="text-pink-600 hover:scale-105"><FaInstagram /></a>
                        <a href="/" className="text-blue-600 hover:scale-105"><FaLinkedinIn /></a> */}
            <Image
              width={50}
              height={50}
              src="/assets/images/platforms/fb.png"
              alt="Other Partners"
              className="h-8"
            />
            <Image
              width={50}
              height={50}
              src="/assets/images/platforms/tg.png"
              alt="Other Partners"
              className="h-8"
            />
            <Image
              width={50}
              height={50}
              src="/assets/images/platforms/instagram.png"
              alt="Other Partners"
              className="h-8"
            />
            <Image
              width={50}
              height={50}
              src="/assets/images/platforms/linkedin.png"
              alt="Other Partners"
              className="h-8"
            />
          </div>
          <p className="text-xs text-gray-500 mt-4">
            &copy; 2023 NEXTGEAR. All rights reserved. Protected by law.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
