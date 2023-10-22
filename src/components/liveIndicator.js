import { useState } from "react";

export default function LiveIndicator(props) {
    const [active, setActive] = useState(true);

    return (
        <div style={{
            width: "43px",
            height: "43px",
            backgroundColor: active && "red",
            border: !active && "5px white solid",
            borderRadius: "1000px",
        }} className="blinkAni" />
    )
}