import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} alt="BGR" width={100} height={100} />
    </Link>
  );
};

export default Logo;
