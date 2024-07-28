import content_management_banners from '@/utils/languages/pages/en/content-management/banners.json';
import content_management_content_management from '@/utils/languages/pages/en/content-management/content-management.json';
import content_management_custom_css from '@/utils/languages/pages/en/content-management/custom-css.json';
import content_management_popups from '@/utils/languages/pages/en/content-management/popups.json';
import content_management_private_days from '@/utils/languages/pages/en/content-management/private-days.json';
import content_management_promotions from '@/utils/languages/pages/en/content-management/promotions.json';
import content_management_site_design from '@/utils/languages/pages/en/content-management/site-design.json';
import content_management_site_menu from '@/utils/languages/pages/en/content-management/site-menu.json';
import content_management_sliders from '@/utils/languages/pages/en/content-management/sliders.json';

import domain_management_domain_management from '@/utils/languages/pages/en/domain-management/domain-management.json';

import game_management_admin_address from '@/utils/languages/pages/en/game-management/admin-address.json';
import game_management_casino_management from '@/utils/languages/pages/en/game-management/casino-management.json';
import game_management_category_management from '@/utils/languages/pages/en/game-management/category-management.json';
import game_management_game_management from '@/utils/languages/pages/en/game-management/game-management.json';
import game_management_live_casino_management from '@/utils/languages/pages/en/game-management/live-casino-management.json';
import game_management_sportsbook_management from '@/utils/languages/pages/en/game-management/sportsbook-management.json';
import game_management_virtual_game_management from '@/utils/languages/pages/en/game-management/virtual-game-management.json';


import merchants_dashboard from '@/utils/languages/pages/en/merchants/dashboard.json';
import merchants_financial_transactions from '@/utils/languages/pages/en/merchants/financial-transactions.json';
import merchants_game_management from '@/utils/languages/pages/en/merchants/game-management.json';
import merchants_merchants from '@/utils/languages/pages/en/merchants/merchants.json';
import merchants_privacy_info from '@/utils/languages/pages/en/merchants/privacy-info.json';
import merchants_reports from '@/utils/languages/pages/en/merchants/reports.json';
import merchants_settings from '@/utils/languages/pages/en/merchants/settings.json';

import operator_management_dashboard from '@/utils/languages/pages/en/operator-management/dashboard.json';
import operator_management_financial_transactions from '@/utils/languages/pages/en/operator-management/financial-transactions.json';
import operator_management_game_management from '@/utils/languages/pages/en/operator-management/game-management.json';
import operator_management_operator_management from '@/utils/languages/pages/en/operator-management/operator-management.json';
import operator_management_reports from '@/utils/languages/pages/en/operator-management/reports.json';
import operator_management_settings from '@/utils/languages/pages/en/operator-management/settings.json';

import reports_finance_reports from '@/utils/languages/pages/en/reports/finance-reports.json';
import reports_game_reports from '@/utils/languages/pages/en/reports/game-reports.json';
import reports_general_reports from '@/utils/languages/pages/en/reports/general-reports.json';
import reports_reports from '@/utils/languages/pages/en/reports/reports.json';
import reports_user_reports from '@/utils/languages/pages/en/reports/user-reports.json';

import settings_commission_percents from '@/utils/languages/pages/en/settings/commission-percents.json';
import settings_limitation from '@/utils/languages/pages/en/settings/limitation.json';
import settings_permissions from '@/utils/languages/pages/en/settings/permissions.json';
import settings_segmentation from '@/utils/languages/pages/en/settings/segmentation.json';
import settings_settings from '@/utils/languages/pages/en/settings/settings.json';

import tools_announcements from '@/utils/languages/pages/en/tools/announcements.json';
import tools_bonus from '@/utils/languages/pages/en/tools/bonus.json';
import tools_bulk_email from '@/utils/languages/pages/en/tools/bulk-email.json';
import tools_bulk_message from '@/utils/languages/pages/en/tools/bulk-message.json';
import tools_merchants from '@/utils/languages/pages/en/tools/merchants.json';
import tools_operators from '@/utils/languages/pages/en/tools/operators.json';
import tools_tools from '@/utils/languages/pages/en/tools/tools.json';

import user_management_dashboard from '@/utils/languages/pages/en/user-management/dashboard.json';
import user_management_financial_transactions from '@/utils/languages/pages/en/user-management/financial-transactions.json';
import user_management_game_management from '@/utils/languages/pages/en/user-management/game-management.json';
import user_management_reports from '@/utils/languages/pages/en/user-management/reports.json';
import user_management_settings from '@/utils/languages/pages/en/user-management/settings.json';
import user_management_user_management from '@/utils/languages/pages/en/user-management/user-management.json';


const pages = {
  "content-management": content_management_content_management,
// {
//     "banners": content_management_banners,
//     "content-management": ,
//     "custom-css": content_management_custom_css,
//     "popups": content_management_popups,
//     "private-days": content_management_private_days,
//     "promotions": content_management_promotions,
//     "site-design": content_management_site_design,
//     "site-menu": content_management_site_menu,
//     "sliders": content_management_sliders
//   },
  "domain-management": {
    "domain-management": domain_management_domain_management
  },
  "game-management": {
    "admin-address": game_management_admin_address,
    "casino-management": game_management_casino_management,
    "category-management": game_management_category_management,
    "game-management": game_management_game_management,
    "live-casino-management": game_management_live_casino_management,
    "sportsbook-management": game_management_sportsbook_management,
    "virtual-game-management": game_management_virtual_game_management
  },
  "merchants": {
    "dashboard": merchants_dashboard,
    "financial-transactions": merchants_financial_transactions,
    "game-management": merchants_game_management,
    "merchants": merchants_merchants,
    "privacy-info": merchants_privacy_info,
    "reports": merchants_reports,
    "settings": merchants_settings
  },
  "operator-management": {
    "dashboard": operator_management_dashboard,
    "financial-transactions": operator_management_financial_transactions,
    "game-management": operator_management_game_management,
    "operator-management": operator_management_operator_management,
    "reports": operator_management_reports,
    "settings": operator_management_settings
  },
  "reports": {
    "finance-reports": reports_finance_reports,
    "game-reports": reports_game_reports,
    "general-reports": reports_general_reports,
    "reports": reports_reports,
    "user-reports": reports_user_reports
  },
  "settings": {
    "commission-percents": settings_commission_percents,
    "limitation": settings_limitation,
    "permissions": settings_permissions,
    "segmentation": settings_segmentation,
    "settings": settings_settings
  },
  "tools": {
    "announcements": tools_announcements,
    "bonus": tools_bonus,
    "bulk-email": tools_bulk_email,
    "bulk-message": tools_bulk_message,
    "merchants": tools_merchants,
    "operators": tools_operators,
    "tools": tools_tools
  },
  "user-management": {
    "user_management_dashboard" : user_management_dashboard,
    "user_management_financial_transactions" : user_management_financial_transactions,
    "game-management" : user_management_game_management,
    "user_management_reports" : user_management_reports,
    "user_management_settings" : user_management_settings,
    "user_management_user_management" : user_management_user_management
  }
};

export default pages;
