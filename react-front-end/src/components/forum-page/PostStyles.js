import { makeStyles } from "@material-ui/core/styles";

const postStyles = makeStyles((theme) => ({ 
  createPost: {
    justifyContent: "center"
  },
  submitButton: {
    background: 'linear-gradient(45deg, #63639F, #63639F)',
    color: 'white',
    width: '100%',
    marginTop: '15%',
  },
  background: {
    justifyContent: "center",
    borderRadius: '3%',
    padding: "6em 4em",
    paddingRight: "2em",
    marginBottom: "19%"
  },
  postBox: {
    width: "100%"
  },
  filterButton: {
    margin: '1em'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#ffff',
  },
  input: {
    width: '100%',
    marginTop: '2em',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginTop: '1.3em',
    width: '96%',
  }
}));

export default postStyles;