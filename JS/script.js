{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.8019;
        const rateUSD = 4.9382;
        const rateCHF = 4.9190;
        const rateGBP = 5.5168;

        switch (currency) {
            case "EUR":
                return amount * rateEUR;

            case "USD":
                return amount * rateUSD;

            case "CHF":
                return amount * rateCHF;

            case "GBP":
                return amount * rateGBP;
        }
    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");


        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result)
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}