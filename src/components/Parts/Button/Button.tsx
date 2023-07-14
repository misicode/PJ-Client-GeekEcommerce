type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="flex p-0.5 text-white font-bold bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-700 rounded-lg text-center items-center justify-center"
    >
      <span className="flex py-2 px-4 text-sm rounded-md items-center">
        { text }
      </span>
    </button>
  );
};

export default Button;