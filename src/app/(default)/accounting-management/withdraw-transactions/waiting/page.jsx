"use client";
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import FilterModal from '@/app/(default)/components/accounting-management/FilterModal';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { IconChevronRight, IconFileDownload, IconInfoCircle } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import ChildCard from '@/app/components/shared/ChildCard';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

const DetailCard = memo(function DetailCardComp({id, row}){

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
        field: 'category',
        headerName: t('pages.accounting-management.category'),
        flex:1,
      },
      {
        field: 'provider',
        headerName: t('pages.accounting-management.provider'),
        flex:1,
        // width: 200
      },
      {
        field: 'amount',
        headerName: t('pages.accounting-management.amount'),
        // width: 200
      },
      {
        field: 'confirmedAt',
        headerName: t('pages.accounting-management.confirmedAt'),
        flex:1,
        // width: 200
      }
    ];

    const rows = Array.from(Array(5)).map(() => ({
      id: uniqueId(),
      category: faker.helpers.arrayElement(['Papara', 'Payfix', "CepBank"]),
      provider: faker.helpers.arrayElement(['Papara Key', 'Garanti', "Finansbank"]),
      confirmedAt: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      amount: faker.commerce.price(1000, 100000, 2) + '₺'
    }));

    setData((prev) => ({
      ...prev,
      columns: columns,
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1)),
    }));
  }, []);

  return(
    <ChildCard>
      <Box className={"flex md:flex-row flex-col gap-2"}>
        <Box className={"md:flex-1"}>
          <Typography variant="h4">{t("pages.accounting-management.transactionDetails")}</Typography>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell component={"th"}>{t("pages.accounting-management.amount")}</TableCell>
                <TableCell>{row?.amount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component={"th"}>{t("pages.accounting-management.bank")}</TableCell>
                <TableCell>{row?.bank}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component={"th"}>{t("pages.accounting-management.iban")}</TableCell>
                <TableCell>{row?.iban}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component={"th"}>{t("pages.accounting-management.accountCode")}</TableCell>
                <TableCell>{row?.accountCode}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component={"th"}>{t("pages.accounting-management.accountNo")}</TableCell>
                <TableCell>{row?.accountNo}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component={"th"}>{t("pages.accounting-management.idNumber")}</TableCell>
                <TableCell>{row?.idNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component={"th"}>{t("pages.accounting-management.userNote")}</TableCell>
                <TableCell>{row?.note}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </Box>
        <Box className={"md:flex-1"}>
          <Typography variant="h4">{t("pages.accounting-management.userLastConfirmedTransactions")}</Typography>

          <DataTable
            search={false}
            data={data}
            toolbar={false}
          />

        </Box>
      </Box>
    </ChildCard>
  )
});

function Page() {
  const title = t("pages.accounting-management.waiting");
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
        field: 'transactionId',
        headerName: t('pages.accounting-management.transactionId'),
        // width: 200
      },
      {
        field: 'userId',
        headerName: t('pages.accounting-management.userId'),
        flex:1,
      },
      {
        field: 'username',
        headerName: t('pages.accounting-management.username'),
        flex:1,
      },
      {
        field: 'category',
        headerName: t('pages.accounting-management.category'),
        flex:1,
      },
      {
        field: 'provider',
        headerName: t('pages.accounting-management.provider'),
        flex:1,
        // width: 200
      },
      {
        field: 'requestTime',
        headerName: t('pages.accounting-management.requestTime'),
        flex:1,
        // width: 200
      },
      {
        field: 'amount',
        headerName: t('pages.accounting-management.amount'),
        // width: 200
      },
      {
        field: 'operator',
        headerName: t('pages.accounting-management.operator'),
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            ...(e?.row?.note ? [
              <Tooltip title={e?.row?.note}>
                <IconInfoCircle className={"text-amber-500"} />
              </Tooltip>
            ] : []),
            // <IconButton onClick={() => {
            //
            // }}>
            //   <IconChevronRight />
            // </IconButton>,
            // <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
            //   <IconPencil />
            // </IconButton>
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      transactionId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      username: faker.internet.userName().toLowerCase(),
      operator: faker.internet.userName().toLowerCase(),
      category: faker.helpers.arrayElement(['Papara', 'Payfix', "CepBank"]),
      provider: faker.helpers.arrayElement(['Papara Key', 'Garanti', "Finansbank"]),
      requestTime: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      amount: faker.commerce.price(1000, 100000, 2) + '₺',
      note: "Some note "+uniqueId(),
      bank: faker.helpers.arrayElement(['AKBANK', 'FİNANSBANK', "GARANTİ"]),
      iban: "TR"+faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      accountCode: faker.datatype.number({ min: 100, max: 999 }).toString(),
      accountNo: faker.datatype.number({ min: 10000, max: 99999 }).toString(),
      idNumber: faker.datatype.number({ min: 1000000, max: 9999999 }).toString()
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
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={title}
      />

        <ParentCard title={(
          <Box className={"flex gap-2 items-center"}>
            <Button variant={"text"} color={"success"}>{t("pages.accounting-management.actions.confirm")}</Button>
            <Button variant={"text"} color={"error"}>{t("pages.accounting-management.actions.cancel")}</Button>
          </Box>
        )} action={(
          <Fragment>
          <FilterModal
            filter={filter}
            updateFilter={updateFilter}
            resetFilter={() => {
              setFilter({});
              setData(prev => ({ ...prev, filter: {} }));
            }}
            onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
          />
            <Tooltip title={t('pages.user-management.user_management_financial_transactions.downloadCSV')}>
              <IconButton color={'primary'} onClick={() => {
              }}>
                <IconFileDownload />
              </IconButton>
            </Tooltip>
          </Fragment>
        )}>
        <DataTable
          checkboxSelection={true}
          search={false}
          data={data}
          toolbar={false}
          getDetailPanelContent={({ id,row }) => <DetailCard id={id} row={row} />}
          getDetailPanelHeight={({ row }) => 'auto'} // Height based on the content.
        />
      </ParentCard>
    </Box>
  );
}

export default memo(Page);
