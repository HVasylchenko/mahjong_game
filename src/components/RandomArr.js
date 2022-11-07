import React from "react";
import { useState } from "react";

// const RandomArr = ({ array }) => {
//   const [visible, setVisible] = useState("visible");
//   setTimeout(() => {
//     setVisible("hidden");
//   }, 5000);

const RandomArr = ({ array }) => {
  const [visible, setVisible] = useState("visible");
  setTimeout(() => {
    setVisible("hidden");
  }, 5000);

  let arg = 0;

  const mahjong = (e) => {
    if (arg === 0) {
      e.target.children[0].className = "visible";
      arg = +e.target.children[0].innerHTML;
      return false;
    } else {
      e.target.children[0].className = "visible";
      if (arg !== +e.target.children[0].innerHTML) {
        setTimeout(() => {
          e.target.children[0].className = "hidden";
        }, 1000);
      } else {
        // arg = e.target.children[0].innerHTML;
        arg = 0;
        return false;
      }
    }
  };

  return (
    <>
      <div className="box">
        {array.map((number, index) => (
          <div key={index} className="rectangle" onClick={mahjong}>
            <div className={visible}>{number}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RandomArr;
