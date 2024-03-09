import { useState } from 'react';
import { Sorting } from '../../const';

type SortingOptionsProps = {
  handleSort: (sortOption: Sorting) => void;
  sortingOptionsVisible: boolean;
  setSortingOptionsVisible: (visible: boolean) => void;
};

function SortingOptions({
  handleSort,
  sortingOptionsVisible,
  setSortingOptionsVisible,
}: SortingOptionsProps): JSX.Element {
  const [selectedSortOption, setSelectedSortOption] = useState<Sorting>(
    Sorting.Popular
  );

  const sortingOptionList = Array.from(Object.values(Sorting));

  const handleOptionClick = (option: Sorting) => {
    setSelectedSortOption(option);
    handleSort(option);
    setSortingOptionsVisible(false);
  };

  const isVisible = sortingOptionsVisible ? '--opened' : '--closed';

  return (
    <ul
      className={`places__options places__options--custom places__options${isVisible}`}
    >
      {sortingOptionList.map((option) => (
        <li
          key={option}
          className={`places__option ${
            selectedSortOption !== option ? '' : 'places__option--active'
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
}

export default SortingOptions;
