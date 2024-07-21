import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  merchantId: yup.string().required(t('pages.merchants.dashboard.Account Info Page.Merchant ID is required')),
  registrationDate: yup.string().required(t('pages.merchants.dashboard.Account Info Page.Registration Date is required')),
  language: yup.string().required(t('pages.merchants.dashboard.Account Info Page.Language is required')),
  username: yup.string().required(t('pages.merchants.dashboard.Account Info Page.Username is required')),
  currency: yup.string().required(t('pages.merchants.dashboard.Account Info Page.Currency is required')),
  merchantCode: yup.string().required(t('pages.merchants.dashboard.Account Info Page.Merchant Code is required')),
  promotionCode: yup.string().required(t('pages.merchants.dashboard.Account Info Page.Promotion Code is required'))
});