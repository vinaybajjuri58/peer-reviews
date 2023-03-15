import React from "react";
import { useData } from "./../Context";

export const HeaderContent = () => {
  const { dataState = {} } = useData();
  const { userData = {} } = dataState;
  const { myRewards, given } = userData;
  return (
    <div className="headerContent">
      <div className="headerContentChild">
        <p>My Rewards</p>
        <p>${myRewards}</p>
      </div>
      <div className="headerContentChild">
        <p>Give</p>
        <p>${given}</p>
      </div>
    </div>
  );
};
