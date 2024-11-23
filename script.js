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


function toggleChat() {
    var chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    var input = document.getElementById('messageInput');
    var message = input.value.trim();
    
    if (message === '') return;

    // Adiciona mensagem do usuário
    addMessage(message, 'user-message');
    input.value = '';

    // Simula resposta do bot após 1 segundo
    setTimeout(function() {
        var response = getBotResponse(message);
        addMessage(response, 'bot-message');
    }, 1000);
}

function addMessage(text, className) {
    var messagesDiv = document.getElementById('chatMessages');
    var messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + className;
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getBotResponse(message) {
    // Converte mensagem para minúsculas para facilitar a comparação
    message = message.toLowerCase();

    // Respostas básicas do bot
    if (message.includes('olá') || message.includes('oi')) {
        return 'Olá! Como posso ajudar você hoje?';
    }
    
    else if (message.includes('preço') || message.includes('valor')) {
        return 'O eBook custa R$57,90 e oferece um aprendizado completo em programação, com foco em lógica, algoritmos e estruturas de dados. ';
    }
    
    else if (message.includes('aprendizado') || message.includes('sobre') || message.includes('o que')) {
        return 'Oferecemos um eBook completo para quem quer começar na programação, aprendendo desde a lógica até as práticas do mercado';
    }
   
    else if (message.includes('contato') || message.includes('saber mais')) {
        return 'Você pode nos contatar pelo nosso email ebookiniciantesprogramacao@gmail.com ';
    }
    
    else if (message.includes('indicado') || message.includes('iniciante') || message.includes('publico') || message.includes('público')){
        return 'Esse ebook é perfeito para quem está começando, oferecendo uma base sólida e fácil de entender';
    }

    else if (message.includes('conteudo') || message.includes('conteúdo')) {
        return 'O eBook cobre fundamentos essenciais da programação, incluindo lógica, algoritmos e estruturas de dados, com exercícios práticos.';
    }
   
    else if (message.includes('formato') || message.includes('acesso')) {
        return 'O eBook será enviado ao EMAIL cadastrado por você na hora de efetuar a compra com acesso imediato , em formato de PDF';
    }

    else if (message.includes('vale') || message.includes('bom')) {
     return 'O eBook é muito valioso se você é um iniciante que deseja aprender muito sobre programação';
    }

         else if (message.includes('garantia') || message.includes('devolução')) {
        return 'Após a compra você tem 7 DIAS DE GARANTIA e se por acaso você queira devolver , você recebe seu dinheiro de volta na hora';
    }
             
    else {
        return 'Obrigado esperamos que goste do nosso ebook';
    }
}

// Permite enviar mensagem com Enter
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
