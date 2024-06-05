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
    <div className="flex p-5 shadow-8 justify-content-between align-items-center">
      <div>
        &copy;{" "}
        <a href="https://sujanthapa.dev" target="_blank" rel="noopener noreferrer">
          Sujan. All rights reserved.
        </a>
        {" " + new Date().getFullYear() + ". "}
        Made with lots of &hearts; &hearts; &hearts;
      </div>
      <div>
        <a
          href="https://github.com/thapaji"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-900 text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sujan-bikram-thapa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="http://sujanthapa.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-900 text-3xl"
        >
          <RiExternalLinkLine />
        </a>
      </div>
    </div>
  );
};
