import TutorialModal from '../../../components/Modals/TutorialModal';

const NoteTutorial = ({ func }) => {
  return (
    <TutorialModal
      directions="Scroll to the bottom and click 'Hide Answers' to cover all answers. Clicking an individual answer will reveal it. Show all answers with the 'Show Answers' button!"
      func={func}
    />
  );
};
export default NoteTutorial;
