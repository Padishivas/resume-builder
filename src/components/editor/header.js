import { useState, useRef } from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiPirateFlag } from "react-icons/gi";
import { FaFlagCheckered } from "react-icons/fa";
import { v4 as uuid } from "uuid";

import Dropdown from "./dropdown";
import "../../styles/header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const inpRef = useRef(null);
  const dropdownItems = [
    <div className="dropdown-item">
      <GiPirateFlag className="dropdown-img" />
      <p className="dropdown-text">Pirate</p>
    </div>,
    <div className="dropdown-item">
      <LiaFlagUsaSolid className="dropdown-img" />
      <p className="dropdown-text">English</p>
    </div>,
    <div className="dropdown-item">
      <FaFlagCheckered className="dropdown-img" />
      <p className="dropdown-text">Checkered</p>
    </div>,
  ];
  const [selected, setSelected] = useState(0);
  const [title, setTitle] = useState("Untitled");
  const handleChange = (e) => {
    if(e.target.value.length) setTitle(e.target.value)
    else setTitle("Untitled");
  };
  return (
    <div className="resumeEditor-header-container">
      <div className="resumeEditor-header-title">
        <div className="resumeEditor-header-titleInput">
          <input
            ref={inpRef}
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder="Untitled"
            className=""
          />
          <div>{title}</div>
        </div>
        <div className="resumeEditor-header-language">
          <div onClick={() => setOpen(true)}>{dropdownItems[selected]}</div>
          <Dropdown open={open} setOpen={setOpen}>
            {dropdownItems.map((e, i) => {
              return (
                <div
                  key={uuid()}
                  onClick={() => {
                    setSelected(i);
                    setOpen(false);
                  }}
                >
                  {e}
                </div>
              );
            })}
          </Dropdown>
        </div>
      </div>
      <div className="resumeEditor-header-completion">
        <div className="resumeEditor-header-score-container">
          <p className="resumeEditor-header-scorePercent">100%</p>
          <p className="resumeEditor-header-scoreText">Resume Score</p>
        </div>
        <div className="resumeEditor-header-score-bar" />
      </div>
    </div>
  );
};

export default Header;
