
            const currentYear = new Date().getFullYear();
            const footerText = document.getElementById('footer-text');
            footerText.innerHTML = footerText.innerHTML.replace('anioActual', currentYear);

            document.addEventListener('DOMContentLoaded', function() {
                const navLinks = document.querySelectorAll('.nav-link');
                const navServicios = document.getElementById('navServicios');
                const flechaAbajo = document.getElementById('flechaAbajo');

                navLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        // Remover la clase active de todos los enlaces
                        navLinks.forEach(nav => nav.classList.remove('active', 'colorClaroActive'));

                        // Agregar la clase active al enlace clicado
                        this.classList.add('active', 'colorClaroActive');
                    });
                });

                flechaAbajo.addEventListener('click', function() {
                    // Remover la clase active de todos los enlaces
                    navLinks.forEach(nav => nav.classList.remove('active', 'colorClaroActive'));

                    // Agregar la clase active al enlace de servicios
                    navServicios.classList.add('active', 'colorClaroActive');
                });
            });

            document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.seccion');
            const flechaAbajo = document.getElementById('flechaAbajo');
            const navServicios = document.getElementById('navServicios');
            const navLinks = document.querySelectorAll('.nav-link');

            // Función para mostrar una sección
            const showSection = (section) => {
                section.classList.add('visible');
            };

            // Función para ocultar todas las secciones
            const hideSections = () => {
                sections.forEach(section => {
                    section.classList.remove('visible');
                });
            };

            // Mostrar la primera sección al cargar la página
            showSection(sections[0]);

            // Manejar los clics en los enlaces de las flechas y flechaAbajo
            document.querySelectorAll('.arrow-container a, .seccionTitulo a').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = anchor.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);

                    if (targetSection) {
                        hideSections();
                        showSection(targetSection);

                        // Desplazarse a la sección objetivo (opcional)
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            // Manejar el clic en flechaAbajo
            flechaAbajo.addEventListener('click', (e) => {
                e.preventDefault();
                hideSections();
                showSection(document.getElementById('seccionServicios'));

                // Desplazar a la sección objetivo (opcional)
                document.getElementById('seccionServicios').scrollIntoView({ behavior: 'smooth' });

                // Actualizar el enlace de navegación activo
                navLinks.forEach(nav => nav.classList.remove('active', 'colorClaroActive'));
                navServicios.classList.add('active', 'colorClaroActive');
            });

            // Manejar el clic en el enlace del menú de servicios
            navServicios.addEventListener('click', (e) => {
                e.preventDefault();
                hideSections();
                showSection(document.getElementById('seccionServicios'));

                // Desplazar a la sección objetivo (opcional)
                document.getElementById('seccionServicios').scrollIntoView({ behavior: 'smooth' });

                // Actualizar el enlace de navegación activo
                navLinks.forEach(nav => nav.classList.remove('active', 'colorClaroActive'));
                navServicios.classList.add('active', 'colorClaroActive');
            });
        });