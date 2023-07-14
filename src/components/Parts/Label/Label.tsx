type LabelProps = {
  forLabel: string;
  labelStyle?: string;
  text: string;
};

const Label = ({ forLabel, labelStyle = "", text }: LabelProps) => {
  return (
    <label 
      className={ `text-sm text-gray-900 dark:text-gray-300 ${ labelStyle }` }
      htmlFor={ forLabel }
    >
      { text }
    </label>
  );
};

export default Label;