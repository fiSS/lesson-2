'use strict';
let money, time;
money = +prompt("Ваш бюджет на месяц?", '');
time = +prompt("Введите дату в формате YYYY-MM-DD", '');
let appData = {
    Budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false             
};

for (let i = 0; i < 2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяцеэ', ''),
        b = prompt('Во сколько обойдется?', '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
            console.log('done');

appData.expenses[a] = b;
else {        ( (typeof(a))=== 'string' && (typeof(a)) != null && typeof(b)) != null
    && a != '' && b != '' && a.length < 50)
}
    }    
}

alert(appData.Budget / 30);