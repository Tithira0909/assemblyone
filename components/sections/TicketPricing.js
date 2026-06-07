import Link from 'next/link';
import React from 'react';

const ticketsData = [
  {
    title: 'General',
    price: '3,500 LKR',
    points: [
      'Standard Arena Access',
      'Great Music & Vibes',
      'Live Stage View',
      'Standard Gate Entry',
    ],
    animationClass: 'fadeInLeft',
    delay: 200,
  },
  {
    title: 'Gold',
    price: '6,000 LKR',
    points: [
      'Comfort & Style',
      'Exclusive Table (8 Pax)',
      'Fast-track Entrance',
      'Limited Availability',
    ],
    animationClass: 'fadeInUp',
    delay: 300,
  },
  {
    title: 'Platinum',
    price: '7,500 LKR',
    points: [
      'Front Row Premium View',
      'Exclusive Table (8 Pax)',
      'Complimentary Items',
      'Limited Availability',
    ],
    animationClass: 'fadeInRight',
    delay: 100,
  }
];

export default function TicketOne({ tickets = ticketsData }) {
  return (
    <section className="ticket-one" style={{ background: '#0b0518', padding: '50px 0 100px' }}>
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline" style={{ color: '#e076ff' }}>GET YOUR PASS</span>
          </div>
          <h2 className="section-title__title" style={{ color: '#fff' }}>CHOOSE YOUR TICKET</h2>
        </div>
        <div className="row justify-content-center">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-6 col-md-6 wow ${ticket.animationClass}`}
              data-wow-delay={`${ticket.delay}ms`}
              style={{ marginBottom: '30px' }}
            >
              <div className="ticket-one__single" style={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: '#140c26', 
                border: index === 3 ? '2px solid #e076ff' : '1px solid rgba(224, 118, 255, 0.1)', 
                borderRadius: '12px', 
                padding: '40px 25px',
                position: 'relative',
                boxShadow: index === 2 ? '0 0 25px rgba(224, 118, 255, 0.25)' : 'none'
              }}>
                {index === 2 && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#e076ff',
                    color: '#000',
                    padding: '4px 15px',
                    fontSize: '11px',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    borderRadius: '20px',
                    letterSpacing: '1px',
                    whiteSpace: 'nowrap'
                  }}>
                    Best Experience
                  </div>
                )}
                <div className="ticket-one__title-box" style={{ borderBottom: '1px solid rgba(224, 118, 255, 0.15)', paddingBottom: '20px', marginBottom: '25px' }}>
                  <div className="ticket-one__title-icon" style={{ color: '#00f0ff', fontSize: '24px', marginBottom: '10px' }}>
                    <i className="fas fa-ticket-alt"></i>
                  </div>
                  <h5 className="ticket-one__title" style={{ color: '#fff', fontSize: '20px', fontWeight: '700' }}>{ticket.title}</h5>
                </div>
                <div className="ticket-one__price-box" style={{ marginBottom: '25px' }}>
                  <h3 style={{ color: '#00f0ff', fontSize: '28px', fontWeight: '800' }}>{ticket.price}</h3>
                </div>
                <ul className="list-unstyled ticket-one__points" style={{ marginBottom: '35px' }}>
                  {ticket.points.map((point, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div className="icon" style={{ color: '#e076ff', marginRight: '10px', fontSize: '14px', marginTop: '3px' }}>
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="text">
                        <p style={{ color: '#b9aed3', fontSize: '14px', margin: 0 }}>{point}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="ticket-one__btn-box" style={{ marginTop: 'auto' }}>
                  <a href="https://ticketz.lk" target="_blank" rel="noopener noreferrer" className="ticket-one__btn thm-btn" style={{ width: '100%', textAlign: 'center' }}>
                    ticketz.lk <span className="icon-arrow-right" style={{ marginLeft: '8px' }}></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
