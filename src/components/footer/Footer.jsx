import React from "react";
import './footer.css'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}. created by Yujia</p>
    </footer>
  );
}

export default Footer;
