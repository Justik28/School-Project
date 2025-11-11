// Initialize gradient canvas animation
function initGradientCanvas() {
    const canvas = document.getElementById('gradient-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let time = 0;
    const speed = 0.002;
    
    function animate() {
        time += speed;
        
        // Create animated gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        
        const r1 = Math.sin(time) * 127 + 128;
        const g1 = Math.sin(time + 2) * 127 + 128;
        const b1 = Math.sin(time + 4) * 127 + 128;
        
        const r2 = Math.sin(time + 1) * 127 + 128;
        const g2 = Math.sin(time + 3) * 127 + 128;
        const b2 = Math.sin(time + 5) * 127 + 128;
        
        gradient.addColorStop(0, `rgb(${r1|0}, ${g1|0}, ${b1|0})`);
        gradient.addColorStop(1, `rgb(${r2|0}, ${g2|0}, ${b2|0})`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize listener
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Set active nav link based on current page
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initGradientCanvas();
    updateActiveNav();
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});