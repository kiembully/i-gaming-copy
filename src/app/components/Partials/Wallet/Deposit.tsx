import Image from "next/image";
import React /*, { useState }*/ from "react";

const Deposit = () => {
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="grid grid-rows-6 gap-2">
      <div className="rounded-[10px] row-span-1 bg-[#1A2E35] h-[3.5rem] gap-1 w-full flex justify-start px-4 items-center">
        <Image
          alt=""
          src="/assets/images/icons/6001566.png"
          width={40} // Add width and height for Image component
          height={40} // Add width and height for Image component
        />
        <span className="text-[#FFFFFF] text-[1.5rem]">Pay</span>
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
          <span className="text-[#0A316C] text-[1.5rem] text-[#61A700]">
            10000
          </span>
          <Image
            alt=""
            src="/assets/images/icons/8135549.png"
            width={25} // Add width and height for Image component
            height={25} // Add width and height for Image component
          />
        </div>
      </div>
      <div className="rounded-[10px] row-span-1 bg-transparent h-[3.5rem] w-full grid grid-cols-2"></div>
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
          <span className="text-[#0A316C] text-[1.5rem] text-[#61A700]">
            10000
          </span>
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
          <span className="text-[#0A316C] text-[1.5rem] text-[#61A700]">
            10000
          </span>
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
          <span className="text-[#0A316C] text-[1.5rem] text-[#61A700]">
            10000
          </span>
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

export default Deposit;
