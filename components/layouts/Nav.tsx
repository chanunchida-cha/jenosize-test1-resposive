import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();
  return (
    <div className="fixed top-0 w-screen  bg-primary pt-8 z-50">
      <div className="grid grid-cols-3 px-10 py-5">
        <div className="flex justify-start" onClick={()=>{router.push("/")}}>
          <span className="text-white text-lg">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
          </span>
        </div>
        <div className="flex justify-center text-white text-lg">All Report</div>
        <div className="flex justify-end">
          <span className="text-white text-lg">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
