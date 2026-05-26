"use client";

import React from 'react';

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
        title: 'Romaine Willis',
        description: 'Experience beautiful, soulful vocals and an enchanting stage presence that captivates every corner of the arena.',
        time: '10:15 PM - 11:00 PM',
        subTitle: 'Vocal Performance',
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
        img: [
            '/assets/images/resources/schedule-three-routine-details-img-1-3.jpg',
            '/assets/images/resources/schedule-three-routine-details-img-1-4.jpg',
        ],
        link: '#event',
        delay: '800ms',
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
                <div className="schedule-three__bottom" style={{ marginTop: '50px' }}>
                    {scheduleData.map((event) => (
                        <div key={event.id} className="schedule-three__routine-details wow fadeInLeft" data-wow-delay={event.delay} style={{ borderBottom: '1px solid rgba(224, 118, 255, 0.1)', padding: '30px 0' }}>
                            <div className="schedule-three__routine-details-description">
                                <h4 className="schedule-three__routine-details-description-title" style={{ marginBottom: '10px' }}>
                                    <a href={event.link} style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>{event.title}</a>
                                </h4>
                                <p className="schedule-three__routine-details-description-text" style={{ color: '#b9aed3', fontSize: '15px' }}>{event.description}</p>
                            </div>
                            <div className="schedule-three__routine-details-img-box">
                                {event.img.map((image, index) => (
                                    <div key={index} className="schedule-three__routine-details-img-single" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                                        <img src={image} alt={`Schedule Image ${index + 1}`} style={{ filter: 'hue-rotate(50deg) saturate(1.2)' }} />
                                    </div>
                                ))}
                            </div>
                            <div className="schedule-three__routine-time-detail" style={{ background: 'rgba(0, 240, 255, 0.05)', borderLeft: '3px solid #00f0ff', padding: '15px 25px' }}>
                                <p style={{ color: '#00f0ff', fontWeight: 'bold', margin: 0 }}>{event.time}</p>
                                <h6 style={{ color: '#e076ff', margin: '5px 0 0' }}>{event.subTitle}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
