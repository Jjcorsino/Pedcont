const ctxa = 'donaAlgebra';
const ctxa1 = 'barAlgebra';
const ctxa2 = 'donaEstudiantesA';
const ctxa3 = 'donaHombresA';
const ctxa4 = 'donaMujeresA';


var pValues = ["Aprobados", "Desaprobados", "Promocionados", "Ausentes"];
var xValues = ["Aprobados", "Desaprobados", "Promocionados"];
var eValues = ["Hombres", "Mujeres"]; 


const donaAlgebra = new Chart(ctxa, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Total Notas Estudiantes',
            data: [7, 68, 5],
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

const barAlgebra = new Chart(ctxa1, {
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
            data: [7, 68, 5],
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


const donaEstudiantesA = new Chart(ctxa2, {
    type: "doughnut",
    data: {
        labels: eValues,
        datasets: [{
            label: 'Estudiantes',
            data: [68, 12],
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

const donaHombresA = new Chart(ctxa3, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Hombres',
            data: [5, 59, 4],
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


const donaMujeresA = new Chart(ctxa4, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Mujeres',
            data: [2, 9, 1],
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