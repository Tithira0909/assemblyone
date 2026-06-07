import Layout from "@/components/layout/Layout"
import CompanyBanner from "@/components/sections/CompanyBanner"
import UpcomingEventHero from "@/components/sections/UpcomingEventHero"
// import EventOne from "@/components/common/EventOne"
// import FeatureOne from "@/components/sections/home3/FeatureOne"
// import Testimonial from "@/components/sections/home2/Testimonial"

export default function Home() {
    // const aboutPoints = [
    //   {
    //     icon: "icon-air-horn",
    //     heading: "Expert Event Production",
    //     description: "From massive live concerts to exclusive corporate events, we manage all technical and creative aspects flawlessly."
    //   },
    //   {
    //     icon: "icon-party-blower",
    //     heading: "State-of-the-art Technology",
    //     description: "We utilize world-class L-Acoustics sound rigs and immersive LED visual setups for uncompromised quality."
    //   }
    // ];

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <div id="home">
                    <CompanyBanner />
                </div>
                
                <div id="upcoming-events">
                    <UpcomingEventHero />
                </div>

                {/* <div id="about" style={{ background: '#0b0518', padding: '120px 0 0' }}>
                    <EventOne
                        tagline="WHO WE ARE"
                        title="SRI LANKA'S PREMIER EVENT PRODUCTION HOUSE"
                        buttonText="Contact Us Today"
                        points={aboutPoints}
                        imageUrl="/assets/images/assembly/media_6.jpg" // Using a cool event image
                    />
                </div> */}

                {/* <div id="services">
                    <FeatureOne />
                </div> */}

                {/* <div id="testimonials">
                    <Testimonial />
                </div> */}
            </Layout>
        </>
    )
}