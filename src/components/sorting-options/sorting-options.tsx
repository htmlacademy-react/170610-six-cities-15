import { useState } from 'react';
import { Sorting } from '../../const';

interface SortingOptionsProps {
  handleSort: (sortOption: string) => void;
  sortingOptionsVisible: boolean;
  setSortingOptionsVisible: (visible: boolean) => void;
}

function SortingOptions({
  handleSort,
  sortingOptionsVisible,
  setSortingOptionsVisible,
}: SortingOptionsProps): JSX.Element {
  const [selectedSortOption, setSelectedSortOption] = useState<string>(
    Sorting.Popular
  );

  const sortingOptionList = Array.from(Object.values(Sorting));

  const handleOptionClick = (option: string) => {
    setSelectedSortOption(option);
    handleSort(option);
    setSortingOptionsVisible(!sortingOptionsVisible);
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
            selectedSortOption === option ? 'places__option--active' : ''
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
