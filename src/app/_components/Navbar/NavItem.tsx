"use client";
import NextLink from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { type MenuItem } from "./schema";
import { IoCubeOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

interface Props {
  menuItem: MenuItem[];
  isMobile?: boolean;
}

export const NavItem: React.FC<Props> = ({ menuItem, isMobile = false }) => {
  const currentPath = usePathname();
  return (
    <>
      {isMobile ? (
        <ul
          tabIndex={0}
          className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
        >
          {menuItem.map((item) => (
            <li key={item.label}>
              <NextLink
                href={item.link}
                className={`${
                  currentPath === item.link
                    ? "bg-primary text-white"
                    : "text-white"
                }`}
              >
                <IoCubeOutline />
                {item.label}
              </NextLink>
            </li>
          ))}
          <div className="divider px-5"></div>
          <div className="flex flex-col items-start">
            <span className="px-5 text-gray-400 uppercase text-xs font-bold">
              Connect with Us
            </span>
            <div className="px-2">
              <div className="flex justify-start items-center gap-0 text-gray-700">
                <a href="https://www.instagram.com/indocomiccon" target="_blank" rel="noopener noreferrer" className="btn btn-square btn-ghost">
                  <FaInstagram size="24px" />
                </a>
                <a href="https://www.facebook.com/IndoComicCon" target="_blank" rel="noopener noreferrer" className="btn btn-square btn-ghost">
                  <FaFacebookF size="24px" />
                </a>
                <a href="https://twitter.com/indo_comiccon" target="_blank" rel="noopener noreferrer" className="btn btn-square btn-ghost">
                  <FaTwitter size="24px" />
                </a>
                <a href="https://www.youtube.com/channel/UCuWnf3zwPq7cS1njZjXCwvg" target="_blank" rel="noopener noreferrer" className="btn btn-square btn-ghost">
                  <FaYoutube size="24px" />
                </a>
              </div>
            </div>
          </div>
        </ul>
      ) : (
        <ul className="menu menu-horizontal px-1">
          {menuItem.map((item) => (
            <li key={item.label}>
              <NextLink
                href={item.link}
                className="flex flex-col gap-0 items-center h-full pt-5"
              >
                <span className="text-slate-100">{item.label}</span>
                {currentPath === item.link && (
                  <svg
                    data-v-e49c5770=""
                    viewBox="0 0 34 5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary h-1 mt-3"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.9736 3.69874C34.1002 3.16117 33.7671 2.62274 33.2295 2.49613C24.8355 0.519209 17.0368 -0.141932 11.1685 0.0245104C8.23855 0.107612 5.75775 0.397838 3.91094 0.848281C2.99008 1.07288 2.19041 1.34594 1.56114 1.67446C0.961147 1.9877 0.367421 2.42779 0.0856531 3.06509C-0.137672 3.57021 0.090767 4.16073 0.595885 4.38405C1.101 4.60738 1.69152 4.37894 1.91485 3.87382C1.91481 3.8739 1.91479 3.87394 1.9148 3.87394C1.91483 3.87396 1.93666 3.82814 2.02944 3.74605C2.12422 3.66217 2.2713 3.55986 2.48673 3.4474C2.92056 3.22091 3.55075 2.99476 4.38486 2.79132C6.04798 2.38568 8.37755 2.10447 11.2252 2.02371C16.9121 1.86241 24.5376 2.50378 32.771 4.44287C33.3086 4.56948 33.847 4.23632 33.9736 3.69874Z"
                    ></path>
                  </svg>
                )}
              </NextLink>
            </li>
          ))}
          <li>
            <details>
              <summary className="text-slate-100 h-full py-5">
                More
              </summary>
              <ul className="menu menu-md w-full">
                <li>
                  <a>
                    <IoCubeOutline />
                    Item 2
                  </a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      )}
    </>
  );
};
