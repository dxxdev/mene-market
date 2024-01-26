import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import RatingBar from "./RatingBar";
import { commentRatingToArr } from "../data/data";
import CommentModal from "./CommentModal";

const Commentaries = ({ activeTab, setActiveTab, info }) => {
  const [ratingArr, setRatingArr] = useState([]);
  const [commentFilterValue, setCommentFilterValue] = useState("all");
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setRatingArr(commentRatingToArr(info.commentaries));
  }, []);
  console.log(ratingArr);
  return (
    <div className="pt-6 pb-6 flex flex-col items-start">
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
            className="p-0 py-6 flex flex-col gap-6 text-base leading-[164%] text-jet-black font-normal"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <h3 className="text-2xl font-semibold leading-[112%] text-jet-black">
                  Barcha sharhlar
                </h3>
                <p className="text-base text-dark-gray font-normal leading-[164%]">
                  ({info.commentaries.length})
                </p>
              </div>
              <div className="flex gap-2 items-stretch">
                <select
                  className="text-base leading-[164%] outline-none font-normal text-jet-black px-5 py-1 rounded-full bg-soft-gray"
                  name=""
                  id=""
                  defaultValue="all"
                  onChange={(e) => {
                    setCommentFilterValue(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="all">Barchasi</option>
                  {ratingArr &&
                    ratingArr.map((rating, index) => {
                      return (
                        <option value={rating} key={index}>
                          {rating}
                        </option>
                      );
                    })}
                </select>
                <button
                  onClick={() => setOpenModal(true)}
                  className="py-2 px-5  bg-jet-black rounded-full text-white leading-[164%] text-base font-normal"
                >
                  Fikr qoldirish
                </button>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {info.commentaries &&
                info.commentaries.map((comment) => {
                  if (commentFilterValue == "all") {
                    return (
                      <div
                        key={comment.id}
                        className="flex flex-col gap-6 justify-between px-8 py-7 rounded-[20px] border border-soft-gray"
                      >
                        <div className="flex flex-col gap-4">
                          <RatingBar product={comment} />
                          <div className="flex flex-col gap-3">
                            <h4 className="text-jet-black font-semibold text-xl leading-[112%]">
                              {comment.from}
                            </h4>
                            <blockquote className="text-sm leading-[112%] font-normal text-dark-gray">
                              {comment.comment}
                            </blockquote>
                          </div>
                        </div>
                        <p className="text-dark-gray text-base leading-[164%]">
                          {comment.date}
                        </p>
                      </div>
                    );
                  } else if (commentFilterValue == comment.rating) {
                    return (
                      <div
                        key={comment.id}
                        className="flex flex-col gap-6 justify-between px-8 py-7 rounded-[20px] border border-soft-gray"
                      >
                        <div className="flex flex-col gap-4">
                          <RatingBar product={comment} />
                          <div className="flex flex-col gap-3">
                            <h4 className="text-jet-black font-semibold text-xl leading-[112%]">
                              {comment.from}
                            </h4>
                            <blockquote className="text-sm leading-[112%] font-normal text-dark-gray">
                              {comment.comment}
                            </blockquote>
                          </div>
                        </div>
                        <p className="text-dark-gray text-base leading-[164%]">
                          {comment.date}
                        </p>
                      </div>
                    );
                  }
                })}
            </ul>
          </TabPanel>
        </TabsBody>
      </Tabs>
      {openModal && <CommentModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Commentaries;
