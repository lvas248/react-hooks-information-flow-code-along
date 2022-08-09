import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";



function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState('#FFF')

  function handleChangeColor(){
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)
  }
  function handleChildColorChange(){
    const newRandomColor = getRandomColor()
    setChildrenColor(newRandomColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} onChangeChildColor = {handleChildColorChange}/>
      <Child color={childrenColor} onChangeColor={handleChangeColor} onChangeChildColor = {handleChildColorChange}/>
    </div>
  );
}

export default Parent;
