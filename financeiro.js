// Inicializar os Ícones
lucide.createIcons();

// Elementos do DOM
const sidebar = document.getElementById('sidebar');
const mainWrapper = document.getElementById('mainWrapper');
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const overlay = document.getElementById('overlay');

/* ==========================================
   1. ALTERNAR SIDEBAR (DESKTOP & MOBILE)
   ========================================== */
toggleSidebarBtn.addEventListener('click', () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Modo Mobile: Abre como gaveta (drawer)
        sidebar.classList.toggle('mobile-open');
        overlay.classList.toggle('active');
    } else {
        // Modo Desktop: Encolhe para mini-sidebar
        sidebar.classList.toggle('collapsed');
        mainWrapper.classList.toggle('expanded');
    }
});

// Fechar sidebar no mobile clicando na sombra
function closeMobileSidebar() {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
}

/* ==========================================
   2. ALTERNAR TEMA (LIGHT / DARK MODE)
   ========================================== */
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeIcon.setAttribute('data-lucide', 'moon');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.setAttribute('data-lucide', 'sun');
    }
    
    // Re-renderizar o ícone do Lucide
    lucide.createIcons();
});