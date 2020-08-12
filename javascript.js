// FALTA 
// QUE EL MENU DE TEMAS NO SE MUEVA DE MANERA IRREGULAR, IGUALARLO AL DE LAS BUSQUEDAS MUNDIALES
// QUE SI TE SALES DEL MENU TEMAS O DE ESE BOTON SE VAYA EL MENU 
// CAMBIAR TODO A MOBILE (OPCIONAL)
// BARRA DE PROGRESS BAR (OPCIONAL)



// ------------------------------ APIS ---------------------------------------

const apiTrend = 'https://api.giphy.com/v1/gifs/trending?api_key=PTJUhPR1gtl2Ngf90oeI6cjoJo4immck&limit=4&rating=G';
const endpointTrendingSearch = "https://api.giphy.com/v1/trending/searches?api_key=PTJUhPR1gtl2Ngf90oeI6cjoJo4immck";


// ------------------------ TRENDING --------------------------

fetch(apiTrend)
.then(response => response.json())
.then(data => {
    let element0 = document.getElementById('sugerencias1')
    element0.innerHTML = `<img src='${data.data[0].images.downsized_large.url}'/>`

    let element1 = document.getElementById('sugerencias2')
    element1.innerHTML = `<img src='${data.data[1].images.downsized_large.url}'/>`

    let element2 = document.getElementById('sugerencias3')
    element2.innerHTML = `<img src='${data.data[2].images.downsized_large.url}'/>`

    let element3 = document.getElementById('sugerencias4')
    element3.innerHTML = `<img src='${data.data[3].images.downsized_large.url}'/>`
})
.catch(err => console.log(err));


// TITULOS DE LOS TREND
fetch(apiTrend)
.then(response => response.json())
.then(data => {
    let element = document.getElementById('titleGif1')
    let newArray = (`${data.data[0].title}`),
    separador = 'GIF',
    limite = 1,
    newTitle = newArray.split(separador, limite);
    (element.innerText = `${newTitle}`);

    let element2 = document.getElementById('titleGif2')
    let newArray2 = (`${data.data[1].title}`),
    separador2 = 'GIF',
    limite2 = 1,
    newTitle2 = newArray2.split(separador2, limite2);
    (element2.innerText = `${newTitle2}`);

    let element3 = document.getElementById('titleGif3')
    let newArray3 = (`${data.data[2].title}`),
    separador3 = 'GIF',
    limite3 = 1,
    newTitle3 = newArray3.split(separador3, limite3);
    (element3.innerText = `${newTitle3}`);

    let element4 = document.getElementById('titleGif4')
    let newArray4 = (`${data.data[3].title}`),
    separador4 = 'GIF',
    limite4 = 1,
    newTitle4 = newArray4.split(separador4, limite4);
    (element4.innerText = `${newTitle4}`);
})
.catch(err => console.log(err));


// ------------------------------------- TRENDING SEARCH (PANEL DESPLEGABLE) --------------------------------------

function cargarTrend() {
    fetch(endpointTrendingSearch)
        .then(response => response.json())
        .then(data => {
            let element = document.getElementById('masBuscados1')
            let newArray = (`${data.data[0]}`);
            element.innerText = `${newArray}`;

            let element2 = document.getElementById('masBuscados2')
            let newArray2 = (`${data.data[1]}`);
            element2.innerText = `${newArray2}`;

            let element3 = document.getElementById('masBuscados3')
            let newArray3 = (`${data.data[2]}`);
            element3.innerText = `${newArray3}`;
        })
}


let newText = document.getElementById('campo-bus-gif');
const menuMasBuscados = document.getElementById('escriCampBus');
const botonB = document.getElementById('botonbusqueda');
function temaNightMasBuscado() {
    if (localStorage.getItem('Tema-Night') === 'true')  {
        botonB.style.backgroundColor = '#B4B4B4'; 
        botonB.style.color = '#8F8F8F'; 
        lupaBus.style.display = 'none';  
        lupaBusLi.style.display = 'none';  
        lupaG.style.display = 'block'; 
    } else {
        botonB.style.backgroundColor = '#E6E6E6'; 
        botonB.style.color = '#B4B4B4'; 
        lupaBusAc.style.display = 'none'; 
        lupaBus.style.display = 'block';
    }
}


function masBuscado1() {   
    let nem = document.getElementById('masBuscados1');
    newText.value = nem.textContent;
    conectarGiff(nem.textContent)
    cambiaPlaceHolder();
    newText.value = '';
    menuMasBuscados.style.display = 'none'; 
    temaNightMasBuscado();
}

document.getElementById('masBuscados1').addEventListener(('click'), function(e) {
    masBuscado1();
});


