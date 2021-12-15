import { MouseEvent } from 'react';

export type MoreButtonProp = {
  onButtonClick: (evt: MouseEvent) => void;
}

function MoreButton({onButtonClick} : MoreButtonProp):JSX.Element {
  return (
    <div className="catalog__more">
      <button onClick={onButtonClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default MoreButton;
