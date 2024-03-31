import React from "react";
import Tooltip from "./components/Tooltip";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Tooltip position="bottom" text="This is a tooltip">
        <button
          style={{
            padding: "10px",
            backgroundColor: "red",
            color: "yellow",
            borderRadius: "85px",
          }}
        >
          BUTTON
        </button>
      </Tooltip>
    </div>
  );
};

export default App;
