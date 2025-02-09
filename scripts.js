const convertButton = document.querySelector(".convert-button");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currenceValueToConvert = document.querySelector(".currency-value-to-convert" ); // valor em Real
  const currenceValueConverted = document.querySelector(".currency-value"); // outras moedas
  const currencySelect = document.querySelector(".currency-select");

  
  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value == "dolar") {
    // Se o select estiver selecionado o valor do dolar, entre aqui
    currenceValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    // Se o select estiver selecionado o valor do euro, entre aqui
    currenceValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  currenceValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  console.log(convertedvalue);
}

convertButton.addEventListener("click", convertValues);
