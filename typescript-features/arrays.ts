const carMarkers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMakes = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Help with inference when extracting values 
const car = carMarkers[0];
const myCar = carMarkers.pop(); 

// Prevent incompatible values 
carMarkers.push(100);

// Help with 'map'
carMarkers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const imptDates: (string | Date)[] = [new Date()];
imptDates.push('2030-10-10'); //ok
imptDates.push(new Date()); //ok 

