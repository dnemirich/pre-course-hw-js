const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

for (const arr of numbers) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) {
            arr.splice(i, 1);
        }
    }
}

console.log(numbers);