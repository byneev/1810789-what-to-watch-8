
export type ReviewInputProp = {
  id: number,
}

function ReviewInput({id}:ReviewInputProp):JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${id}`} type="radio" name="rating" value={id} />
      <label className="rating__label" htmlFor={`star-${id}`}>
        Rating {id}
      </label>
    </>
  );
}

export default ReviewInput;
