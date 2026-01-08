tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: { sans: ['Poppins', 'sans-serif'] },
            colors: {
                primary: '#0ea5e9',
                stone: '#00a14b',
                dark: { bg: '#0f172a', card: '#1e293b', text: '#f8fafc' },
                light: { bg: '#f8fafc', card: '#ffffff', text: '#334155' }
            },
            animation: { 'float': 'float 6s ease-in-out infinite' },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
}

// Lógica de Tema
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
}
themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
});

// Menu Mobile
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
document.querySelectorAll('.mobile-link').forEach(link => { link.addEventListener('click', () => mobileMenu.classList.add('hidden')); });

// Efeito Navbar no Scroll
const navbar = document.getElementById('header-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.firstElementChild.classList.replace('h-20', 'h-16');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.firstElementChild.classList.replace('h-16', 'h-20');
    }
});

// Lógica do Modal de Imagem
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');

window.openModal = (src, caption) => {
    modalImg.src = src;
    modalCaption.textContent = caption;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Impede scroll ao abrir
};

const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Libera scroll ao fechar
};

document.getElementById('close-modal').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.id === 'modal-img') closeModal();
});

// Fechar com a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});