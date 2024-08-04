import { StylesConfig } from 'react-select';

export const stylesSelect: StylesConfig<any> = {
  control: (styles) => ({ ...styles, backgroundColor: '#1a1b26', borderColor: '#373947', color: '#e2e5ff' }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused ? '#3b3e4c' : isSelected ? '#3b3e4c' : '#1a1b26',
    color: '#e2e5ff',
    ':active': {
      backgroundColor: '#32343f',
    },
  }),
  placeholder: (styles) => ({ ...styles, color: '#52556a' }),
  singleValue: (styles) => ({ ...styles, color: '#e2e5ff' }),
  input: (styles) => ({ ...styles, color: '#e2e5ff' }),
  noOptionsMessage: (styles) => ({ ...styles, backgroundColor: '#1a1b26', color: '#e2e5ff' }),
  menuList: (styles) => ({ ...styles, backgroundColor: '#1a1b26', color: '#e2e5ff' }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
};
