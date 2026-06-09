import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (

      <header className={`main-header main-header-three ${scroll ? "fixed-header" : ""}`}>
        <nav className="main-menu main-menu-three">
          <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner" style={{ padding: '15px 60px' }}>
                <div className="main-menu__left">
                  <div className="main-menu__logo" style={{ padding: '5px 0' }}>
                    <Link href="/">
                        <div className="nav-logo-container">
                            <img src="/assets/images/assembly/logo_icon.jpg" alt="Assembly One Logo" className="nav-logo-img" />
                            <img src="/assets/images/assembly/logo_text.png" alt="Assembly One" className="nav-logo-text-img" />
                        </div>
                    </Link>
                  </div>
                </div>
                <div className="main-menu__right" style={{ padding: '0px 0' }}>
                  <div className="main-menu__main-menu-box">
                    <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                      <i className="fa fa-bars" />
                    </div>
                    <Menu />
                  </div>
                  <div className="main-menu__btn-box">
                      <a href="https://ticketz.lk" target="_blank" rel="noopener noreferrer" className="main-menu__btn thm-btn" style={{ padding: '12px 25px' }}>
                          Book Tickets <span className="icon-arrow-right"></span> 
                      </a>
                  </div>
                </div>
              </div>
          </div>
        </nav>

        <div className={`stricky-header stricked-menu main-menu main-menu-three ${scroll ? "stricky-fixed" : ""}`}>
        <div className="sticky-header__content" />
          <nav className="main-menu main-menu-three">
            <div className="main-menu__wrapper">
                <div className="main-menu__wrapper-inner" style={{ padding: '10px 60px' }}>
                  <div className="main-menu__left">
                    <div className="main-menu__logo" style={{ padding: '5px 0' }}>
                      <Link href="/">
                          <div className="nav-logo-container">
                                <img src="/assets/images/assembly/logo_icon.jpg" alt="Assembly One Logo" className="nav-logo-img" />
                                <img src="/assets/images/assembly/logo_text.png" alt="Assembly One" className="nav-logo-text-img" />
                          </div>
                      </Link>
                    </div>
                  </div>
                  <div className="main-menu__right" style={{ padding: '5px 0' }}>
                    <div className="main-menu__main-menu-box">
                      <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                        <i className="fa fa-bars" />
                      </div>
                      <Menu />
                    </div>
                    <div className="main-menu__btn-box">
                        <a href="https://ticketz.lk" target="_blank" rel="noopener noreferrer" className="main-menu__btn thm-btn" style={{ padding: '10px 20px' }}>
                            Book Tickets <span className="icon-arrow-right"></span> 
                        </a>
                    </div>
                  </div>
                </div>
            </div>
          </nav>
      </div>

      <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
    </header>
    
    )
}