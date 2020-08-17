//  ------------------------- MENU THEMES -------------------------------
if (localStorage.getItem('Tema-Night') === 'true') {
    document.body.classList.add('Night');
} else {
    localStorage.removeItem('Tema-Night');    
}


// ------------------------------ APIS ---------------------------------------
const apiTrend = 'https://api.giphy.com/v1/gifs/trending?api_key=PTJUhPR1gtl2Ngf90oeI6cjoJo4immck&limit=4&rating=G';
const endpointUpload = "https://upload.giphy.com/v1/gifs?";
const apiKey = "api_key=PTJUhPR1gtl2Ngf90oeI6cjoJo4immck";
const userName = '&username=fernandoveleze';
const apiUploadKey = endpointUpload + apiKey;
let cronometro;

// ----------------------------------------------------------------------------
// ------------------------- GRABACION CON RECORD RTC -------------------------
// ----------------------------------------------------------------------------

let chunks = [];
let formData;
let archivoListo;
// Almacena una referencia del elemento de video de vista previa y una referencia global a la instancia de la grabadora
let video = document.getElementById('videoDisplay');

function cameraOn() {
    // Solicita acceso a los dispositivos de medios
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { width: 640, height: 480}
    }).then(function (stream) {
        // Muestra una vista previa en vivo en el elemento de video de la página
        setSrcObject(stream, video);

        // ¡Comienza a mostrar la vista previa en el elemento de video, además, se silencia el audio!
        video.play();
        video.muted = true;

        // Cuando el usuario hace clic en iniciar grabación de video
        document.getElementById('activarCamara').addEventListener("click", function () {
            chunks =[];
            // Inicializa la grabadora
            recorder = new RecordRTCPromisesHandler(stream, {
                mimeType: 'gif',
                frameRate: 12,
                quality: 70,
                width: 640,
                height: 480,
            });
            chunks.push(stream);
            chunks.push(recorder);

            // Comienza a grabar el video
            recorder.startRecording().then(function () {
                console.info('Recording video ...');
            }).catch(function (error) {
                console.error('Cannot start video recording: ', error);
            });

            // liberar flujo en stopRecording
            recorder.stream = stream;
        })
        // Activar botón de detener grabación
        document.getElementById('pararCamara').disabled = false;

    }).catch(function (error) {
        console.error("Cannot access media devices: ", error);
    });
}

function cameraOff() {
    this.disabled = true;
    let formData = new FormData();

    recorder.stopRecording().then(function () {
        console.info('stopRecording success');

        let blob3 = new Blob();
        blob3 = chunks[1].blob;
        formData.append('file', blob3, 'Gif_by_Zelevf.gif');

        archivoListo = formData.get('file');
        videoURL4 = URL.createObjectURL(blob3);

        // Detener la transmisión del dispositivo
        recorder.stream.stop();
        stop();

        // Habilite el botón de grabación nuevamente!
        document.getElementById('activarCamara').disabled = false;

        let miCanvas ='';
        miCanvas = document.getElementById('miCanvas');
        let ctx = '';
        ctx = miCanvas.getContext("2d");
        let miImagen = new Image(miCanvas);
        miImagen.src = videoURL4; 
        miImagen.onload = function() {
            ctx.drawImage(miImagen,0,0);
        }

    }).catch(function (error) {
        console.error('stopRecording failure', error);
    });

    document.getElementById('flechaGrabaci').addEventListener('click', function (e) {
        let video2 = document.getElementById('videoDisplay2');
        video2.src = videoURL4;

        miCanvas.style.display = 'none'; 
        video2.style.display = 'flex'; 
        e.preventDefault();
    });    
}

// ----------------------------------------------------------------
// ------------------------- GRABACION JS -------------------------
// ----------------------------------------------------------------



// ---------------------- PASOS PARA CREAR GUIFO -----------------------------

