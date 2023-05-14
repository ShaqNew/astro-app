import React from "react";
import DayView from "./day/dayView";
import NightView from "./night/nightView";
import { IAstroData } from "../utils/dataTypes";
import { timeReformat } from "../utils/timeReformat";
import "./display.scss"

const Display = (astroData:any) => {
    const {sunset} = astroData.astroData.astronomy.astro
    console.log("display props: ", astroData)
    // // console.log("display astro: ", astroData.astroData)
    // console.log("display props: ", sunset)

    let sunsetTime = timeReformat(sunset).getTime()
    let currentTime = new Date().getTime()


    
    return (
        <div className="display">
            {sunsetTime>currentTime?
            <DayView astroData={astroData}/>:
            <NightView astroData={astroData}/>
            }
        </div>
    )
}

export default Display;