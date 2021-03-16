import { makeStyles } from "@material-ui/core/styles";

const postStyles = makeStyles((theme) => ({ 
  createPost: {
    justifyContent: "center",
  },
  submitButton: {
    background: 'linear-gradient(45deg, #63639F, #63639F)',
    color: 'white',
    width: '100%',
    marginTop: '10px',
  },
  background: {
    justifyContent: "center",
    padding: "50px"
  },
  postBox: {
    width: "100%"
  },
  forumPaper: {
    margin: "2em"
  },
  filterButton: {
    margin: '1em'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#ffff',
  },
}));

export default postStyles;