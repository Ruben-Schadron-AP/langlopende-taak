let cmap = L.map('cmap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(cmap);

let marker = L.marker([51.23009, 4.41616]).addTo(cmap);
marker.bindPopup('<p class="fw-bolder">Kantoor</p> <p>Ellermanstraat 33</p>').openPopup();