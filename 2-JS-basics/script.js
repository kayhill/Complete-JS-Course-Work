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
 */

 /***********
 * Coding Challenge #3
 
 function tipCalc (amount) {
     if (amount < 50) {
         return amount * .2;
     } else if (amount >= 50 && amount <= 200) {
         return amount * .15;
     } else if (amount > 200) {
         return amount * .1;
     }
 }

 var bill = [124, 48, 268];

 var tips = [tipCalc(bill[0]),
            tipCalc(bill[1]),
            tipCalc(bill[2]),
]

 var totals = [(tips[0] + bill[0]),
                (tips[1] + bill[1]),
                (tips[2] + bill[2])
]

 console.log(tips, totals)
*/

 /***********
 * Coding Challenge #4
 */

 var mark = {
     name: 'Mark',
     height: 2,
     mass: 100,
     calcBmi: function(height, mass) {
         this.bmi = this.mass / (this.height * this.height)
     }
 }
 
 var jane = {
    name: 'Jane',
    height: 1.74,
    mass: 64,
    calcBmi: function(mass, height) {
        this.bmi = this.mass / (this.height * this.height);
    }
}
jane.calcBmi()
mark.calcBmi()

if (mark.bmi > jane.bmi) {
    console.log(`${mark.name} has a BMI of ${mark.bmi}`);
} else if (jane.bmi > mark.bmi) {
    console.log(`${jane.name} has a BMI of ${jane.bmi}`)
} else if (jane.bmi === mark.bmi) {
    console.log(`${mark.name} and ${jane.name} have the same BMI of ${mark.bmi}`)
} else {
    console.log(`An error occured.`)
}

