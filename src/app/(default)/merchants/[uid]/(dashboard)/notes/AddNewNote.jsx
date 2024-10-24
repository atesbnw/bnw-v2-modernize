"use client";
import React, { memo, useState } from 'react';
import TextField from '@mui/material/TextField';

function AddNewNote() {
  return (
    <div>
      <TextField
        multiline
        rows={5}
        // value={title}
        // onChange={(e) => setTitle(e.target.value)}
        margin="normal"
        id="description"
        label="Add Note Description"
        type="text"
        fullWidth
        size="small"
        variant="outlined"
      />
    </div>
  );
}

export default memo(AddNewNote);
