import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  accountStatus: yup.string().required(t('menu.Users.Status and Role Page.Account Status is required')),
  userRole: yup.string().required(t('menu.Users.Status and Role Page.User Role is required')),
  userSegment: yup.string().required(t('menu.Users.Status and Role Page.User Segment is required')),
  approvalStatus: yup.string().required(t('menu.Users.Status and Role Page.Approval Status is required')),
  loyaltySystem: yup.string().required(t('menu.Users.Status and Role Page.Loyalty System is required')),
  loyaltyStatus: yup.string().required(t('menu.Users.Status and Role Page.Loyalty Status is required')),
});