import { Component } from "react";
import RadioButton from "./RadioButton";
import LiveIndicator from "./liveIndicator";

export default class Leftbar extends Component {
    render() {
        return (
            <div className="leftbar" style={{display: "flex", flexDirection: "row", columnGap: "10px"}}>
                <div style={{display: "flex", flexDirection: "column", rowGap: "10px"}}>
                    {"programming".split().join(<br/>)}
                </div>
            </div>
            
        )
    }
}