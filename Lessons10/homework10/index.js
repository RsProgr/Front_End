// Задача 1
// Создайте массив строк и выведите в консоль его длину, первый и последний элементы массива

let colors = ["red", "green", "purple", "yellow", "blue"];
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);

// Задача 2
// Создайте новый массив на основе массива [1, 2, 3, 4, 5, 6], в который будут входить только четные числа из заданного массива


let numbers = [1, 2, 3, 4, 5, 6];
let outputOfEvenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        outputOfEvenNumbers.push(numbers[i]);
    }
}
console.log(outputOfEvenNumbers);

// Задача 3*
// Найдите максимально и минимальное значения из массива [3, 7, 2, 9, 4] и вывидите их в консоль. ! 
// Не используя математические методы max и min, только циклы

let numbers2 = [3, 7, 2, 9, 4];
let max = numbers2[0];
let min = numbers2[0];

for(let num of numbers2){
if(num > max){
    max = num;
}
if(num < min){
    min = num
}
}
console.log(max);
console.log(min);