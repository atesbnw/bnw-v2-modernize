"use client";
import { useMediaQuery, useTheme } from '@mui/material';


export const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

export const useGridItemsPerPage = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  if (isXs) return 2;
  if (isSm) return 3;
  if (isMdUp) return 4;
  return 1;
};
