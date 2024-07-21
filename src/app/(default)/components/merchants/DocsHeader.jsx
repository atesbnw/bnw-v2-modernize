import React, {Fragment} from 'react';
import {Box, Checkbox, FormControl, FormControlLabel, IconButton, Input, InputAdornment} from "@mui/material";
import {Cancel, CheckCircle, Delete, LocalOffer, Search} from "@mui/icons-material";
import {t} from "i18next";
import CustomCheckbox from "@/app/components/forms/theme-elements/CustomCheckbox";

function DocsHeader(props) {
  return (
    <Fragment >
      <FormControl fullWidth>
        <Input
          variant="standard"
          sx={{height:'2.5rem', px:2}}
          type="search"
          startAdornment={<InputAdornment position="start"><Search /></InputAdornment>}
        />
      </FormControl>

      <Box sx={{px:2,py:1, borderRadius:0, backgroundColor: (theme) => theme.palette.grey[100]}} display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" justifyContent="flex-end">
          <FormControlLabel
            control={<CustomCheckbox />}
            label={t('i.Select All')}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <IconButton size="medium"><LocalOffer fontSize="sm" /></IconButton>
          <IconButton size="medium"><CheckCircle fontSize="sm" /></IconButton>
          <IconButton size="medium"><Cancel fontSize="sm" /></IconButton>
          <IconButton size="medium"><Delete fontSize="sm" /></IconButton>
        </Box>
      </Box>
    </Fragment>
  );
}

export default DocsHeader;