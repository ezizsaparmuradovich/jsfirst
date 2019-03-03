'use strict';

let money, time;
    money = prompt("Ваш бюджет на месяц? ");
    time = prompt("Введите дату в формате YYYY-MM-DD ");
let m = prompt("Введите обязательную статью расходов в этом месяце ");
let t = prompt("Во сколько обойдется? ");
let appDate = {
    mony: money,
    timedate: time,
    expenses: {m: t},
    optionalExpenses: {},
    income: [],
    savings: false
};
alert(appDate.mony/30)