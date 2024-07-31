import React, { memo, useState, useCallback, useEffect, Fragment, useMemo } from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import { t } from 'i18next';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

function TimeTabs({children, onChange, value, topElement, justify = "end", gridSize = "auto"}) {
  const [time, setTime] = useState([dayjs(),dayjs()]);
  // const [time, setTime] = useState();
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


  useEffect(() => {
    if(onChange && typeof onChange === "function") {
      onChange(time)
    }
  }, [time]);

  useEffect(() => {
    if(value && value!==time) setTime(value)
  }, [value]);

  return (
    <Fragment>
      <Box className={"flex flex-col md:flex-row"}>
        {(justify==="end" && justify!=="full") && (
          <Box className={"md:flex-1"}>
            {topElement && topElement}
          </Box>
        ) || (
            topElement && topElement
        )}
        <Box style={{width: justify==="full" ? 100 + "%" : 270}}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en"}>
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
      </Box>
      {children && children(time)}
    </Fragment>
  );
}

export default memo(TimeTabs);
