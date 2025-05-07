"use client";
import React, {memo, useState, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import { useFormik } from 'formik';
import {Grid, Card, Button, MenuItem, FormHelperText, InputAdornment, RadioGroup} from '@mui/material';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import Stack from "@mui/material/Stack";
import TitleBar from "@/app/components/TitleBar";
import CustomOutlinedInput from "@/app/components/forms/theme-elements/CustomOutlinedInput";
import { validationSchema } from './validation';
import ParentCard from '@/app/components/shared/ParentCard';
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomSwitch from "@/app/components/forms/theme-elements/CustomSwitch";
import CustomRadio from "@/app/components/forms/theme-elements/CustomRadio";
import DataTable from "@/app/components/shared/DataTable";
import Box from "@mui/material/Box";
import {uniqueId} from "lodash";
import {faker} from "@faker-js/faker";

function Page() {
  const [isReadOnly, setIsReadOnly] = useState(false);
  const toggleReadOnly = () => setIsReadOnly(!isReadOnly);

  const [data, setData] = useState({
    page: 1,
    pageSize: 10,
    totalData: 10,
    totalPage: 1,
    columns: [],
    rows: [],
  });

  useEffect(() => {
    const columns = [
      {
        field: 'logo',
        headerName: t('pages.user-management.user_management_settings.Logo'),
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            <img src={value} className={"w-20 h-20 rounded bg-white object-contain"} alt={"provider"} />
            {/*<Typography className={"flex-1"} variant={"body1"}>{value}</Typography>*/}
            {/*<NewManuelTransactionAddWithID id={value} />*/}
          </Box>
        )
        // width: 200
      },
      {
        field: 'methodID',
        headerName: t('pages.user-management.user_management_settings.Method ID'),
        // width: 200
      },
      {
        field: 'methodName',
        headerName: t('pages.user-management.user_management_settings.Method Name'),
        // width: 200
      },
      {
        field: 'category',
        headerName: t('pages.user-management.user_management_settings.Category'),
        flex:1,
        // width: 200
      },
      {
        field: 'subCategory',
        headerName: t('pages.user-management.user_management_settings.Sub Category'),
        flex:1,
        // width: 200
      },
      {
        field: 'status',
        headerName: t('pages.user-management.user_management_settings.Status'),
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            <CustomSwitch
              disabled={isReadOnly}
              // onChange={() => {}}
              defaultChecked={value}
            />
          </Box>
        )
        // width: 200
      },

    ];

    const rows = Array.from(Array(10)).map(() => ({
      id: uniqueId(),
      logo: faker.image.avatar(), // or you can use any placeholder image URL
      methodID: faker.datatype.number({ min: 1, max: 100 }).toString(),
      methodName: faker.helpers.arrayElement(['Papara', 'MaxiPapara', 'Banka Havale']),
      category: faker.helpers.arrayElement(['Papara']),
      subCategory: faker.helpers.arrayElement(['Papara Key']),
      status: faker.datatype.boolean(),
    }));

    setData((prev) => ({
      ...prev,
      columns: columns,
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1)),
    }));
  }, [isReadOnly]);


  const formik = useFormik({
    initialValues: {
      maxSingleDeposit: '',
      maxDailyDeposit: '',
      maxWeeklyDeposit: '',
      maxMonthlyDeposit: '',
      maxYearlyDeposit: '',
      blockDepositMethods: 'No',
      maxSingleWithdraw: '',
      maxDailyWithdraw: '',
      maxWeeklyWithdraw: '',
      maxMonthlyWithdraw: '',
      maxYearlyWithdraw: '',
      blockWithdrawMethods: 'No'
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <Box className={"flex flex-col gap-4"}>
        <Stack direction={'row'} justifyContent={'center'}>
          <TitleBar
            title={t('menu.Users.Settings Menu.Finance Limitations')}
          />

        </Stack>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item>
              <ParentCard title={t('pages.user-management.user_management_settings.Deposit / Withdraw Limitation')}>
                <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={0}>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel sx={{mt: 0}} htmlFor="maxSingleDeposit">{t('pages.user-management.user_management_settings.Max Single Deposit')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxSingleDeposit"
                      name="maxSingleDeposit"
                      type="number"
                      fullWidth
                      value={formik.values.maxSingleDeposit}
                      onChange={formik.handleChange}
                      readOnly={isReadOnly}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel sx={{mt: 0}} htmlFor="maxDailyDeposit">{t('pages.user-management.user_management_settings.Max Daily Deposit')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxDailyDeposit"
                      name="maxDailyDeposit"
                      type="number"
                      fullWidth
                      value={formik.values.maxDailyDeposit}
                      onChange={formik.handleChange}
                      readOnly={isReadOnly}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel sx={{mt: 0}} htmlFor="maxWeeklyDeposit">{t('pages.user-management.user_management_settings.Max Weekly Deposit')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxWeeklyDeposit"
                      name="maxWeeklyDeposit"
                      type="number"
                      fullWidth
                      value={formik.values.maxWeeklyDeposit}
                      onChange={formik.handleChange}
                      readOnly={isReadOnly}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel sx={{mt: 0}} htmlFor="maxMonthlyDeposit">{t('pages.user-management.user_management_settings.Max Monthly Deposit')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxMonthlyDeposit"
                      name="maxMonthlyDeposit"
                      type="number"
                      fullWidth
                      value={formik.values.maxMonthlyDeposit}
                      onChange={formik.handleChange}
                      readOnly={isReadOnly}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel sx={{mt: 0}} htmlFor="maxYearlyDeposit">{t('pages.user-management.user_management_settings.Max Yearly Deposit')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxYearlyDeposit"
                      name="maxYearlyDeposit"
                      type="number"
                      fullWidth
                      value={formik.values.maxYearlyDeposit}
                      onChange={formik.handleChange}
                      readOnly={isReadOnly}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel sx={{mt: 0}} htmlFor="blockDepositMethods">{t('pages.user-management.user_management_settings.Block Deposit Methods')}</CustomFormLabel>
                    <CustomSelect
                      id="blockDepositMethods"
                      name="blockDepositMethods"
                      fullWidth
                      variant="outlined"
                      readOnly={isReadOnly}
                      value={formik.values.blockDepositMethods}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value="No">No</MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                    </CustomSelect>
                  </Grid>
                  <Grid item xs={12} mt={5} mb={1}>
                    <Divider/>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel htmlFor="maxSingleWithdraw">{t('pages.user-management.user_management_settings.Max Single Withdraw')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxSingleWithdraw"
                      name="maxSingleWithdraw"
                      type="number"
                      fullWidth
                      value={formik.values.maxSingleWithdraw}
                      onChange={formik.handleChange}
                      readOnly={isReadOnly}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel htmlFor="maxDailyWithdraw">{t('pages.user-management.user_management_settings.Max Daily Withdraw')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxDailyWithdraw"
                      name="maxDailyWithdraw"
                      type="number"
                      fullWidth
                      value={formik.values.maxDailyWithdraw}
                      onChange={formik.handleChange}
                      readOnly={isReadOnly}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel htmlFor="maxWeeklyWithdraw">{t('pages.user-management.user_management_settings.Max Weekly Withdraw')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxWeeklyWithdraw"
                      name="maxWeeklyWithdraw"
                      type="number"
                      fullWidth
                      value={formik.values.maxWeeklyWithdraw}
                      onChange={formik.handleChange}
                      readOnly={isReadOnly}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel htmlFor="maxMonthlyWithdraw">{t('pages.user-management.user_management_settings.Max Monthly Withdraw')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxMonthlyWithdraw"
                      name="maxMonthlyWithdraw"
                      type="number"
                      fullWidth
                      value={formik.values.maxMonthlyWithdraw}
                      onChange={formik.handleChange}
                      readOnly={isReadOnly}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel htmlFor="maxYearlyWithdraw">{t('pages.user-management.user_management_settings.Max Yearly Withdraw')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxYearlyWithdraw"
                      name="maxYearlyWithdraw"
                      type="number"
                      fullWidth
                      value={formik.values.maxYearlyWithdraw}
                      onChange={formik.handleChange}
                      readOnly={isReadOnly}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={2}>
                    <CustomFormLabel htmlFor="blockWithdrawMethods">{t('pages.user-management.user_management_settings.Block Withdraw Methods')}</CustomFormLabel>
                    <CustomSelect
                      id="blockWithdrawMethods"
                      name="blockWithdrawMethods"
                      fullWidth
                      variant="outlined"
                      readOnly={isReadOnly}
                      value={formik.values.blockWithdrawMethods}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value="No">No</MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                    </CustomSelect>
                  </Grid>
                </Grid>
              </ParentCard>
            </Grid>
            <Grid item xs>
              <ParentCard title={t('pages.user-management.user_management_settings.Payment Method Access')}>
                <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={0}>
                  <Grid item xs={12} sm={12} lg={6}>
                    <RadioGroup row aria-label="paymentMethodFilter" name="paymentMethodFilter" defaultValue="All" >
                      <FormControlLabel value="All" control={<CustomRadio />} label={t('i.All')} />
                      <FormControlLabel value="onlyDepositMethods" control={<CustomRadio />} label={t('pages.user-management.user_management_settings.Only Deposit Methods')} />
                      <FormControlLabel value="onlyWithdrawMethods" control={<CustomRadio />} label={t('pages.user-management.user_management_settings.Only Withdraw Methods')} />
                    </RadioGroup>
                  </Grid>
                  <Grid item xs={12} mt={3}>
                    <DataTable
                      search={false}
                      data={data}
                      toolbar={false}
                    />
                  </Grid>
                  <Grid item container xs={12} justifyContent="right" mt={3}>
                    <Button variant="contained" sx={{mr: 1}} type="submit">
                      {t('i.Save')}
                    </Button>
                    <Button variant="outlined" color="secondary">
                      {t('i.Cancel')}
                    </Button>
                  </Grid>
                </Grid>
              </ParentCard>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Fragment>
)
  ;
}

export default memo(Page);
