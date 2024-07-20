import React, { memo, useState, useCallback, useEffect, Fragment, useMemo } from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import { t } from 'i18next';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

function TimeTabs({topElement, children, onChange, gridSize, justify = "end" || "between" || "start"}) {
  const [timeRange, setTimeRange] = useState(0);
  const [time, setTime] = useState([dayjs(), dayjs().add(7,"days")]);
  const [open, setOpen] = useState(false);
  const shortcutsItems = useMemo(() => [
    {
      label: t("Dashboard.dateRange.yesterday"),
      getValue: () => {
        const today = dayjs().subtract(1,"day");
        return [today.startOf('day'), today.endOf('day')];
      },
    },
    {
      label: t("Dashboard.dateRange.today"),
      getValue: () => {
        const today = dayjs();
        return [today.startOf('day'), today.endOf('day')];
      },
    },
    {
      label: t("Dashboard.dateRange.thisWeek"),
      getValue: () => {
        const today = dayjs();
        return [today.startOf('week'), today.endOf('week')];
      },
    },
    {
      label: t("Dashboard.dateRange.last7Day"),
      getValue: () => {
        const today = dayjs();
        return [today.subtract(7, 'day'), today];
      },
    },
    {
      label: t("Dashboard.dateRange.thisMonth"),
      getValue: () => {
        const today = dayjs();
        return [today.startOf('month'), today.endOf('month')];
      },
    },
    {
      label: t("Dashboard.dateRange.lastMonth"),
      getValue: () => {
        const today = dayjs().startOf("month").subtract(1, "days");
        const startOfNextMonth = today.startOf("month");
        return [startOfNextMonth, startOfNextMonth.endOf('month')];
      },
    },
    // { label: 'Reset', getValue: () => [null, null] },
  ], []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeRange = useCallback((v) => {
    switch (v){
      case 0: setTime([dayjs().startOf("day"), dayjs().endOf("day")]); break;
      case 1: setTime([dayjs().subtract(1,"day").startOf("day"), dayjs().subtract(1,"day").endOf("day")]); break;
      case 2: setTime([dayjs().subtract(7,"day").startOf("day"), dayjs().endOf("day")]); break;
      case 3: setTime([dayjs().subtract(15,"day").startOf("day"), dayjs().endOf("day")]); break;
      case 4: setTime([dayjs().subtract(30,"day").startOf("day"), dayjs().endOf("day")]); break;
      case 5: setTime([dayjs().startOf("month"), dayjs().endOf("day")]); break;

      default: break;
    }
    setTimeRange(v);
  }, []);

  useEffect(() => {
    if(onChange && typeof onChange === "function") {
      onChange(time)
    }
  }, [time]);

  return (
    <Fragment>
      <Box style={{width:240}} >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"}>
          <DemoContainer
            sx={{margin:0, padding:0}}
            components={[
              'DateRangePicker',
            ]}>
            <DemoItem
              label={
                <></>
              }
              component="DateRangePicker"
            >
              <DateRangePicker
                defaultValue={time}
                localeText={{
                  start: '',
                  end: '',
                }}
                onChange={(value) => setTime(value)}
                slots={{field: SingleInputDateRangeField}}
                slotProps={{
                  shortcuts: {
                    items: shortcutsItems,
                  },
                  actionBar: {actions: []}
                }}
                format={"DD/MM/YYYY"}
                calendars={2}
              />
            </DemoItem>
          </DemoContainer>

        </LocalizationProvider>
      </Box>
      {children && children(time)}
    </Fragment>
  );
}

export default memo(TimeTabs);
