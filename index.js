const zapatillasRunning = [
    { id: 2, Marca: "Asics", Modelo: "Fujitrabuco", Tipo: "Trail", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Mujer", Precio: "180€", img: "./assets/fujitrabuco_mujerBuena.jpg" },
    { id: 3, Marca: "Joma", Modelo: "Sierra", Tipo: "Trail", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Mujer", Precio: "175€", img: "./assets/sierra_chica.png" },
    { id: 5, Marca: "Brooks", Modelo: "Cascadia", Tipo: "Trail", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Hombre", Precio: "109€", img: "./assets/brooks-cascadia-17.webp" },
    { id: 6, Marca: "Altra", Modelo: "lone 8", Tipo: "Trail", Pisada: "Neutra", Amortiguacion: "A.Media", Genero: "Mujer", Precio: "100€", img: "./assets/altra-lone.webp" },
    { id: 7, Marca: "Asics", Modelo: "Cumulus", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "A.Media", Genero: "Hombre", Precio: "75€", img: "./assets/asics-gel-cumulus-26.webp" },
    { id: 8, Marca: "Brooks", Modelo: "Gliceryn 8", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Mujer", Precio: "175€", img: "./assets/brooks_gliceryn.png" },
    { id: 9, Marca: "Adidas", Modelo: "Supernova", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Hombre", Precio: "195€", img: "./assets/adidas-supernova-rise.webp" },
    { id: 10, Marca: "Mizuno", Modelo: "Daichi", Tipo: "Trail", Pisada: "Neutra", Amortiguacion: "A.Media", Genero: "Mujer", Precio: "74€", img: "./assets/mizuno-wave-daichi-8.webp" },
    { id: 11, Marca: "Adidas", Modelo: "Terrex", Tipo: "Trail", Pisada: "Supinador", Amortiguacion: "Tope Amortiguación", Genero: "Hombre", Precio: "120€", img: "./assets/adidas-terrex-agravic-speed-ultr.webp" },
    { id: 12, Marca: "La Sportiva", Modelo: "Prodigio", Tipo: "Trail", Pisada: "Supinador", Amortiguacion: "A.Media", Genero: "Mujer", Precio: "105€", img: "./assets/la-sportiva-prodigio.webp" },
    { id: 13, Marca: "On", Modelo: "CloudMonster", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Mujer", Precio: "239€", img: "./assets/on_chica.png" },
    { id: 14, Marca: "On", Modelo: "CloudMonster", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Hombre", Precio: "229€", img: "./assets/on_chico.png" },
    { id: 15, Marca: "Mizuno", Modelo: "Rider", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "A.Media", Genero: "Hombre", Precio: "169€", img: "assets/Rider_chico.png" },
    { id: 16, Marca: "Mizuno", Modelo: "Rider", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "A.Media", Genero: "Mujer", Precio: "169€", img: "./assets/rider_chica.png" },
    { id: 17, Marca: "Merrel", Modelo: "Agility", Tipo: "Trail", Pisada: "Neutra", Amortiguacion: "A.Media", Genero: "Hombre", Precio: "150€", img: "./assets/merrel_chico.png" },
    { id: 18, Marca: "Merrel", Modelo: "Agility", Tipo: "Trail", Pisada: "Neutra", Amortiguacion: "A.Media", Genero: "Mujer", Precio: "130€", img: "./assets/merrel_chica.png" },
    { id: 19, Marca: "Asics", Modelo: "Nimbus", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Hombre", Precio: "105€", img: "./assets/nimbus_chico.png" },
    { id: 20, Marca: "Nike", Modelo: "Pegasus", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Mujer", Precio: "109€", img: "./assets/pegasus_chica.png" },
    { id: 21, Marca: "Nike", Modelo: "Pegasus", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Hombre", Precio: "145€", img: "assets/pegasus_chico.png" },
    { id: 22, Marca: "Adidas", Modelo: "Ultraboost", Tipo: "Running", Pisada: "Neutra", Amortiguacion: "Tope Amortiguación", Genero: "Hombre", Precio: "120€", img: "assets/ultraboost_chico.png" },
];
zapatillasRunning.reverse();

// Variables para almacenar filtros
let filtroGenero = "";
let filtroTipo = "";
let filtroMarca = "";
let filtroAmortiguacion = "";

// Crear Header
const header = document.createElement("header");
document.body.appendChild(header);

const imgLogo = document.createElement("img");
imgLogo.src = "./assets/roadrunnerlogo.png";
imgLogo.alt = "Logo tienda de zapatillas de correr";
header.appendChild(imgLogo);

const navHeader = document.createElement("nav");
navHeader.classList.add("links-header");
header.appendChild(navHeader);

// Creacion del Select Género,recorremos las diferentes opciones e inyectamos en el html.
//Tambien haremos lo mismo con los otros select.(tipo,marca,tipo y amortiguación,)
const selectGenero = document.createElement("select");
selectGenero.id = "filtrado-Genero";
navHeader.appendChild(selectGenero);
const optionsGenero = ["-Genero-", "Hombre", "Mujer"];
for (const option of optionsGenero) {
    const optG = document.createElement("option");
    optG.value = (option === "-Genero-") ? "" : option;
    optG.textContent = option;
    selectGenero.appendChild(optG);
}

const selectMarca = document.createElement("select");
selectMarca.id = "filtrado-Marca";
navHeader.appendChild(selectMarca);
const optionsMarca = ["-Marca-", "Nike", "Asics", "Mizuno", "On", "Adidas", "Merrel", "Brooks", "Altra", "Joma", "La Sportiva"];
for (const opciones of optionsMarca) {
    const optM = document.createElement("option");
    optM.value = (opciones === "-Marca-") ? "" : opciones;
    optM.textContent = opciones;
    selectMarca.appendChild(optM);
}

const selectTipo = document.createElement("select");
selectTipo.id = "filtrado-Tipo";
navHeader.appendChild(selectTipo);
const optionsTipo = ["-Tipo-", "Trail", "Running"];
for (const options of optionsTipo) {
    const optT = document.createElement("option");
    optT.value = (options === "-Tipo-") ? "" : options;
    optT.textContent = options;
    selectTipo.appendChild(optT);
}

const selectAmortiguacion = document.createElement("select");
selectAmortiguacion.id = "filtrado-Amortiguacion";
navHeader.appendChild(selectAmortiguacion);
const optionsAmortiguacion = ["-Amortiguacion-", "Tope Amortiguación", "A.Media"];
for (const opcion of optionsAmortiguacion) {
    const optA = document.createElement("option");
    optA.value = (opcion === "-Amortiguacion-") ? "" : opcion;
    optA.textContent = opcion;
    selectAmortiguacion.appendChild(optA);
}

// Creacion de botón RESET e inyectamos en el html.
const buttonReset = document.createElement("button");
buttonReset.id = "Reset";
buttonReset.textContent = "Reset";
navHeader.appendChild(buttonReset);

// Usaremos eventListener para que vez que lo cambiemos los select lo filtre y lo muestre.
selectGenero.addEventListener("change", (e) => {
    filtroGenero = e.target.value;
    aplicarFiltrosYMostrar();
});

selectMarca.addEventListener("change", (e) => {
    filtroMarca = e.target.value;
    aplicarFiltrosYMostrar();
});

selectTipo.addEventListener("change", (e) => {
    filtroTipo = e.target.value;
    aplicarFiltrosYMostrar();
});

selectAmortiguacion.addEventListener("change", (e) => {
    filtroAmortiguacion = e.target.value;
    aplicarFiltrosYMostrar();
});

// Usaremos un eventListener para que cuando hagamos click reseteemos filtros y selects.
buttonReset.addEventListener("click", () => {
    filtroGenero = "";
    filtroTipo = "";
    filtroMarca = "";
    filtroAmortiguacion = "";
    //Reseteamos los selects.
    selectGenero.value = "";
    selectMarca.value = "";
    selectTipo.value = "";
    selectAmortiguacion.value = "";
    
    aplicarFiltrosYMostrar();
});

// Redes sociales
const divImgRedes = document.createElement("div");
divImgRedes.classList.add("redsocial");
const imgRedesHeader = ["assets/twitch.png", "assets/tweeter.png", "assets/ticketsmaster.png"];
for (const red of imgRedesHeader) {
    const imgRedSocial = document.createElement("img");
    imgRedSocial.src = red;
    imgRedSocial.alt = "Iconos redes sociales";
    divImgRedes.appendChild(imgRedSocial);
}
header.appendChild(divImgRedes);

// MAIN
const mainWeb = document.createElement("main");
document.body.append(mainWeb);

const divImgMain = document.createElement("div");
divImgMain.classList.add("zapa-descolorida");
const imgMain = document.createElement("img");
imgMain.src = "assets/img-main.png";
imgMain.alt = "Zapatilla colorida";
mainWeb.appendChild(divImgMain);
divImgMain.appendChild(imgMain);

const contenedorZapatillas = document.createElement("div");
contenedorZapatillas.classList.add("zapas-container");
mainWeb.appendChild(contenedorZapatillas);

// Función para obtener zapatillas aleatorias
const obtenerZapatillasAleatorias = (cantidad) => {
    const zapatillasCopia = [...zapatillasRunning];
    const aleatorias = [];
    
    for (let i = 0; i < cantidad && zapatillasCopia.length > 0; i++) {
        const indiceAleatorio = Math.floor(Math.random() * zapatillasCopia.length);
        aleatorias.push(zapatillasCopia[indiceAleatorio]);
        zapatillasCopia.splice(indiceAleatorio, 1);
    }
    
    return aleatorias;
};

// Función para dibujar las zapatillas
const printZapas = (zapasAMostrar) => {
    contenedorZapatillas.innerHTML = "";

    if (zapasAMostrar.length === 0) {
        const divMensaje = document.createElement("div");
       const mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron zapatillas con esos filtros";
        divMensaje.appendChild(mensaje);
        const sugerencia = document.createElement("p");
        sugerencia.textContent = "No encuentras las zapatillas que quieres,te sugerimos estas  zapatillas:";
        divMensaje.appendChild(sugerencia);
        
        contenedorZapatillas.appendChild(divMensaje);
        
        //Aqui vamos a mostrar 3 zapatillas aleatorias sino hay zapatillas con nuestros filtros.
        const zapatillasAleatorias = obtenerZapatillasAleatorias(3);
        zapasAMostrar = zapatillasAleatorias;
    }

    for (const zapatilla of zapasAMostrar) {
        const articlesZapatillas = document.createElement("article");
        articlesZapatillas.classList.add("Carta-Zapatilla");
        articlesZapatillas.id = `zapatilla-${zapatilla.id}`;

        if (zapatilla.Genero === "Mujer") {
            articlesZapatillas.classList.add("zapatilla-mujer");
        }

        const divImg = document.createElement("div");
        divImg.className = "container-img";
        const imgZapatillas = document.createElement("img");
        imgZapatillas.src = zapatilla.img;
        imgZapatillas.alt = `${zapatilla.Marca} ${zapatilla.Modelo}`;
        divImg.appendChild(imgZapatillas);

        const divDatosZapatillas = document.createElement("div");
        divDatosZapatillas.className = "datos-zapatillas";
        const marcaZapatillas = document.createElement("h2");
        marcaZapatillas.textContent = `Marca: ${zapatilla.Marca}`;
        const modeloZapatillas = document.createElement("h2");
        modeloZapatillas.textContent = `Modelo: ${zapatilla.Modelo}`;
        const tipoZapatillas = document.createElement("h3");
        tipoZapatillas.textContent = `Tipo: ${zapatilla.Tipo}`;
        const pisadaZapatillas = document.createElement("h3");
        pisadaZapatillas.textContent = `Pisada: ${zapatilla.Pisada}`;
        const amortiguacionZapatillas = document.createElement("h3");
        amortiguacionZapatillas.textContent = `Amortiguacion: ${zapatilla.Amortiguacion}`;
        const generoZapatillas = document.createElement("h3");
        generoZapatillas.textContent = `Genero: ${zapatilla.Genero}`;
        const precioZapatillas = document.createElement("p");
        precioZapatillas.textContent = `Precio: ${zapatilla.Precio}`;

        const buttonComprar = document.createElement("button");
        buttonComprar.textContent = "COMPRAR";
        buttonComprar.classList.add("buy-button");

        articlesZapatillas.appendChild(divImg);
        articlesZapatillas.appendChild(divDatosZapatillas);
        divDatosZapatillas.appendChild(marcaZapatillas);
        divDatosZapatillas.appendChild(modeloZapatillas);
        divDatosZapatillas.appendChild(tipoZapatillas);
        divDatosZapatillas.appendChild(pisadaZapatillas);
        divDatosZapatillas.appendChild(amortiguacionZapatillas);
        divDatosZapatillas.appendChild(generoZapatillas);
        divDatosZapatillas.appendChild(precioZapatillas);
        divDatosZapatillas.appendChild(buttonComprar);

        contenedorZapatillas.appendChild(articlesZapatillas);
    }
};

// Función para aplicar los filtros
const aplicarFiltrosYMostrar = () => {
    let resultadosFiltrados = zapatillasRunning;

    if (filtroGenero !== "") {
        resultadosFiltrados = resultadosFiltrados.filter(zapa => zapa.Genero === filtroGenero);
    }

    if (filtroTipo !== "") {
        resultadosFiltrados = resultadosFiltrados.filter(zapa => zapa.Tipo === filtroTipo);
    }

    if (filtroMarca !== "") {
        resultadosFiltrados = resultadosFiltrados.filter(zapa => zapa.Marca === filtroMarca);
    }

    if (filtroAmortiguacion !== "") {
        resultadosFiltrados = resultadosFiltrados.filter(zapa => zapa.Amortiguacion === filtroAmortiguacion);
    }

    printZapas(resultadosFiltrados);
};

// Mostrar todas las zapatillas de primeras.
aplicarFiltrosYMostrar();

// Vamos a crear el Footer.
const footer = document.createElement("footer");
document.body.append(footer);

const sectionFooter1 = document.createElement("section");
const enlacesFooter = ["Compra en RoadRunner", "Guia de tallas", "Descuentos", "Calendario de lanzamientos", "Estudio de la pisada"];
for (const enlaces of enlacesFooter) {
    const enlace1 = document.createElement("a");
    enlace1.textContent = enlaces;
    sectionFooter1.appendChild(enlace1);
}

const sectionFooter2 = document.createElement("section");
const enlacesFooter2 = ["Atencion al cliente", "Preguntas frecuentes", "Envios y devoluciones", "Seguimiento de envio", "Contacto"];
for (const enlacesRunnig of enlacesFooter2) {
    const enlace2 = document.createElement("a");
    enlace2.textContent = enlacesRunnig;
    sectionFooter2.appendChild(enlace2);
}

const sectionFooter3 = document.createElement("section");
sectionFooter3.classList.add("Redes");
const imgRedesFooter = ["assets/logo_home_zurich.webp", "assets/roadrunnerlogo.png"];
for (const img of imgRedesFooter) {
    const imgRedes = document.createElement("img");
    imgRedes.src = img;
    imgRedes.alt = "Icono red social";
    sectionFooter3.appendChild(imgRedes);
}

footer.appendChild(sectionFooter1);
footer.appendChild(sectionFooter2);
footer.appendChild(sectionFooter);
//Ahora creo que me siento mas orgulloso del proyecto.