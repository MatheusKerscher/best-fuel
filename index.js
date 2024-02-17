const inputEthanol = document.getElementById("ethanol");
const inputGasoline = document.getElementById("gasoline");

inputEthanol.addEventListener("keyup", validInput);
inputGasoline.addEventListener("keyup", validInput);

document.addEventListener("DOMContentLoaded", () => {
  $(".input-money").maskMoney({
    thousands: ".",
    decimal: ",",
    allowZero: true,
  });
});

document.getElementById("form-calc").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const resultCalcContainer = document.getElementById("result-calc-container");

  const ethanolPrice = Number(
    inputEthanol.value.replace(".", "").replace(",", ".")
  );
  const gasolinePrice = Number(
    inputGasoline.value.replace(".", "").replace(",", ".")
  );

  const resultCalc = ethanolPrice / gasolinePrice;

  console.log(resultCalc.toFixed(2));

  $("#resultCalcModal").modal("show");

  resultCalcContainer.innerHTML = `<p class="mb-0 text-dark"></p>O resultado da divisão do etanol pela gasolina resultou em ${resultCalc
    .toFixed(2)
    .replace(".", ",")}, o que é ${
    resultCalc.toFixed(2) < 0.7 ? "menor" : "maior"
  } do que 0,70. Portanto, compensa <strong class="result-fuel">abastecer com ${
    resultCalc < 0.7 ? "etanol" : "gasolina"
  }</strong>.`;
});

function validInput() {
  const errorContainerEthanol = document.getElementById(
    "error-container-ethanol"
  );
  const errorContainerGasoline = document.getElementById(
    "error-container-gasoline"
  );
  const btnCalc = document.getElementById("btn-calc");

  const ethanolPrice = Number(
    inputEthanol.value.replace(".", "").replace(",", ".")
  );
  const gasolinePrice = Number(
    inputGasoline.value.replace(".", "").replace(",", ".")
  );

  if (ethanolPrice > 0.0 && gasolinePrice > 0.0) {
    btnCalc.disabled = false;
  } else {
    btnCalc.disabled = true;
  }

  if (inputEthanol.value !== "") {
    if (ethanolPrice > 0.0) {
      errorContainerEthanol.classList.remove("show-erro");
      errorContainerEthanol.classList.add("hidden-erro");
    } else {
      errorContainerEthanol.classList.remove("hidden-erro");
      errorContainerEthanol.classList.add("show-erro");
    }
  }

  if (inputGasoline.value !== "") {
    if (gasolinePrice > 0.0) {
      errorContainerGasoline.classList.remove("show-erro");
      errorContainerGasoline.classList.add("hidden-erro");
    } else {
      errorContainerGasoline.classList.remove("hidden-erro");
      errorContainerGasoline.classList.add("show-erro");
    }
  }
}
