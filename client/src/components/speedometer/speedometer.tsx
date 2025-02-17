import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { smileyReviews } from "../../utils/SmileySvg"; // anger, appreciation, etc.

interface SpeedometerProps {
  value: number; // 0 to 30
}

const [anger, appreciation, boredom, disappointed, joy, overwhelmed] = smileyReviews;

export const Speedometer: React.FC<SpeedometerProps> = ({ value }) => {
  const segmentColors = [
    "#00C753", "#00D853", "#00C753", "#00D853","#00C753", "#00D853", 
   
  ];
  

  // Define the number of smileys
  const numSmileyIcons = 6;

  // Calculate the angle increment for even distribution across the 180-degree arc
  const angleIncrement = 180 / (numSmileyIcons -0.5);

  // Define positions for your custom SVGs
  const svgPositions = [
    { src: anger, alt: "Anger" },
    { src: appreciation, alt: "Appreciation" },
    { src: boredom, alt: "Boredom" },
    { src: disappointed, alt: "Disappointed" },
    { src: joy, alt: "Joy" },
    { src: overwhelmed, alt: "Overwhelmed" },
  ];

  const radius = 160; 

  const calculatePosition = (angle: number) => {
    // Convert angle to radians
    const angleInRadians = (angle * Math.PI) / 180;
    // Calculate the X and Y positions based on the angle
    const x = radius * Math.cos(angleInRadians); // X coordinate
    const y = radius * Math.sin(angleInRadians); // Y coordinate
    return { x, y };
  };

  return (
    <div style={{ position: "relative",top:"0",right:'0',left:"100" }}>
      <ReactSpeedometer
        minValue={0}
        maxValue={30}
        value={value }
        segments={6}
        segmentColors={segmentColors}
        arcPadding={0.8}
        ringWidth={20}
        needleColor="black"
        needleHeightRatio={0.6}
        needleBaseWidth={20}
        needleTransition="easeElastic"
        needleTransitionDuration={1000}
        textColor="transparent"
        valueTextFontSize="0"
      />

      {/* Overlay custom SVGs evenly along the arc */}
      {svgPositions.map((item, index) => {
        // Calculate angle for each smiley (starts at 0 and increments by angleIncrement)
        const angle = angleIncrement * index;
        // Calculate the X and Y position based on the angle
        const { x, y } = calculatePosition(angle);
        return (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,  // Adjust the left position based on x
              top: `calc(50% - ${y}px)`,   // Adjust the top position based on y
              width: "25px",               // Adjust size as needed
              height: "25px",
              transform: "translate(-50%, -50%)", // Ensure centering of image
            }}
          />
        );
      })}
    </div>
  );
};
