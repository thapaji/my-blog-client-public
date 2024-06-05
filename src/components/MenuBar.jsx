import { Menubar } from "primereact/menubar";
import React from "react";
import { RiBookLine, RiHomeLine, RiMailLine, RiUserLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const MenuBar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Home",
      icon: <RiHomeLine />,
      command: () => navigate("/"),
    },
    {
      label: "About",
      icon: <RiUserLine />,
      command: () => navigate("/about"),
    },
    {
      label: "Blogs",
      icon: <RiBookLine />,
      command: () => navigate("/blogs"),
    },
    {
      label: "Contact",
      icon: <RiMailLine />,
      command: () => navigate("/contact"),
    },
  ];

  return (
    <div className="p-menubar justify-content-between px-5 shadow-8">
      <h3>Welcome to my blog!!!</h3>
      <Menubar model={menuItems} className="border-none" />
    </div>
  );
};
