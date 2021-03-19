import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ 
  homeBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#63639f",
    height: "fit-content",
    paddingBottom: "7em"
  },
  homeButton: {
    background: 'linear-gradient(45deg, #63639F, #a6a6e0)',
    border: 0,
    color: 'white',
    width: "20em",
    height: "10em",
  },
  mapBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.8em"
  },
  findButton: {
    padding: 0
  },
  alert: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "30em",
    height: "30em"
  },
  home: {
    display: "flex"
  },
  contacts: {
    height: "22em",
    backgroundColor: "white"
  }
});

export default useStyles;
