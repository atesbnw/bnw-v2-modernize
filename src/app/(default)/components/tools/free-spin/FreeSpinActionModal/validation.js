import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  promotionName: yup.string().required(t('pages.tools.bonus.promotionName')+' '+t('is required')),
  provider: yup.string().required(t('pages.tools.bonus.provider')+' '+t('is required')),
  game: yup.array().min(1, t('pages.tools.bonus.atLeastOne')).required(t('pages.tools.bonus.match')+' '+t('is required')),
  startDate: yup.string().required(t('pages.tools.bonus.startDate')+' '+t('is required')),
  endDate: yup.string().required(t('pages.tools.bonus.endDate')+' '+t('is required')),
  currency: yup.string().required(t('pages.tools.bonus.currency')+' '+t('is required')),
  freeSpinAmount: yup.string().required(t('pages.tools.bonus.freeSpinAmount')+' '+t('is required')),
  betPerSpin: yup.string().required(t('pages.tools.bonus.betPerSpin')+' '+t('is required')),
  targetUser: yup.string().required(t('pages.tools.bonus.targetUser')+' '+t('is required'))
});
