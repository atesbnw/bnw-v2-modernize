"use client";
import React, {Fragment, memo, useCallback, useEffect, useState} from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import {Stack, Button, Grid, Dialog, DialogContent, DialogContentText, DialogProps, DialogTitle, DialogActions} from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import DataTable from "@/app/components/shared/DataTable";
import FilterModal from "@/app/(default)/components/tools/announcements/FilterModal";
import {uniqueId} from "lodash";
import {Faker, fakerTR, tr} from "@faker-js/faker";
import {useParams, useRouter} from "next/navigation";
import IconButton from "@mui/material/IconButton";
import {IconEye, IconFilter, IconWorld, IconPencil, IconTrash} from "@tabler/icons-react";
import AnnouncementDetail from "@/app/(default)/components/tools/announcements/AnnouncementDetail";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';
import ActionModal from "@/app/(default)/components/tools/announcements/ActionModal";

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
        field: 'id',
        headerName: t('pages.tools.announcements.ID'),
        // width: 200
      },
      {
        field: 'image',
        headerName: t('pages.tools.announcements.Image'),
        // width: 200
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            <img src={value} className={"w-20 h-20 rounded bg-white object-contain"} alt={"provider"} />
          </Box>
        )
      },
      {
        field: 'title',
        headerName: t('pages.tools.announcements.Title'),
        // width: 200,
      },
      {
        field: 'text',
        headerName: t('pages.tools.announcements.Text'),
        // width: 200
        flex: 1,
      },
      {
        field: 'startDate',
        headerName: t('pages.tools.announcements.Start Date'),
        // width: 200
      },
      {
        field: 'endDate',
        headerName: t('pages.tools.announcements.End Date'),
        // width: 200
      },
      {
        field: 'operator',
        headerName: t('pages.tools.announcements.Operator'),
        // width: 200
      },
      {
        field: 'language',
        headerName: t('pages.tools.announcements.Language'),
        cellClassName: 'centerAll',
        renderCell: ({ value }) => {
          return (
            <Tooltip title={value}>
              <IconWorld color={theme.palette.warning.main} />
            </Tooltip>
          )
        }
      },
      {
        field: 'status',
        headerName: t('pages.tools.announcements.Status'),
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <>
              <IconButton>
                <IconTrash />
              </IconButton>
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
      image: faker.image.avatar(),
      title: "New Announcement",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      startDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      endDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      operator: "admin",
      language: "English, Turkish, French",
      status: faker.helpers.arrayElement(['Active', 'Passive']),
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
            title={t('Tools.Announcements')}
            Right={ButtonComps}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>
          <ParentCard
            title={t('pages.tools.announcements.Announcements')}
            action={
              <FilterModal
                filter={filter}
                updateFilter={updateFilter}
                resetFilter={() => {
                  setFilter({});
                  setData(prev => ({ ...prev, filter: {} }));
                }}
                onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
              />
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
