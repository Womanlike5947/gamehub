import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

// #region Interface
interface ISortSelector {
  selectedSortOrder: string | null;
  onSelectedSortOrder: (order: string) => void;
}

interface ISort {
  value: string;
  label: string;
}
// #endregion

const SortSelector = ({
  selectedSortOrder,
  onSelectedSortOrder,
}: ISortSelector) => {
  // #region Variable
  const sortOrders: ISort[] = [
    {
      value: '',
      label: 'Relevance',
    },
    {
      value: '-added',
      label: 'Date added',
    },
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: '-released',
      label: 'Release date',
    },
    {
      value: '-metacritic',
      label: 'Popularity',
    },
    {
      value: '-rating',
      label: 'Average rating',
    },
  ];
  // #endregion

  // #region Variable
  const currentSortOrder = sortOrders.find(
    (order) => order.label === selectedSortOrder
  );
  // #endregion

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectedSortOrder(order.label)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
