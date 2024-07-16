'use client';
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import {t} from "i18next";
import { IconEdit, IconPin } from '@tabler/icons-react';

function NotesItem({ operator, date, content, pinned }) {
  return (
    <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'light.main' }}>
        <IconButton>
          <IconEdit />
        </IconButton>
        {pinned && (
          <IconButton>
            <IconPin />
          </IconButton>
        )}
      </Box>
      <CardContent sx={{p:2}}>
        <Typography variant="h5" sx={{mb:3}}>{content}</Typography>
        <Box sx={{mb:1}}>
          <Typography variant="body2" sx={{fontWeight:'bold'}}>{t('menu.Users.Notes Page.noteAddedBy')}: </Typography>
          {operator}
        </Box>
        <Box sx={{mb:1}}>
          <Typography variant="body2" sx={{fontWeight:'bold'}}>{t('menu.Users.Notes Page.dateAdded')}: </Typography>
          {date}
        </Box>
      </CardContent>
    </Card>
  );
}

export default memo(NotesItem);
