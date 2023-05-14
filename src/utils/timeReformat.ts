
export const timeReformat = (timeString:string) => {
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":");

    if (hours === "12") {hours = "00";}
    if (modifier === "PM") {
        hours = (parseInt(hours, 10) + 12).toString();
    }

    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date
}