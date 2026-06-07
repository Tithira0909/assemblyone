"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="CONTACT US">
        <div>
          {/*Contact One Start*/}
          <section className="contact-one">
            <div className="container">
              <div className="contact-one__inner">
                <h3 className="contact-one__title">Get in Touch</h3>
                <p className="contact-one__text">
                  For bookings, event inquiries, sponsorship packages, or direct tickets, please send us a message or contact us directly via our hotlines. We will get back to you immediately.
                </p>
                <form
                  className="contact-form-validated contact-one__form"
                  onSubmit={(e) => e.preventDefault()}
                  noValidate
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <div className="select-box">
                          <select className="selectmenu wide" defaultValue="Choose Option" style={{ background: '#140c26', color: '#fff', border: '1px solid rgba(224, 118, 255, 0.15)', width: '100%', height: '60px', padding: '0 20px', borderRadius: '8px' }}>
                            <option value="Choose Option">Select Inquired Subject</option>
                            <option value="Ticket Booking">Rawaya Ticket Booking</option>
                            <option value="Event Production">Concert/Live Show Production</option>
                            <option value="Stage/Truss Hire">Stage, Audio & Lighting Rig Hire</option>
                            <option value="Sponsorship">Sponsorship & Partners</option>
                            <option value="Other Inquiry">Other Inquiry</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-one__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className="contact-one__btn-box">
                        <button
                          type="submit"
                          className="thm-btn contact-one__btn"
                        >
                          Submit Now<span className="icon-arrow-right"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </section>
          {/*Contact One End*/}

          {/* 
          <section className="contact-two" style={{ background: '#0e081f', padding: '100px 0' }}>
            <div className="container">
              <div className="row">
                
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-two__single" style={{ background: '#140c26', border: '1px solid rgba(224, 118, 255, 0.1)', padding: '40px 30px', borderRadius: '12px', textAlign: 'center' }}>
                    <div className="contact-two__icon" style={{ fontSize: '36px', color: '#00f0ff', marginBottom: '20px' }}>
                      <span className="icon-pin"></span>
                    </div>
                    <h3 className="contact-two__title" style={{ color: '#fff', fontSize: '22px', fontWeight: '700', marginBottom: '15px' }}>Location</h3>
                    <p className="contact-two__text" style={{ color: '#b9aed3' }}>
                      Maharagama, <br /> Sri Lanka
                    </p>
                  </div>
                </div>
                
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-two__single" style={{ background: '#140c26', border: '1px solid rgba(224, 118, 255, 0.1)', padding: '40px 30px', borderRadius: '12px', textAlign: 'center' }}>
                    <div className="contact-two__icon" style={{ fontSize: '36px', color: '#e076ff', marginBottom: '20px' }}>
                      <span className="icon-paper-plan"></span>
                    </div>
                    <h3 className="contact-two__title" style={{ color: '#fff', fontSize: '22px', fontWeight: '700', marginBottom: '15px' }}>E-mail</h3>
                    <p className="contact-two__text" style={{ color: '#b9aed3' }}>
                      <a href="mailto:info@assemblyone.lk" style={{ color: '#00f0ff' }}>
                        info@assemblyone.lk
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-two__single" style={{ background: '#140c26', border: '1px solid rgba(224, 118, 255, 0.1)', padding: '40px 30px', borderRadius: '12px', textAlign: 'center' }}>
                    <div className="contact-two__icon" style={{ fontSize: '36px', color: '#00f0ff', marginBottom: '20px' }}>
                      <span className="icon-call"></span>
                    </div>
                    <h3 className="contact-two__title" style={{ color: '#fff', fontSize: '22px', fontWeight: '700', marginBottom: '15px' }}>Hotlines</h3>
                    <p className="contact-two__text" style={{ color: '#b9aed3', margin: 0 }}>
                      <a href="tel:0773366324" style={{ color: '#e076ff', fontWeight: '600' }}>Hotline: 0773366324</a>
                    </p>
                    <p className="contact-two__text" style={{ color: '#b9aed3', margin: 0 }}>
                      <a href="tel:0773366019" style={{ color: '#e076ff', fontWeight: '600' }}>Chamindu: 0773366019</a>
                    </p>
                  </div>
                </div>
              
              </div>
            </div>
          </section> 
          */}
        </div>
      </Layout>
    </>
  );
}
