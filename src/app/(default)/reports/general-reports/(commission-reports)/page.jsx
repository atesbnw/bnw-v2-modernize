"use client";
import React, { memo } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";

function Page() {
  return (
    <div>
      <TitleBar title={t("Reports.Commission Reports")} />
    </div>
  );
}

export default memo(Page);
