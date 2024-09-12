import React from "react";

const ReferralTable = () => {
  return (
    <div className="flex flex-col w-full text-lg font-bold text-blue-900">
      <div className="flex flex-col">
        <div className="flex space-x-2 px-2 text-center items-center justify-evenly py-4 border-b-2 border-white">
          <div>Number of Sign Up</div>
          <div>Deposit Amount</div>
          <div>Number of Sign Up</div>
        </div>
        <div className="flex items-center justify-evenly py-4  border-b-2 border-white">
          <div>0</div>
          <div>0</div>
          <div>0</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-evenly py-4 border-b-2 border-white">
          Number of People making First Deposit
        </div>
        <div className="flex items-center justify-evenly py-4  border-b-2 border-white">
          0
        </div>
      </div>
    </div>
  );
};

export default ReferralTable;
