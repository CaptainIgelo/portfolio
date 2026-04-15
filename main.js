
// highlight for nav links on scrolled sections 
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '-10% 0px -10% 0px'
});

sections.forEach(section => observer.observe(section));



// typing effect in Herosection

const typedTarget = document.querySelector('.hero h2');
const phrases = [
    'Technisch erfahren, lernbereit, offen', 
    'Praktikum gesucht im großraum Köln', 
];


let phraseIndex = 0; 
let charIndex = 0;
let isDeleting = false; 


const type = () => {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typedTarget.textContent = currentPhrase.slice(0, charIndex -1);
        charIndex--; 
    } else {
        typedTarget.textContent = currentPhrase.slice(0, charIndex + 1);
        charIndex ++;
    }


    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => {isDeleting = true; type();}, 2000);
        return;
    }


    if (isDeleting && charIndex === 0) {
        isDeleting = false; 
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const speed = isDeleting ? 40 : 80; 
    setTimeout(type, speed); 

};

type(); 