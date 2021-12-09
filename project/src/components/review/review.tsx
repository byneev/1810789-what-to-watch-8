import { CommentProp } from '../../types/comment-type';
import dayjs from 'dayjs';

export type ReviewProp = {
  review: CommentProp,
}

function Review({review}: ReviewProp):JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={dayjs(review.date).format('MM-DD-YYYY')}>{dayjs(review.date).format('MMMM D, YYYY')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default Review;
