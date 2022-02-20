// alert('ahh');
var map = L.map('map').setView([34.02210372599966, -118.28610378009327], 15.5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFkeXQiLCJhIjoiY2t6dXBkdWc5MDNtejJ1bXk5MTRsMHVtZSJ9.MfvsNyJvrt1Kl24zD3wuNA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);
