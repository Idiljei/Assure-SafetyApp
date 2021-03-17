import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ 
  homeBox: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    height: '100%'
  },
  mapBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  homeButton: {
    background: 'linear-gradient(45deg, #63639F, #a6a6e0)',
    border: 0,
    color: 'white',
    height: '100%',
    padding: '2em',
    margin: '3em 1em',
  },
  findButton: {
    margin: "2rem",
  }
});

export default useStyles;
