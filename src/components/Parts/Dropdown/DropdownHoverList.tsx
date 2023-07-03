import { DropdownOption } from "../../../types/menu";

type DropdownHoverListProps = {
  firstOption: string;
  options: DropdownOption[];
};

const DropdownHoverList = ({ firstOption, options }: DropdownHoverListProps) => {
  return (
    <div className="group relative w-36">
      <button className="w-full py-3 px-4 text-center" type="button">
        <span>{ firstOption }</span>
      </button>
      <ul className="invisible group-hover:visible absolute z-10 w-full bg-gray-100 dark:bg-gray-900 rounded-lg">
        { options.map((option) => (
          <li
            key={ option.value }
            className="cursor-pointer pt-1.5 pb-2.5 px-4 hover:text-primary-500"
          >
            { option.label }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownHoverList;