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

    console.log(currency.value)
}