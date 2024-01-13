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
import {
  arrowDown,
  englandFlag,
  global,
  russianFlag,
  search,
  uzbekistanFlag,
} from "../assets/icons";

const Header = () => {
  const searchInput = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("UZB");
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
              <img src={search} alt="" />
            </button>
          </div>
          <nav>
            <ul className="flex items-center gap-6">
              <li className="hidden sm:block">
                <NavLink
                  className="text-lg text-jet-black flex items-center gap-1 font-medium"
                  to={"/contact"}
                >
                  <span className="block lg:hidden">
                    <img src={search} alt="" />
                  </span>
                  <span className="hidden lg:block">Aloqa</span>
                </NavLink>
              </li>
              <li className="flex cursor-pointer items-center gap-1">
                <Menu
                  animate={{
                    mount: { scale: 1 },
                    unmount: { scale: 0.1 },
                  }}
                  placement="bottom-end"
                >
                  <MenuHandler>
                    <div className="flex items-center gap-1">
                      <span>
                        <img src={global} alt="" />
                      </span>
                      <span>
                        <p>{selectedLanguage}</p>
                      </span>
                      <span>
                        <img src={arrowDown} alt="" />
                      </span>
                    </div>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem
                      onClick={() => setSelectedLanguage("UZB")}
                      className="flex text-base items-center gap-2"
                    >
                      <span>
                        <img src={uzbekistanFlag} alt="" />
                      </span>
                      <span>Uzbek</span>
                    </MenuItem>
                    <hr />
                    <MenuItem
                      onClick={() => setSelectedLanguage("RUS")}
                      className="flex text-base items-center gap-2"
                    >
                      <span>
                        <img src={russianFlag} alt="" />
                      </span>
                      <span>Russian</span>
                    </MenuItem>
                    <hr />
                    <MenuItem
                      onClick={() => setSelectedLanguage("ENG")}
                      className="flex text-base items-center gap-2"
                    >
                      <span>
                        <img src={englandFlag} alt="" />
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
