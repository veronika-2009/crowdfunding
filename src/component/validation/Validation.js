export const required = value => {
 if(value) return undefined;
 return "Field is required";
}
export const maxLengthCreator = (maxLength) => (value) =>{
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
export const maxDaysCreator = (maxDays) => (value) =>{
    if (value > maxDays) return `Max ${maxDays} days`;
    return undefined;
}
export const minDaysCreator = (minDays) => (value) =>{
    if (value < minDays) return `Min ${minDays} days`;
    return undefined;
}
