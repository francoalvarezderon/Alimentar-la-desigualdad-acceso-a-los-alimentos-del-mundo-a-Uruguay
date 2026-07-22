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



    // LOCALIZACIONES PARA EL MAPA.HTM //

    const comedores = [
    { "departamento": "Artigas", "localidad": "Baltasar Brum", "nombre": "INDA Baltasar Brum N55", "direccion": "25 DE AGOSTO", "telefono": "4776 2011", "lat": -30.72, "lng": -57.3314 },
    { "departamento": "Artigas", "localidad": "Artigas", "nombre": "INDA Artigas N68", "direccion": "AVDA. DR. BALTASAR BRUM", "telefono": "1884 4310", "lat": -30.4179, "lng": -56.4599 },
    { "departamento": "Artigas", "localidad": "Bella Union", "nombre": "INDA Bella Union N75", "direccion": "CHILE 1213", "telefono": "4779 3678", "lat": -30.2551, "lng": -57.5902 },
    { "departamento": "Artigas", "localidad": "Tomas Gomensoro", "nombre": "INDA Tomas Gomensoro N98", "direccion": "TREINTA Y TRES", "telefono": "4777 2385", "lat": -30.4282, "lng": -57.4415 },
    { "departamento": "Artigas", "localidad": "Pintadito", "nombre": "INDA Artigas N98", "direccion": "4 DE ABRIL 159", "telefono": "1884 4326", "lat": -30.4334, "lng": -56.4557 },
    { "departamento": "Canelones", "localidad": "Canelones", "nombre": "INDA Canelones N 57", "direccion": "", "telefono": "4332 2298", "lat": -34.5263, "lng": -56.2758 },
    { "departamento": "Canelones", "localidad": "18 De Mayo", "nombre": "INDA Vista Linda N69", "direccion": "AMERICO VESPUCIO", "telefono": "2369 3535", "lat": -34.6966, "lng": -56.2197 },
    { "departamento": "Cerro Largo", "localidad": "Melo", "nombre": "INDA Melo N 56", "direccion": "GRAL. JOSE RONDEAU", "telefono": "4642 8819", "lat": -32.3609, "lng": -54.1601 },
    { "departamento": "Cerro Largo", "localidad": "Isidoro Noblia", "nombre": "INDA Isidoro Noblia N 91", "direccion": "Aparicio Saravia y Ruta 8", "telefono": "4640 5485", "lat": -31.9629, "lng": -54.1244 },
    { "departamento": "Colonia", "localidad": "Juan Lacaze", "nombre": "INDA Juan Lacaze N 80", "direccion": "AVDA. DANIEL FERNANDEZ CRESPO 270", "telefono": "4586 0646", "lat": -34.4314, "lng": -57.4357 },
    { "departamento": "Durazno", "localidad": "Sarandi Del Yi", "nombre": "INDA Sarandi del Yi N64", "direccion": "BRIG. GRAL. FRUCTUOSO RIVERA", "telefono": "4367 9349", "lat": -33.3428, "lng": -55.6341 },
    { "departamento": "Durazno", "localidad": "Durazno", "nombre": "INDA Durazno N67", "direccion": "INSTRUCCIONES DEL AÑO XIII", "telefono": "4362 5787", "lat": -33.38, "lng": -56.5337 },
    { "departamento": "Durazno", "localidad": "La Paloma", "nombre": "INDA La Paloma N 72", "direccion": "8 DE DICIEMBRE DE 1894", "telefono": "4360 4165", "lat": -32.7278, "lng": -55.5765 },
    { "departamento": "Durazno", "localidad": "Ciudad Del Carmen", "nombre": "INDA Villa del Carmen N73", "direccion": "BVAR. GRAL. JOSE GERVASIO ARTIGAS", "telefono": "4365 4452", "lat": -33.24, "lng": -56.0088 },
    { "departamento": "Durazno", "localidad": "Blanquillo", "nombre": "INDA Blanquillo N 84", "direccion": "DR. ALEJANDRO SARACHAGA", "telefono": "4366 2128", "lat": -32.8882, "lng": -55.6166 },
    { "departamento": "Durazno", "localidad": "Carlos Reyles", "nombre": "INDA Carlos Reyles N 90", "direccion": "EDUARDO PASTOR", "telefono": "4368 2021", "lat": -33.0809, "lng": -56.4726 },
    { "departamento": "Flores", "localidad": "Trinidad", "nombre": "INDA Trinidad N71", "direccion": "WILSON FERREIRA ALDUNATE 628", "telefono": "4364 2910", "lat": -33.5176, "lng": -56.8945 },
    { "departamento": "Flores", "localidad": "Ismael Cortinas", "nombre": "INDA Ismael Cortinas N 79", "direccion": "FRANCISCO SOLANO LOPEZ", "telefono": "4539 2293", "lat": -33.9839, "lng": -57.0889 },
    { "departamento": "Florida", "localidad": "Florida", "nombre": "INDA Florida N66", "direccion": "19 DE ABRIL", "telefono": "4352 1232", "lat": -34.1051, "lng": -56.2127 },
    { "departamento": "Florida", "localidad": "Sarandi Grande", "nombre": "INDA Sarandi Grande N70", "direccion": "FAUSTINO HARRISON", "telefono": "4354 7019", "lat": -33.7331, "lng": -56.3282 },
    { "departamento": "Florida", "localidad": "Casupa", "nombre": "INDA Casupa N74", "direccion": "LUIS ALBERTO DE HERRERA", "telefono": "4311 2314", "lat": -34.1024, "lng": -55.8817 },
    { "departamento": "Florida", "localidad": "25 De Agosto", "nombre": "INDA 25 De Agosto N85", "direccion": "JUAN DE DIOS", "telefono": "4338 2283", "lat": -34.4148, "lng": -56.4006 },
    { "departamento": "Florida", "localidad": "25 De Mayo", "nombre": "INDA 25 de Mayo N 86", "direccion": "GRAL. ARTIGAS 1211", "telefono": "4319 2304", "lat": -34.1983, "lng": -56.3415 },
    { "departamento": "Florida", "localidad": "Florida", "nombre": "INDA Florida N 96", "direccion": "", "telefono": "4352 0848", "lat": -34.0987, "lng": -56.2146 },
    { "departamento": "Lavalleja", "localidad": "Minas", "nombre": "INDA Minas N65", "direccion": "FLORENCIO SANCHEZ", "telefono": "4442 1925", "lat": -34.3768, "lng": -55.2391 },
    { "departamento": "Maldonado", "localidad": "Maldonado", "nombre": "INDA Maldonado Nuevo N10", "direccion": "AGAPITO PARABERA", "telefono": "4222 6333", "lat": -34.8988, "lng": -54.9403 },
    { "departamento": "Maldonado", "localidad": "Maldonado", "nombre": "INDA Maldonado N51", "direccion": "ALICE HOUSTON DE CHAVEZ 1049", "telefono": "4223 2419", "lat": -34.8911, "lng": -54.9741 },
    { "departamento": "Maldonado", "localidad": "San Carlos", "nombre": "INDA San Carlos N54", "direccion": "", "telefono": "4266 4088", "lat": -34.7933, "lng": -54.9184 },
    { "departamento": "Maldonado", "localidad": "Pan De Azucar", "nombre": "INDA Pan de Azucar N99", "direccion": "SANTIAGO SILVA", "telefono": "4432 0261", "lat": -34.7791, "lng": -55.2231 },
    { "departamento": "Paysandu", "localidad": "Paysandu", "nombre": "INDA Paysandu N 59", "direccion": "DR. GUILMET", "telefono": "4723 3991", "lat": -32.3134, "lng": -58.0709 },
    { "departamento": "Paysandu", "localidad": "Nuevo Paysandu", "nombre": "INDA Paysandu N 101", "direccion": "SALADERO SANTA MARIA", "telefono": "4723 6322", "lat": -32.2857, "lng": -58.0817 },
    { "departamento": "Rio Negro", "localidad": "Fray Bentos", "nombre": "INDA Fray Bentos N 88", "direccion": "18 DE JULIO 2011", "telefono": "4562 9013", "lat": -33.1298, "lng": -58.2913 },
    { "departamento": "Rio Negro", "localidad": "Young", "nombre": "INDA Young N10", "direccion": "18 DE JULIO", "telefono": "4567 2632", "lat": -32.6937, "lng": -57.6323 },
    { "departamento": "Rocha", "localidad": "Rocha", "nombre": "INDA Rocha N60", "direccion": "ANSOINA", "telefono": "4472 1211", "lat": -34.4807, "lng": -54.3256 },
    { "departamento": "Rocha", "localidad": "Lascano", "nombre": "INDA Lascano N83", "direccion": "25 DE AGOSTO 1318", "telefono": "4456 9219", "lat": -33.6661, "lng": -54.5611 },
    { "departamento": "Rocha", "localidad": "Chuy", "nombre": "INDA Chuy N100", "direccion": "SAMUEL PRAC", "telefono": "4474 2005", "lat": -33.6938, "lng": -53.4563 },
    { "departamento": "Rivera", "localidad": "Rivera", "nombre": "INDA Rivera N50", "direccion": "YAMANDU", "telefono": "4622 7292", "lat": -30.9023, "lng": -55.5516 },
    { "departamento": "Rivera", "localidad": "Rivera", "nombre": "INDA Rivera N 80", "direccion": "", "telefono": "4622 1622", "lat": -30.9036, "lng": -55.5544 },
    { "departamento": "Rivera", "localidad": "Rivera", "nombre": "INDA Rivera N 104", "direccion": "DOMINGO ARENAS E ITALO 1825", "telefono": "4622 4381", "lat": -30.9177, "lng": -55.5381 },
    { "departamento": "San Jose", "localidad": "San Jose De Mayo", "nombre": "INDA San Jose N61", "direccion": "ITUZAINGO 375", "telefono": "4342 9327", "lat": -34.3425, "lng": -56.713 },
    { "departamento": "San Jose", "localidad": "Libertad", "nombre": "INDA Libertad N 87", "direccion": "25 DE AGOSTO", "telefono": "4345 8066", "lat": -34.6329, "lng": -56.6171 },
    { "departamento": "Soriano", "localidad": "Mercedes", "nombre": "INDA Mercedes N 63", "direccion": "JOSE ENRIQUE RODO", "telefono": "4532 8852", "lat": -33.2525, "lng": -58.0379 },
    { "departamento": "Soriano", "localidad": "Dolores", "nombre": "INDA Dolores N 68", "direccion": "JOSE PEDRO VARELA", "telefono": "4534 3585", "lat": -33.538, "lng": -58.2182 },
    { "departamento": "Tacuarembo", "localidad": "Tacuarembo", "nombre": "INDA Tacuarembo N 54", "direccion": "CENTRO BARRIO 1 - FERROCARRIL", "telefono": "4632 9803", "lat": -31.7298, "lng": -55.9729 },
    { "departamento": "Tacuarembo", "localidad": "San Gregorio De Polanco", "nombre": "INDA San Gregorio N 82", "direccion": "RAMON ANTONIO SILVA", "telefono": "4369 4012", "lat": -32.6089, "lng": -55.8334 },
    { "departamento": "Tacuarembo", "localidad": "Tacuarembo", "nombre": "INDA Tacuarembo N87", "direccion": "JOSE BATLLE Y ORDOÑEZ", "telefono": "4632 2879", "lat": -31.7089, "lng": -55.9876 },
    { "departamento": "Treinta Y Tres", "localidad": "Cerro Chato", "nombre": "INDA Cerro Chato N58", "direccion": "JOSE BATLLE Y ORDOÑEZ", "telefono": "4466 2202", "lat": -33.1085, "lng": -55.1292 },
    { "departamento": "Treinta Y Tres", "localidad": "Ejido De Treinta Y Tres", "nombre": "INDA Treinta y Tres N68", "direccion": "MISIONES", "telefono": "4452 5078", "lat": -33.2124, "lng": -54.3588 },
    { "departamento": "Treinta Y Tres", "localidad": "Vergara", "nombre": "INDA Vergara N93", "direccion": "MELITON MUÑOZ", "telefono": "4458 2763", "lat": -32.9455, "lng": -53.9391 },
    { "departamento": "Treinta Y Tres", "localidad": "Santa Clara De Olimar", "nombre": "INDA Santa Clara de Olimar N102", "direccion": "19 DE ABRIL", "telefono": "4464 5026", "lat": -32.9248, "lng": -54.9468 },
    { "departamento": "Montevideo", "localidad": "Montevideo", "nombre": "INDA Montevideo La Teja N2", "direccion": "AVDA. CARLOS MARIA RAMIREZ 857", "telefono": "2309 5861", "lat": -34.86134582767, "lng": -56.230011275786 },
    { "departamento": "Montevideo", "localidad": "Montevideo", "nombre": "INDA Montevideo Peñarol Lavalleja N3", "direccion": "AVDA. SAYAGO 1384", "telefono": "2358 809969", "lat": -34.82828578847, "lng": -56.203997327102 },
    { "departamento": "Montevideo", "localidad": "Montevideo", "nombre": "INDA Montevideo Union N6", "direccion": "COMERCIO 2359", "telefono": "2508 5239", "lat": -34.8789, "lng": -56.1398 },
    { "departamento": "Montevideo", "localidad": "Montevideo", "nombre": "INDA Montevideo La Comercial N15", "direccion": "DR. DOMINGO ARAMBURU 2236", "telefono": "2925 26773", "lat": -34.8833, "lng": -56.168 },
    { "departamento": "Cerro Largo", "localidad": "Melo", "nombre": "INDA Comedor Japon N92", "direccion": "BERNARDINO ORIQUE 198", "telefono": "", "lat": -32.382920325919, "lng": -54.153944620722 },
    { "departamento": "Lavalleja", "localidad": "Jose Batlle Y Ordoñez", "nombre": "INDA Batlle y Ordoñez N106", "direccion": "GRAL. JOSE ARTIGAS", "telefono": "098 651893", "lat": -33.471717995108, "lng": -55.147413462981 },
    { "departamento": "Montevideo", "localidad": "Montevideo", "nombre": "INDA Montevideo Ciudad Vieja N7", "direccion": "RBLA. 25 DE AGOSTO DE 1825", "telefono": "092 903821", "lat": -34.90545323688, "lng": -56.212591999247 },
    { "departamento": "Montevideo", "localidad": "Montevideo", "nombre": "INDA Montevideo Hipodromo Piedras Blancas N5", "direccion": "BVAR. APARICIO SARAVIA", "telefono": "092 902761", "lat": -34.833178693652, "lng": -56.146000345801 },
    { "departamento": "Salto", "localidad": "Salto", "nombre": "INDA N 107", "direccion": "PIEDRAS", "telefono": "099 023836", "lat": -31.389835748424, "lng": -57.956250626776 },
    { "departamento": "San Jose", "localidad": "Ciudad Del Plata", "nombre": "INDA Ciudad del Plata N 108", "direccion": "LOS PEÑAROLES", "telefono": "098 406810", "lat": -34.779426, "lng": -56.45727 },
    { "departamento": "Treinta Y Tres", "localidad": "Gral. Enrique Martinez", "nombre": "INDA Charqueada N109", "direccion": "AVDA. DEL PUERTO", "telefono": "098 571457", "lat": -33.208218559052, "lng": -53.802335560645 }
];

   
const map = L.map('mapa').setView([-32.8, -56.0], 7);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const listaDepartamentos = L.layerGroup().addTo(map);

//  Función encargada de renderizar y luego filtrar los departamentos
function renderizarMapa(departamentoElegido = 'todos') {

    listaDepartamentos.clearLayers();

    // Acá se filtra el array de comedores
    const comedoresFiltrados = comedores.filter(punto => {
        if (departamentoElegido === 'todos') return true;
        return punto.departamento === departamentoElegido;
    });

    // Acá dibuja los marcadores filtrados
    comedoresFiltrados.forEach(punto => {
        L.marker([punto.lat, punto.lng])
            .bindPopup(`<b>${punto.nombre}</b><br>Dirección: ${punto.direccion}<br>Teléfono: ${punto.telefono}`)
            .addTo(listaDepartamentos);
    });
}


renderizarMapa('todos');

const filtros = document.getElementById('filtroDepartamento');

filtros.addEventListener('change', () => {
    renderizarMapa(filtros.value);
});