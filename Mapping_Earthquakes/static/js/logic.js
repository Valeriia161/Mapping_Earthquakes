// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// First coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7, -94.5], 4);


// // An alternative to using the setView() method:
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });
// // This method is useful when we need to add multiple tile layers, or a background image of our map(s).


// Tile Layer (using to load and display a tile layer on the map):
// We create the tile layer that will be the background of our map.
//  Add a marker to the map for Los Angeles, California.

// let marker = L.marker([34.0522, -118.2437]).addTo(map);

let marker = L.circleMarker([34.0522, -118.2437], {
    radius: 10,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    // maxZoom: 18,
    // id: 'mapbox/streets-v11',   //assign it to the streets variable ( because tile layer will create a street-level map)
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);