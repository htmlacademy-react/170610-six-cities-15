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

  const sortingOptionList = Array.from(Object.values(sortingOptions));

  const handleOptionClick = (option: string) => {
    setSelectedSortOption(option);
    handleSort(option);
    setSortingOptionsVisible(false);
  };

  return (
    <ul className="places__options places__options--custom places__options--opened">
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
