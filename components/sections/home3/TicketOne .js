import Link from 'next/link';
import React from 'react';

const ticketsData = [
  {
    title: 'General Admission',
    price: '2,000 LKR',
    points: [
      'Standard Arena Access',
      'Great Music & Vibes',
      'Live Stage View',
      'Standard Gate Entry',
      'Food & Beverage stalls',
    ],
    animationClass: 'fadeInLeft',
    delay: 100,
  },
  {
    title: 'Early Bird (PP)',
    price: '5,000 LKR',
    points: [
      'Closer Standing Area',
      'Best Value Pricing',
      'Early Access Entry',
      'Enhanced Sound Field',
      'Free Assembly One Gift',
    ],
    animationClass: 'fadeInUp',
    delay: 200,
  },
  {
    title: 'Gold Table',
    price: '35,000 LKR',
    points: [
      'Premium Comfort & Style',
      'Seated View for 5 Pax',
      'Dedicated F&B Waiter',
      '1x VIP Parking Pass',
      'Fast-track Entrance',
    ],
    animationClass: 'fadeInUp',
    delay: 300,
  },
  {
    title: 'Early Bird Table',
    price: '50,000 LKR',
    points: [
      'Exclusive VIP Table (10 Pax)',
      'Limited Availability',
      'Front Row Premium View',
      'Complimentary Food Package',
      '2x VIP Parking Passes',
    ],
    animationClass: 'fadeInRight',
    delay: 400,
  },
];

export default function TicketOne({ tickets = ticketsData }) {
  return (
    <section className="ticket-one" style={{ background: '#0b0518', padding: '120px 0 100px' }}>
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
                boxShadow: index === 3 ? '0 0 25px rgba(224, 118, 255, 0.25)' : 'none'
              }}>
                {index === 3 && (
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
                    Buy Online <span className="icon-arrow-right"></span>
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
