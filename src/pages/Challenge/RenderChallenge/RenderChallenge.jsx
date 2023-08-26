import { Link } from 'react-router-dom';
import './render.scss';

const RenderChallenge = (props) => {
  const {
    details: { heading },
    main: { inspiration, scenario, techStack, bonus },
  } = props;

  return (
    <article className="render">
      <h1 className="heading-secondary render__heading mb-md">
        The Challenge: {heading}
      </h1>

      <section className="scenario" aria-label="challenge scenario">
        <h2 className="heading-tertiary scenario__heading mb-sm">
          Alright, here's the situation...
        </h2>
        <p className="scenario__text">{scenario}</p>
      </section>

      <section className="tech" aria-label="required tech and features">
        <h2 className="heading-tertiary tech__heading mb-sm">
          Required Tech and Features:
        </h2>
        <ol className="tech__list render-list">
          {techStack.map((tech, i) => (
            <li key={tech || i} className="tech__list-item">
              {tech || "There aren't any! This one’s totally up to you."}
            </li>
          ))}
        </ol>
      </section>

      <section
        className="resources"
        aria-label="challenge resources and inspiration"
      >
        <h2 className="heading-tertiary resources__heading mb-md">
          Need some inspiration? Here's some additional resources.
        </h2>
        <ul className="resources__list render-list">
          {inspiration.map((insp) => {
            return (
              <li key={insp.title}>
                <span>&rarr;</span>
                <Link
                  to={insp.link}
                  title={`${insp.title} (opens new tab)`}
                  target="_blank"
                >
                  {insp.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bonus" aria-label="bonus features and challenges">
        <h2 className="heading__tertiary bonus__heading">All finished?</h2>
        <h3 className="bonus__subheading mb-md">
          Here's a few more ideas to take your project to the next level!
        </h3>
        <ol className="bonus__list render-list">
          {bonus.map((b) => {
            return (
              <li key={b} className="bonus__list-item">
                {b}
              </li>
            );
          })}
        </ol>
      </section>
    </article>
  );
};
export default RenderChallenge;
