//******Obntención de datos: Crimenes por año******

anios = function(geojson) {
    let a2014=0;
    let a2015=0;
    let a2016=0;
    let a2017=0;
    let a2018=0;
    let a2019=0;
    let a2020=0;
    
    geojson.features.map(function(feature) {
    
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
    return [a2014,a2015,a2016,a2017,a2018,a2019,a2020]
}
   
//******Obntención de datos: Crimenes por mes******

meses = function(geojson) {
    let ene=0;let feb=0;let mar=0;let abr=0;let may=0;let jun=0;let jul=0;let ago=0; 
    let sep=0;let oct=0;let nov=0;let dic=0;      
    geojson.features.map(function(feature) {
    
    if (feature.properties.MES_NUM == 1){
        ene++;
        }
    if (feature.properties.MES_NUM == 2){
        feb++;
        }
    if (feature.properties.MES_NUM == 3){
        mar++;
        }
    if (feature.properties.MES_NUM == 4){
        abr++;
        }
    if (feature.properties.MES_NUM == 5){
        may++;
        }
    if (feature.properties.MES_NUM == 6){
        jun++;
        }
    if (feature.properties.MES_NUM == 7){
        jul++;
        }
    if (feature.properties.MES_NUM == 8){
        ago++;
        }
    if (feature.properties.MES_NUM == 9){
        sep++;
        }
    if (feature.properties.MES_NUM == 10){
        oct++;
        }
    if (feature.properties.MES_NUM == 11){
        nov++;
        }
    if (feature.properties.MES_NUM == 12){
        dic++;
        }
    }
    );
    return [ene,feb,mar,abr,may,jun,jul,ago,sep,oct,nov,dic]
    
}


//******Obntención de datos: Móvil de Crimen******

movil = function(geojson) {
    let ocarob=0;
    let disc=0;
    let viodom=0;
    let otros=0;
    
    geojson.features.map(function(feature) {
    
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
   return [ocarob, disc, viodom, otros]
}
    

/******Gráfica por años******/
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Total',
            data: anios(hom),
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
        maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      
    }
        
          
    }
});

/******Gráfica por móvil******/
var ctx = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ocasión De Robo','Discusión – Riña – Venganza','Violencia Domestica','Otros'],
        datasets: [{
            label: 'Total',
            data: movil(hom),
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
        maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      
    }
        
          
    }
});


/******Gráfica por meses******/
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
            label: '2014',
            data: meses(h_2014),
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
                'rgba(255, 159, 64, 1)',
                'rgba(255, 170, 20, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '2015',
            data: meses(h_2015),
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
                'rgba(255, 159, 64, 1)',
                'rgba(255, 170, 20, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '2016',
            data: meses(h_2016),
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
                'rgba(255, 159, 64, 1)',
                'rgba(255, 170, 20, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '2017',
            data: meses(h_2017),
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
                'rgba(255, 159, 64, 1)',
                'rgba(255, 170, 20, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '2018',
            data: meses(h_2018),
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
                'rgba(255, 159, 64, 1)',
                'rgba(255, 170, 20, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '2019',
            data: meses(h_2019),
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
                'rgba(255, 159, 64, 1)',
                'rgba(255, 170, 20, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '2020',
            data: meses(h_2020),
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
                'rgba(255, 159, 64, 1)',
                'rgba(255, 170, 20, 1)'
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
        maintainAspectRatio: false,
        
    plugins: {
      legend: {
        position: 'top',
      },
      
    }
        
          
    }
});