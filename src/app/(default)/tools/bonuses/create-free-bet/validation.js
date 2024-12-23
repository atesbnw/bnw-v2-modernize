import * as yup from "yup";
import {t} from "i18next";

export const validationSchema = yup.object({
  promotionName: yup.string().required(t('pages.tools.bonus.promotionName')+' '+t('is required')),
  provider: yup.string().required(t('pages.tools.bonus.provider')+' '+t('is required')),
  fixture: yup.array().min(1, t('pages.tools.bonus.atLeastOne')).required(t('pages.tools.bonus.match')+' '+t('is required')),
  sport: yup.array().min(1, t('pages.tools.bonus.atLeastOne')).required(t('pages.tools.bonus.match')+' '+t('is required')),
  category: yup.array().min(1, t('pages.tools.bonus.atLeastOne')).required(t('pages.tools.bonus.match')+' '+t('is required')),
  tournament: yup.array().min(1, t('pages.tools.bonus.atLeastOne')).required(t('pages.tools.bonus.match')+' '+t('is required')),
  match: yup.array().min(1, t('pages.tools.bonus.atLeastOne')).required(t('pages.tools.bonus.match')+' '+t('is required')),
  betType: yup.array().min(1, t('pages.tools.bonus.atLeastOne')).required(t('pages.tools.bonus.match')+' '+t('is required')),
  currency: yup.string().required(t('pages.tools.bonus.currency')+' '+t('is required')),
  startDate: yup.string().required(t('pages.tools.bonus.startDate')+' '+t('is required')),
  endDate: yup.string().required(t('pages.tools.bonus.endDate')+' '+t('is required')),
  minBonusAmount: yup.string().required(t('pages.tools.bonus.minBonusAmount')+' '+t('is required')),
  maxBonusAmount: yup.string().required(t('pages.tools.bonus.maxBonusAmount')+' '+t('is required')),
  minMatchCount: yup.string().required(t('pages.tools.bonus.minMatchCount')+' '+t('is required')),
  minTurnoverRate: yup.string().required(t('pages.tools.bonus.minTurnoverRate')+' '+t('is required')),
  minBetAmount: yup.string().required(t('pages.tools.bonus.minBetAmount')+' '+t('is required'))
});