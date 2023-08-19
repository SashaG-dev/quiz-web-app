import './button.scss';

const Button = ({ func, title }) => {
  return (
    <button
      onClick={(e) => func(e)}
      className="button btn btn--blue"
      title={title}
    >
      {title}
    </button>
  );
};

export default Button;
