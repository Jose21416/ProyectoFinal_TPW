// Inicializar mapa
var map = L.map('map').setView([-12.194116, -76.971387], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([-12.194116, -76.971387])
  .addTo(map)
  .bindPopup("<b>Punto de Atención</b><br>Av. Carlos Villarán N° 140, Lima")
  .openPopup();

// Manejo de scroll vs interacción
const mapDiv = document.getElementById("map");

// habilita movimiento SOLO si se hace clic dentro
mapDiv.addEventListener("mousedown", () => {
  mapDiv.classList.add("active");
});

// deshabilita movimiento al salir con el mouse
mapDiv.addEventListener("mouseleave", () => {
  mapDiv.classList.remove("active");
});