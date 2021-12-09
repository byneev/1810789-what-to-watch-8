import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentReviews } from '../../store/actions';
import { getCurrentReviews } from '../../store/selectors';
import { getMockComments } from '../../utils/mock';
import ReviewsList from '../reviews-list/reviews-list';

function TabReviews(): JSX.Element {
  const reviews = useSelector(getCurrentReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentReviews(getMockComments()));
    return () => {
      dispatch(setCurrentReviews([]));
    };
  });

  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsList reviews={reviews.slice(0, +(reviews.length / 2).toFixed())} />
      <ReviewsList reviews={reviews.slice(+(reviews.length / 2).toFixed()) } />
    </div>
  );
}

export default TabReviews;
