let vehicleToGuess = pickAVehicle()

function pickAVehicle() {
    vehicle = allVehiclesDetails[Math.floor(Math.random() * allVehiclesDetails.length)]
    console.log("Look how smart you are opening console")
    console.log(allVehiclesDetails[Math.floor(Math.random() * allVehiclesDetails.length)].name)
    console.log(allVehiclesDetails[Math.floor(Math.random() * allVehiclesDetails.length)].name)
    console.log(allVehiclesDetails[Math.floor(Math.random() * allVehiclesDetails.length)].name)
    console.log(allVehiclesDetails[Math.floor(Math.random() * allVehiclesDetails.length)].name)
    console.log(vehicle.name)
    console.log(allVehiclesDetails[Math.floor(Math.random() * allVehiclesDetails.length)].name)
    console.log(allVehiclesDetails[Math.floor(Math.random() * allVehiclesDetails.length)].name)
    return vehicle
}

function makeGuess(guess) {
    const filtered = allVehiclesDetails.filter(obj => { return obj.name === guess })

    if (guess === vehicleToGuess.name) {
        console.log("name matches");
        return [1,1,1,1,1]
    } else if(filtered.length === 0) {
        console.log("name not in list")
        return [0,0,0,0,0]
    } else {
        let resultArray = []
        let vehicleObject = filtered[0]
        resultArray.push(vehicleToGuess.yearOfManufacture === vehicleObject.yearOfManufacture ? 1 : vehicleToGuess.yearOfManufacture > vehicleObject.yearOfManufacture ? 3 : 2)
        resultArray.push(vehicleToGuess.co2Emissions === vehicleObject.co2Emissions ? 1 : vehicleToGuess.co2Emissions > vehicleObject.co2Emissions ? 3 : 2)
        resultArray.push(vehicleToGuess.cylinderCapacity === vehicleObject.cylinderCapacity ? 1 : vehicleToGuess.cylinderCapacity > vehicleObject.cylinderCapacity ? 3 : 2)
        resultArray.push(vehicleToGuess.fuelType === vehicleObject.fuelType ? 1 : 0 )
        resultArray.push(vehicleToGuess.motFails === vehicleObject.motFails ? 1 : vehicleToGuess.motFails > vehicleObject.motFails ? 3 : 2 )
        return resultArray;
    }
}
