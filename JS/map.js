var map = L.map('map',{ zoomControl: false }).setView([-26.8198, -65.2169], 13);
 
osmLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
    }).addTo(map);

/*--Heat Map--*/  
/*--Convertir geoJson(Homicidios) a vector--*/
geoJson2heat = function(geojson) {
    return geojson.features.map(function(feature) {
    return [parseFloat(feature.geometry.coordinates[1]), parseFloat(feature.geometry.coordinates[0])];
    });
}



var geoData = geoJson2heat(hom, 1);


heatMap = new L.heatLayer(geoData,{radius: 35, blur: 30, gradient: {0.4: 'blue', 0.65: 'yellow', 0.75: 'red'},maxZoom: 17});
            
new L.Control.Zoom({ position: 'topright' }).addTo(map);

 var baseLayers = [
    {
        name: "OpenStreetMap",
        layer: osmLayer
    },
    /*{
        name: "OpenStreetMap_DE",
        layer: L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png')
    },
    {
        name: "OpenStreetMap_HOT",
        layer: L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png')
    }*/
    


];
    
var overLayers = [
    {
        group: "Años",
		collapsed: false,
		layers: [{
        name: "2014",
        active: "true",
            
        layer: L.geoJson(h_2014, {
            onEachFeature: popUpInfo,
            pointToLayer: estiloCircleMarker,
            style: estilo_movil       
        })
    
    }, 
    {
        name: "2015",
            
        layer: L.geoJson(h_2015, {
            onEachFeature: popUpInfo,
            pointToLayer: estiloCircleMarker,
            style: estilo_movil
        })
    },
    {
        name: "2016",
            
        layer: L.geoJson(h_2016, {
            onEachFeature: popUpInfo,
            pointToLayer: estiloCircleMarker,
            style: estilo_movil
        })
    },
    {
        name: "2017",
            
        layer: L.geoJson(h_2017, {
            onEachFeature: popUpInfo,
            pointToLayer: estiloCircleMarker,
            style: estilo_movil
        })
    },
    {
        name: "2018",
            
        layer: L.geoJson(h_2018, {
            onEachFeature: popUpInfo,
            pointToLayer: estiloCircleMarker,
            style: estilo_movil
        })
    },
    {
        name: "2019",
            
        layer: L.geoJson(h_2019, {
            onEachFeature: popUpInfo,
            pointToLayer: estiloCircleMarker,
            style: estilo_movil
        })
    },
    {
        name: "2020",
            
        layer: L.geoJson(h_2020, {
            onEachFeature: popUpInfo,
            pointToLayer: estiloCircleMarker,
            style: estilo_movil
        })
    },
    ]
    },  
    {
        name: "Mapa de Calor",
            
        layer: heatMap
    },
    {
        name: "Limites comisarias",
        active: true,    
        layer: L.geoJson(comline, {
            style: styleLine
          })
    },
    {
        name: "Barrios",
            
        layer: L.geoJson(barrios, {
            onEachFeature: popUpInfo,
            style: stylePolygon
          })
    }
    
        
];

/*--Control de Capas--*/
map.addControl( new L.Control.PanelLayers(baseLayers, overLayers,{position:"topleft",compact:true,collapsibleGroups: true}) );


function popUpInfo(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.MOVIL2) {
        //layer.bindPopup("<b>"+feature.properties.nomb_mus+"</b><br>"+feature.properties.municipio+" ("+feature.properties.provincia+")");
        layer.bindPopup("<b>"+feature.properties.MOVIL2);
    }
    if (feature.properties && feature.properties.NOMBRE) {
        //layer.bindPopup("<b>"+feature.properties.nomb_mus+"</b><br>"+feature.properties.municipio+" ("+feature.properties.provincia+")");
        layer.bindPopup("<b>"+feature.properties.NOMBRE);
    }
}



let a2014=0;
geoJ = function(geojson) {
    
    geojson.features.map(function(feature) {
    //return feature.properties.ANIO_NUM;
    if (feature.properties.ANIO_NUM == 2014){
    a2014=a2014+1;
    }}
    );
    //return a2014;
}
    
geoJ(hom);


console.log(a2014);




//ESTILO DE LINEA
function styleLine(feature) {
    return {
      weight: 1.6,
      color: 'red',
      opacity: 1.0,
      //dashArray: '5, 5, 1, 5'
    };
  };
  
//ESTILO DE PUNTO
function estiloCircleMarker(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: 5.0,
        fillColor: estilo_movil,
        color: 'black',
        weight: 0.5,
        opacity: 1.0,
        fillOpacity: 1.0
    })
}

//ESTILO DE POLIGONO
function stylePolygon(feature) {
    return {
      weight: 1.1, // grosor de línea
      //color: 'blue', // color de línea
      opacity: 0.8, // tansparencia de línea
      //fillColor: 'blue', // color de relleno
      fillOpacity: 0.3, // transparencia de relleno
      
    };
  };

  
function colorPuntos(d) { 
    return d == "Otros" ? '#FFF44F' : 
    d == "Discusión – Riña – Venganza" ? '#EF7F1A' : 
    d == "Violencia Domestica" ? '#6495ED' : 
    d == "Ocasión De Robo" ? '#FF0000' :
                    '#000000'; 
};

function estilo_movil (feature) {
    return{
        fillColor: colorPuntos(feature.properties.MOVIL2), 
    };
};

var legend = L.control({position: 'bottomright'});
    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
    labels = ['<strong>Categories</strong>'],
    categories = ['Ocasión De Robo','Discusión – Riña – Venganza','Violencia Domestica','Otros'];

    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
                '<i class="estiloCircleMarker" style="background:' + colorPuntos(categories[i]) + '"></i> ' +
            (categories[i] ? categories[i] : '+'));

        }
        div.innerHTML = labels.join('<br>');
    return div;
    };
    legend.addTo(map);



    