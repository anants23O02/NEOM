    import Switch from "@mui/material/Switch";

export const ToggleButton: React.FC = () => {
  return (
    <>
    <Switch
      sx={{
        width: 55, // Track width
        height: 30, // Track height
        padding: 0, // Padding for the track
        "& .MuiSwitch-switchBase": {
          padding: 0.2, // Adjust the padding for the thumb
          "&.Mui-checked": {
            transform: "translateX(26px)", // Move thumb when checked
            color: "#fff",
            "& + .MuiSwitch-track": {
              backgroundColor: "rgb(255,0,0)", // Green when checked
            },
          },
        },
        "& .MuiSwitch-track": {
          borderRadius: 50, // Round edges of the track
          backgroundColor: "#ccc", // Default grey color
          opacity: 1, // Full opacity
        },
        "& .MuiSwitch-thumb": {
          width: 25, // Thumb width
          height: 25, // Thumb height
        },
      }}
    />
    </>
  );
};
