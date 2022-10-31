import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import { getPostStore } from "../../stores/getPostStore";
const NavSinglePost = observer(() => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  useEffect(() => {
    const getPostById = async () => {
      await getPostStore.getPostById(id!);
    };
    getPostById();
  }, []);
  return (
    <div className="fixed top-0 w-screen  bg-primary pt-8 z-50">
      <div className="grid grid-cols-3 px-10 py-5">
        <div
          className="flex justify-start"
          onClick={() => {
            router.push("/");
          }}
        >
          <span className="text-white text-lg">
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
          </span>
        </div>
        {getPostStore.post.map((thePost) => {
          return (
            <div className="flex justify-center text-white text-lg">
              {thePost.topic}
            </div>
          );
        })}
        <div className="flex justify-end">
          <span className="text-white text-lg">
            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
          </span>
        </div>
      </div>
    </div>
  );
});

export default NavSinglePost;
