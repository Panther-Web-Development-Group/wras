import { useState, useEffect } from "react";
import * as cheerio from "cheerio";
import LiveIndicator from "./LiveIndicator";
import "./Player.css";
import RadioPlayer from "./RadioPlayer";

function Player({ max = 5 }) {
    const [program, setProgram] = useState("");
    const [timeslot, setTimeslot] = useState("");
    const [playing, setPlaying] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch("https://corsproxy.plentygram.com/https://spinitron.com/WRAS/");
            const html = await response.text();

            const $ = cheerio.load(html);

            const program_name = $("h3.show-title > a").text();
            const timeslot_text = $("p.timeslot").text();

            const nodes = $("#public-spins-0 > .table > tbody").children("tr[data-spin]");
            
            const titles = Array.from(nodes).reduce((arr, element, index) => {
                if (index >= max) return arr;
                const title = JSON.parse(element.attribs["data-spin"]);
                const spinTime = $(element).find(".spin-time").text();
                const label = $(element).find(".label").text();

                Object.keys(title).forEach(key => {
                    if (key === "i") return;
                    let nspl = 27, str = title[key];
                    if (title[key].length > nspl) str = `${str.slice(0, nspl).slice(0, -3)}...`;
                    title[key] = str;
                });

                title["l"] = label;
                title["t"] = spinTime;

                arr.push(title);
                return arr;
            }, []);

            setProgram(program_name);
            setTimeslot(timeslot_text);
            setPlaying(titles);
        } catch {
            setProgram("No program available.");
            setTimeslot("No timeslot available.");
            setPlaying([]);
        }
    };

    useEffect(() => {
        getData();
        const loop = setInterval(() => getData(), 15000);
        return () => { return clearInterval(loop); }
    }, []);

    return (
        <section className="player" id="player">
            <header className="program-name" id="program-name">
                <LiveIndicator active={true} />
                <RadioPlayer />
                <div className="program-info" id="program-info">
                    <h3 className="program-title" id="program-title">{program}</h3>
                    <h4 className="program-timeslot" id="program-timeslot">{timeslot}</h4>
                </div>
            </header>
            <div className="play-schedule" id="play-schedule">
                <h3 className="play-schedule-title" id="play-schedule-title">Song History</h3>
                <div className="play-schedule-main" id="play-schedule-main">
                    {
                        Array.from(playing).length === 0 ?
                        <>Loading...</> :
                        <>
                        <ul className="play-schedule-list" id="play-schedule-list">
                            {
                                playing.map((v, i) => (
                                    <li className="play-schedule-program" id={`program-${i}`} key={v.s}>
                                        <h4 className="play-schedule-program__heading">
                                            <em className="play-schedule-program__artist">{v.a}</em>
                                            <span className="play-schedule-program__title">{v.s}</span>
                                        </h4>
                                        <div className="play-schedule-program__details">
                                            <strong className="play-schedule-program__time">{v.t}</strong>
                                            <em className="play-schedule-program__album">{v.r}</em>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        </>
                    }
                </div>
            </div>
        </section>
    );
}

export default Player;