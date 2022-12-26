let rmap = L.map('rmap').setView([51.221690, 4.325649], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(rmap);

var myIcon = L.icon({
    iconUrl: '../assets/images/ksa.png',
    iconSize: [35, 35],
});


let marker = L.marker([51.221690, 4.325649], {icon: myIcon}).addTo(rmap);
marker.bindPopup('<p class="fw-bolder">Jeugdbeweging</p> <p>Richard Orlentstraat 43 </br> 2070 Zwijndrecht</p>').openPopup();

