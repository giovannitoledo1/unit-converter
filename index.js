/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById("convert-el")
const userInput = document.getElementById("input-el")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")
const clearEl = document.getElementById("clear-el")
let isAlive = false

convertEl.addEventListener("click", function (){
    let feet = userInput.value * 3.281
    let meter = userInput.value / 3.281
    let gallons = userInput.value * 0.264
    let liters  = userInput.value / 0.264
    let pounds = userInput.value * 2.204
    let kilogram = userInput.value / 2.204
    
    if( isAlive === false) {
        lengthP.innerHTML += `${userInput.value} meters = ${feet.toFixed(3)} feet | ${userInput.value} feet = ${meter.toFixed(3)} meters`
        volumeP.innerHTML += `${userInput.value} liters = ${gallons.toFixed(3)} gallons | ${userInput.value} gallons = ${liters.toFixed(3)} liters`
        massP.innerHTML += `${userInput.value} kilos = ${pounds.toFixed(3)} pounds | ${userInput.value}pounds = ${kilogram.toFixed(3)} kilos`
        isAlive = true
    }
})

clearEl.addEventListener("click", function (){
    userInput.value = "";
    lengthP.innerHTML = "";
    volumeP.innerHTML = "";
    massP.innerHTML = "";
    isAlive = false
    
})