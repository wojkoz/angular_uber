import {faAddressBook, faCamera, faCoffee} from '@fortawesome/free-solid-svg-icons';

export interface Tab {
  title: string,
  icon: any,
  description: string,
}

export const tabs = [
  {
    title: 'Tab 1',
    icon: faCoffee,
    description: 'opis'
  },
  {
    title: 'Tab 2',
    icon: faAddressBook,
    description: 'opis'
  },
  {
    title: 'Tab 3',
    icon: faCamera,
    description: 'opis'
  }
];
