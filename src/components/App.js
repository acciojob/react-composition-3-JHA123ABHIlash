import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Tooltip text="This is a tooltip">
        <div><h2 className="tooltip">Hover over me.</h2></div>
      </Tooltip>

      <Tooltip text="This is another tooltip">
        <div><p className="tooltip">Hover over me to see another tooltip</p></div>
      </Tooltip>
    </div>
  );
};

export default App;
