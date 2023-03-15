import React from "react";
import { useData } from "./../Context";

export const Profile = () => {
  const { dataState = {} } = useData();
  const { userData = {} } = dataState;
  const { name, userImage } = userData;
  return (
    <div className="profileContainer">
      <img className="userImage" src={userImage} alt="dummy User" />
      <p className="userName">{name}</p>
    </div>
  );
};
