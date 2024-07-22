"use client";
import { t } from 'i18next';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import DataTable from '@/app/components/shared/DataTable';
import { useOperators } from '@/app/(default)/operator-management/useOperators';
import Stack from "@mui/material/Stack";
import React, {useCallback, useState} from "react";
import FilterModal from "@/app/(default)/components/operator-management/operator-list/FilterModal";

function Page() {
  const [filter, setFilter] = useState({});
  const {operators} = useOperators();
  const BCrumb = [
    {
      to: '/',
      title: "menu.Home",
    },
    {
      to: `/operator-management`,
      title: "menu.Operator Management.title",
    }
  ];



  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);


  return (
    <PageContainer title={t("menu.Operator Management.title")} description="" style={{
      flex: 1,
      overflowX: "auto"
    }}>
      <Breadcrumb title={t("menu.Operator Management.title")} items={BCrumb} />

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
        data={operators}
        toolbar={false}
      />

    </PageContainer>
  );
}

export default Page;
