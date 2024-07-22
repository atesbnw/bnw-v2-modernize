import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  accountStatus: yup.string().required(t('pages.operator-management.dashboard.Status and Role Page.Account Status is required')),
  userRole: yup.string().required(t('pages.operator-management.dashboard.Status and Role Page.User Role is required'))
});