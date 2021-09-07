import cn from "classnames";

const Input = (props) => {
  const { className, onChange, label, value, fullBorder, prefix, ...rest } = props;

  const handleOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={cn('flex flex-col-reverse font-open-sans', className)}>
      <span>{prefix}</span>
      <input
        className='outline-none flex-grow pl-3 py-1.5 text-word bg-primary-dark rounded-md'
        onChange={handleOnChange}
        value={value}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
      <label className='text-secondary pl-1 text-lg'>{label}</label>
    </div>
  );
};

export default Input;
