import { Menubar } from "primereact/menubar";
import React from "react";
import { RiHomeLine, RiLogoutBoxLine, RiUserLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const MenuBar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Home",
      icon: <RiHomeLine />,
      command: () => navigate("/dashboard"),
    },
    {
      label: "Profile",
      icon: <RiUserLine />,
      command: () => navigate("/profile"),
    },
    {
      label: "Signout",
      icon: <RiLogoutBoxLine />,
    },
  ];

  return (
    <div className="p-menubar justify-content-between px-5 shadow-8">
      <h3>Hello Sujan</h3>
      <Menubar model={menuItems} className="border-none" />
    </div>
  );
};
