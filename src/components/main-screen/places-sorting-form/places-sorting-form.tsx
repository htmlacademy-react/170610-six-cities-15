import { memo } from 'react';
import { Sorting } from '../../../const.ts';
import SortingOptions from '../sorting-options/sorting-options.tsx';

type PlacesSortingFormProps = {
  handleSortOptionClick: () => void;
  sortOption: string;
  handleSort: (sortOption: Sorting) => void;
  sortingOptionsVisible: boolean;
  setSortingOptionsVisible: (visible: boolean) => void;
};

function PlacesSortingForm({
  handleSortOptionClick,
  sortOption,
  handleSort,
  sortingOptionsVisible,
  setSortingOptionsVisible,
}: PlacesSortingFormProps): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortOptionClick}
      >
        {sortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortingOptions
        handleSort={handleSort}
        sortingOptionsVisible={sortingOptionsVisible}
        setSortingOptionsVisible={setSortingOptionsVisible}
      />
    </form>
  );
}

const MemoizedPlacesSortingForm = memo(PlacesSortingForm);
export default MemoizedPlacesSortingForm;
