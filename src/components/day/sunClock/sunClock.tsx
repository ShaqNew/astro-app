import React from "react";
import sun from "../../../utils/sun.png"
import { timeReformat } from "../../../utils/timeReformat";
import "./sunClock.scss"

const SunClock = (astroData:any) => {
    const {sunrise, sunset} = astroData?.astroData


    // const timeReformat = (timeString:string) => {
    //     const [time, modifier] = timeString.split(" ");
    //     let [hours, minutes] = time.split(":");

    //     if (hours === "12") {hours = "00";}
    //     if (modifier === "PM") {
    //         hours = (parseInt(hours, 10) + 12).toString();
    //     }

    //     const date = new Date();
    //     date.setHours(parseInt(hours, 10));
    //     date.setMinutes(parseInt(minutes, 10));
    //     return date
    // }


    let rise = timeReformat(sunrise).getTime()
    let set = timeReformat(sunset).getTime()
    let current = new Date().getTime()
    // console.log("Rise: ",rise)
    // console.log("Set: ",set)
    // console.log("Current: ",current)

    let timespan = set - rise
    // let remaining = set - current
    let elapsed = current - rise
    let percentage = (elapsed/timespan)
    let degrees = (percentage*180)-90


    // console.log(timespan)
    // console.log(elapsed)
    console.log("percentage: ", percentage)
    // console.log("Degrees: ", degrees)

    const rotated = document.getElementById('sunDial')
    if(rotated)
    rotated.style.transform = 'rotate('+degrees+'deg)';
    if(rotated)
    rotated.style.transformOrigin = 'bottom';
    return (
        <div id="sunDial" className="sunDial">
            <img className='day__sun' src={sun} alt=""/>
        </div>
    )
}

export default SunClock;