"use client";
import React, {Fragment, memo, useCallback, useEffect, useState} from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import {Stack, Button, Grid, Dialog, DialogContent, DialogContentText, DialogProps, DialogTitle, DialogActions} from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import DataTable from "@/app/components/shared/DataTable";
import FilterModal from "@/app/(default)/components/tools/merchants/FilterModal";
import {uniqueId} from "lodash";
import {Faker, fakerTR, tr} from "@faker-js/faker";
import {useParams, useRouter} from "next/navigation";
import IconButton from "@mui/material/IconButton";
import {IconEye, IconFilter, IconWorld, IconPencil, IconTrash, IconFileDownload} from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';
import ActionModal from "@/app/(default)/components/tools/merchants/ActionModal";

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const [filter, setFilter] = useState({});
  const router = useRouter();
  const theme = useTheme();

  const ButtonComps = useCallback(() => {
    return (
      <Stack direction={"row"} className={"gap-2 items-center"}>
        <ActionModal
          data={{}}
        />
      </Stack>
    );
  }, []);

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
        field: 'userId',
        headerName: t('pages.tools.merchants.User ID'),
        // width: 200
      },
      {
        field: 'username',
        headerName: t('pages.tools.merchants.Username'),
        // width: 200,
      },
      {
        field: 'nameSurname',
        headerName: t('pages.tools.merchants.Name Surname'),
        // width: 200
        flex: 1,
      },
      {
        field: 'referenceCode',
        headerName: t('pages.tools.merchants.Reference Code'),
        // width: 200
      },
      {
        field: 'commissionRate',
        headerName: t('pages.tools.merchants.Commission Rate'),
        // width: 200
      },
      {
        field: 'createDate',
        headerName: t('pages.tools.merchants.Create Date'),
        // width: 200
      },
      {
        field: 'createdBy',
        headerName: t('pages.tools.merchants.Created By'),
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <>
              <ActionModal
                data={e?.row}
                id={e?.id}
              />
              <IconButton>
                <IconEye />
              </IconButton>
              {/*<AnnouncementDetail/>*/}
            </>
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      userId: uniqueId(),
      username: "mukremin",
      nameSurname: "Mukremin Gardiyan",
      referenceCode: "code=23214322",
      commissionRate: "%15",
      createDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      createdBy: "eren_admin",
     }));

    setData((prev) => ({
      ...prev,
      columns: columns,
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1)),
    }));
  }, []);

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TitleBar
            title={t('Tools.Merchants')}
            Right={ButtonComps}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>
          <ParentCard
            title=""
            action={
            <>
              <Tooltip title={t('i.downloadCSV')}>
                <IconButton color={'primary'} onClick={() => {}}>
                  <IconFileDownload />
                </IconButton>
              </Tooltip>
              <FilterModal
                filter={filter}
                updateFilter={updateFilter}
                resetFilter={() => {
                  setFilter({});
                  setData(prev => ({ ...prev, filter: {} }));
                }}
                onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
              />
            </>
            }
          >

            <DataTable
              search={false}
              data={data}
              toolbar={false}
            />

          </ParentCard>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default memo(Page);
