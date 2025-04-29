import React from "react";

const footerStyle = {
  backgroundSize: "cover",
};

const Footer = () => {
  return (
    <footer
      style={footerStyle}
      className="bg-dark text-white text-center py-5 mt-auto"
    >
      Copyright © Your Website 2019
    </footer>
  );
};

export default Footer;