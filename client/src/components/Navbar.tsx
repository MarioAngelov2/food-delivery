import MaxWidthWrapper from "./MaxWidthWrapper";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useState } from "react";

const links = [
  { url: "/", name: "Home" },
  { url: "/menu", name: "Menu" },
  { url: "/mobile-app", name: "Mobile App" },
  { url: "/contact", name: "Contact Us" },
];

const Navbar = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const navigate = useNavigate();

  return (
    <MaxWidthWrapper>
      <nav className="flex justify-between pt-5 pb-2">
        <div>
          <h1 className="text-[#FF823F] font-extrabold text-4xl">Foodie</h1>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.url}
              className={({ isActive }) =>
                isActive ? "text-[#FF823F]" : "text-black"
              }
              to={link.url}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex items-center justify-center gap-8">
          <CiSearch size={26} />
          <IoBagOutline size={26} />
          <SignedOut>
            <button
              onClick={() => navigate("/sign-in")}
              className="border px-5 py-2 rounded-xl border-[#FF823F] text-sm"
            >
              Sign In
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center justify-center gap-6">
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
              <SheetDescription className="flex flex-col text-2xl font-bold gap-4 text-slate-950 mt-4">
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
