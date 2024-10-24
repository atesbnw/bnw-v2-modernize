import { uniqueId } from 'lodash';

export const virtualGamesOverview = [
  {
    id: uniqueId(),
    columns: [
      '',
      'Pre Match',
      'Live',
      'Total',
    ],
    rows: [
      {
        id: uniqueId(),
        name: 'Tombala',
        values: [
          '485,73₺',
          '425,73₺',
          '885,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'BetOnGames',
        values: [
          '485,73₺',
          '425,73₺',
          '981,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: '3D Futbol',
        values: [
          '185,73₺',
          '225,73₺',
          '385,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Zeplin',
        values: [
          '65,73₺',
          '15,73₺',
          '80,83₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Bet',
        values: [
          '65,73₺',
          '15,73₺',
          '80,83₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Players',
        values: [
          '1500',
          '500',
          '2000',
        ],
      },
    ],
  },
];
