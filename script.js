// 1 Отфильтровать массив машин закинуть в переменную cheap только те машины у которых цена меньше 35 тысяч.

// let cars = [12000, 50000, 24000, 5000, 250000, 76000, 6700, 35000]
// let total = 0

// cars.filter(item => {
//     // item <= 35000 ? total.push(item) : null
//     item <= 35000 ? total++ : null
// })
// console.log(total);

// 2 В переменной индекс я пишу любое число функция должна сравнить это число с индексом элементов из arr. Если какой ни будь из них совпадает то удалить этот элемент из массива. Если нет то сообщить что такого элемента у нас нет.

// let index = prompt('Any number')

// let names = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']

// names.filter(item =>{
//     if(names.indexOf(item) === +index){
//         names.splice(names.indexOf(item),1)
//         return console.log(names)
//     } else {
//         console.log('Array names does not have this elemente');
//     }
// })

// 3 Тест на нахождение ключей.Сложить все цифры из массива с объектами в переменную `total`.

let arr = [
    [
        {
            a:{
                price:20
            }
        }
    ],
    [
        {
            a:{
                price:35
            }
        }
    ],
    [
        {
            a:{
                price:44
            }
        }
    ]
]

// let total = arr.reduce((prev, item) => {
//     prev + item.a.price
// }, 0)

