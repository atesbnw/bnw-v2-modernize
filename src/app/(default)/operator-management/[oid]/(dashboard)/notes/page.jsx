"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { t } from 'i18next';
import { Grid, Button } from '@mui/material';
import TitleBar from "@/app/components/TitleBar";
import NotesItem from "@/app/(default)/components/users/NotesItem";
import AddNewNote from "@/app/(default)/operator-management/[oid]/(dashboard)/notes/AddNewNote";
import SideDialog from "@/app/components/shared/SideDialog";

function Page() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TitleBar
        title={t('pages.operator-management.dashboard.Notes')}
        Right={() => (
          <Button onClick={() => setOpen(true)} variant="contained">
            {t('pages.operator-management.dashboard.Notes Page.createNewNote')}
          </Button>
        )}
      />
      <SideDialog
        open={open}
        permanent
        onClose={() => setOpen(false)}
        title={t('pages.operator-management.dashboard.Notes Page.createNewNote')}
        content={<AddNewNote />}
        actionButtons={<Button variant={"contained"}>{t('i.Save')}</Button>}
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <NotesItem
            operator="BNWmasteradmin"
            date="01/05/2021 17:55:00"
            content="Attention to this user, logging in from different IP addresses!"
            pinned={true}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <NotesItem
            operator="BNWadmin2"
            date="01/05/2021 17:55:00"
            content="Tried to withdraw 10,000₺ yesterday but we saw suspicious activity!"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <NotesItem
            operator="BNWoperator007"
            date="01/05/2021 17:55:00"
            content="New login and immediately deposited 20K."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <NotesItem
            operator="BNWoperator007"
            date="01/05/2021 17:55:00"
            content="New login and immediately deposited 20K."
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default memo(Page);
