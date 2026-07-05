let arr = [];
let target;

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`Position : ${i + 1}`);
            console.log(`Index : ${i}`);
            return;
        }
    }
    console.log(`${target} is not found`);

}

linearSearch([12, 5, 8, 19, 3], 10)