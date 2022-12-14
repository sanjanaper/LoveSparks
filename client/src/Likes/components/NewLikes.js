import React from 'react';

import ProfileBox from './ProfileBox.js';

const NewLikes = (props) => {
  const { newLikers } = props;
  let display;
  switch (newLikers.length) {
    case 0:
      display = <div className="no-likes">You have no new likes !</div>;
      break;
    default:
      display = newLikers.map((profile) => {
        const { _id } = profile;
        const indivKey = `new_likes_${_id}`;
        return (
          <div className="profile-box" key={indivKey}>
            <ProfileBox profile={profile} />
          </div>
        );
      });
  }

  return (
    <div>
      <h2 className="title-likes">New likes received</h2>
      <div className="all-likes">
        {display}
      </div>
    </div>
  );
};

export default NewLikes;
