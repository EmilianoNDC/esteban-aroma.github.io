import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import WeddingDate2 from '../../components/WeddingDate2/WeddingDate2';
import RsvpSectionS7 from '../../components/RsvpSectionS7/RsvpSectionS7';
import EventSection from '../../components/EventSection/EventSection';

const RsvpPage6 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'R.S.V.P'} pagesub={'RSVP'} />
            <WeddingDate2 pbClass={'pb-120'}/>
            <EventSection/>
            <RsvpSectionS7 bg={'/images/rsvp/bg.jpg'} rClass={'pt-120'}/>

            <PartnerSection pClass={'pb-120 pt-0'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage6;
