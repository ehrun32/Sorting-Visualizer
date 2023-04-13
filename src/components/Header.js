import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

function Header() {
  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  };

  return (
    <div className="h-16 flex items-center justify-between bg-[#e1b382] p-4">
      {!showHeaderBar && (
        <div className="absolute right-0 bottom-0 h-32 w-full flex flex-col items-center justify-center bg-[#34495e]">
          <div className="text-lg mb-8">
            <h3 className="text-white font-mono font-semibold items-center justify-center">
              Frontend Developer
            </h3>

            <div className="flex flex-row items-center justify-center gap-x-4">
              <a
                href="https://ehrun32.github.io/" //Website
                rel="noreferrer"
                target="_blank"
              >
                <FaHome size={24} className="hover:text-[#fb8a2e] text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/arun-cheriakara-joseph-20a906125/" //Linkedin
                rel="noreferrer"
                target="_blank"
              >
                <BsLinkedin
                  size={24}
                  className="hover:text-[#0077B5] text-white"
                />
              </a>
              <a
                href="https://github.com/ehrun32" //Github
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub
                  size={24}
                  className="hover:text-[#f5f5f5] text-white"
                />
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="text-lg tracking-tighter font-mono font-semibold">
        Sorting <span className="text-red-900">Visualizer</span>
      </div>
      <div
        className="text-lg tracking-tighter font-mono font-semibold cursor-pointer"
        onClick={contactHandler}
      >
        Contact <span className="text-red-900">Me</span>
      </div>
    </div>
  );
}

export default Header;
