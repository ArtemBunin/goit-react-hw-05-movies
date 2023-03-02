import PropTypes from 'prop-types';
import { useLocation,Link } from 'react-router-dom';

export const TrendList = ({ trends }) => {
  const location = useLocation();
  return (
    <ul>
      {trends.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>{title}</Link>
         
        </li>
      ))}
    </ul>
  );
};
TrendList.propTypes = {
    trends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };