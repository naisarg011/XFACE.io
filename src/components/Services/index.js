import React from "react";
import I1 from './../../images/svg-2.svg'
import I2 from './../../images/m1.svg'
import I3 from './../../images/svg-7.svg'
import I4 from './../../images/svg-6.svg'
import {
  ServiceContainer,
  ServiceH1,
  ServiceWrapper,
  ServiceCard,
  ServiceIcon,
  ServiceH2,
  ServiceP,
} from "./ServiceElemet";
const Service = () => {
  return (
    <ServiceContainer id="services">
      <ServiceH1>OUR SERVICES</ServiceH1>
      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src={I1} />
          <ServiceH2>Mobile Apps</ServiceH2>
          <ServiceP>We will create an app for your requirments.</ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={I2} />
          <ServiceH2> Websites</ServiceH2>
          <ServiceP>
            You can get amazing websites for your office or personl uses.
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={I3} />
          <ServiceH2>Photos/Videos</ServiceH2>
          <ServiceP>
            An amazing Photoshop wordk or video editing work on your
            Phots/videos
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={I4} />
          <ServiceH2>penetration testing</ServiceH2>
          <ServiceP>
            Checking of loop holes on your Websites/Apps.
          </ServiceP>
        </ServiceCard>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Service;
