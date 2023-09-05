# Frontend Quizzes

## A web app dedicated to frontend developer terminology and studies.

![alt text][img]

[img]: https://github.com/SashaG-dev/quiz-web-app/blob/main/public/readme/homepage.png 'Image of the Frontend Quizzes homepage'

The Frontend Quizzes web app was created with React, React Router, Sass/SCSS, and Firebase. This web app was created to help developers study common JavaScript and JavaScript framework terminology, and build their frontend skills with fun challenges. Here's the major features:

1. A homepage with a functioning carousel and links to free and paid web development resources.
2. An 'All Quizzes' pages with links to individual quizzes (and their study sessions) that are fetched from a Firebase Firestore. These quizzes can also be filtered with a search params menu (located above the fetched quizzes).
3. Study sessions with the option to study with flashcards or 'click-to-reveal' notes. These study sessions also have:
   - A modal that gives a short tutorial on how to use each session.
   - If studying with flashcards, card color can be changed.
   - If studying with notes, there is an option to hide and reveal an answers.
4. Quizzes with the option to answer questions through multiple choice or typed inputs. Each quiz has a results page that displays total correct answers, and the right answer for any incorrect answers.
5. A 'Challenges' page with links to individual challenges. Each challenge contains:
   - A fictional situation or scenario that sets up the challenge.
   - A required tech stack for the challenge.
   - Links to resources and inspiration.
   - A 'Bonus' section with extra challenges.

## Visual Guides

### All Quizzes filtering

![alt text][gif-1]

[gif-1]: https://github.com/SashaG-dev/quiz-web-app/blob/main/public/readme/01-filtering.gif 'All Quizzes filtering functionality tutorial'

### Flashcard-style Studying

![alt text][gif-2]

[gif-2]: https://github.com/SashaG-dev/quiz-web-app/blob/main/public/readme/02-flashcards.gif 'Flashcard-style study session tutorial'

### Notes-style Studying

![alt text][gif-3]

[gif-3]: https://github.com/SashaG-dev/quiz-web-app/blob/main/public/readme/03-notes.gif 'Notes-style study session tutorial'

### Multiple Choice Quizzes

![alt text][gif-4]

[gif-4]: https://github.com/SashaG-dev/quiz-web-app/blob/main/public/readme/04-multiple-choice.gif 'Multiple-choice quiz tutorial'

### Typed Answer Quizzes

![alt text][gif-5]

[gif-5]: https://github.com/SashaG-dev/quiz-web-app/blob/main/public/readme/05-typed-answers.gif 'Typed answer quiz tutorial'

### Switching to Quizzes and Study Sessions

![alt text][gif-6]

[gif-6]: https://github.com/SashaG-dev/quiz-web-app/blob/main/public/readme/06-study-quiz.gif 'Switching between study sessions and quizzes tutorial'

### Challenges

![alt text][gif-7]

[gif-7]: https://github.com/SashaG-dev/quiz-web-app/blob/main/public/readme/07-challenges.gif 'User challenges page'

## User Instructions

1. Head to the [Frontend Quizzes website](https://frontend-quizzes-web-app.netlify.app). It's live!
2. Find quizzes either through a carousel link on the homepage or directly through the 'All Quizzes' page.
3. Filter through quizzes via the filter menu.
4. Select between 'Study Now' or 'Quiz Me' on a JavaScript subject that you want to learn.
   - For each study session, a modal tutorial will appear. This won't appear again after you close it out.
   - For each quiz session, if you try to exit the quiz before finishing, your progress won't be saved. A modal will pop up to warn you if you try to exit via the 'Go Back' button in the top left corner of each quiz.
5. If you're looking for coding challenges, head to the 'Challenges' page where you'll find all current challenges.

## Developer Instructions

1. Fork this repo and create a clone via git.

```bash

git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

```

2. Or download a zip of the repo via the Code button on Github

![alt text][img-2]

[img-2]: https://github.com/SashaG-dev/quiz-web-app/blob/main/public/readme/developer-instructions.png 'Developer instructions for cloning and downloading'

3. Open files in a directory where a git repo isn't currently initialized and install all dependencies, then run development

```bash

npm install
npm run dev

```

## Known Issues

- When a user drops connection and opens the challenges page, no challenges render to the page. An error needs to be rendered instead to tell users to check their connection.
- Focus trapping needs to be added to modals to avoid access to focusable elements that are hidden behind the modal when it's open.
- The option the view a study tutorial again should be added.
