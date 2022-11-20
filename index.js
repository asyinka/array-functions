
//this function returns numbers between a given range
function range(startNumber, EndNumber, increment = startNumber < EndNumber ? 1 : -1){
    let arrays = [];
    if(increment > 0) {
    for (let i = startNumber; i <= EndNumber; i += increment) {
        arrays.push(i);    
    }}
    else {
        for (let i = startNumber; i >= EndNumber; i += increment)
            arrays.push(i);
        
    }
    return arrays;
}
//console.log(range(1, 10, 2))
//console.log(range(10, 2));

//this function gives he sum of an array of number
function sum(Arrayset){
    let total = 0;
    for (let value of Arrayset) {
        total += value;
    }
    return total;
}
//console.log(sum([1,2,3]));

console.log(sum(range(-10, -1)));

//this function reverses an array

function reverseArray(array){
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i])
    }
    return reversedArray;
}

//this function reset the order of an array by interchanging there position
function reverseArrayInPlace(array){
    ArrayFromBack = [];
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let hold = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = hold;
    }
    return array
}

console.log(reverseArrayInPlace([1,2,3,4,5,6]));
