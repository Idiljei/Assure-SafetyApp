import React from 'react';

const Post = (props) => {
  return (
    <div>
      <h4>Title: {props.title}</h4>
      <p>Location: {props.location}</p>
      <p>Description: {props.description}</p>
      <p>Posted by: {props.user}</p>
    </div>
  )
};

export default Post;