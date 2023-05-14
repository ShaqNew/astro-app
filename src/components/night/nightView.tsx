import React from "react";

const NightView = (astroData:any) => {
    const {astro} = astroData?.astroData?.astroData?.astronomy
    const {moonrise, moonset} = astro

    return(
        <div className="night">
            <div className="night__info">
                
            </div>
        </div>
    )
}

export default NightView;