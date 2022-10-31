import React from "react";
import { observer } from "mobx-react-lite";
import { setterStore } from "../../../../stores/setterStore";
import LikeChart from "../monthly/LikeChart";
import CommentChart from "../monthly/CommentChart";
import PointChart from "../monthly/PointChart";
import DiamondChart from "../monthly/DiamondChart";

const ChartMonthly = observer(() => {
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
export default ChartMonthly;
