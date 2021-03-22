import React from "react";
import { Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from '@material-ui/core/styles';
import "./forum.css";

const useStyles = makeStyles({
  add: {
    paddingLeft: "1em"
  }
})

const AddButton = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.add}>
      <Tooltip title="Create Post" aria-label="add" arrow>
        <Fab
          onClick={() => props.setNewPost(true)}
          color="primary"
          aria-label="Create Post"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default AddButton;