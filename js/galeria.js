//____________________Galería con loop infinito____________________________
const videos = Array.from(document.querySelectorAll(".video"));
const botonDer = document.querySelector("#pasarImagenDer");
const botonIzq = document.querySelector("#pasarImagenIzq");

let indice = 0;

// Mostrar el primer video
mostrarVideo(indice);

// Navegación con loop
botonDer.addEventListener("click", e => {
  e.preventDefault();
  indice = (indice + 1) % videos.length; // vuelve a 0 al llegar al final
  mostrarVideo(indice);
});

botonIzq.addEventListener("click", e => {
  e.preventDefault();
  indice = (indice - 1 + videos.length) % videos.length; // vuelve al último si es negativo
  mostrarVideo(indice);
});

// Función para mostrar solo el video actual
function mostrarVideo(i) {
  videos.forEach((v, idx) => {
    v.style.display = idx == i ? "flex" : "none";
    v.style.flexDirection = "column"; 
    v.style.alignItems = "center";
  });
}
