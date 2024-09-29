const array = [3, 7, 2, 9, 4];

let max = array[0];
let min = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
    if (array[i] < min) {
        min = array[i];
    }
}

console.log("Максимальное значение:", max);
console.log("Минимальное значение:", min);
