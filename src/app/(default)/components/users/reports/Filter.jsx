import React, {Fragment} from 'react';
import TimeTabsNoChildren from "@/app/components/shared/TimeTabsNoChildren";
import Grid from "@mui/material/Grid";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import {t} from "i18next";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomOutlinedInput from "@/app/components/forms/theme-elements/CustomOutlinedInput";
import {Button, InputAdornment, Link} from "@mui/material";

function Filter({children}) {
  return (
    <Fragment>
      <TimeTabsNoChildren justify={'between'}/>

      <Grid container spacing={2} alignItems="end">
        <Grid item xs={12} lg={10}>
          {children}
        </Grid>
        <Grid xs={12} lg={2} container item direction="column" justifyContent="flex-end" alignItems="flex-end" >
          <Link className={"mb-2 text-sm"}>{t('Reset Search')}</Link>
          <Button variant="contained">{t('Search')}</Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Filter;