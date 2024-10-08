import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  firstname: yup.string().required(t('pages.merchants.dashboard.Merchant Info Page.Firstname is required')),
  lastname: yup.string().required(t('pages.merchants.dashboard.Merchant Info Page.Lastname is required')),
  documentNo: yup.string().required(t('pages.merchants.dashboard.Merchant Info Page.Document No is required')),
  documentType: yup.string().required(t('pages.merchants.dashboard.Merchant Info Page.Document Type is required')),
  birthDate: yup.string().required(t('pages.merchants.dashboard.Merchant Info Page.Birth Date is required')),
  birthPlace: yup.string().required(t('pages.merchants.dashboard.Merchant Info Page.Birth Place is required')),
  genderSelect: yup.string().required(t('pages.merchants.dashboard.Merchant Info Page.Gender is required')),
});