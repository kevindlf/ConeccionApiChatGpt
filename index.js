async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://api.github.com/search/repositories?q=stars:>1000&sort=stars&order=desc');
        const datos = await respuesta.json();

        const tabla = document.getElementById('tablaDatosBody');

        datos.items.forEach(repo => {
            const fila = tabla.insertRow();
            fila.innerHTML = `
                <td>${repo.id}</td>
                <td>${repo.name}</td>
                <td>${repo.description}</td>
                <td><a href="${repo.html_url}" target="_blank">${repo.html_url}</a></td>
            `;
        });
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

window.onload = obtenerDatos;
