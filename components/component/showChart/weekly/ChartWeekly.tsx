import React from "react";
import { observer } from "mobx-react-lite";
import { setterStore } from "../../../../stores/setterStore";
import LikeChart from "./LikeChart";
import CommentChart from "./CommentChart";
import PointChart from "./PointChart";
import DiamondChart from "./DiamondChart";

const ChartWeekly = observer(() => {
  const { typeFilter } = setterStore;


  return (
    <div>
      {typeFilter === "like" ? (
        <LikeChart />
      ) : typeFilter === "comment" ? (
        <CommentChart />
      ) : typeFilter === "point" ? (
        <PointChart />
      ) : (
        <DiamondChart />
      )}
    </div>
  );
});

export default ChartWeekly;
