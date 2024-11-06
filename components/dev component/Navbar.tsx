"use client"
import React from "react";
import {Button} from "../ui/button";
import {
  ShoppingCart,
  Search,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {cart} = useSelector((state: any) => state)
  return (
    <header className="border-b">
      <div className="max-w-[85%] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex  items-center">
          {/* It is not looking good */}
          {/* <div>
            <Image
              src={logo}
              alt="Logo"
              width={1000}
              height={1000}
              className="h-10 w-10 object-contain"
            />
          </div> */}
          <div className="text-2xl font-extrabold text-primary ">Logo</div>
        </div>
        <div className="flex items-center justify-between  md:gap-10 lg:gap-20">
          <nav className="hidden md:flex md:gap-5 lg:gap-10">
            <Link href="/" className="text-primary">
              Home
            </Link>
            <Link href="#" className="hover:text-primary">
              Categories
            </Link>
            <Link href="#" className="hover:text-primary">
              Explore
            </Link>
            <Link href="#" className="hover:text-primary">
              About
            </Link>
            <Link href="#" className="hover:text-primary">
              Blog
            </Link>
            <Link href="#" className="hover:text-primary">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="icon">
              <Search className="h-5 w-5" color="#64748B" />
            </Button>
            <Button variant="secondary" size="icon">
              <UserCircle className="h-5 w-5" color="#64748B" />
            </Button>
            <Link href={"/cart"} className="relative">
              <span className="absolute -top-2 -right-2 text-white bg-red-500 rounded-full text-[10px] px-[5px]">
                {cart.length}
              </span>
              <Button size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
