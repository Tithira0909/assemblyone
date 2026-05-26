import Layout from "@/components/layout/Layout"
import ServicesOne from "@/components/sections/home1/ServicesOne"
import FeatureOne from "@/components/sections/home3/FeatureOne"

export default function ServicesPage() {
    return (
        <>
            <Layout
                headerStyle={3}
                footerStyle={1}
                breadcrumbTitle="Our Services"
                breadcrumbBg="/assets/images/backgrounds/services-page-banner.jpg"
            >
                <div id="services-hero">
                    <ServicesOne />
                </div>
                
                <div id="technical-capabilities">
                    <FeatureOne />
                </div>
            </Layout>
        </>
    )
}
