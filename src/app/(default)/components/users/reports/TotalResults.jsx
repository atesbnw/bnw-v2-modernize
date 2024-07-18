import React, {Fragment} from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {t} from "i18next";

function TotalResults(props) {
  return (
    <Fragment>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs="auto">
          <Typography variant="h4">{props.title}</Typography>
        </Grid>
        {props.data.map((item, index) => (
          <Grid item xs="auto" key={index}>
            <Typography variant="subtitle1">{item.title}</Typography>
            <Typography variant="body1" className={"font-bold"}>{item.value}</Typography>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

export default TotalResults;