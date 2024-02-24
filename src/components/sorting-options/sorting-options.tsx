import { useState } from 'react';
import { sortingOptions } from '../../const';

interface SortingOptionsProps {
  handleSort: (sortOption: string) => void;
  setSortingOptionsVisible: (visible: boolean) => void;
}

function SortingOptions({
  handleSort,
  setSortingOptionsVisible,
}: SortingOptionsProps): JSX.Element {
  const [selectedSortOption, setSelectedSortOption] = useState<string>(
    sortingOptions.POPULAR
  );

  const handleOptionClick = (option: string) => {
    setSelectedSortOption(option);
    handleSort(option);
    setSortingOptionsVisible(false);
  };

  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li
        className={`places__option ${
          selectedSortOption === sortingOptions.POPULAR
            ? 'places__option--active'
            : ''
        }`}
        onClick={() => handleOptionClick(sortingOptions.POPULAR)}
      >
        {sortingOptions.POPULAR}
      </li>
      <li
        className={`places__option ${
          selectedSortOption === sortingOptions.PRICE_LOW_TO_HIGH
            ? 'places__option--active'
            : ''
        }`}
        onClick={() => handleOptionClick(sortingOptions.PRICE_LOW_TO_HIGH)}
      >
        {sortingOptions.PRICE_LOW_TO_HIGH}
      </li>
      <li
        className={`places__option ${
          selectedSortOption === sortingOptions.PRICE_HIGH_TO_LOW
            ? 'places__option--active'
            : ''
        }`}
        onClick={() => handleOptionClick(sortingOptions.PRICE_HIGH_TO_LOW)}
      >
        {sortingOptions.PRICE_HIGH_TO_LOW}
      </li>
      <li
        className={`places__option ${
          selectedSortOption === sortingOptions.TOP_RATED_FIRST
            ? 'places__option--active'
            : ''
        }`}
        onClick={() => handleOptionClick(sortingOptions.TOP_RATED_FIRST)}
      >
        {sortingOptions.TOP_RATED_FIRST}
      </li>
    </ul>
  );
}

export default SortingOptions;
