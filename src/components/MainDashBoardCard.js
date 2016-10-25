import React from 'react';
import { Link } from 'react-router';

const MainDashBoardCard = (state) => {
  return (
    <div>
      <Link to="/detailedpin" className="pinnedRestuarant">
        <h3>Restaurant Name</h3>
        <p>short description</p>
      </Link>
      <Link to="/detailedpin" className="pinnedHike">
        <h3>Trail Name</h3>
        <p>short description</p>
      </Link>
    </div>
  );
};

export default MainDashBoardCard;
