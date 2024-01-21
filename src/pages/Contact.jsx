import React from "react";
import { styles } from "../styles";

const Contact = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="flex flex-col py-16 gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-jet-black text-center">
            Contact
          </h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex w-full flex-col items-center gap-4 p-6 bg-off-gray">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <path
                    d="M4.67969 14.96V20.9466C4.67969 26.9333 7.07969 29.3333 13.0664 29.3333H20.253C26.2397 29.3333 28.6397 26.9333 28.6397 20.9466V14.96"
                    stroke="#13181F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.6665 16C19.1065 16 20.9065 14.0133 20.6665 11.5733L19.7865 2.66663H13.5598L12.6665 11.5733C12.4265 14.0133 14.2265 16 16.6665 16Z"
                    stroke="#13181F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.0801 16C27.7734 16 29.7467 13.8133 29.4801 11.1333L29.1067 7.46663C28.6267 3.99996 27.2934 2.66663 23.8001 2.66663H19.7334L20.6667 12.0133C20.8934 14.2133 22.8801 16 25.0801 16Z"
                    stroke="#13181F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.18635 16C10.3863 16 12.373 14.2133 12.5863 12.0133L12.8797 9.06663L13.5197 2.66663H9.45301C5.95968 2.66663 4.62635 3.99996 4.14635 7.46663L3.78635 11.1333C3.51968 13.8133 5.49301 16 8.18635 16Z"
                    stroke="#13181F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.6663 22.6666C14.4397 22.6666 13.333 23.7733 13.333 26V29.3333H19.9997V26C19.9997 23.7733 18.893 22.6666 16.6663 22.6666Z"
                    stroke="#13181F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-dark-gray text-lg leading-[112%] font-medium">
                  Address
                </h3>
                <p className="text-base leading-[164%] text-center text-jet-black">
                  120, Chinobod, Andijon, O'zbekiston
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-4 p-6 bg-off-gray">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M29.2932 24.44C29.2932 24.92 29.1865 25.4133 28.9598 25.8933C28.7332 26.3733 28.4398 26.8266 28.0532 27.2533C27.3998 27.9733 26.6798 28.4933 25.8665 28.8266C25.0665 29.16 24.1998 29.3333 23.2665 29.3333C21.9065 29.3333 20.4532 29.0133 18.9198 28.36C17.3865 27.7066 15.8532 26.8266 14.3332 25.72C12.7998 24.6 11.3465 23.36 9.95984 21.9866C8.5865 20.6 7.3465 19.1466 6.23984 17.6266C5.1465 16.1066 4.2665 14.5866 3.6265 13.08C2.9865 11.56 2.6665 10.1066 2.6665 8.71996C2.6665 7.81329 2.8265 6.94663 3.1465 6.14663C3.4665 5.33329 3.97317 4.58663 4.67984 3.91996C5.53317 3.07996 6.4665 2.66663 7.45317 2.66663C7.8265 2.66663 8.19984 2.74663 8.53317 2.90663C8.87984 3.06663 9.1865 3.30663 9.4265 3.65329L12.5198 8.01329C12.7598 8.34663 12.9332 8.65329 13.0532 8.94663C13.1732 9.22663 13.2398 9.50663 13.2398 9.75996C13.2398 10.08 13.1465 10.4 12.9598 10.7066C12.7865 11.0133 12.5332 11.3333 12.2132 11.6533L11.1998 12.7066C11.0532 12.8533 10.9865 13.0266 10.9865 13.24C10.9865 13.3466 10.9998 13.44 11.0265 13.5466C11.0665 13.6533 11.1065 13.7333 11.1332 13.8133C11.3732 14.2533 11.7865 14.8266 12.3732 15.52C12.9732 16.2133 13.6132 16.92 14.3065 17.6266C15.0265 18.3333 15.7198 18.9866 16.4265 19.5866C17.1198 20.1733 17.6932 20.5733 18.1465 20.8133C18.2132 20.84 18.2932 20.88 18.3865 20.92C18.4932 20.96 18.5998 20.9733 18.7198 20.9733C18.9465 20.9733 19.1198 20.8933 19.2665 20.7466L20.2798 19.7466C20.6132 19.4133 20.9332 19.16 21.2398 19C21.5465 18.8133 21.8532 18.72 22.1865 18.72C22.4398 18.72 22.7065 18.7733 22.9998 18.8933C23.2932 19.0133 23.5998 19.1866 23.9332 19.4133L28.3465 22.5466C28.6932 22.7866 28.9332 23.0666 29.0798 23.4C29.2132 23.7333 29.2932 24.0666 29.2932 24.44Z"
                    stroke="#13181F"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-dark-gray text-lg leading-[112%] font-medium">
                  Contact us
                </h3>
                <p className="text-base leading-[164%] text-center text-jet-black">
                  +998 99 874 56 78
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-4 p-6 bg-off-gray">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <path
                    d="M22.9995 27.3333H9.66618C5.66618 27.3333 2.99951 25.3333 2.99951 20.6666V11.3333C2.99951 6.66663 5.66618 4.66663 9.66618 4.66663H22.9995C26.9995 4.66663 29.6662 6.66663 29.6662 11.3333V20.6666C29.6662 25.3333 26.9995 27.3333 22.9995 27.3333Z"
                    stroke="#13181F"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.9998 12L18.8265 15.3333C17.4532 16.4267 15.1998 16.4267 13.8265 15.3333L9.6665 12"
                    stroke="#13181F"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-dark-gray text-lg leading-[112%] font-medium">
                  Email
                </h3>
                <p className="text-base leading-[164%] text-center text-jet-black">
                  heelo@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
