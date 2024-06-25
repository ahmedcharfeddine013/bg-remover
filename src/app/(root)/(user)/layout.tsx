import React, { ReactNode } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="py-32">{children}</div>
      <Footer />
      <Credits />
    </div>
  );
};

export default UserLayout;
