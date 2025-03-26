import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

interface TranslatingArrowsProps{
    leftTranslate:() => void;
    rightTranslate:() => void;

}

export const TranslatingArrows: React.FC<TranslatingArrowsProps> = ({ leftTranslate, rightTranslate,translate ,max}) => {
  const [active, setActive] = useState<string>('right');
  return (
    <>
      <FaArrowLeft
        style={{
          width: "1rem",
          height:"1rem",
          color: active === 'left' ? "rgb(50, 50, 50)" : "rgb(102, 102, 102)",
          fontWeight: "200",
          border: active === 'left' ? "1px solid rgb(50, 50, 50)" : "1px solid rgb(102, 102, 102)",
          borderRadius: "100%",
          padding: "0.5rem",
          marginTop: "1.5vw",
          marginRight: "1vw",
        }}
        onClick={() => {
          console.log(translate,"translate")
          if(translate < 0 ){
            setActive('left');
            leftTranslate();
          }
          else{
            setActive('right')
          }
        }}
      />
      <FaArrowRight
        style={{
          width: "1rem",
          height:"1rem",
          color: active === 'right' ? "rgb(50, 50, 50)" : "rgb(102, 102, 102)",
          fontWeight: "200",
          border: active === 'right' ? "1px solid rgb(50, 50, 50)" : "1px solid rgb(102, 102, 102)",
          borderRadius: "100%",
          padding: "0.5rem",
          marginTop: "1.5vw",
        }}
        onClick={() => {
          console.log(translate)
          if(translate > max){ 
            rightTranslate();
            setActive('right');
          }
          else{
            setActive('left')  
          }
        }}
      />
    </>
  );
};
