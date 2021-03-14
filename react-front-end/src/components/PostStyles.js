import { makeStyles } from "@material-ui/core/styles";

const postStyles = makeStyles({ 
  createPost: {
    justifyContent: "center",
    minHeight: "80vh"
  },
  submitButton: {
    background: 'linear-gradient(45deg, #6190E8, #A7BFE8)',
    color: 'white',
    width: '100%',
    marginTop: '10px',
  },
  background: {
    justifyContent: "center",
    minHeight: "30vh",
    padding: "50px"
  },
  forum: {
    justifyContent: "center",
    border: "solid black",
    marginTop: '10px'
  }
});

export default postStyles;