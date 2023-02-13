// object
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Type alias 
type Drink = [string, boolean, number]; // creating a tuple structure to prevent order from messing up 

const pepsi: Drink = ['brown', true, 40]; 
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Better to use an object instead of a tuple, not so intuitive what the number means. 
const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
}