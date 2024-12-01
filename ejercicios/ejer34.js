function agregarTarea() {
    const tareaInput = document.querySelector('#tareaInput'); 
    const tareaTexto = tareaInput.value;

    if (tareaTexto.trim() === '') {
        alert('Por favor, ingresa una tarea');
        return;
    }
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tareaTexto;

    const botonCompletar = document.createElement('button');
    botonCompletar.textContent = 'Marcar como completada';
    botonCompletar.onclick = () => {
        nuevaTarea.classList.toggle('completada');
        botonCompletar.textContent = nuevaTarea.classList.contains('completada') ? 'Desmarcar' : 'Marcar como completada';
    };

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => {
        nuevaTarea.remove();
    };

    nuevaTarea.appendChild(botonCompletar);
    nuevaTarea.appendChild(botonEliminar);

    const listaTareas = document.querySelector('#listaTareas'); 
    listaTareas.appendChild(nuevaTarea);

    tareaInput.value = '';
}


const agregarB = document.querySelector('#agregarB');
agregarB.addEventListener('click', agregarTarea);