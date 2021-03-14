import { makeStyles } from "@material-ui/core/styles";

const postStyles = makeStyles({ 
  createPost: {
    justifyContent: "center",
  },
  submitButton: {
    background: 'linear-gradient(45deg, #6190E8, #A7BFE8)',
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
  }
});

export default postStyles;