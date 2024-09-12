import React from "react";
import WhiteTop from "../Common/Containers/WhiteTop";
import ReferralTable from "./ReferralTable";

const MyInformation = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row space-y-1 md:space-y-0 mb-10">
        <p className="text-xl mr-4 sm:text-3xl md:text-5xl text-blue-900 font-semibold">
          Invite Code:
        </p>
        <div
          className="flex flex-1 content-center border-2 border-white rounded-full"
          style={{
            background: "linear-gradient(360deg, #9EEFFF 0%, #00B1E3 100%)",
          }}
        >
          <p className="flex-1 text-center px-6 py-2 whitespace-nowrap overflow-hidden text-ellipsis content-center font-bold text-blue-900 text-lg">
            https://7-demo.2088.cloud/register?code=kHWVxNTU
          </p>
          <button
            type="button"
            className="text-white text-lg md:text-xl rounded-full w-[100px] md:w-[190px] bg-red-200"
            style={{
              background: "linear-gradient(0deg, #FFD700 0%, #EB8F21 100%)",
            }}
          >
            Share
          </button>
        </div>
      </div>
      <div className="flex space-x-0 space-y-4 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row">
        <div className="w-full">
          <WhiteTop title="Direct Subordinates">
            <ReferralTable />
          </WhiteTop>
        </div>
        <div className="w-full">
          <WhiteTop title="Direct Subordinates">
            <ReferralTable />
          </WhiteTop>
        </div>
      </div>
    </div>
  );
};

export default MyInformation;
