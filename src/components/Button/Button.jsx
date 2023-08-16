const Button = ({ func, title }) => {
  return (
    <button onClick={(e) => func(e)} className="btn btn--blue">
      {title}
    </button>
  );
};

export default Button;
