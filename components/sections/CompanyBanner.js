"use client";

import React from 'react';
import Link from 'next/link';

export default function CompanyBanner() {
    return (
        <section className="banner-one" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="banner-one__bg jarallax" data-jarallax data-speed="0.4" data-imgposition="50% 0%"
                style={{ 
                    backgroundImage: 'url(/assets/images/assembly/assembly-cover.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
            </div>
            <div className="container">
                <div className="banner-one__inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div className="wow fadeInUp" data-wow-delay="50ms" style={{ marginBottom: '15px' }}>
                        <span style={{ 
                            textTransform: 'uppercase', 
                            letterSpacing: '5px', 
                            fontSize: '14px', 
                            fontWeight: '700', 
                            color: '#00f0ff',
                            textShadow: '0 0 10px rgba(0, 240, 255, 0.6)'
                        }}>
                            PREMIER EVENT PRODUCTION
                        </span>
                    </div>

                    <h2 className="banner-one__title responsive-hero-title wow fadeInUp" data-wow-delay="100ms">
                        CRAFTING <br />
                        <span style={{ color: '#f476ff' }}>UNFORGETTABLE</span> <br />
                        EXPERIENCES
                    </h2>
                    
                    <p className="wow fadeInUp" data-wow-delay="200ms" style={{ fontSize: '20px', color: '#b9aed3', fontWeight: '400', marginTop: '20px', maxWidth: '600px', lineHeight: '1.6' }}>
                        Assembly One is a Sri Lanka based event management and production house, specializing in large-scale live concerts, corporate events, and immersive stage productions.
                    </p>

                    <div className="banner-one__btn-box wow fadeInUp" data-wow-delay="300ms" style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <Link href="/contact" className="banner-one__btn thm-btn" style={{ padding: '15px 35px' }}>
                            Partner With Us <span className="icon-arrow-right"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
