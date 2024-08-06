import React, { memo } from 'react';
import { Box } from '@mui/system';
import classNames from 'classnames';
import Typography from '@mui/material/Typography';

function TransactionStatusTypes({data = [
  {
    label: "Confirmed Deposit",
    color: "green-500"
  },
  {
    label: "Confirmed Bonus Transfer",
    color: "amber-500"
  },
  {
    label: "Canceled Transaction",
    color: "gray-500"
  },
  {
    label: "Confirmed Withdraw",
    color: "red-500"
  },
  {
    label: "Manuel Transaction",
    color: "blue-500"
  }
]}) {

  return (
    <Box className={"flex flex-col md:flex-row gap-2 py-4"}>
      {data.map((item, key) => (
        <Box className={classNames("flex gap-2 items-center px-3")} key={key}>
          <div
            className={`bg-${item?.color} p-1.5 rounded-full`}
          />
          <Typography className={"flex-1"} variant={"body1"}>{item?.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default memo(TransactionStatusTypes);
