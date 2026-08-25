document.addEventListener("DOMContentLoaded", function () {
    const anio = document.getElementById("anio");
    const modoBtn = document.getElementById("modoBtn");
    const formulario = document.getElementById("contactoForm");
    const botonesProyecto = document.querySelectorAll(".verProyecto");

    anio.textContent = new Date().getFullYear();

    modoBtn.addEventListener("click", function () {
        document.body.classList.toggle("oscuro");

        if (document.body.classList.contains("oscuro")) {
            modoBtn.textContent = "☀️ Modo claro";
        } else {
            modoBtn.textContent = "🌙 Modo oscuro";
        }
    });

    botonesProyecto.forEach(function (boton) {
        boton.addEventListener("click", function () {
            alert("Este proyecto es una demostración de mi portafolio.");
        });
    });

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();

        alert("¡Gracias, " + nombre + "! Tu mensaje fue recibido.");
        formulario.reset();
    });
});