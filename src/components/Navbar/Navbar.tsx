"use client";

import { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import SidebarOverlay from "./SidebarOverlay";
import MobileHeaderNew from "./MobileHeaderNew";


export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  return (
    <>
      <MobileHeaderNew />
      <DesktopHeader setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && <SidebarOverlay onClose={() => setSidebarOpen(false)} />}
    </>
  );
}
