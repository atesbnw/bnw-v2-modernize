"use client";
import { t } from 'i18next';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import ProductTableList from '@/app/components/apps/ecommerce/ProductTableList/ProductTableList';
import { useCallback, useState } from 'react';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/merchants/dashboard/FilterModal';
import DataTable from '@/app/components/shared/DataTable';
import { useMerchants } from '@/app/(default)/merchants/useMerchants';

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
  const [filter, setFilter] = useState({});
  const {merchants} = useMerchants();

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);


  return (
    <PageContainer title={t("menu.Merchants.title")} description="" style={{
      flex: 1,
      overflowX: "auto"
    }}>
      <Breadcrumb title={t("menu.Merchants.title")} items={BCrumb} />

      <Stack direction={"row"} justifyContent={"end"} className={"mb-3"}>
        <FilterModal
          filter={filter}
          updateFilter={updateFilter}
          resetFilter={() => {
            setFilter({});
            setData(prev => ({ ...prev, filter: {} }));
          }}
          onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
        />
      </Stack>

      <DataTable
        withSideMenu={false}
        data={merchants}
        toolbar={false}
      />

    </PageContainer>
  );
}

export default Page;