function masBuscado2() {   
    let nem = document.getElementById('masBuscados2');
    newText.value = nem.textContent;
    conectarGiff(nem.textContent)
    cambiaPlaceHolder();
    newText.value = '';
    menuMasBuscados.style.display = 'none';
    temaNightMasBuscado();
}

document.getElementById('masBuscados2').addEventListener(('click'), function(e) {
    masBuscado2();
});


function masBuscado3() {   
    let nem = document.getElementById('masBuscados3');
    newText.value = nem.textContent;
    conectarGiff(nem.textContent)
    cambiaPlaceHolder();
    newText.value = '';
    menuMasBuscados.style.display = 'none'; 
    temaNightMasBuscado();
}

document.getElementById('masBuscados3').addEventListener(('click'), function(e) {
    masBuscado3();
});



// -------------------------------------------------------------------------------------------

// CAMBIA COLOR DEL BOTÓN DE BUSQUEDA
function cambiBotYSug() {
    const campEscri = document.getElementById('campo-bus-gif');
    const vacio = '';
    const botonB = document.getElementById('botonbusqueda');
    const sugeBusq = document.getElementById('escriCampBus');
    const lupaBus = document.getElementById('lupaBus');
    const lupaBusAc = document.getElementById('lupaBusAc');

    if (campEscri.value != vacio) {
        cargarTrend();
        lupaG.style.display = 'none'; 
        sugeBusq.style.display = 'block'; 
        lupaBus.style.display = 'none';  
        lupaBusAc.style.display = 'block'; 
        botonB.style.backgroundColor = '#F7C9F3'; 
        botonB.style.color = '#110038';  
    } else {
        lupaG.style.display = 'none'; 
        sugeBusq.style.display = 'none'; 
        botonB.style.backgroundColor = '#E6E6E6'; 
        botonB.style.color = '#B4B4B4'; 
        lupaBus.style.display = 'block';  
        lupaBusAc.style.display = 'none'; 
    }
}

function cambiBotYSugNight() {
    const vacio = '';
    const botonB = document.getElementById('botonbusqueda');
    const sugeBusq = document.getElementById('escriCampBus');
    const lupaBus = document.getElementById('lupaBus');
    const lupaBusLi = document.getElementById('lupaBusLi');
    const campEscri = document.getElementById('campo-bus-gif');

    if (campEscri.value != vacio) {
        cargarTrend();
        sugeBusq.style.display = 'block'; 
        lupaBus.style.display = 'none';  
        lupaBusLi.style.display = 'block'; 
        lupaG.style.display = 'none'; 
        botonB.style.backgroundColor = '#EE3EFE'; 
        botonB.style.color = '#ffffff';  
    } else {
        sugeBusq.style.display = 'none'; 
        lupaBus.style.display = 'none';  
        lupaG.style.display = 'block';  
        lupaBusLi.style.display = 'none'; 
        botonB.style.backgroundColor = '#B4B4B4'; 
        botonB.style.color = '#8F8F8F'; 
    }
}

// --------------------------- CAMBIA COLOR DE BOTON ---------------------------------------------------------------

document.querySelector('#campo-bus-gif').addEventListener('keyup', function(e) {
    if (localStorage.getItem('Tema-Night') === 'true') {
        cambiBotYSugNight();
    } else {
        cambiBotYSug();
    }
});

//  ------------------------- BOTONES VER MÁS -------------------------------

function verMas1() {   
    fetch(apiTrend)
    .then(response => response.json())
    .then(data => {
        let newArray = (`${data.data[0].title}`),
        separador = 'GIF',
        limite = 1,
        newTitle = newArray.split(separador, limite);

        let newText = document.getElementById('campo-bus-gif');
        newText.value = `${newTitle}`;
        
        conectarGiff()
        cambiaPlaceHolder();
        newText.value = '';
    })
    .catch(err => console.log(err));
}

document.getElementById('verMas1').addEventListener(('click'), function(e) {
    verMas1();
    console.log('Aprete el boton Ver mas del trend 1');
});



function verMas2() {   
    fetch(apiTrend)
    .then(response => response.json())
    .then(data => {
        let newArray = (`${data.data[1].title}`),
        separador = 'GIF',
        limite = 1,
        newTitle = newArray.split(separador, limite);

        let newText = document.getElementById('campo-bus-gif');
        newText.value = `${newTitle}`;
        
        conectarGiff()
        cambiaPlaceHolder();
        newText.value = '';
    })
    .catch(err => console.log(err));
}

document.getElementById('verMas2').addEventListener(('click'), function(e) {
    verMas2();
    console.log('Aprete el boton Ver mas del trend 2');
});


function verMas3() {   
    fetch(apiTrend)
    .then(response => response.json())
    .then(data => {
        let newArray = (`${data.data[2].title}`),
        separador = 'GIF',
        limite = 1,
        newTitle = newArray.split(separador, limite);

        let newText = document.getElementById('campo-bus-gif');
        newText.value = `${newTitle}`;
        
        conectarGiff()
        cambiaPlaceHolder();
        newText.value = '';
    })
    .catch(err => console.log(err));
}

