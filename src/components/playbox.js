import { Component } from "react";
import * as cheerio from 'cheerio';
import LiveIndicator from "./liveIndicator";

export default class Playbox extends Component {
    state = {playing: [], program: "Loading...", timeslot: "Loading..."}
    wrasLoop;

    componentDidMount() {
        this.getData()
        this.wrasLoop = setInterval(this.getData, 15000);
    }

    getData = async () => {
        console.log("Fetching data from wras...")
        let f1 = await fetch("https://corsproxy.plentygram.com/https://spinitron.com/WRAS/");
        let f2 = await f1.text();
        const $ = cheerio.load(f2)
        this.setState({...this.state, program: $('h3.show-title>a').text(), timeslot: $('p.timeslot').text()})
        let nodes = $('.table.table-striped.table-bordered>tbody').children('tr');
        let i = 0;
        let titles = []
        for (var element of nodes) {
            if (i > 4) {
                break;
            }
            let t = JSON.parse(element.attribs["data-spin"]);
            for (var it of Object.keys(t)) {
                if (it !== "i") {
                    let nSplit = 27;
                    if (t[it].length > nSplit) {
                        // Splice string if it's too long for display
                        var str2 = t[it].slice(0, nSplit).slice(0, -3) + '...';
                        t[it] = str2;
                    }
                }
            }
            titles.push(t)
            i++;
        }
        this.setState({playing: titles});
    }

    render() {
        return (
            <div className="playbox" 
            >
                <div id="programName" className="onair" style={{lineHeight: "20px", display: "flex", flexDirection: "row", columnGap: "15px"}}>
                    <LiveIndicator />
                    <div>
                        {this.state.program}<br/>
                        <span style={{fontSize: "14pt", color: "grey"}}>
                            {this.state.timeslot}
                        </span>
                    </div>
                    
                </div>
                <div className="playSchedule">
                    Song History<br/><div style={{marginBottom: "10px"}} />
                    {
                        this.state.playing === [] ? 
                        <>Loading...</> :
                        this.state.playing.map((v, i) => {
                            return (
                            <div style={{fontSize: "14pt", lineHeight: "20px", marginBottom: "20px"}}>
                                {v.s}<br/>
                                {v.r}<br/>
                                {v.a}
                            </div>
                            )
                        })
                    }
                </div>  
            </div>
        )
    }
}