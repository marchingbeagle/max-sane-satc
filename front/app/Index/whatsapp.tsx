import React from "react";
import WhatsAppIcon from "./whatsappIcon";

const WhatsAppButton: React.FC = () => {
  return (
    <div className="buttonzap">
      <a
        href="https://api.whatsapp.com/send?phone="
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default WhatsAppButton;
