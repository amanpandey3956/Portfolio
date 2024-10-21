"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null); // State for active menu item
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-2 inset-x-0 max-w-2xl mx-auto z-50 ${className}`}>
      <div className="flex items-center justify-between p-4">
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose className="text-white text-3xl" /> : <AiOutlineMenu className="text-white text-3xl" />}
        </div>
      </div>

      {/* Menu for larger screens */}
      <Menu setActive={setActive} className={`hidden md:flex`}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" icon={AiOutlineHome} className="text-lg md:text-xl" />
        </Link>
        <Link href={"/about"}>
          <MenuItem setActive={setActive} active={active} item="About" icon={AiOutlineUser} className="text-lg md:text-xl" />
        </Link>
        <Link href={"/projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects" icon={AiOutlineFundProjectionScreen} className="text-lg md:text-xl" />
        </Link>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact" icon={AiOutlineMail} className="text-lg md:text-xl" />
        </Link>
      </Menu>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col md:hidden bg-black text-white p-4">
          <Link href={"/"} onClick={() => setIsOpen(false)} className="mb-4">
            <MenuItem setActive={setActive} active={active} item="Home" icon={AiOutlineHome} className="text-lg" />
          </Link>
          <Link href={"/about"} onClick={() => setIsOpen(false)} className="mb-4">
            <MenuItem setActive={setActive} active={active} item="About" icon={AiOutlineUser} className="text-lg" />
          </Link>
          <Link href={"/projects"} onClick={() => setIsOpen(false)} className="mb-4">
            <MenuItem setActive={setActive} active={active} item="Projects" icon={AiOutlineFundProjectionScreen} className="text-lg" />
          </Link>
          <Link href={"/contact"} onClick={() => setIsOpen(false)} className="mb-4">
            <MenuItem setActive={setActive} active={active} item="Contact" icon={AiOutlineMail} className="text-lg" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
