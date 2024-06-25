import React, { ReactNode } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "@/components/Footer";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="py-32">{children}</div>
      <Footer />
    </div>
  );
};

export default UserLayout;
