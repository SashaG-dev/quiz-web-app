import './note.scss';

const Note = ({ answer, id, question, func, state }) => {
  const toggleHide = () => (state ? 'hide' : '');

  return (
    <div className="note">
      <p className="note__question">
        {id}. {question}
      </p>
      <p
        className={`note__answer ${toggleHide()}`}
        tabIndex={0}
        onClick={(e) => func(e, id)}
        title={state ? 'Reveal answer' : ''}
        role="button"
      >
        {answer}
      </p>
    </div>
  );
};
export default Note;
