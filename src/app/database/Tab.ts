import {faCar, faDollarSign, faSuitcaseRolling} from '@fortawesome/free-solid-svg-icons';


export interface Tab {
  title: string,
  icon: any,
  description: string,
  active: boolean,
  id: number
}
/*
id:
  0 - komponent z obliczeniami do przejazdu
  1 - komponent z wysietlaniem opisu i przekierowaniem na podstrone

 */
export const tabs = [
  {
    id: 0,
    title: 'Przejazdy',
    icon: faCar,
    description: 'Wybierz miejsce docelowe oraz miejsce odbioru',
    active: true
  },
  {
    id: 1,
    title: 'Przychody',
    icon: faDollarSign,
    description: 'Zostań kierowcą i zacznij zarabiać',
    active: false
  },
  {
    id: 1,
    title: 'Dla firm',
    icon: faSuitcaseRolling,
    description: 'Zapewnij przejazdy swoim pracownikom',
    active: false
  }
];
