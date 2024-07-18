"use client";
import { t } from 'i18next';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import DataTable from '@/app/components/shared/DataTable';
import { useUsers } from '@/app/(default)/users/useUsers';
import IconButton from "@mui/material/IconButton";
import {IconFilter, IconTrash} from "@tabler/icons-react";
import Stack from "@mui/material/Stack";
import React, {useCallback, useState} from "react";
import {Button} from "@mui/material";
import FilterModal from "@/app/(default)/components/users/users-list/FilterModal";

function Page() {
  const [filter, setFilter] = useState({});
  const {users} = useUsers();

  const BCrumb = [
    {
      to: '/',
      title: "menu.Home",
    },
    {
      to: `/users`,
      title: "Users.bc.User Management",
    }
  ];

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);


  return (
    <PageContainer title={t("Users.bc.User Management")} description="" style={{
      flex: 1,
      overflowX: "auto"
    }}>
      <Breadcrumb title={t("Users.bc.User Management")} items={BCrumb} />

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
        data={users}
        toolbar={false}
      />

    </PageContainer>
  );
}

export default Page;
