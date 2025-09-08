import React from "react";
import Profile from "../../components/Profile/UserProfile";
import ProfilePageData from '../../../../data/profile/profilepageData';
import Landing from '../../components/subTopic/Landing'
function ProfilePage() {
  return (
    <div>
      <Landing Landing={ProfilePageData.LandingContent} />
      <Profile />
    </div>
  );
}

export default ProfilePage;
