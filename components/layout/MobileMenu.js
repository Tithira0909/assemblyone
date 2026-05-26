"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  return (
    <>
      {/*End Mobile Menu */}
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link href="/" aria-label="logo image" onClick={handleMobileMenu}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/assets/images/assembly/selected_photo.jpg" alt="Logo" className="mobile-nav-logo-img" />
                <span className="mobile-nav-logo-text">
                  Assembly <span style={{ color: '#00f0ff' }}>One</span>
                </span>
              </div>
            </Link>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li>
                <Link href="/" onClick={handleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleMobileMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/event" onClick={handleMobileMenu}>
                  Event
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:info@assemblyone.lk">
                info@assemblyone.lk
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:0773366324">Hotline: 0773366324</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:0773366019">Chamindu: 0773366019</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-youtube" />
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>

      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};
export default MobileMenu;
