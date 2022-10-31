import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { getPostStore } from "../../../stores/getPostStore";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCalendarDays,
  faImage,
  faPaperclip,
  faChevronRight,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import TabLikeComment from "./tabLikeComment";
const SinglePost = observer(() => {
  const router = useRouter();

  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    const getPostById = async () => {
      await getPostStore.getPostById(id!);
    };
    getPostById();
  }, []);

  console.log(getPostStore.post);

  return (
    <div className="bg-white  mt-24 mb-20">
      {getPostStore.post.map((thePost) => {
        return (
          <>
            <div className="grid grid-cols-10 py-5 gap-2  px-8 ">
              <div className="col-span-1 ">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="text-gray-400 text-3xl"
                ></FontAwesomeIcon>
              </div>
              <div className="col-span-6 ">
                <div className="text-sm font-semibold">{thePost.author}</div>
                <div className="text-xs text-gray-500">{thePost.topic}</div>
              </div>
              <div className="col-span-3">
                <div className="text-xs text-gray-400">
                  <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                  {new Date(thePost.date).toLocaleDateString("en-GB")}
                </div>
              </div>
            </div>
            <div className=" px-8">
              <div className="text-xs text-gray-400">{thePost.topic}</div>
              <div className="text-xs">{thePost.post}</div>
            </div>
            <div className="mt-5 px-8">
              <div className="text-xs text-gray-400">Image</div>
              <div className="grid grid-cols-5 gap-2">
                <div className="text-gray-500">
                  <FontAwesomeIcon
                    className="text-6xl"
                    icon={faImage}
                  ></FontAwesomeIcon>
                </div>
                <div className="text-gray-500">
                  <FontAwesomeIcon
                    className="text-6xl"
                    icon={faImage}
                  ></FontAwesomeIcon>
                </div>
                <div className="text-gray-500">
                  <FontAwesomeIcon
                    className="text-6xl"
                    icon={faImage}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="mt-5 px-8">
              <div className="text-xs text-gray-400">Attach Filte</div>
              <div className="grid grid-cols-10 gap-2 mt-2">
                <div className="text-gray-500">
                  <FontAwesomeIcon
                    className="text-sm text-gray-400"
                    icon={faPaperclip}
                  ></FontAwesomeIcon>
                </div>
                <div className="col-span-9 text-sm text-primary">
                  Update Design
                </div>
              </div>
            </div>
            <div className="mt-5 bg-third grid grid-cols-4 px-5 py-3">
              <div className="text-xs text-gray-500 flex justify-center border-r border-gray-500">
                Read(2)
              </div>
              <div className="text-xs text-gray-500 flex justify-center border-r border-gray-500">
                Unread(0)
              </div>
              <div className="text-xs text-gray-500 flex justify-center ">
                Like({thePost.like})
              </div>
              <div className="text-xs text-primary flex justify-end">
                View <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 px-12 py-3">
              <div className="flex justify-center">
                <button className="text-xs text-primary  border border-primary rounded-xl w-full py-1 hover:bg-primary hover:text-white">
                  <FontAwesomeIcon icon={faGift}></FontAwesomeIcon> Gift Point
                </button>
              </div>
              <div className="flex justify-center">
                <button className="text-xs text-primary  border border-primary rounded-xl w-full py-1 hover:bg-primary hover:text-white">
                  <FontAwesomeIcon icon={faGift}></FontAwesomeIcon> Gift Point
                </button>
              </div>
            </div>
            {thePost.comment.map((theComment) => {
              return (
                <div
                  key={theComment.id}
                  className="border-b border-t border-gray-300  py-5  px-8"
                >
                  <div className="grid grid-cols-10  gap-2  ">
                    <div className="col-span-1 ">
                      <FontAwesomeIcon
                        icon={faCircleUser}
                        className="text-gray-400 text-3xl"
                      ></FontAwesomeIcon>
                    </div>
                    <div className="col-span-6 ">
                      <div className="text-sm font-semibold">
                        {theComment.author}
                      </div>
                      <div className="text-xs text-gray-500">
                        {thePost.topic}
                      </div>
                    </div>
                  </div>
                  <div className=" text-sm">{theComment.comment}</div>
                  <div>
                    <TabLikeComment />
                  </div>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
});
export default SinglePost;