document.getElementById('verMas3').addEventListener(('click'), function(e) {
    verMas3();
    console.log('Aprete el boton Ver mas del trend 3');
});


function verMas4() {   
    fetch(apiTrend)
    .then(response => response.json())
    .then(data => {
        let newArray = (`${data.data[3].title}`),
        separador = 'GIF',
        limite = 1,
        newTitle = newArray.split(separador, limite);

        let newText = document.getElementById('campo-bus-gif');
        newText.value = `${newTitle}`;
        
        conectarGiff()
        cambiaPlaceHolder();
        newText.value = '';
    })
    .catch(err => console.log(err));
}

document.getElementById('verMas4').addEventListener(('click'), function(e) {
    verMas4();
    console.log('Aprete el boton Ver mas del trend 4');
});

//  --------------- ELIMINAR LA BUSQUEDA CON LA X DE LOS TREND ----------------------------

function borrarBusqueda() {
    const buscaGIF = document.getElementById('campo-bus-gif').value.trim();
    const limpiar = document.getElementById('result1');
    limpiar.innerHTML = '';  
    const limpiar2 = document.getElementById('tagResult');
    limpiar2.innerHTML = '';         
    buscaGIF;
};

function limpiarBus() {
    const limpCamBus = document.getElementById('campo-bus-gif');
    limpCamBus.value = '';
}

document.querySelector('.cerrando1').addEventListener(('click'), function(e) {
    borrarBusqueda();
    cambiaPlaceHolder();
    limpiarBus();
});

document.querySelector('.cerrando2').addEventListener(('click'), function(e) {
    borrarBusqueda();
    cambiaPlaceHolder();
    limpiarBus();
});

document.querySelector('.cerrando3').addEventListener(('click'), function(e) {
    borrarBusqueda();
    cambiaPlaceHolder();
    limpiarBus();
});

document.querySelector('.cerrando4').addEventListener(('click'), function(e) {
    borrarBusqueda();
    cambiaPlaceHolder();
    limpiarBus();
});


//  ------------------------- MENU THEMES -------------------------------

document.getElementById('selecTema').addEventListener(('click'), function(e) {
    mostrarOcultar();
});

function mostrarOcultar() {
    let selecTema = document.getElementById('botonTemas');

    if (selecTema.style.display == "none") {
        mostrar();
    } else {
        ocultar();
    }
}

function mostrar() {
    document.getElementById('botonTemas').style.display = 'flex';
}

function ocultar() {
    document.getElementById('botonTemas').style.display = 'none';
}






const botonSailorDay = document.getElementById('sailorDay');
const botonSailorNight = document.getElementById('sailorNight');
const campEscri = document.getElementById('campo-bus-gif');

botonSailorDay.addEventListener('click', () => {
    // ELIMINAMOS DEL LOCAL STORAGE  
    localStorage.removeItem('Tema-Night');
    console.log('Pasamos a tema día');
    const botonB = document.getElementById('botonbusqueda');
    const vacio = '';

    if (campEscri.value != vacio) {
        document.body.classList.remove('Night');
        console.log('No está vacío');
        botonB.style.backgroundColor = '#F7C9F3'; 
        botonB.style.color = '#110038';
        lupaBusLi.style.display = 'none';
        lupaBusAc.style.display = 'block';
        lupaG.style.display = 'none'; 
    } else {
        document.body.classList.remove('Night');
        botonB.style.backgroundColor = '#E6E6E6'; 
        botonB.style.color = '#B4B4B4';

        lupaG.style.display = 'none'; 
        lupaBus.style.display = 'block';
        lupaBusLi.style.display = 'none'; 
        console.log('Está vacío');
    }
});


botonSailorNight.addEventListener('click', () => {
    // CAmbiar el LOGO 
    // let logoNight = document.createElement('img');
    // logoNight.alt = 'logo-gifNight';
    // logoNight.className = 'logo-gifNight';
    // logoNight.src = './imagenes/gifOF_logo_dark.png';
    // // logoNight.appendChild('logoDiv');
    // let logoDay = document.querySelector('#logo-gif');
    // let noche = document.querySelector('#divLogo');
    // noche.replaceChild(logoNight, logoDay);

    document.body.classList.add('Night');
    console.log('Pasamos a tema noche');
    const botonB = document.getElementById('botonbusqueda');
    const vacio = '';
    botonB.style.backgroundColor = '#B4B4B4'; 
    botonB.style.color = '#808080'
    lupaG.style.display = 'block'; 
    lupaBusAc.style.display = 'none'; 
    lupaBus.style.display = 'none'; 

    if (campEscri.value != vacio) {
        botonB.style.backgroundColor = '#EE3EFE'; 
        botonB.style.color = '#ffffff'; 
        lupaBusLi.style.display = 'block'; 
        lupaG.style.display = 'none'; 
        console.log('No está vacío');
    } else {
        console.log('Está vacío');
    }


    // GUARDAR EN EL LOCAL STORAGE  
    if(document.body.classList.contains('Night')) {
        localStorage.setItem('Tema-Night', 'true');
    } else {
        localStorage.removeItem('Tema-Night');
    }

    if (campEscri.value != vacio) {
    } else {
        lupaBusLi.style.display = 'none'; 
    }
});

