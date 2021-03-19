import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Search from "./ForumSearch";
import postStyles from "./PostStyles";
import "./forum.css";

const CreatePost = (props) => {
  const classes = postStyles();
  const open = props.open;
  const close = props.close;

  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        maxWidth="md"
        fullWidth
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Report an Incident</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Help the Community Stay Safe
            {props.error ? <div>{props.error}</div> : null}
          </DialogContentText>

          <TextField
            autoFocus
            required
            id="standard-basic"
            label="Title"
            color="primary"
            margin="normal"
            fullWidth
            onChange={(e) => props.setTitle(e.target.value)}
          />

          <Search setAddress={props.setAddress} />

          <TextField
            id="datetime-local"
            type="datetime-local"
            label="Date"
            required
            className={classes.textField}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => props.setDate(e.target.value)}
          />

          <TextField
            className={classes.input}
            id="outlined-multiline-static"
            label="Incident Description"
            color="primary"
            multiline
            required
            rows={7}
            variant="outlined"
            onChange={(e) => props.setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.onSubmitForm} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreatePost;
