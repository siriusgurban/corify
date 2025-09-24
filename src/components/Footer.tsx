import {
  FaTwitter,
  FaFacebookF,
  FaRss,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const handleChangeLng = (lng: string) => {
    
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <p className="copyright">
            All rights reserved <span>Tarlan Alijanov</span> ©{" "}
            {new Date().getFullYear()}
          </p>
          <ul className="socialList">
            <li className="socialItem">Follow us</li>
            <li className="socialItem">
              <FaTwitter />
            </li>
            <li className="socialItem">
              <FaFacebookF />
            </li>
            <li className="socialItem">
              <FaRss />
            </li>
            <li className="socialItem">
              <FaInstagram />
            </li>
            <li className="socialItem">
              <FaYoutube />
            </li>
          </ul>
          <div className="inps">
            <select name="language" className="language" onChange={(e)=>handleChangeLng(e.target.value)}>
              <option value="en">English</option>
              <option value="az">Azərbaycanca</option>
              <option value="tr">Türkçe</option>
            </select>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
