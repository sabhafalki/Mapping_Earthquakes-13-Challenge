// Map a GeoJSON Point

// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/sabhafalki/Mapping_Earthquakes-Example-13/master/majorAirports.json";
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.

L.geoJSON(data, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2> Airport code:" + feature.properties.faa + "</h2><hr><h3> Airpot name :"+ feature.properties.name + "<h3>");
  }

}).addTo(map);
});
