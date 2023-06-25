import { useState } from "react";

import { DropdownOption } from "../../../types/menu";
import { useToggleDropdown } from "../../../hooks/useToggleDropdown";

import SelectorIcon from "../../Icons/SelectorIcon/SelectorIcon";

type DropdownListProps = {
  containerStyle?: string;
  selectorStyle?: string;
  firstOption: DropdownOption;
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
};

const DropdownList = ({ containerStyle = "", selectorStyle = "", firstOption, options, onSelect }: DropdownListProps) => {
  const { isOpen, setIsOpen, dropdownRef, toggleDropdown } = useToggleDropdown();
  const [ selectedOption, setSelectedOption ] = useState<DropdownOption>(firstOption);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div ref={ dropdownRef } className={ `relative ${ containerStyle }` }>
      <button onClick={ toggleDropdown } className={ `flex w-full rounded items-center justify-between ${ selectorStyle }` }>
        <span>{ selectedOption.label }</span>
        <SelectorIcon classList="w-3.5 h-3.5 my-auto text-slate-500" />
      </button>
      { isOpen && (
        <ul className="absolute z-10 w-full rounded-b-lg bg-slate-100 dark:bg-slate-600 ring-1 ring-slate-300 dark:ring-slate-500">
          { options.map((option) => (
            <li
              key={ option.value }
              className="cursor-pointer py-1.5 px-2.5 rounded-b-lg hover:bg-slate-200 dark:hover:bg-slate-700"
              onClick={ () => handleOptionClick(option) }
            >
              { option.label }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
