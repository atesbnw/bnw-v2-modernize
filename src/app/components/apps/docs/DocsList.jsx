import React, {Fragment, useEffect, useState} from 'react';
import DocsListItem from './DocsListItem';
import Grid from '@mui/material/Grid';

import Scrollbar from '../../../components/custom-scroll/Scrollbar';

const DocsList = () => {

  return (
    <Fragment>
      <Scrollbar
        sx={{
          width: '100%',
          height: { lg: 'calc(100vh - 100px)', md: '100vh' },
          maxHeight: '800px',
        }}
      >
        <Grid container spacing={2} sx={{p:2}}>
          <DocsListItem
            title="Pasaport"
            img="https://via.placeholder.com/300x200"
            uploadDate="13 June 2020"
            uploadedBy="User"
            note="No ID card provided, so the driver's license was submitted."
            status="approved"
          />
          <DocsListItem
            title="Driving Licence"
            img="https://via.placeholder.com/300x200"
            uploadDate="13 June 2020"
            uploadedBy="User"
            note="No ID card provided, so the driver's license was submitted."
            status=""
          />
        </Grid>
      </Scrollbar>
    </Fragment>
  );
};

export default DocsList;
