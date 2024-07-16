import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  mobilePhone: yup.string().required(t('menu.Users.Contact Info Page.Mobile Phone is required')),
  email: yup.string().email('Enter a valid email').required(t('menu.Users.Contact Info Page.Email is required')),
  country: yup.string().required(t('menu.Users.Contact Info Page.Country is required')),
  region: yup.string().required(t('menu.Users.Contact Info Page.Region is required')),
  city: yup.string().required(t('menu.Users.Contact Info Page.City Code is required')),
  address: yup.string().required(t('menu.Users.Contact Info Page.Address is required')),
  postalCode: yup.string().required(t('menu.Users.Contact Info Page.Postal Code is required')),
});