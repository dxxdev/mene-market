import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { Link, NavLink } from "react-router-dom";
import { logoHeader } from "../assets/images";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const Header = () => {
  const searchInput = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="backdrop-blur-sm bg-white/90 sticky top-0 w-full z-[999]">
      <div className="w-full relative">
        <div
          className={`${styles.container} border-b ${
            openMenu ? "border-b-black" : "border-b-transparent"
          } py-3 sm:py-6 flex justify-between items-center`}
        >
          <Link to={"/"}>
            <h1>
              <img src={logoHeader} width={"96px"} height={"48px"} alt="" />
            </h1>
          </Link>
          <div className="px-6 pr-4 hidden w-[360px] py-2 md:flex justify-between items-center border-2 border-black rounded-full">
            <input
              ref={searchInput}
              type="text"
              className="outline-none bg-transparent w-full text-lg font-medium text-jet-black"
              placeholder="Search"
            />
            <button onClick={() => searchInput.current.focus()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#13181F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="#13181F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <nav>
            <ul className="flex items-center gap-6">
              <li className="hidden sm:block">
                <NavLink
                  className="text-lg text-jet-black flex items-center gap-1 font-medium"
                  to={"/contact"}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </span>
                  <span className="hidden lg:block">Aloqa</span>
                </NavLink>
              </li>
              <li className="flex cursor-pointer items-center gap-1">
                <Menu
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <MenuHandler>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#13181F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.00001 3H9.00001C7.05001 8.84 7.05001 15.16 9.00001 21H8.00001"
                        stroke="#13181F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 3C16.95 8.84 16.95 15.16 15 21"
                        stroke="#13181F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                        stroke="#13181F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 9.00001C8.84 7.05001 15.16 7.05001 21 9.00001"
                        stroke="#13181F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem className="flex text-base items-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="28px"
                          height="14px"
                          viewBox="0 0 500 250"
                        >
                          <path fill="#1eb53a" d="M0 0h500v250H0z" />
                          <path fill="#0099b5" d="M0 0h500v125H0z" />
                          <path fill="#ce1126" d="M0 80h500v90H0z" />
                          <path fill="#fff" d="M0 85h500v80H0z" />
                          <circle cx="70" cy="40" r="30" fill="#fff" />
                          <circle cx="80" cy="40" r="30" fill="#0099b5" />
                          <g fill="#fff" transform="translate(136 64)">
                            <g id="e">
                              <g id="d">
                                <g id="c">
                                  <g id="b">
                                    <path
                                      id="a"
                                      d="M0-6v6h3"
                                      transform="rotate(18 0 -6)"
                                    />
                                    <use
                                      xlink:href="#a"
                                      transform="scale(-1 1)"
                                    />
                                  </g>
                                  <use xlink:href="#b" transform="rotate(72)" />
                                </g>
                                <use xlink:href="#b" transform="rotate(-72)" />
                                <use xlink:href="#c" transform="rotate(144)" />
                              </g>
                              <use xlink:href="#d" y="-24" />
                              <use xlink:href="#d" y="-48" />
                            </g>
                            <use xlink:href="#e" x="24" />
                            <use xlink:href="#e" x="48" />
                            <use xlink:href="#d" x="-48" />
                            <use xlink:href="#d" x="-24" />
                            <use xlink:href="#d" x="-24" y="-24" />
                          </g>
                        </svg>
                      </span>
                      <span>Uzbek</span>
                    </MenuItem>
                    <hr />
                    <MenuItem className="flex text-base items-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 1200 750"
                        >
                          <rect width="1200" height="250" fill="#fff" />
                          <rect
                            width="1200"
                            height="250"
                            y="250"
                            fill="#0033A0"
                          />
                          <rect
                            width="1200"
                            height="250"
                            y="500"
                            fill="#D52B1E"
                          />
                        </svg>
                      </span>
                      <span>Russian</span>
                    </MenuItem>
                    <hr />
                    <MenuItem className="flex text-base items-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="32"
                          zoomAndPan="magnify"
                          viewBox="0 0 30 30.000001"
                          height="32"
                          className="-ml-0.5"
                          preserveAspectRatio="xMidYMid meet"
                          version="1.0"
                        >
                          <defs>
                            <clipPath id="id1">
                              <path
                                d="M 2.511719 6.402344 L 27.191406 6.402344 L 27.191406 24.546875 L 2.511719 24.546875 Z M 2.511719 6.402344 "
                                clipRule="nonzero"
                              />
                            </clipPath>
                          </defs>
                          <g clipPath="url(#id1)">
                            <path
                              fill="rgb(0%, 14.118958%, 49.01886%)"
                              d="M 2.519531 9.234375 L 2.519531 11.984375 L 6.375 11.984375 Z M 5.714844 24.546875 L 11.425781 24.546875 L 11.425781 20.472656 Z M 18.277344 20.472656 L 18.277344 24.546875 L 23.984375 24.546875 Z M 2.519531 18.964844 L 2.519531 21.714844 L 6.378906 18.964844 Z M 23.988281 6.402344 L 18.277344 6.402344 L 18.277344 10.472656 Z M 27.183594 21.714844 L 27.183594 18.964844 L 23.324219 18.964844 Z M 27.183594 11.984375 L 27.183594 9.234375 L 23.324219 11.984375 Z M 11.425781 6.402344 L 5.714844 6.402344 L 11.425781 10.472656 Z M 11.425781 6.402344 "
                              fillOpacity="1"
                              fillRule="nonzero"
                            />
                            <path
                              fill="rgb(81.17981%, 10.5896%, 16.859436%)"
                              d="M 19.742188 18.964844 L 26.394531 23.710938 C 26.71875 23.375 26.949219 22.953125 27.074219 22.488281 L 22.132812 18.964844 Z M 11.425781 18.964844 L 9.960938 18.964844 L 3.304688 23.707031 C 3.664062 24.078125 4.121094 24.34375 4.632812 24.464844 L 11.425781 19.621094 Z M 18.277344 11.984375 L 19.742188 11.984375 L 26.394531 7.238281 C 26.039062 6.867188 25.582031 6.605469 25.070312 6.480469 L 18.277344 11.324219 Z M 9.960938 11.984375 L 3.304688 7.238281 C 2.984375 7.574219 2.753906 7.992188 2.628906 8.460938 L 7.570312 11.984375 Z M 9.960938 11.984375 "
                              fillOpacity="1"
                              fillRule="nonzero"
                            />
                            <path
                              fill="rgb(93.328857%, 93.328857%, 93.328857%)"
                              d="M 27.183594 17.566406 L 16.90625 17.566406 L 16.90625 24.546875 L 18.277344 24.546875 L 18.277344 20.472656 L 23.984375 24.546875 L 24.441406 24.546875 C 25.207031 24.546875 25.898438 24.222656 26.394531 23.710938 L 19.742188 18.964844 L 22.132812 18.964844 L 27.074219 22.488281 C 27.136719 22.253906 27.183594 22.011719 27.183594 21.753906 L 27.183594 21.714844 L 23.324219 18.964844 L 27.183594 18.964844 Z M 2.519531 17.566406 L 2.519531 18.964844 L 6.378906 18.964844 L 2.519531 21.714844 L 2.519531 21.753906 C 2.519531 22.515625 2.820312 23.203125 3.304688 23.707031 L 9.960938 18.964844 L 11.425781 18.964844 L 11.425781 19.621094 L 4.632812 24.464844 C 4.835938 24.515625 5.042969 24.546875 5.261719 24.546875 L 5.714844 24.546875 L 11.425781 20.472656 L 11.425781 24.546875 L 12.796875 24.546875 L 12.796875 17.566406 Z M 27.183594 9.191406 C 27.183594 8.429688 26.882812 7.742188 26.394531 7.238281 L 19.742188 11.984375 L 18.277344 11.984375 L 18.277344 11.324219 L 25.070312 6.480469 C 24.867188 6.433594 24.660156 6.402344 24.441406 6.402344 L 23.988281 6.402344 L 18.277344 10.472656 L 18.277344 6.402344 L 16.90625 6.402344 L 16.90625 13.378906 L 27.183594 13.378906 L 27.183594 11.984375 L 23.324219 11.984375 L 27.183594 9.234375 Z M 11.425781 6.402344 L 11.425781 10.472656 L 5.714844 6.402344 L 5.261719 6.402344 C 4.496094 6.402344 3.804688 6.722656 3.304688 7.238281 L 9.960938 11.984375 L 7.570312 11.984375 L 2.628906 8.460938 C 2.566406 8.695312 2.519531 8.9375 2.519531 9.191406 L 2.519531 9.234375 L 6.375 11.984375 L 2.519531 11.984375 L 2.519531 13.378906 L 12.796875 13.378906 L 12.796875 6.402344 Z M 11.425781 6.402344 "
                              fillOpacity="1"
                              fillRule="nonzero"
                            />
                            <path
                              fill="rgb(81.17981%, 10.5896%, 16.859436%)"
                              d="M 16.90625 13.378906 L 16.90625 6.402344 L 12.796875 6.402344 L 12.796875 13.378906 L 2.519531 13.378906 L 2.519531 17.566406 L 12.796875 17.566406 L 12.796875 24.546875 L 16.90625 24.546875 L 16.90625 17.566406 L 27.183594 17.566406 L 27.183594 13.378906 Z M 16.90625 13.378906 "
                              fillOpacity="1"
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>
                      </span>
                      <span>English</span>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <NavLink
                  className="text-lg text-jet-black font-medium flex items-center gap-1"
                  to={"/signup"}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.51001C8.71997 7.70001 10.18 6.23001 12 6.23001C13.81 6.23001 15.28 7.70001 15.28 9.51001C15.27 11.28 13.88 12.72 12.12 12.78Z"
                        stroke="#13181F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.74 19.38C16.96 21.01 14.6 22 12 22C9.40001 22 7.04001 21.01 5.26001 19.38C5.36001 18.44 5.96001 17.52 7.03001 16.8C9.77001 14.98 14.25 14.98 16.97 16.8C18.04 17.52 18.64 18.44 18.74 19.38Z"
                        stroke="#13181F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#13181F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="hidden lg:block">Kirish</span>
                </NavLink>
              </li>
              <li className="block md:hidden">
                <button
                  onClick={() => setOpenMenu((prev) => !prev)}
                  className={`p-1 h-7 flex flex-col justify-between`}
                >
                  <span
                    className={`transition-all origin-left rounded-full h-0.5 bg-black ${
                      openMenu
                        ? "w-[24px] translate-y-px rotate-45"
                        : "rotate-0 w-6"
                    }`}
                  ></span>
                  <span
                    className={`w-6 transition-all origin-left rounded-full h-0.5 bg-black ${
                      openMenu ? "hidden" : "block"
                    }`}
                  ></span>
                  <span
                    className={`transition-all origin-left rounded-full h-0.5 bg-black ${
                      openMenu ? "w-[24px] -rotate-45" : "rotate-0 w-6"
                    }`}
                  ></span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={`transition-all w-full left-0 px-5 top-full ${
            openMenu ? "py-5 flex md:hidden shadow-md" : "p-0"
          } items-center justify-between gap-5`}
        >
          <div
            className={`px-6 pr-4 w-full py-2 justify-between items-center border-2 border-black/50 rounded-full ${
              openMenu ? "flex" : "hidden"
            }`}
          >
            <input
              ref={searchInput}
              type="text"
              className="outline-none w-full text-lg bg-transparent font-medium text-jet-black"
              placeholder="Search"
            />
            <button onClick={() => searchInput.current.focus()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#13181F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="#13181F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <NavLink
            className={`text-lg text-jet-black font-medium ${
              openMenu ? "flex sm:hidden" : "hidden"
            }`}
            to={"/contact"}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