if (localStorage.getItem('Tema-Night') === 'true') {
    document.body.classList.add('Night');
} else {
    localStorage.removeItem('Tema-Night');    
}

//  ------------------------------------- BUSQUEDAS TEMPORALES --------------------------------------------

let busqTemporal =[];

function busquTempor() {
    const enlace = document.createElement('a');
    const elimEnlace = document.querySelectorAll('.busTem');

    enlace.className = 'busTem';
    enlace.setAttribute('href', '#');
    enlace.textContent = `${document.getElementById('campo-bus-gif').value.trim()}`;
    document.getElementById('busTem').appendChild(enlace);
    busqTemporal.push();


    if (busqTemporal.length < 11) {
    } else {
        elimEnlace[0].remove();
    }

}


//  ------------------------- EFECTOS DE BUSQUEDAS GENERALES -------------------------------

// Cambiar el campo donde dice tendencias por la palabra escrita 
function cambiaPlaceHolder() {   
    let newCampo = document.getElementById('campRes');
    newCampo.value = document.getElementById('campo-bus-gif').value.trim();
}


// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
function redirect() { 
    location.href = "#result1";
}; 

let newTitle;

function conectarGiff() {
    const buscaGIF = document.getElementById('campo-bus-gif').value.trim();
    busqTemporal.unshift(buscaGIF);
    busquTempor();
    redirect();
    const buscadorGIF = fetch('https://api.giphy.com/v1/gifs/search?api_key=PTJUhPR1gtl2Ngf90oeI6cjoJo4immck&q=' + buscaGIF + '&limit=24&offset=0&rating=G&lang=en')

        .then(response => {
            return response.json()
        })
        .then(contenidos => {
            console.log(contenidos.data);

            const limpiar = document.getElementById('result1');
            limpiar.innerHTML = '';

            for(let i = 0; i < contenidos.data.length; i++) {
                let result = document.getElementById('result1');
                let img = document.createElement('img');
                img.src = contenidos.data[i].images.downsized_large.url;
                img.id = 'imgId';
                img.className = 'imgId';
                result.appendChild(img);
            }
            return contenidos;            
        })
        .then(data => {
            const limpiar = document.getElementById('tagResult');
            limpiar.innerHTML = '';
    
            for (let i = 0; i < data.data.length; i++) {
                let newArray = (`${data.data[i].slug}`),
                separador = '-',
                limite = 3,
                newTitle = newArray.split(separador, limite);
                newTitle.pop();             
                
                let tags = document.createElement('p');
                tags.className = 'mostrarTags';  
                tags.textContent = '#' + newTitle.join(' #');

                document.querySelector('#tagResult').appendChild(tags);
            }   
            return data;
        })
        .catch(error => {
            return error;
        })
    return buscadorGIF
};


document.getElementById('botonbusqueda').addEventListener(('click'), function(e) {
    conectarGiff();
    cambiaPlaceHolder();
    const limpCamBus = document.getElementById('campo-bus-gif');
    limpCamBus.value = '';
    cambiBotYSug();

    const botonB = document.getElementById('botonbusqueda');

    if (localStorage.getItem('Tema-Night') === 'true')  {
        botonB.style.backgroundColor = '#B4B4B4'; 
        botonB.style.color = '#8F8F8F'; 
        lupaBus.style.display = 'none';  
        lupaBusLi.style.display = 'none';  
        lupaG.style.display = 'block'; 
        console.log('Noche True');
    } else {
        console.log('Noche False');
    }
});

function enter(event) {
    let i = event.keyCode;
    if (i == '13') {
        conectarGiff();
        cambiaPlaceHolder();
        const limpCamBus = document.getElementById('campo-bus-gif');
        limpCamBus.value = '';
        cambiBotYSug();
        const botonB = document.getElementById('botonbusqueda');
        if (localStorage.getItem('Tema-Night') === 'true')  {
            botonB.style.backgroundColor = '#B4B4B4'; 
            botonB.style.color = '#8F8F8F'; 
            lupaBus.style.display = 'none';  
            lupaBusLi.style.display = 'none';  
            lupaG.style.display = 'block'; 
        }
    }
};