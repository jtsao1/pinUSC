// alert('ahh');
var map = L.map('map').setView([34.02210372599966, -118.28610378009327], 15.5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamFkeXQiLCJhIjoiY2t6dXBkdWc5MDNtejJ1bXk5MTRsMHVtZSJ9.MfvsNyJvrt1Kl24zD3wuNA'
}).addTo(map);

var jadys_tree = L.marker([34.019878651034475, -118.2857264632366]).addTo(map)
jadys_tree.bindPopup("<b>Jady's Tree!</b><br><iframe width=\"300px\" height=\"300px\" allowFullScreen=\"true\" allow=\"accelerometer; magnetometer; gyroscope\" style=\"display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px; box-shadow: 0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11);\" src=\"https://panoraven.com/en/embed/BsTi9klO2P\"></iframe>");
var tommy_trojan = L.marker([34.020578599590166, -118.28544484137373]).addTo(map)
var alumni_park = L.marker([34.02075754352828, -118.28446270718727]).addTo(map)
var trojan_family_room = L.marker([34.01992933219847, -118.28622627524467]).addTo(map)
trojan_family_room.bindPopup("<b>Trojan Family Room</b><br><iframe width=\"300px\" height=\"300px\" allowFullScreen=\"true\" allow=\"accelerometer; magnetometer; gyroscope\" style=\"display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px; box-shadow: 0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11);\" src=\"https://panoraven.com/en/embed/nIIeMJnTQf\"></iframe>")

// <iframe width="90%" height="500px" allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px; box-shadow: 0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11);" src="https://panoraven.com/en/embed/BsTi9klO2P"></iframe>
// <iframe width="90%" height="500px" allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px; box-shadow: 0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11);" src="https://panoraven.com/en/embed/nIIeMJnTQf"></iframe>
