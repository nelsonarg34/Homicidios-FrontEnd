//******Crimenes por año******
let a2014=0;
let a2015=0;
let a2016=0;
let a2017=0;
let a2018=0;
let a2019=0;
let a2020=0;
geoJ = function(geojson) {
    
    geojson.features.map(function(feature) {
    //return feature.properties.ANIO_NUM;
    if (feature.properties.ANIO_NUM == 2014){
        a2014++;
        }
    if (feature.properties.ANIO_NUM == 2015){
        a2015++;
        }
    if (feature.properties.ANIO_NUM == 2016){
        a2016++;
        }
    if (feature.properties.ANIO_NUM == 2017){
        a2017++;
        }
    if (feature.properties.ANIO_NUM == 2018){
        a2018++;
        }
    if (feature.properties.ANIO_NUM == 2019){
        a2019++;
        }
    if (feature.properties.ANIO_NUM == 2020){
        a2020++;
        }
    }
    );
    
}
    
geoJ(hom);

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Total',
            data: [a2014, a2015, a2016, a2017, a2018, a2019, a2020],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 170, 20, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Crimenes por año'
      }
    }
        
          
    }
});

//******Móvil de Crimen******
//'Ocasión De Robo','Discusión – Riña – Venganza','Violencia Domestica','Otros'
let ocarob=0;
let disc=0;
let viodom=0;
let otros=0;

geoJ1 = function(geojson) {
    
    geojson.features.map(function(feature) {
    //return feature.properties.MOVIL;
    if (feature.properties.MOVIL2 == 'Ocasión De Robo'){
        ocarob++;
        }
    if (feature.properties.MOVIL2 == 'Discusión – Riña – Venganza'){
        disc++;
        }
    if (feature.properties.MOVIL2 == 'Violencia Domestica'){
        viodom++;
        }
    if (feature.properties.MOVIL2 == 'Otros'){
        otros++;
        }
    }
    );
    
}
    
geoJ1(hom);
var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ocasión De Robo','Discusión – Riña – Venganza','Violencia Domestica','Otros'],
        datasets: [{
            label: 'Total',
            data: [ocarob, disc, viodom, otros],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Móvil del crimen'
      }
    }
        
          
    }
});