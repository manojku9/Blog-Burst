import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode } = useContext(Context); // Removed setMode since it's not used

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            Blog Burst is blogging website, where you can create and post
            your blogs. There varous categories to create your views and showcase
            your talent to wider people. This is an efficient website to social connectivity.
          </p>
          <p>
            <span>Email:</span>blogburst@gmail.com
          </p>
          <p>
            <span>Phone:</span>+91 9567896756
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newsletter</h3>
            <p>Get blog articles and offers via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">BLOG <span>BURST</span></div>
        <div className="links">
          <Link to={"/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"/"} target="_blank">
            <FaGitSquare />
          </Link>
          <a href="#" target="_blank">
            <AiFillYoutube />
          </a>
          <Link to={"/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
