import React from 'react';
import ContactsTwoToneIcon from '@material-ui/icons/ContactsTwoTone';
import './profileStyles.css'

const Profile = () => {
  return (
    <div class="profile-box">
      <div class="profile-img">
        <img src="pheebs.png" alt="profile"/>
      </div>
      
      <section class="profile-container">
        <p>Name: Pheobe Buffay</p>
        <p>Phone: 555-5555</p>
        <p>D.O.B:</p>
      </section>

      <section profile-container>
        <h1 class= "profile-container"> Safety Network</h1>
      </section>

      <section class="profile-container"> 
        <p class="contacts">
          <ContactsTwoToneIcon>ContactsTwoToneIcon</ContactsTwoToneIcon> Mom <br></br>123-456-7890  
        </p>
        <p class="contacts">
          <ContactsTwoToneIcon>ContactsTwoToneIcon</ContactsTwoToneIcon> Sister <br></br> 345-678-9012
        </p>
        <p class="contacts">
          <ContactsTwoToneIcon>ContactsTwoToneIcon</ContactsTwoToneIcon> Boothang <br></br> 234-567-8901
        </p>
      </section>
    </div>
  );
};

export default Profile;