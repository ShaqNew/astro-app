import React from "react";
import SunClock from "./sunClock/sunClock";
import "./dayView.scss"

const DayView = (astroData:any) => {
    const {astro} = astroData?.astroData?.astroData?.astronomy
    const {sunrise, sunset, moonrise, moon_illumination, moon_phase} = astro




    return (
        <div className="day">
            <div className="day__info">
                <div className="sunInfo">
                    <div className="sunInfo__rise">
                        Sun Rise: {sunrise}
                    </div>
                    <div className="sunInfo__set">
                        Sun Set: {sunset}
                    </div>
                </div>
                <div className="moonInfo">
                    <div className="moonInfo__rise">
                        Moon Rise: {moonrise}
                    </div>
                    <div className="moonInfo__illumination">
                        Moon Illumination: {moon_illumination}
                    </div>
                    <div className="moonInfo__phase">
                        Moon Phase: {moon_phase}
                    </div>
                </div>
            </div>
            <div className="day__dial">
                <SunClock astroData={astro}/>
            </div>
        </div>
    )
}

export default DayView;