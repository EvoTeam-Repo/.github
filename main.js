//////////////////////////////
// EvoTeam Interactive JS
//////////////////////////////

// Smooth scroll + active nav highlight
const navLinks = document.querySelectorAll('.nav-links li a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Hero Section Typewriter Effect
const heroText = "Your personal coding playground 🌐✨";
const heroElement = document.querySelector('.hero p');
let index = 0;

function typeWriter() {
    if (index < heroText.length) {
        heroElement.innerHTML += heroText.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}
heroElement.innerHTML = "";
typeWriter();

// Project Modal System
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('project-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>${card.querySelector('h3').textContent}</h2>
                <p>${card.querySelector('p').textContent}</p>
                <p>More details coming soon... 🔥</p>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    });
});

// Theme Switcher
let darkMode = false;

function toggleTheme() {
    darkMode = !darkMode;
    if(darkMode) {
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }
}

// Assign a keypress 't' to toggle theme for fun
document.addEventListener('keydown', (e) => {
    if(e.key.toLowerCase() === 't') toggleTheme();
});

// Smooth scroll button for Hero
document.getElementById('explore-btn').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Fun console Easter egg
console.log("%cWelcome to EvoTeam! 🌟 Where code evolves 🧡", "color: orange; font-size: 16px; font-weight: bold;");
console.log("%cTip: Press 'T' to toggle dark mode!", "color: yellow; font-size: 14px;");
