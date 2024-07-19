import React, { memo, useState, useCallback, useEffect, Fragment, useMemo } from 'react';
import dayjs from 'dayjs';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { t } from 'i18next';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

function TimeTabs({topElement, children, onChange, justify = "end" || "between" || "start"}) {
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
      <Grid container spacing={2} alignItems="center">
        {topElement && topElement}
        {justify==="end" && <Grid sx={{ flex: 1 }} />}
        {/*<Grid item>*/}
        {/*  <Button variant={timeRange===0 ? "contained" : "outlined"} onClick={() => changeRange(0)} color="primary">Bugün</Button>*/}
        {/*</Grid>*/}
        {/*<Grid item>*/}
        {/*  <Button variant={timeRange===1 ? "contained" : "outlined"} onClick={() => changeRange(1)}>Dün</Button>*/}
        {/*</Grid>*/}
        {/*<Grid item>*/}
        {/*  <Button variant={timeRange===2 ? "contained" : "outlined"} onClick={() => changeRange(2)}>Son 7 Gün</Button>*/}
        {/*</Grid>*/}
        {/*<Grid item>*/}
        {/*  <Button variant={timeRange===3 ? "contained" : "outlined"} onClick={() => changeRange(3)}>Son 15 Gün</Button>*/}
        {/*</Grid>*/}
        {/*<Grid item>*/}
        {/*  <Button variant={timeRange===4 ? "contained" : "outlined"} onClick={() => changeRange(4)}>Son 30 Gün</Button>*/}
        {/*</Grid>*/}
        {/*<Grid item>*/}
        {/*  <Button variant={timeRange===5 ? "contained" : "outlined"} onClick={() => changeRange(5)}>Bu Ay</Button>*/}
        {/*</Grid>*/}
        {justify==="between" && <Grid sx={{ flex: 1 }} />}
        <Grid item>
          {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
          {/*  {time?.[0] && time?.[1] ? `${dayjs(time?.[0]).format("DD.MM.YYYY")} - ${dayjs(time?.[1]).format("DD.MM.YYYY")}` : 'Tarih Seç'}*/}
          {/*</Button>*/}



          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"}>
            <DemoContainer components={[
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
                  format="DD/MM/YYYY"
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


        </Grid>
        {justify==="start" && <Grid sx={{ flex: 1 }} />}
        {/*<Dialog open={open} onClose={handleClose}>*/}
        {/*  <DialogTitle>{t("Dashboard.Financial Graph.Select Date Range")}</DialogTitle>*/}
        {/*  <DialogContent>*/}
        {/*    */}

        {/*  </DialogContent>*/}
        {/*  <DialogActions>*/}
        {/*    <Button onClick={handleClose} color="primary">İptal</Button>*/}
        {/*    <Button onClick={handleClose} color="primary">Tamam</Button>*/}
        {/*  </DialogActions>*/}
        {/*</Dialog>*/}
      </Grid>
      {children(time)}
    </Fragment>
  );
}

export default memo(TimeTabs);
