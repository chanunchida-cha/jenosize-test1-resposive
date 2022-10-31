import React from "react";
import { observer } from "mobx-react-lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faList } from "@fortawesome/free-solid-svg-icons";
import { setterStore } from "../../stores/setterStore";

const TabDate = observer(() => {
  const { typeShow, typeReport, setTypeReport, setTypeShow } = setterStore;
  return (
    <div className="w-screen grid grid-cols-4 border-b border-gray-200 bg-white py-2 text-gray-400 text-sm z-50">
      <div className="flex justify-center hover:font-semibold">
        <a
          className={typeReport === "Daily" ? "text-black border-b-2 border-primary":"hover:text-black hover:border-b-2 hover:border-primary"}
          onClick={() => {
            setTypeReport("Daily");
          }}
        >
          Daily
        </a>
      </div>
      <div className="flex justify-center hover:font-semibold">
        <a
          className={typeReport === "Weekly" ? "text-black border-b-2 border-primary":"hover:text-black hover:border-b-2 hover:border-primary"}
          onClick={() => {
            setTypeReport("Weekly");
          }}
        >
          Weekly
        </a>
      </div>
      <div className="flex justify-center hover:font-semibold">
        <a
          className={typeReport === "Monthly" ? "text-black border-b-2 border-primary":"hover:text-black hover:border-b-2 hover:border-primary"}
          onClick={() => {
            setTypeReport("Monthly");
          }}
        >
          Monthly
        </a>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-end ">
          <a
               className={typeShow === "chart"?" text-primary pr-4":" hover:text-primary pr-4"}
            onClick={() => {
              setTypeShow("chart");
            }}
          >
            <FontAwesomeIcon icon={faChartSimple}></FontAwesomeIcon>
          </a>
        </div>
        <div>
          <div className="flex justify-center ">
            <a
              className={typeShow === "list"?" text-primary pr-4":" hover:text-primary pr-4"}
              onClick={() => {
                setTypeShow("list");
              }}
            >
              <FontAwesomeIcon icon={faList}></FontAwesomeIcon>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TabDate;
