const imagenesACV = ['ACV_Isquemico1.png', 'ACV_Hemorragico.png', 'ACV_Mixto.png'];
let indiceImagen = 0;

function cambiarImagen(direccion) {
    const imgElement = document.getElementById('acv-image');
    if (!imgElement) return;

    indiceImagen += direccion;
    if (indiceImagen >= imagenesACV.length) indiceImagen = 0;
    if (indiceImagen < 0) indiceImagen = imagenesACV.length - 1;
    
    imgElement.src = imagenesACV[indiceImagen];
}
const imagenesParkinson = ['park1.png', 'park2.png', 'park3.png'];
let indiceImagen = 0;

function cambiarImagen(direccion) {
    const imgElement = document.getElementById('park-image');
    if (!imgElement) return;

    indiceImagen += direccion;
    if (indiceImagen >= imagenesParkinson.length) indiceImagen = 0;
    if (indiceImagen < 0) indiceImagen = imagenesParkinson.length - 1;
    
    imgElement.src = imagenesParkinson[indiceImagen];
}
