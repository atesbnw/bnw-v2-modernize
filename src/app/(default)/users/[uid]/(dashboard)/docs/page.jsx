"use client";
import React, { memo, useState, useCallback, useMemo } from 'react';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import TitleBar from '@/app/components/TitleBar';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import AddDocumentModal from '@/app/(default)/users/[uid]/(dashboard)/docs/AddDocumentModal';

function Page() {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      {/*<Typography variant="h6" component="div">{t('menu.Users.Financial Transactions')}</Typography>*/}
      <TitleBar
        title={t('menu.Users.Documents')}
        Right={() => (
          <Button onClick={() => setOpen(true)}>
            Yeni Belge Ekle
          </Button>
        )}
      />


      <SideDialog
        open={open}
        onClose={() => setOpen(false)}
        title={"Yeni belge ekle"}
        content={<AddDocumentModal />}
        actionButtons={<Button variant={"contained"}>Kaydet</Button>}
      />

    </Box>
  );
}

export default memo(Page);
