const ERROR_MESSAGE = {
  DEFAULT: 'Error',
  REQUIRED: 'Field is required',
  SELECT: {
    REQUIRED: 'Select some option',
  },
  TITLE: {
    REQUIRED: 'Enter title',
    MESSAGE: 'Letters, numbers and dash only are allowed',
    MIN: 'Min length is 3 symbols',
    MAX: 'Max length is 20 symbols',
  },
  DETAILS: {
    REQUIRED: 'Enter details',
    MESSAGE: 'Letters, numbers and dash only are allowed',
    MIN: 'Min length is 10 symbols',
    MAX: 'Max length is 200 symbols',
  },
  DATE: {
    REQUIRED: 'Enter created date',
    MESSAGE: 'Entered date is in the future!',
  },
  FILE: {
    REQUIRED: 'Attach the image file',
    MESSAGE: 'Image file *jpeg or *png only accepted',
  },
  PRICE: {
    REQUIRED: 'Enter correct price',
    MESSAGE: 'Only numers',
  },
  AVAIL: {
    REQUIRED: 'Product should be avail',
  },
};

const TYPES = [
  'Oil on canvas',
  'Acrylic on canvas',
  'Watercolor',
  'Oil on cardboard',
  'Acrylic on cardboard',
];

const REGEX_ANY = /^.*$/;

const REGEX_NAME =
  /^(?:[A-ZА-ЯЁ][a-zа-яё]{2,}\s){0,2}[A-ZА-ЯЁ][a-zа-яё]{2,}(?:\s[A-ZА-ЯЁ][a-zа-яё]{2,})?$/;

const REGEX_PRICE = /^[0-9]*[.,]?[0-9]+$/;

export { ERROR_MESSAGE, TYPES, REGEX_ANY, REGEX_NAME, REGEX_PRICE };
