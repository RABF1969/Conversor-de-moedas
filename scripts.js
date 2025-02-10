const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currenceValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // valor em Real
  const currenceValueConverted = document.querySelector(".currency-value"); // outras moedas

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.2;

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

  if (currencySelect.value == "libra") {
    // Se o select estiver selecionado o valor do libra, entre aqui
    currenceValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }


  currenceValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency(){
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"  
    currencyImg.src = "./assets/dolar.png"  
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"  
    currencyImg.src = "./assets/euro.png"  
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"  
    currencyImg.src = "./assets/libra.png"  
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
