"use client";
import React, { useState } from "react";
import Image from "next/image";

// Define the interface for the image props
interface NextImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  fill?: boolean;
  className?: string;
  containerClass?: string;
  variant?: string;
  bgPlaceholderColor?: string;
}

const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  height,
  width,
  fill = false,
  className = "",
  containerClass = "",
  variant = "",
  bgPlaceholderColor = "#A4DFE5",
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const renderImagePlaceholder = (variant: string) => {
    switch (variant) {
      case "background":
        return (
          <div className={`absolute inset-0 bg-[${bgPlaceholderColor}]`} />
        );
      default:
        return (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
        );
    }
  };

  return (
    <div className={containerClass}>
      {isLoading && renderImagePlaceholder(variant)}
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        fill={fill}
        className={className}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default NextImage;
