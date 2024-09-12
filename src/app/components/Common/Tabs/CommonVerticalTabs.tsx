import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Tab {
  label: string;
  icon: StaticImageData;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const CommonVerticalTabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        {/* Transaction Tabs */}
        <div className="transaction-tabs col-span-1 grid grid-cols-1 gap-2">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`pl-6 bg-[#FFFFFF] h-[3.5rem] gap-1 flex justify-start items-center rounded-[10px] cursor-pointer ${
                activeTab === index ? "bg-[#FFD935]" : ""
              }
              hover:before:bg-redborder-red-500 relative 
              overflow-hidden bg-white px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 
              before:z-0  :h-full before:w-0 before:bg-[#FFD935] before:transition-all before:duration-100 hover:text-white hover:shadow-grey 
              hover:before:left-0 hover:before:w-full`}
              onClick={() => setActiveTab(index)} // Set active tab on click
            >
              <div className="relative z-10 flex items-center gap-2">
                <Image
                  alt=""
                  src={tab.icon}
                  width={20} // Add width and height for Image component
                  height={20} // Add width and height for Image component
                  className=""
                />
                <span className="font-semibold text-[#0A316C]">{tab.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transaction Contents */}
        <div className="transaction-contents col-span-2 relative">
          {tabs[activeTab].content} {/* Display content of the active tab */}
        </div>
      </div>
    </div>
  );
};

export default CommonVerticalTabs;
