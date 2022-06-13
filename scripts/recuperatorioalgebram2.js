const mtxa = 'donaRecuperatorioAlgebra2';
const mtxa1 = 'barRecuperatorioAlgebra2';
const mtxa2 = 'donaRecuperatorioEstudiantesA2';
const mtxa3 = 'donaRecuperatorioHombresA2';
const mtxa4 = 'donaRecuperatorioMujeresA2';


var pValues = ["Aprobados", "Desaprobados", "Promocionados", "Ausentes"];
var xValues = ["Aprobados", "Desaprobados"];
var eValues = ["Hombres", "Mujeres"]; 


const donaRecuperatorioAlgebra2 = new Chart(mtxa, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Total Notas Estudiantes',
            data: [15, 38],
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

const barRecuperatorioAlgebra2 = new Chart(mtxa1, {
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
            data: [15, 38],
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


const donaRecuperatorioEstudiantesA2 = new Chart(mtxa2, {
    type: "doughnut",
    data: {
        labels: eValues,
        datasets: [{
            label: 'Estudiantes',
            data: [45, 8],
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

const donaRecuperatorioHombresA2 = new Chart(mtxa3, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Hombres',
            data: [11, 34],
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


const donaRecuperatorioMujeresA2 = new Chart(mtxa4, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Mujeres',
            data: [4, 4],
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

