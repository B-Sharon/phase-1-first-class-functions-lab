let drivers = [ "Antonia", "Nuru", "Amari", "Mo"];
//returns first two drivers
const returnFirstTwoDrivers =  (drivers) => {return drivers.slice(0,2)}

//returns last two drivers
const returnLastTwoDrivers = (drivers) => {return drivers.slice(2,4)}

//array containing two elements: the two above
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//higher order function
const createFareMultiplier = (multiplier) => (fare) => fare * multiplier

// fare doubler
const fareDoubler = createFareMultiplier(2);

// fare tripler
const fareTripler = createFareMultiplier(3);

// selecting the different drivers
const selectDifferentDrivers = function (drivers, returnDrivers){
    return returnDrivers(drivers)
}