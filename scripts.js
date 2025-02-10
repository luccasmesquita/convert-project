//Cotação de moedas do dia
const USD = 6.04;
const EUR = 6.36;
const GBP = 7.69;
const BTC = 619.602;

//Obtendo os elementos dos formulario 
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

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
    try {  
        // exibindo a cotação da moeda  selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`  
        
        //calcula o resultado total
        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")
        
        //exibe o resultado total
        result.textContent = `${total} Reais`

        // aplica a classe que exibe o footer para mostrar o resultado 
        footer.classList.add("show-result")
    } catch (error) {
        // remove a classe do footer removendo ele da tela
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")

    }
}

// Formatar a moeda em real brasileiro
function formatCurrencyBRL(value) {
    // converte para numero para utilizar o toLocaleString para formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}