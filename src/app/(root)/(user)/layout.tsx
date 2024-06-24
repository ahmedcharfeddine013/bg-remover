import React, { ReactNode } from "react";
import Navbar from "../../../components/Navbar";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default UserLayout;
