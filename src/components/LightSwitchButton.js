import React, { useState } from "react";

function LightSwitchButton(props) {
  // const [light, setLight] = useState('off');
  const {light, switchLight} = props;

  return (
    <button className="LightSwitchButton" onClick={switchLight}>
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}
export default LightSwitchButton;