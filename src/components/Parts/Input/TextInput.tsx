type TextInputProps = {
  id: string;
  placeholder?: string;
  type: string;
  required?: boolean;
};

const TextInput = ({ id, placeholder = "", type, required = false }: TextInputProps) => {
  return (
    <div className="flex">
      <div className="relative w-full">
        <input
          id={ id }
          type={ type }
          placeholder={ placeholder }
          className="block w-full p-2.5 text-sm text-gray-900 dark:text-white dark:placeholder-gray-400 bg-gray-150 dark:bg-gray-750 border border-gray-300 dark:border-gray-600 focus:border-primary-600 dark:focus:border-primary-600 rounded-lg"
          required={ required } />
      </div>
    </div>
  );
};

export default TextInput;
