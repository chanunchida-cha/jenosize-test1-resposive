import { observer } from "mobx-react-lite";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { setterStore } from "../../../../stores/setterStore";
import TabButton from "../../TabButton";
import PostDailLike from "./PostDailLike";
import PostDailtComment from "./PostDailtComment";
import PostDailyPoint from "./PostDailyPoint";
import PostDailyDiamond from "./PostDailyDiamond";

const PostDialy = observer(() => {
  const { typeFilter } = setterStore;
  return (
    <div className="bg-white h-screen">
      <div className="grid grid-cols-2 py-5 px-8 ">
        <div className="text-gray-400 text-sm">
          {new Date(setterStore.calendarDay).toLocaleDateString("en-GB")}
        </div>
        <div className="flex justify-end  pt-1 text-primary">
          <FontAwesomeIcon icon={faArrowUpFromBracket}></FontAwesomeIcon>
        </div>
      </div>
      <div>
        <TabButton />
      </div>
      <div className="px-8 py-3">
        {typeFilter === "like" ? (
          <PostDailLike />
        ) : typeFilter === "comment" ? (
          <PostDailtComment />
        ) : typeFilter === "point" ? (
          <PostDailyPoint />
        ) : (
          <PostDailyDiamond />
        )}
      </div>
    </div>
  );
});

export default PostDialy;
