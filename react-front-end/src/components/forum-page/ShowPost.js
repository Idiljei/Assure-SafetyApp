import React from 'react';

const ShowPost = (props) => {

  console.log("this is props", props)
  return (
    <div>
      <h4>Title: {props.title}</h4>
      <p>Location: {props.location}</p>
      <p>Description: {props.description}</p>
      <p>Posted by: {props.name}</p>
    </div>
  )
};

export default ShowPost;