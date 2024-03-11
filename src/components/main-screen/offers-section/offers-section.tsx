import { Sorting, cityCoordinates } from '../../../const';
import { TOffer } from '../../../types/offer';
import { pluralize } from '../../../utils/common';
import Map from '../../common/map/map';
import OffersList from '../offers-list/offers-list';
import MemoizedPlacesSortingForm from '../places-sorting-form/places-sorting-form';

type OffersSectionProps = {
  activeCity: string;
  filteredOffers: TOffer[];
  hoveredOfferId: string | null | undefined;
  handleOfferHover: (offerId: string) => void;
  sortingOptionsVisible: boolean;
  handleSortOptionClick: () => void;
  handleSort: (sortOption: Sorting) => void;
  sortOption: string;
  setSortingOptionsVisible: (visible: boolean) => void;
};

function OffersSection({
  activeCity,
  filteredOffers,
  hoveredOfferId,
  handleOfferHover,
  sortingOptionsVisible,
  handleSortOptionClick,
  handleSort,
  sortOption,
  setSortingOptionsVisible,
}: OffersSectionProps): JSX.Element {
  const activeCityCoordinates = cityCoordinates.find(
    (city) => city.name.toLowerCase() === activeCity.toLowerCase()
  );

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {filteredOffers.length} place{pluralize(filteredOffers.length)} to
            stay in {activeCity}
          </b>
          <MemoizedPlacesSortingForm
            handleSortOptionClick={handleSortOptionClick}
            sortOption={sortOption}
            handleSort={handleSort}
            sortingOptionsVisible={sortingOptionsVisible}
            setSortingOptionsVisible={setSortingOptionsVisible}
          />
          <OffersList
            offers={filteredOffers}
            onOfferHover={handleOfferHover}
            className="cities__places-list places__list tabs__content"
          />
        </section>
        <div className="cities__right-section">
          {activeCityCoordinates && filteredOffers.length > 0 && (
            <Map
              city={activeCityCoordinates}
              activeOfferId={hoveredOfferId}
              offers={filteredOffers}
              page={'cities'}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default OffersSection;
