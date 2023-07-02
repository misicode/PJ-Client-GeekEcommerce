import { DropdownOption } from "../../../types/menu";

import SelectorIcon from "../../Icons/SelectorIcon/SelectorIcon";

type DropdownHoverListProps = {
  firstOption: string;
  options: DropdownOption[];
};

const DropdownHoverList = ({ firstOption, options }: DropdownHoverListProps) => {
  return (
    <div className="group relative">
      <button className="flex w-full py-2 px-4 bg-gray-100 dark:bg-gray-900 rounded-md items-center justify-between" type="button">
        <span>{ firstOption }</span>
        <SelectorIcon classList="w-3.5 h-3.5" />
      </button>
      <ul className="invisible group-hover:visible absolute z-10 w-full bg-gray-100 dark:bg-gray-900 rounded-b-lg">
        { options.map((option) => (
          <li
            key={ option.value }
            className="cursor-pointer pt-1.5 pb-2.5 px-4 rounded-b-lg hover:font-medium hover:text-primary-500"
          >
            { option.label }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownHoverList;