import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [ formState, setFormState ] = useState(initialForm);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [ name ]: value,
    });
  };

  return {
    formState,
    onChange,
  };
};
