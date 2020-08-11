{
    const welcome = () => {
        console.log("Cześć :)");
    }
    welcome();




    const calculateResult = (form__labelInputStart, you__want) => {

        const EUR = 4.4418;
        const USD = 3.9634;
        const GBP = 4.9293;

        switch (you__want) {
            case "EUR":
                return +form__labelInputStart.value / EUR;
            case "USD":
                return +form__labelInputStart.value / USD;
            case "GBP":
                return +form__labelInputStart.value / GBP;

        }
    }
    const init = () => {
        const container__form = document.querySelector(".Js--container__form");

        container__form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form__labelInputStart = document.querySelector(".Js--form__labelInput");
            const money__toExchange = +form__labelInputStart.value;
            const label__selectFinish = document.querySelector(".Js--label__selectFinish");
            const you__want = label__selectFinish.value;
            let finalResult = calculateResult(form__labelInputStart, you__want);
            const resultValue = document.querySelector(".js-result");
            resultValue.innerText = `${money__toExchange} PLN = ${finalResult.toFixed(2)} ${you__want}`;
        });
    }
    init();

}


// {
//     const welcome = () => {
//         console.log("Cześć :)");
//     }
//     welcome();


//     const container__form = document.querySelector(".Js--container__form");

//     const form__labelInputStart = document.querySelector(".Js--form__labelInput")
//     const label__selectFinish = document.querySelector(".Js--label__selectFinish");
//     const resultValue = document.querySelector(".js-result");

//     const calculateResult = (money__toExchange, you__want) => {

//     const EUR = 4.4418;
//     const USD = 3.9634;
//     const GBP = 4.9293;

//         switch (you__want) {
//             case "EUR":
//                 return  +form__labelInputStart.value / EUR; 
//             case "USD":
//                 return  +form__labelInputStart.value / USD;   
//             case "GBP":
//                 return  +form__labelInputStart.value / GBP;

//         }
//     }



//     // form__selectStart.focus();


//     container__form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const money__toExchange = +form__labelInputStart.value;
//         const you__want = label__selectFinish.value;
//         let finalResult = calculateResult(money__toExchange, you__want);


//         resultValue.innerText = `${money__toExchange} PLN = ${finalResult.toFixed(2)} ${you__want}`;
//     });

// }
// {
//     const welcome = () => {
//         console.log("Cześć :)");
//     }
//     welcome();


//     const container__form = document.querySelector(".Js--container__form");
//     const form__selectStart = document.querySelector(".Js--form__selectStart");
//     const form__labelInputStart = document.querySelector(".Js--form__labelInput")
//     const label__selectFinish = document.querySelector(".Js--label__selectFinish");
//     const resultValue = document.querySelector(".js-result");

//     const EUR = 4.4418;
//     const USD = 3.9634;
//     const GBP = 4.9293;

//     // form__selectStart.focus();


//     container__form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const money__toExchange = +form__labelInputStart.value;
//         const you__want = label__selectFinish.value;

//         const finalResult;

//         switch (you__want) {
//             case "EUR":
//                 finalResult = +form__labelInputStart.value / EUR;
//                 break;
//             case "USD":
//                 finalResult = +form__labelInputStart.value / USD;
//                 break;
//             case "GBP":
//                 finalResult = +form__labelInputStart.value / GBP;
//                 break;
//         }

//         resultValue.innerText = `${money__toExchange} PLN = ${finalResult.toFixed(2)} ${you__want}`;
//     });

// }
