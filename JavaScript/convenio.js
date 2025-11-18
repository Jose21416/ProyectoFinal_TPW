var instituciones = [
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

// Detectar el botón usando su class
var boton = document.querySelector(".MostrarConvenio");

boton.onclick = function () {
    mostrarTabla();
};

// Función que arma la tabla
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

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;
    let intervalo;

    // Mostrar slide según índice
    function mostrarSlide(n) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slides[n].classList.add("active");
    }

    // Siguiente slide
    function siguiente() {
        index = (index + 1) % slides.length;    
        mostrarSlide(index);
    }

    // Slide anterior
    function anterior() {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(index);
    }

    // Eventos botones
    nextBtn.addEventListener("click", siguiente);
    prevBtn.addEventListener("click", anterior);

    // Auto-slide cada 5s
    function iniciarAuto() {
        intervalo = setInterval(siguiente, 5000);
    }

    // Pausar al poner mouse encima
    document.querySelector(".slider-container").addEventListener("mouseenter", () => {
        clearInterval(intervalo);
    });

    // Reanudar auto-slide
    document.querySelector(".slider-container").addEventListener("mouseleave", () => {
        iniciarAuto();
    });

    // Iniciar
    mostrarSlide(index);
    iniciarAuto();
});