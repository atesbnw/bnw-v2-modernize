import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  playerId: yup.string().required(t('menu.Users.Account Info Page.Player ID is required')),
  registrationDate: yup.string().required(t('menu.Users.Account Info Page.Registration Date is required')),
  language: yup.string().required(t('menu.Users.Account Info Page.Language is required')),
  username: yup.string().required(t('menu.Users.Account Info Page.Username is required')),
  currency: yup.string().required(t('menu.Users.Account Info Page.Currency is required')),
  dealerCode: yup.string().required(t('menu.Users.Account Info Page.Dealer Code is required')),
  promotionCode: yup.string().required(t('menu.Users.Account Info Page.Promotion Code is required')),
});