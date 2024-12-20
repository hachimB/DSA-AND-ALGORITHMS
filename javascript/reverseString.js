const {Stack} = require('./stack.js');

const s = new Stack();

const str = "string To reverse";

const reverse = (str) => {
    let arr = str.split("");
    let arr2 = []

    for(const elem of arr){
        s.push(elem);
    }

    for(let i = 0; i < arr.length; i++) {
        arr2.push(s.pop());
    }

    const string = arr2.join("")
    return string; 

}

console.log(reverse(str));