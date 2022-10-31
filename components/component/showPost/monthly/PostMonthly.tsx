import { observer } from "mobx-react-lite";
import React from "react";
import { setterStore } from "../../../../stores/setterStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import TabButton from "../../TabButton";
import PostMonthlyLike from "./PostMonthlyLike";
import PostMonthlyComment from "./PostMonthlyComment";
import PostMonthlyPoint from "./PostMonthlyPoint";

import PostMonthlyDiamond from "./PostMonthlyDiamond";

const PostMonthly = observer(() => {
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
          <PostMonthlyLike />
        ) : typeFilter === "comment" ? (
          <PostMonthlyComment />
        ) : typeFilter === "point" ? (
          <PostMonthlyPoint />
        ) : (
          <PostMonthlyDiamond />
        )}
      </div>
    </div>
  );
});
export default PostMonthly;
