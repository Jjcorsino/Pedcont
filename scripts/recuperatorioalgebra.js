const ctxa = 'donaRecuperatorioAlgebra';
const ctxa1 = 'barRecuperatorioAlgebra';
const ctxa2 = 'donaRecuperatorioEstudiantesA';
const ctxa3 = 'donaRecuperatorioHombresA';
const ctxa4 = 'donaRecuperatorioMujeresA';


var pValues = ["Aprobados", "Desaprobados", "Promocionados", "Ausentes"];
var xValues = ["Aprobados", "Desaprobados"];
var eValues = ["Hombres", "Mujeres"]; 


const donaRecuperatorioAlgebra = new Chart(ctxa, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Total Notas Estudiantes',
            data: [22, 67],
            backgroundColor: [
                "#2b5797",
                "#b91d47",
                
            ],
            hoverOffset: 3
        }]
    },
    options: {

        title: {
            display: false
        },
        plugins:{
            labels:
            {
                render: 'data',
                position: 'inside',
                fontSize: 15
            },
        },

    },
});

const barRecuperatorioAlgebra = new Chart(ctxa1, {
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
            data: [22, 67],
            label: " ",
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)',
            ],

            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
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
        },
        plugins:{
            labels:{
                render: 'value',
                position: 'inside',

            },
        },
    }
});


const donaRecuperatorioEstudiantesA = new Chart(ctxa2, {
    type: "doughnut",
    data: {
        labels: eValues,
        datasets: [{
            label: 'Estudiantes',
            data: [79, 10],
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

const donaRecuperatorioHombresA = new Chart(ctxa3, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Hombres',
            data: [18, 61],
            backgroundColor: [
                "#2b5797",
                "#b91d47",
                
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


const donaRecuperatorioMujeresA = new Chart(ctxa4, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Mujeres',
            data: [4, 6],
            backgroundColor: [
                "#2b5797",
                "#b91d47",
                
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

