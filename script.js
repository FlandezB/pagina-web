document.getElementById("formRegistro").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    document.getElementById("usuario").textContent = nombre;
    document.getElementById("registro").style.display = "none";
    document.getElementById("contenido").style.display = "block";
});

function mostrarSeccion(seccionId) {
    let secciones = document.querySelectorAll("section");
    secciones.forEach(seccion => seccion.classList.add("oculto"));
    document.getElementById(seccionId).classList.remove("oculto");
}

function mostrarResultado() {
    document.getElementById("resultado").classList.remove("oculto");
}

function verificarActividad(numeroActividad) {
    let resultado = "";

    if (numeroActividad === 1) {
        const respuesta = document.querySelector('input[name="icono1"]:checked');
        if (respuesta && respuesta.value === 'chrome') {
            resultado = "¡Correcto! Chrome es un navegador.";
        } else {
            resultado = "Incorrecto. Chrome es un navegador.";
        }
        document.getElementById('resultadoActividad1').textContent = resultado;
        document.getElementById('resultadoActividad1').classList.remove('oculto');
    } else if (numeroActividad === 2) {
        const paso1 = document.getElementById('paso2-1').value;
        const paso2 = document.getElementById('paso2-2').value;
        const paso3 = document.getElementById('paso2-3').value;
        if (paso1 === "Presionar el icono de redactar" && paso2 === "Escribir destinatario y asunto del correo" && paso3 === "Enviar") {
            resultado = "¡Correcto! Pasos para enviar un correo.";
        } else {
            resultado = "Incorrecto. Ordena los pasos.";
        }
        document.getElementById('resultadoActividad2').textContent = resultado;
        document.getElementById('resultadoActividad2').classList.remove('oculto');
    } else if (numeroActividad === 3) {
        const respuesta = document.querySelector('input[name="videollamada"]:checked');
        if (respuesta && respuesta.value === 'video') {
            resultado = "¡Correcto! Una videollamada es comunicarse por video y audio.";
        } else {
            resultado = "Incorrecto. Una videollamada es comunicarse por video y audio.";
        }
        document.getElementById('resultadoActividad3').textContent = resultado;
        document.getElementById('resultadoActividad3').classList.remove('oculto');
    } else if (numeroActividad === 4) {
        const respuesta = document.querySelector('input[name="descarga"]:checked');
        if (respuesta && respuesta.value === 'tienda') {
            resultado = "¡Correcto! Las aplicaciones se descargan desde la tienda de aplicaciones.";
        } else {
            resultado = "Incorrecto. Las aplicaciones se descargan desde la tienda de aplicaciones.";
        }
        document.getElementById('resultadoActividad4').textContent = resultado;
        document.getElementById('resultadoActividad4').classList.remove('oculto');
    } else if (numeroActividad === 5) {
        const respuesta = document.querySelector('input[name="wifi"]:checked');
        if (respuesta && respuesta.value === 'contraseña') {
            resultado = "¡Correcto! Necesitas la contraseña de la red Wi-Fi.";
        } else {
            resultado = "Incorrecto. Necesitas la contraseña de la red Wi-Fi.";
        }
        document.getElementById('resultadoActividad5').textContent = resultado;
        document.getElementById('resultadoActividad5').classList.remove('oculto');
    }


}

