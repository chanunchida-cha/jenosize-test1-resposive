import React, { ReactElement } from "react";
import { observer } from "mobx-react-lite";
import TabBar from "../util/TabBar";
import TabDate from "../util/TabDate";
import Footer from "./Footer";
import Nav from "./Nav";
import CalendarWeekly from "./CalendarWeekly";
import { setterStore } from "../../stores/setterStore";
import CalendarDaily from "./CalendarDaily";
import CalendarMonthly from "./CalendarMonthly";
import { useRouter } from "next/router";
import NavSinglePost from "./NavSinglePost";
import FooterSinglePost from "./FooterSinglePost";

interface Props {
  children: React.ReactNode;
}

const Layout = observer(({ children }: Props): ReactElement => {
  const { typeReport } = setterStore;
  const router = useRouter();

  console.log("rputer", router.asPath);

  return (
    <div>
  
      {!router.pathname.startsWith("/post") ? (
        <>
          <div>
            <Nav />
          </div>
          <div className="mt-24">
            <TabBar />
          </div>
          <div>
            <TabDate />
          </div>
          <div className="h-28 overflow-y-auto">
            {typeReport === "Daily" ? (
              <CalendarDaily />
            ) : typeReport === "Weekly" ? (
              <CalendarWeekly />
            ) : (
              <CalendarMonthly />
            )}
          </div>{" "}
          <div className="fixed bottom-0">
        <Footer />
      </div>
        </>

      ) : (
        <>
        <div><NavSinglePost/></div>
        <div><FooterSinglePost/></div>
        </>
      )}
      <main>{children}</main>
     
    </div>
  );
});

export default Layout;
