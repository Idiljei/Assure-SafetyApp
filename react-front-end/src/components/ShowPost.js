import React from 'react';

const ShowPost = (props) => {

  console.log("this is props", props)
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <p>Location: {props.location}</p>
      <p>Description: {props.description}</p>
      <p>Posted by: {props.name}</p>
    </div>
  )
};

export default ShowPost;