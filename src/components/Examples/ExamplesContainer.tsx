import React from "react";
import { examples } from "@/constants/examples";
import ExamplesCard from "./ExamplesCard";
import Slider from "react-slick";

const ExamplesContainer = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div >
      {examples.map((ex) => (
        <ExamplesCard
          key={ex.id}
          previewUrl={ex.previewUrl}
          imageUrl={ex.imageUrl}
        ></ExamplesCard>
      ))}
    </div>
  );
};

export default ExamplesContainer;
