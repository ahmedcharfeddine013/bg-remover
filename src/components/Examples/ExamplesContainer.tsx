import React from "react";
import { examples } from "@/constants/examples";
import ExamplesCard from "./ExamplesCard";
const ExamplesContainer = () => {
  return (
    <div>
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
