import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Post } from "../../../../models/post";
import { getPostStore } from "../../../../stores/getPostStore";
import { setterStore } from "../../../../stores/setterStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faGem } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
const PostMonthlyDiamond = observer(() => {
  const router = useRouter();
  useEffect(() => {
    const getPost = async () => {
      await getPostStore.getPosts();
    };
    getPost();
  }, []);

  return (
    <div>
      {getPostStore.posts
        .filter((post) => {
          return new Date(post.date).getMonth() === setterStore.calendarMont;
        })
        .map((post: Post, index: number) => {
          return (
            <div className=" grid grid-cols-12 pb-3" key={index}
            onClick={() => {
              router.push(`/post/${post.id}`);
            }}
            >
              <div className="bg-seccond rounded-full flex justify-center text-white py-1 text-sm  h-min my-auto">
                {index + 1}
              </div>
              <div className="col-start-3 col-span-6 border border-gray-300  p-2">
                <div className="grid grid-cols-6">
                  <div className="grid grid-rows-2 my-auto">
                    <div className="row-span-2 text-gray-400 text-lg">
                      <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="col-span-5 ">
                    <div className="grid grid-rows-2">
                      <div className="text-sm font-semibold">{post.author}</div>
                      <div className="text-xs ">{post.topic}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4  border border-gray-300  p-2">
                <div className=" text-xs   my-auto">
                  <FontAwesomeIcon
                    className="text-primary pr-2"
                    icon={faGem}
                  ></FontAwesomeIcon>

                  {` ${post.diamont} Likes`}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
});
export default PostMonthlyDiamond;
