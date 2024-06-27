var map = L.map("map").setView([20, 0], 2);
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    maxZoom: 7,
    minZoom: 2,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  }
).addTo(map);

const redMarkerIcon = L.icon({
    iconUrl: "utils/images/red-marker.png",
    shadowUrl: "utils/images/marker-shadow.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

var markers = new Array(1000);

function removeAllMarkers() {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
        markers[i].remove();
        }
    }
    markers = new Array(1000);
    }

async function loadMarkers(jsonData) {
    try {
        removeAllMarkers();
        var marker;
        jsonData.forEach(function (item) {
        const latitude = parseFloat(item.reclat);
        const longitude = parseFloat(item.reclong);
    
        if (!isNaN(latitude) && !isNaN(longitude)) {
            // Check if both latitude and longitude are valid numbers
            marker = L.marker([latitude, longitude], { icon: redMarkerIcon }).addTo(
            map
            );
            marker.bindPopup(
            `<b>${item.name}</b><p style="color:black">Coordinates: (${latitude}, ${longitude})</p>`
            );
            markers.push(marker);
        }
        });
    } catch (error) {
        console.error("Error:", error);
        outputElement.textContent = "Error loading map.";
    }
    }

function findMarkerByName(meteoriteName) {
    for (let i = 0; i < markers.length; i++) {
        const marker = markers[i];
        if (marker && marker.getPopup) {
        const popupContent = marker.getPopup().getContent();
        if (popupContent.includes(meteoriteName)) {
            marker.openPopup();
            break;
        }
        }
    }
    }
