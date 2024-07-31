"use client";
import React, {Fragment, memo, useCallback, useEffect, useState} from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import {Stack, Grid, Typography,Box,Card} from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import DataTable from "@/app/components/shared/DataTable";
import {uniqueId} from "lodash";
import {Faker, fakerTR, tr} from "@faker-js/faker";
import {useParams, useRouter} from "next/navigation";
import IconButton from "@mui/material/IconButton";
import {IconEye, IconWorld, IconTrash} from "@tabler/icons-react";
import { useTheme } from '@mui/material/styles';
import ActionModal from "@/app/(default)/components/domain-management/ActionModal";
import CustomSwitch from "@/app/components/forms/theme-elements/CustomSwitch";
import Button from "@mui/material/Button";

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {

  const ButtonComps = useCallback(() => {
    return (
      <Stack direction={"row"} className={"gap-2 items-center"}>
        <ActionModal
          data={{}}
        />
        <Button variant="contained" color="success">
          {t('pages.domain-management.domain-management.Change Domain')}
        </Button>
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
        headerName: t('pages.domain-management.domain-management.ID'),
      },
      {
        field: 'zoneAddress',
        headerName: t('pages.domain-management.domain-management.zoneAddress'),
        flex: 1,
      },
      {
        field: 'mobile',
        headerName: t('pages.domain-management.domain-management.mobile'),
      },
      {
        field: 'www',
        headerName: t('pages.domain-management.domain-management.www'),
      },
      {
        field: 'merchant',
        headerName: t('pages.domain-management.domain-management.merchant'),
      },
      {
        field: 'ssl',
        headerName: t('pages.domain-management.domain-management.ssl'),
      },
      {
        field: 'firewall',
        headerName: t('pages.domain-management.domain-management.firewall'),
      },
      {
        field: 'underAttackMode',
        headerName: t('pages.domain-management.domain-management.underAttackMode'),
      },
      {
        field: 'pageRules',
        headerName: t('pages.domain-management.domain-management.pageRules'),
      },
      {
        field: 'operator',
        headerName: t('pages.domain-management.domain-management.operator'),
      },
      {
        field: 'status',
        headerName: t('pages.domain-management.domain-management.status'),
        cellClassName: 'centerAll',
        renderCell: ({ value }) => {
          return (
            <CustomSwitch
              defaultChecked={value}
            />
          )
        }
      },
      {
        field: 'actions',
        type: 'actions',
        width: 100,
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
            </>
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      zoneAddress: "domain" + faker.random.numeric(3) + ".com",
      mobile: faker.helpers.arrayElement(['Active', 'Passive']),
      www: faker.helpers.arrayElement(['Active', 'Passive']),
      merchant: faker.helpers.arrayElement(['Active', 'Passive']),
      ssl: faker.helpers.arrayElement(['Active', 'Passive']),
      firewall: faker.helpers.arrayElement(['Active', 'Passive']),
      underAttackMode: faker.helpers.arrayElement(['Active', 'Passive']),
      pageRules: faker.datatype.boolean(),
      operator: "admin",
      status: faker.datatype.boolean(),
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
            title={t('pages.domain-management.domain-management.Domain Management')}
            Right={ButtonComps}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>
          <Card variant="outlined">
            <Typography variant="h4">{t('pages.domain-management.domain-management.activeDomainInfo')}</Typography>
            <Grid container spacing={2} mt={2} justifyContent="space-between" className={"text-center"}>
              <Grid item xs={6} sm={4} md="auto">
                <Typography>
                  <strong>{t('pages.domain-management.domain-management.lastTransitionDate')}</strong><br/>
                  02.07.2022 21:25:12
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md="auto">
                <Typography>
                  <strong>{t('pages.domain-management.domain-management.operator')}</strong><br/>
                  ali_admin
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md="auto">
                <Typography>
                  <strong>{t('pages.domain-management.domain-management.desktop')}</strong><br/>
                  https://domain12.com
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md="auto">
                <Typography>
                  <strong>{t('pages.domain-management.domain-management.mobile')}</strong><br/>
                  https://m.domain12.com
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md="auto">
                <Typography>
                  <strong>{t('pages.domain-management.domain-management.www')}</strong><br/>
                  {t('pages.domain-management.domain-management.active')}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md="auto">
                <Typography>
                  <strong>{t('pages.domain-management.domain-management.ssl')}</strong><br/>
                  {t('pages.domain-management.domain-management.active')}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md="auto">
                <Typography>
                  <strong>{t('pages.domain-management.domain-management.firewall')}</strong><br/>
                  {t('pages.domain-management.domain-management.passive')}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md="auto">
                <Typography>
                  <strong>{t('pages.domain-management.domain-management.underAttackMode')}</strong><br/>
                  {t('pages.domain-management.domain-management.passive')}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md="auto">
                <Typography>
                  <strong>{t('pages.domain-management.domain-management.remainingDomainCount')}</strong><br/>
                  165
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <ParentCard
            title={t('pages.domain-management.domain-management.Domains')}
          >
            <DataTable
              withSideMenu={false}
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
