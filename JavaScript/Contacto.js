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




//--formulario de contacto--//

let baseDeDatos = [];

document.addEventListener('DOMContentLoaded', function() {

    const formulario = document.getElementById('miFormulario');
    const divResultado = document.getElementById('resultado');
    
    const checkTerminos = document.getElementById('terminos');
    const linkTerminos = document.getElementById('linkTerminos');

    if (linkTerminos && checkTerminos) {
        linkTerminos.addEventListener('click', function(e) {
            e.preventDefault();
            
            alert("Has abierto la Política de Privacidad.");
            
            checkTerminos.disabled = false;
            checkTerminos.focus();
        });
    }

    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();

            const nombre = document.getElementById('fullname').value.trim();
            const correo = document.getElementById('email').value.trim();
            const telefono = document.getElementById('phone').value.trim();
            const mensaje = document.getElementById('message').value.trim();

            // --- NUEVOS CAMPOS ---
            const preferencia = document.querySelector('input[name="preferencia"]:checked');
            const motivo = document.getElementById('motivo').value;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // --- VALIDACIONES ---
            if (nombre.length < 3) {
                alert('Por favor, escribe un nombre válido (mínimo 3 letras).');
                return;

            } else if (!/^\d+$/.test(telefono)) {
                alert('El celular solo debe contener números.');
                return;

            } else if (telefono.length < 9) {
                alert('El número de celular debe tener al menos 9 dígitos.');
                return;

            } else if (!emailRegex.test(correo)) {
                alert('Por favor, ingresa un correo válido.');
                return;

            } else if (!preferencia) {
                alert('Selecciona tu preferencia de contacto.');
                return;

            } else if (motivo === "") {
                alert('Selecciona un motivo de contacto.');
                return;

            } else if (mensaje === "") {
                alert('El campo mensaje no puede estar vacío.');
                return;

            } else if (!checkTerminos.checked) {
                alert('Debes aceptar la Política de Privacidad.');
                return;
            }

            // --- REGISTRO A GUARDAR ---
            const nuevoRegistro = {
                id: baseDeDatos.length + 1,
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                preferencia: preferencia.value,
                motivo: motivo,
                mensaje: mensaje,
                terminosAceptados: true,
                fecha: new Date().toLocaleString()
            };

            baseDeDatos.push(nuevoRegistro);

            console.clear();
            console.log("Formulario enviado correctamente.");
            console.table(baseDeDatos);

            if (divResultado) {
                divResultado.style.display = 'block';
                divResultado.innerHTML = `
                    <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin-top: 15px; border: 1px solid #4caf50;">
                        <h4 style="color: #2e7d32; margin-top:0;">Enviado Exitosamente</h4>
                        <p>Gracias <strong>${nombre}</strong>, hemos recibido tu mensaje.</p>
                    </div>
                `;
            }

            alert("Datos guardados correctamente.");

            formulario.reset();

            checkTerminos.checked = false;
            checkTerminos.disabled = true;
        });
    }
});
