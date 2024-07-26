'use client';
import React, { memo, useState, useCallback } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { DataGridPro, GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useTheme } from '@mui/material/styles';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const CustomToolbar = memo(function CustomToolbarComponent() {
  return (
    <GridToolbarContainer>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
});

<<<<<<< Updated upstream
function DataTable({
                     data = [],
                     paginationMode = 'client' || 'server',
                     onFilterChange = () => {
                     },
                     rowOrderChange = () => {
                     },
                     checkboxSelection = false,
                     toolbar = true,
                     rowReordering = false,
                     withSideMenu = true,
                     loading,
                   }) {
=======
  function DataTable({
     data = [],
     paginationMode = "client" || "server",
     onFilterChange = () => {},
     rowOrderChange = () => {},
     checkboxSelection = false,
     toolbar = true,
     rowReordering = false,
     withSideMenu = true,
     loading
  }) {
>>>>>>> Stashed changes
  // const { data: demoData } = useDemoData({
  //   dataSet: 'Employee',
  //   rowLength: 10,
  //   editable: true,
  // });

  const customizer = useSelector((state) => state.customizer);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%' }} className={classNames('data-table-container', {
      'w-side': withSideMenu,
      "w-wide": customizer.isCollapse,
    })}>
      <DataGridPro
        // sx={{
        //   flex: 1
        // }}
        sx={{
          borderColor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          '& .MuiDataGrid-cell.centerAll': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '& .MuiDataGrid-cell.centerVertical': {
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiDataGrid-cell': {
            minHeight: 40,
            display: 'flex',
            alignItems: 'center',
            borderRight: '1px solid',
            borderColor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            // py: 1,
          },
          // '& .MuiDataGrid-iconSeparator': {
          //   display: 'none',
          // },
          '& .MuiDataGrid-columnHeaders': {
            borderColor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: theme.palette.mode === 'dark' ? '#1b222c' : 'grey.50',
            borderRight: '1px solid',
            borderColor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold !important',
            overflow: 'visible !important',
          },
        }}
        disableExtendRowFullWidth={!isSmallScreen}
        rows={data?.rows || []}
        columns={data?.columns || []}
        getRowHeight={() => 'auto'}
        pagination={true}
        autoPageSize={false}
        loading={loading}
        rowHeight={38}
        slots={{
          toolbar: () => toolbar && <CustomToolbar />,
        }}
        checkboxSelection={checkboxSelection}
        disableColumnResize={false}
        disableRowSelectionOnClick
        disableColumnSelector
        paginationMode={paginationMode}
        filterMode={paginationMode}
        rowReordering={rowReordering}
        onRowOrderChange={rowOrderChange}
        onFilterChange={(paginationMode === 'server' && typeof onFilterChange === 'function') ? onFilterChange : null}
        initialState={{
          pagination: {
            rowCount: data?.totalData || data?.rows?.length || 0,
            paginationModel: {
              page: data?.page || 1,
              pageSize: data?.pageSize || 25,
            },
          },
        }}
      />
    </Box>
  );
}

export default memo(DataTable);
