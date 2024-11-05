interface InputProps {
  type: string;
  id?: string;
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
  value?: string;
  checked?: boolean;
}

export default function CustomInput({
  type,
  name,
  id,
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
  checked,
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
        defaultChecked={checked}
        name={name.toString()}
        id={id || name.toString()}
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
