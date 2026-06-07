import Link from 'next/link';

export default function Footer1() {
    return (
        <>
            {/* Site Footer Start */}
            <footer className="site-footer">
                <div className="site-footer__shape-1 float-bob-y">
                    <img src="/assets/images/shapes/site-footer-shape-1.png" alt="" />
                </div>
                <div className="site-footer__top">
                    <div className="container">
                        <div className="site-footer__top-inner">
                            <div className="site-footer__logo">
                                <Link href="/">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <img src="/assets/images/assembly/logo_icon.jpg" alt="Assembly One Logo" 
                                            style={{ 
                                                height: '65px', 
                                                width: '65px', 
                                                objectFit: 'cover', 
                                                borderRadius: '50%', 
                                                border: '2px solid #e076ff', 
                                                boxShadow: '0 0 15px rgba(224, 118, 255, 0.5)' 
                                            }} 
                                        />
                                        {/* <span style={{ color: '#fff', fontSize: '22px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                            Assembly <span style={{ color: '#00f0ff' }}>One</span>
                                        </span> */}
                                        <img src="/assets/images/assembly/logo_text.png" alt="Assembly One" className="nav-logo-text-img" />
                                    </div>
                                </Link>
                            </div>
                            <div className="site-footer__social">
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__middle">
                    <div className="container">
                        <div className="site-footer__middle-inner">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget__column footer-widget__link">
                                        <div className="footer-widget__title-box">
                                            <h3 className="footer-widget__title">Quick links</h3>
                                        </div>
                                        <ul className="footer-widget__link-list list-unstyled">
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="/services">Services</Link></li>
                                            <li><Link href="/event">Rawaya Live Concert</Link></li>
                                            <li><Link href="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="footer-widget__column footer-widget__contact">
                                        <div className="footer-widget__title-box">
                                            <h3 className="footer-widget__title">Contact</h3>
                                        </div>
                                        <div className="footer-widget__contact-inner">
                                            <ul className="footer-widget__contact-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-envelop"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><a href="mailto:info@assemblyone.lk">info@assemblyone.lk</a></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-pin"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-call"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="tel:0773366324">Hotline: 0773366324</a><br />
                                                            <a href="tel:0773366019">Chamindu: 0773366019</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="site-footer__bottom-inner">
                            <p className="site-footer__bottom-text">© Assembly One 2026 | All Rights Reserved</p>
                            <ul className="list-unstyled site-footer__bottom-menu">
                                <li><Link href="/#">Terms & Condition</Link></li>
                                <li><Link href="/#">Privacy Policy</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Site Footer End */}
        </>
    );
}
