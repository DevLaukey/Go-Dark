import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

 function toggleBodyClass(className) {
   document.body.classList.toggle(className);
 }
  
  return (
    <div className="nav_header">
      <nav class="navbar">
        <div className="logo">
          {isHovered ? (
            <Link href="/">
              <a>
                <Image
                  className="loading__skull"
                  src="/skull.gif"
                  alt="GoDark Icon"
                  width={64}
                  height={64}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a>
                <Image
                  className="loading__skull"
                  src="/skull.png"
                  alt="GoDark Icon"
                  width={64}
                  height={64}
                  onMouseEnter={() => setIsHovered(true)}
                />
              </a>
            </Link>
          )}
        </div>
        <div class="push-left">
          <button
            onClick={() => {
              toggleBodyClass("menu-active");
            }}
            id="menu-toggler"
            data-class="menu-active"
            class="hamburger"
          >
            <span class="hamburger-line hamburger-line-top"></span>
            <span class="hamburger-line hamburger-line-middle"></span>
            <span class="hamburger-line hamburger-line-bottom"></span>
          </button>
          <div className="header_links">
            <ul id="primary-menu" class="menu nav-menu">
              <li class="menu-item current-menu-item">
                <Link href="/">
                  <a
                    className={router.route === "/" ? "active" : ""}
                    data-text="Home"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li class="menu-item dropdown">
                <Link href="/about">
                  <a
                    className={router.route === "/about" ? "active" : ""}
                    data-text="About"
                  >
                    About
                  </a>
                </Link>
              </li>
              <li class="menu-item dropdown">
                <Link href="/blog">
                  <a
                    className={router.route === "/blog" ? "active" : ""}
                    data-text="Blog"
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li class="menu-item ">
                <Link href="/contact">
                  <a
                    className={router.route === "/contact" ? "active" : ""}
                    data-text="Contact"
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;


