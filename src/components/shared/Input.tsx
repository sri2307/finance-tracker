import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  isRequired?: boolean;
  error?: string;
}

const Input = ({
  label,
  id,
  placeholder,
  register,
  isRequired,
  error,
}: InputProps) => {
  return (
    <div className={`input-group ${error ? 'error' : ''}`}>
      <label htmlFor={id} className={isRequired ? 'required' : ''}>
        {label}
      </label>
      <input id={id} placeholder={placeholder} {...register} />
      <span>{error}</span>
    </div>
  );
};

export default Input;
