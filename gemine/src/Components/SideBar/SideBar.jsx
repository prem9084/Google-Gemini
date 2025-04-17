import React, { useState } from "react";
import "./SideBar.css";
import { MdOutlineMenu } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
const SideBar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (true) {
      setShow((prev) => !prev);
    }
  };

  return (
    <div className="sidebar ">
      <div className="top">
        <MdOutlineMenu size={25} className="menu" onClick={handleShow} />
        <div className="newChat">
          <FaPlus size={20} />
          {show ? <p>New Chat</p> : null}
        </div>
        {show ? (
          <div className="resent">
            <p className="resent-title">Resent</p>
            <div className="resent-entry">
              <FaRegMessage size={20} />
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item resent-entry">
          <FaRegQuestionCircle size={20} />
          {show ? <p>Help</p> : null}
        </div>
        <div className="bottom-item resent-entry">
          <FaHistory size={20} />

          {show ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item resent-entry ">
          <IoMdSettings size={20} />

          {show ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
