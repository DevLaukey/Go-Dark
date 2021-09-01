import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="header">
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
      <div className="header__links" >
        <Link href="/">
          <a className={router.route === "/" ? "active" : ""} data-text="Home">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={router.route === "/about" ? "active" : ""}
            data-text="About"
          >
            About
          </a>
        </Link>
        <Link href="/pricing">
          <a
            className={router.route === "/pricing" ? "active" : ""}
            data-text="Pricing"
          >
            Pricing
          </a>
        </Link>
        <Link href="/blog">
          <a
            className={router.route === "/blog" ? "active" : ""}
            data-text="Blog"
          >
            Blog
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={router.route === "/contact" ? "active" : ""}
            data-text="Contact"
          >
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
