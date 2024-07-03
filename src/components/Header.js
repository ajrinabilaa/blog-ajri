import React, { useEffect, useState } from "react";
import Footer from "./Footer";

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scroll ke bawah dan bukan di posisi paling atas
        setIsHidden(true);
      } else if (window.scrollY <= 50) {
        // Scroll ke atas dan di posisi paling atas
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`b-example-divider rahmannav ${isHidden ? "hidden" : ""}`}>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <p className="nav-link  ajri" aria-current="page">
                Ngoding Yuk
              </p>
            </li>
            <li className="nav-item">
              <a href="#footer" className="nav-link active">
                Contact Me
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
