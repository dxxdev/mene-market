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
  call,
  englandFlag,
  global,
  profile,
  russianFlag,
  search,
  uzbekistanFlag,
} from "../assets/icons";
import { siteLanguage } from "../data/data";

const Header = () => {
  const searchInput = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState(siteLanguage);
  return (
    <header className="backdrop-blur-sm bg-white/90 sticky top-0 w-full z-[999]">
      <div className="w-full relative">
        <div
          className={`${styles.container} py-3 sm:py-4 flex justify-between items-center`}
        >
          <Link aria-label="back to home link" to={"/"}>
            <h1>
              <img src={logoHeader} width={"96px"} height={"48px"} alt="" />
            </h1>
          </Link>
          <div className="px-6 pr-4 mx-3 max-w-[360px] hidden py-2 md:flex justify-between items-center border-2 border-black rounded-full">
            <input
              ref={searchInput}
              type="text"
              className="outline-none bg-transparent w-full text-lg font-medium text-jet-black"
              placeholder="Search"
            />
            <button
              aria-label="search focus button"
              onClick={() => searchInput.current.focus()}
            >
              <img src={search} alt="" />
            </button>
          </div>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <NavLink
                  aria-label="contact page link"
                  className="text-lg text-jet-black flex items-center gap-1 font-medium"
                  to={"/contact"}
                >
                  <span>
                    <img src={call} alt="" />
                  </span>
                  <span className="hidden sm:block">Aloqa</span>
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
                    <button
                      aria-label="select language"
                      className="flex items-center gap-1"
                    >
                      <span>
                        <img src={global} alt="" />
                      </span>
                      <span>
                        <p>{selectedLanguage}</p>
                      </span>
                      <span className="hidden sm:block">
                        <img src={arrowDown} alt="" />
                      </span>
                    </button>
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
                  aria-label="sign-up page link"
                  className="text-lg text-jet-black font-medium flex items-center gap-1"
                  to={"/signup"}
                >
                  <span>
                    <img src={profile} alt="" />
                  </span>
                  <span className="hidden sm:block">Kirish</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
