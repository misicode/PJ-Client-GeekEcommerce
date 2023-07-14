type CheckboxInputProps = {
  id: string;
  labelStyle?: string;
};

const CheckboxInput = ({ id }: CheckboxInputProps) => {
  return (
    <input
      id={ id }
      type="checkbox"
      className="h-4 w-4 text-primary-600 bg-gray-150 dark:bg-gray-750 border border-gray-400 dark:border-gray-600 focus:ring-2 focus:ring-primary-600  dark:ring-offset-gray-800 rounded"
    />
  );
};

export default CheckboxInput;
