
/**
 * estado: Diferentes estados para cambiar el color de la fila o desaparecer
 * de la tabla según el estado del paciente.
 * ATENDIDO: A
 * ESPERANDO: E
 * LLAMADO: L
 */


let pacientes = [
    { id: 13, nombre: "Juan Pérez", consultorio: "5", especialidad: "Odontología", estado: "l" },
    { id: 34, nombre: "Ana Gómez", consultorio: "2", especialidad: "Clínica Médica", estado: "e" },
    { id: 41, nombre: "Lucía Martínez", consultorio: "4", especialidad: "Pediatría", estado: "e" },
    { id: 344, nombre: "Lucas Martínez", consultorio: "1", especialidad: "Dermatología", estado: "l" },
    { id: 3434, nombre: "Analia Gómez", consultorio: "3", especialidad: "Ginecología", estado: "a" },
    { id: 458, nombre: "Jesica Martínez", consultorio: "4", especialidad: "Pediatría", estado: "e" },
    { id: 509, nombre: "Paula Núñez", consultorio: "6", especialidad: "Cardiología", estado: "l" },
    { id: 612, nombre: "Federico Acosta", consultorio: "7", especialidad: "Traumatología", estado: "e" },
    { id: 730, nombre: "Camila Torres", consultorio: "8", especialidad: "Neurología", estado: "e" },
    { id: 845, nombre: "Roberto Sosa", consultorio: "9", especialidad: "Psiquiatría", estado: "e" },
    { id: 900, nombre: "María Ledesma", consultorio: "1", especialidad: "Gastroenterología", estado: "e" },
    { id: 901, nombre: "Héctor Ruiz", consultorio: "2", especialidad: "Clínica Médica", estado: "a" },
    { id: 902, nombre: "Diana Suárez", consultorio: "3", especialidad: "Otorrinolaringología", estado: "l" },
    { id: 903, nombre: "Sofía Ramírez", consultorio: "4", especialidad: "Pediatría", estado: "e" },
    { id: 904, nombre: "Javier Ibarra", consultorio: "5", especialidad: "Urología", estado: "e" },
    { id: 905, nombre: "Marcela Ferreyra", consultorio: "6", especialidad: "Reumatología", estado: "a" },
    { id: 906, nombre: "Gabriel Vázquez", consultorio: "7", especialidad: "Oncología", estado: "l" },
    { id: 907, nombre: "Claudia Ortiz", consultorio: "8", especialidad: "Endocrinología", estado: "e" },
    { id: 908, nombre: "Tomás Delgado", consultorio: "9", especialidad: "Neurología", estado: "e" },
    { id: 909, nombre: "Natalia Paredes", consultorio: "10", especialidad: "Ginecología", estado: "e" }
];


const tabla = document.getElementById("tabla-pacientes");


function mostrarPacientes() {
    tabla.innerHTML = ""; // Limpia la tabla

    const pacientesVisibles = pacientes.filter(p => p.estado !== "a"); // filtro los que no fueron atendidos

    pacientesVisibles.forEach(p => {
        const tr = document.createElement("tr"); // Crea una fila para cada paciente
        tr.id = `paciente-${p.id}`; //asigno un id a la fila
        tr.className = p.estado === "l" ? "llamado" : "";
        //Cambia el estilo si fue llamado

        tr.innerHTML = `
          <td class="nombre">${p.nombre}</td>
          <td class="consultorio">${p.consultorio}</td>
          <td>${p.especialidad}</td>
        `;

        if (p.estado === "l") {
            tabla.prepend(tr); // Agrega la fila al principio de la tabla

            // Ocultar a los 15 segundos
            setTimeout(() => {
                const fila = document.getElementById(`paciente-${p.id}`);
                if (fila) fila.classList.add("oculto");
            }, 1500000000000); // 15000 milisegundos = 15 segundos
        } else {
            tabla.appendChild(tr);
        }
    });
}


//  
mostrarPacientes();


// Mostrar reloj 
function actualizarReloj() {
    const ahora = new Date();

    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const diaSemana = dias[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();

    const hora = ahora.toLocaleTimeString("es-AR", { hour12: false });

    const texto = `${diaSemana} ${dia} de ${mes} de ${año} - ${hora}`;
    document.getElementById("reloj").textContent = texto;
}

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);
// Mostrar de entrada
actualizarReloj();

