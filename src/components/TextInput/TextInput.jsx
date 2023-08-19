import { forwardRef } from 'react';
import './text-input.scss';

const TextInput = forwardRef(function TextInput(props, ref) {
  const {
    name,
    id,
    value,
    func,
    title,
    number,
    placeholder = 'Enter text here',
  } = props;

  return (
    <div className="text-input">
      <label htmlFor={id} className="text-input__label mb-md">
        {number ? `${number}. ` : ''}
        {title}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        className="text-input__input"
        onChange={(e) => func(e)}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});
export default TextInput;
