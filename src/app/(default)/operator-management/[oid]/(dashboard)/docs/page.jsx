"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { t } from 'i18next';
import TitleBar from '@/app/components/TitleBar';
import SideDialog from '@/app/components/shared/SideDialog';
import AddDocumentModal from '@/app/(default)/users/[uid]/(dashboard)/docs/AddDocumentModal';
import DocsFilter from "@/app/components/apps/docs/DocsFilter";
import DocsList from "@/app/components/apps/docs/DocsList";
import AppCard from "@/app/components/shared/AppCard";
import { Drawer, Box, Button, useMediaQuery} from '@mui/material';
import DocsHeader from "@/app/(default)/components/users/DocsHeader";

const drawerWidth = 240;

function Page() {
  const [open, setOpen] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Fragment>
      <TitleBar
        title={t('pages.operator-management.dashboard.Documents')}
        Right={() => (
          <Button onClick={() => setOpen(true)}>
            {t('pages.operator-management.dashboard.Docs Page.addNewDocument')}
          </Button>
        )}
      />
      <SideDialog
        open={open}
        onClose={() => setOpen(false)}
        title={t('pages.operator-management.dashboard.Docs Page.addNewDocument')}
        content={<AddDocumentModal />}
        actionButtons={<Button variant={"contained"}>{t('i.Add')}</Button>}
      />

      <AppCard>

        <Drawer
          open={isLeftSidebarOpen}
          onClose={() => setLeftSidebarOpen(false)}
          sx={{
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              position: 'relative',
              zIndex: 2,
            },
            flexShrink: 0,
          }}
          variant={lgUp ? 'permanent' : 'temporary'}
        >
          <DocsFilter />
        </Drawer>

        <Box sx={{width:'100%'}}>

          <DocsHeader/>

          <DocsList />
        </Box>

      </AppCard>

    </Fragment>
  );
}

export default memo(Page);
