export function sLength(string) {

    let cnt = 0;
    for (let char of string) {
        cnt++;
    }

    return cnt;
}



export const rString = (str) => {
    return str.split("").reverse().join("");
}


export class Calculator {

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