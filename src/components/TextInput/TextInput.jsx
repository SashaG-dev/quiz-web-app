import './text-input.scss';

const TextInput = ({
  name,
  id,
  value,
  func,
  title,
  number,
  placeholder = 'Enter text here',
}) => {
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
      />
    </div>
  );
};
export default TextInput;
