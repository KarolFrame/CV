document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            const contenido = this.parentElement.nextElementSibling;
            const icono = this.querySelector("i");

            if (contenido.style.opacity === "0" || contenido.style.opacity === "") {
                contenido.style.display = "block";
                setTimeout(() => {
                    contenido.style.opacity = 1;  // Desvanecimiento hacia visible
                }, 10);  // Asegura que el cambio de opacidad ocurra después de que el contenido se muestre
                icono.classList.replace("fa-arrow-down", "fa-arrow-up");
            } else {
                contenido.style.opacity = 0;  // Desvanecimiento hacia invisible
                setTimeout(() => {
                    contenido.style.display = "none";
                }, 500);  // Espera a que el desvanecimiento termine antes de ocultar el contenido
                icono.classList.replace("fa-arrow-up", "fa-arrow-down");
            }
        });
    });
});
