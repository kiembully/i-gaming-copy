"use client";
import DefaultLayout from "@/app/layouts/DefaultLayout";
// import HeroBanner from "./components/Sections/HomeSections/HeroBanner/HeroBanner";
import PopularGames from "@components/Sections/HomeSections/PopularGames/PopularGames";
import LiveGames from "@components/Sections/HomeSections/LiveGames/LiveGames";
import LatestBets from "@components/Sections/HomeSections/LatestBets/LatestBets";
import Image from "next/image";
import React, { useState } from "react";
import {
  bestsData,
  popularGamesData,
  liveGamesData,
  bannersData,
} from "@/app/types/data";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <DefaultLayout>
      <section className="section-1">
        <div className="h-[400px] bg-gray-500 flex items-center justify-center relative">
          <div className="w-full h-full relative">
            {/* Main background image */}
            <Image
              src="/assets/images/backgrounds/view-slot-machines-casino.png"
              alt="main bg"
              fill
              className="object-cover object-center"
              onLoad={() => setIsLoading(false)}
            />

            {/* Content container */}
            <div className="grid grid-cols-5 h-full w-full absolute top-0 left-0 z-10">
              {/* Left side text and button */}
              <div className="col-span-2 w-full flex flex-col justify-center items-center h-full pt-4 pl-[90px] gap-1">
                <p className="text-white font-semibold text-[1.5rem] -mb-[-0.5rem]">
                  Sign Up and Get up to{" "}
                </p>
                <Image
                  width={1200}
                  height={1200}
                  src="/assets/images/backgrounds/100.png"
                  alt="100 bonus"
                  className="h-[12rem] w-[26rem] object-contain"
                />
                <p className="text-[#FFF27E] text-4xl font-bold -mt-[-0.5rem]">
                  TOP UP BONUS!
                </p>
                <button
                  className="w-[9rem] border-[#FFFFFF] border-1 rounded-[45px] text-white h-[2rem]"
                  style={{
                    background: "linear-gradient(to bottom, #B0EDFF, #4CB6E3)",
                  }}
                >
                  Join Now
                </button>
              </div>

              {/* Right side banner image */}
              <div className="col-span-3 flex justify-center items-center relative">
                <Image
                  src="/assets/images/backgrounds/Casino-Girl.png"
                  alt="banner photo"
                  fill
                  className="object-fill object-center z-10"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white h-[200x] flex items-center justify-center px-[76px]">
          <div className="grid grid-cols-4 gap-3 py-4 pt-5 w-full">
            {bannersData.map((banner, index) => (
              <React.Fragment key={index}>
                <div className=" col-span-1 h-[100px] relative bg-red rounded-[10px]">
                  <Image
                    src={banner.banner}
                    alt="main bg"
                    fill
                    className="object-cover object-center rounded-[10px]"
                    // onLoad={() => setIsLoading(false)}
                  />
                  <div className="grid grid-cols-2 w-full h-full">
                    <div className="col-span-1 z-10 flex justify-start items-center  pl-3 ">
                      <p className="text-white text-[1.2rem] leading-[20px]">
                        {banner.caption}
                      </p>
                    </div>
                    <div className="col-span-1 relative">
                      {banner.cover ? (
                        <Image
                          width={300}
                          height={300}
                          src={banner.cover}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-[10px]"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* <section
          className="min-h-screen bg-custom-image bg-cover bg-center flex flex-col gap-20 justify-center w-full py-10 pt-[110px]"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/homepage.png')",
          }}
        ></section> */}
      <section className="relative min-h-screen relative flex flex-col gap-20 justify-center w-full py-10 pt-[110px]">
        {isLoading && <div className="absolute inset-0 bg-[#A4DFE5]"></div>}
        <Image
          src="/assets/images/backgrounds/homepage.png"
          alt="main bg"
          fill
          className="object-cover object-center"
          onLoad={() => setIsLoading(false)}
        />
        <PopularGames popular_games={popularGamesData} />

        <LiveGames live_games={liveGamesData} />

        <LatestBets latest_bets={bestsData} />
      </section>
    </DefaultLayout>
  );
};

export default Home;
