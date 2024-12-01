const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'marta', edad: 30 },
    { nombre: 'Carlos', edad: 35 },
    { nombre: 'yesid', edad: 17 }
];

const tabla = document.querySelector('#tablaPersonas');

const encabezado = document.createElement('tr');
encabezado.innerHTML = '<th>Nombre</th><th>Edad</th>';
tabla.appendChild(encabezado);

personas.forEach(persona => {
    const fila = document.createElement('tr');
    fila.innerHTML = `<td>${persona.nombre}</td><td>${persona.edad}</td>`;
    tabla.appendChild(fila);
});