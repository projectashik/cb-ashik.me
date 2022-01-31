import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "./Container";
import cn from "classnames";

const NavItem = ({
  href,
  ...props
}: LinkProps & { children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = href === router.asPath;
  return (
    <li>
      <Link href={href}>
        <a
          className={cn(
            isActive
              ? "font-semibold text-primary-400"
              : "font-normal text-gray-700",
            "transition-colors duration-200 hover:text-primary-500"
          )}
        >
          {props.children}
        </a>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const menus = [
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Snippets", href: "/snippets" },
  ];

  const [showMenu, setShowMenu] = useState(false);
  return (
    <Container>
      <div className="relative flex items-center z-50 justify-between">
        <Link href="/">
          <a
            aria-label="Ashik Chapagain"
            title="Ashik Chapagain"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Ashik Chapagain
            </span>
          </a>
        </Link>
        <ul className=" items-center hidden space-x-8 lg:flex">
          {menus.map((menu, index) => (
            <NavItem href={menu.href} key={index}>
              {menu.label}
            </NavItem>
          ))}
        </ul>
        <ul className="flex items-center space-x-8 lg:flex">
          <li>
            <Link href="">
              <a
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-500 hover:bg-primary-700 focus:shadow-outline focus:outline-none"
                aria-label="Hire me"
                title="Hire me"
              >
                Hire me
              </a>
            </Link>
          </li>
        </ul>
        {/* Mobile menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setShowMenu(true)}
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {showMenu && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/">
                      <a
                        aria-label="Ashik Chapagain"
                        title="Ashik Chapagain"
                        className="inline-flex items-center"
                      >
                        <span className="text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Ashik Chapagain
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setShowMenu(false)}
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {menus.map((menu, index) => (
                      <NavItem href={menu.href} key={index}>
                        {menu.label}
                      </NavItem>
                    ))}
                    <li>
                      <Link href="">
                        <a
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-500 hover:bg-primary-700 focus:shadow-outline focus:outline-none"
                          aria-label="Hire me"
                          title="Hire me"
                        >
                          Hire me
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
