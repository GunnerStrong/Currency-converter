let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let rateUSD = 4.20;
let rateEUR = 4.54;
let rateCHF = 4.67;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let currency = currencyElement.value;
    let amount = +amountElement.value;

    let result = resultElement.value;

    switch (currency) {
        case "USD":
            result = amount * rateUSD;
            break;
        case "EUR":
            result = amount * rateEUR;
            break;
        case "CHF":
            result = amount * rateCHF;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} PLN`;
});

