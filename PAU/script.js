// --- Contenido Emocional (Tus Mensajes) ---
const planetContent = {
    "planet-1": {
        title: "🌌 Planeta Mi Paz",
        text: "Había llegado a la triste conclusión de que el amor no valía el riesgo, pero justo cuando mi corazón estaba más cerrado, llegaste tú de forma completamente inesperada y lo cambiaste todo. Tú eres mi paz porque no tengo que esforzarme en ser nadie más. Contigo, puedo simplemente ser yo, y en esa autenticidad —sabiendo que siempre me escuchas y me apoyas— encuentro la mayor felicidad y tranquilidad.",
        imageSrc: "planeta1.jpeg" 
    },
    "planet-2": {
        title: "💪 Planeta Mi Fuerza",
        text: "Si tú eres mi paz, también eres mi impulso más grande. En estos cinco meses, he aprendido que no hay desafío que no podamos enfrentar, porque tu fe en mí es más fuerte que cualquiera de mis dudas. Cada vez que siento que no puedo seguir, recuerdo tus palabras y tu apoyo incondicional, y encuentro la fuerza para seguir adelante. Eres mi roca, mi inspiración, y gracias a ti, me siento capaz de conquistar cualquier cosa.",
        imageSrc: "planeta2.jpeg"
    },
    "planet-3": {
        title: "🎨 Planeta Mis Colores",
        text: "Dicen que una persona le da color a tu vida. En mi caso, tú le diste una paleta de colores vibrantes a mi mundo, especialmente en los momentos que nadie más vería como especiales. Eres la razón de mi risa tonta. Eres la chispa que hace que cada día sea una aventura llena de alegría y diversión. Contigo, incluso las tareas más simples se convierten en recuerdos inolvidables. Gracias por pintar mi vida con tus colores únicos y por hacer que cada momento juntos sea una obra de arte.",
        imageSrc: "color.jpeg" 
    },
    "planet-4": {
        title: "💫 Planeta El Futuro",
        text: "Cinco meses es solo el prólogo de nuestra historia. Si el pasado ha sido mágico, el futuro es una página en blanco que me emociona escribir solo contigo. Tú has convertido mis sueños lejanos en planes cercanos, y cada día que pasa, me siento más emocionado por todo lo que nos espera. Juntos, construiremos un futuro lleno de amor, aventuras y momentos inolvidables. Gracias por ser mi compañera y por hacer que cada día a tu lado sea una bendición.",
        imageSrc: "planeta4.jpeg"
    },
    "planet-5": {
        title: "🌟 La Galaxia Oculta 🌟",
        text: "Si los últimos cuatro planetas te hablaron de paz, fuerza, colores y futuro, este último mensaje es el núcleo de todo: Eres la fuerza de gravedad que lo mantiene todo en su sitio. Mi vida no giraba antes de ti; solo se movía sin rumbo. Hoy, tú eres mi sol, mi centro, la luz que no solo ilumina, sino que organiza toda mi galaxia. Gracias por 5 meses de transformar mi mundo. Gracias por ser tú, por escuchar y por amar a la persona que soy. Eres la mejor parte de mi vida, mi amor. ¡Felices 5 meses, mi universo entero! Te amo con todo lo que soy.",
        imageSrc: "planetafinal.jpeg"
    }
};

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalImage = document.getElementById('modal-image');

// --- Lógica del Juego (Desbloqueo en Orden) ---
let nivelActual = 1; // Solo se puede abrir el 1 al principio

function openModal(planetId) {
    // Averigua el número del planeta (ej: "planet-2" -> 2)
    const numeroPlaneta = parseInt(planetId.split('-')[1]);

    // Si intenta abrir uno del futuro, le damos un aviso
    if (numeroPlaneta > nivelActual) {
        alert("⛔ ¡Epa! No te adelantes. Debes desbloquear los recuerdos en orden. ❤️");
        return; 
    }

    // Si el nivel es correcto, cargamos el contenido
    const content = planetContent[planetId];
    if (!content) return;

    modalTitle.textContent = content.title;
    modalText.textContent = content.text;

    // Manejo de imagen
    if (content.imageSrc) {
        modalImage.src = content.imageSrc;
        modalImage.classList.remove('hidden');
    } else {
        modalImage.classList.add('hidden');
    }

    modal.classList.remove('hidden');

    // DESBLOQUEAR EL SIGUIENTE NIVEL
    if (numeroPlaneta === nivelActual) {
        nivelActual++; // Sube de nivel
        desbloquearVisualmente(nivelActual);
    }
}

function desbloquearVisualmente(siguienteNivel) {
    // Busca el ID 'p2', 'p3', etc.
    const siguientePlaneta = document.getElementById('p' + siguienteNivel);
    
    // Si existe el planeta, le quitamos lo gris (clase locked)
    if (siguientePlaneta) {
        siguientePlaneta.classList.remove('locked');
    }
}

function closeModal() {
    modal.classList.add('hidden');
}

// Cerrar con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});