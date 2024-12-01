//Mostrar menú en todas las pantallas
function loadSidebar() {
    fetch('sidebar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la barra lateral');
            }
            return response.text();
        })
        .then(html => {
            document.querySelector('.sidebar-container').innerHTML = html;

            initializeSidebarNavigation();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

//Funcion navegación entre paneles
function initializeSidebarNavigation() {
    const currentPath = window.location.pathname.split('/').pop();
    const buttons = document.querySelectorAll('.btns-menu button');

    buttons.forEach(button => {
        const link = button.getAttribute('data-link');
        
        if (link === currentPath) {
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            navigateTo(link);
        });
    });

    //Redirigiar al Dashboard al hacer clic en el logo
    const logo = document.querySelector('.sidebar h1');
    if (logo) {
        const dashboardLink = logo.getAttribute('data-link');
        logo.addEventListener('click', () => {
            navigateTo(dashboardLink);
        });
    }
}

function navigateTo(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', loadSidebar);