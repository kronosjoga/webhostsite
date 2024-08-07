document.addEventListener('DOMContentLoaded', function() {

    
    // Funcionalidade do Hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    } else {
        console.error('Elemento do hamburger ou navLinks não encontrado.');
    }

    // Funcionalidade do Seletor de Idioma
    const languageToggle = document.querySelector('.language-selector .dropdown-toggle');
    const dropdownMenu = document.querySelector('.language-selector .dropdown-menu');

    if (languageToggle && dropdownMenu) {
        languageToggle.addEventListener('click', function(event) {
            event.stopPropagation(); // Impede que o clique se propague para o document
            dropdownMenu.classList.toggle('show');
        });

        // Fechar o dropdown ao clicar fora dele
        document.addEventListener('click', function(event) {
            if (!languageToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });

        // Funcionalidade dos Botões de Idioma
        const languageButtons = document.querySelectorAll('.language-selector .dropdown-item');
        
        languageButtons.forEach(button => {
            button.addEventListener('click', function() {
                const selectedLang = this.getAttribute('data-lang');
                changeLanguage(selectedLang);
                dropdownMenu.classList.remove('show'); // Fecha o dropdown após a seleção
            });
        });
    } else {
        console.error('Elemento do toggle de idioma ou menu suspenso não encontrado.');
    }

    function changeLanguage(lang) {
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translateText = element.querySelector('.translate-text');

            if (translateText) {
                translateText.innerHTML = translations[lang][key] || key;
            } else {
                // Se não houver um elemento de texto traduzido, atualize o conteúdo diretamente
                element.innerHTML = translations[lang][key] || key;
            }
        });

        // Atualize o conteúdo dos cartões, sem alterar o preço
        updateCards(lang);

        // Atualize o ícone da bandeira
        updateFlagIcon(lang);
    }

    function updateCards(lang) {
        const cards = document.querySelectorAll('.cards__card');
        
        cards.forEach(card => {
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');
            const button = card.getAttribute('data-button');

            const titleElement = card.querySelector('.card__title');
            const descriptionElement = card.querySelector('.card__description');
            const buttonElement = card.querySelector('.btn-donate');

            if (titleElement) titleElement.innerHTML = translations[lang][title] || title;
            if (descriptionElement) descriptionElement.innerHTML = translations[lang][description] || description;
            if (buttonElement) buttonElement.innerHTML = translations[lang][button] || button;
        });
    }

    function updateFlagIcon(lang) {
        const flagIcon = document.querySelector('.language-selector .flag-icon');
        
        if (flagIcon) {
            flagIcon.classList.remove('flag-icon-br', 'flag-icon-us');

            if (lang === 'pt') {
                flagIcon.classList.add('flag-icon-br');
            } else if (lang === 'en') {
                flagIcon.classList.add('flag-icon-us');
            }
        } else {
            console.error('Ícone da bandeira não encontrado.');
        }
    }

    const translations = {
        pt: {
            // Traduções para o português
            'title-site': 'suahost',
            'header-title': 'A MELHOR HOSPEDAGEM DO <span class="highlight">BRASIL</span>',
            'header-subtitle': 'Convide seus amigos para aventuras inesquecíveis.<br>Junte-se a nós e deixe a busca pela melhor experiência de Minecraft terminar aqui!',
            'section-title': 'Confira Nossos Melhores Planos Abaixo',
            'basic-plan-heading': 'Plano Básico',
            'basic-plan-price': '00,00$/Mensal',
            'basic-plan-description-1': 'Descrição 1',
            'basic-plan-description-2': 'Descrição 2',
            'basic-plan-description-3': 'Descrição 3',
            'basic-plan-description-4': 'Descrição 4',
            'basic-plan-cta': 'Adquirir Plano',
            'medium-plan-heading': 'Plano Médio',
            'medium-plan-price': '00,00$/Mensal',
            'medium-plan-description-1': 'Descrição 1',
            'medium-plan-description-2': 'Descrição 2',
            'medium-plan-description-3': 'Descrição 3',
            'medium-plan-description-4': 'Descrição 4',
            'medium-plan-cta': 'Adquirir Plano',
            'advanced-plan-heading': 'Plano Avançado',
            'advanced-plan-price': '00,00$/Mensal',
            'advanced-plan-description-1': 'Descrição 1',
            'advanced-plan-description-2': 'Descrição 2',
            'advanced-plan-description-3': 'Descrição 3',
            'advanced-plan-description-4': 'Descrição 4',
            'advanced-plan-cta': 'Adquirir Plano',
            'creeper-plan-heading': 'Plano Creeper',
            'creeper-plan-price': '00,00$/Mensal',
            'creeper-plan-description-1': 'Descrição 1',
            'creeper-plan-description-2': 'Descrição 2',
            'creeper-plan-description-3': 'Descrição 3',
            'creeper-plan-description-4': 'Descrição 4',
            'creeper-plan-cta': 'Adquirir Plano',
            'hosting-title1': 'Hospedagem Minecraft',
            'simple-hosting': 'Hospedagem Simples',
            'simple-hosting-desc': 'Hospedagem simples para servidores pequenos',
            'advanced-hosting': 'Hospedagem Avançada',
            'advanced-hosting-desc': 'Hospedagem avançada para servidores de grande porte',
            'virtual-servers': 'Servidores Virtuais',
            'cpanel-hosting': 'Hospedagem cPanel',
            'client-area': 'Área do Cliente',
            "basic_title": "Básico",
            "basic_description": "Ideal para iniciantes.",
            "basic_button": "Assinar",
            "intermediate_title": "Intermediário",
            "intermediate_description": "Para projetos em crescimento.",
            "intermediate_button": "Assinar",
            "advanced_title": "Avançado",
            "advanced_description": "Para grandes projetos.",
            "advanced_button": "Assinar",
            "creeper_title": "Creeper",
            'info-cpu': 'CPU: 2 cores',
            'info-ram': 'RAM: 4 GB',
            'info-disk': 'DISCO: 100 GB',
            'info-network': 'Network: 1 Gbps',
            "creeper_description": "Descrição do plano Creeper.",
            "creeper_button": "Assinar",
            'contact-header': 'Entre em contato conosco via <span class="discord-highlight">Discord</span>!',
            'contact-btn': 'Acessar Discord',
            'footer-description': 'Oferecemos soluções de Servidor Dedicado de qualidade e alto desempenho em que você pode confiar, combinadas com o suporte que todos os clientes precisam e merecem.',
            'footer-services': 'Serviços',
            'footer-minecraft-hosting': 'Hospedagem Minecraft',
            'footer-bots-hosting': 'Hospedagem para Bots',
            'footer-vps-hosting': 'Servidor VPS',
            'footer-dedicated-servers': 'Servidores Dedicados',
            'footer-support': 'Suporte',
            'footer-contact': 'Entrar em contato',
            'footer-client-area': 'Área do Cliente',
            'footer-open-ticket': 'Abrir um ticket',
            'footer-status': 'Status',
            'footer-terms': 'Termos de Serviço',
            'footer-privacy': 'Política de Privacidade',
            'footer-follow-us': 'Siga-nos nas redes sociais',
            'footer-copyright': '© 2024 - Sua Host. Todos os direitos reservados. Feito por KronosJoga',
            'footer-terms-of-service': 'Termos de Serviço',
        },
        en: {
            // Traduções para o inglês
            'title-site': 'yourhost',
            'header-title': 'THE BEST HOSTING IN <span class="highlight">BRAZIL</span>',
            'header-subtitle': 'Invite your friends for unforgettable adventures.<br>Join us and let the search for the best Minecraft experience end here!',
            'section-title': 'Check Out Our Best Plans Below',
            'basic-plan-heading': 'Basic Plan',
            'basic-plan-price': '00.00$/Monthly',
            'basic-plan-description-1': 'Description 1',
            'basic-plan-description-2': 'Description 2',
            'basic-plan-description-3': 'Description 3',
            'basic-plan-description-4': 'Description 4',
            'basic-plan-cta': 'Subscribe',
            'medium-plan-heading': 'Medium Plan',
            'medium-plan-price': '00.00$/Monthly',
            'medium-plan-description-1': 'Description 1',
            'medium-plan-description-2': 'Description 2',
            'medium-plan-description-3': 'Description 3',
            'medium-plan-description-4': 'Description 4',
            'medium-plan-cta': 'Subscribe',
            'advanced-plan-heading': 'Advanced Plan',
            'advanced-plan-price': '00.00$/Monthly',
            'advanced-plan-description-1': 'Description 1',
            'advanced-plan-description-2': 'Description 2',
            'advanced-plan-description-3': 'Description 3',
            'advanced-plan-description-4': 'Description 4',
            'advanced-plan-cta': 'Subscribe',
            'creeper-plan-heading': 'Creeper Plan',
            'creeper-plan-price': '00.00$/Monthly',
            'creeper-plan-description-1': 'Description 1',
            'creeper-plan-description-2': 'Description 2',
            'creeper-plan-description-3': 'Description 3',
            'creeper-plan-description-4': 'Description 4',
            'creeper-plan-cta': 'Subscribe',
            'hosting-title1': 'Minecraft Hosting',
            'simple-hosting': 'Simple Hosting',
            'simple-hosting-desc': 'Simple hosting for small servers',
            'advanced-hosting': 'Advanced Hosting',
            'advanced-hosting-desc': 'Advanced hosting for large servers',
            'virtual-servers': 'Virtual Servers',
            'cpanel-hosting': 'cPanel Hosting',
            'client-area': 'Client Area',
            "basic_title": "Basic",
            "basic_description": "Ideal for beginners.",
            "basic_button": "Subscribe",
            "intermediate_title": "Intermediate",
            "intermediate_description": "For growing projects.",
            "intermediate_button": "Subscribe",
            "advanced_title": "Advanced",
            "advanced_description": "For large projects.",
            "advanced_button": "Subscribe",
            "creeper_title": "Creeper",
            "creeper_description": "Creeper plan description.",
            "creeper_button": "Subscribe",
            'info-cpu': 'CPU: 2 cores',
            'info-ram': 'RAM: 4 GB',
            'info-disk': 'DISK: 100 GB',
            'info-network': 'Network: 1 Gbps',
            'contact-header': 'Contact us via <span class="discord-highlight">Discord</span>!',
            'contact-btn': 'Join Discord',
            'footer-description': 'We provide high-quality, high-performance Dedicated Server solutions you can rely on, combined with the support that all clients need and deserve.',
            'footer-services': 'Services',
            'footer-minecraft-hosting': 'Minecraft Hosting',
            'footer-bots-hosting': 'Bots Hosting',
            'footer-vps-hosting': 'VPS Hosting',
            'footer-dedicated-servers': 'Dedicated Servers',
            'footer-support': 'Support',
            'footer-contact': 'Contact Us',
            'footer-client-area': 'Client Area',
            'footer-open-ticket': 'Open a ticket',
            'footer-status': 'Status',
            'footer-terms': 'Terms of Service',
            'footer-privacy': 'Privacy Policy',
            'footer-follow-us': 'Follow us on social media',
            'footer-copyright': '© 2024 - Your Host. All rights reserved. Made by KronosJoga',
            'footer-terms-of-service': 'Terms of Service',
        }
    };
    // Função para verificar se o idioma está disponível nas traduções
    function isLanguageSupported(lang) {
        return translations[lang] !== undefined;
    }

    // Função para atualizar o conteúdo da página de acordo com o idioma
    function changeLanguage(lang) {
        // Atualiza o idioma na página atual
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translateText = element.querySelector('.translate-text');

            if (translateText) {
                translateText.innerHTML = translations[lang][key] || key;
            } else {
                // Se não houver um elemento de texto traduzido, atualize o conteúdo diretamente
                element.innerHTML = translations[lang][key] || key;
            }
        });

        // Atualiza o conteúdo dos cartões, sem alterar o preço
        updateCards(lang);

        // Atualiza o ícone da bandeira
        updateFlagIcon(lang);

        // Salva o idioma selecionado no localStorage
        localStorage.setItem('preferredLanguage', lang);
    }
});
