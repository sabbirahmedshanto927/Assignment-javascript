// Q-1 : covert feet to miles #feetToMiles

function feetToMiles(feet) {
    let miles = Math.round(feet/5280);
    return Math.abs(miles);
    // round and convert the value of miles
}

let feetValue = feetToMiles(-56845);
console.log(feetValue, "miles");




// Q-2 count total wood  #woodCalculator

function woodCalculator(chair, table, bed) {
    let chairWood = Math.abs(chair*1);
    let tableWood = Math.abs(table*3);
    let bedWood = Math.abs(bed*5);
    // furniture can't be negative numbers
    let totalWood = Math.ceil(chairWood + tableWood + bedWood);
    //if we need extra wood thats why I ceiled the total number
    return totalWood;
}
let woodTotal = woodCalculator(2.1, -4.6, 6.8);
console.log("Total wood: ",woodTotal);




// Q-3 count total bricks for the building   #brickCalculator

function brickCalculator(n) {
    if (n<=10) {
        var totalBrick = Math.ceil(n*15*1000);
        return totalBrick;
    }
    if (n<=20) {
        let totalBrick = Math.ceil(10*15*1000 + (n-10)*12*1000);
        return totalBrick;
    } 
    else if (n>20) {
        let totalBrick = Math.ceil(10*15*1000+ 10*12*1000 + (n-20)*10*1000);
        return totalBrick;
    }
    // ceil all for extra bricks if needed.
}

let floorNo = brickCalculator(50.58);
console.log("total brick: ",floorNo);




// Q-4 find the shortest name   #tinyFriend

function tinyFriend(names) {
    let shortestName = names[0];
    for (let i = 0; i < names.length; i++) {
        let currentName = names[i];
        if (currentName.length < shortestName.length || currentName.length == shortestName.length) {
            shortestName = currentName;
            /**try to add if we have two or more than two shortest names 
             * how to give all in output.. but can't do that.  */
        }
    }
    return shortestName;
}

let friends = ["Mina", "Kanta", "Rishita", "Rup", "Kuddus"];
let miniName = tinyFriend(friends);
console.log("Tiny Friend's name is", miniName);

/**  Hope you like my coding.
 * Thank you. */