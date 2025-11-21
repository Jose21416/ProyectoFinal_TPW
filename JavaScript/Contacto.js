window.initMap = function() {
  const ubicacion = { lat: -12.092039355985108, lng: -77.02400398467609 };

  // Crear el mapa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
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
};


//---FORMULARIO DE CONTACTO---//
document.addEventListener('DOMContentLoaded', function() {

    const formulario = document.getElementById('miFormulario');
    const divResultado = document.getElementById('resultado');

    if (formulario) {
        formulario.addEventListener('submit', function(evento) {

            evento.preventDefault();

            const nombre = document.getElementById('fullname').value.trim();
            const correo = document.getElementById('email').value.trim();
            const telefono = document.getElementById('phone').value.trim();
            const opcional = document.getElementById('affair').value.trim();
            const mensaje = document.getElementById('message').value.trim();
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            /* --- INICIO DE VALIDACIONES --- */

            if (nombre.length < 3) {
                alert('Por favor, escribe un nombre válido (mínimo 3 letras).');

            } else if (!/^\d+$/.test(telefono)) {
                alert('El celular solo debe contener números.');
            
            } else if (telefono.length < 9) {
                alert('El número de celular debe tener al menos 9 dígitos.');
            
            } else if (!emailRegex.test(correo)) {
                alert('Por favor, ingresa una dirección de correo válida.');
            
            } else if (mensaje === "") {
                alert('El campo de mensaje no puede estar vacío.');
            
            } else {
                
                if (divResultado) {
                    divResultado.style.display = 'block';
                    divResultado.innerHTML = `
                        <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin-top: 15px; border: 1px solid #4caf50;">
                            <h4 style="color: #2e7d32; margin-top:0;">✅ ¡Mensaje Enviado!</h4>
                            <p><strong>De:</strong> ${nombre}</p>
                            <p><strong>Correo:</strong> ${correo}</p>
                            <p><strong>Celular:</strong> ${telefono}</p>
                            <p><strong>Asunto:</strong> ${opcional || '---'}</p>
                            <p><strong>Mensaje:</strong> ${mensaje}</p>
                        </div>
                    `;
                }

                alert("Gracias por contactarnos. Hemos recibido tus datos.");
                formulario.reset();
            }
        });
    }
});
