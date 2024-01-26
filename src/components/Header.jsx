import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoHeader } from "../assets/images";
import {
  Badge,
  IconButton,
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
import { headerRender, products, siteLanguage } from "../data/data";

const Header = ({ rendered }) => {
  const navigate = useNavigate();
  const searchInput = useRef(null);
  const [howSaved, setHowSaved] = useState(0);

  useEffect(() => {
    setHowSaved(products.filter((product) => product.saved).length);
  }, [headerRender, products, rendered]);

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
              <li>
                <Badge
                  content={howSaved}
                  color="blue"
                  invisible={howSaved > 0 ? false : true}
                  className="flex cursor-pointer !top-[10%] !right-[10%] min-w-[20px] min-h-[20px] justify-center items-center"
                  onClick={() => navigate("/saved")}
                >
                  <IconButton
                    onClick={() => navigate("/saved")}
                    size="sm"
                    variant="text"
                    className="text-lg text-jet-black font-medium flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                    >
                      <path
                        d="M11.62 19.2998C11.28 19.4198 10.72 19.4198 10.38 19.2998C7.48 18.3098 1 14.1798 1 7.17984C1 4.08984 3.49 1.58984 6.56 1.58984C8.38 1.58984 9.99 2.46984 11 3.82984C12.01 2.46984 13.63 1.58984 15.44 1.58984C18.51 1.58984 21 4.08984 21 7.17984C21 14.1798 14.52 18.3098 11.62 19.2998Z"
                        stroke="#13181f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </IconButton>
                </Badge>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
