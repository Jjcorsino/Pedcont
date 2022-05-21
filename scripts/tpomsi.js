const ctxa_msi = 'dona_m1_msi';
const ctxa1_msi = 'barMsi_m1_msi';
const ctxa2_msi = 'donaEstudiantes_m1_msi';
const ctxa3_msi = 'donaHombres_m1_msi';
const ctxa4_msi = 'donaMujeres_m1_msi';


var pValues = ["Aprobados", "Desaprobados", "Promocionados", "Ausentes"];
var xValues = ["Aprobados", "Desaprobados", "Promocionados"];
var eValues = ["Hombres", "Mujeres"]; 


const dona_m1_msi = new Chart(ctxa_msi, {
    type: "pie",
    data: {
        labels: pValues,
        datasets: [{
            label: 'Total Notas Estudiantes',
            data: [39, 4, 177, 29],
            backgroundColor: [
                "#2b5797",
                "#b91d47",
                "#00aba9",
                "#b0aba9",

                
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

const barMsi_m1_msi = new Chart(ctxa1_msi, {
    type: 'bar',
    data: {
        labels: pValues,
        datasets: [{
            data: [39, 4, 177, 29],
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


const donaEstudiantes_m1_msi = new Chart(ctxa2_msi, {
    type: "doughnut",
    data: {
        labels: eValues,
        datasets: [{
            label: 'Estudiantes',
            data: [207, 41],
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

const donaHombres_m1_msi = new Chart(ctxa3_msi, {
    type: "pie",
    data: {
        labels: pValues,
        datasets: [{
            label: 'Estudiantes Hombres',
            data: [33, 4, 146, 25],
            backgroundColor: [
                "#2b5797",
                "#b91d47",
                "#00aba9",
                "#b0aba9",

                
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


const donaMujeres_m1_msi = new Chart(ctxa4_msi, {
    type: "pie",
    data: {
        labels: pValues,
        datasets: [{
            label: 'Estudiantes Mujeres',
            data: [6, 0, 31, 4],
            backgroundColor: [
                "#2b5797",
                "#b91d47",
                "#00aba9",
                "#b0aba9",

                
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

