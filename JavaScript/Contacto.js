function initMap() {
  const ubicacion = { lat: -12.092039355985108, lng: -77.02400398467609 };

  // Crear el mapa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: ubicacion,
    disableDefaultUI: true, // true si quieres quitar los controles
    //gestureHandling: "greedy",
    styles: [
      { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
    ],
  });

  // Agregar marcador personalizado
  new google.maps.Marker({
    position: ubicacion,
    map,
    title: "Universidad Tecnológica del Perú",
  });
}