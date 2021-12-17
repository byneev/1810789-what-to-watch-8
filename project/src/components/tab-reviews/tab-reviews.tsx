import { useSelector } from 'react-redux';
import { getCurrentReviews } from '../../store/selectors';
import ReviewsList from '../reviews-list/reviews-list';

function TabReviews(): JSX.Element {
  const reviews = useSelector(getCurrentReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsList reviews={reviews.slice(0, +(reviews.length / 2).toFixed())} />
      <ReviewsList reviews={reviews.slice(+(reviews.length / 2).toFixed()) } />
    </div>
  );
}

export default TabReviews;
