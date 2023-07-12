import { useState } from "react";

import { DropdownOption } from "../../../types/menu";

import DropdownForm from "../Dropdown/DropdownForm";
import DropdownList from "../Dropdown/DropdownList";

const languages: DropdownOption[] = [
  { value: "SPA", label: "Español" },
  { value: "ENG", label: "Inglés" },
];
const currencies: DropdownOption[] = [
  { value: "PEN", label: "PEN (Sol peruano)" },
  { value: "USD", label: "USD (Dólar estadounidense)" },
];

const SelectorLC = () => {
  const [ language, setLanguage ] = useState<DropdownOption>(languages[0]);
  const [ currency, setCurrency ] = useState<DropdownOption>(currencies[0]);

  const handleLanguageSelect = (option: DropdownOption) => {
    setLanguage(option);
  };

  const handleCurrencySelect = (option: DropdownOption) => {
    setCurrency(option);
  };

  return (
    <DropdownForm 
      firstOption={ `${ language.label } / ${ currency.value }` }
      containerStyle="lg:w-24"
      selectorStyle="py-2 hover:text-primary-500"
    >
      <div className="absolute z-20 w-auto py-3 px-4 bg-gray-100 dark:bg-gray-900 rounded-b-lg -translate-x-48 lg:translate-x-0">
        <p>Idioma</p>
        <DropdownList 
          containerStyle="w-48 mt-1.5 mb-3"
          selectorStyle="py-1.5 px-2.5 bg-gray-50 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-500 rounded"
          listStyle="bg-gray-50 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-500"
          firstOption={ language }
          options={ languages }
          onSelect={ handleLanguageSelect }
        />
        <p>Moneda</p>
        <DropdownList 
          containerStyle="w-48 mt-1.5 mb-2"
          selectorStyle="py-1.5 px-2.5 bg-gray-50 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-500 rounded"
          listStyle="bg-gray-50 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-500"
          firstOption={ currency }
          options={ currencies }
          onSelect={ handleCurrencySelect }
        />
      </div>
    </DropdownForm>
  );
};

export default SelectorLC;
