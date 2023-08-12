import { Link } from 'react-router-dom';
import { BsAsterisk } from 'react-icons/bs';
import resourcesData from './resourcesData';
import './resource-list.scss';

const ResourceList = () => {
  const allSources = resourcesData.map((data) => data);
  return (
    <section className="resources">
      <h2 className="resources__heading heading-secondary mb-sm">
        Need more study time?
      </h2>
      <p className="resources__text">
        Here's some great online resources to keep you going on your journey!
      </p>

      <ul className="resource-list mb-md">
        {allSources.map((source) => {
          const { name, link, paid } = source;
          return (
            <Link
              to={link}
              key={name}
              title={`Find out more about ${name} (opens new tab)`}
              target="_blank"
            >
              <li>
                {name} {paid && <BsAsterisk />}
              </li>
            </Link>
          );
        })}
      </ul>

      <div className="resources__key">
        <small>
          * This resource is either paid, or has both free and paid tiers. Make
          sure to check their link to get more details.
        </small>
      </div>
    </section>
  );
};
export default ResourceList;
