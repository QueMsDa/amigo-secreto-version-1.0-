let titulo = document.querySelector(`h1`);
titulo.innerHTML = `Amigo secreto`;

let parrafo = document.querySelector(`p`);

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombreAmigo = input.value;
    if (nombreAmigo) {
        let lista = document.getElementById("listaAmigos");
        if (!lista) {
            lista = document.createElement("ul");
            lista.id = "listaAmigos";
            document.body.appendChild(lista);
        }
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = nombreAmigo;
        lista.appendChild(nuevoAmigo);
        input.value = ""; // Limpiar el campo de entrada después de agregar el nombre
    }
}

function sortearAmigo() {
    let lista = document.getElementById("listaAmigos");
    if (lista && lista.children.length > 0) {
        let amigos = Array.from(lista.children).map(li => li.textContent);
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>${amigoSorteado}</li>`;

        // Actualizar la lista de amigos eliminando el amigo sorteado
        lista.innerHTML = "";
        amigos.forEach(amigo => {
            let li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });
    } else {
        alert("la docente es la elegida");
    }
}