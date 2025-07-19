document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');

            // MODIFICAÇÃO AQUI: Adicionamos '|| targetId === "#categorias"'
            if (targetId === '#home' || targetId === '#categorias') {
                // Para "Home" E "Categorias": rola para o topo da página
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Rola suavemente
                });
                console.log(`Navegar para o topo (Home ou Categorias): ${targetId}`);
                // Se você tiver filtros no futuro, eles também seriam limpos aqui.
            } else if (targetId === '#produtos') {
                // Para "Produtos": rola para a seção de produtos
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                console.log("Navegar para Produtos (mostrar todos)");
            } else {
                // Para os demais links (Sobre Nós, Nossos Clientes, Contato)
                // Rola para a seção correspondente ao 'href' do link
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                console.log(`Navegar para a seção: ${targetId}`);
            }
        });
    });

    // --- Futura Lógica de Filtragem de Produtos ---
    // (Vamos adicionar isso depois de criar a seção de produtos no HTML)
});