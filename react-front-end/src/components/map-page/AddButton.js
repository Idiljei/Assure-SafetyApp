import React from 'react';
import { Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddButton = (props) => {
  return (
    <>
    <Tooltip title="Create Post" aria-label="add" arrow>
      <Fab
        onClick={() => props.setNewPost(true)}
        color="primary"
        aria-label="Create Post"
      >
        <AddIcon />
      </Fab>
    </Tooltip>
    </>
  )

};

export default AddButton;