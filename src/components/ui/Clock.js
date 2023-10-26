import { useCallback, useState, useEffect } from "react";
import "./Clock.css";

function Clock({ 
    title = "", 
    ...props 
}) {
    const [date, setDate] = useState(new Date());

    const generateTime = useCallback(() => {
        let hh = date.getHours(),
            mm = date.getMinutes(),
            ss = date.getSeconds(),
            tm = hh > 12 ? "PM" : "AM";

        let yy = date.getFullYear(),
            oo = date.getMonth(),
            tt = date.getDate(),
            dd = date.getDay();

        const months = Object.freeze([
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]);

        const days = Object.freeze([
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]);

        hh = hh === 0 ? 12 :
            (hh > 12 ? hh - 12 : hh);

        tt = `${tt < 10 ? `0${tt}` : tt}`;
        hh = `${hh < 10 ? `0${hh}` : hh}`;
        mm = `${mm < 10 ? `0${mm}` : mm}`;
        ss = `${ss < 10 ? `0${ss}` : ss}`;

        return Object.freeze({
            year: yy,
            month: months[oo],
            day: tt,
            dotw: days[dd],
            hour: hh,
            minute: mm,
            second: ss,
            period: tm
        });
    }, [date]);

    const time = generateTime(date);

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock" id="clock" {...props}>
            {title && <h3 className="clock-title" id="clock-title">{title}</h3>}
            <div className="clock-date" id="clock-date">
                <span className="clock-dotw">{time.dotw}</span>
                <span className="clock-day">{time.month} {time.day}, {time.year}</span>
            </div>
            <div className="clock-time" id="clock-time">
                <span className="clock-hours">{time.hour}</span>
                <span className="clock-separator">:</span>
                <span className="clock-minutes">{time.minute}</span>
                <span className="clock-period">{time.period}</span>
            </div>
        </div>
    );
}

export default Clock;