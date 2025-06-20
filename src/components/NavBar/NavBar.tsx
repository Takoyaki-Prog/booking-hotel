import NavLink from "@/components/NavBar/NavLink";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image src="/logo.svg" width={128} height={49} alt="Logo" priority />
        </Link>
        <NavLink />
      </div>
    </div>
  );
};

export default NavBar;
