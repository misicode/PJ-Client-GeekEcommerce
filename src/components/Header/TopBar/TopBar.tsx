import { useState } from "react";

import { DropdownOption } from "../../../types/menu";

import DropdownForm from "../../Parts/Dropdown/DropdownForm";
import DropdownList from "../../Parts/Dropdown/DropdownList";
import ToggleTheme from "../../Parts/ToggleTheme/ToggleTheme";

const languages: DropdownOption[] = [
  { value: "SPA", label: "Español" },
  { value: "ENG", label: "Inglés" },
];

const currencies: DropdownOption[] = [
  { value: "PEN", label: "PEN (Sol peruano)" },
  { value: "USD", label: "USD (Dólar estadounidense)" },
];

const TopBar = () => {
  const [ language, setLanguage ] = useState<DropdownOption>(languages[0]);
  const [ currency, setCurrency ] = useState<DropdownOption>(currencies[0]);

  const handleLanguageSelect = (option: DropdownOption) => {
    setLanguage(option);
  };

  const handleCurrencySelect = (option: DropdownOption) => {
    setCurrency(option);
  };

  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between text-xs dark:text-slate-50 bg-slate-200 dark:bg-slate-700">
      <DropdownForm firstOption={ `${ language.label } / ${ currency.value }` } containerStyle="w-32" selectorStyle="py-2 px-4 hover:text-cyan-500 border-x-2 border-slate-300 dark:border-slate-600">
        <div className="absolute w-auto py-3 px-4 bg-slate-200 dark:bg-slate-700 rounded-b-lg">
          <p>Idioma</p>
          <DropdownList 
            containerStyle="w-48 mt-1.5 mb-3"
            selectorStyle="py-1.5 px-2.5 bg-slate-100 dark:bg-slate-600 ring-1 ring-slate-300 dark:ring-slate-500"
            firstOption={ language }
            options={ languages }
            onSelect={ handleLanguageSelect }
          />
          <p>Moneda</p>
          <DropdownList 
            containerStyle="w-48 mt-1.5 mb-2"
            selectorStyle="py-1.5 px-2.5 bg-slate-100 dark:bg-slate-600 ring-1 ring-slate-300 dark:ring-slate-500"
            firstOption={ currency }
            options={ currencies }
            onSelect={ handleCurrencySelect }
          />
        </div>
      </DropdownForm>
      <div className="flex-1"></div>
      <div className="flex items-center">
        <a href="#" className="py-2 px-4 hover:text-cyan-500 border-l-2 border-slate-300 dark:border-slate-600">
          SUSCRÍBETE
        </a>
        <a href="#" className="py-2 px-4 hover:text-cyan-500 border-l-2 border-slate-300 dark:border-slate-600">
          PREGUNTAS
        </a>
        <ToggleTheme />
      </div>
    </div>
  )
}

export default TopBar;
