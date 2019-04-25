import React from "react";
import YouTube from "./YouTube";
import Facebook from "./Facebook";
import FacebookWithBg from "./FacebookWithBg";
import Instagram from "./Instagram";
import Arrow from "./Arrow";
import Globe from "./Globe";
import Checked from "./Checked";

function Icon(props) {
  switch (props.symbol) {
    case "youtube":
      return <YouTube {...props} />;
    case "facebook":
      return <Facebook {...props} />;
    case "facebook-bg":
      return <FacebookWithBg {...props} />;
    case "instagram":
      return <Instagram {...props} />;
    case "arrow":
      return <Arrow {...props} />;
    case "checked":
      return <Checked {...props} />;
    case "globe":
      return <Globe {...props} />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