// Cuadros de diálogo
const conteMens = document.getElementById('conteMens');
const conteCama = document.getElementById('conteCama');
const conteMens2 = document.getElementById('conteMens2');
const mensChequeo = document.getElementById('mensChequeo');
const mensCaptu = document.getElementById('mensCaptu');
const mensVist = document.getElementById('mensVist');
const subirGuifo = document.getElementById('subirGuifo');
const mensSubi = document.getElementById('mensSubi');
const uno = document.getElementById('uno');
let video3 = document.getElementById('videoDisplay3');
let video2 = document.getElementById('videoDisplay2');
let miCanvas = document.getElementById('miCanvas');




// --------BOTONES

// 1er Boton - Capturar
const activarCamara = document.getElementById('activarCamara');

// 2do Boton - Parar Cámara
const pararCamara = document.getElementById('pararCamara');
const contadCama = document.getElementById('contadCama');

// 3do Boton - Repetir Guifo
const botonRepetir = document.getElementById('botonRepetir');

// 4to Boton - Subir Guifo
const botonSubir = document.getElementById('botonSubir');

// 5to Boton - Darle play al Gif hecho
const flechaGrabaci = document.getElementById('flechaGrabaci');
const playGif = document.getElementById('playGif');

// 6to Boton - Cancelar captura
const botonCancelarGif = document.getElementById('botonCancelarGif');

// 7mo Boton - Copiar link del GIF
const botCopiar = document.getElementById('botCopiar');

// 8vo Boton - Descargar GIF
const botDescargar = document.getElementById('botDescargar');

// 9to Boton - Finalizar creación y subida de Gif
const botoFinGif = document.getElementById('botoFinGif');

// 10mo Boton - Cancelar proceso por completo
const equisCama = document.getElementById('equisCama');
const equisCama2 = document.getElementById('equisCama2');



// // ----------------------------------------------------------------------------------------
// // -------------------------------- PASOS -------------------------------------------------
// // ----------------------------------------------------------------------------------------


// 1er PASO ACCION
document.getElementById('botComenzar').addEventListener('click', function(e) {
    cameraOn();
    videoDisplay.style.display = 'flex'; 
    conteMens.style.display = 'none'; 
    uno.style.display = 'none'; 
    activarCamara.style.display = 'flex'; 
    mensChequeo.style.display = 'flex'; 
    conteCama.style.display = 'grid';  
    e.preventDefault();
});


// 2do PASO ACCION
document.getElementById('activarCamara').addEventListener('click', function(e) {
    cronoStart();

    // Creando nuevo título
    const capturar = document.createElement('p');
    capturar.id = 'mensCaptu';
    capturar.className = 'mensCaptu';
    capturar.appendChild(document.createTextNode('Capturando tu guifo'));

    // anterior
    const chequeo = document.querySelector('#mensChequeo');
    // padre
    const padre = document.querySelector('#titCama');
    // reemplazando
    padre.replaceChild(capturar, chequeo);

    e.preventDefault();
    pararCamara.style.display = 'flex'; 
    contadCama.style.display = 'flex'; 
    activarCamara.style.display = 'none'; 
});


// 3er PASO ACCION
document.getElementById('pararCamara').addEventListener('click', function(e) {
    cameraOff();
    cronoStop();
    // Creando nuevo título
    const vistaPrevia = document.createElement('p');
    vistaPrevia.id = 'mensVist';
    vistaPrevia.className = 'mensVist';
    vistaPrevia.appendChild(document.createTextNode('Vista previa'));

    // anterior
    const capturar = document.querySelector('#mensCaptu');
    // padre
    const padre = document.querySelector('#titCama');
    // reemplazando
    padre.replaceChild(vistaPrevia, capturar);

    videoDisplay.style.display = 'none'; 
    miCanvas.style.display = 'flex'; 
    pararCamara.style.display = 'none'; 
    repetirSubir.style.display = 'flex'; 
    botonRepetir.style.display = 'flex'; 
    botonSubir.style.display = 'flex'; 
    flechaGrabaci.style.display = 'flex'; 
    // playGif.style.display = 'grid'; 
    e.preventDefault();
});


