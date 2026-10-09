document.addEventListener("DOMContentLoaded", function () {

    // Año actual

    document.getElementById("anio").textContent =
        new Date().getFullYear();


    // Modo oscuro

    const modoBtn = document.getElementById("modoBtn");

    modoBtn.addEventListener("click", function () {

        document.body.classList.toggle("oscuro");

        if (document.body.classList.contains("oscuro")) {

            modoBtn.textContent = "☀️ Modo claro";

        } else {

            modoBtn.textContent = "🌙 Modo oscuro";

        }

    });


    // Formulario

    const formulario =
        document.getElementById("contactoForm");

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombre =
            document.getElementById("nombre").value;

        alert(
            "¡Gracias, " +
            nombre +
            "! Tu mensaje fue recibido."
        );

        formulario.reset();

    });

});

