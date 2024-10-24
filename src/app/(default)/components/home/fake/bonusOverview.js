import { uniqueId } from 'lodash';

export const bonusOverview = [
  {
    id: uniqueId(),
    columns: [
      'Type',
      'Category',
      'Earn',
      'Players',
      'Converted Bonus',
    ],
    rows: [
      {
        id: uniqueId(),
        name: 'Manual',
        values: [
          '',
          '485,73₺',
          '58',
          '885,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Free Spin',
        values: [
          '',
          '316,66₺',
          '2',
          '981,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Free Bet',
        values: [
          'Casino',
          '100,05₺',
          '3',
          '385,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Deposit',
        values: [
          '',
          '68,51₺',
          '7',
          '80,83₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'TOTAL',
        highlight: true,
        values: [
          '',
          '583,02₺',
          '63',
          '45,21₺',
        ],
      }
    ],
  },
];
