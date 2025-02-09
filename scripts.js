const convertButton = document.querySelector(".convert-button");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currenceValueToConvert = document.querySelector(".currency-value-to-convert"); // valor em Real
  const currenceValueToConverted = document.querySelector(".currency-value"); // outras moedas

  const dolarToday = 5.2;

  const convertedvalue = inputCurrencyValue / dolarToday;

  currenceValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",  
  }).format(inputCurrencyValue);

  currenceValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(convertedvalue);

  console.log(convertedvalue);
}

convertButton.addEventListener("click", convertValues);
