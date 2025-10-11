function initMap() {
  const ubicacion = { lat: -12.194116, lng: -76.971387 };

  // Crear el mapa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ubicacion,
    disableDefaultUI: true, // true si quieres quitar los controles
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
