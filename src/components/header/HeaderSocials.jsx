import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/ChristopheMas" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/christophe-mas-277245140/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
