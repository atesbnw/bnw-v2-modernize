"use client";
import React, { memo, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import { DataGridPro, GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useTheme } from '@mui/material/styles';

  const CustomToolbar = memo(function CustomToolbarComponent(){
    return (
      <GridToolbarContainer>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    )
  });

  function DataTable({
     data = [],
     paginationMode = "client" || "server",
     onFilterChange = () => {},
     rowOrderChange = () => {},
     checkboxSelection = false,
     toolbar = true,
     rowReordering = false,
     loading
  }) {
  // const { data: demoData } = useDemoData({
  //   dataSet: 'Employee',
  //   rowLength: 10,
  //   editable: true,
  // });

  const theme = useTheme();

  return (
    <Box sx={{  maxWidth: "100%" }}>
      <DataGridPro
        // sx={{
        //   flex: 1
        // }}
        sx={{
          borderColor: 'grey.300',
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
            borderColor: 'grey.300',
            // py: 1,
          },
          '& .MuiDataGrid-columnHeaders': {
            borderColor: 'grey.300',
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: theme.palette.mode === 'dark' ? '#1b222c' : 'grey.50',
            borderRight: '1px solid',
            borderColor: 'grey.300',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold !important',
            overflow: 'visible !important',
          },
        }}
        rows={data?.rows || []}
        columns={data?.columns || []}
        getRowHeight={() => 'auto'}
        pagination={true}
        autoPageSize={false}
        loading={loading}
        rowHeight={38}
        slots={{
          toolbar: () => toolbar && <CustomToolbar />
        }}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
        disableColumnSelector
        paginationMode={paginationMode}
        filterMode={paginationMode}
        rowReordering={rowReordering}
        onRowOrderChange={rowOrderChange}
        onFilterChange={(paginationMode==="server" && typeof onFilterChange === "function") ? onFilterChange : null}
        initialState={{
          pagination: {
            rowCount: data?.totalData || data?.rows?.length || 0,
            paginationModel: {
              page: data?.page || 1,
              pageSize: data?.pageSize || 25,
            }
          },
        }}
      />
    </Box>
  );
}

export default memo(DataTable);
