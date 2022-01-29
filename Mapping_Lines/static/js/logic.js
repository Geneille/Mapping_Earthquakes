// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 4);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];
  
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
}).addTo(map);


// SKILL DRILL - UNCOMMENT ME!! USE tilelayer -light
// Map route from SFO to JFK via AUS and YYZ

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30.1975, -97.6664], 4);

// // Coordinates for each point in the route.
// let line = [
//     [37.6213, -122.3790],
//     [30.1975, -97.6664],
//     [43.6817, -79.6120],
//     [40.6413, -73.7781]
// ];
  
// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     opacity:'0.5',
//     weight: '4',
//     dashArray: '10,6'
// }).addTo(map);

// var popup = L.popup()
//     .setLatLng([35.4819, -97.5084])
//     .setContent("Route from SFO to JFK via AUS and YYZ.")
//     .openOn(map);

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);