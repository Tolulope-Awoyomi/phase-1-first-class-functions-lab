// Code your solution in this file!
const returnFirstTwoDrivers = function() {
    const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo']);
    return drivers.splice(0,2);
}

const returnLastTwoDrivers = function() {
    const drivers =  (['Antonia', 'Nuru', 'Amari', 'Mo']);
    return drivers.splice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


/*const createFareMultiplier = x => x;
const fareMultiplier = createFareMultiplier.map(x => x * x); */

const createFareMultiplier = function(x) {
    console.log ("x", x)
    return function(fare) {
        console.log ("fare", fare)
        return fare * x
    }
}

const fareDoubler = createFareMultiplier(2)
    console.log (fareDoubler(4))

const fareTripler = createFareMultiplier(3)
    
function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {  
    return returnFirstTwoDrivers(drivers);
}