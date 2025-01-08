// Función para cambiar el tema
function toggleTheme() {
    const body = document.body;
    const checkbox = document.getElementById('input');
    
    if (checkbox.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Función para descargar CV
function downloadCV() {
    const cvUrl = './CV_MarcoPinzon.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_MarcoPinzon.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Función para animar las barras de skills al ser visibles
function animateSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width');
            }
        });
    });

    document.querySelectorAll('.skill-level').forEach(skill => {
        skill.style.width = '1';
        skill.setAttribute('data-width', skill.style.width);
        observer.observe(skill);
    });
}

// Cargar tema guardado y configurar event listeners
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const checkbox = document.getElementById('input');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        checkbox.checked = true;
    }

    // Event listeners
    checkbox.addEventListener('change', toggleTheme);
    document.querySelector('.cv-download').addEventListener('click', downloadCV);

    // Iniciar animación de skills
    animateSkillBars();
});