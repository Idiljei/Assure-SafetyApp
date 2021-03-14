import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ 
  homeBox: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  mapBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  homeButton: {
    background: 'linear-gradient(45deg, #63639F, #63639F)',
    border: 0,
    color: 'white',
    height: 60,
    padding: '40px',
    margin: '100px'
  },
  locateButton: {
    background: 'linear-gradient(45deg, #63639F, #63639F)',
    border: 0,
    color: 'white',
    padding: '8px',
    width: '10%',
    margin: '8px'
  }    
});

export default useStyles;
