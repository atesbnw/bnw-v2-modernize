"use client";
import React, { memo, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import { DataGridPro, GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

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
                     toolbar = true,
                     loading
}) {
  // const { data: demoData } = useDemoData({
  //   dataSet: 'Employee',
  //   rowLength: 10,
  //   editable: true,
  // });

  return (
    <Box sx={{  maxWidth: "100%" }}>
      <DataGridPro
        // sx={{
        //   flex: 1
        // }}
        rows={data?.rows || []}
        columns={data?.columns || []}
        pagination={true}
        autoPageSize={false}
        loading={loading}
        rowHeight={38}
        slots={{
          toolbar: () => toolbar && <CustomToolbar />
        }}
        checkboxSelection={false}
        disableRowSelectionOnClick
        disableColumnSelector
        paginationMode={paginationMode}
        filterMode={paginationMode}
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
