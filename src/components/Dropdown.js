import { Dropdown as CarbonDropdown } from '@carbon/react';

export function Dropdown(props) {
  const items = [
    {
      id: 'option-0',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 'option-1',
      text: 'Option 1',
    },
    {
      id: 'option-2',
      text: 'Option 2',
    },
    {
      id: 'option-3',
      text: 'Option 3',
    },
    {
      id: 'option-4',
      text: 'Option 4',
    },
    {
      id: 'option-5',
      text: 'Option 5',
    },
  ];

  return (
    <CarbonDropdown
      id={props.id}
      titleText="Dropdown label"
      helperText="This is some helper text"
      label="Dropdown menu options"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
      className="dropdown-spacing"
    />
  );
}
