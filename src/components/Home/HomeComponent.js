import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NavbarComponent from "../navbar/NavbarComponent";
import HeroWrapComponent from "../hero-wrap/HeroWrapComponent";
import AboutSectionComponent from "../about-section/AboutSectionComponent";
import SectionCounterComponent from "../section-counter/SectionCounterComponent";
import ChapterSectionComponent from "../chapter-section/ChapterSectionComponent";
import TestimonialSectionComponent from "../testimonial-section/TestimonialSectionComponent";
import ProjectsSectionComponent from "../projects-section/ProjectsSectionComponent";
import AuthorSectionComponent from "../author-section/AuthorSectionComponent";
import ContactSectionComponent from "../contact-section/ContactSectionComponent";
import FooterComponent from "../footer/FooterComponent";
import { main1, main2 } from "../../common/js/main";
function HomeComponent(props) {
  useEffect(() => {
    main1();
    main2();
  }, []);

  return (
    <div>
      <div className="max-w-[1140px] m-auto ">
        <NavbarComponent />
        <HeroWrapComponent />
        <AboutSectionComponent />
        <SectionCounterComponent />
        <ChapterSectionComponent />
      </div>
      <TestimonialSectionComponent />
      <div className="max-w-[1140px] m-auto ">
        {/* <ProjectsSectionComponent /> */}
        {/* <AuthorSectionComponent /> */}
        <ContactSectionComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

HomeComponent.propTypes = {};

export default HomeComponent;
