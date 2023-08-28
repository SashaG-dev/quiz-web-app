const TutorialModal = ({ directions, func }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal modal--tutorial" role="modal">
        <h1 className="modal__heading heading-secondary">Ready to study?</h1>
        <p className="modal__subheading">{directions}</p>

        <button
          type="button"
          className="btn btn--blue modal__btn"
          aria-label="close modal"
          onClick={func}
        >
          Thanks! Let's go.
        </button>
      </div>
    </>
  );
};
export default TutorialModal;
