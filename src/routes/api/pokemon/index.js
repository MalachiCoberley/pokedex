export async function get({params}) {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151';
  const res = await fetch(url);
  const data = await res.json();

  const pokemon = data.results.map((data, index) => {
    return {
      name: data.name,
      id: index + 152,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 152}.png`
    };
  });
  return {
    status: 200,
    body: pokemon
  }
}