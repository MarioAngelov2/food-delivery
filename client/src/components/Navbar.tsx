import MaxWidthWrapper from "./MaxWidthWrapper";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const links = [
  { url: "/", name: "Home" },
  { url: "/menu", name: "Menu" },
  { url: "/mobile-app", name: "Mobile App" },
  { url: "/contact", name: "Contact Us" },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <MaxWidthWrapper>
      <nav className="flex justify-between pt-5 pb-2">
        <div>
          <h1 className="text-[#FF823F] font-extrabold text-4xl">Foodie</h1>
        </div>
        <div className="flex items-center justify-center gap-6">
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
        <div className="flex items-center justify-center gap-8">
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
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
