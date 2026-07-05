const arr = [4, 7, 2, 9, 5];

function soe(arr){
    let sum = 0;

    for(let i= 0; i < arr.length; i++){
        sum += arr[i];

    }
    return sum;
}

console.log(soe(arr));