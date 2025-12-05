import React from 'react';
import Banner from '../components/Banner/Banner';
import BannerCarousel from '../components/Banner/BannerCarousel';
import Whatweoffer from '../components/c2cservices/Whatweoffer/Whatweoffer';
import placementImage from "../assets/Images/Banner/18-1.webp";
import WhyChoose from '../components/c2cservices/WhyChoose/WhyChoose';
import TestimonialSection from '../components/c2cservices/Testimonials/Testimonials';
import CollegeClients from '../components/c2cservices/TrustedBy/TrustedBy';

import WhyChooseImage from "../assets/Images/Banner/ChooseUsPic.png";
import WhatImage from "../assets/Images/Banner/offer1.png";
import InquiryFormSerivies from '../components/InquiryFormSerivies';
import noprofile from "../assets/Images/testimonial-1.jpg";



const Placement_Support = () => {
  const offerHeading = "What We Offer";
  const offerPoints = [
    "End-to-end drive coordination",
    "Company sourcing based on college requirement",
    "Direct HR outreach & scheduling",
    "Opportunities from top-tier, service-based & product-based companies",
  ];
  return (
    <div>
      <BannerCarousel />
      <Banner
        badgeText="Campus to Corporate Services"
        title="Placement Support"
        subtitle="Bridging Institutions & Industry"
        description="We bridge the gap between institutions and industry by enabling seamless placement opportunities tailored to your students' career goals."
        primaryBtnText="Explore Now"
        primaryBtnLink="#get-started"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="#contact"
        image={placementImage} // ✅ pass image here
      />

      <div id="get-started">
        <Whatweoffer heading={offerHeading} points={offerPoints} image={WhatImage} />
      </div>


      <WhyChoose
        heading="Why Choose Infoziant"
        description="With our expansive industry network and agile coordination, we bring in companies offering CTCs up to ₹1.02 Cr and align them with your drive schedule. Your students gain access to curated placement opportunities that match their skillsets, while your institution stays ahead with a strong placement track record."
        points={[
          "Partnered with over 37+ leading colleges across the country.",
          "More than 115 reputed companies recruit from each partnered college.",
          "Successfully placed over 7510+ students in top organizations.",
          "CTC packages offered go as high as ₹1.02 Cr from premier companies.",
          "Built an expansive industry network to drive top-tier placements.",
          "Ensured agile coordination with institutions for timely placements.",
          "Curated opportunities that align with each student’s strengths and aspirations."
        ]}
        image={WhyChooseImage}
      />

      <CollegeClients
        heading="Our Educational Partners"
        description="We're proud to collaborate with leading educational institutions that trust our services to empower their digital presence."
      />




      


      <InquiryFormSerivies />




    </div>
  );
};

export default Placement_Support;
