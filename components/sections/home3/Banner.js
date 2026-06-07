"use client";

import { useEffect, useState } from 'react';

// Data for the banner
const bannerData = {
    title: 'RAWAYA AT THE EDGE',
    title2: 'LIVE IN CONCERT',
    subtitle: 'ASSEMBLY ONE PRESENTS',
    date: 'August 01, 2026 | 7:00 PM Onwards',
    address: 'Waters Edge - Nature in the Heart of the City',
    countdownDate: '2026/08/01 19:00:00', // Format: YYYY/MM/DD HH:MM:SS
    buttonLink: 'https://ticketz.lk',
};

export default function BannerOne() {
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const updateCountdown = () => {
            const targetDate = new Date(bannerData.countdownDate).getTime();
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeRemaining({ days, hours, minutes, seconds });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="banner-one" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="banner-one__bg jarallax" data-jarallax data-speed="0.2" data-imgposition="50% 0%"
                style={{ 
                    backgroundImage: 'url(/assets/images/assembly/rawaya-cover.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
            </div>
            <div className="container">
                <div className="banner-one__inner">
                    {/* Brand/Presenter Label */}
                    <div className="wow fadeInUp" data-wow-delay="50ms" style={{ marginBottom: '15px' }}>
                        <span style={{ 
                            textTransform: 'uppercase', 
                            letterSpacing: '5px', 
                            fontSize: '14px', 
                            fontWeight: '700', 
                            color: '#e076ff',
                            textShadow: '0 0 10px rgba(224, 118, 255, 0.6)'
                        }}>
                            {bannerData.subtitle}
                        </span>
                    </div>

                    <h2 className="banner-one__title responsive-hero-title wow fadeInLeft" data-wow-delay="100ms">
                        {bannerData.title}
                    </h2>
                    
                    <p className="banner-one__date wow fadeInRight" data-wow-delay="200ms" style={{ fontSize: '24px', color: '#00f0ff', fontWeight: '600' }}>
                        {bannerData.date}
                    </p>
                    
                    <p className="banner-one__address wow fadeInLeft" data-wow-delay="300ms">
                        <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: '#e076ff' }}></i>
                        {bannerData.address}
                    </p>

                    <div className="banner-one__countdown-timer-box wow fadeInUp" data-wow-delay="400ms" style={{ marginTop: '30px', marginBottom: '40px' }}>
                        <ul className="countdown time-countdown-two list-unstyled">
                            <li>
                                <div className="box" style={{ background: 'rgba(20, 10, 35, 0.75)' }}>
                                    <span className="days" style={{ color: '#fff' }}>{timeRemaining.days}</span>
                                    <span className="timeRef" style={{ color: '#e076ff' }}>Days</span>
                                </div>
                            </li>
                            <li>
                                <div className="box" style={{ background: 'rgba(20, 10, 35, 0.75)' }}>
                                    <span className="hours" style={{ color: '#fff' }}>{timeRemaining.hours}</span>
                                    <span className="timeRef clr-1" style={{ color: '#00f0ff' }}>Hours</span>
                                </div>
                            </li>
                            <li>
                                <div className="box" style={{ background: 'rgba(20, 10, 35, 0.75)' }}>
                                    <span className="minutes" style={{ color: '#fff' }}>{timeRemaining.minutes}</span>
                                    <span className="timeRef clr-2" style={{ color: '#e076ff' }}>Minutes</span>
                                </div>
                            </li>
                            <li>
                                <div className="box" style={{ background: 'rgba(20, 10, 35, 0.75)' }}>
                                    <span className="seconds" style={{ color: '#fff' }}>{timeRemaining.seconds}</span>
                                    <span className="timeRef clr-3" style={{ color: '#00f0ff' }}>Seconds</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="banner-one__btn-box wow fadeInRight" data-wow-delay="500ms">
                        <a href={bannerData.buttonLink} className="banner-one__btn thm-btn">
                            Book Tickets Now <span className="icon-arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
