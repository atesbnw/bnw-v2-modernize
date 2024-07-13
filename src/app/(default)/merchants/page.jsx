"use client";
import { t } from 'i18next';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import ProductTableList from '@/app/components/apps/ecommerce/ProductTableList/ProductTableList';

function Page() {
  const BCrumb = [
    {
      to: '/',
      title: "menu.Home",
    },
    {
      to: `/merchants`,
      title: "menu.Merchants.title",
    }
    ];

  return (
    <PageContainer title={t("menu.Merchants.title")} description="">
      <Breadcrumb title={t("menu.Merchants.title")} items={BCrumb} />

      <ProductTableList />

    </PageContainer>
  );
}

export default Page;
