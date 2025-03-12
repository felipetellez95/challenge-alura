// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre válido");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else if (cantidadAmigos === 1) {
    alert('Se necesita al menos dos amigos para realizar un sorteo');
  }  else {
    let amigosNoSorteados = amigos.filter(amigo => !amigosSorteados.includes(amigo));
    if (amigosNoSorteados.length === 0) {
        alert('Todos los amigos ya han sido sorteados');
        return;
    }

    let indiceAmigo = Math.floor(Math.random() * amigosNoSorteados.length);
    let amigoSorteado = amigosNoSorteados[indiceAmigo];

    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = (`Tu amigo secreto será: ${amigos[indiceAmigo]}`);

    amigosSorteados.push(amigoSorteado);
  }
}
