import React from "react";
import { Menubar } from "primereact/menubar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

export const Footer = () => {
  const menuItems = [
    {
      label: "GITHUB",
      icon: <FaGithub />,
      url: "https://github.com", 
    },
    {
      label: "LINKEDIN",
      icon: <FaLinkedin />,
      url: "https://linkedin.com", 
    },
    {
      label: "WEBSITE",
      icon: <RiExternalLinkLine />,
      url: "https://example.com", 
    },
  ];

  const handleMenuItemClick = (url) => {
    window.open(url, "_blank"); 
  };

  return (
    <div className="p-menubar justify-content-between px-5 shadow-8">
      <h3>
        &copy;{" "}
        <a href="https://sujanthapa.dev" target="_blank" rel="noopener noreferrer">
          Sujan. Made with lots of &hearts; &hearts; &hearts;
        </a>
      </h3>
      <Menubar
        model={menuItems.map((item) => ({
          label: (
            <>
              {item.icon} {/* Render icon */}
              <span>{item.label}</span> {/* Render label */}
            </>
          ),
          command: () => handleMenuItemClick(item.url), 
        }))}
        className="border-none"
      />
    </div>
  );
};