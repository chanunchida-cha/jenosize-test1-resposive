import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faArrowUpFromBracket,
  faMessage,
  faGift,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { getPostStore } from "../../../stores/getPostStore";
import { Post } from "../../../models/post";
import { setterStore } from "../../../stores/setterStore";
const StaticDailyChart = observer(() => {
  useEffect(() => {
    const getPost = async () => {
      await getPostStore.getPosts();
    };
    getPost();
  }, []);

  const totalLike = getPostStore.posts
    .filter((post: Post) =>
      new Date(post.date)
        .toLocaleDateString("en-GB")
        .includes(new Date(setterStore.calendarDay).toLocaleDateString("en-GB"))
    )
    .reduce((prev, cur) => cur.like + prev, 0);

  const totalComment = getPostStore.posts
    .filter((post: Post) =>
      new Date(post.date)
        .toLocaleDateString("en-GB")
        .includes(new Date(setterStore.calendarDay).toLocaleDateString("en-GB"))
    )
    .reduce((prev, cur) => cur.comment.length + prev, 0);
  const totalPoint = getPostStore.posts
    .filter((post: Post) =>
      new Date(post.date)
        .toLocaleDateString("en-GB")
        .includes(new Date(setterStore.calendarDay).toLocaleDateString("en-GB"))
    )
    .reduce((prev, cur) => cur.point + prev, 0);
  const totalDiamond = getPostStore.posts
    .filter((post: Post) =>
      new Date(post.date)
        .toLocaleDateString("en-GB")
        .includes(new Date(setterStore.calendarDay).toLocaleDateString("en-GB"))
    )
    .reduce((prev, cur) => cur.diamont + prev, 0);

  return (
    <div className="bg-white h-screen">
      <div className="grid grid-cols-2 py-5 px-8 ">
        <div className="text-gray-400">
          {new Date(setterStore.calendarDay).toLocaleDateString("en-GB")}
        </div>
        <div className="flex justify-end  pt-1 text-primary">
          <FontAwesomeIcon icon={faArrowUpFromBracket}></FontAwesomeIcon>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 px-8 pt-5">
        <div className="p-10 border border-gray-200 rounded-lg">
          <div className="flex justify-center">
            <div className="grid grid-rows-3 ">
              <div className="text-primary flex justify-center">
                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                <a className="pl-2">Like</a>
              </div>
              <div className="flex justify-center text-3xl font-semibold">
                {totalLike}
              </div>
              <div className="flex justify-center text-sm text-gray-400">
                Likes
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 border border-gray-200 rounded-lg">
          <div className="flex justify-center">
            <div className="grid grid-rows-3 ">
              <div className="text-primary flex justify-center">
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                <a className="pl-2">Comment</a>
              </div>
              <div className="flex justify-center text-3xl font-semibold">
                {totalComment}
              </div>
              <div className="flex justify-center text-sm text-gray-400">
                comments
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 border border-gray-200 rounded-lg">
          <div className="flex justify-center">
            <div className="grid grid-rows-3 ">
              <div className="text-primary flex justify-center">
                <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
                <a className="pl-2">Point</a>
              </div>
              <div className="flex justify-center text-3xl font-semibold">
                {totalPoint}
              </div>
              <div className="flex justify-center text-sm text-gray-400">
                Point
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 border border-gray-200 rounded-lg">
          <div className="flex justify-center">
            <div className="grid grid-rows-3 ">
              <div className="text-primary flex justify-center">
                <FontAwesomeIcon icon={faGem}></FontAwesomeIcon>
                <a className="pl-2">Diamond</a>
              </div>
              <div className="flex justify-center text-3xl font-semibold">
                {totalDiamond}
              </div>
              <div className="flex justify-center text-sm text-gray-400">
                Dimond
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default StaticDailyChart;
