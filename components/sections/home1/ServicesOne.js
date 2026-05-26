"use client"; // Ensures the component runs on the client side

import Link from "next/link";
import { useState } from "react";

export default function ServicesOne() {
  const [servicesContent, setServicesContent] = useState({
    sectionTagline: "OUR EXPERTISE",
    sectionTitle: "COMPREHENSIVE EVENT SOLUTIONS",
    services: [
      {
        id: 1,
        title: "Live Concert Production",
        description: "From international artist tours to massive local festivals, we provide end-to-end concert production including stage design, logistics, and technical execution.",
        icon: "icon-air-horn",
        link: "/contact",
      },
      {
        id: 2,
        title: "Corporate Events & Galas",
        description: "Elevate your corporate identity with meticulously planned galas, product launches, and award ceremonies tailored to your brand's prestige.",
        icon: "icon-party-blower",
        link: "/contact",
      },
      {
        id: 3,
        title: "Sound & Lighting Engineering",
        description: "World-class L-Acoustics sound rigs paired with immersive, programmable LED lighting and laser arrays to create breathtaking visual atmospheres.",
        icon: "icon-speaker",
        link: "/contact",
      },
      {
        id: 4,
        title: "Stage Architecture & Rigging",
        description: "Custom-built, secure stage structures and dynamic rigging capable of supporting complex set designs and heavy-duty technical equipment.",
        icon: "icon-stage",
        link: "/contact",
      },
      {
        id: 5,
        title: "Luxury Weddings",
        description: "Bespoke stage designs, ambient lighting, and flawless technical coordination for high-end, luxury wedding celebrations.",
        icon: "icon-dinner-table",
        link: "/contact",
      },
      {
        id: 6,
        title: "Event Logistics & Management",
        description: "Comprehensive crowd control, VIP handling, and seamless scheduling to ensure your event runs flawlessly from setup to teardown.",
        icon: "icon-clock",
        link: "/contact",
      },
    ],
  });

  return (
    <>
      <section className="services-one" style={{ background: '#0e081f', padding: '120px 0' }}>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline" style={{ color: '#00f0ff' }}>{servicesContent.sectionTagline}</span>
            </div>
            <h2 className="section-title__title" style={{ color: '#fff' }}>{servicesContent.sectionTitle}</h2>
          </div>
          <div className="row">
            {servicesContent.services.map((service) => (
              <div key={service.id} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${service.id * 100}ms`} style={{ marginBottom: '30px' }}>
                <div className="services-one__single" style={{ 
                    background: '#140c26', 
                    border: '1px solid rgba(224, 118, 255, 0.15)', 
                    borderRadius: '12px', 
                    padding: '40px 30px', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00f0ff';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(224, 118, 255, 0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div className="services-one__icon" style={{ 
                      width: '70px', 
                      height: '70px', 
                      background: 'linear-gradient(135deg, #00f0ff, #e076ff)', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginBottom: '25px',
                      color: '#000',
                      fontSize: '30px'
                  }}>
                    {/* Fallback Font Awesome icons if custom icons don't exist */}
                    {service.id === 1 && <i className="fas fa-microphone-alt"></i>}
                    {service.id === 2 && <i className="fas fa-building"></i>}
                    {service.id === 3 && <i className="fas fa-sliders-h"></i>}
                    {service.id === 4 && <i className="fas fa-hammer"></i>}
                    {service.id === 5 && <i className="fas fa-glass-cheers"></i>}
                    {service.id === 6 && <i className="fas fa-clipboard-list"></i>}
                  </div>
                  <h3 className="services-one__title" style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px' }}>
                    <Link href={service.link} style={{ color: '#fff' }}>{service.title}</Link>
                  </h3>
                  <p className="services-one__text" style={{ color: '#b9aed3', lineHeight: '1.7', flexGrow: 1, marginBottom: '25px' }}>{service.description}</p>
                  <Link href={service.link} className="services-one__read-more" style={{ color: '#00f0ff', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px' }}>
                    Inquire Now <span className="icon-arrow-right" style={{ marginLeft: '5px' }}></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
