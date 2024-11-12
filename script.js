// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animação de fade-in para cards de benefícios
    const benefitCards = document.querySelectorAll('.benefit-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    benefitCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });

    // Contador para preços
    const priceElements = document.querySelectorAll('.price');
    priceElements.forEach(price => {
        const finalPrice = parseInt(price.textContent.replace(/[^0-9]/g, ''));
        let currentPrice = 0;
        const duration = 1000; // 1 segundo
        const steps = 20;
        const increment = finalPrice / steps;

        const timer = setInterval(() => {
            currentPrice += increment;
            if (currentPrice >= finalPrice) {
                clearInterval(timer);
                price.textContent = `R$ ${finalPrice}`;
            } else {
                price.textContent = `R$ ${Math.floor(currentPrice)}`;
            }
        }, duration / steps);
    });

    // Destacar card de preço ao hover
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'scale(1.03)';
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'scale(1)';
            }
        });
    });

    // Botões de compra
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aqui você pode adicionar a lógica de compra
            alert('Redirecionando para o checkout...');
        });
    });

    // Animação do botão de download do ebook
    const downloadButton = document.querySelector('.outline-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            downloadButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                downloadButton.style.transform = 'scale(1)';
                // Aqui você pode adicionar a lógica de download
                alert('Iniciando download do e-book...');
            }, 150);
        });
    }
});