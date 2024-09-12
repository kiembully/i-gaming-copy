import React, { ReactNode } from "react";

interface WhiteTopProps {
  title: string;
  titleCentered?: boolean;
  children: ReactNode;
}
const WhiteTop: React.FC<WhiteTopProps> = ({
  title,
  children,
  titleCentered = true,
}) => {
  return (
    <div className="flex flex-col w-full rounded-xl overflow-hidden border-2 border-white">
      <div
        className={`bg-white px-4 md:px-6 py-4 text-lg md:text-2xl font-semibold ${titleCentered ? "text-center" : ""}`}
      >
        {title}
      </div>
      <div
        className="flex"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #9EEFFF 0%, #64DDFF 100%)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default WhiteTop;
