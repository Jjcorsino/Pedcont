const ctxa_m1 = 'donaAlgebra_m1';
const ctxa1_m1 = 'barAlgebra_m1';
const ctxa2_m1 = 'donaEstudiantes_m1';
const ctxa3_m1 = 'donaHombres_m1';
const ctxa4_m1 = 'donaMujeres_m1';


var pValues = ["Aprobados", "Desaprobados", "Promocionados", "Ausentes"];
var xValues = ["Aprobados", "Desaprobados", "Promocionados"];
var eValues = ["Hombres", "Mujeres"]; 


const donaAlgebra_m1 = new Chart(ctxa_m1, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Total Notas Estudiantes',
            data: [27, 114, 14],
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

const barAlgebra_m1 = new Chart(ctxa1_m1, {
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
            data: [27, 114, 14],
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
        },
        plugins:{
            labels:{
                render: 'value',
                position: 'inside',

            },
        },
    }
});


const donaEstudiantes_m1 = new Chart(ctxa2_m1, {
    type: "doughnut",
    data: {
        labels: eValues,
        datasets: [{
            label: 'Estudiantes',
            data: [137, 18],
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

const donaHombres_m1 = new Chart(ctxa3_m1, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Hombres',
            data: [22, 103, 12],
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


const donaMujeres_m1 = new Chart(ctxa4_m1, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Mujeres',
            data: [5, 11, 2],
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

