import Image from "next/image";
import React/*, { useState }*/ from "react";

const Balance = () => {
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="grid grid-rows-6 gap-2">
      <div className="row-span-3 bg-white h-full w-full relative">
        {/* {isLoading && <div className="absolute inset-0 bg-[#A4DFE5]"></div>}
        <Image
          src="/assets/images/backgrounds/dollar-coins-2.png"
          alt="banner photo"
          fill
          className="object-fill object-center"
          quality={100} // Set quality to high
          onLoad={() => setIsLoading(false)}
        />
        <div
          className="absolute top-0 right-[-50px] h-full"
          style={{ width: "49.5rem" }} // Set width here
        >
          <Image
            src="/assets/images/backgrounds/dollar-coins.png"
            alt="banner photo"
            layout="fill"
            className="object-fill object-center absolute"
            quality={100} // Set quality to high
            onLoad={() => setIsLoading(false)}
          />
        </div> */}
        <div className="grid grid-cols-7 gap-2 w-full h-full">
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <div className="rounded-[10px] row-span-1 bg-[#1A2E35] h-[3.5rem] w-full flex justify-start px-4 items-center">
        <Image
          alt=""
          src="/assets/images/icons/6001566.png"
          width={40} // Add width and height for Image component
          height={40} // Add width and height for Image component
        />
        <span className="text-[#FFFFFF] text-[1.5rem]">Exchange Rate</span>
      </div>
      <div className="rounded-[10px] row-span-1 bg-[#FFFFFF] h-[3.5rem] w-full grid grid-cols-2">
        <div className="flex justify-start items-center cols-pan-1 gap-2 px-4 font-semibold">
          <Image
            alt=""
            src="/assets/images/icons/1490817.png"
            width={25} // Add width and height for Image component
            height={25} // Add width and height for Image component
          />
          <span className="text-[#0A316C] text-[1.5rem]">INR</span>
        </div>
        <div className="flex justify-end items-center cols-pan-1 gap-2 px-4 font-semibold">
          <span className="text-[#0A316C] text-[1.5rem] text-[#61A700]">10000</span>
          <Image
            alt=""
            src="/assets/images/icons/8135549.png" 
            width={25} // Add width and height for Image component
            height={25} // Add width and height for Image component
          />
        </div>
      </div>
      <div className="rounded-[10px] row-span-1 bg-[#FFFFFF] h-[3.5rem] w-full grid grid-cols-2">
        <div className="flex justify-start items-center cols-pan-1 gap-2 px-4 font-semibold">
          <Image
            alt=""
            src="/assets/images/icons/6001566.png"
            width={25} // Add width and height for Image component
            height={25} // Add width and height for Image component
          />
          <span className="text-[#0A316C] text-[1.5rem]">USDT</span>
        </div>
        <div className="flex justify-end items-center cols-pan-1 gap-2 px-4 font-semibold">
          <span className="text-[#0A316C] text-[1.5rem] text-[#61A700]">10000</span>
          <Image
            alt=""
            src="/assets/images/icons/8135549.png"
            width={25} // Add width and height for Image component
            height={25} // Add width and height for Image component
          />
        </div>
      </div>
    </div>
  );
};

export default Balance;
