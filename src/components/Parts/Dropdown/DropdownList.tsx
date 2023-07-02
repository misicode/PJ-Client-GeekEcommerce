import { useState } from "react";

import { DropdownOption } from "../../../types/menu";
import { useToggleDropdown } from "../../../hooks/useToggleDropdown";

import SelectorIcon from "../../Icons/SelectorIcon/SelectorIcon";

type DropdownListProps = {
  containerStyle?: string;
  selectorStyle?: string;
  listStyle?: string;
  firstOption: DropdownOption;
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
};

const DropdownList = ({
  containerStyle = "",
  selectorStyle = "",
  listStyle = "",
  firstOption,
  options,
  onSelect,
}: DropdownListProps) => {
  const { isOpen, setIsOpen, dropdownRef, toggleDropdown } = useToggleDropdown();
  const [ selectedOption, setSelectedOption ] = useState<DropdownOption>(firstOption);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div ref={ dropdownRef } className={ `relative ${ containerStyle }` }>
      <button onClick={ toggleDropdown } className={`flex w-full items-center justify-between ${ selectorStyle }`} type="button">
        <span>{ selectedOption.label }</span>
        <SelectorIcon classList="w-3.5 h-3.5" />
      </button>
      { isOpen && (
        <ul className={ `absolute z-10 w-full rounded-b-lg ${ listStyle }` }>
          { options.map((option) => (
            <li
              key={ option.value }
              className="cursor-pointer pt-1.5 pb-2 px-2.5 rounded-b-lg hover:bg-gray-200 dark:hover:bg-gray-900"
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
