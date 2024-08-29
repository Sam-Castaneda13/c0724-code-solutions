type Props = {
  List: { number: string; name: string }[];
};

export function PokemonList({ List }: Props) {
  const listItems = List.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul className="bigger">{listItems}</ul>;
}
