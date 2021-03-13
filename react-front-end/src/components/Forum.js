import React, { useState } from 'react';
import Post from './Posts'
import ShowPost from './ShowPost'

const Forum = () => {
  const [selected, setSelected] = useState(false);

  return (  
  <div>
    <Post />
  </div>
  );
};

export default Forum;