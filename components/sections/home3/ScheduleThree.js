"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Data for schedule (Rawaya Concert Lineup on August 1st, 2026)
const scheduleData = [
    {
        id: 1,
        date: '07:00 PM',
        day: 'DOORS OPEN',
        title: 'Gate Entry',
        description: 'Get checked-in, grab refreshments, and find your seats or tables. Enjoy the ambient atmosphere as the venue opens.',
        time: '7:00 PM - 7:30 PM',
        subTitle: 'Doors & Welcome',
        artistImg: '/assets/images/backgrounds/Event.jpg',
        img: [
            '/assets/images/resources/schedule-three-routine-details-img-1-1.jpg',
            '/assets/images/resources/schedule-three-routine-details-img-1-2.jpg',
        ],
        link: '#event',
        delay: '100ms',
    },
    {
        id: 2,
        date: '07:30 PM',
        day: 'OPENING ACT',
        title: 'We Plus with Piyath',
        description: 'Kickstarting the night with soulful harmonies and an uplifting, energetic opening set that sets the tone for an unforgettable evening.',
        time: '7:30 PM - 8:00 PM',
        subTitle: 'Live Opening Act',
        artistImg: '/assets/images/artists/WePlus.jpg',
        img: [
            '/assets/images/resources/schedule-three-routine-details-img-1-3.jpg',
            '/assets/images/resources/schedule-three-routine-details-img-1-4.jpg',
        ],
        link: '#event',
        delay: '200ms',
    },
    {
        id: 3,
        date: '08:00 PM',
        day: 'DJ SET',
        title: 'Funky Dirt',
        description: 'Bringing the heat with a high-energy DJ set, blending electronic beats and bass-heavy grooves to keep the crowd moving.',
        time: '8:00 PM - 8:30 PM',
        subTitle: 'Electronic DJ Set',
        artistImg: '/assets/images/artists/FunkyDirt.jpg',
        img: [
            '/assets/images/resources/schedule-three-routine-details-img-1-5.jpg',
            '/assets/images/resources/schedule-three-routine-details-img-1-6.jpg',
        ],
        link: '#event',
        delay: '300ms',
    },
    {
        id: 4,
        date: '08:30 PM',
        day: 'LIVE PERFORMANCE',
        title: 'Jo Perera',
        description: 'A captivating vocal performance with melodic acoustic sessions blending classical melodies with high-production visuals.',
        time: '8:30 PM - 9:00 PM',
        subTitle: 'Acoustic Session',
        artistImg: '/assets/images/artists/JoPerera.jpg',
        img: [
            '/assets/images/resources/schedule-three-routine-details-img-1-1.jpg',
            '/assets/images/resources/schedule-three-routine-details-img-1-2.jpg',
        ],
        link: '#event',
        delay: '400ms',
    },
    {
        id: 5,
        date: '09:00 PM',
        day: 'FUSION VIBES',
        title: 'Centigradz',
        description: 'An iconic pop-fusion blast of Sri Lankan beats with massive synth bass lines and unforgettable crowd anthems.',
        time: '9:00 PM - 9:30 PM',
        subTitle: 'Pop Fusion',
        artistImg: '/assets/images/artists/Centigradz.jpg',
        img: [
            '/assets/images/resources/schedule-three-routine-details-img-1-3.jpg',
            '/assets/images/resources/schedule-three-routine-details-img-1-4.jpg',
        ],
        link: '#event',
        delay: '500ms',
    },
    {
        id: 6,
        date: '09:30 PM',
        day: 'ROCK ENERGY',
        title: 'Mihidu Ariyarathna',
        description: 'The sensational rock-voice Mihidu Ariyarathna takes the stage with an electrifying live performance, laser shows, and earth-shaking acoustics.',
        time: '9:30 PM - 10:15 PM',
        subTitle: 'Live Rock Performance',
        artistImg: '/assets/images/artists/Mihindu.jpg',
        img: [
            '/assets/images/resources/schedule-three-routine-details-img-1-5.jpg',
            '/assets/images/resources/schedule-three-routine-details-img-1-6.jpg',
        ],
        link: '#event',
        delay: '600ms',
    },
    {
        id: 7,
        date: '10:15 PM',
        day: 'SOULFUL VOCALS',
        title: 'Kanchana Anuradhi',
        description: 'Experience beautiful, soulful vocals and an enchanting stage presence that captivates every corner of the arena.',
        time: '10:15 PM - 11:00 PM',
        subTitle: 'Vocal Performance',
        artistImg: '/assets/images/artists/Kanchi.jpg',
        img: [
            '/assets/images/resources/schedule-three-routine-details-img-1-1.jpg',
            '/assets/images/resources/schedule-three-routine-details-img-1-2.jpg',
        ],
        link: '#event',
        delay: '700ms',
    },
    {
        id: 8,
        date: '11:00 PM',
        day: 'HEADLINER',
        title: 'Raveen Tharuka',
        description: 'The grand finale! Raveen Tharuka closes the night with a show-stopping headliner performance that will leave you breathless.',
        time: '11:00 PM - 12:00 AM',
        subTitle: 'Headlining Performance',
        artistImg: '/assets/images/artists/Raveen.jpg',
        img: [

            '/assets/images/resources/schedule-three-routine-details-img-1-3.jpg',
            '/assets/images/resources/schedule-three-routine-details-img-1-4.jpg',
        ],
        link: '#event',
        delay: '500ms',
    },
];

export default function ScheduleThree() {
    return (
        <section className="schedule-three" style={{ background: '#0e081f', padding: '120px 0 120px' }}>
            <div className="container">
                <div className="schedule-three__top" style={{ borderBottom: '1px solid rgba(224, 118, 255, 0.15)', paddingBottom: '30px' }}>
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline" style={{ color: '#00f0ff' }}>RAWAYA TIMELINE</span>
                        </div>
                        <h2 className="section-title__title" style={{ color: '#fff' }}>CONCERT SCHEDULE</h2>
                    </div>
                    <div className="schedule-three__time-box">
                        {scheduleData.map((event) => (
                            <div key={event.id} className="schedule-three__time-info-box" style={{ background: 'rgba(224, 118, 255, 0.05)', border: '1px solid rgba(224, 118, 255, 0.1)', margin: '5px' }}>
                                <div className="schedule-three__time-info-box-content">
                                    <h4 style={{ color: '#00f0ff', fontSize: '18px' }}>{event.date}</h4>
                                    <p style={{ color: '#e076ff', fontSize: '12px', fontWeight: 'bold' }}>{event.day}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="artist-slider-section" style={{ marginTop: '50px' }}>
                    <Swiper
                        className="artist-swiper"
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1.1, centeredSlides: true },
                            768: { slidesPerView: 2.2, centeredSlides: true },
                            1024: { slidesPerView: 3, centeredSlides: true },
                        }}
                    >
                        {scheduleData.map((event) => (
                            <SwiperSlide key={event.id}>
                                <div className="artist-slide-card">
                                    <div className="artist-slide-image-wrapper">
                                        <img
                                            src={event.artistImg || (event.img && event.img[0]) || '/assets/images/backgrounds/Event.jpg'}
                                            alt={event.title}
                                            className="artist-slide-image"
                                        />
                                    </div>
                                    <div className="artist-slide-content">
                                        <p className="artist-slide-label">Artist</p>
                                        <h3 className="artist-slide-name">{event.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
