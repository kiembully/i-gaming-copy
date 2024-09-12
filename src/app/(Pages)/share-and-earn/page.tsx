"use client";
import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import NextImage from "../../components/Common/Image/Image";
import CommonTabs from "../../components/Common/Tabs/CommonTabs";
import Account from "../../components/Profile/account";
import MyInformation from "../../components/ShareAndEarn/MyInformation";

const shareAndEarnData = [
  {
    label: "Share and Earn",
    content: <Account status="vip" uid="810040" />,
  },
];

const myInfoData = [
  {
    label: "My Information",
    content: <MyInformation />,
  },
  {
    label: "Promotional Material",
    content: <p>This is the content of Tab 2.</p>,
  },
  {
    label: "Rebate Ratio",
    content: <p>This is the content of Tab 3.</p>,
  },
];

const page = () => {
  return (
    <DefaultLayout>
      <div className="relative flex flex-col min-h-screen py-20 items-center px-4 md:px-10">
        <NextImage
          src="/assets/images/backgrounds/homepage.png"
          alt="background cover"
          fill
          containerClass=""
          className="object-cover object-top"
          variant="background"
        />
        <section className="z-10 w-full mb-10">
          <div className="flex">
            <CommonTabs tabs={shareAndEarnData} className="p-4 md:p-10" />
          </div>
        </section>
        <section className="z-10 min-h-96 w-full">
          <div>
            <CommonTabs tabs={myInfoData} className="p-4 md:p-10" />
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default page;
