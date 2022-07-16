// The FizzBuzz problem is a classic test given in coding interviews. 
// The task is simple: Print integers 1 to N, but print "Fizz" if an integer is divisible by 3,
//  "Buzz" if an integer is divisible by 5, and "FizzBuzz" if an integer is divisible by both 3 and 5.

function FizzBuzz = (n) {
    for (let i=1;. i<=n; i++){
    if (n%3===0 && n%5===0){
        print "FizzBuzz"
    } else if (n%3 === 0) {
        print 'fizz'
    } else if (n%5 === 0) {
        print 'buzz'
    }
    else print n
}
}
FizzBuzz ()