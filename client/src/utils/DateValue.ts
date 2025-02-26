export const ConvertDate = (dateInput: string | Date) => {
    console.log('dateInput :>> ', dateInput);
    
    if (!dateInput) {
        console.error("Invalid date input:", dateInput);
        return null;
    }

    const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

    if (isNaN(date.getTime())) {
        console.error("Invalid date:", dateInput);
        return null;
    }

    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    console.log('year,month,day,hours,minutes :>> ', year, month, day, hours, minutes);
    return [year, month, day, hours, minutes];
};
