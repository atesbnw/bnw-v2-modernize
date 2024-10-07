import React, {Fragment, memo} from 'react';
import { Stack } from "@mui/material";
import {
  IconBuildingStore,
  IconCheck,
  IconCircle,
  IconHeart,
  IconLock,
  IconPlayerPause,
  IconStar, IconUserCheck
} from "@tabler/icons-react";
import {t} from "i18next";

function MerchantIcons({children}) {
  return (
    <Fragment>
      <Stack direction="row" spacing={1}>
        <div className={"flex h-7 w-7 items-center justify-center rounded-full bg-orange-500"}>
          <IconPlayerPause size={16} color="white" />
        </div>
        <div className={"flex h-7 w-7 items-center justify-center rounded-full bg-green-500"}>
          <IconCircle size={16} color="white"/>
        </div>
        <div className={"flex h-7 w-7 items-center justify-center rounded-full bg-black"}>
          <IconLock size={16} color="white"/>
        </div>
        <div className={"flex h-7 w-7 items-center justify-center rounded-full bg-green-500"}>
          <IconCheck size={16} color="white"/>
        </div>
        <div className={"flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400"}>
          <IconStar size={16} color="white"/>
        </div>
        <div className={"flex h-7 w-7 items-center justify-center rounded-full bg-black"}>
          <IconBuildingStore size={16} color="white"/>
        </div>
        <div className={"flex h-7 w-7 items-center justify-center rounded-full bg-red-600"}>
          <IconHeart size={16} color="white"/>
        </div>
        <div className={"flex h-7 w-7 items-center justify-center rounded-full bg-blue-600"}>
          <IconUserCheck size={16} color="white"/>
        </div>
      </Stack>
    </Fragment>
  );
}

export default memo(MerchantIcons);