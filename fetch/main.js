'use strict';
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log('Error:', error);
  }
}
fetchData();
async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/403');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.log('Error:', error);
  }
}
fetchPokemon();
