let start = document.getElementById("start"),
    selector = "div[class$='value']",
    values = document.querySelectorAll(selector),
    expensesItem = document.querySelectorAll(".expenses-item"),
    button_1 = document.getElementsByTagName("button")[0],
    button_2 = document.getElementsByTagName("button")[1],
    button_3 = document.getElementsByTagName("button")[2],
    optionalExpenses = document.querySelectorAll(".optionalexpenses-item"),
    income = document.querySelector("#income"),
    savings = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");

console.log(year);
console.log(month);
console.log(day);