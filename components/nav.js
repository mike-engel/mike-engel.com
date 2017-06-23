import { black, bpSmall } from "../constants/css";
import Link from "next/link";
import React from "react";

const Nav = () =>
  <header>
    <nav className="site-constraint">
      <Link href="/" prefetch>
        <a>
          <svg
            width="46px"
            height="50px"
            viewBox="0 0 46 50"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M0,9.26966292 L0,50 L12,44.9438202 L12,0 L0,9.26966292 Z M46,9.26966292 L46,50 L34,44.9438202 L34,0 L46,9.26966292 Z M12,0 L12,19.1964286 L23,33.59375 L23,14.9619223 L12,0 Z M34,0 L34,19.1964286 L23,33.59375 L23,14.9619223 L34,0 Z" />
          </svg>
        </a>
      </Link>
      <ul>
        <li><Link href="/#projects"><a>projects</a></Link></li>
        <li><Link href="/#contact"><a>contact</a></Link></li>
        <li><Link href="/writing" prefetch><a>writing</a></Link></li>
        <li><Link href="/resume" prefetch><a>resume</a></Link></li>
      </ul>
    </nav>
    <style jsx>
      {`
        nav {
          position: relative;
          padding: 20px 0;
        }

        nav > * {
          display: inline-block;
          vertical-align: middle;
        }

        li {
          display: inline-block;
        }

        li + li { margin-left: 1em; }

        a {
          font-size: 1rem;
          line-height: 1;
        }

        svg {
          width: auto;
          height: 50px;
          margin-right: 1.5em;
          fill: ${black};
        }

        @media (min-width: ${bpSmall}) {
          li { margin-left: 0.4em; }

          li + li { margin-left: 1.4em; }
        }
      `}
    </style>
  </header>;

Nav.displayName = "Nav";

export default Nav;
