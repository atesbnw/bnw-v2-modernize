import { uniqueId } from 'lodash';

export const casinoOverview = [
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
        name: 'Total',
        values: [
          '485,73₺',
          '425,73₺',
          '885,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Earnings',
        values: [
          '485,73₺',
          '425,73₺',
          '981,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'GGR Bets',
        values: [
          '185,73₺',
          '225,73₺',
          '385,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Profitability',
        values: [
          '65,73₺',
          '15,73₺',
          '80,83₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Bet Played',
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
