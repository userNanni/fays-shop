import { Outlet } from "react-router-dom";

import MenuBar from "../components/menuBar";

import { ThemeProvider } from "@/components/themeProvider.tsx";

export default function Root() {
  return (
    <ThemeProvider defaultTheme={"dark"} storageKey="vite-ui-theme">
      <>
        <MenuBar />
        <div id="detail">
          <Outlet />
        </div>
      </>
    </ThemeProvider>
  );
}
