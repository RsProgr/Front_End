//...метод reduce
const techProduct = [
  { name: "Laptop", price: 600 },
  { name: "Phone", price: 400 },
  { name: "Tablet", price: 300 },
];

const totalPrice = techProduct.reduce((totalPrice, product) => {
  return totalPrice + product.price; //20+600
}, 20);

console.log(totalPrice);
 

// --- Таймеры
//setTimeOut
const delayedFunction = ()=>{
    console.log('Функция выполниться через 3 секунды');
};

setTimeout(delayedFunction, 3000); ///1000 ms = 1sec

//setTimeOut и функции с аргументами
const greet = (userName, userAge, isAdmin)=>{
console.log(`Hello, ${userName} - ${userAge} -Admin: ${isAdmin}`);
}
setTimeout(greet, 2000, "Tom", 23, 'yes');

//Очередь вызовов
console.log('1');

console.log('2');

setTimeout(()=>{console.log('3')}, 2000);

console.log('4');

setTimeout(()=> {console.log('5')} , 1000);

setTimeout(()=> {console.log('6')});

console.log('7');


//Вариант очистки интервала
const simpleCounter = ()=>{
    let count = 1;

    const  countFunc = ()=>{
        console.log(count);
        count++;
        
    };

 const  intervalId = setInterval(countFunc, 1000);
//  console.log(intervalId);

 setTimeout(()=>{ clearInterval(intervalId)},10000);
 
};

simpleCounter()

