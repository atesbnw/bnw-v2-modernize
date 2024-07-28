'use client';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import FilterModal from '@/app/(default)/components/content-management/FilterModal';
import { useParams, useRouter } from 'next/navigation';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import { IconCheck, IconDeviceDesktop, IconDeviceMobile, IconX } from '@tabler/icons-react';
import classNames from "classnames";

function Page() {
  const params = useParams();
  const title = t('Content Management.Sliders');
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const router = useRouter();
  const [data, setData] = useState({
    page: 1,
    pageSize: 10,
    totalData: 20,
    totalPage: 1,
    columns: [],
    rows: [],
  });

  useEffect(() => {
    const columns = [
      {
        field: 'order',
        headerName: t('pages.content-management.order'),
        // width: 200
      },
      {
        field: 'logo',
        headerName: t('pages.user-management.game-management.Logo'),
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            <img src={value} className={"w-20 h-20 rounded bg-white object-contain"} alt={"provider"} />
            {/*<Typography className={"flex-1"} variant={"body1"}>{value}</Typography>*/}
            {/*<NewManuelTransactionAddWithID id={value} />*/}
          </Box>
        )
        // width: 200
      },
      {
        field: 'titleDesc',
        headerName: t('pages.content-management.titleDesc'),
        flex:1,
        // width: 200
      },
      {
        field: 'link',
        headerName: t('pages.content-management.link'),
        flex:1,
        // width: 200
      },
      {
        field: 'linkType',
        headerName: t('pages.content-management.linkType'),
        // width: 200
      },
      {
        field: 'target',
        headerName: t('pages.content-management.target'),
        // width: 200
      },
      {
        field: 'views',
        headerName: t('pages.content-management.views'),
        // width: 200
      },
      {
        field: 'time',
        headerName: t('pages.content-management.time'),
        // width: 200
      },
      {
        field: 'updatedAt',
        headerName: t('pages.content-management.updatedAt'),
        // width: 200
      },
      {
        field: 'platform',
        headerName: t('pages.content-management.platform'),
        renderCell: ({value}) => {
          return(
            <Box className={"flex gap-2 items-center"}>
              <IconDeviceMobile className={classNames({"opacity-50" : !value?.mobile})} />
              <IconDeviceDesktop className={classNames({"opacity-50" : !value?.desktop})} />
            </Box>
          )
        }
        // width: 200
      },
      {
        field: 'language',
        headerName: t('pages.content-management.language'),
        // width: 200
      },
      {
        field: 'status',
        headerName: t('pages.content-management.status'),
        renderCell: ({value}) => {
          return(
            <Box className={"flex gap-2 items-center justify-center w-full"}>
              {value ? (<IconCheck />) : (<IconX />)}
            </Box>
          )
        }
        // width: 200
      },
    ];

    const rows = Array.from(Array(20)).map((_,i) => ({
      id: uniqueId(),
      order: i+1,
      logo: faker.helpers.arrayElement(['https://www.paulbellard.com/wp-content/uploads/2020/03/evolution-gaming-logo.jpg']),
      titleDesc: faker.helpers.arrayElement(["Deposit Bonus", "Jet Bonus", "Super Bonus", "Lose Bonus"]),
      link: "/"+faker.internet.userName().toLowerCase(),
      linkType: faker.helpers.arrayElement(["Internal", "External"]),
      target: faker.helpers.arrayElement(["VIP", "Normal"]),
      views: faker.helpers.arrayElement(["Everybody", "New members"]),
      time: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      updatedAt: faker.helpers.arrayElement(["Papara", "Payfix"]),
      platform: {
        mobile: faker.helpers.arrayElement([true, false]),
        desktop: faker.helpers.arrayElement([true, false])
      },
      language: faker.helpers.arrayElement(["Turkish", "English"]),
      status: faker.helpers.arrayElement([true, false])
    }));

    setData((prev) => ({
      ...prev,
      columns: columns,
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1)),
    }));
  }, []);

  return (
    <Box className={'flex flex-col gap-4'}>
      <TitleBar
        title={title}
      />


      <ParentCard title={''} action={(
        <FilterModal
          filter={filter}
          updateFilter={updateFilter}
          resetFilter={() => {
            setFilter({});
            setData(prev => ({ ...prev, filter: {} }));
          }}
          onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
        />
      )}>
        <DataTable
          withSideMenu={false}
          search={false}
          data={data}
          toolbar={false}
          rowReordering={true}
        />
      </ParentCard>
    </Box>
  );
}

export default memo(Page);
