import React from "react";
import { observer } from "mobx-react-lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faMessage,
  faGift,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { setterStore } from "../../stores/setterStore";

const TabButton = observer(() => {
  const { typeFilter, setTypeFilter } = setterStore;
  return (
    <div className="bg-white">
      <div className="grid grid-cols-4 p-2">
        <div className="text-xs flex justify-center">
          <button
            className={
              typeFilter === "like"
                ? "bg-primary border border-primary rounded-full px-2 py-2 text-white"
                : "bg-white border border-primary rounded-full px-2 py-2 text-primary"
            }
            onClick={() => {
              setTypeFilter("like");
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> Like
          </button>
        </div>
        <div className="text-xs flex justify-center">
          <button
            className={
              typeFilter === "comment"
                ? "bg-primary border border-primary rounded-full px-2 py-2 text-white"
                : "bg-white border border-primary rounded-full px-2 py-2 text-primary"
            }
            onClick={() => {
              setTypeFilter("comment");
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> Comment
          </button>
        </div>
        <div className="text-xs flex justify-center">
          <button
            className={
              typeFilter === "point"
                ? "bg-primary border border-primary rounded-full px-2 py-2 text-white"
                : "bg-white border border-primary rounded-full px-2 py-2 text-primary"
            }
            onClick={() => {
              setTypeFilter("point");
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faGift}></FontAwesomeIcon> Point
          </button>
        </div>
        <div className="text-xs flex justify-center">
          <button
            className={
              typeFilter === "diamond"
                ? "bg-primary border border-primary rounded-full px-2 py-2 text-white"
                : "bg-white border border-primary rounded-full px-2 py-2 text-primary"
            }
            onClick={() => {
              setTypeFilter("diamond");
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faGem}></FontAwesomeIcon> Diamond
          </button>
        </div>
      </div>
    </div>
  );
});
export default TabButton;
