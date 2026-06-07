"use client";

import { useState } from "react";
import Link from "next/link";

export default function BuyTicket() {
  const [ticketContent, setTicketContent] = useState({
    address: "Waters Edge - Nature in the Heart of the City",
    timing: "August 01, 2026 | 7:00 PM Onwards",
    title: "Be a part of Rawaya at the Edge Live in Concert!",
    description:
      "Join us for Sri Lanka's most anticipated live concert event of the year, produced by Assembly One. Enjoy a stellar multi-genre lineup, premium stage acoustics, laser lighting, secure crowd control, ample parking, and an outstanding food & beverage experience.",
    buttons: [
      { id: 1, text: "Buy Online (Ticketz.lk)", link: "https://ticketz.lk", target: "_blank", class: "buy-ticket__btn-1" },
      { id: 2, text: "More info: 077 336 6324", link: "tel:0773366324", target: "_self", class: "buy-ticket__btn-2" }
    ],
    ticketImage: "/assets/images/assembly/media_7.jpg",
  });

  return (
    <>
      {/* Buy Ticket Start */}
      <section className="buy-ticket" style={{ background: '#0e081f', padding: '60px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div
                className="buy-ticket__left wow fadeInLeft"
                data-wow-delay="100ms"
              >
                
                <h3 className="buy-ticket__title" style={{ color: '#fff', fontSize: '40px', lineHeight: '1.2', fontWeight: '800', marginBottom: '20px' }}>
                  {ticketContent.title}
                </h3>
                <p className="buy-ticket__text" style={{ color: '#b9aed3', fontSize: '16px', lineHeight: '1.8', marginBottom: '35px' }}>
                  {ticketContent.description}
                </p>
                <ul className="buy-ticket__address list-unstyled" style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', alignItems: 'center', marginBottom: '30px', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="icon" style={{ background: 'rgba(224, 118, 255, 0.1)', color: '#00f0ff', width: '50px', height: '50px', minWidth: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
                      <span className="icon-pin"></span>
                    </div>
                    <div className="text">
                      <p style={{ color: '#fff', fontSize: '16px', fontWeight: '600', margin: 0 }}>{ticketContent.address}</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="icon" style={{ background: 'rgba(224, 118, 255, 0.1)', color: '#e076ff', width: '50px', height: '50px', minWidth: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
                      <span className="icon-clock"></span>
                    </div>
                    <div className="text">
                      <p style={{ color: '#fff', fontSize: '16px', fontWeight: '600', margin: 0 }}>{ticketContent.timing}</p>
                    </div>
                  </li>
                </ul>
                <div className="buy-ticket__btn-box" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                  {ticketContent.buttons.map((button) => (
                    <a
                      key={button.id}
                      href={button.link}
                      target={button.target}
                      rel={button.target === "_blank" ? "noopener noreferrer" : undefined}
                      className={`${button.class} thm-btn`}
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        padding: '15px 25px', 
                        borderRadius: '30px', 
                        fontWeight: '700',
                        fontSize: '14px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {button.text}
                      <span className="icon-arrow-right" style={{ marginLeft: '10px' }}></span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="buy-ticket__right wow fadeInRight"
                data-wow-delay="300ms"
                style={{ textAlign: 'center' }}
              >
                <div className="buy-ticket__img" style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(224, 118, 255, 0.2)', 
                  border: '1px solid rgba(224, 118, 255, 0.2)',
                  display: 'inline-block',
                  maxWidth: '100%',
                  position: 'relative'
                }}>
                  <img 
                    src={ticketContent.ticketImage} 
                    alt="Rawaya Concert Detailed Poster" 
                    style={{ 
                      display: 'block', 
                      maxWidth: '100%', 
                      height: 'auto', 
                      maxHeight: '650px',
                      objectFit: 'cover'
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Buy Ticket End */}
    </>
  );
}
