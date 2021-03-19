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
  mapBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: '50%',
    paddingLeft: '3%'
  },
  homeButton: {
    background: 'linear-gradient(45deg, #63639F, #a6a6e0)',
    border: 0,
    color: 'white',
    width: "20em",
    height: "10em",
  },
  findButton: {
    margin: "2rem",
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
  }
});

export default useStyles;
