"use strict";

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Validate if constants exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
  // modificar el aria-label
  if (navMenu.classList.contains("show-menu")) {
    navToggle.setAttribute("aria-label", "close menu");
  } else {
    navToggle.setAttribute("aria-label", "open menu");
  }
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Header sticky & go to top
const header = document.getElementById("header");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY >= 10);
  goTopBtn.classList.toggle("active", window.scrollY >= 10);
});

/* Fixed menu with scroll effect */
const headerScroll = document.getElementById("nav");

window.addEventListener("scroll", () => {
  headerScroll.classList.toggle("downScroll", window.scrollY > 0);
});

// Active nav link indicator
const activePage = window.location.pathname;
const activeLinks = document
  .querySelectorAll(".nav__menu .nav__link")
  // when we click on each nav__link, we add the nav__link--active
  .forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("nav__link--active");
    }
  });

const quinielaForm = document.getElementById("quinielaForm");
const resultadoQuiniela = document.getElementById("resultadoQuiniela");

quinielaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const resultados = {};
  const partidos = document.querySelectorAll(".partido");

  for (const partido of partidos) {
    const equipoLocal = partido.querySelector("#equipoLocal1").value;
    const resultado = partido.querySelector("#resultado1").value;
    const equipoVisitante = partido.querySelector("#equipoVisitante1").value;

    resultados[equipoLocal + " - " + equipoVisitante] = resultado;
  }

  // Calcular puntaje total (lógica por implementar)

  const puntajeTotal = calcularPuntajeTotal(resultados);

  resultadoQuiniela.innerHTML = `<h2>Su puntaje total es: ${puntajeTotal}</h2>`;
});

function calcularPuntajeTotal(resultados) {
  // Implementar la lógica para calcular el puntaje total
  // En base a los resultados seleccionados y las reglas de la quiniela
  return 0;
}
