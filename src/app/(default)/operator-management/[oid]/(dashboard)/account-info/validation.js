import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  operatorId: yup.string().required(t('pages.operator-management.dashboard.Account Info Page.Operator ID is required')),
  registrationDate: yup.string().required(t('pages.operator-management.dashboard.Account Info Page.Registration Date is required')),
  username: yup.string().required(t('pages.operator-management.dashboard.Account Info Page.Username is required'))
});