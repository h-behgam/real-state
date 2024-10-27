interface TextAreaProps {
  name: string;
  placeholder?: string;
  classname?: string;
  changeHandler?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
  labalName?: string;
  labelClassName?: string;
  labelTitle?: string;
  defaultValue?: string | number;
}

// 4. Define the text area component
const CustomTextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  changeHandler,
  classname,
  rows,
  cols,
  labalName,
  labelClassName,
  labelTitle,
  defaultValue,
}) => {
  return (
    <>
      {labalName && (
        <label htmlFor={labalName} className={labelClassName}>
          {labelTitle}
        </label>
      )}
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={changeHandler}
        rows={rows ? rows : 4} // Set the number of rows for the text area
        cols={cols ? cols : 50} // Set the number of columns for the text area
        className={classname}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default CustomTextArea;
