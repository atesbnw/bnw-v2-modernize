import React, { memo, useState, useCallback } from 'react';
import {
  useCasinoCategoryManagement
} from '@/app/(default)/game-management/category-management/useCasinoCategoryManagement';
import DataTable from '@/app/components/shared/DataTable';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import FilterModal from '@/app/(default)/components/game-management/category-management/FilterModal';
import { IconFileDownload } from '@tabler/icons-react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {t} from "i18next";
import ActionModal from '@/app/(default)/components/game-management/category-management/ActionModal';

function LiveCasinoTab() {
  const [filter, setFilter] = useState({});
  const [open, setOpen] = useState({});
  const {data,setData} = useCasinoCategoryManagement({
    onChange: e => {
      // setOpen(e)
      console.log(e)
    }
  });

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  return (
    <Box>
      <Stack direction={'row'} justifyContent={'end'} className={'pb-4'}>


        <Tooltip title={t('pages.user-management.user_management_financial_transactions.downloadCSV')}>
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


        <ActionModal
          data={{}}
        />
      </Stack>



      <DataTable
        checkboxSelection={false}
        search={false}
        data={data}
        toolbar={false}
        rowReordering={true}
      />
    </Box>
  );
}

export default memo(LiveCasinoTab);
