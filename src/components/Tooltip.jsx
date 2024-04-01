import React, { useState } from "react";

const Tooltip = ({ position, text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
//defined usestate for keeping the state of entering a mouse event in a bollean context
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };
//switch case for handling the position of the switch case in the hovering scenario
  const getTooltipStyle = () => {
    switch (position) {
      case "top":
        return {
          bottom: "100%",
          left: "50%",
          transform: "translateX(-50%)",
        };
      case "bottom":
        return {
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
        };
      case "right":
        return {
          top: "50%",
          left: "100%",
          transform: "translateY(-50%)",
        };
      case "left":
        return {
          top: "50%",
          right: "100%",
          transform: "translateY(-50%)",
        };
      default:
        return {};
    }
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {children}
      {isVisible && text && (
        <div
          className="tooltip"
          style={{
            position: "absolute",
            padding: "0.5rem",
            background: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
            borderRadius: "4px",
            zIndex: 999,
            ...getTooltipStyle(),
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
