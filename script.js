document.addEventListener("DOMContentLoaded", () => {
  const anio = document.getElementById("anio");
  const modoBtn = document.getElementById("modoBtn");
  const formulario = document.getElementById("contactoForm");

  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

  if (formulario) {
    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      const asunto = encodeURIComponent(`Mensaje de ${nombre}`);
      const cuerpo = encodeURIComponent(
        `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`
      );

      window.location.href =
        `mailto:samaelangel513@gmail.com?subject=${asunto}&body=${cuerpo}`;
    });
  }

});

// Tema oscuro: un solo controlador y preferencia guardada en el navegador.
const temaGuardado = localStorage.getItem("tema");
const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
const iniciarOscuro = temaGuardado ? temaGuardado === "oscuro" : prefiereOscuro;

function actualizarBotonTema() {
  const oscuro = document.body.classList.contains("oscuro");
  modoBtn.setAttribute("aria-pressed", String(oscuro));
  modoBtn.setAttribute(
    "aria-label",
    oscuro ? "Activar modo claro" : "Activar modo oscuro"
  );
  modoBtn.innerHTML = oscuro
    ? '<span aria-hidden="true">☀️</span><span class="tema-texto">Modo claro</span>'
    : '<span aria-hidden="true">🌙</span><span class="tema-texto">Modo oscuro</span>';
}

if (iniciarOscuro) {
  document.body.classList.add("oscuro");
}

if (modoBtn) {
  actualizarBotonTema();

  modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    const tema = document.body.classList.contains("oscuro") ? "oscuro" : "claro";
    localStorage.setItem("tema", tema);
    actualizarBotonTema();
  });
}

// Este formulario abre el programa de correo; no almacena ni envía datos a un servidor.
if (formulario) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const destinatario = "samaelangel513@gmail.com"; // Reemplaza por tu correo real
    const asunto = encodeURIComponent(`Mensaje desde el portafolio de ${nombre}`);
    const cuerpo = encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`
    );

    window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
  });
}
