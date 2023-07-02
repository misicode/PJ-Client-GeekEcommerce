import { useState } from "react";

import { convertText } from "../../../helpers/convertText";
import { DropdownOption } from "../../../types/menu";

import DropdownList from "../Dropdown/DropdownList";
import SearchIcon from "../../Icons/SearchIcon/SearchIcon";

const categories: DropdownOption[] = [
  { value: "CAT0", label: convertText("TODOS") },
  { value: "CAT1", label: convertText("ACCESORIOS") },
  { value: "CAT2", label: convertText("COLECCIONABLES") },
  { value: "CAT3", label: convertText("CONSOLAS") },
  { value: "CAT4", label: convertText("TARJETAS") },
  { value: "CAT5", label: convertText("VIDEOJUEGOS") },
];

const SearchBar = () => {
  const [ category, setCategory ] = useState<DropdownOption>(categories[0]);

  const handleCategorySelect = (option: DropdownOption) => {
    setCategory(option);
  };

  return (
    <form className="flex flex-1 pl-16 text-sm">
      <DropdownList 
        containerStyle="w-44"
        selectorStyle="py-2.5 px-3 text-neutral-50 font-medium bg-primary-600 border-2 border-primary-600 rounded-l-lg focus:rounded-tl-lg"
        listStyle="-translate-y-0.5 translate-x-0.5 dark:bg-gray-800 border-x-2 border-b-2 border-primary-600"
        firstOption={ category }
        options={ categories }
        onSelect={ handleCategorySelect }
      />
      <div className="relative w-full">
        <input 
          type="search"
          className="w-full p-2.5 text-gray-900 dark:text-white bg-transparent rounded-r-lg border-2 border-primary-600 dark:placeholder-gray-400 focus:outline-none"
          placeholder="Buscar en TecnoCat"
          required
        />
        <button type="submit" className="absolute top-0 right-0 p-2.5 text-white bg-primary-600 rounded-r-lg border-2 border-primary-600 focus:outline-none">
          <SearchIcon />
        </button>
      </div>
      </form>
  );
};

export default SearchBar;