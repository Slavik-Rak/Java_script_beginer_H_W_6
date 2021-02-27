
// - создать массив с 20 числами.
function creatArrRand() {
    let arrRandNum = [];
    for (let i = 0; i < 20; i++) {
        arrRandNum[i] = parseInt(Math.random() * 99);
    }
    return arrRandNum;
}

console.log(creatArrRand());

// -- при помощи метода sort и колбека  отсортировать массив.
console.log(creatArrRand().sort((elemOne, elemTwo) => elemOne - elemTwo));

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
console.log(creatArrRand().sort((elemOne, elemTwo) => elemTwo - elemOne));
// -- при помощи filter получить числа кратные 3
console.log(creatArrRand().filter(elem => !(elem % 3)));
// -- при помощи filter получить числа кратные 10
console.log(creatArrRand().filter(elem => !(elem % 10)));
// -- перебрать (проитерировать) массив при помощи foreach()
let arrForErch = creatArrRand();
console.log(arrForErch);
/* 
    arrForErch.forEach(elem => console.log(elem));
 */
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

console.log(arrForErch.map(elem => elem * 3));

// - создать массив со словами на 15-20 элементов.

let arrWords = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Impedit', 'sequi', 'consequuntur', 'Dolorum', 'impedit', 'nulla', 'reiciendis', 'provident', 'vero', 'nobis', 'perspiciatis', 'placeat', 'z'];
console.log(arrWords);
// -- отсортировать его по алфавиту в восходящем порядке.
console.log(arrWords.sort((elemOne, elemTwo) => elemOne.charCodeAt(0) - elemTwo.charCodeAt(0)));
// -- отсортировать его по алфавиту  в нисходящем порядке.
console.log(arrWords.sort((elemOne, elemTwo) => elemTwo.charCodeAt(0) - elemOne.charCodeAt(0)));
// -- отфильтровать слова длиной менее 4х символов
console.log(arrWords.filter(elem => elem.length > 4));
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
console.log(arrWords.map(elem => elem + '!'))


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

let users = [{ name: 'vasya', age: 31, status: false },
{ name: 'petya', age: 30, status: true },
{ name: 'kolya', age: 29, status: true },
{ name: 'olya', age: 28, status: false },
{ name: 'max', age: 30, status: true },
{ name: 'anya', age: 31, status: false },
{ name: 'oleg', age: 28, status: false },
{ name: 'andrey', age: 29, status: true },
{ name: 'masha', age: 30, status: true },
{ name: 'olya', age: 31, status: false },
{ name: 'max', age: 31, status: true }];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
console.log(users.sort((elemOne, elemTwo) => elemTwo.age - elemOne.age));
console.log(users.sort((elemOne, elemTwo) => elemOne.age - elemTwo.age));

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

console.log(users.sort((elemOne, elemTwo) => elemOne.name.length - elemTwo.name.length));

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let newArr = [];

let arrIdent = [];  // масив для зберіг. ідентифікаторів(щоб не повторювались)


newArr = users.map((elem) => {


    let i = parseInt(Math.random() * 40);

    if (arrIdent.length > 0) {

        for (let j = 0; j < arrIdent.length; j++) {

            if (arrIdent[j] === i) {

                i = parseInt(Math.random() * 40);
                j = 0;
            }
        }
        elem.id = i;
        arrIdent.push(i);

    } else {
        elem.id = i;
        arrIdent.push(i);
    }

    return elem;
})

console.log(newArr);

// - відсортувати його за індентифікатором

console.log(newArr.sort((elemOne, elemTwo) => elemOne.id - elemTwo.id));


// -- наисать функцию калькулятора с 2мя числами и колбеком

function calcukiator(a, b, callback) {
    return callback(a, b);
}

console.log(calcukiator(10, 23, (a, b) => a + b));

// -- наисать функцию калькулятора с 3мя числами и колбеком

function calcukiator1(a, b, c, callback) {
    return callback(a, b, c);
}

console.log(calcukiator1(10, 23, 32, (a, b, c) => a + b + c));