// 4to PASO ACCION - REPETIR CAPTURA
document.getElementById('botonRepetir').addEventListener('click', function(e) {
    cameraOn();
    // Creando nuevo título
    const chequeo = document.createElement('p');
    chequeo.id = 'mensChequeo';
    chequeo.className = 'mensChequeo';
    chequeo.appendChild(document.createTextNode('Un chequeo antes de empezar'));

    // anterior
    const vistaPrevia = document.querySelector('#mensVist');
    // padre
    const padre = document.querySelector('#titCama');
    // reemplazando
    padre.replaceChild(chequeo, vistaPrevia);

    miCanvas.style.display = 'none'; 
    video.style.display = 'flex'; 
    videoDisplay2.style.display = 'none'; 

    video2.src = '';
    contadCama.style.display = 'none'; 
    conteCama.style.display = 'grid'; 
    repetirSubir.style.display = 'none';
    botonSubir.style.display = 'none'; 
    flechaGrabaci.style.display = 'none'; 
    // playGif.style.display = 'none'; 
    activarCamara.style.display = 'flex'; 
    e.preventDefault();
});


// 4to PASO ACCION - SUBIR GUIFO
document.getElementById('botonSubir').addEventListener('click', function(e) {

    miCanvas.style.display = 'none'; 
    videoDisplay2.style.display = 'none'; 
    subirGuifo.style.display = 'flex';
    video3.src = videoURL4;

    contadCama.style.display = 'none';
    flechaGrabaci.style.display = 'none'; 
    // playGif.style.display = 'none'; 
    repetirSubir.style.display = 'none';
    botonCancelarGif.style.display = 'flex';
    subirGIFO();
    progressBar();
});


// 5to PASO ACCION - CANCELAR FINALIZAR PROCESO DE CREACION Y SUBIDA DEL GIF 
document.getElementById('botonCancelarGif').addEventListener('click', function(e) {
    videoDisplay.style.display = 'flex'; 
    subirGuifo.style.display = 'none'; 
    repetirSubir.style.display = 'flex'; 
    botonRepetir.style.display = 'flex'; 
    botonSubir.style.display = 'flex'; 
    contadCama.style.display = 'flex'; 
    flechaGrabaci.style.display = 'flex'; 
    botonCancelarGif.style.display = 'none';
    uno.style.display = 'flex'; 
    location.reload();
    e.preventDefault();
});

// 6to PASO ACCION - FINALIZAR PROCESO DE CREACION Y SUBIDA DEL GIF 
document.getElementById('botoFinGif').addEventListener('click', function(e) {

    videoDisplay3.src = '';

    conteMens2.style.display = 'none'; 
    botonCancelarGif.style.display = 'none'; 
    conteMens.style.display = 'grid';
    activarCamara.style.display = 'flex'; 
    subirGuifo.style.display = 'none';
    videoURL4 = '';
    video2.src = '';
});

let linkGIF;
// 6to PASO ACCION - COPIAR EL ENLACE DEL GIF
document.getElementById('botCopiar').addEventListener('click', function(e) {
    copiarGIF();
    e.preventDefault();
});

// 6to PASO ACCION - DESCARGAR EL GIF
document.getElementById('botDescargar').addEventListener('click', function(e) {
    invokeSaveAsDialog(archivoListo);
    e.preventDefault();
});


// CANCELAR TODO CON LA X 
document.getElementById('equisCama').addEventListener('click', function(e) {
    location.reload();
});

// CANCELAR TODO CON LA X2
document.getElementById('equisCama2').addEventListener('click', function(e) {
    location.reload();
});



// // ----------------------------------------------------------------------------------------
// // -------------------------------  FUNCIONES  --------------------------------------------
// // ----------------------------------------------------------------------------------------

