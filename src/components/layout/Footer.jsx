import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Ekart Products</h2>

        <p>We are trying to give you the best </p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mekart</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a target = "" href="https://youtube.com/@komalkharbanda">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/komal.kharbanda">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/kkharbanda">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
