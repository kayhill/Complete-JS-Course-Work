/***********
* Coding Challenge #1
var markHeight, markMass, johnHeight, johnMass, markBMI, johnBMI, markBigger;

markHeight = 2;
markMass = 80;
johnHeight = 1.85;
johnMass = 72;
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
markBigger = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + markBigger);
*/

/***********
 * Coding Challenge #2
 */

 var johnAvg = (89 + 120 + 103) / 3;
 var mikeAvg = (116 + 94 +123) / 3;
 var maryAvg = (97 + 134 + 105) / 3;

 if (johnAvg > mikeAvg && johnAvg > maryAvg) {
     console.log('Winner is John\'s team with ' + johnAvg + ' points.');
 } else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
     console.log('Winner is Mike\'s team with ' + mikeAvg + ' points.');
 } else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
    console.log('Winner is Mary\'s team with ' + maryAvg + ' points.');
} else {
     console.log('The teams are tied.');
 }