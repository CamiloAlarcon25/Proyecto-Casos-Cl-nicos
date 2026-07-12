/* --- CAMBIO: Sustituye tu antiguo .viewer-container por esto --- */

/* Contenedor padre que pone el 3D y la imagen lado a lado */
.split-wrapper {
    display: flex;
    flex-direction: row; /* Alinea los elementos horizontalmente */
    height: 450px;       /* Altura fija para el área visual */
    width: 100%;
    margin: 20px 0;
    gap: 15px;           /* Un pequeño espacio entre el 3D y la imagen */
}

/* Ambos contenedores ocupan el 50% del ancho */
.viewer-wrapper, .info-wrapper {
    flex: 1;             /* Hace que ambos tengan el mismo tamaño */
    height: 100%;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    background: #f8f9fa;
}

/* Ajuste para el visor 3D */
model-viewer {
    width: 100%;
    height: 100%;
}

/* Estilo para la imagen informativa estática */
.static-img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Muestra la imagen completa sin recortar */
    background-color: #ffffff;
    display: block;
}

/* --- FIN DEL CAMBIO1 --- */

let indiceImagen = 0;
const imagenes = ['ACV_Isquemico1.png', 'ACV_Hemorragico.png', 'ACV_Mixto.png']; // Asegúrate que los nombres coincidan

function cambiarImagen(direccion) {
    const imgElement = document.getElementById('acv-image');
    
    // Calcular el nuevo índice
    indiceImagen += direccion;
    
    // Lógica para que sea cíclico (si llega al final vuelve al inicio)
    if (indiceImagen >= imagenes.length) indiceImagen = 0;
    if (indiceImagen < 0) indiceImagen = imagenes.length - 1;
    
    // Cambiar la fuente
    imgElement.src = imagenes[indiceImagen];
}
