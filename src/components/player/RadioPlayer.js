import { FaPlay, FaPause } from "react-icons/fa";
import { useRef, useState } from "react";

function RadioPlayer({ 
    className = "", 
    ...props 
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const player = useRef(null);

    const update = () => {
        if (isPlaying) player.current.pause();
        else player.current.play();

        setIsPlaying(!isPlaying);
    };

    return (
        <div className={`radio-player${className ? ` ${className}`: ""}`} id="radio-player" {...props}>
            <audio id="radio-player__audio" className="radio-player__audio" ref={player} src="https://22113.live.streamtheworld.com/WRASFM_SC" />
            <button className="radio-player__button" id="radio-player__button" onClick={update}>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
        </div>
    );
}

export default RadioPlayer;