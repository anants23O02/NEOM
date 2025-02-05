import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

interface TranslatingArrowsProps{
    leftTranslate:() => void;
    rightTranslate:() => void;

}

export const TranslatingArrows: React.FC<TranslatingArrowsProps> = ({ leftTranslate, rightTranslate }) => {
  const [active, setActive] = useState();
  console.log('active :>> ', active);
  return (
    <>
      <FaArrowLeft
        style={{
          width: "0.8rem",
          color: active === 'left' ? "rgb(50, 50, 50)" : "rgb(102, 102, 102)",
          fontWeight: "200",
          border: active === 'left' ? "1px solid rgb(50, 50, 50)" : "1px solid rgb(102, 102, 102)",
          borderRadius: "100%",
          padding: "0.5rem",
          marginTop: "1.5vw",
          marginRight: "1.5vw",
        }}
        onClick={() => {
            setActive('left');
          leftTranslate();
        }}
      />
      <FaArrowRight
        style={{
          width: "0.8rem",
          color: active === 'right' ? "rgb(50, 50, 50)" : "rgb(102, 102, 102)",
          fontWeight: "200",
          border: active === 'right' ? "1px solid rgb(50, 50, 50)" : "1px solid rgb(102, 102, 102)",
          borderRadius: "100%",
          padding: "0.5rem",
          marginTop: "1.5vw",
        }}
        onClick={() => {
          rightTranslate();
          setActive('right');
        }}
      />
    </>
  );
};
