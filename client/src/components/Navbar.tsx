import MaxWidthWrapper from "./MaxWidthWrapper";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { useState } from "react";

const links = [
  { url: "/", name: "Home" },
  { url: "/menu", name: "Menu" },
  { url: "/contact", name: "Contact Us" },
];

const Navbar = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const navigate = useNavigate();

  return (
    <MaxWidthWrapper>
      <nav className="flex justify-between pt-5 pb-2">
        <div>
          <h1
            onClick={() => navigate("/")}
            className="text-[#FF823F] font-extrabold text-4xl cursor-pointer"
          >
            Foodie
          </h1>
        </div>
        <div className="items-center justify-center hidden gap-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.url}
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF823F] transition duration-300 ease-in-out"
                  : "text-black"
              }
              to={link.url}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="items-center justify-center hidden gap-8 lg:flex">
          <CiSearch size={26} />
          <IoBagOutline size={26} />
          <SignedOut>
            <SignInButton mode="modal">Sign In</SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-center gap-6 lg:hidden">
          <CiSearch size={26} />
          <IoBagOutline size={26} />
          <div>
            <SignedOut>
              <HiOutlineUserCircle
                size={26}
                onClick={() => {
                  navigate("/sign-in"), setOpenSheet(false);
                }}
              />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger>
              <RxHamburgerMenu size={26} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader></SheetHeader>
              <SheetDescription className="flex flex-col gap-4 mt-4 text-2xl font-bold text-slate-950">
                {links.map((link) => (
                  <NavLink
                    key={link.url}
                    to={link.url}
                    onClick={() => setOpenSheet(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
