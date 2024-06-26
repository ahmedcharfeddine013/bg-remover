'use client'

import React from "react";
import CompareImage from "react-compare-image";
const ExamplesCard = ({
  previewUrl,
  imageUrl,
}: {
  previewUrl: string;
  imageUrl: string;
}) => {
  return (
    <div className="mt-4 w-full flex justify-center flex-col items-center">
      <div className="w-[600px] h-fit relative">
        <CompareImage leftImage={previewUrl} rightImage={imageUrl} />
      </div>
    </div>
  );
};

export default ExamplesCard;
