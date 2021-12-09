import { CommentProp } from '../../types/comment-type';
import Review from '../review/review';

export type ReviewsListProp = {
  reviews:CommentProp[],
}

function ReviewsList({reviews}:ReviewsListProp): JSX.Element {
  return (
    <div className="film-card__reviews-col">
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </div>
  );
}

export default ReviewsList;
