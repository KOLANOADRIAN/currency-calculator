console.log("Cześć Developerze :)");

let container__form = document.querySelector(".container__form");
let form__selectStart = document.querySelector(".form__selectStart");
let form__labelInputStart = document.querySelector(".form__labelInput--start")
let label__selectFinish = document.querySelector(".label__selectFinish");
let form__labelInputFinish = document.querySelector(".form__labelInput--finish");
let resultValue = document.querySelector(".js-result");

let EUR = 4.4418;
let USD = 3.9634;
let GBP = 4.9293;

form__selectStart.focus();


container__form.addEventListener("submit", (event) => {
    event.preventDefault();

    let you__want = label__selectFinish.value;
    let money__toExchange = +form__labelInputStart.value;
    let finalResult;

    switch (you__want) {
        case "EUR":
            finalResult = +form__labelInputStart.value / EUR;
            break;
        case "USD":
            finalResult = +form__labelInputStart.value / USD;
            break;
        case "GBP":
            finalResult = +form__labelInputStart.value / GBP;
            break;
    }

    resultValue.innerText = `${money__toExchange} PLN = ${finalResult.toFixed(
        2
    )} ${you__want}`;
});
