

import "../../../App.css";
import React, { useEffect, useState } from "react";





 const Port = () => {
  const array = ["wood", "cork", "leather", "vinyl", "carpet"];

//   const array = ["<Header />"];


  const [text, setText] = useState(array[0].split(""));

  const [countUp, setCountUp] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (countUp === array.length -1) {
        setCountUp(0);
      } else {
        setCountUp((prev) => prev + 1);
      }
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [countUp]);

  useEffect(() => {
    setText(array[countUp].split(""));
  }, [countUp]);

  return (
    <div className="App">
      <div className="StaticText ">
        <h1 className="">More than just</h1>
        <div className="Animate">
          {text.map((item, index) => (
            <span key={index}>{item}
            
            </span>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Port 