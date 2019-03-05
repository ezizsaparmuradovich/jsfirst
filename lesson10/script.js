'use strict';
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц? ", "");
    time = prompt("Введите дату в формате YYYY-MM-DD ", "");
    if(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц? ", "");
    }
} start();

let appDate = {
    budget: money, //зарплата на месяц , бюджет
    timedate: time,
    expenses: {}, //расходы
    optionalExpenses: {}, //дополнительные расходы
    income: [], //доходы
    savings: true // есть ли у меня депозит в банке?
};

function chooseExpenses() {
    for(let i=0; i<2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце ", ""),
            b = +prompt("Во сколько обойдется? ", "");
        if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length<50){
            appDate.expenses[a] = b; //расходы
        }else{
            i--;
        }
    }
} chooseExpenses();

function detectDayBudget(){ //бюджет на один день
    appDate.moneyOneDay = parseInt((appDate.budget/30).toFixed(2));
    alert("Бюджет на 1 день составляет " + appDate.moneyOneDay + " руб.");
} detectDayBudget();

function detectLevel() {
    if(appDate.moneyOneDay < 100){
        console.log("Мнимальный уровень достатка!");
    }else if(appDate.moneyOneDay>100 && appDate.moneyOneDay<2000){
        console.log("Средный уровень достатка!");
    }else if(appDate.moneyOneDay>2000){
        console.log("Высокий уровень достатка!");
    }else{
        console.log("Призашла какая-то ошибочка!");
    }
} detectLevel();

function chekSavings(){
    if(appDate.savings){
        let save = +prompt("Какова сумма накопления?", ""),
            percent = +prompt("Под какой процент?");
        
        appDate.monthIncome = parseInt((save/100/12*percent).toFixed(2)); // прибыль в месяц
        alert("Доход в месяц с вашего депозита составляет: " + (appDate.monthIncome));
    }
} chekSavings();

function chooseOptExpenses(){  //функц. для определения необязательных расходов
    let a = prompt("Статья необязательных расходов?", ""),
        b = prompt("Статья необязательных расходов?", ""),
        c = prompt("Статья необязательных расходов?", "");

    appDate.optionalExpenses["1"] = a;
    appDate.optionalExpenses["2"] = b;
    appDate.optionalExpenses["3"] = c;
} chooseOptExpenses();