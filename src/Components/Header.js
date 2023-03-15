import React from "react";
import { HeaderContent } from "./HeaderContent";
import { Profile } from "./Profile";

export const Header = () => {
  return (
    <div className="header">
      <Profile />
      <HeaderContent />
    </div>
  );
};
