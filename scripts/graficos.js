const ctx = 'donaMsi';
const ctx2 = 'barrasMsi';
const ctx3 = 'donaEstudiantes';
const ctx4 = 'donaHombres';
const ctx5 = 'donaMujeres';

var pValues = ["Aprobados", "Desaprobados", "Promocionados", "Ausentes"];
var xValues = ["Aprobados", "Desaprobados", "Promocionados"];
var eValues = ["Hombres", "Mujeres"]; 

const donaMsi = new Chart(ctx, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Total Notas Estudiantes',
            data: [35, 8, 80],
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


const barrasMsi = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: pValues,
        datasets: [{
            data: [35, 8, 80, 90],
            label: " ",
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 206, 86, 0.5)',

            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
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
            text: "Notas Kahoot MSI"
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const donaEstudiantes = new Chart(ctx3, {
    type: "doughnut",
    data: {
        labels: eValues,
        datasets: [{
            label: 'Estudiantes',
            data: [182, 31],
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

const donaHombres = new Chart(ctx4, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Hombres',
            data: [70, 6, 31],
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


const donaMujeres = new Chart(ctx5, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Estudiantes Mujeres',
            data: [10, 2, 4],
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
