import { useToggleDropdown } from "../../../hooks/useToggleDropdown";

import SelectorIcon from "../../Icons/SelectorIcon/SelectorIcon";

type DropdownFormProps = {
  containerStyle?: string;
  selectorStyle?: string;
  firstOption: string;
  children: React.ReactNode;
};

const DropdownForm = ({ containerStyle = "", selectorStyle = "", firstOption, children }: DropdownFormProps) => {
  const { isOpen, dropdownRef, toggleDropdown } = useToggleDropdown();

  return (
    <div ref={ dropdownRef } className={ `relative ${ containerStyle }` }>
      <button onClick={ toggleDropdown } className={ `flex w-full rounded items-center justify-between ${ selectorStyle }` }>
        <span>{ firstOption }</span>
        <SelectorIcon classList="w-3.5 h-3.5 my-auto text-slate-500" />
      </button>
      { isOpen && children }
    </div>
  );
};

export default DropdownForm;
