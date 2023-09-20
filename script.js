function logger (somethingNew) {

    console.log (somethingNew)
}


function theDivOfTwoNumbers (x , y) {

    /* console.log (y / x); */

    let number = 0;
    number = y / x;

    return number;
}

logger (theDivOfTwoNumbers(5 , 10))