var instituciones = [
    {
        nombre: "Municipalidad de Trujillo",
        tasa: "11%",
        imagen: "../../imagenes/MuniTrujillo.jpg"
    },
    {
        nombre: "Universidad Nacional San Agustin de Arequipa",
        tasa: "11%",
        imagen: "../../imagenes/UNSA.jpg"
    },
    {
        nombre: "Hospital Nacional Hipolito Unanue",
        tasa: "11%",
        imagen: "../../imagenes/Hospital.jpg"
    },
    {
        nombre: "Diris Lima Norte",
        tasa: "11%",
        imagen: "../../imagenes/DirisNorte.jpg"
    },
    {
        nombre: "Diris Lima Centro",
        tasa: "10.99%",
        imagen: "../../imagenes/DirisCentro.jpg"
    },
    {
        nombre: "Diris Lima Este",
        tasa: "10.99%",
        imagen: "../../imagenes/DirisEste.jpg"
    },
    {
        nombre: "Poder Judicial",
        tasa: "11.18%",
        imagen: "../../imagenes/PoderJudicial.jpg"
    },
    {
        nombre: "Policia Nacional del Peru",
        tasa: "10.99%",
        imagen: "../../imagenes/PNP.jpg"
    },
    {
        nombre: "Ejercito Peruano",
        tasa: "11.6%",
        imagen: "../../imagenes/EjercitoPeruano.jpg"
    },
    {
        nombre: "SENASA",
        tasa: "11.35%",
        imagen: "../../imagenes/SENASA.jpg"
    },
];

var boton = document.querySelector(".MostrarConvenio");

boton.onclick = function () {
    var contenedor = document.getElementById("contenedorTabla");
    
    if (contenedor.style.display === "block") {
        contenedor.style.display = "none";
    } else {
        mostrarTabla();
    }
};

function mostrarTabla() {
    var contenedor = document.getElementById("contenedorTabla");
    contenedor.style.display = "block";
    var tabla = `
        <table>
            <tr>
                <th>Institución</th>
                <th>Tasa de Interés</th>
                <th>Logo</th>
            </tr>
    `;

    for (var i = 0; i < instituciones.length; i++) {
        tabla += `
            <tr>
                <td>${instituciones[i].nombre}</td>
                <td>${instituciones[i].tasa}</td>
                <td><img src="${instituciones[i].imagen}" alt="logo"></td>
            </tr>
        `;
    }

    tabla += "</table>";

    contenedor.innerHTML = tabla;
}

var btnConfirmar = document.querySelector('.Guardar');

if (btnConfirmar) {
    btnConfirmar.addEventListener('click', function(e) {
        e.preventDefault(); 

        var checkboxes = document.querySelectorAll('.cbx input[type="checkbox"]');
        var seleccionados = [];
        var mensaje;

        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                seleccionados.push(checkbox.value); 
            }
        });

        var cantidadSeleccionada = seleccionados.length;

        if (cantidadSeleccionada === 1) {
            var convenio = seleccionados[0];
            mensaje = 'Institucion seleccionada:\n' + convenio;
            alert(mensaje);
            
        } else if (cantidadSeleccionada > 1) {
            mensaje = 'Solo seleccione una institucion';
            alert(mensaje);
            
        } else {
            mensaje = 'Por favor seleccione una institucion';
            alert(mensaje);
        }
    });
}

