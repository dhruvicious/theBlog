import React from "react";
import Link from "next/link";

import Logo from "@/components/Logo";

import DecorativeSwoops from "./DecorativeSwoops";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <DecorativeSwoops />
      <div className={styles.content}>
        <div>
          <Logo mobileAlignment="center" />
          {/*
            NOTE: If you'd like to build your blog on top
            of this code, the license requires that you leave
            this paragraph untouched. Check out LICENSE.md
            for more information.
          */}
          <p className={styles.attribution}>
            Blog by <a href="https://www.bedhruvicious.co.in">Dhruv Khatri</a>
          </p>
        </div>
        <nav>
          <h2 className={styles.linkHeading}>Links</h2>
          <ul className={styles.linkList}>
            <li>
              <a href="https://github.com/dhruvicious" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bedhruvicious/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/bedhruvicious" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/be.dhruvicious/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
