import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DeleteButton() {

  return (
    <div>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
