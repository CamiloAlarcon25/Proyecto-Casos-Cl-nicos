const imagenesACV = ['acv1.png', 'acv2.png', 'acv3.png'];
let indiceImagen = 0;

function cambiarImagen(direccion) {
    const imgElement = document.getElementById('acv-image');
    if (!imgElement) return;

    indiceImagen += direccion;
    if (indiceImagen >= imagenesACV.length) indiceImagen = 0;
    if (indiceImagen < 0) indiceImagen = imagenesACV.length - 1;
    
    imgElement.src = imagenesACV[indiceImagen];
}
// --- CARRUSEL PARKINSON ---
const imagenesParkinson = ['park1.png', 'park2r.png', 'park3.png'];
let indiceParkinson = 0;

function cambiarImagenParkinson(direccion) {
    const imgElement = document.getElementById('parkinson-image');
    if (!imgElement) return;

    indiceParkinson += direccion;
    
    if (indiceParkinson >= imagenesParkinson.length) indiceParkinson = 0;
    if (indiceParkinson < 0) indiceParkinson = imagenesParkinson.length - 1;
    
    imgElement.src = imagenesParkinson[indiceParkinson];
}
