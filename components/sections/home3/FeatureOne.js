"use client";

import React from 'react';

// Customized event production capabilities for Assembly One
const featuresData = [
    {
        id: 1,
        title: 'Concert & Live Music Productions',
        description: 'End-to-end management for stadium-scale, arena, and outdoor musical events with flawless execution.',
        icon: 'fas fa-guitar',
        link: '#event',
        delay: '100ms',
    },
    {
        id: 2,
        title: 'State-of-the-Art Sound Engineering',
        description: 'Premium L-Acoustics sound rigs and world-class sound engineers ensuring high fidelity, clear acoustics.',
        icon: 'fas fa-volume-up',
        link: '#event',
        delay: '200ms',
    },
    {
        id: 3,
        title: 'Immersive Lighting & LED Visuals',
        description: 'Dynamic show lighting, laser designs, and high-res LED panels custom mapped for every performance.',
        icon: 'fas fa-lightbulb',
        link: '#event',
        delay: '300ms',
    },
    {
        id: 4,
        title: 'Full Venue Coordination & Management',
        description: 'Expert event floor planning, crowd logistics, secure environments, and partner venue coordination.',
        icon: 'fas fa-calendar-check',
        link: '#event',
        delay: '400ms',
    },
    {
        id: 5,
        title: 'Corporate & Private Event Production',
        description: 'Tailored event production for corporate functions, product launches, and private celebrations.',
        icon: 'fas fa-briefcase',
        link: '#event',
        delay: '500ms',
    },
    {
        id: 6,
        title: 'Creative Show Design & Theming',
        description: 'Custom stage designs, thematic concepts, and creative direction to make every event unique.',
        icon: 'fas fa-palette',
        link: '#event',
        delay: '600ms',
    }
];

export default function FeatureOne() {
    return (
        <section className="feature-one" style={{ background: '#0b0518', padding: '120px 0 90px' }}>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" style={{ color: '#e076ff' }}>OUR EXPERTISE</span>
                    </div>
                    <h2 className="section-title__title" style={{ color: '#fff' }}>
                        WHAT WE PRODUCE <br /> AT ASSEMBLY ONE
                    </h2>
                </div>
                <div className="row">
                    {featuresData.map((feature) => (
                        <div key={feature.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay={feature.delay}>
                            <div className="feature-one__single" style={{ background: '#140c26', border: '1px solid rgba(224, 118, 255, 0.1)', borderRadius: '12px', padding: '40px 30px' }}>
                                <div className="feature-one__icon" style={{ background: 'rgba(224, 118, 255, 0.1)', color: '#00f0ff', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '25px' }}>
                                    <i className={feature.icon}></i>
                                </div>
                                <div className="feature-one__content">
                                    <h4 className="feature-one__title" style={{ marginBottom: '15px' }}>
                                        <a href={feature.link} style={{ color: '#fff', fontSize: '20px', fontWeight: '700', transition: 'all 0.3s' }}>
                                            {feature.title}
                                        </a>
                                    </h4>
                                    <p className="feature-one__text" style={{ color: '#b9aed3', fontSize: '15px', lineHeight: '1.7' }}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
