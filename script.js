document.addEventListener('DOMContentLoaded', () => {
    const botonOrganismos = document.getElementById('btn-organismos');
    const submenu = document.getElementById('submenu-organismos'); 

    // Abre el submenu al hacer clic en el botón de Organismos
    botonOrganismos.addEventListener('click', (evento) => { 
        evento.preventDefault();
        submenu.classList.toggle('mostrar');
    
    
        const estaAbierto = submenu.classList.contains('mostrar');
        botonOrganismos.setAttribute('aria-expanded', estaAbierto);
    }); 
    // Cierra el submenu al hacer clic en cualquier parte de la pantalla
    document.addEventListener("click", (evento) => {
        if (!botonOrganismos.contains(evento.target) && !submenu.contains(evento.target)) {
            submenu.classList.remove("mostrar");
           botonOrganismos.setAttribute('aria-expanded', 'false');
       }
    }); 

});

