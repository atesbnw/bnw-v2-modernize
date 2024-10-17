import React, { memo, useMemo } from 'react';
import { Box } from '@mui/system';
import classNames from 'classnames';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

function TransactionStatusTypes() {

  const theme = useTheme();
  const data = useMemo(() => ([
    {
      label: "Confirmed Deposit",
      color: theme?.palette?.success.main
    },
    {
      label: "Confirmed Bonus Transfer",
      color: theme?.palette?.warning.main
    },
    {
      label: "Canceled Transaction",
      color: theme?.palette?.grey?.[400]
    },
    {
      label: "Confirmed Withdraw",
      color: theme?.palette?.error?.dark
    },
    {
      label: "Manual Transaction",
      color: theme?.palette?.info.main
    }
  ]), []);

  return (
    <Box className={"flex flex-col md:flex-row gap-2 py-4"}>
      {data.map((item, key) => (
        <Box className={classNames("flex gap-2 items-center px-3")} key={key}>
          <div
            className={`p-1.5 rounded-full`}
            style={{
              background: item?.color
            }}
          />
          <Typography className={"flex-1"} variant={"body1"}>{item?.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default memo(TransactionStatusTypes);
