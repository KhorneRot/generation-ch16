/* URL o consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";

/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon");

const idPokemon = document.getElementById("id-pokemon");

const nombrePokemon = document.getElementById("nombre-pokemon");

const listaHabilidades = document.getElementById("lista-habilidades");

const listaTipos = document.getElementById("lista-tipos");

const formulario = document.getElementById("buscador-pokemon");
console.log(formulario);

/* Eventos */
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputPokemon = document.getElementById("busqueda-pokemon");
  console.log(inputPokemon.value);

  const nuevaBusqueda = urlPokemon + inputPokemon.value;

  console.log(urlPokemon);

  obtenerPokemon(nuevaBusqueda);
});

/* Funciones */
async function obtenerPokemon(url) {

    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
      
        const pokemon = {
          nombre: datos.forms[0].name,
          habilidades: datos.abilities,
          id: datos.id,
          tipos: datos.types,
          imagen: datos.sprites.other["official-artwork"].front_default,
        };
      
        // imagen, nombre y ID
        imgPokemon.src = pokemon.imagen;
        idPokemon.textContent = `ID: ${pokemon.id}`;
        nombrePokemon.textContent = pokemon.nombre;
      
        // Habilidades
      
        let template = ``;
      
        for (let i = 0; i < pokemon.habilidades.length; i++) {
          const nombreHabilidad = pokemon.habilidades[i].ability.name;
      
          template += `<li class="list-group-item">${nombreHabilidad}</li>`;
        }
      
        listaHabilidades.innerHTML = template;
      
        // Tipos
        let templateTipos = ``;
      
        pokemon.tipos.forEach((tipo) => {
          const nombreTipo = tipo.type.name;
      
          templateTipos += `<li class="list-group-item">${nombreTipo}</li>`;
        });
      
        listaTipos.innerHTML = templateTipos;

        
    }catch(e){
        alert("pokemon no valido")

    }

}


