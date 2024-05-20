import { Outlet } from "react-router-dom";

import { MenuBar } from "@/components/menuBar";

export default function Root() {
  return (
    <>
      <MenuBar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
