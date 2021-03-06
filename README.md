# Mapping_Earthquakes

## Overview & Purpose

The main objective of this project was to create an  interactive map using GeoJSON data. In general, the generated map comprise of three different map overlays, all recorded earthquake data over the 7 days, all the earthquakes with a magnitude greater than 4.5, and tectonic plates location on the earth. 

## Tools, Resources and Language

* Data: earthquake and tectonic plate GeoJSON data 
    (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson; https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson; and https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)
* Javascript ES6 
* HTML/CSS
* Leaflet.js API and Mapbox

## Analysis

Code was written in Javascript (see challenge_logic.js) to create the required map, and script was written in HTML so the map can load and be viewed on a webpage (see index.html). Necessary script files/links was rendered in the HTML file to ensure the map would populate as required and accurately. In general, the main steps used to produce the required map were:

1. Use mapbox tile layer to create the background of the map and create the map object with center, zoom level and default layer.
2. Add control to the map that will allow the user to change visible layers.
3. Use d3.json() callback method to make a call to the tectonic plate and earthquake data 
4. Use Leaflet.js Application Programming Interface (API) to populate the geographical map with GeoJSON earthquake and tectonic plate data from a URL.
4. Write functions to style the required map layers.
5. Write code to create a legend for the earthquake data.

## Results

The main features of the created map with images is listed below.

1. A control feature that allows the user to change visible layers.

2. Each earthquake was represented by a circle and color that matches certain features of the earthquake; the higher the magnitude of the earthquake the  larger diameter and darker the color (see Figure 1 below). 

    Figure 1. Map with a street layer showing earthquakes.

    <img width="652" alt="3" src="https://user-images.githubusercontent.com/92636438/152673043-4f116a33-e1d6-40eb-9bba-93731673cf90.png">


3. Each earthquake was enabled with a pop up feature that displays pertinent information relevant to the earthquake, as shown in Figure 1 above.


4. A clearly visbile tectonic plate layer as displayed in Figure 2 below.

    Figure 2. Map with a dark overlay showing the Earth's tectonic plates.

    <img width="514" alt="4" src="https://user-images.githubusercontent.com/92636438/152673083-472eba72-f915-4f2e-ae9a-962043fa50d6.png">
