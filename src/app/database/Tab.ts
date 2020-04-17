import {faCar, faDollarSign, faSuitcaseRolling} from '@fortawesome/free-solid-svg-icons';


export interface Tab {
  title: string,
  icon: any,
  description: string,
  active: boolean,
}

export const tabs = [
  {
    title: 'Przejazdy',
    icon: faCar,
    description: 'Wybierz miejsce docelowe oraz miejsce odbioru',
    active: true
  },
  {
    title: 'Przychody',
    icon: faDollarSign,
    description: 'Zostań kierowcą i zacznij zarabiać',
    active: false
  },
  {
    title: 'Dla firm',
    icon: faSuitcaseRolling,
    description: 'Zapewnij przejazdy swoim pracownikom',
    active: false
  }
];
