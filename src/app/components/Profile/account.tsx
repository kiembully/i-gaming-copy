import React from "react";
import NextImage from "../Common/Image/Image";

interface AccountProps {
  uid?: string;
  status?: string;
  email?: string;
  lastLogin?: string;
}

const Account: React.FC<AccountProps> = ({
  uid = "000000",
  status = "",
  email = "Hi****@bosseal.com",
  lastLogin = "2024-09-06",
}) => {
  const handleAccountStatus = (status: string) => {
    // add an else if for different status display
    if (status === "vip") {
      return (
        <div className="h-14 w-14 absolute left-0 top-[-30px]">
          <NextImage
            src="/assets/images/account-status/vip-icon.png"
            alt="camera icon"
            fill
            className="object-cover object-center"
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex space-y-6 lg:space-y-0 flex-col lg:flex-row">
      <div className="flex md:space-x-10 space-y-6 md:space-y-0 flex-col md:flex-row">
        <div className="w-auto">
          <div className="rounded-full relative h-[200px] lg:h-[260px] w-[200px] lg:w-[260px] mx-auto">
            <NextImage
              src="/assets/images/avatars/avatar.png"
              alt="avatar"
              fill
              containerClass="rounded-full overflow-hidden hover:opacity-95"
              className="object-cover object-top"
            />
            <button
              type="button"
              className="h-10 md:h-16 w-10 md:w-16 absolute rounded-full bg-sky-400 bottom-2 right-2"
            >
              <NextImage
                src="/assets/images/camera.png"
                alt="camera icon"
                fill
                containerClass="hover:opacity-75"
                className="object-cover object-center"
              />
            </button>
          </div>
        </div>
        <div className="w-auto content-end pb-6 self-center md:self-auto">
          <div className="bg-sky-400 mb-4 relative space-x-2 py-2 px-6 w-fit min-w-64 min-h-16 flex items-center justify-center text-white rounded-full">
            {handleAccountStatus(status)}
            <span className="font-bold text-lg sm:text-2xl md:text-4xl whitespace-nowrap">
              UID | {uid}
            </span>
            <button
              type="button"
              className="rounded-full relative h-10 md:h-14 w-10 md:w-14 bg-transparent hover:opacity-75"
            >
              <NextImage
                src="/assets/images/copy.png"
                alt="camera icon"
                fill
                containerClass="hover:opacity-75"
                className="object-cover object-center"
              />
            </button>
          </div>
          <p className="text-blue-900 font-bold text-sm sm:text-md md:text-lg text-center md:text-left">
            Email : {email}
          </p>
          <p className="text-blue-900 font-bold text-sm sm:text-md md:text-lg text-center md:text-left">
            Last Login : {lastLogin}
          </p>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="w-full content-end items-right pb-6 text-center lg:text-right">
          <div className="text-lime-800 items-center text-xl sm:text-2xl md:text-3xl font-bold inline-flex">
            P100,000
            <span className="relative ml-2 h-[40px] w-[40px] rounded-full overflow-hidden">
              <NextImage
                src="/assets/images/coin.png"
                alt="coin icon"
                fill
                className="object-cover object-center"
              />
            </span>
          </div>
          <p className="text-blue-900 font-bold text-md sm:text-lg md:text-2xl">
            Yesterday&apos; total commision
          </p>
          <p className="text-blue-900 font-bold text-sm sm:text-md md:text-lg">
            Upgrade the level to increase commision income
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
