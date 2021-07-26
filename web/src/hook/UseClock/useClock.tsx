import { useEffect, useState } from "react";


export default function useClock() {
    const [time, setTime] = useState("");

    const updateTimeNow = () => {
        const d = new Date();
        const hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
        const minutes = d.getMinutes();
        const timeMockUp = d.getHours() > 12 ? "PM" : "AM";
        return `${hour}:${minutes} ${timeMockUp}`
    };

    useEffect(() => {
        setTime(updateTimeNow());
    }, []);

    return time;
}