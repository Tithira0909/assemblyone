'use client';
import Link from 'next/link';
import { useState } from 'react';

const EventOne = ({ tagline, title, buttonText, points, imageUrl }) => {
  return (
    <section className="event-one event-three" style={{ padding: '0 0 100px' }}>
      <div className="container">
        <div className="event-one__inner wow fadeInUp" data-wow-delay="300ms" style={{ padding: '80px', textAlign: 'center', background: '#140c26', border: '1px solid rgba(224, 118, 255, 0.2)' }}>
          <div className="event-one__top" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline" style={{ color: '#00f0ff' }}>{tagline}</span>
              </div>
              <h2 className="section-title__title" style={{ color: '#fff', maxWidth: '800px', margin: '0 auto 20px' }}>{title}</h2>
            </div>
            
          </div>
          <ul className="list-unstyled event-one__points" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            {points.map((point, index) => (
              <li key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '350px', textAlign: 'center' }}>
                <div className="icon" style={{ marginBottom: '20px' }}>
                  <span className={point.icon}></span>
                </div>
                <div className="content">
                  <h4 style={{ marginBottom: '15px' }}>
                    <Link href="/event" style={{ color: '#fff' }}>
                      {point.heading}
                    </Link>
                  </h4>
                  <p style={{ color: '#b9aed3' }}>{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="event-one__btn-box" style={{ marginTop: '50px' }}>
              <Link href="/contact" className="event-one__btn thm-btn">
                  {buttonText} <span className="icon-arrow-right"></span>
              </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventOne;