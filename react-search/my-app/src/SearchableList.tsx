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
  let item;
  for (let i = 0; i < items.length; i++) {
    if (search.includes(items[i])) {
      item = items.map((item) => (
        <li key={i} className="show">
          {item}
        </li>
      ));
    } else {
      item = items.map((item) => (
        <li key={i} className="show hidden">
          {item}
        </li>
      ));
    }
  }

  return <ul>{item}</ul>;
}
