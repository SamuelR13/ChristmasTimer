const contNieve = document.querySelector(".nieve");
const audioNav = document.querySelector("#musica-navidad");
const diaTimer = document.querySelector("#dia-timer");
const horaTimer = document.querySelector("#hora-timer");
const minutoTimer = document.querySelector("#minuto-timer");
const segundoTimer = document.querySelector("#segundo-timer");

contNieve.innerHTML = "";
// audioNav.play();
// audioNav.loop = true;

function generarNieve() {
  Array.from({ length: 50 }).forEach((element) => {
    const num = random(11, 26);
    contNieve.innerHTML += `<span style="--i: ${num}"></span>`;
  });
}

function random(inicio, final) {
  return Math.floor(Math.random() * (final - inicio + 1) + inicio);
}

function timerNavidad() {
  const fechaActual = new Date();
  const fechaObjetivo = new Date(fechaActual.getFullYear(), 11, 25);

  if (fechaActual.getMonth() === 11 && fechaActual.getDate() >= 25) {
    fechaObjetivo.setFullYear(fechaObjetivo.getFullYear() + 1);
  }
  let diferenciaMs = fechaObjetivo - fechaActual;
  let diasRestantes = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
  let horasRestantes = Math.floor(
    (diferenciaMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutosRestantes = Math.floor(
    (diferenciaMs % (1000 * 60 * 60)) / (1000 * 60)
  );
  let segundosRestantes = Math.floor((diferenciaMs % (1000 * 60)) / 1000);

  diaTimer.innerHTML = diasRestantes.toString().padStart(2, 0);
  horaTimer.innerHTML = horasRestantes.toString().padStart(2, 0);
  minutoTimer.innerHTML = minutosRestantes.toString().padStart(2, 0);
  segundoTimer.innerHTML = segundosRestantes.toString().padStart(2, 0);
}

setInterval(timerNavidad, 1000);
generarNieve();
