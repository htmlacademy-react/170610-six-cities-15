import { v4 as uuidv4 } from 'uuid';

type OfferInsideProps = {
  goods: string[];
};

function OfferInside({ goods }: OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods?.map((good) => (
          <li className="offer__inside-item" key={uuidv4()}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
