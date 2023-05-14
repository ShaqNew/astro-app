

export const getAstroData = async () => {
    return await fetch("http://api.weatherapi.com/v1/astronomy.json?key=e3696a7c69d74b22a64140658231603&q=England&aqi=no")

    // try {
    //     let response = await fetch("http://api.weatherapi.com/v1/astronomy.json?key=e3696a7c69d74b22a64140658231603&q=Engl0and&aqi=no")
    //     console.log("Data fetched: ", response)
    //     return response
    // } catch (error) {
    //     console.log("ERROR: ", error)
    //     return error
    // }
};