const preguntas = [
    {
        pregunta: "¿Qué tecla usas para confirmar una acción en tu teclado?",
        opciones: ["Enter", "Shift", "Ctrl"],
        respuestaCorrecta: "Enter"
    },
    
    {
        pregunta: "¿Cómo se llama el programa para navegar en Internet?",
        opciones: ["Google Chrome", "Microsoft Word", "Microsoft Excel"],
        respuestaCorrecta: "Google Chrome"
    },
    {
        pregunta: "¿Qué tecla usas para confirmar una acción en tu teclado?",
        opciones: ["Enter", "Shift", "Ctrl"],
        respuestaCorrecta: "Enter"
    },
    {
        pregunta: "¿Cómo se llama el programa para navegar en Internet?",
        opciones: ["Google Chrome", "Microsoft Word", "Microsoft Excel"],
        respuestaCorrecta: "Google Chrome"
    },
    {
        pregunta: "¿Qué es una videollamada?",
        opciones: ["Enviar mensajes de texto", "Comunicarse por video y audio", "Escuchar música"],
        respuestaCorrecta: "Comunicarse por video y audio"
    },
    {
        pregunta: "¿Dónde descargas aplicaciones en tu teléfono?",
        opciones: ["Tienda de aplicaciones", "Navegador web", "Documento de texto"],
        respuestaCorrecta: "Tienda de aplicaciones"
    },
    {
        pregunta: "¿Qué necesitas para conectarte a Wi-Fi?",
        opciones: ["Un cable USB", "La contraseña de la red", "Una impresora"],
        respuestaCorrecta: "La contraseña de la red"
    },
    {
        pregunta: "¿Qué es el 'touchpad' en una laptop?",
        opciones: ["La pantalla", "El teclado", "El ratón táctil"],
        respuestaCorrecta: "El ratón táctil"
    },
    {
        pregunta: "¿Qué significa 'www' en una dirección web?",
        opciones: ["World Wide Web", "Windows Web Word", "Write Web Work"],
        respuestaCorrecta: "World Wide Web"
    },
    {
        pregunta: "¿Qué es 'Gmail'?",
        opciones: ["Un navegador web", "Un servicio de correo electrónico", "Un programa de edición de fotos"],
        respuestaCorrecta: "Un servicio de correo electrónico"
    },
    {
        pregunta: "¿Qué es 'Bluetooth'?",
        opciones: ["Un tipo de impresora", "Una forma de conexión inalámbrica", "Un programa de edición de video"],
        respuestaCorrecta: "Una forma de conexión inalámbrica"
    },
    {
        pregunta: "¿Qué es una 'app' en un teléfono inteligente?",
        opciones: ["Un tipo de cargador", "Un accesorio para la cámara", "Un programa o aplicación"],
        respuestaCorrecta: "Un programa o aplicación"
    }
];

function mostrarCuestionario() {
    const preguntasCuestionarioDiv = document.getElementById('preguntasCuestionario');
    preguntasCuestionarioDiv.innerHTML = ''; // Limpiar preguntas anteriores

    const preguntasAleatorias = [];
    const preguntasDisponibles = [...preguntas]; // Copia del arreglo original

    while (preguntasAleatorias.length < 10 && preguntasDisponibles.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * preguntasDisponibles.length);
        preguntasAleatorias.push(preguntasDisponibles.splice(indiceAleatorio, 1)[0]);
    }

    preguntasAleatorias.forEach((pregunta, index) => {
        const preguntaDiv = document.createElement('div');
        preguntaDiv.innerHTML = `
            <h3>Pregunta ${index + 1}: ${pregunta.pregunta}</h3>
            ${pregunta.opciones.map(opcion => `
                <label><input type="radio" name="pregunta${index}" value="${opcion}"> ${opcion}</label><br>
            `).join('')}
        `;
        preguntasCuestionarioDiv.appendChild(preguntaDiv);
    });
}

function mostrarSeccion(seccion) {
    document.querySelectorAll('section').forEach(s => s.classList.add('oculto'));
    document.getElementById(seccion).classList.remove('oculto');

    if (seccion === 'principal') {
        document.getElementById('contenido').querySelectorAll('nav, header').forEach(e => e.style.display = 'block');
    } else {
        document.getElementById('contenido').querySelectorAll('nav, header').forEach(e => e.style.display = 'none');
    }

    if (seccion === 'cuestionario') {
        mostrarCuestionario();
    }
}

function verificarCuestionario() {
    let resultado = "";
    let correctas = 0;

    const preguntasMostradas = Array.from(document.querySelectorAll('#preguntasCuestionario > div'));

    preguntasMostradas.forEach((preguntaDiv, index) => {
        const pregunta = preguntas.find(p => p.pregunta === preguntaDiv.querySelector('h3').textContent.split(': ')[1]);
        const respuestaSeleccionada = preguntaDiv.querySelector(`input[name="pregunta${index}"]:checked`);
        if (respuestaSeleccionada && respuestaSeleccionada.value === pregunta.respuestaCorrecta) {
            correctas++;
        }
    });

    resultado = `Respuestas correctas: ${correctas} de 10`;
    document.getElementById('resultadoCuestionario').textContent = resultado;
    document.getElementById('resultadoCuestionario').classList.remove('oculto');
}

const botonDesplegar = document.getElementById('desplegar-barra');
const barraAvance = document.getElementById('barra-avance');
const barraProgreso = document.getElementById('progreso');
const porcentajeProgreso = document.getElementById('porcentaje-progreso');

botonDesplegar.addEventListener('click', () => {
    barraAvance.classList.toggle('oculto');
});

function actualizarProgreso(valor) {
    barraProgreso.value = valor;
    porcentajeProgreso.textContent = valor + '%';
}

// Ejemplo de cómo actualizar el progreso (puedes adaptarlo a tu lógica)
actualizarProgreso(50); // Establece el progreso al 50%