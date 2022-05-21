const ctxa_ic = 'dona_ic';
const ctxa1_ic = 'bar_ic';
const ctxa2_ic = 'donaEstudiantes_ic';
const ctxa3_ic = 'donaHombres_ic';
const ctxa4_ic = 'donaMujeres_ic';


var pValues = ["Aprobados", "Desaprobados", "Promocionados", "Ausentes"];
var xValues = ["Aprobados", "Desaprobados", "Promocionados"];
var eValues = ["Hombres", "Mujeres"]; 


const dona_ic = new Chart(ctxa_ic, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Total Notas Estudiantes',
            data: [60, 91, 122],
            backgroundColor: [
                "#2b5797",
                "#b91d47",
                "#00aba9",
            ],
            hoverOffset: 3
        }]
    },
    options: {

        title: {
            display: false
        },

    }
});

const bar_ic = new Chart(ctxa1_ic, {
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
            data: [60, 91, 122],
            label: " ",
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],

            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],

            borderWidth: 1,
        }]
    },
    options: {

        legend: {
            display: true
        },
        title: {
            display: false,
            text: "Notas Algebra mod 2"
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const donaEstudiantes_ic = new Chart(ctxa2_ic, {
    type: "doughnut",
    data: {
        labels: eValues,
        datasets: [{
            label: 'Estudiantes',
            data: [231, 42],
            backgroundColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",
            ],
            hoverOffset: 2
        }]
    },
    options: {

        title: {
            display: false
        },

    }
});

const donaHombres_ic = new Chart(ctxa3_ic, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Hombres',
            data: [54, 75, 102],
            backgroundColor: [
                "#2b5797",
                "#b91d47",
                "#00aba9",
            ],
            hoverOffset: 3
        }]
    },
    options: {
        legend: {
            display: true
        },
        title: {
            display: true,
            text: "Notas Hombres"
        },

    }
});


const donaMujeres_ic = new Chart(ctxa4_ic, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Mujeres',
            data: [6, 16, 20],
            backgroundColor: [
                "#2b5797",
                "#b91d47",
                "#00aba9",
            ],
            hoverOffset: 3
        }]
    },
    options: {
        legend: {
            display: true
        },
        title: {
            display: true,
            text: "Notas Mujeres"
        },

    }
});

