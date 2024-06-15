import React, { useEffect } from "react";
import NavbarComponent from "../navbar/NavbarComponent";
import HeroWrapComponent from "../hello-world/HelloWorldComponent";
import AboutSectionComponent from "../about/AboutSectionComponent";
import ContactSectionComponent from "../contact/ContactSectionComponent";
import FooterComponent from "../footer/FooterComponent";
import { main1, main2 } from "../../common/js/main";
import CourseIntroductionComponent from "../course-introduction/CourseIntroductionComponent";
import CounterSectionComponent from "../counter/CounterSectionComponent";
import CourseReviewSectionComponent from "../course-review/CourseReviewSectionComponent";
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
        <CounterSectionComponent />
        <CourseIntroductionComponent />
      </div>
      <CourseReviewSectionComponent />
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
