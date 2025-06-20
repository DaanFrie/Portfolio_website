// Mobile Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('nav-toggle');
    const closeButton  = document.getElementById('nav-close');
    const menu         = document.getElementById('nav-menu');
    const overlay      = document.getElementById('nav-overlay');
    const body         = document.body;

    function openMenu() {
        menu.classList.remove('-translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-100');
        body.classList.add('overflow-hidden'); // voorkom scrollen
    }

    function closeMenu() {
        menu.classList.add('-translate-x-full');
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        body.classList.remove('overflow-hidden'); // herstel scrollen
    }

    toggleButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
});


// Smooth Scrolling Navigation
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sec = document.querySelector(link.getAttribute("href"));
            sec?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Intersection Observer for Animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("visible", entry.isIntersecting);
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right").forEach((el) => {
        observer.observe(el);
    });
});

// Custom Scroll Indicator
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const indicator = document.getElementById('scroll-indicator');
    indicator.style.height = scrollPercent + 'vh';
});

// Console Log for Development
document.addEventListener("DOMContentLoaded", () => {
    console.log(`
    ⚫✨ Portfolio Loaded Successfully! ⚫✨
    
    🖤 Simple & Working:
    • Pure black backgrounds
    • Simple fade-in animations (once only)
    • No complex stagger effects
    • No bidirectional animations
    • Clean and stable
    
    📧 Contact: daan.developer@email.com
  `);
});