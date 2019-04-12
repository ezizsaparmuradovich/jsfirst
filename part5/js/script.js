'use strict';
let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],

    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalexpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),

    savingsCheckbox = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percentValue = document.querySelector("#percent"),

    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

expensesItemBtn.disabled = true;
countBudgetBtn.disabled = true;
optionalexpensesBtn.disabled = true;
let money, time;

startBtn.addEventListener('click', () => {
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed() + " руб.";

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.disabled = false;
    countBudgetBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', () => {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', () => {// Функция для определения необязательных расходов
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let questionOptExpenses = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBudgetBtn.addEventListener('click', () => { // Расчет дневного бюджета
    if(appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay + " руб.";

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = " Минимальный";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = " Средний";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = " Высокий";
        } else {
            levelValue.textContent = " Ошибочка...!";
        }
    } else {
        daybudgetValue.textContent = " Ошибочка...!";
    }
});

chooseIncome.addEventListener('input', () => {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = items;
});

savingsCheckbox.addEventListener('click', () => {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', () => {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', () => {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};





