import React from "react";
import { styles } from "../styles";
import { logoHeader } from "../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-jet-black py-8">
      <div
        className={`${styles.container} flex flex-col gap-y-10 sm:flex-row px-10 sm:px-3 justify-between items-start`}
      >
        <div className="flex flex-col items-start gap-y-4">
          <div className="w-[152px] h-[83px]">
            <img
              src={logoHeader}
              width="100%"
              height="100%"
              alt="Mene Market"
            />
          </div>
          <p className="text-base font-normal leading-[164%] text-soft-gray">
            Copyright 2023 © All rights reserved
          </p>
        </div>
        <ul className="flex flex-col items-start gap-y-2">
          <li>
            <Link className="text-base leading-[164%] text-soft-gray font-normal">
              Mening profilim
            </Link>
          </li>
          <li>
            <Link className="text-base leading-[164%] text-soft-gray font-normal">
              Sozlamalar
            </Link>
          </li>
          <li>
            <Link className="text-base leading-[164%] text-soft-gray font-normal">
              Aloqa
            </Link>
          </li>
          <li>
            <Link className="text-base leading-[164%] text-soft-gray font-normal">
              Ommaviy oferta
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-start gap-y-2">
          <p className="text-base leading-[164%] text-soft-gray font-normal">
            Aloqa uchun:
          </p>
          <p>
            <a
              className="text-base leading-[164%] text-soft-gray font-normal"
              href="tel:+998998765432"
            >
              +998 99 876 54 32
            </a>
          </p>
          <p>
            <a
              className="text-base leading-[164%] text-soft-gray font-normal"
              href="mailto:example@gmail.com"
            >
              example@gmail.com
            </a>
          </p>
          <ul className="flex gap-2.5 items-center">
            <li>
              <a href="https://play.google.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.4 12.9L16.9 15.2L13.7 12L16.9 8.8L21.4 11C22.2 11.4 22.2 12.6 21.4 12.9Z"
                    stroke="#EDEDED"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9 8.8L13.7 12L4.1 21.6L3.5 21.9C2.8 22.3 2 21.7 2 20.9V3.1C2 2.3 2.8 1.8 3.5 2.1L16.9 8.8Z"
                    stroke="#EDEDED"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9001 15.2L4.1001 21.6L13.7001 12L16.9001 15.2Z"
                    stroke="#EDEDED"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.7001 12L4.1001 2.4"
                    stroke="#EDEDED"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
                    stroke="#EDEDED"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                    stroke="#EDEDED"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.49994 2H4.09994C3.09994 2 2.59994 3.1 3.29994 3.8L8.99994 9.5C10.5999 11.1 13.2999 11.1 14.8999 9.5L20.5999 3.8C21.3999 3.1 20.8999 2 19.8999 2H18.4999C17.6999 2 16.8999 2.3 16.2999 2.9L12.6999 6.5C12.2999 6.9 11.5999 6.9 11.1999 6.5L7.69994 2.9C7.09994 2.3 6.29994 2 5.49994 2Z"
                    stroke="#EDEDED"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.50004 22H4.10004C3.20004 22 2.70004 20.9 3.40004 20.2L9.00004 14.5C10.6 12.9 13.3 12.9 14.9 14.5L20.6 20.2C21.3 20.9 20.8 22 19.9 22H18.5C17.7 22 16.9 21.7 16.3 21.1L12.7 17.5C12.3 17.1 11.6 17.1 11.2 17.5L7.60004 21.1C7.10004 21.6 6.30004 22 5.50004 22Z"
                    stroke="#EDEDED"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://youtube.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z"
                    stroke="#EDEDED"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.4001 9.5L13.9001 11C14.8001 11.6 14.8001 12.5 13.9001 13.1L11.4001 14.6C10.4001 15.2 9.6001 14.7 9.6001 13.6V10.6C9.6001 9.3 10.4001 8.9 11.4001 9.5Z"
                    stroke="#EDEDED"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
