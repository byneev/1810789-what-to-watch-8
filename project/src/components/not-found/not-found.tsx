import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';

function NotFound():JSX.Element {
  return (
    <div className='not-found__container'>
      <h2 className='not-found__title'>Page not found</h2>
      <Link className='not-found__anchor' to={AppRoute.MAIN}>
        Home
      </Link>
    </div>
  );
}

export default NotFound;
