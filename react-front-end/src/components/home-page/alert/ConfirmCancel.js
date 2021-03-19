import React, { useState } from 'react';
import { Paper, Dialog, DialogActions, DialogContent, TextField, Button, DialogTitle } from '@material-ui/core';
import EnterPin from './EnterPin';
import SafeNow from './SafeNow';
import WrongPin from './WrongPin';

const ConfirmCancel = (props) => {
  const option = props.option;
  const setOption = props.setOption;

  return (
    <Dialog open={option > 1} aria-labelledby="form-dialog-title">
      
      { option === 2 ? <EnterPin option={option} setOption={setOption} /> : null }

      { option === 3 ? <SafeNow id={props.id} option={option} setOption={setOption} /> : null }

      { option === 4 ? <WrongPin id={props.id} option={option} setOption={setOption} /> : null}

    </Dialog>
  )
};

export default ConfirmCancel;