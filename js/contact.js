let kmap = L.map('kmap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(kmap);

let marker = L.marker([51.23009, 4.41616]).addTo(kmap);
marker.bindPopup('<p class="fw-bolder">Kantoor</p> <p>Ellermanstraat 33</p>').openPopup();