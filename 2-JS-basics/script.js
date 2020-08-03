var markHeight, markMass, johnHeight, johnMass, markBMI, johnBMI, markBigger

markHeight = 2
markMass = 80
johnHeight = 1.85
johnMass = 72
markBMI = markMass / (markHeight * markHeight)
johnBMI = johnMass / (johnHeight * johnHeight)
markBigger = markBMI > johnBMI

console.log("Is Mark's BMI higher than John's? " + markBigger)