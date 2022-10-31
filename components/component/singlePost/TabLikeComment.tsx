import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faMessage } from "@fortawesome/free-solid-svg-icons";
const TabLikeComment = () => {
    const [like, setLike] = useState(0);
  return (
    <div className="grid grid-cols-5 pt-2 ">
      <div className="text-xs text-gray-500 flex justify-center">
        {" "}
        2 days ago
      </div>
      <div className="text-xs text-primary flex justify-center">
        {" "}
        {like} Likes
      </div>
      <div className="col-start-4 text-xs text-primary flex justify-center">
        {" "}
        <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> Reply
      </div>
      <div
        className="col-start-5 text-xs text-primary flex justify-center"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {" "}
        <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> Like
      </div>
    </div>
  );
};

export default TabLikeComment;
