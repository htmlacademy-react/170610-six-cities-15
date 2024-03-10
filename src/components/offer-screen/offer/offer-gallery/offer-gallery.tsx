import { MAX_IMAGES } from '../../../../const.ts';

type OfferGalleryProps = {
  images: string[];
};

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <section className="offer__gallery-container container">
      <div className="offer__gallery">
        {images?.slice(0, MAX_IMAGES).map((pic) => (
          <div className="offer__image-wrapper" key={pic}>
            <img className="offer__image" src={pic} alt="Photo studio" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfferGallery;
