import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import ScheduleThree from "@/components/sections/home3/ScheduleThree"
import BuyTicket from "@/components/sections/home3/BuyTicket"
import TicketOne from "@/components/sections/home3/TicketOne "

export default function EventPage() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <div id="event-home">
                    <Banner />
                </div>
                
                <div id="timeline">
                    <ScheduleThree />
                </div>

                <div id="booking">
                    <BuyTicket />
                </div>

                <div id="pricing">
                    <TicketOne />
                </div>
            </Layout>
        </>
    )
}
