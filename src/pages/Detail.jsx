import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { useParams } from "react-router-dom";
import { products, savedProduct } from "../data/data";
import ViewImages from "../components/ViewImages";
import RatingBar from "../components/RatingBar";
import {
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { points } from "../data/points";

const Detail = () => {
  const { productName } = useParams();
  const [openViewImage, setOpenViewImage] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const info = products.find((product) => product.productName == productName);
  const [render, setRender] = useState();
  const [clientName, setClientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  // console.log(points);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className={`${styles.container}`}>
      <div className="pt-12 pb-6 flex flex-col md:flex-row gap-6 lg:gap-12">
        <div className="flex w-full gap-2.5">
          <ul className="w-12 hidden md:block lg:w-24 overflow-auto h-[450px] lg:h-[600px] scroll-none space-y-2.5">
            {info.images.slice(0, 4).map((image, index) => {
              return (
                <li
                  onClick={() => {
                    setActiveImage(index);
                  }}
                  key={index}
                  className={`p-0.5 cursor-pointer ${
                    activeImage === index
                      ? "opacity-100 bg-gray-800"
                      : "opacity-80 bg-transparent"
                  }`}
                >
                  <img src={image} alt={productName} />
                </li>
              );
            })}
          </ul>
          <div className="h-full overflow-hidden flex justify-center items-center relative max-h-[400px] lg:max-h-[600px]">
            <div className="absolute top-1/2 left-0 w-full flex justify-between items-center -translate-y-1/2 px-2">
              <button
                className="opacity-75"
                onClick={() =>
                  setActiveImage((prev) => {
                    if (prev == 0) {
                      return prev;
                    } else {
                      return prev - 1;
                    }
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM13.79 15C14.08 15.29 14.08 15.77 13.79 16.06C13.64 16.21 13.45 16.28 13.26 16.28C13.07 16.28 12.88 16.21 12.73 16.06L9.2 12.53C8.91 12.24 8.91 11.76 9.2 11.47L12.73 7.94C13.02 7.65 13.5 7.65 13.79 7.94C14.08 8.23 14.08 8.71 13.79 9L10.79 12L13.79 15Z"
                    fill="#949494"
                  />
                </svg>
              </button>
              <button
                className="opacity-75"
                onClick={() =>
                  setActiveImage((prev) => {
                    if (prev == info.images.length - 1) {
                      return prev;
                    } else {
                      return prev + 1;
                    }
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z"
                    fill="#949494"
                  />
                </svg>
              </button>
            </div>
            <img
              onClick={() => setOpenViewImage(true)}
              src={info.images[activeImage]}
              className="h-full cursor-pointer"
              alt=""
            />
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="w-full flex justify-between pb-2 items-center">
            <p className="text-sm leading-[112%] font-normal text-jet-black">
              {info.reservations} ta buyurtma
            </p>
            <RatingBar product={info} />
            <button
              onClick={() => {
                savedProduct(info);
                setRender((prev) => !prev);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill={`${info.saved ? "#FE3A30" : "none"}`}
                className="transition-all duration-750 active:scale-75"
              >
                <path
                  d="M11.62 19.2998C11.28 19.4198 10.72 19.4198 10.38 19.2998C7.48 18.3098 1 14.1798 1 7.17984C1 4.08984 3.49 1.58984 6.56 1.58984C8.38 1.58984 9.99 2.46984 11 3.82984C12.01 2.46984 13.63 1.58984 15.44 1.58984C18.51 1.58984 21 4.08984 21 7.17984C21 14.1798 14.52 18.3098 11.62 19.2998Z"
                  stroke="#FE3A30"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <h2 className="pb-6 text-3xl font-semibold leading-[112%]">
            {info.productName}
          </h2>
          <div className="flex flex-col pb-6 gap-2">
            <p>Rangini tanlang:</p>
            <div className="flex items-center gap-2.5">
              {info.colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveColor(index);
                      setActiveImage(color.image);
                      setRender((prev) => !prev);
                    }}
                    className={`w-16 cursor-pointer p-0.5 rounded-lg ${
                      activeColor == index ? "bg-gray-800" : "bg-transparent"
                    }`}
                  >
                    <img
                      src={info.images[color.image]}
                      className="rounded-lg"
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col pb-6 gap-2">
            <p>Miqdori:</p>
            <div className="flex items-center gap-2.5">
              <div className="flex border border-jet-black justify-between rounded-full p-1.5 gap-3 items-center">
                <button
                  disabled={info.countProduct == 1 ? true : false}
                  className={`${
                    info.countProduct == 1 ? "opacity-60" : "opacity-100"
                  }`}
                  onClick={() => {
                    setRender((prev) => !prev);
                    if (info.countProduct > 1) {
                      info.countProduct--;
                    } else {
                      info.countProduct = 1;
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M7.36719 10H14.0339"
                      stroke="#13181F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.20052 18.3333H13.2005C17.3672 18.3333 19.0339 16.6667 19.0339 12.5V7.50001C19.0339 3.33334 17.3672 1.66667 13.2005 1.66667H8.20052C4.03385 1.66667 2.36719 3.33334 2.36719 7.50001V12.5C2.36719 16.6667 4.03385 18.3333 8.20052 18.3333Z"
                      stroke="#13181F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p>{info.countProduct}</p>
                <button
                  disabled={
                    info.countProduct == info.colors[activeColor].theRest
                      ? true
                      : false
                  }
                  className={`${
                    info.countProduct == info.colors[activeColor].theRest
                      ? "opacity-60"
                      : "opacity-100"
                  }`}
                  onClick={() => {
                    setRender((prev) => !prev);
                    if (
                      info.countProduct > 0 &&
                      info.colors[activeColor].theRest > info.countProduct
                    ) {
                      info.countProduct++;
                    } else {
                      info.countProduct = info.colors[activeColor].theRest;
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M7.36719 10H14.0339"
                      stroke="#13181F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.7007 13.3333V6.66667"
                      stroke="#13181F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.20052 18.3333H13.2005C17.3672 18.3333 19.0339 16.6667 19.0339 12.5V7.50001C19.0339 3.33334 17.3672 1.66667 13.2005 1.66667H8.20052C4.03385 1.66667 2.36719 3.33334 2.36719 7.50001V12.5C2.36719 16.6667 4.03385 18.3333 8.20052 18.3333Z"
                      stroke="#13181F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {info.colors[activeColor].theRest > 0 && (
                <p
                  className={`text-base leading-none gap-2 flex w-full justify-start items-center text-earth-green`}
                >
                  Sotuvda {info.colors[activeColor].theRest}ta bor
                </p>
              )}
              {info.colors[activeColor].theRest == 0 && (
                <p className="text-sm">Sotuvda qolmadi</p>
              )}
            </div>
          </div>
          <div className="flex flex-col pb-6 gap-2">
            <p>Narxi:</p>
            <div className="flex gap-2.5 items-center">
              <p className="text-xl leading-[112%] font-semibold text-jet-black">
                ${info.discountPrice() * info.countProduct}
              </p>
              <p className="text-xl leading-[112%] font-semibold text-dark-gray">
                <del>${info.price * info.countProduct}</del>
              </p>
              <span className="px-[14px] py-1.5 rounded-full text-sm leading-[112%] font-normal bg-off-red text-red-velvet">
                -${info.howMuchDiscount()}%
              </span>
            </div>
          </div>
          <div className="w-full p-4 rounded-lg border-[0.5px] border-deepsky-blue gap-2 flex items-start bg-off-blue">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M8.70085 1.33333C5.02751 1.33333 2.03418 4.32667 2.03418 8C2.03418 11.6733 5.02751 14.6667 8.70085 14.6667C12.3742 14.6667 15.3675 11.6733 15.3675 8C15.3675 4.32667 12.3742 1.33333 8.70085 1.33333ZM8.20085 5.33333C8.20085 5.06 8.42751 4.83333 8.70085 4.83333C8.97418 4.83333 9.20085 5.06 9.20085 5.33333V8.66667C9.20085 8.94 8.97418 9.16667 8.70085 9.16667C8.42751 9.16667 8.20085 8.94 8.20085 8.66667V5.33333ZM9.31418 10.92C9.28085 11.0067 9.23418 11.0733 9.17418 11.14C9.10751 11.2 9.03418 11.2467 8.95418 11.28C8.87418 11.3133 8.78751 11.3333 8.70085 11.3333C8.61418 11.3333 8.52751 11.3133 8.44751 11.28C8.36751 11.2467 8.29418 11.2 8.22751 11.14C8.16751 11.0733 8.12085 11.0067 8.08751 10.92C8.05418 10.84 8.03418 10.7533 8.03418 10.6667C8.03418 10.58 8.05418 10.4933 8.08751 10.4133C8.12085 10.3333 8.16751 10.26 8.22751 10.1933C8.29418 10.1333 8.36751 10.0867 8.44751 10.0533C8.60751 9.98667 8.79418 9.98667 8.95418 10.0533C9.03418 10.0867 9.10751 10.1333 9.17418 10.1933C9.23418 10.26 9.28085 10.3333 9.31418 10.4133C9.34751 10.4933 9.36751 10.58 9.36751 10.6667C9.36751 10.7533 9.34751 10.84 9.31418 10.92Z"
                  fill="url(#paint0_linear_478_5204)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_478_5204"
                    x1="2.03418"
                    y1="1.33333"
                    x2="17.7847"
                    y2="5.47547"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#08C8F9" />
                    <stop offset="1" stopColor="#1A3EDD" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <p className="text-[15px] leading-[112%] font-normal text-jet-black">
              Yetqazib berish summasi manzilingizga ko'ra 2 dollardan
              boshlanadi. Yoki 2 ta mahsulot xarid qiling va yetqazib berish
              bepul. (bonusli mahsulotlar bundan istisno)
            </p>
          </div>
          <div className="flex pt-6 flex-col pb-6 gap-6">
            <h6 className="text-lg leading-[112%] text-jet-black font-semibold">
              Buyurtma rasmiylashtirish
            </h6>
            <div className="flex flex-col gap-y-3 w-full istre md:items-start">
              <div className="relative w-full">
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  id="client_name"
                  className={`block text-base font-normal px-5 py-2 w-full leading-[164%] text-jet-black bg-transparent rounded-full appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border ${
                    clientName !== ""
                      ? "border-deepsky-blue"
                      : "focus:border-blue-600"
                  }`}
                  placeholder=""
                />
                <label
                  htmlFor="client_name"
                  className={`absolute transition-all duration-300 ${
                    clientName !== ""
                      ? "left-2 top-0 text-deepsky-blue peer-focus:text-deepsky-blue scale-75 px-2"
                      : "left-4 cursor-text peer-focus:cursor-default top-1/2 text-dark-gray scale-100 px-0 peer-focus:-translate-y-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:px-2 peer-focus:left-2 peer-focus:text-deepsky-blue"
                  } -translate-y-1/2 bg-white`}
                >
                  Ismingiz
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id="phone_number"
                  className={`block text-base font-normal px-5 py-2 w-full leading-[164%] text-jet-black bg-transparent rounded-full appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border ${
                    phoneNumber !== ""
                      ? "border-deepsky-blue"
                      : "focus:border-blue-600"
                  }`}
                  placeholder=""
                />
                <label
                  htmlFor="phone_number"
                  className={`absolute transition-all duration-300 ${
                    phoneNumber !== ""
                      ? "-left-1 top-0 text-deepsky-blue peer-focus:text-deepsky-blue scale-75 px-2"
                      : "left-4 cursor-text peer-focus:cursor-default top-1/2 text-dark-gray scale-100 px-0 peer-focus:-translate-y-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:px-2 peer-focus:-left-1 peer-focus:text-deepsky-blue"
                  } -translate-y-1/2 bg-white`}
                >
                  Telefon raqamingiz
                </label>
              </div>
              <div className="relative w-full">
                <Select
                  label="Yashash manzilingiz"
                  color="blue"
                  labelProps={{
                    className:
                      "left-4 z-10 w-[calc(100%-30px)] after:border-t-2 after:border-r-0 after:h-0.5 before:hidden bg-transparent",
                  }}
                  className="rounded-full"
                >
                  {points.map((point, index) => {
                    return (
                      <Option key={index} value={point}>
                        {point}
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <button className="gradient-btn flex justify-center items-center !px-4 hover:opacity-90">
                <span className="text-base leading-[164%] font-normal text-white">
                  Xarid qilish
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M6.36719 9.5C6.36719 10.78 7.42052 11.8333 8.70052 11.8333C9.98052 11.8333 11.0339 10.78 11.0339 9.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.57398 1.33333L4.16064 3.75333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.8271 1.33333L13.2405 3.75333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.03418 5.23333C2.03418 3.99999 2.69418 3.89999 3.51418 3.89999H13.8875C14.7075 3.89999 15.3675 3.99999 15.3675 5.23333C15.3675 6.66666 14.7075 6.56666 13.8875 6.56666H3.51418C2.69418 6.56666 2.03418 6.66666 2.03418 5.23333Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3.03418 6.66667L3.97418 12.4267C4.18751 13.72 4.70085 14.6667 6.60751 14.6667H10.6275C12.7008 14.6667 13.0075 13.76 13.2475 12.5067L14.3675 6.66667"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-32 flex flex-col items-start">
        <Tabs value={activeTab} className="w-full">
          <TabsHeader
            className="rounded-none border-b-2 border-b-transparent w-max flex gap-6 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-deepsky-blue shadow-none rounded-none",
            }}
          >
            <Tab
              value="description"
              className="w-max p-0 text-lg leading-[112%] font-medium text-jet-black pb-1"
              onClick={() => setActiveTab("description")}
            >
              Mahsulot tavsifi
            </Tab>
            <Tab
              value="commentaries"
              className="w-max p-0 text-lg leading-[112%] font-medium text-jet-black pb-1"
              onClick={() => setActiveTab("commentaries")}
            >
              Sharhlar
            </Tab>
          </TabsHeader>
          <TabsBody className="p-0">
            <TabPanel
              value="description"
              className="p-0 py-6 text-base leading-[164%] text-jet-black font-normal"
            >
              {info.description.map((descript, index) => {
                return <p key={index}>{descript}</p>;
              })}
            </TabPanel>
            <TabPanel
              value="commentaries"
              className="p-0 py-6 text-base leading-[164%] text-jet-black font-normal"
            >
              commentaries
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
      {openViewImage && (
        <ViewImages
          images={info.images}
          index={activeImage}
          setActiveImage={setActiveImage}
          setOpenViewImage={setOpenViewImage}
        />
      )}
    </div>
  );
};

export default Detail;
