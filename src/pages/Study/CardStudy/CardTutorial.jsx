import TutorialModal from '../../../components/Modals/TutorialModal';

const CardTutorial = ({ func }) => {
  return (
    <TutorialModal
      directions="Click the card or focus with Tab and press Enter to flip each card!
        The next and previous buttons will show you other cards in the set!"
      func={func}
    />
  );
};
export default CardTutorial;