function progressBar() {
    const el = document.getElementById('progress');
    let width = 1;
    let id = setInterval(frame, 120);
    function frame() {
        if(width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            el.style.width = width + '%';
        }
    }
}


function subirGIFO() {
    // Creando nuevo título
    const subiendo = document.createElement('p');
    subiendo.id = 'mensSubi';
    subiendo.className = 'mensSubi';
    subiendo.appendChild(document.createTextNode('Subiendo guifo'));
    // anterior
    const vistaPrevia = document.querySelector('#mensVist');
    // padre
    const padre = document.querySelector('#titCama');
    // reemplazando
    padre.replaceChild(subiendo, vistaPrevia);

    const tags = 'zelevf, gif'; 
    const formData = new FormData();
    formData.append("file", archivoListo, "gif_by_Zelevf.gif");
    fetch((endpointUpload + apiKey), {
        method: 'POST',
        id: 'zelevf',
        body: formData
    }, tags)
    .then(function(response) {
        if (response.ok) {
            guifoListo();
            return response.json()
            .then(data => {
                const gifID = data.data.id;
                const getGif = "https://api.giphy.com/v1/gifs/";
                const APIK = "?api_key=PTJUhPR1gtl2Ngf90oeI6cjoJo4immck";
                linkGIF = gifID;
                fetch(`${getGif}${gifID}${APIK}`)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem(`gif${data.data.id}`, `${JSON.stringify(data.data)}`);
                })
            });
        } else {
        }
    })
    .catch(function(error) {
        console.log('Error al ejecutar Fetch ' + error);
    });
};


function cargarGif() { 
    for(i = 0; i < localStorage.length; i++){ 
        let misGif = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
        x = 'https://api.giphy.com/v1/gifs/' + misGif.id + '?api_key=PTJUhPR1gtl2Ngf90oeI6cjoJo4immck';
        fetch(x)
        .then(response => response.json())
        .then(data => {
            let element = document.getElementById('misGuifosCreados');
            let img = document.createElement('img');
            img.src = data.data.images.downsized_large.url;
            element.appendChild(img);
        })
        .catch(err => console.log(err));
    };
};
cargarGif();



// ESTO VIENE COMO CALLBACK CUANDO CARGUE EL GIF
function guifoListo() {
    // Creando nuevo título
    const titleNew = document.createElement('p');
    titleNew.id = 'mensChequeo';
    titleNew.className = 'mensChequeo';
    titleNew.appendChild(document.createTextNode('Un chequeo antes de empezar'));

    // anterior
    const subiendo = document.querySelector('#mensSubi');
    // padre
    const padre = document.querySelector('#titCama');
    // reemplazando
    padre.replaceChild(titleNew, subiendo);

    conteCama.style.display = 'none'; 
    conteMens2.style.display = 'flex'; 
    subirGuifo.style.display = 'none';
    videoDisplay3.src = videoURL4;
};

function copiarGIF() {
    let linkCopiar = "https://giphy.com/gifs/" + `${linkGIF}`;
    let inputFalso = document.createElement('input');
    inputFalso.setAttribute("value", linkCopiar);
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand('copy');
    document.body.removeChild(inputFalso);
}



let contadorM = 0;
let contadorS = 0;


function cronoStart() {
    seconds = 0;
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');

    minutos.innerHTML = '00';
    segundos.innerHTML = '00';

    cronometro = setInterval(function(){
        seconds++;
        secs = seconds;
        mins = 0;
        while(secs >= 60) {
            mins++;
            secs -= 60;
        }

        if (mins < 10) {
            minutos.innerHTML = "0" + mins;
        } else {
            minutos.innerHTML = mins;
        }

        if (secs < 10) {
            segundos.innerHTML = '0' + secs;
        } else {
            segundos.innerHTML = secs;
        }

    }, 1000);

    
}

function cronoStop() {
    clearInterval(cronometro);
}


// // ----------------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------------