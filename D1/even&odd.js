const arr = [4, 7, 2, 9, 5, 8, 10];

let even = [];
let odd = [];

function noOddEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        }
        else {
            odd.push(arr[i])
        }
    }
}

noOddEven(arr);
console.log("Even : ", even);
console.log("Number of Even : ", even.length)
console.log(" ")
console.log("Odd : ", odd);
console.log("Number of Odd : ", odd.length)