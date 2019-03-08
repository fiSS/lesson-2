'use strict';
let money, time;
money = +prompt("Ваш бюджет на месяц?", '');
time = prompt("Введите дату в формате YYYY-MM-DD", '');
let appData = {
    Budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false             
};

//код работает через цикл for +
for (let i = 0; i < 2; i++)
{
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) { 
            console.log('done');
            appData.expenses[a] = b;
}    
 else {
         i--;
         console.log (i);
 }};    

//код работает через do while 
// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');

//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) { 
//             console.log('done');
//             appData.expenses[a] = b;
//             i++;
// }    
//     else {
//           console.log (i);
//  }
// } while (i < 2);
//   i++; 
// console.log (i);



//код работает через while +
// let i = 0;
// while (i < 2) {
//         let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//             b = prompt('Во сколько обойдется?', '');
    
//         if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) { 
//                 console.log('done');
//                 appData.expenses[a] = b;
//     }    
//         else {
//              i--;
//              console.log (i);
//      }
//                 i++;
//     };


appData.moneyPerDay = appData.Budget / 30;

alert("ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
        console.log('минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
        console.log('высокий уровень достатка');
} else {
        console.log("произошла ошибка");
}