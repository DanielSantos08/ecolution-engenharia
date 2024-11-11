function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function redirecionarWhatsApp() {
    const numeroWhatsApp = "5571999470541"; // Insira o número de telefone com o código do país
    const mensagem = "Olá! Gostaria de saber mais sobre os serviços da Ecolution."; // Mensagem padrão

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

let indices = {}; // Armazena o índice atual de cada carrossel

function mover(direction, button) {
    const carrossel = button.closest('.carrossel-html');
    const fotos = carrossel.querySelector('.fotos');
    const imagens = fotos.children;
    const totalImagens = imagens.length;

    // Verifica o índice do carrossel
    const carrosselIndex = carrossel.dataset.index || 0;

    // Atualiza o índice atual
    indices[carrosselIndex] = (indices[carrosselIndex] || 0) + direction;

    // Verifica limites
    if (indices[carrosselIndex] < 0) {
        indices[carrosselIndex] = totalImagens - 1;
    } else if (indices[carrosselIndex] >= totalImagens) {
        indices[carrosselIndex] = 0;
    }

    // Move as imagens
    fotos.style.transform = `translateX(-${indices[carrosselIndex] * 100}%)`;
}

// Inicializa os índices dos carrosseis
document.querySelectorAll('.carrossel-html').forEach((carrossel, index) => {
    carrossel.dataset.index = index; // Atribui um índice único ao carrossel
    indices[index] = 0; // Inicializa o índice para cada carrossel

    // Configura o intervalo para passar automaticamente
    setInterval(() => {
        mover(1, carrossel.querySelector('.next')); // Passa para a próxima imagem
    }, 8000); // 2000 ms = 2.0 s
});

// Alternância de Tema
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Verifica a preferência do usuário no localStorage
const currentTheme = localStorage.getItem("theme");

// Define o tema inicial como claro ou baseado na preferência armazenada
if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.innerHTML = "&#9788;"; // Ícone de sol para modo light
} else {
    body.classList.remove("dark-mode");
    toggleButton.innerHTML = "&#9790;"; // Ícone de lua para modo dark
}

// Evento de clique para alternar o tema
toggleButton.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    let theme = "light";
    if (body.classList.contains("dark-mode")) {
        theme = "dark";
        toggleButton.innerHTML = "&#9788;"; // Ícone de sol
    } else {
        toggleButton.innerHTML = "&#9790;"; // Ícone de lua
    }
    localStorage.setItem("theme", theme);
});

// Função para remover a notificação após um tempo
window.addEventListener('load', function() {
    const chatNotification = document.getElementById('chat-notification');
    setTimeout(function() {
        chatNotification.style.animation = 'slideUp 0.5s forwards';
    }, 3000); // 5000 milissegundos = 5 segundos

    // Adicionar animação de slide up
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes slideUp {
            from {
                top: 20px;
                opacity: 1;
            }
            to {
                top: -100px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

// Mostrar o badge após a inicialização
const badge = document.querySelector('.whatsapp-button .badge');
setTimeout(function() {
    badge.classList.add('show');
}, 1000); // 1000 milissegundos = 1 segundo
});