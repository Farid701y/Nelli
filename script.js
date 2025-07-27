const frases = [
  "Eres la luz que ilumina mi día...",
  "Cada vez que pienso en ti, sonrío sin razón.",
  "Nelli, contigo el mundo es más bonito.",
  "Tu sonrisa es mi paz y mi alegría.",
  "Quisiera ser tu sombra para acompañarte siempre.",
  "En cada latido, tu nombre es mi canción favorita.",
  "Contigo aprendí que todo es magia y realidad.",
  "Si pudiera regalarte una estrella, sería tu felicidad.",
  "Gracias por ser inspiración y razón de mis sueños.",
  "Nelli, eres el poema más hermoso que la vida escribió para mí."
];

let indice = 0;

const fraseDiv = document.getElementById('frase');
const btn = document.getElementById('siguienteBtn');

btn.addEventListener('click', () => {
  // Efecto fade out
  fraseDiv.style.opacity = 0;
  
  setTimeout(() => {
    indice = (indice + 1) % frases.length;
    fraseDiv.textContent = frases[indice];
    // Fade in
    fraseDiv.style.opacity = 1;
  }, 600);
});
