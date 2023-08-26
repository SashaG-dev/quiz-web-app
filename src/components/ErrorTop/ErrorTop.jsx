import './error-top.scss';

const ErrorTop = ({ text = 'There was an error!' }) => {
  return (
    <div className="error-top" role="alert" aria-modal="modal">
      <p className="error-top__text">{text}</p>
    </div>
  );
};
export default ErrorTop;
