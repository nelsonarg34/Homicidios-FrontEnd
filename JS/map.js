var map = L.map('map').setView([-26.8198, -65.2169], 13);
 
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
            

L.control.scale().addTo(map);

 var baseLayers = [
    {
        name: "OpenStreetMap",
        layer: osmLayer
    },
    {
        name: "OpenStreetMap_DE",
        layer: L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png')
    },
    {
        name: "OpenStreetMap_HOT",
        layer: L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png')
    }
];
    
var overLayers = [
    {
        name: "Homicidios",
            
        layer: L.geoJson(hom, {
            onEachFeature: popUpInfo,
            pointToLayer: estiloCircleMarker,
            style: estilo_movil       
        })
    },   
    {
        name: "Mapa de Calor",
            
        layer: heatMap
    },
    {
        name: "Limites comisarias",
            
        layer: L.geoJson(comline)
    }
        
];

/*--Control de Capas--*/
map.addControl( new L.Control.PanelLayers(baseLayers, overLayers,{position:"topleft",compact:"true"}) );


function popUpInfo(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.MOVIL2) {
        //layer.bindPopup("<b>"+feature.properties.nomb_mus+"</b><br>"+feature.properties.municipio+" ("+feature.properties.provincia+")");
        layer.bindPopup("<b>"+feature.properties.MOVIL2);
    }
}

function estiloCircleMarker(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: 7.0,
        fillColor: estilo_movil,
        color: 'white',
        weight: 2,
        opacity: 1.0,
        fillOpacity: 1.0
    })
}

function colorPuntos(d) { 
    return d == "Otros" ? '#FF0000' : 
    d == "Discusión – Riña – Venganza" ? '#00FF00' : 
    d == "Violencia Domestica" ? '#0000FF' : 
    //d == "Barroco" ? '#FF00FF' :
    //d == "Gótico" ? '#FFFF00' :
                '#000000'; 
};

function estilo_movil (feature) {
    return{
        fillColor: colorPuntos(feature.properties.MOVIL2), 
    };
};

var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
    labels = ['<strong>Categories</strong>'],
    categories = ['Otros','Discusión – Riña – Venganza','Violencia Domestica'];

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








   
    
    


