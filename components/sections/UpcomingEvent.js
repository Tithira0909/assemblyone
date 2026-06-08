"use client";

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const upcomingEvent = {
    title: 'Rawaya at The Edge',
    date: 'August 01, 2026',
    location: 'Waters Edge, Colombo',
    description: 'An unforgettable headline performance with live visuals, crowd anthems, and high-energy stage production.',
    poster: '/assets/images/events/RawayaAtTheEdgeMain.jpeg',
    highlight: 'Dream Concert, Live in Colombo',
    artists: [
        {
            id: 1,
            name: 'Raveen Tharuka',
            role: 'Vocals',
            image: '/assets/images/artists/Raveen.jpg',
        },
        {
            id: 2,
            name: 'Mihidu Ariyarathna',
            role: 'Vocals',
            image: '/assets/images/artists/Mihindu.jpg',
        },
        {
            id: 3,
            name: 'Funky Dirt',
            role: 'Vocals',
            image: '/assets/images/artists/FunkyDirt.jpg',
        },
        {
            id: 4,
            name: 'Jo Perera',
            role: 'Vocals',
            image: '/assets/images/artists/JoPerera.jpg',
        },
        {
            id: 5,
            name: 'Piyath Rajapakse',
            role: 'Vocals',
            image: '/assets/images/artists/WePlus.jpg',
        },
        {
            id: 6,
            name: 'Kanchana Anuradhi',
            role: 'Vocals',
            image: '/assets/images/artists/Kanchi.jpg',
        },
        {
            id: 7,
            name: 'Centigradz',
            role: 'Vocals',
            image: '/assets/images/artists/Centigradz.jpg',
        },
        {
            id: 8,
            name: 'We Plus',
            role: 'Band',
            image: '/assets/images/artists/WePlus.jpg',
        }
    ],
};

export default function UpcomingEventHero() {
    return (
        <section className="upcoming-hero-section" style={{ background: '#0b0518', padding: '100px 0 80px' }}>
            <div className="container">
                <div className="section-title text-center" style={{ marginBottom: '40px' }}>
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" style={{ color: '#00f0ff' }}>UPCOMING EVENTS</span>
                    </div>
                    <h2 className="section-title__title" style={{ color: '#fff' }}>
                        NEXT SHOWCASE AT ASSEMBLY ONE
                    </h2>
                </div>
                <div className="upcoming-hero-layout">
                    <div className="hero-main-event-card">
                        <div className="hero-main-event-poster">
                            <img src={upcomingEvent.poster} alt={upcomingEvent.title} />
                        </div>
                        <div className="hero-main-event-details">
                            <h3 className="upcoming-event-title">{upcomingEvent.title}</h3>
                            <p className="upcoming-event-meta"><strong>{upcomingEvent.date}</strong></p>
                            <p className="upcoming-event-meta"><strong>{upcomingEvent.location}</strong></p>
                            <Link href="/event" className="banner-one__btn thm-btn" style={{ padding: '14px 32px', marginTop: '20px' }}>
                                See Event <span className="icon-arrow-right"></span>
                            </Link>
                        </div>
                    </div>
                    <div className="hero-artist-panel">
                        <div className="hero-artist-panel__header">
                            <p className="upcoming-event-meta"><strong>Rawaya at The Edge</strong></p>
                            <span className="upcoming-event-label">Featured Artists</span>
                        </div>
                        <Swiper
                            modules={[Autoplay]}
                            direction="vertical"
                            spaceBetween={5}
                            slidesPerView={3}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            className="hero-artist-swiper"
                        >
                            {upcomingEvent.artists.map((artist) => (
                                <SwiperSlide key={artist.id}>
                                    <div className="artist-card hero-artist-card">
                                        <div className="artist-card__thumb">
                                            <img src={artist.image} alt={artist.name} />
                                        </div>
                                        <div className="artist-card__info">
                                            <h4>{artist.name}</h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
