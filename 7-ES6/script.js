// Coding Challenge 8

////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

//Create super class
class TownProp {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }

    calcAge() {
        var age = new Date().getFullYear() - this.buildYear;
        return age;
    }
}

//Create street subclass
class Street extends TownProp {
    constructor(name, buildYear, slength, sizeClass = 'normal') {
        super(name, buildYear);
        this.slength = slength;
        this.sizeClass = sizeClass;
    }
}


// create parks subclass
class Park extends TownProp {
    constructor(name, buildYear, trees, area) {
        super(name, buildYear);
        this.trees = trees;
        this.area = area;
    }

    treeDensity() {
        return this.trees / this.area;
    }
}

const park1 = new Park('Wilson', 1965, 700, 1000);
const park2 = new Park('Lever', 1972, 900, 8000);
const park3 = new Park('Sawyer', 1982, 1200, 12000); 

const parks = [park1, park2, park3];

const street1 = new Street('Sterling', 1945, 900);
const street2 = new Street('Waterworks', 1990, 2700, 'big');
const street3 = new Street('Stockton', 1958, 42500, 'huge');
const street4 = new Street('Salem', 1978, 700, 'small');

const streets = [street1, street2, street3, street4];

function streetReport(streets) {
    console.log('--Street Report--');

    // log total length of all streets
    let totalLength = 0;
    streets.forEach(street => 
        totalLength =+ street.slength);
    console.log(`The total length of all streets is ${totalLength} ft.`);

    // log avg length
    console.log(`The average length of a street is ${totalLength / streets.length} ft.`);

    //log size classification of every street 
    for (street of streets){
        console.log(`${street.name} Street is classified as ${street.sizeClass}.`);
    }

    // calc average age of streets 
    avgAge(streets);    
}

function parkReport(parks) {
    console.log(`--Park Report--`);

    //log tree density
    parks.forEach(park => {
        console.log(`The density of ${park.name} Park is ${park.treeDensity()} trees per sq. ft.`);
    });

    //log average age of parks
    avgAge(parks);

    //Print park with over 1000 trees
    for (park of parks) {
        if (park.trees > 1000) {
            console.log(`${park.name} Park has ${park.trees} trees.`)
        } 
    }    
}

function avgAge(props) {
    let sum = 0;
    for (let prop of props) {
        sum += prop.calcAge()
    }
    console.log(`The average age is ${sum / props.length} years.`)
}


parkReport(parks);
streetReport(streets)




































