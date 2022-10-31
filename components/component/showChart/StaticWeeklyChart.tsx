import React from "react";
import { observer } from "mobx-react-lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import TabButton from "../TabButton";
import ChartWeekly from "./weekly/ChartWeekly";
import { setterStore } from "../../../stores/setterStore";

const StaticWeeklyChart = observer(() => {
  return (
    <div className="bg-white h-screen">
      <div className="grid grid-cols-3 py-5 px-8 ">
        <div className="col-span-2 text-gray-400 text-sm">{`${new Date(setterStore.calenderBetween.start).toLocaleDateString("en-GB") } - ${new Date(setterStore.calenderBetween.end).toLocaleDateString("en-GB")}`}</div>
        <div className="flex justify-end  pt-1 text-primary">
          <FontAwesomeIcon icon={faArrowUpFromBracket}></FontAwesomeIcon>
        </div>
      </div>
      <div>
        <TabButton />
      </div>
      <div>
        <ChartWeekly />
      </div>
    </div>
  );
});

export default StaticWeeklyChart;
