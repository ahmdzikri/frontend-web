"use client";
import { DcLogo } from "./Logo/DgCon";
import { IdnComicLogo } from "./Logo/Idncomiccon";
import { XLogo } from "./Logo/X";
import { NavItem } from "./NavItem";

interface NavbarProps {
  children: React.ReactNode;
}

const mainMenu = [
  { label: "Home", link: "/" },
  { label: "Guests", link: "/guests" },
  { label: "Rundown", link: "/rundown" },
  { label: "Tenants", link: "/tenants" },
  { label: "Promo", link: "/promo" },
  { label: "Gallery", link: "/gallery" },
];
const ParentMenu = ["More"];
const childMenu = [
  "Meet and Greet",
  "Raya Championship of Cosplay",
  "FanMate Fest",
  "Portfolio Review",
  "Tenant Registration",
  "Promote Your Brand",
  "FAQ",
  "Event Guidelines",
  "Safety and Weapon Policy",
  "Anti-Harassment Policy",
  "Contact",
];

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col font-sans text-sm antialiased md:text-base relative bg-slate-950 text-gray-300 overflow-x-hidden">
      <div
        // data-theme={"light"}
        className="navbar bg-black py-4 px-2 lg:px-12 z-[998] fixed"
      >
        <div className="navbar-start gap-4">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-square btn-base-100 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <NavItem menuItem={mainMenu} isMobile />
          </div>
          <a href="/" className="flex w-full">
            <IdnComicLogo />
            <XLogo />
            <DcLogo />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavItem menuItem={mainMenu} />

          {/* <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul> */}
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary rounded-full font-bold hidden lg:inline-flex">
            Get your ticket
          </a>
          <a className="btn btn-primary rounded-full font-bold inline-flex lg:hidden">
            Get ticket
          </a>
        </div>
      </div>
      {/* <div className=""> */}
        {children}
      {/* </div> */}
    </div>
  );
};
