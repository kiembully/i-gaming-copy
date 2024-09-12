"use client";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import React from "react";
// import Image from "next/image";
import CommonTabs from "@components/Common/Tabs/CommonTabs";
// import MyInfo from "@components/Common/Profile/account";
import NextImage from "@components/Common/Image/Image";
import WalletContent from "@components/Partials/Wallet/Wallet";

// const shareAndEarnData = [
//   {
//     label: "Share and Earn",
//     content: <MyInfo />,
//   },
// ];

const myInfoData = [
  {
    label: "Wallet",
    content: <WalletContent />,
  },
];

const Home = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <DefaultLayout>
        <div className="relative flex flex-col min-h-screen py-20 items-center px-10">
          <NextImage
            src="/assets/images/backgrounds/homepage.png"
            alt="background cover"
            fill
            containerClass=""
            className="object-cover object-top"
            variant="background"
          />
          <section className="z-10 min-h-96 w-full">
            <div>
              <CommonTabs tabs={myInfoData} className="p-4 md:p-10" />
            </div>
          </section>
        </div>
    </DefaultLayout>
  );
};

export default Home;
