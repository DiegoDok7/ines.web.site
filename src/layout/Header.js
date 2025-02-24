import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [linkElements, setLinkElements] = useState(null);
  const [height, setHeight] = useState(null);

  const toggleFun = (e) => {
    const menu = document.querySelector(".menu-btn.full"),
      overlay = document.querySelector(".menu-full-overlay");
    e.preventDefault();
    setToggle(!toggle);
    if (toggle) {
      menu.classList.remove("active");
      menu.classList.add("no-touch");
      document.body.classList.remove("no-scroll");
      overlay.classList.remove("is-open");
      overlay.classList.remove("has-scroll");
      overlay.classList.remove("animate-active");
      setTimeout(function () {
        overlay.classList.remove("visible");
        menu.classList.remove("no-touch");
      }, 1000);
    } else {
      menu.classList.add("active");
      menu.classList.add("no-touch");
      document.body.classList.add("no-scroll");
      overlay.classList.add("is-open");
      overlay.classList.add("visible");
      setTimeout(function () {
        overlay.classList.add("has-scroll");
        overlay.classList.add("animate-active");
        menu.classList.remove("no-touch");
      }, 1000);
    }
    return false;
  };

  useEffect(() => {
    document.querySelector("body").classList.remove("no-scroll");
  }, []);
  const subMenuClick = (event, value) => {
      setLinkElements(value == linkElements ? null : value);
      const target = event.target,
        ul = target.closest(".menu-full");
      setHeight(ul.offsetHeight + 20);
    },
    subMenuHeight = (value) =>
      value == linkElements
        ? { maxHeight: `${height}px` }
        : { maxHeight: "0px" },
    subMenuOpened = (value) => (value == linkElements ? "opened" : "closed");
  return (
    <header className="header">
      <div className="header__builder">
        {/* logo */}
        <div className="logo-image">
          <Link legacyBehavior href="/">
            <a>
              <img src="assets/images/logo.png" alt="logo" />
            </a>
          </Link>
        </div>
        {/* menu btn */}
        <a href="#" className="menu-btn full" onClick={(e) => toggleFun(e)}>
          <span />
        </a>
        {/* Menu Full Overlay */}
        <div className="menu-full-overlay">
          <div className="menu-full-container">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
                  {/* menu full */}
                  <div className="menu-full">
                    <ul className="menu-full">
                    <li className="menu-item">
                        <Link legacyBehavior href="/">
                          <a
                            className="splitting-text-anim-2"
                            data-splitting="chars"
                          >
                            Inicio
                          </a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link legacyBehavior href="/about">
                          <a
                            className="splitting-text-anim-2"
                            data-splitting="chars"
                          >
                            Sobre mí
                          </a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link legacyBehavior href="/works-2-column">
                          <a
                            className="splitting-text-anim-2"
                            data-splitting="chars"
                          >
                            Fotografía
                          </a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link legacyBehavior href="/contacts">
                          <a
                            className="splitting-text-anim-2"
                            data-splitting="chars"
                          >
                            Contacto
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* social */}
          <div className="menu-social-links">
            <a
              href="https://instagram.com/"
              target="blank"
              className="scrolla-element-anim-1"
              title="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/"
              target="blank"
              className="scrolla-element-anim-1"
              title="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/"
              target="blank"
              className="scrolla-element-anim-1"
              title="Twitter"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/"
              target="blank"
              className="scrolla-element-anim-1"
              title="Linkedin"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
