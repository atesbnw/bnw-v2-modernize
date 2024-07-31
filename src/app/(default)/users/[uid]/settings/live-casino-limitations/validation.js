import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  category: yup.string().required(t('pages.user-management.user_management_settings.Category is required')),
  provider: yup.string().required(t('pages.user-management.user_management_settings.Provider is required')),
  game: yup.string().required(t('pages.user-management.user_management_settings.Game is required')),
  limitDuration: yup.string().required(t('pages.user-management.user_management_settings.Limit Duration is required')),
  limitAmount: yup.number().required(t('pages.user-management.user_management_settings.Limit Amount is required')),
  blockAll: yup.string().required(t('pages.user-management.user_management_settings.Block All is required')),
  description: yup.string().required(t('pages.user-management.user_management_settings.Description is required'))
});