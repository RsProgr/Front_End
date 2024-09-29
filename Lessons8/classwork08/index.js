console.log("Hello JS");
//создание переменных
let dog = "Sharik"
dog = "Tuzik"
console.log(dog);
const  cat = "Barsik"

//примитивные типы данных
// 1 string

let str1 = "Можно в двойных";
let str2 = 'Можно в одинарных';
let str3 = "13"; // это строка
let str4 = str1 + " " + str2;
console.log(str4);

console.log(str1.toUpperCase()); // перевод в верхний регистр

// 2 number

let num1 = 9;
let num2 = 9.6;

// 3 bigInt // bigint — низкий поклон в сторону крипро- валют, токенов, контрактов.
// Они оперируют большими числами, и там этот тип данных очень пригождается.
// Скорее всего, не пригодится в вашем обычном фронтенде.

let num3 = 1239n;

// 4 boolean

let isDrunk = true;
// условная иснтрукция
if(isDrunk){
    console.log("Ты пьян!");
    }
    const result = isDrunk ? "Ты пьян!" : "Ты не пьян!";
    console.log(result);

    // 5 undefined
    let str5;
    str5 = 12;
    console.log(str5);
    
    // 6 null
    // null = отсутствие значения
    
    let empty = null;
    console.log(empty);

    // 7 symbols
    let s1 = Symbol("что-то");

    // преобразование типов
    // преобразование в строку

    // неявное преобразование

    let str7 = '' +9 ;// "9"
    console.log(typeof str7);

    // явное преобразование
    const num4 = 10;
    let str8 = String(num4); // "10"
    console.log(typeof str8);

    // пример

    const res = 9 + 12 +"5"; // "215"
    console.log(typeof res);
    const res2 = "5" + 9 + 12 // "5912"
    console.log(typeof res2);

    // преобразование в число неявное

    const num5 = +"6"; //6
    const res3 = +"9" + + "10";
    console.log(typeof res3);

    // явное преобразование в число

    const num6 = Number("117"); // 117
    const num7 = Number("129*#"); // Nan - not a Number появляется при неудачном преобразование или неудачный мат операции
    console.log(typeof num7);

    // преобразование в белвое значение
    // число в булевое

    const res4 =  Boolean(9); //true
    const res5 = Boolean(0); // false
    const res6 = Boolean(-1); // true

    // строка в булевое значение 
    const res7 = Boolean(""); // false

    const res8 = Boolean(" "); //true
    const res9 = Boolean(null); // false
    const res10 = Boolean(undefined); // false

    // Равенство строгое и нестрогое
// === строгое равенство
// == нестрогое равенство
// = присвоение

console.log(9 === "9"); // false
console.log(9 == "9"); // true
console.log('b' + 'a' + + 'a' + 'a');

let age = 18;
if(age < 18 ){
    console.log("Вы ещё не совершнннолетний")
}else if (age >= 18 && age < 65){
    console.log("Вы взрослый человек");
    }else{
    console.log("Вы пенсионер");
    }

    let day = 3;
    let dayName;
     switch (day) {
  case 1:
    dayName = "Понедельник";
  case 2:
     dayName = "Вторник";
     break;
  case 3:
    dayName = "Среда";
    break;
  case 4:
     dayName = "Четверг";
     break;
   case 5:
     dayName = "Пятница";
     break;
   case 6:
     dayName = "Суббота";
     break;
   case 7:
     dayName = "Воскресенье";
     break;
   default:
     dayName = "Некорректный номер дня";
 }

 console.log(dayName);


 // использоваие шаблонных строк

 const firstName = "Михаил";
 const lastName = "Иванов";
 const age1 = 30;
 const city = "Лондон";


 const greeting = `Привет, меня зовут ${firstName} ${lastName} . Мне ${age1} лет, я живу в городе ${city}.`
 console.log(greeting);
 


// Массив - динамический массив
// длина не фиксирована
// два способа создания массива 

const arr1 = []; // 1 способо
const arr2 = new Array(); //2 способ

// как добавить значения по индексу
const fruits = [];
fruits[0] = "Banana"; // Banana
fruits[1] = "Apple";
console.log(fruits);

// как получить значения по индексу 
console.log(fruits[0]);
console.log(fruits.length);


// как создать массив сразу со значениями

const cars = ["Lada", "Mercedes", "Opel", "Audi", "VW", "Tesla"];
 // Методы работы с массивами

 const students = [];
 students.push("John"); // добавляем элемент справа
 console.log(students);
 students.push("Tom");
 console.log(students);


 students.unshift("Alex"); //добавили слева
 console.log(students);

 //pop - удалить элемент с конца массива
 const vik = students.pop();
 console.log(students);
 console.log(vik);

 // shift - удаляет элемент слева массива(начало)

 students.shift();
 console.log(students);
