let startBtn = document.getElementById("start"),
    selector = "div[class$='value']",
    values = document.querySelectorAll(selector),
    expensesItem = document.querySelectorAll(".expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optionalExpenses = document.querySelectorAll(".optionalexpenses-item"),
    income = document.querySelector("#income"),
    savings = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

document.querySelectorAll("button:not(.start)").forEach(item => item.setAttribute("disabled", "true"));


let money, time;

startBtn.addEventListener("click", function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц", 0);

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", 0);
    }

    appData.budget = money;
    appData.timeData = time;

    values[0].textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    document.querySelectorAll("button:not(.start)").forEach(item => item.removeAttribute("disabled"));
});

expensesItemBtn.addEventListener("click", function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;


        if (typeof (a) === "string" && typeof (a) != null
            && typeof (b) === "string" && typeof (b) != null
            && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    };
    values[3].textContent = sum;
});

optionalExpensesBtn.addEventListener("click", function () {
    for (let i = 0; i < optionalExpenses.length; i++) {
        let opt = optionalExpenses[i].value;
        appData.optionalExpenses[i] = opt;
        values[4].textContent += appData.optionalExpenses[i] + " ";
    }
});

countBudgetBtn.addEventListener("click", function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = +((appData.budget - values[3].textContent) / 30).toFixed();
        values[1].textContent = appData.moneyPerDay;

        switch (true) {
            case (appData.moneyPerDay < 100):
                values[2].textContent = "Минимальный уровень достатка";
                break;
            case (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000):
                values[2].textContent = "Средний уровень достатка";
                break;
            case (appData.moneyPerDay > 2000):
                values[2].textContent = "Средний уровень достатка";
                break;
            default:
                values[2].textContent = "Произошла ошибка";
        }
    } else {
        values[1].textContent = "Произошла ошибка";
    }
});

income.addEventListener("input", function () {
    let items = income.value;
    appData.income = items.split(", ");
    values[5].textContent = appData.income;
});

savings.addEventListener("click", function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener("input", function () {
    if (appData.savings == true) {
        let save = +sum.value,
            percentRes = +percent.value;

        appData.monthIncome = save / 100 / 12 * percentRes;
        appData.yearIncome = save / 100 * percentRes;

        values[5].textContent = appData.monthIncome.toFixed(1);
        values[6].textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener("input", function () {
    if (appData.savings == true) {
        let save = +sum.value,
            percentRes = +percent.value;

        appData.monthIncome = save / 100 / 12 * percentRes;
        appData.yearIncome = save / 100 * percentRes;

        values[6].textContent = appData.monthIncome.toFixed(1);
        values[7].textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};