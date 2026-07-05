const arr = [8, 3, -12, 1, 6];

function smallest(arr){
    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i];
        }
    }
    console.log(smallest);
}
smallest(arr);