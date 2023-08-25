import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStudyContext } from '../StudyLayout';
import Note from './Note/Note';
import './note-layout.scss';

const NoteLayout = () => {
  const [hideText, setHideText] = useState(true);

  useEffect(() => {
    const checkNoteAnswers = (e) => {
      if (e.target.classList.contains('note__answer')) {
        const answers = Array.from(document.querySelectorAll('.note__answer'));
        answers.every((a) => !a.classList.contains('hide')) &&
          setHideText(false);
      }
    };

    document.addEventListener('click', checkNoteAnswers);

    return () => {
      document.removeEventListener('click', checkNoteAnswers);
    };
  }, []);

  const {
    questions,
    details: { link, title },
  } = useStudyContext();

  const handleClick = (e, id) => {
    questions.map((question) => {
      if (question.id === id) {
        e.target.classList.remove('hide');
      }
    });
  };

  return (
    <div className="note-layout">
      <div className="note-layout__container">
        {questions.map((question) => {
          return (
            <Note
              key={question.id}
              {...question}
              func={handleClick}
              state={hideText}
            />
          );
        })}
      </div>

      <div className="note-layout__buttons-container">
        <button
          className="button btn"
          title={`${hideText ? 'Show all answers' : 'Hide all answers'}`}
          onClick={() => setHideText((prev) => !prev)}
        >
          {`${hideText ? 'Show answers' : 'Hide answers'}`}
        </button>

        <Link
          to={`/quiz/${link}`}
          title={`Take ${title} quiz`}
          className="button btn btn--blue note-layout__btn"
        >
          Take Quiz
        </Link>
      </div>
    </div>
  );
};
export default NoteLayout;
