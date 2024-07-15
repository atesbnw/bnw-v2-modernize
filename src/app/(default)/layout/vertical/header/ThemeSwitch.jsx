"use client";
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import {IconSun, IconMoon} from "@tabler/icons-react";
import { setDarkMode, setTheme } from '@/store/customizer/CustomizerSlice';

function ThemeSwitch() {
  const customizer = useSelector((state) => state.customizer);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setDarkMode(customizer?.activeMode==="light" ? 'dark' : 'light'))
    dispatch(setTheme(customizer?.activeMode!=="light" ? 'BLUE_THEME' : 'AQUA_THEME'))
  }, [customizer]);

  return (
    <IconButton
      aria-label="more"
      id="long-button"
      aria-controls={open ? "long-menu" : undefined}
      aria-expanded={open ? "true" : undefined}
      aria-haspopup="true"
      onClick={handleClick}
    >
      {customizer?.activeMode!=="light" ? <IconSun /> : <IconMoon />}
    </IconButton>
  );
}

export default memo(ThemeSwitch);
