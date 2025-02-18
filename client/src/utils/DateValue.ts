

export const ConvertDate = (date:Date) => {

    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return [year,month,day,hours,minutes];
}