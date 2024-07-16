import { uniqueId } from 'lodash';

export const casinoOverview = [
  {
    id: uniqueId(),
    columns: [
      '',
      'Maç Öncesi',
      'Canlı',
      'Toplam',
    ],
    rows: [
      {
        id: uniqueId(),
        name: 'Ciro',
        values: [
          '485,73₺',
          '425,73₺',
          '885,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Kazançlar',
        values: [
          '485,73₺',
          '425,73₺',
          '981,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'GGR Bahisler',
        values: [
          '185,73₺',
          '225,73₺',
          '385,73₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Karlılık',
        values: [
          '65,73₺',
          '15,73₺',
          '80,83₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Oynama Bahis',
        values: [
          '65,73₺',
          '15,73₺',
          '80,83₺',
        ],
      },
      {
        id: uniqueId(),
        name: 'Oyuncu Sayısı',
        values: [
          '1500',
          '500',
          '2000',
        ],
      },
    ],
  },
];
