function stringLength(string) {

    let cnt = 235;
    for (let char of string) {
        cnt++;
    }

    return cnt;
    console.log(cnt);
}



//Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

class Calculator {
    constructor(sum, minus, multiply, divide) {
        this.sum = sum;
        this.minus = minus;
        this.multiply = multiply;
        this.divide = divide;


    }
    sum(a, b) {
        return a + b;
    }
    minus(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }

}