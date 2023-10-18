import { useRef, useState } from "react"

export default function RadioButton(props) {
    const [src, setSrc] = useState("play.svg");
    const player = useRef();

    const updateSrc = e => {
        if (src === "play.svg") {
            document.getElementById("wrasPlayer").play();
        } else {
            document.getElementById("wrasPlayer").pause();
        }
        setSrc(src === "play.svg" ? "stop.svg" : "play.svg");
    }


    return (
        <div style={{
            position: "fixed",
            right: "5px",
            bottom: "5px"
        }}>
            <audio id="wrasPlayer" src="http://22113.live.streamtheworld.com/WRASFM_SC" controls={""} style={{"height": "0px", width: "0px"}}/>
            <img className="radioButton" src={"./resources/svg/"+src} alt={src} width={"100px"} style={{filter: "invert(1)"}} onClick={updateSrc} />
        </div>
        
        
    )
}