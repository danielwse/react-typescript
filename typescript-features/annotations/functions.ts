const add = (a: number, b: number): number => {
    return a + b;
};

// don't need to annotate return type because TS can infer it

const subtract = (a: number, b: number) => {
    a - b; // return type is void - if we had annotated, would've avoided the mistake of forgetting to return 
}

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => { //never going to execute the function. rare that is used.
    throw new Error(message);
};

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

// destructuring functions 
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};