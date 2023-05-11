document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contact-btn");

    contactBtn.addEventListener("click", function () {
        const email = "rangel.diego@correounivalle.edu.co";
        const subject = "Contacto desde la Hoja de Vida";
        const body = "Por favor, escriba aquí su mensaje...";
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
});
