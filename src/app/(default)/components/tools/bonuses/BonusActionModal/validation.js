import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  promotionName: yup.string().required(t('pages.tools.bonus.promotionName')+' '+t('is required')),
  requestType: yup.string().required(t('pages.tools.bonus.requestType')+' '+t('is required')),
  approvalType: yup.string().required(t('pages.tools.bonus.approvalType')+' '+t('is required')),
  bonusType: yup.string().required(t('pages.tools.bonus.bonusType')+' '+t('is required')),
  bonusCategory: yup.string().required(t('pages.tools.bonus.bonusCategory')+' '+t('is required')),
  bonusTurnoverCount: yup.string().required(t('pages.tools.bonus.bonusTurnoverCount')+' '+t('is required')),
  mainBalanceTurnoverCount: yup.string().required(t('pages.tools.bonus.mainBalanceTurnoverCount')+' '+t('is required')),
  // gameCategory: yup.string().required(t('pages.tools.bonus.gameCategory')+' '+t('is required')),
  bonusPercentage: yup.string().required(t('pages.tools.bonus.bonusPercentage')+' '+t('is required')),
  regions: yup.string().required(t('pages.tools.bonus.regions')+' '+t('is required')),
  paymentMethod: yup.string().required(t('pages.tools.bonus.paymentMethod')+' '+t('is required')),
  startDate: yup.string().required(t('pages.tools.bonus.startDate')+' '+t('is required')),
  endDate: yup.string().required(t('pages.tools.bonus.endDate')+' '+t('is required')),
  minimumAmount: yup.string().required(t('pages.tools.bonus.minimumAmount')+' '+t('is required')),
  maximumAmount: yup.string().required(t('pages.tools.bonus.maximumAmount')+' '+t('is required'))
});
