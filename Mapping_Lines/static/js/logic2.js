// Map Multiple Lines

// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -73.780968], 4);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1900, -97.6687],
    [43.6777, -79.6248],
    [40.641766, -73.780968],

];
var SFO = L.marker([37.6213, -122.3790]).bindPopup('<b> San Francisco </b><br>San Francisco International Airport (SFO)').addTo(map),
AUS = L.marker([30.1900, -97.6687]).bindPopup('<b> Austin </b><br> Austin-Bergstrom International Airport (AUS)').addTo(map),
YYZ = L.marker([43.6777, -79.6248]).bindPopup('<b> Toronto </b><br> Toronto Pearson International Airport (YYZ)').addTo(map),
YYZ = L.marker([40.641766, -73.780968]).bindPopup('<b> John F </b><br> Kennedy International Airport (JFK)').addTo(map);
// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "blue",
    dashArray: "5,5",
    weight: 4,
    opacity: 0.5
}).addTo(map);


