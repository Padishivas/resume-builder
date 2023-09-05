import { useState } from "react";
import Slider from "../utils/slider";

const ResumePreview = () => {
  const [index, setIndex] = useState(0);
  const colors = {
    bg: [
      "rgba(229, 80, 57,0.3)",
      "rgba(74, 105, 189,0.3)",
      "rgba(96, 163, 188,0.3)",
      "rgba(56, 173, 169,0.3)",
      "rgba(7, 153, 146,0.3)",
    ],
    moveBg: [
      "rgba(229, 80, 57,1.0)",
      "rgba(74, 105, 189,1.0)",
      "rgba(96, 163, 188,1.0)",
      "rgba(56, 173, 169,1.0)",
      "rgba(7, 153, 146,1.0)",
    ],
    leves: ["Novice", "Beginner", "Skillful", "Experienced", "Expert"],
  };
  const options = {
    colors,
    index,
    setIndex,
  };
  return (
    <div>
      <p>{colors.leves[index]}</p>
      <Slider data={options} />
    </div>
  );
};

export default ResumePreview;
