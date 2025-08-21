const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const cardContainer = document.querySelector('.card-container');
const romanticMessage = document.getElementById('romantic-message');
const song = document.getElementById('romantic-song');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth * 0.4 - 100);
    const y = Math.random() * (window.innerHeight * 0.4 - 100);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Lógica para el botón "Sí"
yesBtn.addEventListener('click', () => {
    // 1. Oculta la tarjeta principal
    cardContainer.style.display = 'none';

    // 2. Muestra el mensaje romántico con la animación
    romanticMessage.classList.remove('hidden-message');
    romanticMessage.classList.add('visible-message');

    // 3. Lanza el confeti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // 4. Inicia la reproducción de la canción
    song.play();
});

// Agrega estas variables
const mainCard = document.getElementById('main-card');


yesBtn.addEventListener('click', () => {
    // Escondemos la tarjeta principal
    mainCard.classList.add('hidden-screen');

    // Mostramos el mensaje romántico después de 1 segundo para el efecto de transición
    setTimeout(() => {
        romanticMessage.classList.add('visible-message');
    }, 1000);

    // Reproduce la música o lanza el confeti aquí...
});
// ... (El resto de tu código, incluyendo la selección de exitBtn) ...

const exitBtn = document.getElementById('exit-btn');

// Lógica para el botón de salir que redirige al chat de WhatsApp
exitBtn.addEventListener('click', () => {
    // Reemplaza +51987654321 con su número de teléfono completo, incluyendo el código de país.
    const whatsappUrl = "https://wa.me/+51925601235";

   
    window.location.href = whatsappUrl;
});