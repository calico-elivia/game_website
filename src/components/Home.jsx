import { Link } from "react-router-dom";
import Logo from "../img/logo.jpg";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="appLogo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="title">Antitoken</div>
      <div className="subtitle">Entangled Tokenomics for DeSci</div>
      <div className="cardWrap">
        <div className="tokenCard">
          <h4>AntiToken ($ANTI)</h4>
          <p>Address:</p>
          <p>Track on:</p>
        </div>
        <div className="tokenCard">
          <h4>ProToken ($PRO)</h4>
          <p>Address:</p>
          <p>Track on:</p>
        </div>
      </div>
      <div className="linkSection">
        <Link to="/roadmap">See Roadmap</Link>
        <p>Antitoken Roadmap</p>
      </div>
      <div className="linkSection">
        <Link to="/whitepaper">See Whitepaper</Link>
        <p>Whitepaper 1.0</p>
      </div>
      <footer>
        <div className="socialMedia">
          <a href="" target="_blank">
            <FaTwitter />
            Twitter
          </a>
          <a href="" target="_blank">
            <FaTelegram />
            Telegram
          </a>
        </div>
        <div className="copyRight">© 2024 Antitoken. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Home;
