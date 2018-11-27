var age = 21;

if (age >= 21) {
    console.log ('You are allowed to buy beer');
};

if (6 % 2 == 0) {
    console.log('number is even');
};

if (5 % 2 ==0) {
    console.log('Number is even');
} else {
    console.log('Number is odd');
}

// * If a patron is older than `21`, print out `"Come on in!"`.
// * If a patron is between `18` and `21`, print out `"Come on in (but no drinking)!"`.
// * If a patron is younger than 18, print out `"You're too young to be in here!"`.
// * If a patron is older than 75, print out `"Are you sure you want to be here?"`.

var patronAge = 17;
var hasID = false;

if (hasID) {
    if (patronAge > 75) {
        console.log('Are you sure you want to be here?');
    } else if (patronAge > 21) {
        console.log("Come on in!");
    } else if (patronAge > 18) {
        console.log("Come on in (but no drinking)!");
    } else {
        console.log("You're too young to be in here!");
    }
} else {
    console.log("No ID, No Entry.");
}

var speed = 123;
var tirePressure = 10;
var driverVision = [6,6];

// if (speed > 10) {
//     console.log("I pulled you over because you were going too slow");
// } else if (speed > 50) {
//     console.log("I pulled you over for going too fast");
// }

// if (tirePressure < 10) {
//     console.log("I pulled you over because you are driving with a flat tire");
// }

// if (driverVision[1] > 12) {
//     console.log("Sorry you can't drive");
// }

// if (driverVision[1] < 6) {
//     speed = 60;
// }

// // if (speed > 50 && (tirePressure < 10 || tirePressure > 100)) {
// //     console.log("car crash");
// // }

// if (speed < 10 && tirePressure > 100) {
//     console.log("rolling to a stop");
// }

// // if (driverVision[1] < 12 && speed > 50) {
// //     console.log("car crash");
// // }


var speed = 40;
var tirePressure = 10;
var driverVision = [6,8];


function trafficStopCheck(speed, tirePressure, driverVision) {
    if ((speed > 50 && (tirePressure < 10 || tirePressure > 100)) || (driverVision[1] < 12 && speed > 50)) {
            console.log("car crash");
        } else if (speed < 10 && tirePressure > 100) {
            console.log("rolling to a stop");
        } else if (tirePressure < 10) {
            console.log("I pulled you over because you are driving with a flat tire");
        } else if (speed > 10) {
            console.log("I pulled you over because you were going too slow");
        } else if (speed > 50) {
            console.log("I pulled you over for going too fast");
        }
}

if (driverVision[1] > 12) {
    console.log("Sorry you can't drive");
    } else if (driverVision[1] <= 6) {
        speed = 60;
        trafficStopCheck(speed, tirePressure, driverVision);
    } else {
        trafficStopCheck(speed, tirePressure, driverVision);
    }