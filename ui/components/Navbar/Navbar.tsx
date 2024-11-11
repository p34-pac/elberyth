"use client";

import { useModal } from ">/ui/Modal/Modal";
import Search from ">/ui/Search";
import { Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiCart } from "react-icons/bi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal, closeModal } = useModal();
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleCartIsOpen = () => {
    setCartIsOpen(!cartIsOpen);
  };

  // handleChange of cart
  useEffect(() => {
    if (cartIsOpen) {
      openModal(
        <div className="w-full h-full">carts item</div>,
        {
          containerStyles:
            " min-[498px]:!justify-end min-[498px]:!items-stretch",
          boxStyles:
            "min-[498px]:!h-screen min-[498px]:!max-h-screen min-[498px]:!w-[80vw] min-[498px]:!max-w-[300px] min-[498px]:!rounded-none !bg-base-white !text-base-black",
          closeOutClick: true,
          onClose() {
            toggleCartIsOpen();
          },
        },
        "cartModal"
      );
    } else {
      closeModal("cartModal");
    }
  }, [cartIsOpen]);

  return (
    <header className="bg-white text-black border-b-2 sticky top-0 left-0 z-[10]">
      <div className="h-[3.5rem] md:h-[4.3rem] mx-auto px-4 lg:px-[4rem] flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold h-[4.3rem] flex items-center">
          <h1 className="text-red-500">
            <span className="bg-red-500 text-white px-2 rounded-md">Elbe</span>
            ryth
          </h1>
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden sm:flex space-x-6">{/* navigation links */}</nav>

        {/* icon controls */}
        <nav className="w-fit h-fit flex items-center justify-center gap-2">
          {/* General nav controls */}
          <div className="w-fit flex items-center justify-center gap-3">
            <Search
              className="!bg-base-white !text-base-black"
              placeholder="search product"
            />
            <button
              onClick={toggleCartIsOpen}
              className="focus:outline-none text-2xl"
              aria-label="Toggle cart"
            >
              <BiCart />
            </button>
          </div>
          {/* Hamburger menu for smaller screens + */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <AiOutlineClose className="w-6 h-6" />
              ) : (
                <AiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <Drawer open={isOpen} onClose={toggleMenu}>
        <nav className="w-[80vw] max-w-[300px] pl-4 flex flex-col justify-between h-full gap-1">
          <div className="text-2xl font-bold h-[4.3rem] flex items-center">
            <h1 className="text-red-500">
              <span className="bg-red-500 text-white px-2 rounded-md">
                Elbe
              </span>
              ryth
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4 gap-3 border-r-2 h-full max-h-[40rem] pt-3 pb-9 pr-4">
            {/* navigation links */}
          </div>
        </nav>
      </Drawer>
      {/* <div
        className={`fixed inset-y-0 left-0 z-90 bg-white transform overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden w-3/4 max-w-sm`}
      ></div> */}
    </header>
  );
};

export default Navbar;
