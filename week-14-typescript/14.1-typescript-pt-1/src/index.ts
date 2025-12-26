let x: number = 1;
console.log(x);


function greet(firstName: string) {
    console.log("Hello " + firstName);
}
greet("srinc");


function isLegall(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}
console.log(isLegall(2));


function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}
delayedCall(function() {
    console.log("hi there");
})