import React from 'react';
import CreatePost from './CreatePosts'
import ShowPost from './ShowPost';

const savedPosts = {
  title: "Theft at Restaurant",
  name: "Monica Geller",
  location: "Vancouver",
  description: "Someone stole something"
}

const Forum = () => {
  return (  
  <div>
    <ShowPost title={savedPosts.title} name={savedPosts.name} location={savedPosts.location} description={savedPosts.description}/>

    <CreatePost />
  </div>
  );
};

export default Forum;