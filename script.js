"use strict";
const submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const salario = Number(document.getElementById("salario").value);
  const vtDia = Number(document.getElementById("vtDia").value);
  const vtTotal = document.getElementById("vtTotal");
  const descUser = document.getElementById("descUser");
  const vtEmpresa = document.getElementById("vtEmpresa");

  const descMax = Number((salario / 100) * 6).toFixed(2);
  if (descMax < vtDia * 21) {
    vtTotal.innerHTML = `${vtDia * 21}`;
    descUser.innerHTML = `${descMax}`;
    vtEmpresa.innerHTML = `${Number(vtDia * 21 - descMax).toFixed(2)}`;
  } else if (descMax > vtDia * 21) {
    vtTotal.innerHTML = `${vtDia * 21}`;
    descUser.innerHTML = `${vtDia * 21}`;
    vtEmpresa.innerHTML = `R$00.0`;
  }
});
