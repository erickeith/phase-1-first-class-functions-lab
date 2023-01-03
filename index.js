// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return fare => fare * x
}

function fareDoubler(fare) {
    const doubler = fare * 2;
    return doubler;
}

function fareTripler(fare) {
    const tripler = fare * 3;
    return tripler
}

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers)
}