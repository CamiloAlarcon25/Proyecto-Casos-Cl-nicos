// Lista de imágenes para el carrusel de ACV
const imagenesACV = ['ACV_Isquemico1.png', 'ACV_Hemorragico.png', 'ACV_Mixto.png'];
let indiceImagen = 0;

/**
 * Cambia la imagen en el carrusel de la página de ACV
 * @param {number} direccion - 1 para siguiente, -1 para anterior
 */
function cambiarImagen(direccion) {
    const imgElement = document.getElementById('acv-image');
    
    // Validar que el elemento existe antes de intentar cambiarlo
    if (!imgElement) {
        console.warn("El elemento con ID 'acv-image' no fue encontrado en esta página.");
        return;
    }
    
    // Calcular el nuevo índice de forma cíclica
    indiceImagen += direccion;
    
    if (indiceImagen >= imagenesACV.length) {
        indiceImagen = 0;
    } else if (indiceImagen < 0) {
        indiceImagen = imagenesACV.length - 1;
    }
    
    // Actualizar la fuente de la imagen
    imgElement.src = imagenesACV[indiceImagen];
}
