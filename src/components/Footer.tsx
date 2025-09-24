import {
  FaTwitter,
  FaFacebookF,
  FaRss,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n, { changeLanguage } from "i18next";
import { useState } from "react";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || "en"
  );

  const { t } = useTranslation();
  const handleChangeLng = (lng: string) => {
    changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <p className="copyright">
            {t("footer.copyright")}
            {/* All rights reserved <span>Tarlan Alijanov</span> ©{" "} */}
            {new Date().getFullYear()}
          </p>
          <ul className="socialList">
            <li className="socialItem">{t("footer.follow")}</li>
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
            <select
              name="language"
              className="language"
              value={selectedLanguage}
              onChange={(e) => handleChangeLng(e.target.value)}
            >
              <option value="en">English</option>
              <option value="az">Azərbaycanca</option>
              <option value="tr">Türkçe</option>
              <option value="ru">Русский</option>
              <option value="de">Deutsch</option>
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
