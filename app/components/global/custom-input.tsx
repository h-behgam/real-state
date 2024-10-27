interface InputProps {
  type: string;
  name: string | number;
  defaultValue?: string | number;
  autoComplete?: string;
  placeholder?: string;
  changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classname: string;
  labalName?: string;
  labelClassName?: string;
  labelTitle?: string;
  multiple?: boolean;
  value?: any;
}

export default function CustomInput({
  type,
  name,
  defaultValue,
  changeHandler,
  classname,
  autoComplete,
  labalName,
  labelClassName,
  labelTitle,
  placeholder,
  multiple,
  value,
}: InputProps) {
  return (
    <>
      {labalName && (
        <label htmlFor={labalName} className={labelClassName}>
          {labelTitle}
        </label>
      )}
      <input
        multiple={multiple}
        type={type}
        name={name as string}
        id={name as string}
        placeholder={placeholder}
        onChange={changeHandler}
        autoComplete={autoComplete}
        className={classname}
        {...(defaultValue ? { defaultValue: defaultValue } : {})}
        {...(value ? { value: value } : {})}
      />
    </>
  );
}
