import { observer } from "mobx-react-lite";
import React from "react";
import { setterStore } from "../../../../stores/setterStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import TabButton from "../../TabButton";
import PostWeeklyLike from "./PostWeeklyLike";
import PostWeeklyComment from "./PostWeeklyComment";
import PostWeeklyPoint from "./PostWeeklyPoint";
import PostWeeklyDiamond from "./PostWeeklyDiamond";
const PostWeekly = observer(() => {
  const { typeFilter } = setterStore;
  return (
    <div className="bg-white h-screen">
         <div className="grid grid-cols-3 py-5 px-8 ">
        <div className="col-span-2 text-gray-400 text-sm">{`${new Date(setterStore.calenderBetween.start).toLocaleDateString("en-GB") } - ${new Date(setterStore.calenderBetween.end).toLocaleDateString("en-GB")}`}</div>
        <div className="flex justify-end  pt-1 text-primary">
          <FontAwesomeIcon icon={faArrowUpFromBracket}></FontAwesomeIcon>
        </div>
      </div>
      <div>
        <TabButton />
      </div>
      <div className="px-8 py-3">
        {typeFilter === "like" ? (
          <PostWeeklyLike />
        ) : typeFilter === "comment" ? (
          <PostWeeklyComment />
        ) : typeFilter === "point" ? (
          <PostWeeklyPoint />
        ) : (
          <PostWeeklyDiamond />
        )}
      </div>
    </div>
  );
});

export default PostWeekly;
