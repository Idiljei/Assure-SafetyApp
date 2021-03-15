import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import ContactsTwoToneIcon from '@material-ui/icons/ContactsTwoTone';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  bar: {
    background: 'linear-gradient(45deg, #63639F, #a6a6e0)'
  }
});

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className={classes.bar} 
          value={value} 
          onChange={handleChange} 
          aria-label="simple tabs example"
          centered
          >
          <Tab label="User Information" {...a11yProps(0)} />
          <Tab label="Safety Network" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <h4>Phone: {props.number}</h4>
          <h4>Date of Birth: {props.dob}</h4>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <section class="profile-container"> 
          <p class="contacts">
            <ContactsTwoToneIcon>ContactsTwoToneIcon</ContactsTwoToneIcon> Mom <br></br>123-456-7890  
          </p>
          <p class="contacts">
            <ContactsTwoToneIcon>ContactsTwoToneIcon</ContactsTwoToneIcon> Sister <br></br> 345-678-9012
          </p>
          <p class="contacts">
            <ContactsTwoToneIcon>ContactsTwoToneIcon</ContactsTwoToneIcon> Boothang <br></br> 234-567-8901
          </p>
        </section>
      </TabPanel>
    </div>
  );
}
