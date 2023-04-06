import React from "react";
import "../footer.css";

function Footer() {
  return (
    <>
    <footer className="footerDiv">
      <div className="background-div">
        <ul className="ul-footer">
          <li className="li-footer">
            <a className="link-footer" href="https://twitter.com/julesforrest">Twitter</a>
          </li>
          <li className="li-footer">
            <a className="link-footer" href="https://codepen.io/julesforrest">Codepen</a>
          </li>
          <li className="li-footer">
            <a className="link-footer" href="mailto:julesforrest@gmail.com">Email</a>
          </li>
          <li className="li-footer">
            <a className="link-footer" href="https://dribbble.com/julesforrest">Dribbble</a>
          </li>
          <li className="li-footer">
            <a className="link-footer" href="https://github.com/julesforrest">Github</a>
          </li>
          <li className="li-footer">
            <p>👋</p>
          </li>
        </ul>
      </div>
    </footer>
    </>
  );
}

export default Footer;
