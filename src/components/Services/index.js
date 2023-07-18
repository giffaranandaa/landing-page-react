import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import svg1 from "../../images/svg3.svg";
import svg2 from "../../images/svg4.svg";
import svg3 from "../../images/svg1.svg";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={svg1} />
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>
              We help reduce your fees and incarease your overall revenuel.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={svg2} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              You can access our plarform online anywhere in the world
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={svg3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlock out special membership card that return 5% cash back.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
