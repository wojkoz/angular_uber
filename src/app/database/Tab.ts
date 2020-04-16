import {faAddressBook, faCamera, faCoffee} from '@fortawesome/free-solid-svg-icons';

export interface Tab {
  title: string,
  icon: any,
  description: string,
  active: boolean,
}

export const tabs = [
  {
    title: 'Tab 1',
    icon: faCoffee,
    description: 'opis',
    active: true
  },
  {
    title: 'Tab 2',
    icon: faAddressBook,
    description: 'opis',
    active: false
  },
  {
    title: 'Tab 3',
    icon: faCamera,
    description: 'opis',
    active: false
  }
];
