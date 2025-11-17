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