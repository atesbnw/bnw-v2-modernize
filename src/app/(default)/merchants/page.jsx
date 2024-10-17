"use client";
import { t } from 'i18next';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import {useCallback, useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/merchants/dashboard/FilterModal';
import DataTable from '@/app/components/shared/DataTable';
import {useRouter} from "next/navigation";
import Link from "@mui/material/Link";
import {uniqueId} from "lodash";
import {Faker, fakerTR, tr} from "@faker-js/faker";

const faker = new Faker({
  locale: [fakerTR, tr],
});

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

  const router = useRouter();
  const [data, setData] = useState({
    page: 1,
    pageSize: 25,
    totalData: 25,
    totalPage: 1,
    columns: [],
    rows: []
  });

  useEffect(() => {
    const columns = [
      {
        field: "uuid",
        headerName: "Merchant ID"
      },
      {
        field: "merchantName",
        headerName: "Merchant Name",
        flex: 1,
      },
      {
        field: "totalMembers",
        headerName: "Total Members"
      },
      {
        field: "merchantOpenDate",
        headerName: "Merchant Creation Date"
      },
      {
        field: "memberGroup",
        headerName: "Last Registered User"
      },
      {
        field: "lastMemberRegisterDate",
        headerName: "Last Member Register Date"
      },
      {
        field: "lastPlayingGame",
        headerName: "Last Playing Member"
      },
      {
        field: "lastLoginDate",
        headerName: "Last Login"
      },
      {
        field: "currentBalance",
        headerName: "Current Balance"
      },
      {
        field: "profit",
        headerName: "Profit"
      }
    ];
    const rows = Array.from(Array(50)).map((i,_) => (
      {
        id: uniqueId(),
        uuid: faker.datatype.number({ min: 9000, max: 99999 }),
        merchantName: faker.internet.userName().toLocaleLowerCase(),
        totalMembers: faker.datatype.number({ min: 10, max: 250 }),
        merchantOpenDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
        memberGroup: faker.internet.userName().toLocaleLowerCase(),
        lastMemberRegisterDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
        lastPlayingGame: faker.helpers.arrayElement(['Wild & Turkey', 'legolas']),
        lastLoginDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
        currentBalance: faker.commerce.price(1000, 50000, 2) + '₺',
        profit: faker.commerce.price(1000, 50000, 2) + '₺',
      }
    ));

    setData((prev) => ({
      ...prev,
      columns: columns,
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1))
    }))
  }, []);

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
        data={data}
        toolbar={false}
        onRowClick={(e) => router.push(`/merchants/${e?.row?.merchantName}`)}
      />

    </PageContainer>
  );
}

export default Page;
