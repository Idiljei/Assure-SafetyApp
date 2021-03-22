import { makeStyles } from "@material-ui/core/styles";

const postStyles = makeStyles((theme) => ({
  createPost: {
    justifyContent: "center",
  },
  submitButton: {
    background: "linear-gradient(45deg, #63639F, #63639F)",
    color: "white",
    width: "100%",
    marginTop: "15%",
  },
  background: {
    justifyContent: "center",
    borderRadius: "3%",
    padding: "6em 4em",
    paddingRight: "2em",
    marginBottom: "19%",
  },
  filterButton: {
    display: "flex",
    alignItems: "center",
  },
  hover: {
    padding: "2em",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#faf7ff",
    },
  },
  input: {
    width: "100%",
    marginTop: "2em",
    color: "#63639f !important",
    borderColor: "#63639f !important",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginTop: "1.3em",
    width: "96%",
    color: "#63639f !important",
  },
  time: {
    zIndex: 6,
    position: "absolute",
  },
}));

export default postStyles;
