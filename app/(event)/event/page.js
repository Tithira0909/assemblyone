import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/RawayaBanner"
import ArtistSlider from "@/components/sections/ArtistSlider"
import EventMainPoster from "@/components/sections/EventMainPoster"
import TicketPricing from "@/components/sections/TicketPricing"

export default function EventPage() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <div id="event-home">
                    <Banner />
                </div>

                <div id="main-poster">
                    <EventMainPoster />
                </div>
                
                <div id="artist-slider">
                    <ArtistSlider />
                </div>

                <div id="pricing">
                    <TicketPricing />
                </div>
            </Layout>
        </>
    )
}
