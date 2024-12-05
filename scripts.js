//Cotação de moedas do dia
const USD = 6.04;
const EUR = 6.36;
const GBP = 7.69;
const BTC = 619.602;

//Obtendo os elementos dos formulario 
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input amount para receber somente numeros 
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o evento de submit (enviar) no formulario 
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
        case "USD" :
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR" :
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP" :
            convertCurrency(amount.value, GBP, "£")
            break
        case "BTC" :
            convertCurrency(amount.value, BTC, "₿")
            break

    }
}

// Função para converter a moeda 
function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
}