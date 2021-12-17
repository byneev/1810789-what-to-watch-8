import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuthorizeStatus, getUserBlock } from '../../store/selectors';
import { AppRoute, AuthType } from '../../utils/const';

function UserBlock():JSX.Element {
  const userBlock = useSelector(getUserBlock);
  const authorizeStatus = useSelector(getAuthorizeStatus);

  return (
    <ul className="user-block">
      {authorizeStatus === AuthType.AUTH ?
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={userBlock?.avatarUrl} alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.MAIN}>Sign out</Link>
          </li>
        </>:
        <Link className="user-block__link" to={AppRoute.SIGN_IN}>Sign in</Link>}
    </ul>
  );
}

export default UserBlock;
