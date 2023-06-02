{

    const calculateResult = (amount, currency) => {
        const rateUSD = 4.20;
        const rateEUR = 4.54;
        const rateCHF = 4.67;

        switch (currency) {
            case "USD":
                return amount * rateUSD;
            case "EUR":
                return amount * rateEUR;
            case "CHF":
                return amount * rateCHF;
        }

    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} PLN`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency)
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    };

    init();

}