import React from "react";
import { observer } from "mobx-react-lite";
import { setterStore } from "../../stores/setterStore";
import StaticDailyChart from "./showChart/StaticDailyChart";
import StaticWeeklyChart from "./showChart/StaticWeeklyChart";
import StaticMonthlyChart from "./showChart/StaticMonthlyChart";
import PostDialy from "./showPost/daily/PostDialy";
import PostWeekly from "./showPost/weekly/PostWeekly";
import PostMonthly from "./showPost/monthly/PostMonthly";
const Home = observer(() => {
  const { typeReport, typeShow } = setterStore;
  console.log(typeShow);

  return (
    <div>
      {typeReport === "Daily" && typeShow === "chart" ? (
        <StaticDailyChart />
      ) : typeReport === "Weekly" && typeShow === "chart" ? (
        <StaticWeeklyChart />
      ) : typeReport === "Monthly" && typeShow === "chart" ? (
        <StaticMonthlyChart />
      ) : typeReport === "Daily" && typeShow === "list" ? (
        <PostDialy />
      ):typeReport === "Weekly" && typeShow === "list" ? (
        <PostWeekly/>
      ):typeReport === "Monthly" && typeShow === "list" ? (
        <PostMonthly/>
      )  : (
        <></>
      )}
    </div>
  );
});

export default Home;
