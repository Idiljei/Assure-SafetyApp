import React, { useState } from 'react';
import Post from './Posts'
import ShowPost from './ShowPost'

const posted = {
  title: "Theft at save ons",
  name: "Rachel Green",
  location: "home",
  description: "theft"
}

const Forum = () => {
  const [selected, setSelected] = useState(false);

  console.log("THIS IS selected:", selected)

  return (  
  <div>
    <Post />

    <ShowPost
      title={posted.title}
      name={posted.name}
      location={posted.location}
      description={posted.description}
      />

  </div>
  );
};

export default Forum;