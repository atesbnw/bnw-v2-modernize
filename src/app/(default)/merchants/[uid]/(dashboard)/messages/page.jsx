"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { t } from 'i18next';
import {Button} from "@mui/material";
import TitleBar from "@/app/components/TitleBar";
import SideDialog from "@/app/components/shared/SideDialog";
import AddNewMessage from "@/app/(default)/users/[uid]/(dashboard)/messages/AddNewMessage";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MessagesFilter from "@/app/components/apps/messages/MessagesFilter";
import MessagesSearch from "@/app/components/apps/messages/MessagesSearch";
import MessagesList from "@/app/components/apps/messages/MessagesList";
import MessagesContent from "@/app/components/apps/messages/MessagesContent";
import AppCard from "@/app/components/shared/AppCard";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;
const secdrawerWidth = 340;

function Page() {
  const [open, setOpen] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));


  return (
    <Fragment>

      <TitleBar
        title={t('pages.merchants.dashboard.Messages')}
        Right={() => (
          <Button onClick={() => setOpen(true)} variant="contained">
            {t('pages.merchants.dashboard.Messages Page.createNewMessage')}
          </Button>
        )}
      />
      <SideDialog
        open={open}
        permanent
        onClose={() => setOpen(false)}
        title={t('pages.merchants.dashboard.Messages Page.createNewMessage')}
        content={<AddNewMessage />}
        actionButtons={<Button variant={"contained"}>{t('i.Save')}</Button>}
      />

      <AppCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}

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
          <MessagesFilter />
        </Drawer>

        {/* ------------------------------------------- */}
        {/* Middle part */}
        {/* ------------------------------------------- */}

        <Box
          sx={{
            minWidth: secdrawerWidth,
            width: { xs: '100%', md: secdrawerWidth, lg: secdrawerWidth },
            flexShrink: 0,
          }}
        >
          <MessagesSearch onClick={() => setLeftSidebarOpen(true)} />

          <MessagesList showrightSidebar={() => setRightSidebarOpen(true)} />
        </Box>

        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}

        {mdUp ? (
          <Drawer
            anchor="right"
            variant="permanent"
            sx={{
              zIndex: 0,
              width: '200px',
              flex: '1 1 auto',
              [`& .MuiDrawer-paper`]: { position: 'relative' },
            }}
          >
            <Box>
              <MessagesContent />
            </Box>
          </Drawer>
        ) : (
          <Drawer
            anchor="right"
            open={isRightSidebarOpen}
            onClose={() => setRightSidebarOpen(false)}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: '85%' },
            }}
            variant="temporary"
          >
            <Box p={3}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => setRightSidebarOpen(false)}
                sx={{ mb: 3, display: { xs: 'block', md: 'none', lg: 'none' } }}
              >
                {' '}
                Back{' '}
              </Button>
              <MessagesContent />
            </Box>
          </Drawer>
        )}
      </AppCard>


    </Fragment>
  );
}

export default memo(Page);
