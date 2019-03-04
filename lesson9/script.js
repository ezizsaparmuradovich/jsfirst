'use strict';

let money, time;
    money = +prompt("Ваш бюджет на месяц? ", "");
    time = prompt("Введите дату в формате YYYY-MM-DD ", "");

let appDate = {
    budget: money,
    timedate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for(let i=0; i<2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце ", ""),
        b = prompt("Во сколько обойдется? ", "");
    if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length<50){
        appDate.expenses[a] = b;
        console.log("done");
    }else{
        i=0;
    }
}
// let i=0;
// while(i<2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце ", ""),
//         b = prompt("Во сколько обойдется? ", "");
//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length<50){
//         appDate.expenses[a] = b;
//         console.log("done");
//     }else{
//         i=0;
//     }
//     i++;
// }
// var i=0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце ", ""),
//         b = prompt("Во сколько обойдется? ", "");
//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length<50){
//         appDate.expenses[a] = b;
//         console.log("done");
//     }else{
//         i=0;
//     }
//     i++;
// } while (i<2);
appDate.moneyOneDay = appDate.budget/30;
console.log(appDate.moneyOneDay);

if(appDate.moneyOneDay < 100){
    console.log("Мнимальный уровень достатка!");
}else if(appDate.moneyOneDay>100 && appDate.moneyOneDay<2000){
    console.log("Средный уровень достатка!");
}else if(appDate.moneyOneDay>2000){
    console.log("Высокий уровень достатка!");
}else{
    console.log("Призашла какая-то ошибочка!");
}