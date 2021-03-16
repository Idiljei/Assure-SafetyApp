import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

export default function EditDeleteButton() {

  return (
    <div>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </ButtonGroup>
    </div>
  );
}
