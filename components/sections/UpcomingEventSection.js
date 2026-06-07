"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const upcomingEvents = [
    {
        id: 1,
        title: 'Rawaya at the Edge',
        date: 'August 01, 2026',
        location: 'Waters Edge, Colombo',
        description: 'An unforgettable headline performance with live visuals, crowd anthems, and high-energy stage production.',
        poster: '/assets/images/events/RawayaAtTheEdgeMain.jpeg',
        highlight: 'Dream Concert, Live in Colombo',
    },
];

export default function UpcomingEventSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % upcomingEvents.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const activeEvent = upcomingEvents[activeIndex];
    // const nextEvent = upcomingEvents[(activeIndex + 1) % upcomingEvents.length];

    return (
        <section className="upcoming-event-section" style={{ background: '#0b0518', padding: '100px 0 10px' }}>
            <div className="container">
                <div className="section-title text-center" style={{ marginBottom: '45px' }}>
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" style={{ color: '#00f0ff' }}>UPCOMING EVENTS</span>
                    </div>
                    <h2 className="section-title__title" style={{ color: '#fff' }}>
                        NEXT SHOWCASE AT ASSEMBLY ONE
                    </h2>
                </div>
                <div className="upcoming-event-cards">
                    <div className="upcoming-event-card upcoming-event-card--active">
                        <div className="upcoming-event-card__content">
                            <span className="upcoming-event-label">{activeEvent.highlight}</span>
                            <h3 className="upcoming-event-title">{activeEvent.title}</h3>
                            <div className="upcoming-event-footer">
                                <div>
                                    {/* <span className="upcoming-event-badge">Live in Concert</span> */}
                                    <p className="upcoming-event-meta">
                                        <strong>{activeEvent.date}</strong>
                                    </p>
                                    <p className="upcoming-event-meta">
                                        <strong>{activeEvent.location}</strong>
                                    </p>
                                    {/* <p className="upcoming-event-small">Auto rotating through the upcoming lineup every 6 seconds.</p> */}
                                </div>
                                <Link href="/event" className="banner-one__btn thm-btn" style={{ padding: '14px 32px', marginTop: '20px' }}>
                                    See Event <span className="icon-arrow-right"></span>
                                </Link>
                            </div>
                        </div>
                        <div className="upcoming-event-card__image-wrap">
                            <img
                                src={activeEvent.poster}
                                alt={activeEvent.title}
                                className="upcoming-event-poster"
                            />
                        </div>
                    </div>

                    {/* <div className="upcoming-event-card upcoming-event-card--preview">
                        <div className="upcoming-event-card__content">
                            <span className="upcoming-event-badge">Coming Soon</span>
                            <h3 className="upcoming-event-title upcoming-event-title--small">{nextEvent.title}</h3>
                            <p className="upcoming-event-meta">
                                <strong>{nextEvent.date}</strong> · {nextEvent.location}
                            </p>
                        </div>
                        <div className="upcoming-event-card__image-wrap">
                            <img
                                src={nextEvent.poster}
                                alt={nextEvent.title}
                                className="upcoming-event-poster upcoming-event-poster--small"
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
