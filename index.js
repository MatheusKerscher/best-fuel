document.getElementById("form-calc").addEventListener("submit", (ev) => {
  ev.preventDefault();

  $("#resultCalcModal").modal("show");
});

document.addEventListener("DOMContentLoaded", () => {
  $(".input-money").maskMoney({
    thousands: ".",
    decimal: ",",
    allowZero: true,
  });
});
