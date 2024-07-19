import React, { memo, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {IconChevronRight} from "@tabler/icons-react";
import Stack from "@mui/material/Stack";
import {t} from "i18next";
import Link from "next/link";

function TitleBar({ LeftImage, subTitle, link, Left, title, Right }) {
  return (
    <Box
      fullWidth
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        width: 100 +"%",
        alignItems: "center",
        gap:1,
        mb:3
      }}>
      {LeftImage && (
        <Box sx={{alignItems:"center"}}>
          <Stack direction={"row"} className={"gap-1 items-center"}>
            <Box className={"flex flex-row gap-2  items-center mr-4"}>
              <img
                src={LeftImage}
                className={"h-20 aspect-square object-contain bg-white rounded-xl p-1"}
              />
            </Box>
          </Stack>
        </Box>
      )}
      {Left && (
        <Box sx={{alignItems:"center"}}>
          <Left />
        </Box>
      )}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h2" component="div" className={"flex gap-2 items-center"}>
          {link ?
            (
              <Link href={link} color="">
                <Typography variant="h2" component="div" color="text.primary">
                  {title}
                </Typography>
              </Link>
            )
            : title || '' }


          {subTitle && (
            <>
              <IconChevronRight/> {subTitle}
            </>
          )}
        </Typography>
      </Box>
      {Right && (
        <Box sx={{
          alignItems:"center"
        }}>
          <Right />
        </Box>
      )}
    </Box>
  );
}

export default memo(TitleBar);
