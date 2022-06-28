"use strict";
const d = document;

// Fechas de los parciales
d.addEventListener("DOMContentLoaded", () => {
  countdownParcial("algebra", "Jun 27, 2022", "Pagoda", "15:00 Pm", "<b>27/06/22</b>, Segundo Parcial", "Algebra");
  countdownParcial("msi", "Jul 02, 2022", "106 y 107", "9 Am", "<b>02/07/22</b>, Recuperatorio integral", "MSI");
  countdownParcial("msik", "Jun 03, 2022", "Virtual", "09:00 Am", "<b>03/06/22</b>, Segundo Kahoot", "msik");
  countdownParcial("msitp", "Jun 24, 2022", "Virtual", "18:00 Am", "<b>24/06/22</b>, Cuarto Kahoot", "msitp");
  countdownParcial("ic", "Jun 24, 2022", "Fai", "09:00 Am", "<b>24/06/22</b>, Recuperatorio y promoción Segundo Parcial", "IC");
  countdownParcial("rpa", "Jul 05, 2022", "Fai 106 y 107", "09:00 Am", "<b>05/07/22</b>, Recuperatorio integral", "rpa");
});


// Cuenta regresiva fechas parciles
const countdownParcial = (id, date, classRoom, hour, msg, course) => {
    const element = d.getElementById(id),
    ctDate = new Date(date).getTime();
    
    let timer = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = ctDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
        

        //Cambiar este codigo choto que hace reflow
        element.innerHTML = `${msg}<br>
                        Aula: ${classRoom}<br> 
                        Horario: ${hour}<br>
                        Faltan ${days + 1} Dias`;
                        
    if (limitTime <= 0) {
      clearInterval(timer);
      element.innerHTML =  `Hoy es el parcial de ${course} <br>
                            Aula: ${classRoom} <br>
                            Horario: ${hour} <br>`;
                            }
  }, 1000);
};



// Modo oscuro
const darkMode = d.querySelector("#darkmode");

console.log(darkMode);
darkMode.addEventListener("click", () => {
    if (d.body.className == "black") {
        d.body.classList.replace("black", "white");
    } else {
        d.body.classList.replace("white", "black");
    }
});

// Menu nav responsive
const hMenu = () => {
    let x = d.getElementById("navDemo");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else {
        x.className = x.className.replace(" show", "");
    }
};