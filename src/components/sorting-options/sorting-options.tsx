import { useState } from 'react';
import { Sorting } from '../../const';

interface SortingOptionsProps {
  handleSort: (sortOption: string) => void;
  setSortingOptionsVisible: (visible: boolean) => void;
}

function SortingOptions({
  handleSort,
  setSortingOptionsVisible,
}: SortingOptionsProps): JSX.Element {
  const [selectedSortOption, setSelectedSortOption] = useState<string>(
    Sorting.Popular
  );

  const sortingOptionList = Array.from(Object.values(Sorting));

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
