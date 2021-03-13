import React, {useState} from 'react';
import { Button, TextField } from '@material-ui/core';

const Post = () => {
  const [name, setName] = useState("Rachel");

  return (
    <section>
      <form noValidate autoComplete="off">
        <TextField id="standard-secondary" label="Name" color="primary" variant="outlined" />
        <TextField id="standard-secondary" label="Location" color="primary" variant="outlined"/>
        <TextField id="standard-secondary" label="Description" color="primary" variant="outlined"/>
      </form>
      <Button size="large" variant="contained">
        Submit
      </Button>
    </section>
  );
};

export default Post;