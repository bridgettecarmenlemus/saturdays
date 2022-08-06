// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


let num = 34561872359347;

function digitize(n){
    let strOfNum = n.toString();
    let splitStr = strOfNum.split("");
    let arrayOfNum = splitStr.reverse();
    let backwardsNum = arrayOfNum.map(Number)
    return backwardsNum
}

console.log(digitize(num));