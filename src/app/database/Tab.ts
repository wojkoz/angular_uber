import {faCar, faDollarSign, faRoute} from '@fortawesome/free-solid-svg-icons';


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
    icon: faRoute,
    description: 'Wybierz miejsce docelowe oraz miejsce odbioru',
    active: true
  },
  {
    id: 1,
    title: 'O nas',
    icon: faDollarSign,
    description: '',
    active: true
  },
  {
    id: 1,
    title: 'Ostanie kursy',
    icon: faCar,
    description: '',
    active: true
  }
];
