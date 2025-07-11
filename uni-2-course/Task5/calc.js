const prices = {
    "2jz-gte": 300000,
    "Полумёртвая бмв": 10000,
    "40-летняя советская гитара без первой струны": 150,
    "Солнце": 800000000,
    "Сухарики 3 корочки": 13
}

function setCalc(value) {
    let domAns = document.getElementById("result")
    domAns.replaceChildren(`${value}`);
};

function getCalc(count, currentEl) {
    if(inputCheck(count))
        return "Нужно денек: " + String(prices[currentEl] * Number(count));
    return "Недопустимое значение!";
};

function elements() {
    let count = document.getElementById("count").value;
    let currentEl = document.getElementById("choice").value;
    let val = getCalc(count, currentEl);
    setCalc(val);
};

function inputCheck(obj) {
    const regex = /^[0-9]+$/;

    return regex.test(obj);
};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    let btn = document.getElementById("calculate");
    btn.addEventListener("click", elements);
});
