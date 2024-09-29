// Задача 1
// У вас есть массив чисел [2, 4, 6, 8, 10]. 
// Напишите функцию для удвоения каждого значения в массиве (массив нужно передать аргументом) и вывода результата в консоль.
// Вызовите функцию для демонстрации результата

let numbersArray = [2, 4, 6, 8, 10];
function multiplyByTwo(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
}
multiplyByTwo(numbersArray);
console.log(numbersArray);

// Задача 2
// Напишите функцию, которая принимает строку и число n, 
// а затем возвращает первые n символов строки. 
// Для отображения результа работы функции, 
// вызовите её три раза с различными параметрами, 
// результат каждого вызова присвойте отдельной переменной 
// и выведите переменные в консоль

function getFirstNCharacters(inStr, n = inStr.length) {
    return inStr.substring(0, n);
  }
let exampleStr = "Welcome to the world of JavaScript!";
  let result1 = getFirstNCharacters(exampleStr, 1);
  let result2 = getFirstNCharacters(exampleStr, 40);
  let result3 = getFirstNCharacters(exampleStr); 
  console.log(
`1-я строка - ${result1}; 2-я строка - ${result2}; 3-я строка - ${result3}`
  );

// Задача 3*
// У вас есть массив чисел [10, 15, 20, 25, 30]. 
// Напишите функцию для вычисления среднего значения элементов массива 
// (массив нужно передать аргументом) и вывода результата в консоль. 
// Вызовите функцию для демонстрации результата

let number = [10, 15, 20, 25, 30];
function calculateAverage(array){
    let  result4 = 0;
    for(let num of array){
        result4 += num;
    }
    let result5 = result4 / array.length;
    return result5;
}console.log(calculateAverage(number));