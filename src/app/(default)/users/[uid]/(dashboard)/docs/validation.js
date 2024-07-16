import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  documentType: yup.string().required(t('menu.Users.Docs Page.Document Type is required')),
  file: yup.string().required(t('menu.Users.Docs Page.Document File is required')),
});