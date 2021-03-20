import React from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel
} from "@material-ui/core";
import Search from "./ForumSearch";
import postStyles from "./PostStyles";
import "./forum.css";

const CreatePost = (props) => {
  const classes = postStyles();
  const open = props.open;
  const close = props.close;

  const handleChange = (e) => {
    props.setType(e.target.value);
  };

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

          <FormControl component="fieldset">
            <FormLabel component="legend">Select an Incident Type</FormLabel>
            <RadioGroup aria-label="type" value={props.type} onChange={handleChange} >
              <Box display="flex" flexWrap="wrap">
              <FormControlLabel value="Theft" control={<Radio />} label="Theft" />
              <FormControlLabel value="Assault" control={<Radio />} label="Assault" />
              <FormControlLabel value="Home Invasion" control={<Radio />} label="Home Invasion" />
              <FormControlLabel value="Homicide" control={<Radio />} label="Homicide" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </Box>
            </RadioGroup>
          </FormControl>

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
