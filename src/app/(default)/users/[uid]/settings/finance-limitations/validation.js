import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  maxSingleDeposit: yup.string().required(t('pages.user-management.user_management_settings.Max Single Deposit is required')),
  maxDailyDeposit: yup.string().required(t('pages.user-management.user_management_settings.Max Daily Deposit is required')),
  maxWeeklyDeposit: yup.string().required(t('pages.user-management.user_management_settings.Max Weekly Deposit is required')),
  maxMonthlyDeposit: yup.string().required(t('pages.user-management.user_management_settings.Max Monthly Deposit is required')),
  maxYearlyDeposit: yup.string().required(t('pages.user-management.user_management_settings.Max Yearly Deposit is required')),
  blockDepositMethods: yup.string().required(t('pages.user-management.user_management_settings.Block Deposit Methods is required')),
  maxSingleWithdraw: yup.string().required(t('pages.user-management.user_management_settings.Max Single Withdraw is required')),
  maxDailyWithdraw: yup.string().required(t('pages.user-management.user_management_settings.Max Daily Withdraw is required')),
  maxWeeklyWithdraw: yup.number().required(t('pages.user-management.user_management_settings.Max Weekly Withdraw is required')),
  maxMonthlyWithdraw: yup.number().required(t('pages.user-management.user_management_settings.Max Monthly Withdraw is required')),
  maxYearlyWithdraw: yup.string().required(t('pages.user-management.user_management_settings.Max Yearly Withdraw is required')),
  blockWithdrawMethods: yup.string().required(t('pages.user-management.user_management_settings.Block Withdraw Methods is required'))
});