// alert('ahh');
var uscCoord = [34.02210372599966, -118.28610378009327]

result = [
  {
    "name": "Jady's Tree",
    "latitudes": 34.019878651034475,
    "longitudes": -118.2857264632366,
    "img": "https://panoraven.com/en/embed/BsTi9klO2P",
    "stars": 4.5,
    "reviewCNT": 3,
  },
  {
    "name": "Tommy Trojan",
    "latitudes": 34.020578599590166,
    "longitudes": -118.28544484137373,
    "img": "https://panoraven.com/en/embed/ezeIVALRKS",
    "stars": 3.5,
    "reviewCNT": 300,
  },
  {
    "name": "Alumni Park",
    "latitudes": 34.02075754352828,
    "longitudes": -118.28446270718727,
    "img": "https://panoraven.com/en/embed/7wlBDxWAXd",
    "stars": 4,
    "reviewCNT": 54,
  },
  {
    "name": "Trojan Family Room",
    "latitudes": 34.01992933219847,
    "longitudes": -118.28622627524467,
    "img": "https://panoraven.com/en/embed/nIIeMJnTQf",
    "stars": 4.5,
    "reviewCNT": 3,
  },
]

var lg = L.layerGroup()

for (let i=0; i<result.length; i++) {
    var name = result[i].name;
    var stars = result[i].stars;
    var reviewCNT = result[i].reviewCNT;
    var img = result[i].img;
    var popUpStr = `<b>${name}</b><br>${stars} stars ${reviewCNT} reviews<br><iframe width=\"300px\" height=\"300px\" allowFullScreen=\"true\" allow=\"accelerometer; magnetometer; gyroscope\" style=\"display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px; box-shadow: 0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11);\" src=\"${img}\"></iframe>`;
    var mark = L.marker([result[i].latitudes, result[i].longitudes]).bindPopup(popUpStr).addTo(lg);
}

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamFkeXQiLCJhIjoiY2t6dXBkdWc5MDNtejJ1bXk5MTRsMHVtZSJ9.MfvsNyJvrt1Kl24zD3wuNA'
});

var map = L.map('map', {
    center: uscCoord,
    zoom: 15,
    layers: [streets, lg]
});

var baseMaps = {
    "Streets": streets
}
var overlayMaps = {
    "Eat": lg
};
L.control.layers(baseMaps, overlayMaps).addTo(map);
