import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCircleCheck,
  faPaperPlane,
  faChartPie,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="w-screen bg-white fixed bottom-0 border-t border-gray-200">
      <div className="grid grid-cols-5  text-gray-400 py-2">
        <div className="flex justify-center hover:text-primary">
          <div className="grid grid-rows-2 ">
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
            </div>

            <div className="text-sm ">Write</div>
          </div>
        </div>
        <div className="flex justify-center hover:text-primary">
          <div className="grid grid-rows-2 ">
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
            </div>

            <div className="text-sm "> Approval</div>
          </div>
        </div>
        <div className="flex justify-center hover:text-primary">
          <div className="grid grid-rows-2 ">
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </div>

            <div className="text-sm "> Report</div>
          </div>
        </div>
        <div className="flex justify-center hover:text-primary">
          <div className="grid grid-rows-2 ">
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faChartPie}></FontAwesomeIcon>
            </div>

            <div className="text-sm "> Static</div>
          </div>
        </div>
        <div className="flex justify-center hover:text-primary">
          <div className="grid grid-rows-2 ">
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
            </div>

            <div className="text-sm "> Setting</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
