import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  list: string[];
};
type SearchBar = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
type ListItems = {
  items: string[];
  search: string;
};

export function SearchableList({ list }: Props) {
  const [search, setSearch] = useState('');

  console.log(search);

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <ListItems items={list} search={search} />
    </div>
  );
}

function SearchBar({ search, setSearch }: SearchBar) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

function ListItems({ items, search }: ListItems) {
  const item = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      item.push(
        <li key={i} className="show">
          {items[i]}
        </li>
      );
    }
  }

  return <ul>{item}</ul>;
}
