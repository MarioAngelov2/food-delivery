import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";

const followUsLinks = [
  { title: "Facebook", url: "/" },
  { title: "Twitter", url: "/" },
  { title: "Instagram", url: "/" },
];

const linksOfInterest = [
  { title: "About Us", url: "/" },
  { title: "FAQ", url: "/" },
  { title: "Foodie Prime", url: "/" },
  { title: "Contact Us", url: "/" },
  { title: "Security", url: "/" },
];

const company = [
  { title: "Careers", url: "/" },
  { title: "Foodie for Partners", url: "/" },
  { title: "Couriers", url: "/" },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 min-h-48">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-4 px-6 py-10 mt-4 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-black">Foodie</h2>
            <p>Find the best restaunts with the best food.</p>
          </div>
          <ul className="flex flex-col gap-2 justify-self-start lg:justify-self-center">
            <h1 className="mb-4 text-xl font-bold">Company</h1>
            {company.map((link) => (
              <li key={link.url}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 justify-self-start lg:justify-self-center">
            <h1 className="mb-4 text-xl font-bold">Links of interest</h1>
            {linksOfInterest.map((link) => (
              <li key={link.url}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 justify-self-start lg:justify-self-center">
            <h1 className="mb-4 text-xl font-bold">Follow us</h1>
            {followUsLinks.map((link) => (
              <li key={link.url}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
