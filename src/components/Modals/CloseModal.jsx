import { useEffect, useRef } from 'react';
import { BsXLg } from 'react-icons/bs';
import './modal.scss';

const CloseModal = (props) => {
  const { text, subheading, func, closeModal, btnText } = props;
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.focus();
  });

  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal">
        <button
          className="modal__close btn"
          title="Close modal"
          onClick={closeModal}
          ref={modalRef}
        >
          <BsXLg />
        </button>
        <h2 className="heading-secondary modal__heading">{text}</h2>
        {subheading && <p className="modal__subheading">{subheading}</p>}

        <div className="modal__btn-container">
          <button
            className="btn btn--blue button"
            onClick={func}
            title={btnText}
          >
            {btnText}
          </button>
          <button
            className="btn button"
            onClick={closeModal}
            title="Close modal"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default CloseModal;
