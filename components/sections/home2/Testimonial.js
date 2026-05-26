'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const testimonials = [
    {
        name: "Dilshan Perera",
        role: "Corporate Event Manager",
        text: "Assembly One completely transformed our annual corporate gala. The lighting design and stage setup were world-class, and their flawless execution made our event unforgettable.",
        image: "/assets/images/testimonial/testimonial-one-client-1-1.jpg"
    },
    {
        name: "Shenali Silva",
        role: "Festival Director",
        text: "Working with Assembly One for our music festival was the best decision. Their sound engineering team is top-tier, and they handled the massive crowd logistics perfectly.",
        image: "/assets/images/testimonial/testimonial-one-client-1-2.jpg"
    },
    {
        name: "Raveen Tharuka",
        role: "Performing Artist",
        text: "As an artist, sound quality on stage is everything. Assembly One's L-Acoustics setup and dedicated sound engineers provide the best live performance experience in the country.",
        image: "/assets/images/testimonial/testimonial-one-client-1-3.jpg"
    },
    {
        name: "Kavindu Jayawardena",
        role: "Wedding Planner",
        text: "For high-end luxury weddings, I only trust Assembly One. Their bespoke stage designs and dynamic lighting always leave the guests in absolute awe. True professionals.",
        image: "/assets/images/testimonial/testimonial-one-client-1-4.jpg"
    },
];

export default function Testimonial() {
    const enableLoop = testimonials.length > 2;

    return (
        <section className="testimonial-one" style={{ background: '#0e081f', padding: '120px 0' }}>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" style={{ color: '#00f0ff' }}>CLIENT REVIEWS</span>
                    </div>
                    <h2 className="section-title__title section-title__title--two" style={{ color: '#fff' }}>
                        HEAR FROM OUR <br /> EVENT PARTNERS
                    </h2>
                </div>
                <div className="testimonial-one__carousel-box">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={1}
                        spaceBetween={0}
                        speed={2000}
                        loop={enableLoop}
                        autoplay={{ delay: 9000 }}
                        pagination={{
                            el: ".swiper-dot-style1",
                            type: "bullets",
                            clickable: true
                        }}
                        navigation={{
                            nextEl: '.swiper-button-prev1',
                            prevEl: '.swiper-button-next1',
                        }}
                        breakpoints={{
                            0: { spaceBetween: 0, slidesPerView: 1 },
                            375: { spaceBetween: 0, slidesPerView: 1 },
                            575: { spaceBetween: 0, slidesPerView: 1 },
                            768: { spaceBetween: 30, slidesPerView: 2 },
                            992: { spaceBetween: 30, slidesPerView: 2 },
                            1200: { spaceBetween: 30, slidesPerView: 2 },
                            1320: { spaceBetween: 30, slidesPerView: 2 },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} style={{ height: 'auto' }}>
                                <div className="testimonial-one__single" style={{ height: '100%', background: '#140c26', border: '1px solid rgba(224, 118, 255, 0.15)', borderRadius: '12px', padding: '40px', display: 'flex', flexDirection: 'column' }}>
                                    <div className="testimonial-one__client-info-and-review">
                                        <div className="testimonial-one__client-info">
                                            <div className="testimonial-one__client-img" style={{ borderRadius: '50%', border: '2px solid #e076ff' }}>
                                                <img src={testimonial.image} alt={testimonial.name} />
                                            </div>
                                            <div className="testimonial-one__client-content">
                                                <h4 className="testimonial-one__client-name" style={{ marginBottom: '5px' }}>
                                                    <span style={{ color: '#fff' }}>{testimonial.name}</span>
                                                </h4>
                                                <p className="testimonial-one__sub-title" style={{ color: '#00f0ff', fontSize: '13px' }}>{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-one__review">
                                            {[...Array(5)].map((_, i) => (
                                                <span className="icon-star" key={i} style={{ color: '#ffb300' }}></span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="testimonial-one__text" style={{ color: '#b9aed3', fontStyle: 'italic', lineHeight: '1.8', flexGrow: 1 }}>"{testimonial.text}"</p>
                                    <div className="testimonial-one__quote" style={{ opacity: 0.2 }}>
                                        <span className="icon-quote"></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="testimonial-one__nav" style={{ display: 'none' }}>
                        <div className="swiper-button-next1">
                            <i className="icon-angle-left"></i>
                        </div>
                        <div className="swiper-button-prev1">
                            <i className="icon-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
