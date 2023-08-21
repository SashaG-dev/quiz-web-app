import './radio.scss';

const Radio = ({ value, name, func, state }) => {
  return (
    <label
      htmlFor={value}
      className={`radio__label ${state === value ? 'selected' : ''}`}
      tabIndex={0}
    >
      <input
        type="radio"
        className="radio__radio"
        name={name}
        id={value}
        value={value}
        checked={state === value}
        onChange={(e) => func(e)}
      />
      {value}
    </label>
  );
};
export default Radio;
