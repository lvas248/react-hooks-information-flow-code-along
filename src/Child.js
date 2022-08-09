import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, onChangeChildColor, color  }) {
  return <div className="child" style={{backgroundColor : color}} onClick={onChangeChildColor} />;
}

export default Child;
