import './radio.scss';

const Radio = ({ name, value, func, state, title }) => {
  return (
    <label
      htmlFor={value}
      className={`radio__label--2 ${state === value ? 'selected' : ''}`}
      tabIndex={0}
      role="radio"
      aria-checked={state === value}
    >
      <input
        type="radio"
        className="radio__radio--2"
        name={name}
        id={value}
        value={value}
        checked={state === value}
        onChange={() => func()}
      />
      <span>&nbsp;</span>
      {title}
    </label>
  );
};
export default Radio;
